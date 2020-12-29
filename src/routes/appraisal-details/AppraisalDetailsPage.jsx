import React, { useContext } from 'react';
import { Container } from 'react-grid-system';
import GlobalContext from '../../services/GlobalContext';
import AuthorizationRedirectComponent from '../../components/shared/authorization-redirect-component';
import AppraisalDetails from '../../components/appraisal-details';
import constants from '../../utils/constants';

const AppraisalDetailsPage = () => {
  const global = useContext(GlobalContext);
  return (
    <Container md>
      <AuthorizationRedirectComponent
        code={constants.securities.APPRAISAL_DETAILS.code}
        grant={constants.securities.APPRAISAL_DETAILS.grants.read}
        to="/appraisals"
        failureNotification={{
          type: 'info',
          header: 'No access',
          content: 'You have no access to this page. Please contact your administrator',
        }}
      >
        <AppraisalDetails context={global} />
      </AuthorizationRedirectComponent>
    </Container>
  );
};

export default AppraisalDetailsPage;
