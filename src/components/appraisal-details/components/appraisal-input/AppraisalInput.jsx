import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import {
  ActionButton,
  Callout,
  DefaultButton,
  makeStyles,
  Separator,
  Stack,
  Text,
  TextField,
} from '@fluentui/react';
import { useScreenClass } from 'react-grid-system';
import { useParams } from 'react-router-dom';
import {
  validate, perform, not, and, or,
} from '../../../../services/validators';

const useStyles = makeStyles((theme) => ({
  calloutPrefix: {
    boxShadow: theme.effects.elevation64,
  },
}));

const CustomPrefix = ({ children, id }) => {
  const classes = useStyles();
  const [isCalloutVisible, setIsCalloutVisible] = useState(false);

  return (
    <>
      <ActionButton
        id={`prefix-${id}`}
        tabIndex={-1}
        iconProps={{
          iconName: 'Info',
        }}
        onClick={() => setIsCalloutVisible((prev) => !prev)}
      />
      {
        isCalloutVisible
          ? (
            <Callout
              className={classes.calloutPrefix}
              target={`#prefix-${id}`}
              setInitialFocus
              onDismiss={() => setIsCalloutVisible(false)}
              role="alertdialog"
            >
              <Stack
                horizontalAlign="start"
                tokens={{
                  childrenGap: 4,
                }}
                style={{
                  padding: '20px',
                }}
              >
                {children}
                <DefaultButton onClick={() => setIsCalloutVisible(false)}>Close</DefaultButton>
              </Stack>
            </Callout>
          )
          : null
      }
    </>
  );
};

const CustomSuffix = ({ menuProps }) => (
  <ActionButton
    tabIndex={-1}
    // onRenderMenuIcon={() => null}
    iconProps={{
      iconName: 'MoreVertical',
    }}
    menuProps={menuProps}
  />
);

