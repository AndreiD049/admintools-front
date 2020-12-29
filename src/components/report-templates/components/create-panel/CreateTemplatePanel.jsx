import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  DefaultButton, Panel, PanelType, PrimaryButton, Separator, Stack, Text, TextField,
} from '@fluentui/react';
import { Col, Container, Row } from 'react-grid-system';
import { makeStyles } from '@fluentui/react-theme-provider';
import { downloadBlob } from 'download.js';
import ReportingService from '../../../../services/ReportingService';
import Accordion from '../../../shared/accordion';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > * + *': {
      marginTop: '16px',
    },
  },
}));

const CreateTemplatePanel = ({ isOpen, setOpen }) => {
  const classes = useStyles();
  const [aggregation, setAggregation] = useState('');
  const [name, setName] = useState('');
  const [file, setFile] = useState(null);
  const [sample, setSample] = useState('');
  const [openAcordion, setOpenAccordion] = useState({
    aggregation: true,
    sample: false,
  });

  const handleChange = (set) => (evt) => {
    if (evt && evt.target) {
      if (set) set(evt.target.value);
    }
  };

  const handleFileUpload = (evt) => {
    if (evt && evt.target) {
      const filelist = evt.target.files;
      if (filelist.length > 0) {
        setFile(filelist[0]);
      } else {
        setFile(null);
      }
    }
  };

  const handleGenerate = async () => {
    const formData = new FormData();
    formData.append('aggregation', aggregation);
    formData.append('name', name);
    formData.append('template', file);

    const result = await ReportingService.generateTemplate(formData);
    await downloadBlob(file.name, result);
  };

  const handleSample = async () => {
    const result = await ReportingService.getSample(aggregation);
    if (result && result.data) {
      setSample(JSON.stringify(result.data, null, 4));
      setOpenAccordion({
        aggregation: false,
        sample: true,
      });
    }
  };

  const handleSubmit = async () => {
    const formData = new FormData();
    formData.append('aggregation', aggregation);
    formData.append('name', name);
    formData.append('template', file);

    await ReportingService.createTemplate(formData);
    setOpen(false);
  };

  const onRenderFooter = () => (
    <Stack
      horizontal
      horizontalAlign="start"
      tokens={{
        childrenGap: 10,
      }}
    >
      <PrimaryButton type="submit" form="new-template-form">Create</PrimaryButton>
      <DefaultButton onClick={handleSample}>Sample</DefaultButton>
      <DefaultButton onClick={handleGenerate}>Generate</DefaultButton>
      <DefaultButton onClick={() => setOpen(false)}>Cancel</DefaultButton>
    </Stack>
  );

  return (
    <Panel
      isOpen={isOpen}
      onDismiss={() => setOpen(false)}
      headerText="Create template"
      type={PanelType.large}
      onRenderFooterContent={onRenderFooter}
    >
      <form id="new-template-form" onSubmit={handleSubmit}>
        <Container
          fluid
          className={classes.root}
        >
          <Separator>Aggregation</Separator>
          <Row justify="center">
            <Text variant="mediumPlus">
              Create a valid MongoDB aggregation.
              Test and verify if it returns valid info below.
              For more info, refer to MongoDB
              {' '}
              <a href="https://docs.mongodb.com/manual/aggregation/" target="_blank" rel="noopener noreferrer">documentation</a>
              .
            </Text>
          </Row>
          <Accordion
            items={[
              {
                key: 'aggregation',
                text: 'Aggregation',
                isOpen: openAcordion.aggregation,
                render: () => (
                  <Row>
                    <Col xs={12}>
                      <TextField
                        multiline
                        value={aggregation}
                        onChange={handleChange(setAggregation)}
                        autoAdjustHeight
                        required
                      />
                    </Col>
                  </Row>
                ),
              },
              {
                key: 'sample',
                text: 'Sample Data',
                isOpen: openAcordion.sample,
                render: () => (
                  <Row>
                    <Col xs={12}>
                      <TextField
                        multiline
                        readOnly
                        value={sample}
                        autoAdjustHeight
                      />
                    </Col>
                  </Row>
                ),
              },
            ]}
            onRenderItem={(item) => item.render()}
            onToggle={(evt, item, open) => setOpenAccordion((prev) => ({
              ...prev,
              [item.key]: open,
            }))}
          />
          <Separator>Template</Separator>
          <Row justify="center">
            <Text variant="mediumPlus">
              Specify your template name, then attach your template file.
              { ' ' }
              (Ex: All user info, or Items per user).
            </Text>
          </Row>
          <Row>
            <Col xs={12}>
              <TextField
                label="Template name"
                value={name}
                onChange={handleChange(setName)}
                required
              />
              <TextField
                styles={{
                  fieldGroup: {
                    padding: '8px',
                    height: 'auto',
                  },
                }}
                onChange={handleFileUpload}
                type="file"
                label="Template file"
                required
              />
            </Col>
          </Row>
        </Container>
      </form>
    </Panel>
  );
};

CreateTemplatePanel.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  setOpen: PropTypes.func.isRequired,
};

export default CreateTemplatePanel;
