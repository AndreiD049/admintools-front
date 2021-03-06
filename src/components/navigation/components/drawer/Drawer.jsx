/* eslint-disable react/prop-types */
import React, {
  useContext, useEffect, useMemo, useState,
} from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  Panel,
  PanelType,
  classNamesFunction,
  Icon,
  ActionButton,
  Nav,
} from '@fluentui/react';
import constants from '../../../../utils/constants';
import GlobalContext from '../../../../services/GlobalContext';
import keytipStyles from '../../../../styles/keytipStyles';

const classNames = classNamesFunction();
const styles = () => ({
  root: {},
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

const Drawer = ({ isOpen, toggleDrawer }) => {
  const classes = classNames(styles);
  const global = useContext(GlobalContext);
  const user = useMemo(() => global.user, [global.user]);
  const security = useMemo(() => global.security, [global.security]);
  const Authorize = useMemo(() => global.Authorize.bind(global), [global]);
  const history = useHistory();

  const handleLinkClick = (evt, link) => {
    evt.preventDefault();
    history.push(link.url);
    toggleDrawer();
  };

  const [navLinks] = useState([
    {
      links: [
        {
          name: 'Home',
          url: '/',
          icon: 'Home',
          keyTipContent: '1',
          keyTipSequence: ['m', '1'],
          hasMenu: false,
          onClick: handleLinkClick,
        },
        {
          name: 'Appraisals',
          url: '/appraisals',
          code: constants.securities.APPRAISAL_PERIODS.code,
          grant: 'read',
          icon: 'Feedback',
          keyTipContent: '2',
          keyTipSequence: ['m', '2'],
          hasMenu: false,
          onClick: handleLinkClick,
        },
        {
          name: 'Audits',
          url: '/audits',
          code: constants.securities.AUDITS.code,
          grant: 'read',
          icon: 'ComplianceAudit',
          keyTipContent: '3',
          keyTipSequence: ['m', '3'],
          hasMenu: false,
          onClick: handleLinkClick,
        },
        {
          name: 'Reporting',
          code: constants.securities.REPORTS.code,
          grant: 'read',
          keyTipContent: '4',
          keyTipSequence: ['m', '4'],
          hasMenu: true,
          links: [
            {
              name: 'Appraisal report',
              url: '/reporting/appraisal-report',
              code: constants.securities.REPORTS.code,
              grant: 'read',
              icon: 'AutoFillTemplate',
              keyTipContent: '1',
              keyTipSequence: ['m', '4', '1'],
              hasMenu: false,
              onClick: handleLinkClick,
            },
            {
              name: 'Custom reports',
              url: '/reporting/reports',
              code: constants.securities.REPORTS.code,
              grant: 'read',
              icon: 'ReportDocument',
              keyTipContent: '2',
              keyTipSequence: ['m', '4', '2'],
              hasMenu: false,
              onClick: handleLinkClick,
            },
            {
              name: 'Templates',
              url: '/reporting/templates',
              code: constants.securities.REPORT_TEMPLATES.code,
              grant: 'read',
              icon: 'FileTemplate',
              keyTipContent: '3',
              keyTipSequence: ['m', '4', '3'],
              hasMenu: false,
              onClick: handleLinkClick,
            },
          ],
        },
        {
          name: 'Tasks',
          code: constants.securities.TASK.code,
          grant: constants.securities.TASK.grants.read,
          keyTipContent: '5',
          keyTipSequence: ['m', '5'],
          hasMenu: true,
          links: [
            {
              name: 'Dashboard',
              url: '/tasks',
              code: constants.securities.TASK.code,
              grant: constants.securities.TASK.grants.read,
              icon: 'ViewDashboard',
              keyTipContent: '1',
              keyTipSequence: ['m', '5', '1'],
              hasMenu: false,
              onClick: handleLinkClick,
            },
            {
              name: 'Planning',
              url: '/tasks/planning',
              code: constants.securities.TASK.code,
              grant: constants.securities.TASK.grants.read,
              icon: 'PlanView',
              keyTipContent: '2',
              keyTipSequence: ['m', '5', '2'],
              hasMenu: false,
              onClick: handleLinkClick,
            },
            {
              name: 'Rules',
              url: '/tasks/task-rules',
              code: constants.securities.TASK.code,
              grant: constants.securities.TASK.grants.read,
              icon: 'AustralianRules',
              keyTipContent: '3',
              keyTipSequence: ['m', '5', '3'],
              hasMenu: false,
              onClick: handleLinkClick,
            },
            {
              name: 'Flows',
              url: '/tasks/task-flows',
              code: constants.securities.TASK.code,
              grant: constants.securities.TASK.grants.read,
              icon: 'Flow',
              keyTipContent: '4',
              keyTipSequence: ['m', '5', '4'],
              hasMenu: false,
              onClick: handleLinkClick,
            },
          ],
        },
        {
          name: 'Settings',
          code: constants.securities.SETTINGS.code,
          grant: 'read',
          keyTipContent: '6',
          keyTipSequence: ['m', '6'],
          hasMenu: true,
          links: [
            {
              name: 'General',
              url: '/settings',
              code: constants.securities.SETTINGS.code,
              grant: 'read',
              icon: 'Settings',
              keyTipContent: '1',
              keyTipSequence: ['m', '6', '1'],
              hasMenu: false,
              onClick: handleLinkClick,
            },
            {
              name: 'Users',
              url: '/settings/users',
              code: constants.securities.SETTINGS.code,
              grant: 'users',
              icon: 'UserFollowed',
              keyTipContent: '2',
              keyTipSequence: ['m', '6', '2'],
              hasMenu: false,
              onClick: handleLinkClick,
            },
            {
              name: 'Permissions',
              url: '/settings/permissions',
              code: constants.securities.SETTINGS.code,
              grant: 'permissions',
              icon: 'Permissions',
              keyTipContent: '3',
              keyTipSequence: ['m', '6', '3'],
              hasMenu: false,
              onClick: handleLinkClick,
            },
          ],
        },
      ],
    },
  ]);

  const [visibleLinksGroup, setVisibleLinksGroup] = useState([]);

  useEffect(() => {
    const filterLinks = (links) => {
      const result = [];
      links.forEach((link) => {
        if (link.code && link.grant) {
          if (Authorize(link.code, link.grant)) {
            if (link.links) {
            // eslint-disable-next-line no-param-reassign
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
    setVisibleLinksGroup([
      {
        links: filterLinks(navLinks[0].links),
      },
    ]);
  }, [security, user, Authorize, navLinks]);

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
        groups={visibleLinksGroup}
        onRenderLink={(link) => (
          <ActionButton
            keytipProps={
              link.keyTipContent && {
                styles: keytipStyles,
                content: link.keyTipContent,
                onExecute: (el) => (link.links ? link.isExpanded || el.click() : el.click()),
                keySequences: link.keyTipSequence,
                hasMenu: link.hasMenu || false,
              }
            }
          >
            {link.name}
          </ActionButton>
        )}
      />
    </Panel>
  );
};

Drawer.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  toggleDrawer: PropTypes.func.isRequired,
};

export default Drawer;
