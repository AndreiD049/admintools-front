import React, { useState, useEffect, useContext } from 'react';
import {
  Link, Switch, Route, useRouteMatch,
} from 'react-router-dom';
import AppraisalService from '../../services/AppraisalService';
import GlobalContext from '../../services/GlobalContext';
import AppraisalDetailsPage from '../appraisal-details';
import { makeStyles } from '@fluentui/react-theme-provider';

const useStyles = makeStyles((theme) => ({

}));

const AppraisalsPage = () => {
  const [items, setItems] = useState([]);
  const [dialogOpen, setDialogOpen] = useState(false);
  const global = useContext(GlobalContext);
  const classes = useStyles();
  const { path } = useRouteMatch();

  useEffect(() => {
    async function loadData() {
      setItems(await AppraisalService.getPeriods());
    }
    loadData();
  }, []);

  return (
    <h1>AppraisalsPage</h1>
  );
};

export default AppraisalsPage;
