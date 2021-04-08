/* eslint-disable react/jsx-props-no-spreading */
import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import {
  BasePickerListBelow,
  Checkbox,
  IconButton,
  Label,
  makeStyles,
  Stack,
  Text,
} from '@fluentui/react';
import Chip from '../../../shared/chip';

const useStyles = makeStyles((theme) => ({
  root: {},
  suggestionRoot: {
    padding: theme.spacing.s2,
  },
  suggestionCheck: {
    marginRight: theme.spacing.s2,
    padding: theme.spacing.s2,
    outline: 'none',
  },
  picker: {
    '& input': {
      backgroundColor: theme.palette.white,
      color: theme.palette.neutralPrimary,
    },
  },
  suggestion: {
    padding: theme.spacing.s1,
  },
  colorBox: {
    width: 20,
    height: 20,
    marginRight: theme.spacing.s1,
  },
  secondaryText: {
    color: theme.palette.neutralSecondaryAlt,
  },
  item: {
    marginTop: 4,
    '&:first-child': {
      marginTop: 8,
    },
  },
  removeIcon: {
    width: 32,
    height: 32,
  },
}));

const FlowPicker = ({
  label,
  options,
  onSelect,
  disabled,
  onRemove,
  selected,
  showDeleteIcon,
  showCheckboxes,
  ...props
}) => {
  const classes = useStyles();
  const selectedSet = useMemo(() => new Set(selected.map((s) => s.key)), [
    selected,
  ]);

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
      className={classes.suggestionRoot}
      key={item.key}
      horizontalAlign="start"
      verticalAlign="center"
      horizontal
    >
      {showCheckboxes && (
        <span
          className={classes.suggestionCheck}
          role="button"
          tabIndex={-1}
          onKeyDown={(evt) =>
            evt.key === 'Space' ? renderSuggestionsItem(item)() : null
          }
          onClick={handleCheckboxClick(item)}
        >
          <Checkbox checked={selectedSet.has(item.key)} />
        </span>
      )}
      <div
        className={classes.colorBox}
        style={{
          backgroundColor: item?.data?.color ?? 'transparent',
        }}
      />
      <Stack horizontalAlign="start">
        <Text variant="mediumPlus">{item.data.name}</Text>
        <Text className={classes.secondaryText} variant="xSmall">
          {item.data.teams.map((t) => t.name).join(', ')}
        </Text>
      </Stack>
    </Stack>
  );

  const renderItem = (details) => (
    <Stack
      key={details.item?.data?.id}
      className={classes.item}
      horizontalAlign="center"
      verticalAlign="center"
      horizontal
    >
      <Chip
        style={{
          backgroundColor: details.item?.data?.color ?? 'transparent',
          padding: 3,
          whiteSpace: 'pre-wrap',
          width: '50%',
          marginLeft: showDeleteIcon ? 32 : 0,
        }}
      >
        <Text variant="medium">{details.item?.data?.name}</Text>
      </Chip>
      {showDeleteIcon && (
        <IconButton
          className={classes.removeIcon}
          iconProps={{
            iconName: 'Delete',
          }}
          onClick={() => onRemove(details.item)}
        />
      )}
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
      {label && <Label>{label}</Label>}
      <BasePickerListBelow
        inputProps={{
          placeholder: 'Select...',
        }}
        className={classes.picker}
        disabled={disabled}
        onRenderSuggestionsItem={renderSuggestionsItem}
        onResolveSuggestions={(filter) =>
          options.filter(
            (o) =>
              o.data.name.toLowerCase().indexOf(filter.toLowerCase()) !== -1
          )
        }
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

FlowPicker.propTypes = {
  label: PropTypes.string,
  options: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  selected: PropTypes.arrayOf(String).isRequired,
  onSelect: PropTypes.func.isRequired,
  onRemove: PropTypes.func.isRequired,
  showDeleteIcon: PropTypes.bool,
  showCheckboxes: PropTypes.bool,
  disabled: PropTypes.bool,
  props: PropTypes.shape({
    style: PropTypes.shape({}),
  }),
};

FlowPicker.defaultProps = {
  label: null,
  props: null,
  disabled: false,
  showCheckboxes: true,
  showDeleteIcon: false,
};

export default FlowPicker;