const AppraisalInput = ({
  item,
  idx,
  changeHandler,
  blurHandler,
  removeHandler,
  changeTypeHandler,
  canInsert,
  canUpdate,
  canDelete,
}) => {
  const sc = useScreenClass();
  let multilineTrashold = 80;
  if (sc === 'sm' || sc === 'xl') {
    multilineTrashold = 50;
  } else if (sc === 'xs' || sc === 'md') {
    multilineTrashold = 25;
  }
  const [value, setValue] = useState({ ...item });
  const [modified, setModified] = useState(false);
  const [multiline, setMultiline] = useState(item.content.length > multilineTrashold);
  const { userId } = useParams();
  const [validations, setValidations] = useState({
    isRelated: false,
    isDeletable: false,
    isFinished: false,
    inputEditable: true,
  });

  useEffect(() => {
    let mounted = true;
    async function run() {
      const calls = [
        perform(validate.itemRelated(item), false),
        perform(validate.itemStatus(item, 'Finished'), false),
        perform(and([
          not(validate.itemRelated(item)),
          or([
            not(validate.isTruthy(userId)),
            validate.isTruthy(userId),
          ]),
        ]), false),
      ];
      const [checkRelated, checkFinished, checkEditable] = await Promise.all(calls);
      const isRelated = checkRelated.result;
      const isFinished = checkFinished.result;
      const inputEditable = (canInsert || canUpdate)
      && checkEditable.result;
      const isDeletable = canDelete && !isRelated;
      if (mounted) {
        setValidations({
          isRelated,
          isDeletable,
          isFinished,
          inputEditable,
        });
      }
    }
    setValue({ ...item });
    run();
    return () => {
      mounted = false;
    };
  }, [item, canInsert, canUpdate, canDelete, userId]);

  const handleBlur = async (e) => {
    e.persist();
    const mod = modified;
    setModified(false);
    await blurHandler(value, idx, mod);
  };

  const handleChange = (e) => {
    if (item.type !== 'Feedback') {
      const newMultiline = e.target.value.length > multilineTrashold;
      if (multiline !== newMultiline) {
        setMultiline(newMultiline);
      }
    }
    setValue({ ...item, content: e.target.value });
    changeHandler({ ...value, content: e.target.value }, idx, !modified);
    setModified(true);
  };

  const handleTypeChange = (type) => async () => {
    if (item.id !== 0) { await changeTypeHandler(item.id, type); }
  };

  const handleDelete = async (e) => {
    e.persist();
    setValue({ ...item, content: '' });
    await removeHandler(value, idx);
    setModified(false);
  };

  const menuProps = {
    shouldFocusOnMount: true,
    shouldFocusOnContainer: true,
    items: [],
  };

  if (item.type.indexOf('Planned') !== -1) {
    menuProps.items.push({
      key: 'moveAchieved',
      text: 'Move to Achieved',
      iconProps: {
        iconName: 'ChevronLeftSmall',
      },
      onClick: handleTypeChange(item.type.replace('Planned', 'Achieved')),
    });
  }

  if (item.type.indexOf('Achieved') !== -1) {
    menuProps.items.push({
      key: 'movePlanned',
      text: 'Move to Planned',
      iconProps: {
        iconName: 'ChevronRightSmall',
      },
      onClick: handleTypeChange(item.type.replace('Achieved', 'Planned')),
    });
  }

  menuProps.items.push({
    key: 'delete',
    text: 'Delete',
    iconProps: {
      iconName: 'Delete',
    },
    disabled: !validations.isDeletable,
    onClick: handleDelete,
  });

  const tooltip = (
    <Stack
      horizontalAlign="start"
      tokens={{
        childrenGap: '3',
      }}
    >
      {
        validations.isRelated
          ? (
            <>
              <Stack.Item>
                <Text variant="medium">
                  This item was added automatically from previous appraisals
                </Text>
              </Stack.Item>
              <Stack.Item align="stretch">
                <Separator />
              </Stack.Item>
            </>
          )
          : null
      }
      <Text variant="medium">
        <strong>Created user:</strong>
        {' '}
        {item.createdUser && item.createdUser.username}
      </Text>
      <Text variant="medium">
        <strong>Created date:</strong>
        {' '}
        {item.createdDate && new Date(item.createdDate).toLocaleString()}
      </Text>
      <Stack.Item align="stretch">
        <Separator />
      </Stack.Item>
      {
        item.modifiedUser
          ? (
            <>
              <Stack.Item>
                <Text variant="medium">
                  <strong>Modified user:</strong>
                  {' '}
                  {item.modifiedUser && item.modifiedUser.username}
                </Text>
              </Stack.Item>
            </>
          )
          : null
      }
      {
        item.modifiedUser
          ? (
            <>
              <Stack.Item>
                <Text variant="medium">
                  <strong>Modified date:</strong>
                  {' '}
                  {item.modifiedDate && new Date(item.modifiedDate).toLocaleString()}
                </Text>
              </Stack.Item>
              <Stack.Item align="stretch">
                <Separator />
              </Stack.Item>
            </>
          )
          : null
      }
    </Stack>
  );

  return item.type !== 'Feedback'
    ? (
      <TextField
        id={`app-item-${item.type.toLowerCase()}-${idx}`}
        value={value.content}
        resizable
        multiline={multiline}
        styles={{
          prefix: {
            backgroundColor: 'transparent',
            padding: '0',
          },
          suffix: {
            backgroundColor: 'transparent',
            padding: '0',
          },
          field: {
            padding: '0',
          },
        }}
        onRenderPrefix={() => (item.id !== 0 ? <CustomPrefix id={`${item.type}-${idx}`}>{tooltip}</CustomPrefix> : null)}
        onRenderSuffix={() => (item.id !== 0 ? <CustomSuffix menuProps={menuProps} /> : null)}
        autoAdjustHeight
        autoComplete="off"
        onChange={handleChange}
        onBlur={handleBlur}
        readOnly={!validations.inputEditable}
        iconProps={validations.isRelated ? {
          iconName: 'History',
          style: {
            position: 'relative',
            alignSelf: 'center',
            bottom: 0,
            right: 0,
            paddingRight: 0,
            marginLeft: '8px',
          },
        } : null}
      />
    )
    : (
      <TextField
        id={`app-item-${item.type.toLowerCase()}-${idx}`}
        value={value.content}
        multiline
        autoAdjustHeight
        autoComplete="off"
        onChange={handleChange}
        onBlur={handleBlur}
        disabled={!validations.inputEditable}
      />
    );
};

AppraisalInput.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    status: PropTypes.string,
    type: PropTypes.string,
    content: PropTypes.string,
    relatedItemId: PropTypes.string,
    createdUser: PropTypes.oneOfType([PropTypes.string, PropTypes.shape({
      id: PropTypes.string,
      username: PropTypes.string,
    })]),
    createdDate: PropTypes.oneOfType([PropTypes.string, PropTypes.objectOf(Date)]),
    modifiedUser: PropTypes.shape({
      id: PropTypes.string,
      username: PropTypes.string,
    }),
    modifiedDate: PropTypes.string,
  }).isRequired,
  idx: PropTypes.number.isRequired,
  changeHandler: PropTypes.func.isRequired,
  blurHandler: PropTypes.func.isRequired,
  removeHandler: PropTypes.func.isRequired,
  changeTypeHandler: PropTypes.func.isRequired,
  canInsert: PropTypes.bool.isRequired,
  canUpdate: PropTypes.bool.isRequired,
  canDelete: PropTypes.bool.isRequired,
};

CustomPrefix.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  children: PropTypes.any.isRequired,
  id: PropTypes.string.isRequired,
};

CustomSuffix.propTypes = {
  menuProps: PropTypes.shape({}).isRequired,
};

export default AppraisalInput;
