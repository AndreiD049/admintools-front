import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  Checkbox,
  CommandButton, IconButton, List, Separator, Stack, Text, TextField,
} from '@fluentui/react';
import { makeStyles } from '@fluentui/react-theme-provider';
import AppraisalService from '../../../../../services/AppraisalService';

const useStyles = makeStyles((theme) => ({
  root: {
    border: `1px solid ${theme.palette.themeDarkAlt}`,
    padding: theme.spacing.m,
  },
  header: {
    textAlign: 'center',
  },
  subHeader: {
    textAlign: 'center',
    color: theme.palette.neutralTertiary,
  },
}));

const HomePlannedItemsDisplay = ({ items, setItems }) => {
  const classes = useStyles();
  const [newItemVal, setNewItemVal] = useState('');

  const handleInputChange = (e) => {
    setNewItemVal(e.target.value);
  };

  const setType = async (item, type) => {
    const result = await AppraisalService.updateItem({ ...item, type });
    setItems((prev) => {
      const copy = { ...item, type: result.type };
      return prev.map((i) => (i.id === item.id ? copy : i));
    });
  };

  const checkboxChangeHandler = (item) => (e) => {
    if (e.target.checked) {
      setType(item, 'Achieved');
    } else {
      setType(item, 'Planned');
    }
  };

  const addItem = async (content) => {
    if (content !== '') {
      const item = {
        content,
        createdDate: new Date(),
        modifiedDate: new Date(),
        status: 'Active',
        type: 'Planned',
        periodId: null,
        relatedItemId: null,
      };
      const result = await AppraisalService.addOrphan(item);
      setItems((prev) => prev.concat(result));
      setNewItemVal('');
    }
  };

  const removeItem = async (item) => {
    await AppraisalService.deleteItem(item.id);
    setItems((prev) => prev.filter((i) => i.id !== item.id));
  };

  const renderCell = (item) => (
    <Stack horizontalAlign="start" verticalAlign="center" horizontal>
      <Checkbox name={item.content} checked={item.type === 'Achieved'} onChange={checkboxChangeHandler(item)} />
      <Stack.Item grow={1}>
        <Text variant="medium">{item.content}</Text>
      </Stack.Item>
      <CommandButton iconProps={{ iconName: 'ChromeClose' }} disabled={item.relatedItemId !== null} onClick={() => removeItem(item)} />
    </Stack>
  );

  return (
    <div className={classes.root}>
      <Stack>
        <Text block className={classes.header} variant="mediumPlus">Planned items</Text>
        <Text block className={classes.subHeader} variant="medium">Here you will see items planned over past periods</Text>
        <Separator />
        <List items={items} onRenderCell={renderCell} />
        <Separator />
        <form
          onSubmit={(e) => {
            e.preventDefault();
            addItem(newItemVal);
          }}
        >
          <TextField
            autoComplete="off"
            value={newItemVal}
            onChange={handleInputChange}
            suffix="Add"
            onRenderSuffix={({ suffix }) => (<CommandButton type="submit" default iconProps={{ iconName: 'Add' }}>{suffix}</CommandButton>)}
          />
        </form>
      </Stack>
    </div>
  );
};

HomePlannedItemsDisplay.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  setItems: PropTypes.func.isRequired,
};

export default HomePlannedItemsDisplay;
