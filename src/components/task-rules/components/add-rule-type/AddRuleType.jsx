import React from 'react';
import PropTypes from 'prop-types';
import { ChoiceGroup } from '@fluentui/react';
import constants from '../../../../utils/constants';

const AddRuleType = ({ data, setData }) => {
  const options = [
    { key: 'Work', text: 'Workday' },
    { key: 'Calendar', text: 'Calendar day' },
  ];

  let render;

  switch (data.type) {
    case constants.tasks.types.Daily:
      render = (
        <>
          <ChoiceGroup
            label="Day type"
            defaultSelectedKey={data.dailyType}
            options={options}
            onChange={(ev, option) => setData((prev) => ({
              ...prev,
              dailyType: option.key,
            }))}
          />
        </>
      );
      break;
    default:
      render = null;
      break;
  }

  return render;
};

AddRuleType.propTypes = {
  setData: PropTypes.func.isRequired,
  data: PropTypes.shape({
    type: PropTypes.string,
    dailyType: PropTypes.string,
  }).isRequired,
};

export default AddRuleType;
