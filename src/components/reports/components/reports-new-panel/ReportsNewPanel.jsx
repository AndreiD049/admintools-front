import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import {
  Panel,
  PrimaryButton,
  DefaultButton,
  PanelType,
  Stack,
  TextField,
  Separator,
  Label,
  makeStyles,
} from '@fluentui/react';
import { Col, Container, Row } from 'react-grid-system';
import ReportingService from '../../../../services/ReportingService';
import NotificationService from '../../../../services/NotificationService';
import SinglePicker from '../../../shared/single-picker/SinglePicker';
import Box from '../../../shared/box';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > * + *': {
      marginTop: '16px',
    },
  },
  topMargin: {
    marginTop: '8px',
  },
  box: {
    border: `1px solid ${theme.palette.themeSecondary}`,
    '&:not(:first-of-type)': {
      borderTop: 'none',
    },
  },
  invisibleInput: {
    background: 'none',
    outline: 'none',
    border: 'none',
    height: 0,
  },
}));

const ReportsNewPanel = ({ isOpen, setOpen, addReport }) => {
  const classes = useStyles();
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [template, setTemplate] = useState('');
  const [parameter, setParameter] = useState('');
  const [templates, setTemplates] = useState([]);
  const [parameters, setParameters] = useState([]);
  const [selectedParameters, setSelectedParameters] = useState([]);
  const history = useHistory();

  const handleChange = (set) => (e) => {
    set(e.target.value);
  };

  const handleChangeTempalte = (templ) => {
    setTemplate(templ.data.id);
  };

  const handleChangeParameter = (item) => {
    setParameter(item.data);
  };

  const handleAddParameter = () => {
    if (parameter !== '') {
      setParameter('');
      setSelectedParameters((prev) => {
        if (selectedParameters.map((p) => p.name).indexOf(parameter) === -1) {
          return prev.concat({
            name: parameter,
            defaultValue: '',
            path: parameter,
          });
        }
        return prev;
      });
    }
  };

  const handleChangeParameterName = (idx) => (e) => {
    e.persist();
    setSelectedParameters((prev) => {
      const copy = prev.slice();
      copy[idx].name = e.target.value;
      return copy;
    });
  };

  const handleChangeParameterValue = (idx) => (e) => {
    e.persist();
    setSelectedParameters((prev) => {
      const copy = prev.slice();
      copy[idx].defaultValue = e.target.value;
      return copy;
    });
  };

  const handleSubmit = async (e) => {
    e.persist();
    e.preventDefault();
    const formData = new FormData();
    formData.append('name', name);
    formData.append('description', description);
    formData.append('template', template);
    formData.append('parameters', JSON.stringify(selectedParameters));
    const result = await ReportingService.addReport(formData);
    if (result) {
      history.push('/reporting/reports');
      NotificationService.notifySuccess('Report successfully created');
      setOpen(false);
      addReport(result);
    }
  };

  useEffect(() => {
    let mounted = true;
    async function run() {
      const t = await ReportingService.getTemplates();
      if (mounted) {
        setTemplates(t);
      }
    }
    run();
    return () => {
      mounted = false;
    };
  }, []);

  useEffect(() => {
    let mounted = true;
    async function run() {
      if (template !== '') {
        const params = await ReportingService.getTempalteParameters(template);
        if (params.length && mounted) {
          setParameters(params);
        }
      } else {
        setParameters([]);
      }
      setSelectedParameters([]);
      setParameter('');
    }
    run();
    return () => {
      mounted = false;
    };
  }, [template]);

  const onRenderFooter = () => (
    <Stack
      horizontal
      horizontalAlign="start"
      tokens={{
        childrenGap: 10,
      }}
    >
      <PrimaryButton form="new-report-form" type="submit">
        Create
      </PrimaryButton>
      <DefaultButton onClick={() => setOpen(false)}>Close</DefaultButton>
    </Stack>
  );

  return (
    <Panel
      isOpen={isOpen}
      onDismiss={() => setOpen(false)}
      headerText="Create Report"
      type={PanelType.large}
      onRenderFooterContent={onRenderFooter}
    >
      <form onSubmit={handleSubmit} id="new-report-form">
        <Container fluid className={classes.root}>
          <Separator>General</Separator>
          <Row justify="start">
            <Col xs={12} sm={8} md={6}>
              <TextField
                label="Name"
                value={name}
                onChange={handleChange(setName)}
                required
              />
              <TextField
                label="Description"
                value={description}
                onChange={handleChange(setDescription)}
                multiline
              />
              <Label>Select template</Label>
              <SinglePicker
                options={templates.map((t) => ({
                  key: t.id,
                  data: t,
                }))}
                getTextFromItem={(item) => item.data.name}
                onSelect={handleChangeTempalte}
                onRenderItem={() => (
                  <TextField
                    value={
                      template
                        ? templates.find((temp) => temp.id === template)?.name
                        : null
                    }
                    underlined
                    readOnly
                  />
                )}
                maxHeight="400px"
              />
              <input
                value={template}
                className={classes.invisibleInput}
                required
              />
            </Col>
          </Row>
          <Separator>Parameters</Separator>
          <Row justify="start">
            <Col xs={12} sm={8} md={6}>
              <Label>Select parameter</Label>
              <SinglePicker
                options={parameters
                  .map((param) =>
                    param.paths.map((path) => ({
                      key: `${param.name}${path}`,
                      data: `${param.name}${path}`,
                    }))
                  )
                  .flat()}
                getTextFromItem={(item) => item.data}
                onSelect={(item) => handleChangeParameter(item)}
                onRenderItem={() => (
                  <TextField value={parameter} underlined readOnly />
                )}
                maxHeight="400px"
              />
              <DefaultButton
                className={classes.topMargin}
                onClick={handleAddParameter}
              >
                Add Parameter
              </DefaultButton>
            </Col>
          </Row>
          <Separator>Selected Paramaters</Separator>
          <Row justify="start">
            <Col xs={12} sm={8} md={6}>
              {selectedParameters.map((sp, idx) => (
                <Box className={classes.box}>
                  <TextField
                    label="Name"
                    value={sp.name}
                    onChange={handleChangeParameterName(idx)}
                  />
                  <TextField
                    label="Default value"
                    value={sp.defaultValue}
                    onChange={handleChangeParameterValue(idx)}
                  />
                  <TextField label="Path" value={sp.path} readOnly />
                </Box>
              ))}
            </Col>
          </Row>
        </Container>
      </form>
    </Panel>
  );
};

ReportsNewPanel.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  setOpen: PropTypes.func.isRequired,
  addReport: PropTypes.func.isRequired,
};

export default ReportsNewPanel;
