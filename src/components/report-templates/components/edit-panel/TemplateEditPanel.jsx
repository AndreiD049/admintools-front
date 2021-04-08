import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import {
  ActionButton,
  DefaultButton,
  Icon,
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

const useStyles = makeStyles(() => ({
  root: {
    '& > * + *': {
      marginTop: '16px',
    },
  },
}));

const TemplateEditPanel = ({
  id, isOpen, updateTemplates, setOpen,
}) => {
  const classes = useStyles();
  const [template, setTemplate] = useState({});
  const [update, setUpdate] = useState({});
  const [file, setFile] = useState(null);

  useEffect(() => {
    let mounted = true;
    async function run() {
      const data = await ReportingService.getTemplate(id);
      if (mounted) {
        setTemplate(data);
        setUpdate({
          name: data.name,
          filename: data.filename,
          aggregation: data.aggregation,
        });
      }
    }
    if (id) {
      run();
    }
    return () => {
      mounted = false;
    };
  }, [id]);

  const handleUpdate = (field) => (evt) => {
    if (evt && evt.target) {
      setUpdate((prev) => ({
        ...prev,
        [field]: evt.target.value,
      }));
    }
  };

  const handleFileUpload = (evt) => {
    if (evt && evt.target) {
      const filelist = evt.target.files;
      if (filelist.length > 0) {
        setFile(filelist[0]);
        setUpdate((prev) => ({
          ...prev,
          filename: filelist[0].name,
        }));
      } else {
        setFile(null);
      }
    }
  };

  const handleDownload = () => {
    ReportingService.downloadTemplate(id, template.filename || 'template');
  };

  const handleSave = async () => {
    const formData = new FormData();
    formData.append('aggregation', update.aggregation);
    formData.append('name', update.name);
    formData.append('filename', update.filename);
    if (file) formData.append('template', file);
    const updateResult = await ReportingService.updateTemplate(
      template.id,
      formData,
    );
    setTemplate(updateResult);
    updateTemplates(updateResult);
    setOpen(false);
  };

  const onRenderLabel = (labelId, controlId, iconName) => (options) => (
    <label
      style={{
        lineHeight: '2em',
        fontWeight: 600,
      }}
      htmlFor={controlId}
      id={labelId}
    >
      <Icon iconName={iconName} />
      {' '}
      {options.label}
    </label>
  );

  const onRenderFooter = () => (
    <Stack
      horizontal
      horizontalAlign="start"
      tokens={{
        childrenGap: 10,
      }}
    >
      <PrimaryButton onClick={handleSave}>Update</PrimaryButton>
      <DefaultButton onClick={() => setOpen(false)}>Close</DefaultButton>
    </Stack>
  );

  return (
    <Panel
      isOpen={isOpen}
      onDismiss={() => setOpen(false)}
      headerText={`Edit - ${template ? template.name : ''}`}
      type={PanelType.large}
      onRenderFooterContent={onRenderFooter}
    >
      <Container fluid className={classes.root}>
        <Separator>General</Separator>
        {template && (
          <>
            <Row justify="start">
              <Col xs={12} sm={8} md={4}>
                <TextField
                  onRenderLabel={onRenderLabel(
                    'label-aggregation-edit',
                    'aggregation-edit',
                    'Edit',
                  )}
                  label="Name: "
                  value={update && update.name}
                  onChange={handleUpdate('name')}
                  underlined
                />
                <TextField
                  label="Created by: "
                  value={
                    template
                    && template.createdUser
                    && template.createdUser.username
                  }
                  readOnly
                  underlined
                  tabIndex={-1}
                />
                <TextField
                  label="Created on: "
                  value={
                    template && new Date(template.createdDate).toLocaleString()
                  }
                  readOnly
                  underlined
                  tabIndex={-1}
                />
                {template.modifiedUser && (
                  <>
                    <TextField
                      label="Modified by: "
                      value={template.modifiedUser.username}
                      readOnly
                      underlined
                      tabIndex={-1}
                    />
                    <TextField
                      label="Modified on: "
                      value={
                        template.modifiedDate
                        && new Date(template.modifiedDate).toLocaleString()
                      }
                      readOnly
                      underlined
                      tabIndex={-1}
                    />
                  </>
                )}
              </Col>
            </Row>
            <Separator>Details</Separator>
            <Row justify="start">
              <Col xs={12} sm={8} md={4}>
                <TextField
                  onRenderLabel={onRenderLabel(
                    'label-aggregation-edit',
                    'aggregation-edit',
                    'Edit',
                  )}
                  label="Filename: "
                  value={update.filename}
                  onChange={handleUpdate('filename')}
                  underlined
                />
              </Col>
              <Col xs={12} sm={8} md={4}>
                <ActionButton
                  iconProps={{
                    iconName: 'DownloadDocument',
                  }}
                  text="Download template"
                  onClick={handleDownload}
                />
              </Col>
            </Row>
            <Row justify="start">
              <Col xs={12} sm={8} md={4}>
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
                />
              </Col>
            </Row>
            <Row justify="start">
              <Col xs={12} sm={8} md={6}>
                <TextField
                  onRenderLabel={onRenderLabel(
                    'label-aggregation-edit',
                    'aggregation-edit',
                    'Edit',
                  )}
                  multiline
                  autoAdjustHeight
                  value={update.aggregation || ''}
                  onChange={handleUpdate('aggregation')}
                  label="Aggregation"
                  aria-labelledby="label-aggregation-edit"
                  id="aggregation-edit"
                />
              </Col>
            </Row>
          </>
        )}
      </Container>
    </Panel>
  );
};

TemplateEditPanel.propTypes = {
  id: PropTypes.string.isRequired,
  isOpen: PropTypes.bool.isRequired,
  setOpen: PropTypes.func.isRequired,
  updateTemplates: PropTypes.func.isRequired,
};

export default TemplateEditPanel;
