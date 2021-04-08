import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import {
  DefaultButton,
  makeStyles,
  Panel,
  PanelType,
  Separator,
  Stack,
  TextField,
} from '@fluentui/react';
import { Col, Container, Row } from 'react-grid-system';
import ReportingService from '../../../../services/ReportingService';
import Box from '../../../shared/box';

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

const ReportsDetailsPanel = ({ id, isOpen, setOpen }) => {
  const classes = useStyles();
  const [details, setDetails] = useState(null);
  const [parameters, setParameters] = useState([]);

  useEffect(() => {
    let mounted = true;
    async function run() {
      if (id && isOpen) {
        const reportDetails = await ReportingService.getReport(id);
        if (mounted) {
          setDetails(reportDetails);
          setParameters(
            reportDetails.parameters.map((p) => ({
              name: p.name,
              value: p.defaultValue,
              path: p.path,
            }))
          );
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
      isLightDismiss
    >
      <Container fluid className={classes.root}>
        <Separator>General</Separator>
        <Row justify="start">
          <Col xs={12} sm={8} md={6}>
            <TextField
              label="Name: "
              value={details.name}
              underlined
              readOnly
            />
            <TextField
              label="Description: "
              value={details.description}
              multiline
              underlined
              readOnly
              resizable={false}
            />
            <TextField
              label="Template: "
              value={details.template.name}
              underlined
              readOnly
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
                  readOnly
                />
                <TextField
                  label="Path: "
                  value={parameter.path}
                  underlined
                  readOnly
                />
                <TextField
                  label="Default value: "
                  value={parameter.value}
                  underlined
                  readOnly
                />
              </Box>
            ))}
          </Col>
        </Row>
        <Separator>Aggregation</Separator>
        <Row justify="start">
          <Col xs={12} sm={8} md={6}>
            <TextField
              value={JSON.stringify(
                JSON.parse(details.template.aggregation),
                null,
                4
              )}
              multiline
              underlined
              readOnly
              autoAdjustHeight
              resizable={false}
            />
          </Col>
        </Row>
      </Container>
    </Panel>
  ) : null;
};

ReportsDetailsPanel.propTypes = {
  id: PropTypes.string.isRequired,
  isOpen: PropTypes.bool.isRequired,
  setOpen: PropTypes.func.isRequired,
};

export default ReportsDetailsPanel;
