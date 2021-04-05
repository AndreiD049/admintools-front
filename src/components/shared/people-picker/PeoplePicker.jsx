/* eslint-disable react/jsx-props-no-spreading */
import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import {
  BasePickerListBelow, Checkbox, Label, makeStyles, Persona, PersonaSize, Stack, Text,
} from '@fluentui/react';

const useStyles = makeStyles((theme) => ({
  root: {},
  picker: {
    '& input': {
      backgroundColor: theme.palette.white,
      color: theme.palette.neutralPrimary,
    },
  },
  suggestionRoot: {
    padding: theme.spacing.s2,
  },
  suggestionCheck: {
    marginRight: theme.spacing.s2,
    padding: theme.spacing.s2,
    outline: 'none',
  },
  suggestionText: {
    textTransform: 'capitalize',
  },
  itemRoot: {
    marginTop: 4,
    '&:first-child': {
      marginTop: 8,
    },
  },
}));

const PeoplePicker = ({
  label, options, onSelect, onRemove, selected, disabled, ...props
}) => {
  const classes = useStyles();
  const selectedSet = useMemo(() => new Set(selected.map((s) => s.key)), [selected]);

  const handleCheckboxClick = (item) => (ev) => {
    ev.preventDefault();
    ev.stopPropagation();
    if (selectedSet.has(item.key)) {
      return onRemove(item);
    }
    return onSelect(item);
  };

  const renderSuggestionsItem = (item) => (
    <Stack
      key={item.key}
      className={classes.suggestionRoot}
      horizontalAlign="start"
      verticalAlign="center"
      horizontal
    >
      <span
        className={classes.suggestionCheck}
        role="button"
        tabIndex={-1}
        onKeyDown={(evt) => (evt.key === 'Space'
          ? renderSuggestionsItem(item)()
          : null)}
        onClick={handleCheckboxClick(item)}
      >
        <Checkbox
          checked={selectedSet.has(item.key)}
        />
      </span>
      <Text className={classes.suggestionText} variant="mediumPlus">{item.data.username}</Text>
    </Stack>
  );

  const renderItem = (details) => (
    <Stack
      className={classes.itemRoot}
      key={details.item.id}
      horizontalAlign="start"
      verticalAlign="center"
      horizontal
    >
      <Persona text={details.item.data.username} size={PersonaSize.size24} />
    </Stack>
  );

  const handleSelect = (item) => {
    if (selectedSet.has(item.key)) {
      return onRemove(item);
    }
    return onSelect(item);
  };

  return (
    <div {...props}>
      { label && (<Label>{label}</Label>) }
      <BasePickerListBelow
        inputProps={{
          placeholder: 'Select...',
        }}
        disabled={disabled}
        className={classes.picker}
        onRenderSuggestionsItem={renderSuggestionsItem}
        onResolveSuggestions={(filter) => options
          .filter((o) => o.data.username.toLowerCase().indexOf(filter.toLowerCase()) !== -1)}
        resolveDelay={300}
        onRenderItem={renderItem}
        selectedItems={selected}
        onEmptyResolveSuggestions={() => options}
        onItemSelected={handleSelect}
        pickerCalloutProps={{
          preventDismissOnScroll: true,
        }}
      />
    </div>
  );
};

PeoplePicker.propTypes = {
  label: PropTypes.string,
  options: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  selected: PropTypes.arrayOf(String).isRequired,
  onSelect: PropTypes.func.isRequired,
  onRemove: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
  props: PropTypes.shape({
    style: PropTypes.shape({}),
  }),
};

PeoplePicker.defaultProps = {
  label: null,
  props: null,
  disabled: false,
};

export default PeoplePicker;
