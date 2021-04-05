import React, { Suspense, useState } from 'react';
import { Container } from 'react-grid-system';
import FlexLayout from 'flexlayout-react';
import { makeStyles } from '@fluentui/react';
import '../../../node_modules/flexlayout-react/style/dark.css';
import PageHeader from '../../components/shared/page-header';
import LoginRequired from '../../components/shared/login-required';

const HomePlannedItems = React.lazy(() => import('../../components/widgets/home-planned-items'));

const useStyles = makeStyles((theme) => ({
  panel: {
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.palette.white,
    color: theme.palette.black,
    boxSizing: 'border-box',
  },
  layoutSplitter: {
    backgroundColor: theme.palette.white,
    '&:hover': {
      backgroundColor: theme.palette.neutralLighter,
    },
  },
  layoutSplitterDrag: {
    zIndex: 1000,
    borderRadius: 5,
    backgroundColor: theme.palette.neutralLight,
  },
  layoutOutlineRect: {
    position: 'absolute',
    cursor: 'move',
    boxSizing: 'border-box',
    border: `2px solid ${theme.palette.neutralDark}`,
    boxShadow: `inset 0 0 60px ${theme.palette.neutralLighter}`,
    borderRadius: 5,
    zIndex: 1000,
  },
  layoutOutlineRectEdge: {
    cursor: 'move',
    border: `2px solid ${theme.palette.neutralDark}`,
    boxShadow: `inset 0 0 60px ${theme.palette.neutralLighter}`,
    borderRadius: 5,
    zIndex: 1000,
    boxSizing: 'border-box',
  },
  layoutEdgeRect: {
    position: 'absolute',
    zIndex: 1000,
    boxShadow: `inset 0 0 5px ${theme.palette.neutralLighter}`,
    backgroundColor: theme.palette.neutralSecondaryAlt,
  },
  layoutDragRect: {
    position: 'absolute',
    cursor: 'move',
    color: theme.palette.black,
    backgroundColor: theme.palette.neutralLighterAlt,
    border: `2px solid ${theme.palette.neutralLight}`,
    boxShadow: `inset 0 0 60px ${theme.palette.whiteTranslucent40}`,
    borderRadius: 5,
    zIndex: 1000,
    boxSizing: 'border-box',
    opacity: 0.9,
    textAlign: 'center',
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    overflow: 'hidden',
    padding: 10,
    wordWrap: 'break-word',
    fontSize: theme.fonts.medium,
    fontFamily: 'inherit',
  },
  layoutTabSet: {
    overflow: 'hidden',
    backgroundColor: theme.palette.neutralLight,
    boxSizing: 'border-box',
    fontSize: theme.fonts.medium,
    fontFamily: 'inherit',
  },
  layoutTabsetHeader: {
    position: 'absolute',
    display: 'flex',
    alignItems: 'center',
    left: 0,
    right: 0,
    padding: '3px 3px 3px 5px',
    boxSizing: 'border-box',
    borderBottom: `1px solid ${theme.palette.neutralLighterAlt}`,
    color: theme.palette.white,
    backgroundColor: theme.palette.neutralLight,
    boxShadow: `inset 0 0 3px 0 ${theme.palette.neutralDark}`,
  },
  layoutTabsetTabbarOuter: {
    boxSizing: 'border-box',
    backgroundColor: theme.palette.neutralLight,
    position: 'absolute',
    left: 0,
    right: 0,
    overflow: 'hidden',
    display: 'flex',
  },
  layoutTabsetTabbarOuterTop: {
    borderBottom: `1px solid ${theme.palette.neutralLighterAlt}`,
  },
  layoutTabsetTabbarOuterBottom: {
    borderTop: `1px solid ${theme.palette.neutralLighterAlt}`,
  },
  layoutTabsetSelected: {
    backgroundColor: theme.palette.themeLight,
  },
  layoutTabsetMaximized: {
    backgroundImage: `linear-gradient(${theme.palette.neutralLighterAlt}, ${theme.palette.neutralLight})`,
  },
  layoutTabButtonSelected: {
    backgroundColor: theme.palette.themePrimary,
    color: theme.palette.accent,
    ':hover': {
      backgroundColor: `${theme.palette.themePrimary} !important`,
    },
  },
  layoutTabButton: {
    display: 'inline-flex',
    alignItems: 'center',
    boxSizing: 'border-box',
    padding: '3px 8px',
    margin: '0px 2px',
    cursor: 'pointer',
    '&:hover': {
      backgroundColor: theme.palette.neutralTertiaryAlt,
      color: theme.palette.accent,
    },
  },
  layoutTabButtonTop: {
    boxShadow: 'none',
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
  },
  layoutTabButtonUnselected: {
    backgroundColor: theme.palette.neutralSecondaryAlt,
    color: theme.palette.accent,
  },
  layoutBorderButtonContent: {
    display: 'inline-block',
    color: theme.palette.accent,
  },
  layoutTabButtonTextBox: {
    border: 'none',
    color: theme.palette.neutralPrimary,
    backgroundColor: theme.palette.neutralQuaternaryAlt,
    '&:focus': {
      outline: 'none',
    },
  },
  layoutTabButtonTrailing: {
    width: 10,
    height: 10,
    marginLeft: theme.spacing.s2,
    background: 'transparent url("./images/close.png") no-repeat center',
    filter: 'brightness(2)',
  },
  layoutBorder: {
    boxSizing: 'border-box',
    overflow: 'hidden',
    display: 'flex',
    fontSize: theme.fonts.medium,
    fontFamily: 'inherit',
    backgroundColor: theme.palette.neutralLight,
  },
  layoutBorderTop: {
    borderBottom: `1px solid ${theme.palette.neutralTertiaryAlt}`,
    alignItems: 'center',
  },
  layoutBorderBottom: {
    borderTop: `1px solid ${theme.palette.neutralTertiaryAlt}`,
    alignItems: 'center',
  },
  layoutBorderLeft: {
    borderRight: `1px solid ${theme.palette.neutralTertiaryAlt}`,
    alignContent: 'center',
    flexDirection: 'column',
  },
  layoutBorderRight: {
    borderLeft: `1px solid ${theme.palette.neutralTertiaryAlt}`,
    alignContent: 'center',
    flexDirection: 'column',
  },
  layoutBorderButtonSelected: {
    backgroundColor: `${theme.palette.themePrimary} !important`,
    color: theme.palette.accent,
    '&:hover': {
      backgroundColor: `${theme.palette.themePrimary} !important`,
    },
  },
  layoutBorderButton: {
    display: 'flxe',
    alignItems: 'center',
    cursor: 'pointer',
    padding: '3px 8px',
    margin: 2,
    boxSizing: 'border-box',
    whiteSpace: 'nowrap',
    backgroundColor: theme.palette.neutralSecondaryAlt,
    '&:hover': {
      backgroundColor: theme.palette.neutralTertiaryAlt,
      color: theme.palette.black,
    },
  },
  layoutBorderButtonTrailing: {
    display: 'inline-block',
    marginLeft: 8,
    minWidth: 8,
    minHeight: 8,
    background: 'transparent url("./images/close.png") no-repeat center',
    filter: 'brightness(2)',
  },
  layoutBorderToolbarButtonFloat: {
    background: 'transparent url("./images/popout.png") no-repeat center',
    filter: 'brightness(2)',
  },
  layoutBorderToolbarButtonOverflow: {
    background: 'transparent url("./images/more2.png") no-repeat center',
    filter: 'brightness(2)',
  },
  layoutTabToolbarButtonMin: {
    background: 'transparent url("../images/maximize.png") no-repeat center',
    filter: 'brightness(2)',
  },
  layoutTabToolbarButtonMax: {
    background: 'transparent url("../images/restore.png") no-repeat center',
    filter: 'brightness(2)',
  },
  layoutTabToolbarButtonFloat: {
    background: 'transparent url("../images/popout.png") no-repeat center',
    filter: 'brightness(2)',
  },
  layoutTabButtonOverflow: {
    marginLeft: 10,
    paddingLeft: 12,
    border: 'none',
    color: theme.palette.accent,
    fontSize: theme.fonts.medium,
    background: 'transparent url("./images/more2.png") no-repeat left',
    filter: 'brightness(2)',
  },
  layoutPopUpMenu: {
    fontSize: theme.fonts.medium,
    fontFamily: 'inherit',
  },
  layoutPopUpMenuItem: {
    padding: '2px 10px 2px 10px',
    whiteSpace: 'nowrap',
    '&:hover': {
      backgroundColor: theme.palette.neutralLighterAlt,
    },
  },
  layoutPopUpMenuContainer: {
    boxShadow: 'inset 0 0 5px rgba(0, 0, 0, 0.15)',
    border: `1px solid ${theme.palette.neutralLighterAlt}`,
    color: theme.palette.black,
    backgroundColor: theme.palette.white,
    borderRadius: 3,
    position: 'absolute',
    zIndex: 1000,
    maxHeight: '50%',
    minWidth: '100px',
    overflow: 'auto',
    cursor: 'pointer',
  },
  layoutFloatingWindowTab: {
    overflow: 'auto',
    left: 0,
    top: 0,
    right: 0,
    bottom: 0,
    position: 'absolute',
    boxSizing: 'border-box',
    backgroundColor: theme.palette.white,
    color: theme.palette.black,
  },
  layoutTabsetSizer: {
    paddingTop: 5,
    paddingBottom: 3,
    fontSize: theme.fonts.medium,
    fontFamily: 'inherit',
  },
  layoutTabsetHeaderSizer: {
    paddingTop: 3,
    paddingBottom: 3,
    fontSize: theme.fonts.medium,
    fontFamily: 'inherit',
  },
  layoutBorderSizer: {
    paddingTop: 6,
    paddingBottom: 5,
    fontSize: theme.fonts.medium,
    fontFamily: 'inherit',
  },
  layoutTab: {
    overflow: 'auto',
    position: 'absolute',
    boxSizing: 'border-box',
    color: theme.palette.black,
    backgroundColor: theme.palette.white,
    border: `1px solid ${theme.palette.neutralLighter}`,
  },
  layoutTabFloating: {
    overflow: 'auto',
    position: 'absolute',
    boxSizing: 'border-box',
    color: theme.palette.black,
    backgroundColor: theme.palette.white,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
}));

const HomePage = () => {
  const classes = useStyles();
  const json = {
    global: {
      tabEnableFloat: true,
    },
    borders: [
      {
        type: 'border',
        location: 'bottom',
        size: 100,
        children: [
          {
            type: 'tab',
            name: 'four',
            component: 'text',
          },
        ],
      },
      {
        type: 'border',
        location: 'left',
        size: 100,
        children: [],
      },
    ],
    layout: {
      type: 'row',
      weight: 100,
      children: [
        {
          type: 'tabset',
          weight: 50,
          selected: 0,
          children: [
            {
              type: 'tab',
              name: 'One',
              component: 'home',
            },
          ],
        },
        {
          type: 'row',
          weight: 50,
          children: [
            {
              type: 'tabset',
              weight: 50,
              selected: 0,
              children: [
                {
                  type: 'tab',
                  name: 'Two',
                  component: 'text',
                },
                {
                  type: 'tab',
                  name: 'Three',
                  component: 'text',
                },
              ],
            },
            {
              type: 'tabset',
              weight: 50,
              selected: 0,
              children: [
                {
                  type: 'tab',
                  name: 'Two',
                  component: 'text',
                },
                {
                  type: 'tab',
                  name: 'Three',
                  component: 'text',
                },
              ],
            },
          ],
        },
      ],
    },
  };

  const [model] = useState(FlexLayout.Model.fromJson(json));

  const factory = (node) => {
    const component = node.getComponent();
    if (component === 'text') {
      return (
        <div className={classes.panel}>
          Panel
          {node.getName()}
        </div>
      );
    }
    if (component === 'home') {
      return (
        <Suspense fallback={(<div>Loading...</div>)}>
          <HomePlannedItems />
        </Suspense>
      );
    }
    return null;
  };

  const classNameMapper = (flexLayoutName) => {
    const mapper = {
      flexlayout__splitter: classes.layoutSplitter,
      flexlayout__splitter_drag: classes.layoutSplitterDrag,
      flexlayout__outline_rect: classes.layoutOutlineRect,
      flexlayout__outline_rect_edge: classes.layoutOutlineRectEdge,
      flexlayout__edge_rect: classes.layoutEdgeRect,
      flexlayout__drag_rect: classes.layoutDragRect,
      flexlayout__tabset: classes.layoutTabSet,
      flexlayout__tabset_header: classes.layoutTabsetHeader,
      flexlayout__tabset_tabbar_outer: classes.layoutTabsetTabbarOuter,
      flexlayout__tabset_tabbar_outer_top: classes.layoutTabsetTabbarOuterTop,
      flexlayout__tabset_tabbar_outer_bottom: classes.layoutTabsetTabbarOuterBottom,
      'flexlayout__tabset-selected': classes.layoutTabsetSelected,
      'flexlayout__tabset-maximized': classes.layoutTabsetMaximized,
      'flexlayout__tab_button--selected': classes.layoutTabButtonSelected,
      flexlayout__tab_button: classes.layoutTabButton,
      'flexlayout__tab_button--unselected': classes.layoutTabButtonUnselected,
      flexlayout__tab_button_top: classes.layoutTabButtonTop,
      flexlayout__tab_button_textbox: classes.layoutTabButtonTextBox,
      flexlayout__tab_button_trailing: classes.layoutTabButtonTrailing,
      flexlayout__border: classes.layoutBorder,
      flexlayout__border_top: classes.layoutBorderTop,
      flexlayout__border_bottom: classes.layoutBorderBottom,
      flexlayout__border_left: classes.layoutBorderLeft,
      flexlayout__border_right: classes.layoutBorderRight,
      'flexlayout__border_button--selected': classes.layoutBorderButtonSelected,
      flexlayout__border_button: classes.layoutBorderButton,
      flexlayout__border_button_trailing: classes.layoutBorderButtonTrailing,
      'flexlayout__border_toolbar_button-float': classes.layoutBorderToolbarButtonFloat,
      flexlayout__border_toolbar_button_overflow: classes.layoutBorderToolbarButtonOverflow,
      'flexlayout__tab_toolbar_button-min': classes.layoutTabToolbarButtonMin,
      'flexlayout__tab_toolbar_button-max': classes.layoutTabToolbarButtonMax,
      'flexlayout__tab_toolbar_button-float': classes.layoutTabToolbarButtonFloat,
      flexlayout__tab_button_overflow: classes.layoutTabButtonOverflow,
      flexlayout__border_button_content: classes.layoutBorderButtonContent,
      flexlayout__popup_menu: classes.layoutPopUpMenu,
      flexlayout__popup_menu_item: classes.layoutPopUpMenuItem,
      flexlayout__popup_menu_container: classes.layoutPopUpMenuContainer,
      flexlayout__floating_window_tab: classes.layoutFloatingWindowTab,
      flexlayout__tabset_sizer: classes.layoutTabsetSizer,
      flexlayout__tabset_header_sizer: classes.layoutTabsetHeaderSizer,
      flexlayout__border_sizer: classes.layoutBorderSizer,
      flexlayout__tab: classes.layoutTab,
      flexlayout__tab_floating: classes.layoutTabFloating,
    };
    return mapper[flexLayoutName] ?? flexLayoutName;
  };

  return (
    <>
      <LoginRequired />
      <PageHeader text="Home Page" />
      <Container
        fluid
        style={{
          height: '1000px',
          width: '100%',
        }}
      >
        <FlexLayout.Layout classNameMapper={classNameMapper} model={model} factory={factory} />
      </Container>
    </>
  );
};

export default HomePage;
