import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { BasePickerListBelow, Text } from '@fluentui/react';
import { makeStyles } from '@fluentui/react-theme-provider';
import { useScreenClass } from 'react-grid-system';

const useStyles = makeStyles((theme) => ({
  item: {
    textAlign: 'center',
    padding: theme.spacing.m,
    color: theme.palette.neutralSecondary,
    marginTop: theme.spacing.s2,
    '& > *': {
      padding: theme.spacing.s2,
      border: `1px solid ${theme.palette.themeSecondary}`,
    },
  },
  suggestion: {
    padding: theme.spacing.m,
  },
  root: {
    '& input': {
      backgroundColor: theme.palette.white,
      color: theme.palette.neutralTertiary,
      '& ::placeholder': {
        color: theme.palette.neutralTertiary,
      },
    },
  },
}));

const defaultGetText = (item) => item.text;

const defaultRenderSuggestionItem = (getText, classes) => (item) => (
  <div className={classes.suggestion}>
    <Text variant="mediumPlus">{getText(item)}</Text>
  </div>
);

const defaultRenderItem = (getText, classes) => (item) => (
  <div className={classes.item} key={item.key}>
    <Text variant="mediumPlus">{getText(item)}</Text>
  </div>
);

const SinglePicker = ({
  options,
  getTextFromItem,
  selected,
  onSelect,
  onRenderItem,
  onRenderSuggestionsItem,
  placeholder = 'Select or search a value in the list...',
  className,
  styles,
}) => {
  const classes = useStyles();
  const sc = useScreenClass();
  const [_selected, setSelected] = useState([]);
  const [maxWidth, setMaxwidth] = useState(200);
  const inputRef = useRef();
  const getText = getTextFromItem || defaultGetText;
  const renderItem = onRenderItem || defaultRenderItem(getText, classes);
  const renderSuggestionsItem = onRenderSuggestionsItem || defaultRenderSuggestionItem(getText, classes);

  const handleFilter = (filter, suggestions) => {
    if (filter === '') return suggestions;
    return options.filter(
      (option) => getText(option).toLowerCase().indexOf(filter.toLowerCase()) !== -1,
    );
  };

  const handleSelect = (item) => {
    if (onSelect) {
      onSelect(item);
    }
    setSelected([item]);
  };

  useEffect(() => {
    if (inputRef.current) {
      setMaxwidth(inputRef.current.clientWidth);
    }
  }, [inputRef, sc]);

  return (
    <div
      ref={inputRef}
      className={`${classes.root} ${className}`}
    >
      <BasePickerListBelow
        inputProps={{
          placeholder,
        }}
        pickerCalloutProps={{
          styles: {
            root: {
              width: maxWidth,
            },
          },
        }}
        pickerSuggestionsProps={{
          styles: {
            suggestionsContainer: {
              maxHeight: '600px',
            },
          },
        }}
        styles={styles}
        selectedItems={selected ? [selected] : _selected}
        onItemSelected={handleSelect}
        onEmptyResolveSuggestions={() => options}
        onResolveSuggestions={handleFilter}
        onRenderItem={({ item }) => renderItem(item)}
        getTextFromItem={getText}
        onRenderSuggestionsItem={renderSuggestionsItem}
      />
    </div>
  );
};

SinglePicker.propTypes = {
  options: PropTypes.arrayOf(PropTypes.shape({
    key: PropTypes.string,
  })).isRequired,
  getTextFromItem: PropTypes.func,
  selected: PropTypes.shape({
    key: PropTypes.string,
  }),
  onSelect: PropTypes.func,
  onRenderItem: PropTypes.func,
  onRenderSuggestionsItem: PropTypes.func,
  placeholder: PropTypes.string,
  className: PropTypes.string,
  styles: PropTypes.shape({
    input: PropTypes.shape({}),
    itemsWrapper: PropTypes.shape({}),
    root: PropTypes.shape({}),
    screenReaderText: PropTypes.shape({}),
    text: PropTypes.shape({}),
  }),
};

SinglePicker.defaultProps = {
  getTextFromItem: defaultGetText,
  selected: null,
  onSelect: null,
  onRenderItem: null,
  onRenderSuggestionsItem: null,
  placeholder: 'Select or search a value in the list...',
  className: '',
  styles: null,
};

export default SinglePicker;
