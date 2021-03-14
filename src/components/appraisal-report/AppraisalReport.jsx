import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-grid-system';
import {
  PrimaryButton, Separator, Dropdown, makeStyles, DatePicker,
} from '@fluentui/react';
import { downloadBlob } from 'download.js';
import PageHeader from '../shared/page-header';
import AppraisalService from '../../services/AppraisalService';
import NotificationService from '../../services/NotificationService';
import ReportingService from '../../services/ReportingService';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > * + *': {
      marginTop: theme.spacing.m,
    },
  },
}));

const AppraisalReport = () => {
  const classes = useStyles();
  const [periods, setPeriods] = useState([]);
  const [dateFrom, setDateFrom] = useState(null);
  const [dateTo, setDateTo] = useState(null);
  const [selectedPeriods, setSelectedPeriods] = useState([]);

  const handlePeriodsChange = (evt, selection) => {
    if (selection) {
      if (selection.selected) {
        setSelectedPeriods((prev) => prev.concat(selection.key));
      } else {
        setSelectedPeriods((prev) => prev.filter((p) => p !== selection.key));
      }
    }
  };

  const handleChangeDate = (setFunc) => (dt) => {
    setFunc(new Date(Date.UTC(dt.getFullYear(), dt.getMonth(), dt.getDate())));
  };

  const handleGenerate = async () => {
    if (dateFrom && dateTo && (dateTo < dateFrom)) {
      return NotificationService.notifySevereWarning("'Date to' should be bigger than 'Date from'");
    }
    // if any of the fields are set, generate the report
    if (dateFrom || dateTo || selectedPeriods.length) {
      const report = await ReportingService.generateAppraisalReport({
        dateFrom,
        dateTo,
        periods: selectedPeriods,
      });
      if (report) {
        return downloadBlob('appraisal.xlsx', report);
      }
      return null;
    }
    // otherwise, notify user
    return NotificationService.notifySevereWarning('At least one field should be set');
  };

  useEffect(() => {
    let mounted = true;
    async function run() {
      const result = await AppraisalService.getPeriods();
      if (result && mounted) {
        setPeriods(result.map((r) => ({
          key: r.id,
          text: r.name,
          data: r,
        })));
      }
    }
    run();
    return () => {
      mounted = false;
    };
  }, []);

  return (
    <Container fluid className={classes.root}>
      <PageHeader text="Appraisal Report" />
      <Separator />
      {/* Select periods */}
      <Row align="center" justify="center">
        <Col md={8} sm={12}>
          <Dropdown
            placeholder="Select periods"
            label="Select one or multiple periods"
            multiSelect
            options={periods}
            onChange={handlePeriodsChange}
            selectedKeys={selectedPeriods}
          />
        </Col>
      </Row>
      {/* Select Date range */}
      <Row align="center" justify="center">
        <Col md={4} sm={12}>
          <Row justify="center">
            <DatePicker
              placeholder="Select date from..."
              aria-label="Select date from"
              value={dateFrom}
              label="Date from"
              onSelectDate={handleChangeDate(setDateFrom)}
            />
          </Row>
        </Col>
        <Col md={4} sm={12}>
          <Row justify="center">
            <DatePicker
              placeholder="Select date to..."
              aria-label="Select date to"
              value={dateTo}
              label="Date to"
              onSelectDate={handleChangeDate(setDateTo)}
            />
          </Row>
        </Col>
      </Row>
      {/* Generate button */}
      <Row align="center" justify="center">
        <Col md={4} sm={12}>
          <Row justify="center">
            <PrimaryButton
              text="Generate"
              type="submit"
              onClick={handleGenerate}
            />
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default AppraisalReport;
