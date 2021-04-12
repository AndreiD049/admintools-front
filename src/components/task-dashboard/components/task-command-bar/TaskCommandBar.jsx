import React, { useContext, useMemo } from 'react';
import PropTypes from 'prop-types';
import {
  Checkbox, CommandBar, FontIcon, makeStyles, Stack,
} from '@fluentui/react';
import { useScreenClass } from 'react-grid-system';
import UserCombobox from '../../../shared/user-combobox';
import constants from '../../../../utils/constants';
import GlobalContext from '../../../../services/GlobalContext';

const useStyles = makeStyles((theme) => ({
  searchIcon: {
    color: theme.palette.themePrimary,
    marginLeft: theme.spacing.s1,
    marginRight: theme.spacing.s1,
  },
  marginRight: {
    marginRight: theme.spacing.l1,
  },
}));

const TaskCommandBar = ({
  handleNew,
  users,
  selectedUsers,
  setSelectedUsers,
  showFinished,
  setShowFinished,
  showCancelled,
  setShowCancelled,
  selectedTaskId,
  moveTaskDialog,
}) => {
  const global = useContext(GlobalContext);
  const sc = useScreenClass();
  const classes = useStyles();
  const canUpdateOtherTasks = useMemo(() => global
    .Authorize(constants.securities.TASK.code, constants.securities.TASK.grants.updateOther),
  [global]);

  return (
    <CommandBar
      items={[
        {
          key: 'new',
          text: 'New',
          iconProps: {
            iconName: 'Add',
          },
          onClick: handleNew,
        },
        {
          key: 'move',
          text: 'Move',
          disabled: selectedTaskId === null || !canUpdateOtherTasks,
          iconProps: {
            iconName: 'Move',
          },
          onClick: async () => {
            const answer = await moveTaskDialog.show();
            return answer;
          },
        },
        {
          key: 'edit',
          text: 'Edit',
          disabled: selectedTaskId === null || !canUpdateOtherTasks,
          iconProps: {
            iconName: 'Edit',
          },
          onClick: () => null,
        },
      ]}
      farItems={[
        {
          key: 'users',
          text: 'Users',
          iconProps: {
            iconName: 'ProfileSearch',
          },
          onRender: () => (
            <Stack
              horizontal
              horizontalAlign="center"
              verticalAlign="center"
              className={classes.marginRight}
            >
              <FontIcon className={classes.searchIcon} iconName="ProfileSearch" />
              <UserCombobox
                users={users}
                selectedKey={selectedUsers}
                setSelectedUsers={setSelectedUsers}
                multiSelect
                openOnKeyboardFocus
              />
            </Stack>
          ),
        },
        {
          key: 'showFinished',
          iconProps: {
            iconName: 'RedEye',
          },
          onRender: () => (
            <Stack
              tokens={{ childrenGap: 4 }}
              horizontalAlign="start"
              verticalAlign="center"
            >
              <Checkbox
                label={['xs', 'sm'].indexOf(sc) !== -1 ? 'F' : 'Show Finished'}
                checked={showFinished}
                onChange={(ev, checked) => setShowFinished(checked)}
              />
              <Checkbox
                label={['xs', 'sm'].indexOf(sc) !== -1 ? 'C' : 'Show Cancelled'}
                checked={showCancelled}
                onChange={(ev, checked) => setShowCancelled(checked)}
              />
            </Stack>
          ),
        },
      ]}
    />
  );
};

TaskCommandBar.propTypes = {
  handleNew: PropTypes.func.isRequired,
  users: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    username: PropTypes.string,
  })).isRequired,
  selectedUsers: PropTypes.arrayOf(PropTypes.string).isRequired,
  setSelectedUsers: PropTypes.func.isRequired,
  showFinished: PropTypes.bool.isRequired,
  setShowFinished: PropTypes.func.isRequired,
  showCancelled: PropTypes.bool.isRequired,
  setShowCancelled: PropTypes.func.isRequired,
  selectedTaskId: PropTypes.string,
  moveTaskDialog: PropTypes.shape({
    show: PropTypes.func,
  }).isRequired,
};

TaskCommandBar.defaultProps = {
  selectedTaskId: null,
};

export default TaskCommandBar;
