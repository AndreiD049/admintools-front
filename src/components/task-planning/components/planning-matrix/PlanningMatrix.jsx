import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, useTheme } from '@fluentui/react-theme-provider';
import { Container } from 'react-grid-system';
import {
  DetailsList, DetailsListLayoutMode, DetailsRow, Icon, Persona, PersonaSize, SelectionMode,
} from '@fluentui/react';
import PlanningCell from '../planning-cell/PlanningCell';

const useStyles = makeStyles((theme) => ({
  row: {
    color: theme.palette.black,
  },
}));

const PlanningMatrix = ({ data, selectedCell, setSelectedCell }) => {
  const classes = useStyles();
  const theme = useTheme();
  const today = new Date().toLocaleDateString();
  const userCol = {
    key: 'username',
    name: 'Username',
    fieldName: 'username',
    maxWidth: 300,
    onRender: (item) => (<Persona size={PersonaSize.size24} text={item.username} />),
    isResizable: true,
  };

  const isSelected = (date, userId) => selectedCell?.date
      && selectedCell.date === date
      && selectedCell?.user
      && selectedCell.user === userId;

  const handleSelectCell = (date, user) => () => {
    if (isSelected(date, user)) setSelectedCell(null);
    else {
      setSelectedCell({
        date, user,
      });
    }
  };

  return (
    <Container fluid>
      <DetailsList
        layoutMode={DetailsListLayoutMode.fixedColumns}
        onRenderRow={(props) => (
          <DetailsRow
            className={classes.row}
            // eslint-disable-next-line react/jsx-props-no-spreading
            {...props}
            styles={{
              root: {
                '&:hover': {
                  backgroundColor: 'transparent',
                },
              },
            }}
          />
        )}
        columns={[userCol].concat(data.dates.map((date) => ({
          key: date.toLocaleDateString(),
          name: date.toLocaleDateString(),
          minWidth: 100,
          data,
          styles: {
            root: {
              backgroundColor: date.toLocaleDateString() === today ? theme.palette.themeLighter : '',
            },
          },
          onRender: (item, idx, col) => (
            <PlanningCell
              flows={col.data.flows}
              userinfo={item}
              date={col.key}
              handleClick={handleSelectCell(col.key, item.id)}
              isSelected={isSelected(col.key, item.id)}
            />
          ),
        })))}
        items={data.users}
        selectionMode={SelectionMode.none}
      />
    </Container>
  );
};

PlanningMatrix.propTypes = {
  data: PropTypes.shape({
    dates: PropTypes.arrayOf(PropTypes.instanceOf(Date)),
    users: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.string,
      username: PropTypes.string,
    })),
    flows: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  }).isRequired,
  selectedCell: PropTypes.shape({
    date: PropTypes.string,
    user: PropTypes.string,
  }).isRequired,
  setSelectedCell: PropTypes.func.isRequired,
};

export default PlanningMatrix;
