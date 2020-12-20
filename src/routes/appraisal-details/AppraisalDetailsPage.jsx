import React, { useContext } from 'react';
import GlobalContext from '../../services/GlobalContext';

const AppraisalDetailsPage = () => {
  const global = useContext(GlobalContext);
  return (
    <h1>AppraisalDetails</h1>
  );
};

export default AppraisalDetailsPage;
