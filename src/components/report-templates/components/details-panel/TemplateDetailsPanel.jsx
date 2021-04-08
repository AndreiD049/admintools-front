import React, { useEffect, useState } from 'react';
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

const useStyles = makeStyles(() => ({
  root: {
    '& > * + *': {
      marginTop: '16px',
    },
  },
}));

const TemplateDetailsPanel = ({ id, isOpen, setOpen, setEdit }) => {
  const classes = useStyles();
  const [template, setTemplate] = useState(null);

  useEffect(() => {
    let mounted = true;
    async function run() {
      const data = await ReportingService.getTemplate(id);
      if (mounted) {
        setTemplate(data);
      }
    }
    if (id) run();
    return () => {
      mounted = false;
    };
  }, [id]);

  const handleDownload = () => {
    ReportingService.downloadTemplate(id, template.filename || 'template');
  };

  const handleEdit = () => {
    setEdit(true);
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
      <PrimaryButton onClick={handleEdit}>Edit</PrimaryButton>
      <DefaultButton onClick={() => setOpen(false)}>Close</DefaultButton>
    </Stack>
  );

  return (
    <Panel
      isOpen={isOpen}
      onDismiss={() => setOpen(false)}
      headerText={`Details - ${template ? template.name : ''}`}
      type={PanelType.large}
      onRenderFooterContent={onRenderFooter}
      isLightDismiss
    >
      <Container fluid className={classes.root}>
        <Separator>General</Separator>
        {template && (
          <>
            <Row justify="start">
              <Col xs={12} sm={8} md={4}>
                <TextField
                  label="Name: "
                  value={template && template.name}
                  readOnly
                  underlined
                />
                <TextField
                  label="Created by: "
                  value={
                    template &&
                    template.createdUser &&
                    template.createdUser.username
                  }
                  readOnly
                  underlined
                />
                <TextField
                  label="Created on: "
                  value={
                    template && new Date(template.createdDate).toLocaleString()
                  }
                  readOnly
                  underlined
                />
                {template.modifiedUser && (
                  <>
                    <TextField
                      label="Modified by: "
                      value={template.modifiedUser.username}
                      readOnly
                      underlined
                    />
                    <TextField
                      label="Modified on: "
                      value={
                        template.modifiedDate &&
                        new Date(template.modifiedDate).toLocaleString()
                      }
                      readOnly
                      underlined
                    />
                  </>
                )}
              </Col>
            </Row>
            <Separator>Details</Separator>
            <Row justify="start">
              <Col xs={12} sm={8} md={4}>
                <TextField
                  label="Filename: "
                  value={template.filename}
                  readOnly
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
              <Col xs={12} sm={8} md={6}>
                <TextField
                  readOnly
                  multiline
                  autoAdjustHeight
                  value={template.aggregation || ''}
                  label="Aggregation"
                />
              </Col>
            </Row>
          </>
        )}
      </Container>
    </Panel>
  );
};

TemplateDetailsPanel.propTypes = {
  id: PropTypes.string.isRequired,
  isOpen: PropTypes.bool.isRequired,
  setOpen: PropTypes.func.isRequired,
  setEdit: PropTypes.func.isRequired,
};

export default TemplateDetailsPanel;
