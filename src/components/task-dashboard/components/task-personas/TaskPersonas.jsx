import React from 'react';
import PropTypes from 'prop-types';
import {
  Facepile, makeStyles, OverflowButtonType, PersonaSize,
} from '@fluentui/react';

const useStyles = makeStyles(() => ({
  root: {
    display: 'inline-block',
  },
  container: {
    textAlign: 'center',
  },
}));

const TaskPersonas = ({ task }) => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <Facepile
        className={classes.root}
        personaSize={PersonaSize.size24}
        maxDisplayablePersonas={1}
        overflowButtonType={OverflowButtonType.descriptive}
        overflowButtonProps={{
          ariaDescription: 'More users',
        }}
        personas={task.assignedTo.map((u) => ({
          personaName: u.username,
        }))}
        // onRenderPersona={(persona) => (
        //   <Persona
        //     size={PersonaSize.size24}
        //     text={persona.personaName}
        //     hidePersonaDetails
        //     imageAlt={persona.personaName}
        //   />
        // )}
      />
    </div>
  );
};

TaskPersonas.propTypes = {
  task: PropTypes.shape({
    assignedTo: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.string,
      username: PropTypes.string,
    })),
  }).isRequired,
};

export default TaskPersonas;
