import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Icon, Text, concatStyleSets, makeStyles } from '@fluentui/react';
import { Collapse } from 'react-collapse';
import clsx from 'clsx';
import './styles.css';

const defstyles = (theme, compact = false) => ({
  root: {
    boxShadow: theme.effects.elevation4,
    width: '100%',
    border: `1px solid ${theme.palette.themeLight}`,
  },
  container: {
    outline: 'none',
    borderTop: `1px solid ${theme.palette.themeLight}`,
    '&:first-child': {
      borderTop: 'none',
    },
    '& > div:first-child': {
      outline: 'none',
    },
  },
  header: {
    cursor: 'pointer',
    padding: `${compact ? '8px' : '16px'}`,
  },
  headerIcon: {
    fontSize: '0.7em',
    transition: '.2s transform',
  },
  headerIconOpen: {
    transform: 'rotate(90deg)',
    transformOrigin: 'center',
  },
  itemContent: {
    padding: `${compact ? '8px' : '16px'}`,
  },
});

/**
 * DEFAULT RENDER FUNCTIONS
 */

const defaultRenderHeaderFold = (item, isOpen, classes) => (
  <span
    style={{
      paddingRight: '8px',
    }}
  >
    <Icon
      className={clsx({
        [classes.headerIcon]: true,
        [classes.headerIconOpen]: isOpen,
      })}
      iconName="ChevronRightMed"
    />
  </span>
);

const defaultRenderHeaderText = (item) => (
  <Text variant="medium">{item.text}</Text>
);

const defaultRenderItemContent = (item) => <p>{item.text}</p>;

/*
      Header has:
       ____________________________
      | (Fold button)             |
      | >    Header text          |
      |___________________________|
*/
const defaultRenderHeader = (item, headerProps, classProps) => {
  const classes = classProps;
  return (
    <div
      style={{
        display: 'flex',
        flexFlow: 'row nowrap',
        alignItems: 'center',
      }}
    >
      {headerProps.onRenderHeaderFold(item, headerProps.isOpen, classes)}
      {headerProps.onRenderHeaderText(item, headerProps.isOpen, classes)}
    </div>
  );
};

const AccordionItemContainer = ({
  item,
  headerProps,
  onRenderItem,
  isOpen,
  onToggle,
  classes,
}) => (
  <div className={classes.container}>
    <div
      role="menuitem"
      tabIndex={0}
      onClick={(evt) => onToggle(evt, item, !isOpen)}
      onKeyPress={(evt) => onToggle(evt, item, !isOpen)}
      className={classes.header}
    >
      {headerProps.onRenderHeader(item, { ...headerProps, isOpen }, classes)}
    </div>
    <Collapse isOpened={isOpen}>
      <div className={classes.itemContent}>{onRenderItem(item)}</div>
    </Collapse>
  </div>
);

/**
 * Accordion Component
 * onRenderHeader - renders the whole header
 * onRenderHeaderFold - custom render for the fold item
 * onRenderHeaderText - customer render for the header text content
 */
const Accordion = ({
  items,
  getKey,
  headerProps,
  onRenderItem,
  exclusive,
  styles,
  compact,
  onToggle,
}) => {
  // Concatenate user provided styles with default styles if needed
  const classes = makeStyles((theme) =>
    concatStyleSets(defstyles(theme, compact), styles)
  )();
  const [open, setOpen] = useState(() => {
    const result = {};
    items.forEach((item) => {
      const key = getKey(item);
      result[key] = Boolean(item.isOpen) || false;
    });
    return result;
  });
  const defHeaderProps = {
    onRenderHeader: defaultRenderHeader,
    onRenderHeaderFold: defaultRenderHeaderFold,
    onRenderHeaderText: defaultRenderHeaderText,
    ...headerProps,
  };

  const handleSetOpen = (item) => {
    if (!exclusive) {
      return (evt, i, val) =>
        setOpen((prev) => ({
          ...prev,
          [getKey(item)]: val,
        }));
    }
    return (evt, i, val) =>
      setOpen((prev) => {
        const copy = { ...prev };
        const itemKey = getKey(item);
        Object.keys(copy).forEach((key) => {
          copy[key] = key === itemKey ? val : false;
        });
        return copy;
      });
  };

  useEffect(() => {
    setOpen(() => {
      const result = {};
      items.forEach((item) => {
        const key = getKey(item);
        result[key] = Boolean(item.isOpen) || false;
      });
      return result;
    });
  }, [items, getKey]);

  return (
    <div className={classes.root}>
      {items.map((item) => (
        <AccordionItemContainer
          item={item}
          headerProps={defHeaderProps}
          onRenderItem={onRenderItem}
          isOpen={Boolean(open[getKey(item)])}
          setOpen={handleSetOpen(item)}
          getKey={getKey}
          classes={classes}
          key={getKey(item)}
          onToggle={onToggle || handleSetOpen(item)}
        />
      ))}
    </div>
  );
};

Accordion.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.string,
      text: PropTypes.string,
      header: PropTypes.string,
      isOpen: PropTypes.bool,
    })
  ).isRequired,
  getKey: PropTypes.func,
  onRenderItem: PropTypes.func,
  exclusive: PropTypes.bool,
  headerProps: PropTypes.shape({
    onRenderHeader: PropTypes.func,
    onRenderHeaderFold: PropTypes.func,
    onRenderHeaderText: PropTypes.func,
  }),
  styles: PropTypes.shape({
    root: PropTypes.shape({}),
    container: PropTypes.shape({}),
    header: PropTypes.shape({}),
    headerIcon: PropTypes.shape({}),
    headerIconOpen: PropTypes.shape({}),
    itemContent: PropTypes.shape({}),
  }),
  compact: PropTypes.bool,
  onToggle: PropTypes.func,
};

Accordion.defaultProps = {
  getKey: (item) => item.key,
  onRenderItem: defaultRenderItemContent,
  exclusive: false,
  headerProps: {
    onRenderHeader: defaultRenderHeader,
    onRenderHeaderFold: defaultRenderHeaderFold,
    onRenderHeaderText: defaultRenderHeaderText,
  },
  styles: {},
  compact: false,
  onToggle: null,
};

AccordionItemContainer.propTypes = {
  item: PropTypes.shape({}).isRequired,
  onRenderItem: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
  headerProps: PropTypes.shape({
    onRenderHeader: PropTypes.func,
    onRenderHeaderFold: PropTypes.func,
    onRenderHeaderText: PropTypes.func,
  }),
  classes: PropTypes.shape({
    root: PropTypes.string,
    container: PropTypes.string,
    header: PropTypes.string,
    headerIcon: PropTypes.string,
    headerIconOpen: PropTypes.string,
    itemContent: PropTypes.string,
  }).isRequired,
  onToggle: PropTypes.func.isRequired,
};

AccordionItemContainer.defaultProps = {
  headerProps: {
    onRenderHeader: defaultRenderHeader,
    onRenderHeaderFold: defaultRenderHeaderFold,
    onRenderHeaderText: defaultRenderHeaderText,
  },
};

export default Accordion;
