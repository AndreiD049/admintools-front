import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import {
  BasePicker,
  Checkbox,
  Text,
} from '@fluentui/react';
import { makeStyles } from '@fluentui/react-theme-provider';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .ms-BasePicker-text': {
      display: 'flex',
      flexFlow: 'row nowrap',
      borderColor: theme.palette.neutralPrimaryAlt,
    },
    '& .ms-BasePicker-text:hover': {
      borderColor: theme.palette.neutralPrimary,
    },
    '& span[id*=\'selected-items\']': {
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'elipsis',
    },
    '& input': {
      backgroundColor: theme.palette.white,
      color: theme.palette.neutralPrimary,
    },
    '& input::placeholder': {
      color: theme.palette.neutralPrimaryAlt,
    },
  },
  label: {
    padding: '5px 0',
    fontWeight: 600,
  },
  hidden: {
    height: 0,
    width: 0,
    outline: 'none',
    border: 'none',
    background: 'none',
  },
}));

const Autocomplete = ({
  options,
  selected,
  onItemSelected,
  label,
  required,
}) => {
  const [calloutWidth, setCalloutWidth] = useState(400);
  const input = useRef(null);
  const classes = useStyles();

  useEffect(() => {
    if (input?.current?.root?.current) {
      setCalloutWidth(input.current.root.current.clientWidth);
    }
  }, [input]);

  const toggleSelect = (item, ev) => {
    if (ev) ev.preventDefault();
    if (selected.indexOf(item) === -1) {
      onItemSelected((prev) => prev.concat(item));
      if (input.current) input.current.input.current.clear();
    } else {
      onItemSelected((prev) => prev.filter((p) => p !== item));
    }
  };

  return (
    <>
      <Text variant="medium" block className={classes.label}>
        {label}
      </Text>
      <BasePicker
        className={classes.root}
        componentRef={input}
        onEmptyResolveSuggestions={() => options}
        onRenderItem={(itemProps) => {
          if (selected.length > 1) {
            if (itemProps.index === 0) return `${selected.length} selected`;
            return '';
          }
          return itemProps.item.text;
        }}
        selectedItems={selected}
        onChange={(items) => {
          if (items.indexOf(undefined) === -1) onItemSelected(() => items);
        }}
        inputProps={{
          placeholder: selected?.length ? '' : 'Search...',
        }}
        getTextFromItem={(item) => item.text}
        onItemSelected={(item) => {
          toggleSelect(item);
        }}
        onResolveSuggestions={
        (filter) => options.filter((option) => option.text.indexOf(filter) !== -1)
      }
        onRenderSuggestionsItem={(suggestion) => (
          <div
            style={{
              padding: '5px 10px',
            }}
          >
            <Checkbox
              checked={
                selected.find((s) => s.text === suggestion.text) !== undefined
              }
              onRenderLabel={() => suggestion.text}
            />
          </div>
        )}
        pickerSuggestionsProps={{
          onSuggestionClick: (ev, item) => {
            toggleSelect(item, ev);
          },
        }}
        pickerCalloutProps={{
          target: input?.current?.root || document.body,
          calloutWidth,
        }}
      />
      <input type="text" className={classes.hidden} required={required} value={selected.length ? 'filled' : ''} />
    </>
  );
};

Autocomplete.propTypes = {
  options: PropTypes.arrayOf(PropTypes.shape({
    key: PropTypes.string,
    text: PropTypes.string,
  })).isRequired,
  selected: PropTypes.arrayOf(PropTypes.shape({
    key: PropTypes.string,
    text: PropTypes.string,
  })).isRequired,
  onItemSelected: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
  required: PropTypes.bool,
};

Autocomplete.defaultProps = {
  required: false,
};

export default Autocomplete;
