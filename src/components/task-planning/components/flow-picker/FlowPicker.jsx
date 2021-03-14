import React from 'react';
import PropTypes from 'prop-types';
import { BasePickerListBelow, makeStyles } from '@fluentui/react';

const useStyles = makeStyles((theme) => ({
  root: {},
}));

const FlowPicker = ({ onChange }) => {
  const classes = useStyles();
  return (
    <>
      {/* <BasePickerListBelow
        className={classes.picker}
        onRenderSuggestionsItem={renderSuggestionsItem}
        onResolveSuggestions={(filter, selected) => validOptions
          .filter((o) => o.data.name.toLowerCase().indexOf(filter.toLowerCase()) !== -1)}
        onRenderItem={renderItem}
        selectedItems={planning ? planning?.flows : []}
        onEmptyResolveSuggestions={() => validOptions}
        onItemSelected={handleSelect}
      /> */}
    </>
  );
};

FlowPicker.propTypes = {
  onChange: PropTypes.func.isRequired,
};

export default FlowPicker;
