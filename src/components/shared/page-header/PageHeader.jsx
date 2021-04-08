import React from 'react';
import PropTypes from 'prop-types';
import { Stack, Text } from '@fluentui/react';

const styles = {
  root: {
    marginTop: '16px',
    marginBottom: '16px',
    align: 'center',
  },
};

const PageHeader = ({ text }) => (
  <Stack horizontal horizontalAlign="center">
    <Text variant="xLarge" styles={styles}>
      {text}
    </Text>
  </Stack>
);

PageHeader.propTypes = {
  text: PropTypes.string.isRequired,
};

export default PageHeader;
