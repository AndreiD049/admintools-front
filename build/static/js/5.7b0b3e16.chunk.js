(this['webpackJsonpadmintools-front'] =
  this['webpackJsonpadmintools-front'] || []).push([
  [5],
  {
    439: function (t, e, o) {
      'use strict';
      o.r(e);
      var a = o(1),
        r = o(5),
        l = o(0),
        n = o.n(l),
        i = o(7),
        u = o(416),
        b = o.n(u),
        d = o(150),
        p = (o(437), o(43)),
        c = o(169),
        s = n.a.lazy(function () {
          return o.e(4).then(o.bind(null, 438));
        }),
        y = Object(d.a)(function (t) {
          return {
            panel: {
              height: '100%',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: t.palette.white,
              color: t.palette.black,
              boxSizing: 'border-box',
            },
            layoutSplitter: {
              backgroundColor: t.palette.white,
              '&:hover': { backgroundColor: t.palette.neutralLighter },
            },
            layoutSplitterDrag: {
              zIndex: 1e3,
              borderRadius: 5,
              backgroundColor: t.palette.neutralLight,
            },
            layoutOutlineRect: {
              position: 'absolute',
              cursor: 'move',
              boxSizing: 'border-box',
              border: '2px solid '.concat(t.palette.neutralDark),
              boxShadow: 'inset 0 0 60px '.concat(t.palette.neutralLighter),
              borderRadius: 5,
              zIndex: 1e3,
            },
            layoutOutlineRectEdge: {
              cursor: 'move',
              border: '2px solid '.concat(t.palette.neutralDark),
              boxShadow: 'inset 0 0 60px '.concat(t.palette.neutralLighter),
              borderRadius: 5,
              zIndex: 1e3,
              boxSizing: 'border-box',
            },
            layoutEdgeRect: {
              position: 'absolute',
              zIndex: 1e3,
              boxShadow: 'inset 0 0 5px '.concat(t.palette.neutralLighter),
              backgroundColor: t.palette.neutralSecondaryAlt,
            },
            layoutDragRect: {
              position: 'absolute',
              cursor: 'move',
              color: t.palette.black,
              backgroundColor: t.palette.neutralLighterAlt,
              border: '2px solid '.concat(t.palette.neutralLight),
              boxShadow: 'inset 0 0 60px '.concat(t.palette.whiteTranslucent40),
              borderRadius: 5,
              zIndex: 1e3,
              boxSizing: 'border-box',
              opacity: 0.9,
              textAlign: 'center',
              display: 'flex',
              justifyContent: 'center',
              flexDirection: 'column',
              overflow: 'hidden',
              padding: 10,
              wordWrap: 'break-word',
              fontSize: t.fonts.medium,
              fontFamily: 'inherit',
            },
            layoutTabSet: {
              overflow: 'hidden',
              backgroundColor: t.palette.neutralLight,
              boxSizing: 'border-box',
              fontSize: t.fonts.medium,
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
              borderBottom: '1px solid '.concat(t.palette.neutralLighterAlt),
              color: t.palette.white,
              backgroundColor: t.palette.neutralLight,
              boxShadow: 'inset 0 0 3px 0 '.concat(t.palette.neutralDark),
            },
            layoutTabsetTabbarOuter: {
              boxSizing: 'border-box',
              backgroundColor: t.palette.neutralLight,
              position: 'absolute',
              left: 0,
              right: 0,
              overflow: 'hidden',
              display: 'flex',
            },
            layoutTabsetTabbarOuterTop: {
              borderBottom: '1px solid '.concat(t.palette.neutralLighterAlt),
            },
            layoutTabsetTabbarOuterBottom: {
              borderTop: '1px solid '.concat(t.palette.neutralLighterAlt),
            },
            layoutTabsetSelected: { backgroundColor: t.palette.themeLight },
            layoutTabsetMaximized: {
              backgroundImage: 'linear-gradient('
                .concat(t.palette.neutralLighterAlt, ', ')
                .concat(t.palette.neutralLight, ')'),
            },
            layoutTabButtonSelected: {
              backgroundColor: t.palette.themePrimary,
              color: t.palette.accent,
              ':hover': {
                backgroundColor: ''.concat(
                  t.palette.themePrimary,
                  ' !important'
                ),
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
                backgroundColor: t.palette.neutralTertiaryAlt,
                color: t.palette.accent,
              },
            },
            layoutTabButtonTop: {
              boxShadow: 'none',
              borderTopLeftRadius: 0,
              borderTopRightRadius: 0,
            },
            layoutTabButtonUnselected: {
              backgroundColor: t.palette.neutralSecondaryAlt,
              color: t.palette.accent,
            },
            layoutBorderButtonContent: {
              display: 'inline-block',
              color: t.palette.accent,
            },
            layoutTabButtonTextBox: {
              border: 'none',
              color: t.palette.neutralPrimary,
              backgroundColor: t.palette.neutralQuaternaryAlt,
              '&:focus': { outline: 'none' },
            },
            layoutTabButtonTrailing: {
              width: 10,
              height: 10,
              marginLeft: t.spacing.s2,
              background:
                'transparent url("./images/close.png") no-repeat center',
              filter: 'brightness(2)',
            },
            layoutBorder: {
              boxSizing: 'border-box',
              overflow: 'hidden',
              display: 'flex',
              fontSize: t.fonts.medium,
              fontFamily: 'inherit',
              backgroundColor: t.palette.neutralLight,
            },
            layoutBorderTop: {
              borderBottom: '1px solid '.concat(t.palette.neutralTertiaryAlt),
              alignItems: 'center',
            },
            layoutBorderBottom: {
              borderTop: '1px solid '.concat(t.palette.neutralTertiaryAlt),
              alignItems: 'center',
            },
            layoutBorderLeft: {
              borderRight: '1px solid '.concat(t.palette.neutralTertiaryAlt),
              alignContent: 'center',
              flexDirection: 'column',
            },
            layoutBorderRight: {
              borderLeft: '1px solid '.concat(t.palette.neutralTertiaryAlt),
              alignContent: 'center',
              flexDirection: 'column',
            },
            layoutBorderButtonSelected: {
              backgroundColor: ''.concat(t.palette.themePrimary, ' !important'),
              color: t.palette.accent,
              '&:hover': {
                backgroundColor: ''.concat(
                  t.palette.themePrimary,
                  ' !important'
                ),
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
              backgroundColor: t.palette.neutralSecondaryAlt,
              '&:hover': {
                backgroundColor: t.palette.neutralTertiaryAlt,
                color: t.palette.black,
              },
            },
            layoutBorderButtonTrailing: {
              display: 'inline-block',
              marginLeft: 8,
              minWidth: 8,
              minHeight: 8,
              background:
                'transparent url("./images/close.png") no-repeat center',
              filter: 'brightness(2)',
            },
            layoutBorderToolbarButtonFloat: {
              background:
                'transparent url("./images/popout.png") no-repeat center',
              filter: 'brightness(2)',
            },
            layoutBorderToolbarButtonOverflow: {
              background:
                'transparent url("./images/more2.png") no-repeat center',
              filter: 'brightness(2)',
            },
            layoutTabToolbarButtonMin: {
              background:
                'transparent url("../images/maximize.png") no-repeat center',
              filter: 'brightness(2)',
            },
            layoutTabToolbarButtonMax: {
              background:
                'transparent url("../images/restore.png") no-repeat center',
              filter: 'brightness(2)',
            },
            layoutTabToolbarButtonFloat: {
              background:
                'transparent url("../images/popout.png") no-repeat center',
              filter: 'brightness(2)',
            },
            layoutTabButtonOverflow: {
              marginLeft: 10,
              paddingLeft: 12,
              border: 'none',
              color: t.palette.accent,
              fontSize: t.fonts.medium,
              background:
                'transparent url("./images/more2.png") no-repeat left',
              filter: 'brightness(2)',
            },
            layoutPopUpMenu: {
              fontSize: t.fonts.medium,
              fontFamily: 'inherit',
            },
            layoutPopUpMenuItem: {
              padding: '2px 10px 2px 10px',
              whiteSpace: 'nowrap',
              '&:hover': { backgroundColor: t.palette.neutralLighterAlt },
            },
            layoutPopUpMenuContainer: {
              boxShadow: 'inset 0 0 5px rgba(0, 0, 0, 0.15)',
              border: '1px solid '.concat(t.palette.neutralLighterAlt),
              color: t.palette.black,
              backgroundColor: t.palette.white,
              borderRadius: 3,
              position: 'absolute',
              zIndex: 1e3,
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
              backgroundColor: t.palette.white,
              color: t.palette.black,
            },
            layoutTabsetSizer: {
              paddingTop: 5,
              paddingBottom: 3,
              fontSize: t.fonts.medium,
              fontFamily: 'inherit',
            },
            layoutTabsetHeaderSizer: {
              paddingTop: 3,
              paddingBottom: 3,
              fontSize: t.fonts.medium,
              fontFamily: 'inherit',
            },
            layoutBorderSizer: {
              paddingTop: 6,
              paddingBottom: 5,
              fontSize: t.fonts.medium,
              fontFamily: 'inherit',
            },
            layoutTab: {
              overflow: 'auto',
              position: 'absolute',
              boxSizing: 'border-box',
              color: t.palette.black,
              backgroundColor: t.palette.white,
              border: '1px solid '.concat(t.palette.neutralLighter),
            },
            layoutTabFloating: {
              overflow: 'auto',
              position: 'absolute',
              boxSizing: 'border-box',
              color: t.palette.black,
              backgroundColor: t.palette.white,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            },
          };
        }),
        g = function () {
          var t = y(),
            e = Object(l.useState)(
              b.a.Model.fromJson({
                global: { tabEnableFloat: !0 },
                borders: [
                  {
                    type: 'border',
                    location: 'bottom',
                    size: 100,
                    children: [
                      { type: 'tab', name: 'four', component: 'text' },
                    ],
                  },
                  { type: 'border', location: 'left', size: 100, children: [] },
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
                        { type: 'tab', name: 'One', component: 'home' },
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
                            { type: 'tab', name: 'Two', component: 'text' },
                            { type: 'tab', name: 'Three', component: 'text' },
                          ],
                        },
                        {
                          type: 'tabset',
                          weight: 50,
                          selected: 0,
                          children: [
                            { type: 'tab', name: 'Two', component: 'text' },
                            { type: 'tab', name: 'Three', component: 'text' },
                          ],
                        },
                      ],
                    },
                  ],
                },
              })
            ),
            o = Object(r.a)(e, 1)[0];
          return Object(a.jsxs)(a.Fragment, {
            children: [
              Object(a.jsx)(c.a, {}),
              Object(a.jsx)(p.a, { text: 'Home Page' }),
              Object(a.jsx)(i.Container, {
                fluid: !0,
                style: { height: '1000px', width: '100%' },
                children: Object(a.jsx)(b.a.Layout, {
                  classNameMapper: function (e) {
                    var o;
                    return null !==
                      (o = {
                        flexlayout__splitter: t.layoutSplitter,
                        flexlayout__splitter_drag: t.layoutSplitterDrag,
                        flexlayout__outline_rect: t.layoutOutlineRect,
                        flexlayout__outline_rect_edge: t.layoutOutlineRectEdge,
                        flexlayout__edge_rect: t.layoutEdgeRect,
                        flexlayout__drag_rect: t.layoutDragRect,
                        flexlayout__tabset: t.layoutTabSet,
                        flexlayout__tabset_header: t.layoutTabsetHeader,
                        flexlayout__tabset_tabbar_outer:
                          t.layoutTabsetTabbarOuter,
                        flexlayout__tabset_tabbar_outer_top:
                          t.layoutTabsetTabbarOuterTop,
                        flexlayout__tabset_tabbar_outer_bottom:
                          t.layoutTabsetTabbarOuterBottom,
                        'flexlayout__tabset-selected': t.layoutTabsetSelected,
                        'flexlayout__tabset-maximized': t.layoutTabsetMaximized,
                        'flexlayout__tab_button--selected':
                          t.layoutTabButtonSelected,
                        flexlayout__tab_button: t.layoutTabButton,
                        'flexlayout__tab_button--unselected':
                          t.layoutTabButtonUnselected,
                        flexlayout__tab_button_top: t.layoutTabButtonTop,
                        flexlayout__tab_button_textbox:
                          t.layoutTabButtonTextBox,
                        flexlayout__tab_button_trailing:
                          t.layoutTabButtonTrailing,
                        flexlayout__border: t.layoutBorder,
                        flexlayout__border_top: t.layoutBorderTop,
                        flexlayout__border_bottom: t.layoutBorderBottom,
                        flexlayout__border_left: t.layoutBorderLeft,
                        flexlayout__border_right: t.layoutBorderRight,
                        'flexlayout__border_button--selected':
                          t.layoutBorderButtonSelected,
                        flexlayout__border_button: t.layoutBorderButton,
                        flexlayout__border_button_trailing:
                          t.layoutBorderButtonTrailing,
                        'flexlayout__border_toolbar_button-float':
                          t.layoutBorderToolbarButtonFloat,
                        flexlayout__border_toolbar_button_overflow:
                          t.layoutBorderToolbarButtonOverflow,
                        'flexlayout__tab_toolbar_button-min':
                          t.layoutTabToolbarButtonMin,
                        'flexlayout__tab_toolbar_button-max':
                          t.layoutTabToolbarButtonMax,
                        'flexlayout__tab_toolbar_button-float':
                          t.layoutTabToolbarButtonFloat,
                        flexlayout__tab_button_overflow:
                          t.layoutTabButtonOverflow,
                        flexlayout__border_button_content:
                          t.layoutBorderButtonContent,
                        flexlayout__popup_menu: t.layoutPopUpMenu,
                        flexlayout__popup_menu_item: t.layoutPopUpMenuItem,
                        flexlayout__popup_menu_container:
                          t.layoutPopUpMenuContainer,
                        flexlayout__floating_window_tab:
                          t.layoutFloatingWindowTab,
                        flexlayout__tabset_sizer: t.layoutTabsetSizer,
                        flexlayout__tabset_header_sizer:
                          t.layoutTabsetHeaderSizer,
                        flexlayout__border_sizer: t.layoutBorderSizer,
                        flexlayout__tab: t.layoutTab,
                        flexlayout__tab_floating: t.layoutTabFloating,
                      }[e]) && void 0 !== o
                      ? o
                      : e;
                  },
                  model: o,
                  factory: function (e) {
                    var o = e.getComponent();
                    return 'text' === o
                      ? Object(a.jsxs)('div', {
                          className: t.panel,
                          children: ['Panel', e.getName()],
                        })
                      : 'home' === o
                      ? Object(a.jsx)(l.Suspense, {
                          fallback: Object(a.jsx)('div', {
                            children: 'Loading...',
                          }),
                          children: Object(a.jsx)(s, {}),
                        })
                      : null;
                  },
                }),
              }),
            ],
          });
        };
      e.default = g;
    },
  },
]);
//# sourceMappingURL=5.7b0b3e16.chunk.js.map
