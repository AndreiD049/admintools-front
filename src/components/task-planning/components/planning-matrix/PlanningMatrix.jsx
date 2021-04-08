import React from 'react';
import PropTypes from 'prop-types';
import { Container } from 'react-grid-system';
import {
  DetailsList,
  DetailsListLayoutMode,
  DetailsRow,
  makeStyles,
  Persona,
  PersonaSize,
  SelectionMode,
  useTheme,
} from '@fluentui/react';
import { DateTime } from 'luxon';
import PlanningCell from '../planning-cell/PlanningCell';

const useStyles = makeStyles((theme) => ({
  row: {
    color: theme.palette.black,
  },
}));

const PlanningMatrix = ({
  userFlowMap,
  dates,
  users,
  selectedCell,
  setSelectedCell,
  handleInvoke,
}) => {
  const classes = useStyles();
  const theme = useTheme();
  const today = DateTime.now().toISODate();
  const userCol = {
    key: 'username',
    name: 'Username',
    fieldName: 'username',
    maxWidth: 300,
    onRender: (item) => (
      <Persona size={PersonaSize.size24} text={item.username} />
    ),
    isResizable: true,
  };

  const isSelected = (date, userId) => Boolean(
    selectedCell?.date
        && selectedCell.date === date
        && selectedCell?.user
        && selectedCell.user === userId,
  );

  const handleSelectCell = (date, user) => () => {
    setSelectedCell({
      date,
      user,
    });
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
        columns={[userCol].concat(
          dates.map((date) => ({
            key: DateTime.fromJSDate(date).toISODate(),
            name: DateTime.fromJSDate(date).toISODate(),
            minWidth: 100,
            styles: {
              root: {
                border: `1px solid ${
                  DateTime.fromJSDate(date).toISODate() === today
                    ? theme.palette.themePrimary
                    : 'transparent'
                }`,
              },
            },
            onRender: (item, idx, col) => (
              <PlanningCell
                // eslint-disable-next-line react/prop-types
                userFlows={userFlowMap.get(item.id)?.get(col.key)}
                handleClick={handleSelectCell(col.key, item.id)}
                handleInvoke={handleInvoke}
                isSelected={isSelected(col.key, item.id)}
              />
            ),
          })),
        )}
        items={users}
        selectionMode={SelectionMode.none}
      />
    </Container>
  );
};

PlanningMatrix.propTypes = {
  userFlowMap: PropTypes.instanceOf(Map).isRequired,
  dates: PropTypes.arrayOf(PropTypes.instanceOf(Date)).isRequired,
  users: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      username: PropTypes.string,
    }),
  ).isRequired,
  selectedCell: PropTypes.shape({
    date: PropTypes.string,
    user: PropTypes.string,
  }),
  setSelectedCell: PropTypes.func.isRequired,
  handleInvoke: PropTypes.func.isRequired,
};

PlanningMatrix.defaultProps = {
  selectedCell: null,
};

export default PlanningMatrix;
