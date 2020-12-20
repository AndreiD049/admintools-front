import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  Panel, PanelType, classNamesFunction, Icon, ActionButton, Nav,
} from '@fluentui/react';
import constants from '../../../../utils/constants';
import GlobalContext from '../../../../services/GlobalContext';

const classNames = classNamesFunction();
const styles = (props) => ({
  root: {
  },
  icon: {
    height: '40px',
    width: '100%',
    borderBottom: '1px solid',
    position: 'absolute',
    top: 0,
    left: 0,
  },
  nav: {
    marginTop: '40px',
  },
});

const navLinkGroups = [
  {
    links: [
      {
        name: 'Home',
        url: '/',
        icon: 'Home',
      },
      {
        name: 'Appraisals',
        url: '/appraisals',
        code: constants.securities.APPRAISAL_PERIODS.code,
        grant: 'read',
        icon: 'Feedback',
      },
      {
        name: 'Audits',
        url: '/audits',
        code: constants.securities.AUDITS.code,
        grant: 'read',
        icon: 'ComplianceAudit',
      },
      {
        name: 'Reporting',
        code: constants.securities.REPORTS.code,
        grant: 'read',
        links: [
          {
            name: 'Reports',
            url: '/reporting/reports',
            code: constants.securities.REPORTS.code,
            grant: 'read',
            icon: 'ReportDocument',
          },
          {
            name: 'Templates',
            url: '/reporting/templates',
            code: constants.securities.REPORT_TEMPLATES.code,
            grant: 'read',
            icon: 'FileTemplate',
          },
        ],
      },
      {
        name: 'Settings',
        code: constants.securities.SETTINGS.code,
        grant: 'read',
        links: [
          {
            name: 'General',
            url: '/settings',
            code: constants.securities.SETTINGS.code,
            grant: 'read',
            icon: 'Settings',
          },
          {
            name: 'Users',
            url: '/settings/users',
            code: constants.securities.SETTINGS.code,
            grant: 'users',
            icon: 'UserFollowed',
          },
          {
            name: 'Permissions',
            url: '/settings/permissions',
            code: constants.securities.SETTINGS.code,
            grant: 'permissions',
            icon: 'Permissions',
          },
        ],
      },
    ],
  },
];

const Drawer = ({ isOpen, toggleDrawer }) => {
  const classes = classNames(styles);
  const global = useContext(GlobalContext);
  const history = useHistory();

  const filterLinks = (links) => {
    const result = [];
    links.forEach((link) => {
      if (link.code && link.grant) {
        if (global.Authorize(link.code, link.grant)) {
          if (link.links) {
            link.links = filterLinks(link.links);
          }
          result.push(link);
        }
      } else {
        result.push(link);
      }
    });
    return result;
  };

  const handleLinkClick = (link) => {
    history.push(link.url);
  };

  const links = [{
    links: filterLinks(navLinkGroups[0].links),
  }];

  return (
    <Panel
      isOpen={isOpen}
      hasCloseButton={false}
      type={PanelType.smallFixedNear}
      isLightDismiss
      onDismiss={toggleDrawer}
    >
      <ActionButton className={classes.icon} onClick={toggleDrawer}>
        <Icon iconName="GlobalNavButton" style={{ marginLeft: 5 }} />
      </ActionButton>
      <Nav
        className={classes.nav}
        ariaLabel="Global navigation"
        selectedKey=""
        groups={links}
        onLinkClick={handleLinkClick}
      />
    </Panel>
  );
};

Drawer.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  toggleDrawer: PropTypes.func.isRequired,
};

export default Drawer;
