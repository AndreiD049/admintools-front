/**
 * A Table with Command Panel ad a Search box.
 * Standartized to be used univarsally on any lists.
 */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  Container, Row, Col,
} from 'react-grid-system';
import {
  CommandBar, SearchBox, Separator, Stack,
} from '@fluentui/react';
import Table from '../table';

const CommandTable = ({ commandItems, tableProps }) => {
  const [searchValue, setSearchValue] = useState('');

  return (
    <Container fluid>
      <Row>
        <Col xs={12}>
          <Stack horizontalAlign="stretch">
            <Row align="start">
              <Col xs={12} sm={9}>
                <CommandBar items={commandItems} />
              </Col>
              <Col xs={12} sm={3}>
                <SearchBox
                  placeholder="Search"
                  value={searchValue}
                  onChange={(e, newVal) => setSearchValue(newVal)}
                />
              </Col>
            </Row>
            <Separator />
            {/* eslint-disable-next-line react/jsx-props-no-spreading */}
            <Table {...tableProps} searchValue={searchValue} />
          </Stack>
        </Col>
      </Row>
    </Container>
  );
};

CommandTable.propTypes = {
  commandItems: PropTypes.arrayOf(PropTypes.shape({
    key: PropTypes.string,
    text: PropTypes.string,
    disabled: PropTypes.bool,
    iconProps: PropTypes.shape({
      iconName: PropTypes.string,
    }),
    onClick: PropTypes.func,
  })),
  tableProps: PropTypes.shape({
    columns: PropTypes.arrayOf(PropTypes.shape({
      key: PropTypes.string,
      name: PropTypes.string,
      fieldName: PropTypes.string,
      minWidth: PropTypes.number,
      maxWidth: PropTypes.number,
      isSortable: PropTypes.bool,
      isFilterable: PropTypes.bool,
      isResizable: PropTypes.bool,
      sort: PropTypes.func,
      onRender: PropTypes.func,
    })).isRequired,
    items: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
    searchValue: PropTypes.string,
    sortedCol: PropTypes.shape({
      key: PropTypes.string,
      name: PropTypes.string,
      fieldName: PropTypes.string,
      minWidth: PropTypes.number,
      maxWidth: PropTypes.number,
      isSortable: PropTypes.bool,
      isFilterable: PropTypes.bool,
      isResizable: PropTypes.bool,
      sort: PropTypes.func,
      onRender: PropTypes.func,
      isSorted: PropTypes.bool,
      isSortedDescending: PropTypes.bool,
    }),
    setSelectionDetails: PropTypes.func,
  }).isRequired,
};

CommandTable.defaultProps = {
  commandItems: null,
};

export default CommandTable;
