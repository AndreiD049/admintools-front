/* eslint-disable react/jsx-props-no-spreading */
import React, { useState, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import { DetailsList, Selection } from '@fluentui/react';

const Table = ({
  columns,
  items,
  searchValue,
  sortedCol,
  setSelectionDetails,
  ...props
}) => {
  const [sortedColumn, setSortedColumn] = useState(null);
  const [_columns, setColumns] = useState(columns);
  const [_items, setItems] = useState([]);
  const selection = new Selection({
    onSelectionChanged: () => {
      setSelectionDetails({
        count: selection.getSelectedCount(),
        items: selection.getSelection(),
      });
    },
  });

  const getSortFunction = (column) => {
    const sortFunc = (a, b) => {
      if (!column.isSortedDescending) {
        return a[column.fieldName] < b[column.fieldName] ? -1 : 1;
      }
      return a[column.fieldName] > b[column.fieldName] ? -1 : 1;
    };
    if (column.sort) {
      return (a, b) => {
        if (!column.isSortedDescending) {
          return column.sort(b, a);
        }
        return column.sort(a, b);
      };
    }
    return sortFunc;
  };

  const handleSort = (evt, column) => {
    if (column.isSortable) {
      let columnCopy = column;
      const columnsCopy = _columns.map((col) => {
        const c = col;
        // column we're sorting now
        if (c.key === column.key) {
          // if it's already sorted, just invert the sorting
          columnCopy = c;
          if (c.isSorted) {
            c.isSortedDescending = !c.isSortedDescending;
            return c;
          }
          // columns was not sorted previously, just set it sorted
          c.isSorted = true;
          c.isSortedDescending = true;
        } else {
          // other column, remove the sorting
          c.isSorted = false;
          c.isSortedDescending = false;
        }
        return c;
      });
      setColumns(columnsCopy);
      // setItems(_items.sort(getSortFunction(columnCopy)));
      setSortedColumn(columnCopy);
    }
  };

  const filterValues = useCallback(
    (values) => {
      if (!searchValue) {
        return values;
      }
      const rg = new RegExp(searchValue, 'i');
      return values.filter((item) => {
        const filterableColumns = _columns.filter((c) => c.isFilterable);
        for (let i = 0; i < filterableColumns.length; i += 1) {
          const col = filterableColumns[i];
          let val = item[col.fieldName];
          if (col.filterValueAccessor) {
            val = col.filterValueAccessor(item);
          }
          if (rg.test(val)) return true;
        }
        return false;
      });
    },
    [_columns, searchValue],
  );

  useEffect(() => {
    const copy = items.slice();
    if (sortedColumn) {
      copy.sort(getSortFunction(sortedColumn));
    }
    if (!searchValue) {
      return setItems(copy);
    }
    return setItems(filterValues(copy));
  }, [items, searchValue, filterValues, sortedColumn]);

  useEffect(() => {
    if (sortedCol) {
      setColumns((prev) => prev.map((col) => (col.key === sortedCol.key
        ? {
          ...col,
          isSorted: sortedCol.isSorted,
          isSortedDescending: sortedCol.isSortedDescending,
        }
        : col)));
      setSortedColumn(sortedCol);
    }
  }, [sortedCol]);

  return (
    <DetailsList
      {...props}
      selection={selection}
      columns={_columns.map((c) => ({ ...c, onColumnClick: handleSort }))}
      items={_items}
      selectionPreservedOnEmptyClick
    />
  );
};

Table.propTypes = {
  columns: PropTypes.arrayOf(
    PropTypes.shape({
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
    }),
  ).isRequired,
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
};

Table.defaultProps = {
  searchValue: '',
  sortedCol: null,
  setSelectionDetails: () => {},
};

export default Table;
