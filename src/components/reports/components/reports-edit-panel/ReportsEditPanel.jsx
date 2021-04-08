import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import {
  ActionButton,
  DefaultButton,
  makeStyles,
  Panel,
  PanelType,
  PrimaryButton,
  Separator,
  Stack,
  TextField,
} from '@fluentui/react';
import { Col, Container, Row } from 'react-grid-system';
import ReportingService from '../../../../services/ReportingService';
import Box from '../../../shared/box';
import NotificationService from '../../../../services/NotificationService';
import SinglePicker from '../../../shared/single-picker/SinglePicker';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > * + *': {
      marginTop: '16px',
    },
  },
  box: {
    border: `1px solid ${theme.palette.themeSecondary}`,
    '&:not(:first-of-type)': {
      borderTop: 'none',
    },
  },
}));

const ReportsEditPanel = ({
  id, isOpen, setOpen, setReport,
}) => {
  const classes = useStyles();
  const [details, setDetails] = useState(null);
  const [parameters, setParameters] = useState([]);
  const [parametersList, setParametersList] = useState([]);
  const [inputErrorMessages, setInputErrorMessages] = useState({});
  const [newParameter, setNewParameter] = useState({
    name: '',
    path: '',
    defaultValue: '',
  });

  const handleChangeDetails = (property) => (evt) => {
    const val = evt.target.value;
    setDetails((prev) => ({
      ...prev,
      [property]: val,
    }));
  };

  const handleChangeParams = (property, param) => (evt) => {
    const { value } = evt.target;
    setParameters((prev) => prev.map((parameter) => {
      if (parameter && parameter.path === param.path) {
        return { ...parameter, [property]: value };
      }
      return parameter;
    }));
  };

  const deleteParam = (param) => () => {
    setParameters((prev) => prev.filter((p) => p.path !== param.path));
  };

  const handleChangeNewParam = (property) => (evt) => {
    const { value } = evt.target;
    setNewParameter((prev) => ({
      ...prev,
      [property]: value,
    }));
  };

  const handleAdd = () => {
    let error = false;
    if (newParameter.name === '') {
      error = true;
      setInputErrorMessages((prev) => ({
        ...prev,
        newParamName: 'Name is required',
      }));
    } else {
      setInputErrorMessages((prev) => ({
        ...prev,
        newParamName: '',
      }));
    }
    if (newParameter.path === '') {
      error = true;
      setInputErrorMessages((prev) => ({
        ...prev,
        newParamPath: 'Path is required',
      }));
    } else {
      setInputErrorMessages((prev) => ({
        ...prev,
        newParamPath: '',
      }));
    }
    if (error) return;
    setParameters((prev) => {
      const item = prev.find((p) => p.path === newParameter.path);
      if (!item) {
        return prev.concat(newParameter);
      }
      setInputErrorMessages(() => ({
        ...prev,
        newParamPath: 'This parameter is already added.',
      }));
      return prev;
    });
  };

  const handleSave = async () => {
    const result = await ReportingService.updateReport(details.id, {
      description: details.description,
      parameters,
    });
    if (result) {
      setReport(result);
      setOpen(false);
      setDetails(null);
      setParameters([]);
      setNewParameter({});
      NotificationService.notifySuccess('Report saved');
    }
  };

  useEffect(() => {
    let mounted = true;
    async function run() {
      if (id && isOpen) {
        const reportDetails = await ReportingService.getReport(id);
        let params = [];
        if (reportDetails?.template?.id) {
          params = await ReportingService.getTempalteParameters(
            reportDetails.template.id,
          );
        }
        if (mounted) {
          setDetails(reportDetails);
          setParameters(reportDetails.parameters);
          setParametersList(params);
        }
      }
    }
    run();
    return () => {
      mounted = false;
    };
  }, [id, isOpen]);

  const onRenderFooter = () => (
    <Stack
      horizontal
      horizontalAlign="start"
      tokens={{
        childrenGap: 10,
      }}
    >
      <PrimaryButton onClick={handleSave}>Save</PrimaryButton>
      <DefaultButton onClick={() => setOpen(false)}>Close</DefaultButton>
    </Stack>
  );

  return isOpen && details ? (
    <Panel
      isOpen={isOpen}
      onDismiss={() => setOpen(false)}
      headerText="Create Report"
      type={PanelType.large}
      onRenderFooterContent={onRenderFooter}
    >
      <Container fluid className={classes.root}>
        <Separator>General</Separator>
        <Row justify="start">
          <Col xs={12} sm={8} md={6}>
            <TextField
              label="Name: "
              value={details.name}
              underlined
              disabled
            />
            <TextField
              label="Description: "
              value={details.description}
              multiline
              underlined
              resizable={false}
              onChange={handleChangeDetails('description')}
            />
            <TextField
              label="Template: "
              value={details.template.name}
              underlined
              disabled
            />
          </Col>
        </Row>
        <Separator>Parameters</Separator>
        <Row justify="start">
          <Col xs={12} sm={8} md={6}>
            {parameters.map((parameter) => (
              <Box className={classes.box}>
                <TextField
                  label="Name: "
                  value={parameter.name}
                  underlined
                  onChange={handleChangeParams('name', parameter)}
                />
                <TextField
                  label="Path: "
                  value={parameter.path}
                  underlined
                  disabled
                />
                <TextField
                  label="Default value: "
                  value={parameter.defaultValue}
                  underlined
                  onChange={handleChangeParams('defaultValue', parameter)}
                />
                <ActionButton
                  onClick={deleteParam(parameter)}
                  iconProps={{
                    iconName: 'Delete',
                  }}
                  text="Delete"
                />
              </Box>
            ))}
            <Box className={classes.box}>
              <SinglePicker
                options={parametersList
                  .map((param) => param.paths.map((path) => ({
                    key: `${param.name}${path}`,
                    data: `${param.name}${path}`,
                  })))
                  .flat()}
                getTextFromItem={(item) => item.data}
                onSelect={(item) => setNewParameter((prev) => ({
                  ...prev,
                  path: item.data,
                }))}
                onRenderItem={() => null}
                maxHeight="400px"
              />
              <TextField
                label="Name: "
                value={newParameter.name || ''}
                underlined
                onChange={handleChangeNewParam('name')}
                required
                errorMessage={inputErrorMessages.newParamName || ''}
              />
              <TextField
                label="Path: "
                value={newParameter.path || ''}
                underlined
                required
                errorMessage={inputErrorMessages.newParamPath || ''}
              />
              <TextField
                label="Default value: "
                value={newParameter.defaultValue || ''}
                underlined
                onChange={handleChangeNewParam('defaultValue')}
              />
              <ActionButton
                onClick={handleAdd}
                iconProps={{
                  iconName: 'Add',
                }}
                text="Add"
              />
            </Box>
          </Col>
        </Row>
        <Separator>Aggregation</Separator>
        <Row justify="start">
          <Col xs={12} sm={8} md={6}>
            <TextField
              value={JSON.stringify(
                JSON.parse(details.template.aggregation),
                null,
                4,
              )}
              multiline
              underlined
              disabled
              autoAdjustHeight
              resizable={false}
            />
          </Col>
        </Row>
      </Container>
    </Panel>
  ) : null;
};

ReportsEditPanel.propTypes = {
  id: PropTypes.string,
  isOpen: PropTypes.bool.isRequired,
  setOpen: PropTypes.func.isRequired,
  setReport: PropTypes.func.isRequired,
};

ReportsEditPanel.defaultProps = {
  id: null,
};

export default ReportsEditPanel;
