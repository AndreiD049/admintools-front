import { ComboBox } from '@fluentui/react';
import React, { useRef, useState } from 'react';

const SearchableCombobox = (rest) => {
  const ref = useRef();
  const [options, setOptions] = useState(rest.options);

  const handleOpen = () => {
    if (ref && ref.current) {
      ref.current.focus(true);
    }
  };

  const handlePendingValueChange = (option, idx, value) => {
    if (value) {
      setOptions(rest.options.filter(
        (o) => o.text.toLowerCase().indexOf(value.toLowerCase()) !== -1,
      ));
    } else if (value === '') {
      setOptions(rest.options);
    }
  };

  const handleChange = (evt, option, index, value) => {
    if (rest.onChange && option) {
      rest.onChange(evt, option, index, value);
    }
  };

  const handleMenuDismissed = () => {
    setOptions(rest.options);
  };

  return (
    <ComboBox
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...rest}
      options={options}
      componentRef={ref}
      onKeyPress={handleOpen}
      onMenuDismissed={handleMenuDismissed}
      onChange={handleChange}
      onPendingValueChanged={handlePendingValueChange}
      openOnKeyboardFocus
    />
  );
};

export default SearchableCombobox;
