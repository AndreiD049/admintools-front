import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import {
  Icon,
  makeStyles,
  Persona,
  PersonaSize,
  Separator,
  Text,
} from '@fluentui/react';
import { Col, Container, Row } from 'react-grid-system';
import AppraisalUserRedirect from '../appraisal-user-redirect';
import AuthorizationComponent from '../../../shared/authorization-component';
import { validate } from '../../../../services/validators';
import PageHeader from '../../../shared/page-header';
import Chip from '../../../shared/chip';
import FieldSet from '../appraisal-field-set';

const useStyles = makeStyles((theme) => ({
  chipContent: {
    backgroundColor: theme.palette.neutralQuaternary,
    padding: '7px',
    display: 'inline-flex',
    flexFlow: 'row nowrap',
    justifyContent: 'center',
    alignItems: 'center',
  },
  lockedChip: {
    backgroundColor: theme.palette.themePrimary,
    padding: '7px',
    display: 'inline-flex',
    flexFlow: 'row nowrap',
    justifyContent: 'center',
    alignItems: 'center',
    color: '#fff',
  },
  lockIcon: {
    marginRight: theme.spacing.s1,
  },
  container: {
    '& > * + *': {
      marginTop: theme.spacing.m,
    },
  },
}));

const AppraisalDetailsDisplay = ({ context, periodDetails }) => {
  const classes = useStyles();
  const [achieved, setAchieved] = useState(periodDetails.items.filter((el) => el.type === 'Achieved'));
  const [planned, setPlanned] = useState(periodDetails.items.filter((el) => el.type === 'Planned'));
  const [trainingPlanned, setTrainingPlanned] = useState(periodDetails.items.filter((el) => el.type === 'Training_Planned'));
  const [trainingAchieved, setTrainingAchieved] = useState(periodDetails.items.filter((el) => el.type === 'Training_Achieved'));
  const [swotS, setSWOTS] = useState(periodDetails.items.filter((el) => el.type === 'SWOT_S'));
  const [swotW, setSWOTW] = useState(periodDetails.items.filter((el) => el.type === 'SWOT_W'));
  const [swotO, setSWOTO] = useState(periodDetails.items.filter((el) => el.type === 'SWOT_O'));
  const [swotT, setSWOTT] = useState(periodDetails.items.filter((el) => el.type === 'SWOT_T'));
  const [feedBack, setFeedBack] = useState(periodDetails.items.filter((el) => el.type === 'Feedback'));
  const [locked, setLocked] = useState(false);
  const { user } = context;

  useEffect(() => {
    let mounted = true;
    async function run() {
      const isLocked = (await validate.periodLocked(periodDetails, user.id)()).result;
      if (mounted) {
        setLocked(isLocked);
      }
    }
    run();
    return () => {
      mounted = false;
    };
  }, [periodDetails, user.id]);

  return (
    <Container md className={classes.container}>
      <Row>
        <Col xs={12}>
          <PageHeader text={`Details '${periodDetails.name ? periodDetails.name : ''}'`} />
        </Col>
      </Row>
      <Row justify="center">
        <Col xs={12} md={6} lg={4}>
          <AuthorizationComponent code="APPRAISAL DETAILS - OTHER USERS" grant="read">
            <AppraisalUserRedirect />
          </AuthorizationComponent>
        </Col>
      </Row>
      <Row justify="center">
        <div>
          {user
            ? (
              <Chip className={classes.chipContent}>
                <Persona size={PersonaSize.size24} text={user.username} />
              </Chip>
            )
            : null}
        </div>
      </Row>
      <Row justify="center">
        <div>
          {
          locked
            ? (
              <Chip className={classes.lockedChip}>
                <Icon className={classes.lockIcon} iconName="LockSolid" />
                <Text variant="smallPlus">Locked</Text>
              </Chip>
            )
            : null
          }
        </div>
      </Row>
      <Separator><Text variant="mediumPlus">Objectives</Text></Separator>
      <Row>
        <Col xs={12} md={6}>
          <FieldSet context={context} details={periodDetails} items={achieved} setItems={setAchieved} type="Achieved" setOtherItems={setPlanned} />
        </Col>
        <Col xs={12} md={6}>
          <FieldSet context={context} details={periodDetails} items={planned} setItems={setPlanned} type="Planned" setOtherItems={setAchieved} />
        </Col>
      </Row>
      <Separator><Text variant="mediumPlus">Trainings</Text></Separator>
      <Row>
        <Col xs={12} md={6}>
          <FieldSet context={context} details={periodDetails} items={trainingAchieved} setItems={setTrainingAchieved} type="Training_Achieved" setOtherItems={setTrainingPlanned} />
        </Col>
        <Col xs={12} md={6}>
          <FieldSet context={context} details={periodDetails} items={trainingPlanned} setItems={setTrainingPlanned} type="Training_Planned" setOtherItems={setTrainingAchieved} />
        </Col>
      </Row>
      <Separator><Text variant="mediumPlus">SWOT</Text></Separator>
      <Row nogutter>
        <Col xs={12} md={6}>
          <FieldSet context={context} details={periodDetails} items={swotS} setItems={setSWOTS} type="SWOT_S" />
        </Col>
        <Col xs={12} md={6}>
          <FieldSet context={context} details={periodDetails} items={swotW} setItems={setSWOTW} type="SWOT_W" />
        </Col>
        <Col xs={12} md={6}>
          <FieldSet context={context} details={periodDetails} items={swotO} setItems={setSWOTO} type="SWOT_O" />
        </Col>
        <Col xs={12} md={6}>
          <FieldSet context={context} details={periodDetails} items={swotT} setItems={setSWOTT} type="SWOT_T" />
        </Col>
      </Row>
      <Row>
        <Col xs={12}>
          <FieldSet context={context} details={periodDetails} items={feedBack} setItems={setFeedBack} type="Feedback" />
        </Col>
      </Row>
      <div style={{ padding: '20px' }} />
    </Container>
  );
};

AppraisalDetailsDisplay.propTypes = {
  context: PropTypes.shape({
    user: PropTypes.shape({
      id: PropTypes.string,
      avatar: PropTypes.string,
      username: PropTypes.string,
    }),
  }).isRequired,
  periodDetails: PropTypes.shape({
    name: PropTypes.string,
    items: PropTypes.arrayOf(PropTypes.shape({
      type: PropTypes.string,
    })),
  }).isRequired,
};

export default AppraisalDetailsDisplay;
