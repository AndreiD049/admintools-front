(this['webpackJsonpadmintools-front'] =
  this['webpackJsonpadmintools-front'] || []).push([
  [3],
  {
    402: function (t, e, i) {
      'use strict';
      Object.defineProperty(e, '__esModule', { value: !0 });
      var n = (function () {
        function t(t) {
          this._name = t;
        }
        return (
          (t.flip = function (e) {
            return e === t.HORZ ? t.VERT : t.HORZ;
          }),
          (t.prototype.getName = function () {
            return this._name;
          }),
          (t.prototype.toString = function () {
            return this._name;
          }),
          (t.HORZ = new t('horz')),
          (t.VERT = new t('vert')),
          t
        );
      })();
      e.default = n;
    },
    403: function (t, e, i) {
      'use strict';
      Object.defineProperty(e, '__esModule', { value: !0 });
      var n = i(402),
        o = (function () {
          function t(t, e, i, n) {
            (this.x = t), (this.y = e), (this.width = i), (this.height = n);
          }
          return (
            (t.empty = function () {
              return new t(0, 0, 0, 0);
            }),
            (t.prototype.clone = function () {
              return new t(this.x, this.y, this.width, this.height);
            }),
            (t.prototype.equals = function (t) {
              return (
                this.x === t.x &&
                this.y === t.y &&
                this.width === t.width &&
                this.height === t.height
              );
            }),
            (t.prototype.getBottom = function () {
              return this.y + this.height;
            }),
            (t.prototype.getRight = function () {
              return this.x + this.width;
            }),
            (t.prototype.positionElement = function (t) {
              this.styleWithPosition(t.style);
            }),
            (t.prototype.styleWithPosition = function (t) {
              return (
                (t.left = this.x + 'px'),
                (t.top = this.y + 'px'),
                (t.width = Math.max(0, this.width) + 'px'),
                (t.height = Math.max(0, this.height) + 'px'),
                (t.position = 'absolute'),
                t
              );
            }),
            (t.prototype.contains = function (t, e) {
              return (
                this.x <= t &&
                t <= this.getRight() &&
                this.y <= e &&
                e <= this.getBottom()
              );
            }),
            (t.prototype.removeInsets = function (e) {
              return new t(
                this.x + e.left,
                this.y + e.top,
                Math.max(0, this.width - e.left - e.right),
                Math.max(0, this.height - e.top - e.bottom)
              );
            }),
            (t.prototype.centerInRect = function (t) {
              (this.x = (t.width - this.width) / 2),
                (this.y = (t.height - this.height) / 2);
            }),
            (t.prototype._getSize = function (t) {
              var e = this.width;
              return t === n.default.VERT && (e = this.height), e;
            }),
            (t.prototype.toString = function () {
              return (
                '(Rect: x=' +
                this.x +
                ', y=' +
                this.y +
                ', width=' +
                this.width +
                ', height=' +
                this.height +
                ')'
              );
            }),
            t
          );
        })();
      e.default = o;
    },
    404: function (t, e, i) {
      'use strict';
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.CLASSES = void 0),
        (function (t) {
          (t.FLEXLAYOUT__BORDER = 'flexlayout__border'),
            (t.FLEXLAYOUT__BORDER_ = 'flexlayout__border_'),
            (t.FLEXLAYOUT__BORDER_BUTTON = 'flexlayout__border_button'),
            (t.FLEXLAYOUT__BORDER_BUTTON_ = 'flexlayout__border_button_'),
            (t.FLEXLAYOUT__BORDER_BUTTON_CONTENT =
              'flexlayout__border_button_content'),
            (t.FLEXLAYOUT__BORDER_BUTTON_LEADING =
              'flexlayout__border_button_leading'),
            (t.FLEXLAYOUT__BORDER_BUTTON_TRAILING =
              'flexlayout__border_button_trailing'),
            (t.FLEXLAYOUT__BORDER_BUTTON__SELECTED =
              'flexlayout__border_button--selected'),
            (t.FLEXLAYOUT__BORDER_BUTTON__UNSELECTED =
              'flexlayout__border_button--unselected'),
            (t.FLEXLAYOUT__BORDER_INNER = 'flexlayout__border_inner'),
            (t.FLEXLAYOUT__BORDER_INNER_ = 'flexlayout__border_inner_'),
            (t.FLEXLAYOUT__BORDER_INNER_TAB_CONTAINER =
              'flexlayout__border_inner_tab_container'),
            (t.FLEXLAYOUT__BORDER_INNER_TAB_CONTAINER_ =
              'flexlayout__border_inner_tab_container_'),
            (t.FLEXLAYOUT__BORDER_SIZER = 'flexlayout__border_sizer'),
            (t.FLEXLAYOUT__BORDER_TOOLBAR = 'flexlayout__border_toolbar'),
            (t.FLEXLAYOUT__BORDER_TOOLBAR_ = 'flexlayout__border_toolbar_'),
            (t.FLEXLAYOUT__BORDER_TOOLBAR_BUTTON =
              'flexlayout__border_toolbar_button'),
            (t.FLEXLAYOUT__BORDER_TOOLBAR_BUTTON_FLOAT =
              'flexlayout__border_toolbar_button-float'),
            (t.FLEXLAYOUT__DRAG_RECT = 'flexlayout__drag_rect'),
            (t.FLEXLAYOUT__EDGE_RECT = 'flexlayout__edge_rect'),
            (t.FLEXLAYOUT__ERROR_BOUNDARY_CONTAINER =
              'flexlayout__error_boundary_container'),
            (t.FLEXLAYOUT__ERROR_BOUNDARY_CONTENT =
              'flexlayout__error_boundary_content'),
            (t.FLEXLAYOUT__FLOATING_WINDOW_CONTENT =
              'flexlayout__floating_window_content'),
            (t.FLEXLAYOUT__FLOATING_WINDOW_TAB =
              'flexlayout__floating_window_tab'),
            (t.FLEXLAYOUT__LAYOUT = 'flexlayout__layout'),
            (t.FLEXLAYOUT__OUTLINE_RECT = 'flexlayout__outline_rect'),
            (t.FLEXLAYOUT__SPLITTER = 'flexlayout__splitter'),
            (t.FLEXLAYOUT__SPLITTER_ = 'flexlayout__splitter_'),
            (t.FLEXLAYOUT__SPLITTER_BORDER = 'flexlayout__splitter_border'),
            (t.FLEXLAYOUT__SPLITTER_DRAG = 'flexlayout__splitter_drag'),
            (t.FLEXLAYOUT__TAB = 'flexlayout__tab'),
            (t.FLEXLAYOUT__TABSET = 'flexlayout__tabset'),
            (t.FLEXLAYOUT__TABSET_HEADER = 'flexlayout__tabset_header'),
            (t.FLEXLAYOUT__TABSET_HEADER_SIZER =
              'flexlayout__tabset_header_sizer'),
            (t.FLEXLAYOUT__TABSET_HEADER_CONTENT =
              'flexlayout__tabset_header_content'),
            (t.FLEXLAYOUT__TABSET_MAXIMIZED = 'flexlayout__tabset-maximized'),
            (t.FLEXLAYOUT__TABSET_SELECTED = 'flexlayout__tabset-selected'),
            (t.FLEXLAYOUT__TABSET_SIZER = 'flexlayout__tabset_sizer'),
            (t.FLEXLAYOUT__TABSET_TABBAR_INNER =
              'flexlayout__tabset_tabbar_inner'),
            (t.FLEXLAYOUT__TABSET_TABBAR_INNER_ =
              'flexlayout__tabset_tabbar_inner_'),
            (t.FLEXLAYOUT__TABSET_TABBAR_INNER_TAB_CONTAINER =
              'flexlayout__tabset_tabbar_inner_tab_container'),
            (t.FLEXLAYOUT__TABSET_TABBAR_INNER_TAB_CONTAINER_ =
              'flexlayout__tabset_tabbar_inner_tab_container_'),
            (t.FLEXLAYOUT__TABSET_TABBAR_OUTER =
              'flexlayout__tabset_tabbar_outer'),
            (t.FLEXLAYOUT__TABSET_TABBAR_OUTER_ =
              'flexlayout__tabset_tabbar_outer_'),
            (t.FLEXLAYOUT__TAB_BORDER = 'flexlayout__tab_border'),
            (t.FLEXLAYOUT__TAB_BORDER_ = 'flexlayout__tab_border_'),
            (t.FLEXLAYOUT__TAB_BUTTON = 'flexlayout__tab_button'),
            (t.FLEXLAYOUT__TAB_BUTTON_CONTENT =
              'flexlayout__tab_button_content'),
            (t.FLEXLAYOUT__TAB_BUTTON_LEADING =
              'flexlayout__tab_button_leading'),
            (t.FLEXLAYOUT__TAB_BUTTON_OVERFLOW =
              'flexlayout__tab_button_overflow'),
            (t.FLEXLAYOUT__TAB_BUTTON_TEXTBOX =
              'flexlayout__tab_button_textbox'),
            (t.FLEXLAYOUT__TAB_BUTTON_TRAILING =
              'flexlayout__tab_button_trailing'),
            (t.FLEXLAYOUT__TAB_FLOATING = 'flexlayout__tab_floating'),
            (t.FLEXLAYOUT__TAB_FLOATING_INNER =
              'flexlayout__tab_floating_inner'),
            (t.FLEXLAYOUT__TAB_TOOLBAR = 'flexlayout__tab_toolbar'),
            (t.FLEXLAYOUT__TAB_TOOLBAR_BUTTON =
              'flexlayout__tab_toolbar_button'),
            (t.FLEXLAYOUT__TAB_TOOLBAR_BUTTON_ =
              'flexlayout__tab_toolbar_button-'),
            (t.FLEXLAYOUT__TAB_TOOLBAR_BUTTON_FLOAT =
              'flexlayout__tab_toolbar_button-float');
        })(e.CLASSES || (e.CLASSES = {}));
    },
    405: function (t, e, i) {
      'use strict';
      Object.defineProperty(e, '__esModule', { value: !0 });
      var n = i(419),
        o = (function () {
          function t() {}
          return (
            (t.addNode = function (e, i, o, r, a) {
              return new n.default(t.ADD_NODE, {
                json: e,
                toNode: i,
                location: o.getName(),
                index: r,
                select: a,
              });
            }),
            (t.moveNode = function (e, i, o, r, a) {
              return new n.default(t.MOVE_NODE, {
                fromNode: e,
                toNode: i,
                location: o.getName(),
                index: r,
                select: a,
              });
            }),
            (t.deleteTab = function (e) {
              return new n.default(t.DELETE_TAB, { node: e });
            }),
            (t.renameTab = function (e, i) {
              return new n.default(t.RENAME_TAB, { node: e, text: i });
            }),
            (t.selectTab = function (e) {
              return new n.default(t.SELECT_TAB, { tabNode: e });
            }),
            (t.setActiveTabset = function (e) {
              return new n.default(t.SET_ACTIVE_TABSET, { tabsetNode: e });
            }),
            (t.adjustSplit = function (e) {
              var i = e.node1Id,
                o = e.node2Id;
              return new n.default(t.ADJUST_SPLIT, {
                node1: i,
                weight1: e.weight1,
                pixelWidth1: e.pixelWidth1,
                node2: o,
                weight2: e.weight2,
                pixelWidth2: e.pixelWidth2,
              });
            }),
            (t.adjustBorderSplit = function (e, i) {
              return new n.default(t.ADJUST_BORDER_SPLIT, { node: e, pos: i });
            }),
            (t.maximizeToggle = function (e) {
              return new n.default(t.MAXIMIZE_TOGGLE, { node: e });
            }),
            (t.updateModelAttributes = function (e) {
              return new n.default(t.UPDATE_MODEL_ATTRIBUTES, { json: e });
            }),
            (t.updateNodeAttributes = function (e, i) {
              return new n.default(t.UPDATE_NODE_ATTRIBUTES, {
                node: e,
                json: i,
              });
            }),
            (t.floatTab = function (e) {
              return new n.default(t.FLOAT_TAB, { node: e });
            }),
            (t.unFloatTab = function (e) {
              return new n.default(t.UNFLOAT_TAB, { node: e });
            }),
            (t.ADD_NODE = 'FlexLayout_AddNode'),
            (t.MOVE_NODE = 'FlexLayout_MoveNode'),
            (t.DELETE_TAB = 'FlexLayout_DeleteTab'),
            (t.RENAME_TAB = 'FlexLayout_RenameTab'),
            (t.SELECT_TAB = 'FlexLayout_SelectTab'),
            (t.SET_ACTIVE_TABSET = 'FlexLayout_SetActiveTabset'),
            (t.ADJUST_SPLIT = 'FlexLayout_AdjustSplit'),
            (t.ADJUST_BORDER_SPLIT = 'FlexLayout_AdjustBorderSplit'),
            (t.MAXIMIZE_TOGGLE = 'FlexLayout_MaximizeToggle'),
            (t.UPDATE_MODEL_ATTRIBUTES = 'FlexLayout_UpdateModelAttributes'),
            (t.UPDATE_NODE_ATTRIBUTES = 'FlexLayout_UpdateNodeAttributes'),
            (t.FLOAT_TAB = 'FlexLayout_FloatTab'),
            (t.UNFLOAT_TAB = 'FlexLayout_UnFloatTab'),
            t
          );
        })();
      e.default = o;
    },
    406: function (t, e, i) {
      'use strict';
      Object.defineProperty(e, '__esModule', { value: !0 });
      var n = i(402),
        o = i(403),
        r = (function () {
          function t(e, i, n) {
            (this._name = e),
              (this._orientation = i),
              (this._indexPlus = n),
              (t.values[this._name] = this);
          }
          return (
            (t.getByName = function (e) {
              return t.values[e];
            }),
            (t.getLocation = function (e, i, n) {
              return i < e.x + e.width / 4
                ? t.LEFT
                : i > e.getRight() - e.width / 4
                ? t.RIGHT
                : n < e.y + e.height / 4
                ? t.TOP
                : n > e.getBottom() - e.height / 4
                ? t.BOTTOM
                : t.CENTER;
            }),
            (t.prototype.getName = function () {
              return this._name;
            }),
            (t.prototype.getOrientation = function () {
              return this._orientation;
            }),
            (t.prototype.getDockRect = function (e) {
              return this === t.TOP
                ? new o.default(e.x, e.y, e.width, e.height / 2)
                : this === t.BOTTOM
                ? new o.default(
                    e.x,
                    e.getBottom() - e.height / 2,
                    e.width,
                    e.height / 2
                  )
                : this === t.LEFT
                ? new o.default(e.x, e.y, e.width / 2, e.height)
                : this === t.RIGHT
                ? new o.default(
                    e.getRight() - e.width / 2,
                    e.y,
                    e.width / 2,
                    e.height
                  )
                : e.clone();
            }),
            (t.prototype.split = function (e, i) {
              return this === t.TOP
                ? {
                    start: new o.default(e.x, e.y, e.width, i),
                    end: new o.default(e.x, e.y + i, e.width, e.height - i),
                  }
                : this === t.LEFT
                ? {
                    start: new o.default(e.x, e.y, i, e.height),
                    end: new o.default(e.x + i, e.y, e.width - i, e.height),
                  }
                : this === t.RIGHT
                ? {
                    start: new o.default(e.getRight() - i, e.y, i, e.height),
                    end: new o.default(e.x, e.y, e.width - i, e.height),
                  }
                : {
                    start: new o.default(e.x, e.getBottom() - i, e.width, i),
                    end: new o.default(e.x, e.y, e.width, e.height - i),
                  };
            }),
            (t.prototype.reflect = function () {
              return this === t.TOP
                ? t.BOTTOM
                : this === t.LEFT
                ? t.RIGHT
                : this === t.RIGHT
                ? t.LEFT
                : t.TOP;
            }),
            (t.prototype.toString = function () {
              return (
                '(DockLocation: name=' +
                this._name +
                ', orientation=' +
                this._orientation +
                ')'
              );
            }),
            (t.values = {}),
            (t.TOP = new t('top', n.default.VERT, 0)),
            (t.BOTTOM = new t('bottom', n.default.VERT, 1)),
            (t.LEFT = new t('left', n.default.HORZ, 0)),
            (t.RIGHT = new t('right', n.default.HORZ, 1)),
            (t.CENTER = new t('center', n.default.VERT, 0)),
            t
          );
        })();
      e.default = r;
    },
    407: function (t, e, i) {
      'use strict';
      var n =
        (this && this.__extends) ||
        (function () {
          var t = function (e, i) {
            return (t =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function (t, e) {
                  t.__proto__ = e;
                }) ||
              function (t, e) {
                for (var i in e)
                  Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
              })(e, i);
          };
          return function (e, i) {
            function n() {
              this.constructor = e;
            }
            t(e, i),
              (e.prototype =
                null === i
                  ? Object.create(i)
                  : ((n.prototype = i.prototype), new n()));
          };
        })();
      Object.defineProperty(e, '__esModule', { value: !0 });
      var o = i(412),
        r = i(410),
        a = i(406),
        s = i(414),
        d = i(402),
        l = i(403),
        u = i(411),
        c = i(418),
        h = i(413),
        _ = i(420),
        f = (function (t) {
          function e(i, n) {
            var o = t.call(this, i) || this;
            return (
              e._attributeDefinitions.fromJson(n, o._attributes),
              i._addNode(o),
              (o.calculatedTabBarHeight = 0),
              (o.calculatedHeaderBarHeight = 0),
              o
            );
          }
          return (
            n(e, t),
            (e._fromJson = function (t, i) {
              var n = new e(i, t);
              return (
                null != t.children &&
                  t.children.forEach(function (t) {
                    var e = h.default._fromJson(t, i);
                    n._addChild(e);
                  }),
                t.maximized && !0 === t.maximized && i._setMaximizedTabset(n),
                t.active && !0 === t.active && i._setActiveTabset(n),
                n
              );
            }),
            (e._createAttributeDefinitions = function () {
              var t = new r.default();
              return (
                t.add('type', e.TYPE, !0),
                t.add('id', void 0).setType(o.default.ID),
                t.add('weight', 100),
                t.add('width', void 0),
                t.add('height', void 0),
                t.add('selected', 0),
                t.add('name', void 0).setType(o.default.STRING),
                t.addInherited(
                  'enableDeleteWhenEmpty',
                  'tabSetEnableDeleteWhenEmpty'
                ),
                t.addInherited('enableDrop', 'tabSetEnableDrop'),
                t.addInherited('enableDrag', 'tabSetEnableDrag'),
                t.addInherited('enableDivide', 'tabSetEnableDivide'),
                t.addInherited('enableMaximize', 'tabSetEnableMaximize'),
                t.addInherited('classNameTabStrip', 'tabSetClassNameTabStrip'),
                t.addInherited('classNameHeader', 'tabSetClassNameHeader'),
                t.addInherited('enableTabStrip', 'tabSetEnableTabStrip'),
                t.addInherited('borderInsets', 'tabSetBorderInsets'),
                t.addInherited('marginInsets', 'tabSetMarginInsets'),
                t.addInherited('minWidth', 'tabSetMinWidth'),
                t.addInherited('minHeight', 'tabSetMinHeight'),
                t.addInherited('headerHeight', 'tabSetHeaderHeight'),
                t.addInherited('tabStripHeight', 'tabSetTabStripHeight'),
                t.addInherited('tabLocation', 'tabSetTabLocation'),
                t
                  .addInherited('autoSelectTab', 'tabSetAutoSelectTab')
                  .setType(o.default.BOOLEAN),
                t
              );
            }),
            (e.prototype.getName = function () {
              return this._getAttributeAsStringOrUndefined('name');
            }),
            (e.prototype.getSelected = function () {
              var t = this._attributes.selected;
              return void 0 !== t ? t : -1;
            }),
            (e.prototype.getSelectedNode = function () {
              var t = this.getSelected();
              if (-1 !== t) return this._children[t];
            }),
            (e.prototype.getWeight = function () {
              return this._attributes.weight;
            }),
            (e.prototype.getWidth = function () {
              return this._getAttributeAsNumberOrUndefined('width');
            }),
            (e.prototype.getMinWidth = function () {
              return this._getAttr('minWidth');
            }),
            (e.prototype.getHeight = function () {
              return this._getAttributeAsNumberOrUndefined('height');
            }),
            (e.prototype.getMinHeight = function () {
              return this._getAttr('minHeight');
            }),
            (e.prototype.getMinSize = function (t) {
              return t === d.default.HORZ
                ? this.getMinWidth()
                : this.getMinHeight();
            }),
            (e.prototype.isMaximized = function () {
              return this._model.getMaximizedTabset() === this;
            }),
            (e.prototype.isActive = function () {
              return this._model.getActiveTabset() === this;
            }),
            (e.prototype.isEnableDeleteWhenEmpty = function () {
              return this._getAttr('enableDeleteWhenEmpty');
            }),
            (e.prototype.isEnableDrop = function () {
              return this._getAttr('enableDrop');
            }),
            (e.prototype.isEnableDrag = function () {
              return this._getAttr('enableDrag');
            }),
            (e.prototype.isEnableDivide = function () {
              return this._getAttr('enableDivide');
            }),
            (e.prototype.isEnableMaximize = function () {
              return this._getAttr('enableMaximize');
            }),
            (e.prototype.isEnableTabStrip = function () {
              return this._getAttr('enableTabStrip');
            }),
            (e.prototype.isAutoSelectTab = function () {
              return this._getAttr('autoSelectTab');
            }),
            (e.prototype.getClassNameTabStrip = function () {
              return this._getAttributeAsStringOrUndefined('classNameTabStrip');
            }),
            (e.prototype.getClassNameHeader = function () {
              return this._getAttributeAsStringOrUndefined('classNameHeader');
            }),
            (e.prototype.calculateHeaderBarHeight = function (t) {
              var e = this._getAttr('headerHeight');
              this.calculatedHeaderBarHeight = 0 !== e ? e : t.headerBarSize;
            }),
            (e.prototype.calculateTabBarHeight = function (t) {
              var e = this._getAttr('tabStripHeight');
              this.calculatedTabBarHeight = 0 !== e ? e : t.tabBarSize;
            }),
            (e.prototype.getHeaderHeight = function () {
              return this.calculatedHeaderBarHeight;
            }),
            (e.prototype.getTabStripHeight = function () {
              return this.calculatedTabBarHeight;
            }),
            (e.prototype.getTabLocation = function () {
              return this._getAttr('tabLocation');
            }),
            (e.prototype._setWeight = function (t) {
              this._attributes.weight = t;
            }),
            (e.prototype._setSelected = function (t) {
              this._attributes.selected = t;
            }),
            (e.prototype.canDrop = function (t, e, i) {
              var n;
              if (t === this) {
                var o = a.default.CENTER,
                  r = this._tabHeaderRect;
                n = new s.default(this, r, o, -1, 'flexlayout__outline_rect');
              } else if (this._contentRect.contains(e, i)) {
                r = (o = a.default.getLocation(
                  this._contentRect,
                  e,
                  i
                )).getDockRect(this._rect);
                n = new s.default(this, r, o, -1, 'flexlayout__outline_rect');
              } else if (
                this._children.length > 0 &&
                null != this._tabHeaderRect &&
                this._tabHeaderRect.contains(e, i)
              ) {
                for (
                  var d = this._children[0],
                    u = d.getTabRect(),
                    c = u.y,
                    h = u.height,
                    _ = this._tabHeaderRect.x,
                    f = 0,
                    p = 0;
                  p < this._children.length;
                  p++
                ) {
                  if (
                    ((f =
                      (u = (d = this._children[p]).getTabRect()).x +
                      u.width / 2),
                    e >= _ && e < f)
                  ) {
                    (o = a.default.CENTER),
                      (r = new l.default(u.x - 2, c, 3, h));
                    n = new s.default(
                      this,
                      r,
                      o,
                      p,
                      'flexlayout__outline_rect'
                    );
                    break;
                  }
                  _ = f;
                }
                if (null == n) {
                  (o = a.default.CENTER),
                    (r = new l.default(u.getRight() - 2, c, 3, h));
                  n = new s.default(
                    this,
                    r,
                    o,
                    this._children.length,
                    'flexlayout__outline_rect'
                  );
                }
              }
              if (t._canDockInto(t, n)) return n;
            }),
            (e.prototype._layout = function (t, e) {
              var i = this;
              this.calculateHeaderBarHeight(e),
                this.calculateTabBarHeight(e),
                this.isMaximized() && (t = this._model.getRoot().getRect()),
                (t = t.removeInsets(this._getAttr('marginInsets'))),
                (this._rect = t),
                (t = t.removeInsets(this._getAttr('borderInsets')));
              var n = 0,
                o = 0;
              void 0 !== this.getName() &&
                ((n += this.calculatedHeaderBarHeight),
                (o += this.calculatedHeaderBarHeight)),
                this.isEnableTabStrip() &&
                  ('top' === this.getTabLocation()
                    ? (this._tabHeaderRect = new l.default(
                        t.x,
                        t.y + n,
                        t.width,
                        this.calculatedTabBarHeight
                      ))
                    : (this._tabHeaderRect = new l.default(
                        t.x,
                        t.y + t.height - this.calculatedTabBarHeight,
                        t.width,
                        this.calculatedTabBarHeight
                      )),
                  (o += this.calculatedTabBarHeight),
                  'top' === this.getTabLocation() &&
                    (n += this.calculatedTabBarHeight)),
                (this._contentRect = new l.default(
                  t.x,
                  t.y + n,
                  t.width,
                  t.height - o
                )),
                this._children.forEach(function (t, n) {
                  t._layout(i._contentRect, e),
                    t._setVisible(n === i.getSelected());
                });
            }),
            (e.prototype._remove = function (t) {
              var e = this._removeChild(t);
              this._model._tidy(), _.adjustSelectedIndex(this, e);
            }),
            (e.prototype.drop = function (t, i, n, o) {
              var r = this,
                s = i;
              if (this !== t) {
                var d = t.getParent(),
                  l = 0;
                if (
                  (void 0 !== d &&
                    ((l = d._removeChild(t)), _.adjustSelectedIndex(d, l)),
                  t.getType() === h.default.TYPE &&
                    d === this &&
                    l < n &&
                    n > 0 &&
                    n--,
                  s === a.default.CENTER)
                ) {
                  var u = n;
                  -1 === u && (u = this._children.length),
                    t.getType() === h.default.TYPE
                      ? (this._addChild(t, u),
                        (o || (!1 !== o && this.isAutoSelectTab())) &&
                          this._setSelected(u))
                      : t.getChildren().forEach(function (t, e) {
                          r._addChild(t, u), u++;
                        }),
                    this._model._setActiveTabset(this);
                } else {
                  var f = void 0;
                  t instanceof h.default
                    ? ((f = new e(this._model, {}))._addChild(t), (d = f))
                    : (f = t);
                  var p = this._parent,
                    g = p.getChildren().indexOf(this);
                  if (p.getOrientation() === s._orientation)
                    f._setWeight(this.getWeight() / 2),
                      this._setWeight(this.getWeight() / 2),
                      p._addChild(f, g + s._indexPlus);
                  else {
                    var T = new c.default(this._model, {});
                    T._setWeight(this.getWeight()),
                      T._addChild(this),
                      this._setWeight(50),
                      f._setWeight(50),
                      T._addChild(f, s._indexPlus),
                      p._removeChild(this),
                      p._addChild(T, g);
                  }
                  this._model._setActiveTabset(f);
                }
                this._model._tidy();
              }
            }),
            (e.prototype._toJson = function () {
              var t = {};
              return (
                e._attributeDefinitions.toJson(t, this._attributes),
                (t.children = this._children.map(function (t) {
                  return t._toJson();
                })),
                this.isActive() && (t.active = !0),
                this.isMaximized() && (t.maximized = !0),
                t
              );
            }),
            (e.prototype._updateAttrs = function (t) {
              e._attributeDefinitions.update(t, this._attributes);
            }),
            (e.prototype._getAttributeDefinitions = function () {
              return e._attributeDefinitions;
            }),
            (e.prototype._getPrefSize = function (t) {
              var e = this.getWidth();
              return t === d.default.VERT && (e = this.getHeight()), e;
            }),
            (e.TYPE = 'tabset'),
            (e._attributeDefinitions = e._createAttributeDefinitions()),
            e
          );
        })(u.default);
      e.default = f;
    },
    408: function (t, e, i) {
      'use strict';
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.I18nLabel = void 0),
        (function (t) {
          (t.Close_Tab = 'Close'),
            (t.Move_Tab = 'Move: '),
            (t.Move_Tabset = 'Move tabset'),
            (t.Maximize = 'Maximize tabset'),
            (t.Restore = 'Restore tabset'),
            (t.Float_Tab = 'Show selected tab in floating window'),
            (t.Overflow_Menu_Tooltip = 'Hidden tabs'),
            (t.Floating_Window_Message =
              'This panel is shown in a floating window'),
            (t.Floating_Window_Show_Window = 'Show window'),
            (t.Floating_Window_Dock_Window = 'Dock window'),
            (t.Error_rendering_component = 'Error rendering component');
        })(e.I18nLabel || (e.I18nLabel = {}));
    },
    409: function (t, e, i) {
      'use strict';
      var n =
        (this && this.__extends) ||
        (function () {
          var t = function (e, i) {
            return (t =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function (t, e) {
                  t.__proto__ = e;
                }) ||
              function (t, e) {
                for (var i in e)
                  Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
              })(e, i);
          };
          return function (e, i) {
            function n() {
              this.constructor = e;
            }
            t(e, i),
              (e.prototype =
                null === i
                  ? Object.create(i)
                  : ((n.prototype = i.prototype), new n()));
          };
        })();
      Object.defineProperty(e, '__esModule', { value: !0 });
      var o = i(412),
        r = i(410),
        a = i(406),
        s = i(414),
        d = i(402),
        l = i(403),
        u = i(411),
        c = i(415),
        h = i(413),
        _ = i(420),
        f = (function (t) {
          function e(i, n, o) {
            var r = t.call(this, o) || this;
            return (
              (r._adjustedSize = 0),
              (r._calculatedBorderBarSize = 0),
              (r._location = i),
              (r._drawChildren = []),
              (r._attributes.id = 'border_' + i.getName()),
              e._attributeDefinitions.fromJson(n, r._attributes),
              o._addNode(r),
              r
            );
          }
          return (
            n(e, t),
            (e._fromJson = function (t, i) {
              var n = new e(a.default.getByName(t.location), t, i);
              return (
                t.children &&
                  (n._children = t.children.map(function (t) {
                    var e = h.default._fromJson(t, i);
                    return e._setParent(n), e;
                  })),
                n
              );
            }),
            (e._createAttributeDefinitions = function () {
              var t = new r.default();
              return (
                t.add('type', e.TYPE, !0),
                t.add('selected', -1),
                t.add('show', !0).setType(o.default.BOOLEAN),
                t
                  .addInherited('barSize', 'borderBarSize')
                  .setType(o.default.INT)
                  .setFrom(0),
                t
                  .addInherited('enableDrop', 'borderEnableDrop')
                  .setType(o.default.BOOLEAN),
                t
                  .addInherited('className', 'borderClassName')
                  .setType(o.default.STRING),
                t
                  .addInherited(
                    'autoSelectTabWhenOpen',
                    'borderAutoSelectTabWhenOpen'
                  )
                  .setType(o.default.BOOLEAN),
                t
                  .addInherited(
                    'autoSelectTabWhenClosed',
                    'borderAutoSelectTabWhenClosed'
                  )
                  .setType(o.default.BOOLEAN),
                t.addInherited('size', 'borderSize').setType(o.default.NUMBER),
                t
                  .addInherited('minSize', 'borderMinSize')
                  .setType(o.default.NUMBER),
                t
              );
            }),
            (e.prototype.getLocation = function () {
              return this._location;
            }),
            (e.prototype.getTabHeaderRect = function () {
              return this._tabHeaderRect;
            }),
            (e.prototype.getRect = function () {
              return this._tabHeaderRect;
            }),
            (e.prototype.getContentRect = function () {
              return this._contentRect;
            }),
            (e.prototype.isEnableDrop = function () {
              return this._getAttr('enableDrop');
            }),
            (e.prototype.isAutoSelectTab = function (t) {
              return (
                null == t && (t = -1 !== this.getSelected()),
                t
                  ? this._getAttr('autoSelectTabWhenOpen')
                  : this._getAttr('autoSelectTabWhenClosed')
              );
            }),
            (e.prototype.getClassName = function () {
              return this._getAttributeAsStringOrUndefined('className');
            }),
            (e.prototype.calcBorderBarSize = function (t) {
              var e = this._getAttr('barSize');
              this._calculatedBorderBarSize = 0 !== e ? e : t.borderBarSize;
            }),
            (e.prototype.getBorderBarSize = function () {
              return this._calculatedBorderBarSize;
            }),
            (e.prototype.getSize = function () {
              return this._getAttr('size');
            }),
            (e.prototype.getMinSize = function () {
              return this._getAttr('minSize');
            }),
            (e.prototype.getSelected = function () {
              return this._attributes.selected;
            }),
            (e.prototype.getSelectedNode = function () {
              if (-1 !== this.getSelected())
                return this._children[this.getSelected()];
            }),
            (e.prototype.getOrientation = function () {
              return this._location.getOrientation();
            }),
            (e.prototype.isMaximized = function () {
              return !1;
            }),
            (e.prototype.isShowing = function () {
              return this._attributes.show;
            }),
            (e.prototype._setSelected = function (t) {
              this._attributes.selected = t;
            }),
            (e.prototype._setSize = function (t) {
              this._attributes.size = t;
            }),
            (e.prototype._updateAttrs = function (t) {
              e._attributeDefinitions.update(t, this._attributes);
            }),
            (e.prototype._getDrawChildren = function () {
              return this._drawChildren;
            }),
            (e.prototype._setAdjustedSize = function (t) {
              this._adjustedSize = t;
            }),
            (e.prototype._getAdjustedSize = function () {
              return this._adjustedSize;
            }),
            (e.prototype._layoutBorderOuter = function (t, e) {
              this.calcBorderBarSize(e);
              var i = this._location.split(t, this.getBorderBarSize());
              return (this._tabHeaderRect = i.start), i.end;
            }),
            (e.prototype._layoutBorderInner = function (t, e) {
              var i = this;
              this._drawChildren = [];
              var n = this._location,
                o = n.split(
                  t,
                  this._adjustedSize + this._model.getSplitterSize()
                ),
                r = n.reflect().split(o.start, this._model.getSplitterSize());
              if (
                ((this._contentRect = r.end),
                this._children.forEach(function (t, n) {
                  t._layout(i._contentRect, e),
                    t._setVisible(n === i.getSelected()),
                    i._drawChildren.push(t);
                }),
                -1 === this.getSelected())
              )
                return t;
              var a = new c.default(this._model);
              return (
                a._setParent(this),
                a._setRect(r.start),
                this._drawChildren.push(a),
                o.end
              );
            }),
            (e.prototype._remove = function (t) {
              var e = this._removeChild(t);
              -1 !== this.getSelected() && _.adjustSelectedIndex(this, e);
            }),
            (e.prototype.canDrop = function (t, e, i) {
              if (t.getType() === h.default.TYPE) {
                var n,
                  o = a.default.CENTER;
                if (this._tabHeaderRect.contains(e, i)) {
                  if (this._location._orientation === d.default.VERT)
                    if (this._children.length > 0) {
                      for (
                        var r = (g = this._children[0].getTabRect()).y,
                          u = g.height,
                          c = this._tabHeaderRect.x,
                          _ = 0,
                          f = 0;
                        f < this._children.length;
                        f++
                      ) {
                        if (
                          ((_ =
                            (g = this._children[f].getTabRect()).x +
                            g.width / 2),
                          e >= c && e < _)
                        ) {
                          var p = new l.default(g.x - 2, r, 3, u);
                          n = new s.default(
                            this,
                            p,
                            o,
                            f,
                            'flexlayout__outline_rect'
                          );
                          break;
                        }
                        c = _;
                      }
                      if (null == n) {
                        p = new l.default(g.getRight() - 2, r, 3, u);
                        n = new s.default(
                          this,
                          p,
                          o,
                          this._children.length,
                          'flexlayout__outline_rect'
                        );
                      }
                    } else {
                      p = new l.default(
                        this._tabHeaderRect.x + 1,
                        this._tabHeaderRect.y + 2,
                        3,
                        18
                      );
                      n = new s.default(
                        this,
                        p,
                        o,
                        0,
                        'flexlayout__outline_rect'
                      );
                    }
                  else if (this._children.length > 0) {
                    var g,
                      T = (g = this._children[0].getTabRect()).x,
                      y = g.width;
                    for (
                      c = this._tabHeaderRect.y, _ = 0, f = 0;
                      f < this._children.length;
                      f++
                    ) {
                      if (
                        ((_ =
                          (g = this._children[f].getTabRect()).y +
                          g.height / 2),
                        i >= c && i < _)
                      ) {
                        p = new l.default(T, g.y - 2, y, 3);
                        n = new s.default(
                          this,
                          p,
                          o,
                          f,
                          'flexlayout__outline_rect'
                        );
                        break;
                      }
                      c = _;
                    }
                    if (null == n) {
                      p = new l.default(T, g.getBottom() - 2, y, 3);
                      n = new s.default(
                        this,
                        p,
                        o,
                        this._children.length,
                        'flexlayout__outline_rect'
                      );
                    }
                  } else {
                    p = new l.default(
                      this._tabHeaderRect.x + 2,
                      this._tabHeaderRect.y + 1,
                      18,
                      3
                    );
                    n = new s.default(
                      this,
                      p,
                      o,
                      0,
                      'flexlayout__outline_rect'
                    );
                  }
                  if (!t._canDockInto(t, n)) return;
                } else if (
                  -1 !== this.getSelected() &&
                  this._contentRect.contains(e, i)
                ) {
                  p = this._contentRect;
                  if (
                    ((n = new s.default(
                      this,
                      p,
                      o,
                      -1,
                      'flexlayout__outline_rect'
                    )),
                    !t._canDockInto(t, n))
                  )
                    return;
                }
                return n;
              }
            }),
            (e.prototype.drop = function (t, e, i, n) {
              var o = 0,
                r = t.getParent();
              void 0 !== r &&
                ((o = r._removeChild(t)), _.adjustSelectedIndex(r, o)),
                t.getType() === h.default.TYPE &&
                  r === this &&
                  o < i &&
                  i > 0 &&
                  i--;
              var a = i;
              -1 === a && (a = this._children.length),
                t.getType() === h.default.TYPE && this._addChild(t, a),
                (n || (!1 !== n && this.isAutoSelectTab())) &&
                  this._setSelected(a),
                this._model._tidy();
            }),
            (e.prototype._toJson = function () {
              var t = {};
              return (
                e._attributeDefinitions.toJson(t, this._attributes),
                (t.location = this._location.getName()),
                (t.children = this._children.map(function (t) {
                  return t._toJson();
                })),
                t
              );
            }),
            (e.prototype._getSplitterBounds = function (t, e) {
              void 0 === e && (e = !1);
              var i = [0, 0],
                n = e ? this.getMinSize() : 0,
                o = this._model._getOuterInnerRects().outer,
                r = this._model._getOuterInnerRects().inner;
              return (
                this._location === a.default.TOP
                  ? ((i[0] = o.y + n), (i[1] = r.getBottom() - t.getHeight()))
                  : this._location === a.default.LEFT
                  ? ((i[0] = o.x + n), (i[1] = r.getRight() - t.getWidth()))
                  : this._location === a.default.BOTTOM
                  ? ((i[0] = r.y), (i[1] = o.getBottom() - t.getHeight() - n))
                  : this._location === a.default.RIGHT &&
                    ((i[0] = r.x), (i[1] = o.getRight() - t.getWidth() - n)),
                i
              );
            }),
            (e.prototype._calculateSplit = function (t, e) {
              var i = this._getSplitterBounds(t);
              return this._location === a.default.BOTTOM ||
                this._location === a.default.RIGHT
                ? Math.max(0, i[1] - e)
                : Math.max(0, e - i[0]);
            }),
            (e.prototype._getAttributeDefinitions = function () {
              return e._attributeDefinitions;
            }),
            (e.TYPE = 'border'),
            (e._attributeDefinitions = e._createAttributeDefinitions()),
            e
          );
        })(u.default);
      e.default = f;
    },
    410: function (t, e, i) {
      'use strict';
      Object.defineProperty(e, '__esModule', { value: !0 });
      var n = i(412),
        o = (function () {
          function t() {
            (this.attributes = []), (this.nameToAttribute = {});
          }
          return (
            (t.prototype.addWithAll = function (t, e, i, o) {
              var r = new n.default(t, e, i, o);
              return this.attributes.push(r), (this.nameToAttribute[t] = r), r;
            }),
            (t.prototype.addInherited = function (t, e) {
              return this.addWithAll(t, e, void 0, !1);
            }),
            (t.prototype.add = function (t, e, i) {
              return this.addWithAll(t, void 0, e, i);
            }),
            (t.prototype.getAttributes = function () {
              return this.attributes;
            }),
            (t.prototype.getModelName = function (t) {
              var e = this.nameToAttribute[t];
              if (void 0 !== e) return e.modelName;
            }),
            (t.prototype.toJson = function (t, e) {
              this.attributes.forEach(function (i) {
                var n = e[i.name];
                (i.alwaysWriteJson || n !== i.defaultValue) && (t[i.name] = n);
              });
            }),
            (t.prototype.fromJson = function (t, e) {
              this.attributes.forEach(function (i) {
                var n = t[i.name];
                e[i.name] = void 0 === n ? i.defaultValue : n;
              });
            }),
            (t.prototype.update = function (t, e) {
              this.attributes.forEach(function (i) {
                var n = t[i.name];
                void 0 !== n && (e[i.name] = n);
              });
            }),
            (t.prototype.setDefaults = function (t) {
              this.attributes.forEach(function (e) {
                t[e.name] = e.defaultValue;
              });
            }),
            t
          );
        })();
      e.default = o;
    },
    411: function (t, e, i) {
      'use strict';
      Object.defineProperty(e, '__esModule', { value: !0 });
      var n = i(406),
        o = i(402),
        r = i(403),
        a = (function () {
          function t(t) {
            (this._dirty = !1),
              (this._tempSize = 0),
              (this._model = t),
              (this._attributes = {}),
              (this._children = []),
              (this._fixed = !1),
              (this._rect = r.default.empty()),
              (this._visible = !1),
              (this._listeners = {});
          }
          return (
            (t.prototype.getId = function () {
              var t = this._attributes.id;
              return (
                void 0 !== t ||
                  ((t = this._model._nextUniqueId()), this._setId(t)),
                t
              );
            }),
            (t.prototype.getModel = function () {
              return this._model;
            }),
            (t.prototype.getType = function () {
              return this._attributes.type;
            }),
            (t.prototype.getParent = function () {
              return this._parent;
            }),
            (t.prototype.getChildren = function () {
              return this._children;
            }),
            (t.prototype.getRect = function () {
              return this._rect;
            }),
            (t.prototype.isVisible = function () {
              return this._visible;
            }),
            (t.prototype.getOrientation = function () {
              return void 0 === this._parent
                ? o.default.HORZ
                : o.default.flip(this._parent.getOrientation());
            }),
            (t.prototype.setEventListener = function (t, e) {
              this._listeners[t] = e;
            }),
            (t.prototype.removeEventListener = function (t) {
              delete this._listeners[t];
            }),
            (t.prototype._setId = function (t) {
              this._attributes.id = t;
            }),
            (t.prototype._fireEvent = function (t, e) {
              void 0 !== this._listeners[t] && this._listeners[t](e);
            }),
            (t.prototype._getAttr = function (t) {
              var e = this._attributes[t];
              if (void 0 === e) {
                var i = this._getAttributeDefinitions().getModelName(t);
                void 0 !== i && (e = this._model._getAttribute(i));
              }
              return e;
            }),
            (t.prototype._forEachNode = function (t, e) {
              t(this, e),
                e++,
                this._children.forEach(function (i) {
                  i._forEachNode(t, e);
                });
            }),
            (t.prototype._setVisible = function (t) {
              t !== this._visible &&
                (this._fireEvent('visibility', { visible: t }),
                (this._visible = t));
            }),
            (t.prototype._getDrawChildren = function () {
              return this._children;
            }),
            (t.prototype._setParent = function (t) {
              this._parent = t;
            }),
            (t.prototype._setRect = function (t) {
              this._rect = t;
            }),
            (t.prototype._setWeight = function (t) {
              this._attributes.weight = t;
            }),
            (t.prototype._setSelected = function (t) {
              this._attributes.selected = t;
            }),
            (t.prototype._isFixed = function () {
              return this._fixed;
            }),
            (t.prototype._layout = function (t, e) {
              this._rect = t;
            }),
            (t.prototype._findDropTargetNode = function (t, e, i) {
              var n;
              if (
                this._rect.contains(e, i) &&
                void 0 === (n = this.canDrop(t, e, i)) &&
                0 !== this._children.length
              )
                for (var o = 0, r = this._children; o < r.length; o++) {
                  if (void 0 !== (n = r[o]._findDropTargetNode(t, e, i))) break;
                }
              return n;
            }),
            (t.prototype.canDrop = function (t, e, i) {}),
            (t.prototype._canDockInto = function (t, e) {
              if (null != e) {
                if (
                  e.location === n.default.CENTER &&
                  !1 === e.node.isEnableDrop()
                )
                  return !1;
                if (
                  e.location === n.default.CENTER &&
                  'tabset' === t.getType() &&
                  void 0 !== t.getName()
                )
                  return !1;
                if (
                  e.location !== n.default.CENTER &&
                  !1 === e.node.isEnableDivide()
                )
                  return !1;
                if (this._model._getOnAllowDrop())
                  return this._model._getOnAllowDrop()(t, e);
              }
              return !0;
            }),
            (t.prototype._removeChild = function (t) {
              var e = this._children.indexOf(t);
              return (
                -1 !== e && this._children.splice(e, 1), (this._dirty = !0), e
              );
            }),
            (t.prototype._addChild = function (t, e) {
              return (
                null != e
                  ? this._children.splice(e, 0, t)
                  : (this._children.push(t), (e = this._children.length - 1)),
                (t._parent = this),
                (this._dirty = !0),
                e
              );
            }),
            (t.prototype._removeAll = function () {
              (this._children = []), (this._dirty = !0);
            }),
            (t.prototype._styleWithPosition = function (t) {
              return null == t && (t = {}), this._rect.styleWithPosition(t);
            }),
            (t.prototype._getTempSize = function () {
              return this._tempSize;
            }),
            (t.prototype._setTempSize = function (t) {
              this._tempSize = t;
            }),
            (t.prototype.isEnableDivide = function () {
              return !0;
            }),
            (t.prototype._toAttributeString = function () {
              return JSON.stringify(this._attributes, void 0, '\t');
            }),
            (t.prototype._getAttributeAsStringOrUndefined = function (t) {
              var e = this._attributes[t];
              if (void 0 !== e) return e;
            }),
            (t.prototype._getAttributeAsNumberOrUndefined = function (t) {
              var e = this._attributes[t];
              if (void 0 !== e) return e;
            }),
            t
          );
        })();
      e.default = a;
    },
    412: function (t, e, i) {
      'use strict';
      Object.defineProperty(e, '__esModule', { value: !0 });
      var n = (function () {
        function t(t, e, i, n) {
          (this.name = t),
            (this.modelName = e),
            (this.defaultValue = i),
            (this.alwaysWriteJson = n),
            (this.type = void 0),
            (this.values = []),
            (this.from = -99999999),
            (this.to = 99999999);
        }
        return (
          (t.prototype.setType = function (t) {
            return (this.type = t), this;
          }),
          (t.prototype.setValues = function () {
            for (var t = [], e = 0; e < arguments.length; e++)
              t[e] = arguments[e];
            return (this.values = t), this;
          }),
          (t.prototype.setFrom = function (t) {
            return (this.from = t), this;
          }),
          (t.prototype.setTo = function (t) {
            return (this.to = t), this;
          }),
          (t.ENUM = 'Enum'),
          (t.INT = 'Int'),
          (t.NUMBER = 'Number'),
          (t.STRING = 'String'),
          (t.BOOLEAN = 'Boolean'),
          (t.ID = 'Id'),
          (t.JSON = 'Json'),
          t
        );
      })();
      e.default = n;
    },
    413: function (t, e, i) {
      'use strict';
      var n =
        (this && this.__extends) ||
        (function () {
          var t = function (e, i) {
            return (t =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function (t, e) {
                  t.__proto__ = e;
                }) ||
              function (t, e) {
                for (var i in e)
                  Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
              })(e, i);
          };
          return function (e, i) {
            function n() {
              this.constructor = e;
            }
            t(e, i),
              (e.prototype =
                null === i
                  ? Object.create(i)
                  : ((n.prototype = i.prototype), new n()));
          };
        })();
      Object.defineProperty(e, '__esModule', { value: !0 });
      var o = i(412),
        r = i(410),
        a = (function (t) {
          function e(i, n, o) {
            void 0 === o && (o = !0);
            var r = t.call(this, i) || this;
            return (
              (r._extra = {}),
              e._attributeDefinitions.fromJson(n, r._attributes),
              !0 === o && i._addNode(r),
              r
            );
          }
          return (
            n(e, t),
            (e._fromJson = function (t, i, n) {
              return void 0 === n && (n = !0), new e(i, t, n);
            }),
            (e._createAttributeDefinitions = function () {
              var t = new r.default();
              return (
                t.add('type', e.TYPE, !0),
                t.add('id', void 0).setType(o.default.ID),
                t.add('name', '[Unnamed Tab]').setType(o.default.STRING),
                t.add('component', void 0).setType(o.default.STRING),
                t.add('config', void 0).setType(o.default.JSON),
                t.add('floating', !1).setType(o.default.BOOLEAN),
                t
                  .addInherited('enableClose', 'tabEnableClose')
                  .setType(o.default.BOOLEAN),
                t
                  .addInherited('closeType', 'tabCloseType')
                  .setType(o.default.INT),
                t
                  .addInherited('enableDrag', 'tabEnableDrag')
                  .setType(o.default.BOOLEAN),
                t
                  .addInherited('enableRename', 'tabEnableRename')
                  .setType(o.default.BOOLEAN),
                t
                  .addInherited('className', 'tabClassName')
                  .setType(o.default.STRING),
                t.addInherited('icon', 'tabIcon').setType(o.default.STRING),
                t
                  .addInherited(
                    'enableRenderOnDemand',
                    'tabEnableRenderOnDemand'
                  )
                  .setType(o.default.BOOLEAN),
                t
                  .addInherited('enableFloat', 'tabEnableFloat')
                  .setType(o.default.BOOLEAN),
                t
              );
            }),
            (e.prototype.getWindow = function () {
              return this._window;
            }),
            (e.prototype.getTabRect = function () {
              return this._tabRect;
            }),
            (e.prototype._setTabRect = function (t) {
              this._tabRect = t;
            }),
            (e.prototype._setRenderedName = function (t) {
              this._renderedName = t;
            }),
            (e.prototype._getRenderedName = function () {
              return this._renderedName;
            }),
            (e.prototype.getName = function () {
              return this._getAttr('name');
            }),
            (e.prototype.getComponent = function () {
              return this._getAttributeAsStringOrUndefined('component');
            }),
            (e.prototype.getConfig = function () {
              return this._attributes.config;
            }),
            (e.prototype.getExtraData = function () {
              return this._extra;
            }),
            (e.prototype.isFloating = function () {
              return this._getAttr('floating');
            }),
            (e.prototype.getIcon = function () {
              return this._getAttributeAsStringOrUndefined('icon');
            }),
            (e.prototype.isEnableClose = function () {
              return this._getAttr('enableClose');
            }),
            (e.prototype.getCloseType = function () {
              return this._getAttr('closeType');
            }),
            (e.prototype.isEnableFloat = function () {
              return this._getAttr('enableFloat');
            }),
            (e.prototype.isEnableDrag = function () {
              return this._getAttr('enableDrag');
            }),
            (e.prototype.isEnableRename = function () {
              return this._getAttr('enableRename');
            }),
            (e.prototype.getClassName = function () {
              return this._getAttributeAsStringOrUndefined('className');
            }),
            (e.prototype.isEnableRenderOnDemand = function () {
              return this._getAttr('enableRenderOnDemand');
            }),
            (e.prototype._setName = function (t) {
              (this._attributes.name = t),
                this._window &&
                  this._window.document &&
                  (this._window.document.title = t);
            }),
            (e.prototype._setFloating = function (t) {
              this._attributes.floating = t;
            }),
            (e.prototype._layout = function (t, e) {
              t.equals(this._rect) || this._fireEvent('resize', { rect: t }),
                (this._rect = t);
            }),
            (e.prototype._delete = function () {
              this._parent._remove(this), this._fireEvent('close', {});
            }),
            (e.prototype._toJson = function () {
              var t = {};
              return e._attributeDefinitions.toJson(t, this._attributes), t;
            }),
            (e.prototype._updateAttrs = function (t) {
              e._attributeDefinitions.update(t, this._attributes);
            }),
            (e.prototype._getAttributeDefinitions = function () {
              return e._attributeDefinitions;
            }),
            (e.prototype._setWindow = function (t) {
              this._window = t;
            }),
            (e.TYPE = 'tab'),
            (e._attributeDefinitions = e._createAttributeDefinitions()),
            e
          );
        })(i(411).default);
      e.default = a;
    },
    414: function (t, e, i) {
      'use strict';
      Object.defineProperty(e, '__esModule', { value: !0 });
      var n = function (t, e, i, n, o) {
        (this.node = t),
          (this.rect = e),
          (this.location = i),
          (this.index = n),
          (this.className = o);
      };
      e.default = n;
    },
    415: function (t, e, i) {
      'use strict';
      var n =
        (this && this.__extends) ||
        (function () {
          var t = function (e, i) {
            return (t =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function (t, e) {
                  t.__proto__ = e;
                }) ||
              function (t, e) {
                for (var i in e)
                  Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
              })(e, i);
          };
          return function (e, i) {
            function n() {
              this.constructor = e;
            }
            t(e, i),
              (e.prototype =
                null === i
                  ? Object.create(i)
                  : ((n.prototype = i.prototype), new n()));
          };
        })();
      Object.defineProperty(e, '__esModule', { value: !0 });
      var o = i(410),
        r = i(402),
        a = (function (t) {
          function e(i) {
            var n = t.call(this, i) || this;
            return (
              (n._fixed = !0), (n._attributes.type = e.TYPE), i._addNode(n), n
            );
          }
          return (
            n(e, t),
            (e.prototype.getWidth = function () {
              return this._model.getSplitterSize();
            }),
            (e.prototype.getMinWidth = function () {
              return this.getOrientation() === r.default.VERT
                ? this._model.getSplitterSize()
                : 0;
            }),
            (e.prototype.getHeight = function () {
              return this._model.getSplitterSize();
            }),
            (e.prototype.getMinHeight = function () {
              return this.getOrientation() === r.default.HORZ
                ? this._model.getSplitterSize()
                : 0;
            }),
            (e.prototype.getMinSize = function (t) {
              return t === r.default.HORZ
                ? this.getMinWidth()
                : this.getMinHeight();
            }),
            (e.prototype.getWeight = function () {
              return 0;
            }),
            (e.prototype._setWeight = function (t) {}),
            (e.prototype._getPrefSize = function (t) {
              return this._model.getSplitterSize();
            }),
            (e.prototype._updateAttrs = function (t) {}),
            (e.prototype._getAttributeDefinitions = function () {
              return new o.default();
            }),
            (e.prototype._toJson = function () {}),
            (e.TYPE = 'splitter'),
            e
          );
        })(i(411).default);
      e.default = a;
    },
    416: function (t, e, i) {
      'use strict';
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.Rect = e.DropInfo = e.DragDrop = e.Orientation = e.DockLocation = e.BorderSet = e.BorderNode = e.TabSetNode = e.TabNode = e.SplitterNode = e.RowNode = e.Node = e.Model = e.Action = e.Actions = e.I18nLabel = e.Layout = void 0);
      var n = i(406);
      e.DockLocation = n.default;
      var o = i(417);
      e.DragDrop = o.default;
      var r = i(414);
      e.DropInfo = r.default;
      var a = i(408);
      Object.defineProperty(e, 'I18nLabel', {
        enumerable: !0,
        get: function () {
          return a.I18nLabel;
        },
      });
      var s = i(419);
      e.Action = s.default;
      var d = i(405);
      e.Actions = d.default;
      var l = i(409);
      e.BorderNode = l.default;
      var u = i(421);
      e.BorderSet = u.default;
      var c = i(426);
      e.Model = c.default;
      var h = i(411);
      e.Node = h.default;
      var _ = i(418);
      e.RowNode = _.default;
      var f = i(415);
      e.SplitterNode = f.default;
      var p = i(413);
      e.TabNode = p.default;
      var g = i(407);
      e.TabSetNode = g.default;
      var T = i(402);
      e.Orientation = T.default;
      var y = i(403);
      e.Rect = y.default;
      var v = i(427);
      (e.Layout = v.default),
        (e.default = {
          Layout: v.default,
          I18nLabel: a.I18nLabel,
          Actions: d.default,
          Action: s.default,
          Model: c.default,
          Node: h.default,
          RowNode: _.default,
          SplitterNode: f.default,
          TabNode: p.default,
          TabSetNode: g.default,
          BorderNode: l.default,
          BorderSet: u.default,
          DockLocation: n.default,
          Orientation: T.default,
          DragDrop: o.default,
          DropInfo: r.default,
          Rect: y.default,
        });
    },
    417: function (t, e, i) {
      'use strict';
      Object.defineProperty(e, '__esModule', { value: !0 });
      var n = i(403),
        o = !(
          'undefined' === typeof window ||
          !window.document ||
          !window.document.createElement
        ),
        r = (function () {
          function t() {
            (this._manualGlassManagement = !1),
              (this._startX = 0),
              (this._startY = 0),
              (this._glassShowing = !1),
              (this._dragging = !1),
              (this._active = !1),
              o &&
                ((this._glass = document.createElement('div')),
                (this._glass.style.zIndex = '998'),
                (this._glass.style.position = 'absolute'),
                (this._glass.style.backgroundColor = 'transparent'),
                (this._glass.style.outline = 'none')),
              (this._onMouseMove = this._onMouseMove.bind(this)),
              (this._onMouseUp = this._onMouseUp.bind(this)),
              (this._onKeyPress = this._onKeyPress.bind(this)),
              (this._lastClick = 0),
              (this._clickX = 0),
              (this._clickY = 0);
          }
          return (
            (t.prototype.addGlass = function (t, e) {
              this._glassShowing
                ? (this._manualGlassManagement = !0)
                : (e || (e = window.document),
                  (this._document = e),
                  new n.default(
                    0,
                    0,
                    e.documentElement.scrollWidth,
                    e.documentElement.scrollHeight
                  ).positionElement(this._glass),
                  e.body.appendChild(this._glass),
                  (this._glass.tabIndex = -1),
                  this._glass.focus(),
                  this._glass.addEventListener('keydown', this._onKeyPress),
                  (this._glassShowing = !0),
                  (this._fDragCancel = t),
                  (this._manualGlassManagement = !1));
            }),
            (t.prototype.hideGlass = function () {
              this._glassShowing &&
                (this._document.body.removeChild(this._glass),
                (this._glassShowing = !1),
                (this._document = void 0));
            }),
            (t.prototype.startDrag = function (t, e, i, n, o, r, a, s) {
              if (
                !(
                  t &&
                  this._lastEvent &&
                  this._lastEvent.type.startsWith('touch') &&
                  t.type.startsWith('mouse') &&
                  t.timeStamp - this._lastEvent.timeStamp < 500
                )
              ) {
                (this._lastEvent = t), (this._document = s || window.document);
                var d = this._getLocationEvent(t);
                this.addGlass(o, s),
                  this._dragging &&
                    console.warn(
                      'this._dragging true on startDrag should never happen'
                    ),
                  t
                    ? ((this._startX = d.clientX),
                      (this._startY = d.clientY),
                      (window.matchMedia &&
                        !window.matchMedia('(pointer: fine)').matches) ||
                        (this._glass.style.cursor = getComputedStyle(
                          t.target
                        ).cursor),
                      this._stopPropagation(t),
                      this._preventDefault(t))
                    : ((this._startX = 0),
                      (this._startY = 0),
                      (this._glass.style.cursor = 'default')),
                  (this._dragging = !1),
                  (this._fDragStart = e),
                  (this._fDragMove = i),
                  (this._fDragEnd = n),
                  (this._fDragCancel = o),
                  (this._fClick = r),
                  (this._fDblClick = a),
                  (this._active = !0),
                  this._document.addEventListener('mouseup', this._onMouseUp, {
                    passive: !1,
                  }),
                  this._document.addEventListener(
                    'mousemove',
                    this._onMouseMove,
                    { passive: !1 }
                  ),
                  this._document.addEventListener('touchend', this._onMouseUp, {
                    passive: !1,
                  }),
                  this._document.addEventListener(
                    'touchmove',
                    this._onMouseMove,
                    { passive: !1 }
                  );
              }
            }),
            (t.prototype.isDragging = function () {
              return this._dragging;
            }),
            (t.prototype.isActive = function () {
              return this._active;
            }),
            (t.prototype.toString = function () {
              return (
                '(DragDrop: startX=' +
                this._startX +
                ', startY=' +
                this._startY +
                ', dragging=' +
                this._dragging +
                ')'
              );
            }),
            (t.prototype._onKeyPress = function (t) {
              void 0 !== this._fDragCancel &&
                27 === t.keyCode &&
                (this._document.removeEventListener(
                  'mousemove',
                  this._onMouseMove
                ),
                this._document.removeEventListener('mouseup', this._onMouseUp),
                this._document.removeEventListener('touchend', this._onMouseUp),
                this._document.removeEventListener(
                  'touchmove',
                  this._onMouseMove
                ),
                this.hideGlass(),
                this._fDragCancel(this._dragging),
                (this._dragging = !1),
                (this._active = !1));
            }),
            (t.prototype._getLocationEvent = function (t) {
              var e = t;
              return t && t.touches && (e = t.touches[0]), e;
            }),
            (t.prototype._getLocationEventEnd = function (t) {
              var e = t;
              return t.changedTouches && (e = t.changedTouches[0]), e;
            }),
            (t.prototype._stopPropagation = function (t) {
              t.stopPropagation && t.stopPropagation();
            }),
            (t.prototype._preventDefault = function (t) {
              return t.preventDefault && t.cancelable && t.preventDefault(), t;
            }),
            (t.prototype._onMouseMove = function (t) {
              this._lastEvent = t;
              var e = this._getLocationEvent(t);
              return (
                this._stopPropagation(t),
                this._preventDefault(t),
                !this._dragging &&
                  (Math.abs(this._startX - e.clientX) > 5 ||
                    Math.abs(this._startY - e.clientY) > 5) &&
                  ((this._dragging = !0),
                  this._fDragStart &&
                    ((this._glass.style.cursor = 'move'),
                    (this._dragging = this._fDragStart({
                      clientX: this._startX,
                      clientY: this._startY,
                    })))),
                this._dragging && this._fDragMove && this._fDragMove(e),
                !1
              );
            }),
            (t.prototype._onMouseUp = function (t) {
              this._lastEvent = t;
              var e = this._getLocationEventEnd(t);
              if (
                (this._stopPropagation(t),
                this._preventDefault(t),
                (this._active = !1),
                this._document.removeEventListener(
                  'mousemove',
                  this._onMouseMove
                ),
                this._document.removeEventListener('mouseup', this._onMouseUp),
                this._document.removeEventListener('touchend', this._onMouseUp),
                this._document.removeEventListener(
                  'touchmove',
                  this._onMouseMove
                ),
                this._manualGlassManagement || this.hideGlass(),
                this._dragging)
              )
                (this._dragging = !1), this._fDragEnd && this._fDragEnd(t);
              else if (
                (this._fDragCancel && this._fDragCancel(this._dragging),
                Math.abs(this._startX - e.clientX) <= 5 &&
                  Math.abs(this._startY - e.clientY) <= 5)
              ) {
                var i = new Date().getTime();
                Math.abs(this._clickX - e.clientX) <= 5 &&
                  Math.abs(this._clickY - e.clientY) <= 5 &&
                  i - this._lastClick < 500 &&
                  this._fDblClick &&
                  this._fDblClick(t),
                  this._fClick && this._fClick(t),
                  (this._lastClick = i),
                  (this._clickX = e.clientX),
                  (this._clickY = e.clientY);
              }
              return !1;
            }),
            (t.instance = new t()),
            t
          );
        })();
      e.default = r;
    },
    418: function (t, e, i) {
      'use strict';
      var n =
        (this && this.__extends) ||
        (function () {
          var t = function (e, i) {
            return (t =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function (t, e) {
                  t.__proto__ = e;
                }) ||
              function (t, e) {
                for (var i in e)
                  Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
              })(e, i);
          };
          return function (e, i) {
            function n() {
              this.constructor = e;
            }
            t(e, i),
              (e.prototype =
                null === i
                  ? Object.create(i)
                  : ((n.prototype = i.prototype), new n()));
          };
        })();
      Object.defineProperty(e, '__esModule', { value: !0 });
      var o = i(410),
        r = i(406),
        a = i(414),
        s = i(402),
        d = i(403),
        l = i(409),
        u = i(411),
        c = i(415),
        h = i(407),
        _ = (function (t) {
          function e(i, n) {
            var o = t.call(this, i) || this;
            return (
              (o._dirty = !0),
              (o._drawChildren = []),
              (o.minHeight = 0),
              (o.minWidth = 0),
              e._attributeDefinitions.fromJson(n, o._attributes),
              i._addNode(o),
              o
            );
          }
          return (
            n(e, t),
            (e._fromJson = function (t, i) {
              var n = new e(i, t);
              if (null != t.children)
                for (var o = 0, r = t.children; o < r.length; o++) {
                  var a = r[o];
                  if (a.type === h.default.TYPE) {
                    var s = h.default._fromJson(a, i);
                    n._addChild(s);
                  } else {
                    s = e._fromJson(a, i);
                    n._addChild(s);
                  }
                }
              return n;
            }),
            (e._createAttributeDefinitions = function () {
              var t = new o.default();
              return (
                t.add('type', e.TYPE, !0),
                t.add('id', void 0),
                t.add('weight', 100),
                t.add('width', void 0),
                t.add('height', void 0),
                t
              );
            }),
            (e.prototype.getWeight = function () {
              return this._attributes.weight;
            }),
            (e.prototype.getWidth = function () {
              return this._getAttributeAsNumberOrUndefined('width');
            }),
            (e.prototype.getHeight = function () {
              return this._getAttributeAsNumberOrUndefined('height');
            }),
            (e.prototype._setWeight = function (t) {
              this._attributes.weight = t;
            }),
            (e.prototype._layout = function (e, i) {
              t.prototype._layout.call(this, e, i);
              for (
                var n = this._rect._getSize(this.getOrientation()),
                  o = 0,
                  r = 0,
                  a = 0,
                  l = 0,
                  u = this._getDrawChildren(),
                  h = 0,
                  _ = u;
                h < _.length;
                h++
              ) {
                var f = (I = _[h])._getPrefSize(this.getOrientation());
                I._isFixed()
                  ? void 0 !== f && (r += f)
                  : void 0 === f
                  ? (o += I.getWeight())
                  : ((a += f), (l += I.getWeight()));
              }
              var p = !1,
                g = n - r - a;
              g < 0 && ((g = n - r), (p = !0), (o += l));
              for (var T = 0, y = 0, v = 0, b = u; v < b.length; v++) {
                f = (I = b[v])._getPrefSize(this.getOrientation());
                if (I._isFixed()) void 0 !== f && I._setTempSize(f);
                else if (null == f || p) {
                  if (0 === o) I._setTempSize(0);
                  else {
                    var E = I.getMinSize(this.getOrientation()),
                      m = Math.floor(g * (I.getWeight() / o));
                    I._setTempSize(Math.max(E, m));
                  }
                  y += I._getTempSize();
                } else I._setTempSize(f);
                T += I._getTempSize();
              }
              if (y > 0) {
                for (; T < n; )
                  for (var S = 0, A = u; S < A.length; S++) {
                    if (!((I = A[S]) instanceof c.default)) {
                      f = I._getPrefSize(this.getOrientation());
                      !I._isFixed() &&
                        (void 0 === f || p) &&
                        T < n &&
                        (I._setTempSize(I._getTempSize() + 1), T++);
                    }
                  }
                for (; T > n; ) {
                  for (var L = !1, O = 0, R = u; O < R.length; O++) {
                    if (!((I = R[O]) instanceof c.default)) {
                      E = I.getMinSize(this.getOrientation());
                      (m = I._getTempSize()) > E &&
                        T > n &&
                        (I._setTempSize(I._getTempSize() - 1), T--, (L = !0));
                    }
                  }
                  if (!L) break;
                }
                for (; T > n; ) {
                  L = !1;
                  for (var N = 0, D = u; N < D.length; N++) {
                    if (!((I = D[N]) instanceof c.default))
                      (m = I._getTempSize()) > 0 &&
                        T > n &&
                        (I._setTempSize(I._getTempSize() - 1), T--, (L = !0));
                  }
                  if (!L) break;
                }
              }
              for (var B = 0, w = 0, C = u; w < C.length; w++) {
                var I = C[w];
                this.getOrientation() === s.default.HORZ
                  ? I._layout(
                      new d.default(
                        this._rect.x + B,
                        this._rect.y,
                        I._getTempSize(),
                        this._rect.height
                      ),
                      i
                    )
                  : I._layout(
                      new d.default(
                        this._rect.x,
                        this._rect.y + B,
                        this._rect.width,
                        I._getTempSize()
                      ),
                      i
                    ),
                  (B += I._getTempSize());
              }
              return !0;
            }),
            (e.prototype._getSplitterBounds = function (t, e) {
              void 0 === e && (e = !1);
              var i = [0, 0],
                n = this._getDrawChildren(),
                o = n.indexOf(t),
                r = n[o - 1],
                a = n[o + 1];
              if (this.getOrientation() === s.default.HORZ) {
                var d = e ? r.getMinWidth() : 0,
                  l = e ? a.getMinWidth() : 0;
                (i[0] = r.getRect().x + d),
                  (i[1] = a.getRect().getRight() - t.getWidth() - l);
              } else {
                (d = e ? r.getMinHeight() : 0), (l = e ? a.getMinHeight() : 0);
                (i[0] = r.getRect().y + d),
                  (i[1] = a.getRect().getBottom() - t.getHeight() - l);
              }
              return i;
            }),
            (e.prototype._calculateSplit = function (t, e) {
              var i,
                n = this._getDrawChildren(),
                o = n.indexOf(t),
                r = this._getSplitterBounds(t),
                a = n[o - 1].getWeight() + n[o + 1].getWeight(),
                s = Math.max(0, e - r[0]),
                d = Math.max(0, r[1] - e);
              if (s + d > 0) {
                var l = (s * a) / (s + d),
                  u = (d * a) / (s + d);
                i = {
                  node1Id: n[o - 1].getId(),
                  weight1: l,
                  pixelWidth1: s,
                  node2Id: n[o + 1].getId(),
                  weight2: u,
                  pixelWidth2: d,
                };
              }
              return i;
            }),
            (e.prototype._getDrawChildren = function () {
              if (this._dirty) {
                this._drawChildren = [];
                for (var t = 0; t < this._children.length; t++) {
                  var e = this._children[t];
                  if (0 !== t) {
                    var i = new c.default(this._model);
                    i._setParent(this), this._drawChildren.push(i);
                  }
                  this._drawChildren.push(e);
                }
                this._dirty = !1;
              }
              return this._drawChildren;
            }),
            (e.prototype.getMinSize = function (t) {
              return t === s.default.HORZ
                ? this.getMinWidth()
                : this.getMinHeight();
            }),
            (e.prototype.getMinWidth = function () {
              return this.minWidth;
            }),
            (e.prototype.getMinHeight = function () {
              return this.minHeight;
            }),
            (e.prototype.calcMinSize = function () {
              var t = this;
              (this.minHeight = 0), (this.minWidth = 0);
              var i = !0;
              this._children.forEach(function (n) {
                var o = n;
                o instanceof e && o.calcMinSize(),
                  t.getOrientation() === s.default.VERT
                    ? ((t.minHeight += o.getMinHeight()),
                      i || (t.minHeight += t._model.getSplitterSize()),
                      (t.minWidth = Math.max(t.minWidth, o.getMinWidth())))
                    : ((t.minWidth += o.getMinWidth()),
                      i || (t.minWidth += t._model.getSplitterSize()),
                      (t.minHeight = Math.max(t.minHeight, o.getMinHeight()))),
                  (i = !1);
              });
            }),
            (e.prototype._tidy = function () {
              for (var t = 0; t < this._children.length; ) {
                if ((u = this._children[t]) instanceof e) {
                  u._tidy();
                  var i = u.getChildren();
                  if (0 === i.length) this._removeChild(u);
                  else if (1 === i.length) {
                    var n = i[0];
                    if ((this._removeChild(u), n instanceof e)) {
                      for (
                        var o = 0, r = n.getChildren(), a = 0, s = r;
                        a < s.length;
                        a++
                      ) {
                        o += (l = s[a]).getWeight();
                      }
                      for (var d = 0; d < r.length; d++) {
                        var l;
                        (l = r[d])._setWeight(
                          (u.getWeight() * l.getWeight()) / o
                        ),
                          this._addChild(l, t + d);
                      }
                    } else n._setWeight(u.getWeight()), this._addChild(n, t);
                  } else t++;
                } else
                  u instanceof h.default &&
                  0 === u.getChildren().length &&
                  u.isEnableDeleteWhenEmpty()
                    ? (this._removeChild(u),
                      u === this._model.getMaximizedTabset() &&
                        this._model._setMaximizedTabset(void 0))
                    : t++;
              }
              if (
                this === this._model.getRoot() &&
                0 === this._children.length
              ) {
                var u = new h.default(this._model, { type: 'tabset' });
                this._model._setActiveTabset(u), this._addChild(u);
              }
            }),
            (e.prototype.canDrop = function (t, e, i) {
              var n,
                o = i - this._rect.y,
                s = e - this._rect.x,
                d = this._rect.width,
                l = this._rect.height,
                u = 50;
              if (this._model.isEnableEdgeDock() && void 0 === this._parent) {
                if (e < this._rect.x + 10 && o > l / 2 - u && o < l / 2 + u)
                  ((h = (c = r.default.LEFT).getDockRect(this._rect)).width =
                    h.width / 2),
                    (n = new a.default(
                      this,
                      h,
                      c,
                      -1,
                      'flexlayout__outline_rect_edge'
                    ));
                else if (
                  e > this._rect.getRight() - 10 &&
                  o > l / 2 - u &&
                  o < l / 2 + u
                ) {
                  ((h = (c = r.default.RIGHT).getDockRect(this._rect)).width =
                    h.width / 2),
                    (h.x += h.width),
                    (n = new a.default(
                      this,
                      h,
                      c,
                      -1,
                      'flexlayout__outline_rect_edge'
                    ));
                } else if (
                  i < this._rect.y + 10 &&
                  s > d / 2 - u &&
                  s < d / 2 + u
                ) {
                  ((h = (c = r.default.TOP).getDockRect(this._rect)).height =
                    h.height / 2),
                    (n = new a.default(
                      this,
                      h,
                      c,
                      -1,
                      'flexlayout__outline_rect_edge'
                    ));
                } else if (
                  i > this._rect.getBottom() - 10 &&
                  s > d / 2 - u &&
                  s < d / 2 + u
                ) {
                  var c, h;
                  ((h = (c = r.default.BOTTOM).getDockRect(this._rect)).height =
                    h.height / 2),
                    (h.y += h.height),
                    (n = new a.default(
                      this,
                      h,
                      c,
                      -1,
                      'flexlayout__outline_rect_edge'
                    ));
                }
                if (void 0 !== n && !t._canDockInto(t, n)) return;
              }
              return n;
            }),
            (e.prototype.drop = function (t, i, n) {
              var o,
                a = i,
                s = t.getParent();
              s && s._removeChild(t),
                void 0 !== s &&
                  s.getType() === h.default.TYPE &&
                  s._setSelected(0),
                void 0 !== s &&
                  s.getType() === l.default.TYPE &&
                  s._setSelected(-1),
                t instanceof h.default
                  ? (o = t)
                  : (o = new h.default(this._model, {}))._addChild(t);
              var d = this._children.reduce(function (t, e) {
                return t + e.getWeight();
              }, 0);
              if (
                (0 === d && (d = 100),
                o._setWeight(d / 3),
                a === r.default.LEFT)
              )
                this._addChild(o, 0);
              else if (a === r.default.RIGHT) this._addChild(o);
              else if (a === r.default.TOP) {
                var u = new e(this._model, {}),
                  c = new e(this._model, {});
                c._setWeight(75),
                  o._setWeight(25),
                  this._children.forEach(function (t) {
                    c._addChild(t);
                  }),
                  this._removeAll(),
                  u._addChild(o),
                  u._addChild(c),
                  this._addChild(u);
              } else if (a === r.default.BOTTOM) {
                u = new e(this._model, {});
                var _ = new e(this._model, {});
                _._setWeight(75),
                  o._setWeight(25),
                  this._children.forEach(function (t) {
                    _._addChild(t);
                  }),
                  this._removeAll(),
                  u._addChild(_),
                  u._addChild(o),
                  this._addChild(u);
              }
              this._model._setActiveTabset(o), this._model._tidy();
            }),
            (e.prototype._toJson = function () {
              var t = {};
              return (
                e._attributeDefinitions.toJson(t, this._attributes),
                (t.children = []),
                this._children.forEach(function (e) {
                  t.children.push(e._toJson());
                }),
                t
              );
            }),
            (e.prototype.isEnableDrop = function () {
              return !0;
            }),
            (e.prototype._getPrefSize = function (t) {
              var e = this.getWidth();
              return t === s.default.VERT && (e = this.getHeight()), e;
            }),
            (e.prototype._getAttributeDefinitions = function () {
              return e._attributeDefinitions;
            }),
            (e.prototype._updateAttrs = function (t) {
              e._attributeDefinitions.update(t, this._attributes);
            }),
            (e.TYPE = 'row'),
            (e._attributeDefinitions = e._createAttributeDefinitions()),
            e
          );
        })(u.default);
      e.default = _;
    },
    419: function (t, e, i) {
      'use strict';
      Object.defineProperty(e, '__esModule', { value: !0 });
      var n = function (t, e) {
        (this.type = t), (this.data = e);
      };
      e.default = n;
    },
    420: function (t, e, i) {
      'use strict';
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.adjustSelectedIndex = void 0);
      var n = i(407),
        o = i(409);
      e.adjustSelectedIndex = function (t, e) {
        if (
          void 0 !== t &&
          (t.getType() === n.default.TYPE || t.getType() === o.default.TYPE)
        ) {
          var i = t.getSelected();
          -1 !== i &&
            (e === i && t.getChildren().length > 0
              ? e >= t.getChildren().length &&
                t._setSelected(t.getChildren().length - 1)
              : e < i
              ? t._setSelected(i - 1)
              : e > i || t._setSelected(-1));
        }
      };
    },
    421: function (t, e, i) {
      'use strict';
      Object.defineProperty(e, '__esModule', { value: !0 });
      var n = i(402),
        o = i(409),
        r = (function () {
          function t(t) {
            (this._model = t), (this._borders = []);
          }
          return (
            (t._fromJson = function (e, i) {
              var n = new t(i);
              return (
                (n._borders = e.map(function (t) {
                  return o.default._fromJson(t, i);
                })),
                n
              );
            }),
            (t.prototype.getBorders = function () {
              return this._borders;
            }),
            (t.prototype._forEachNode = function (t) {
              this._borders.forEach(function (e) {
                t(e, 0),
                  e.getChildren().forEach(function (e) {
                    e._forEachNode(t, 1);
                  });
              });
            }),
            (t.prototype._toJson = function () {
              return this._borders.map(function (t) {
                return t._toJson();
              });
            }),
            (t.prototype._layoutBorder = function (t, e) {
              for (
                var i = t.outer,
                  o = i.height,
                  r = i.width,
                  a = 0,
                  s = 0,
                  d = 0,
                  l = 0,
                  u = this._borders.filter(function (t) {
                    return t.isShowing();
                  }),
                  c = 0,
                  h = u;
                c < h.length;
                c++
              ) {
                if ((p = h[c]).isShowing()) {
                  p._setAdjustedSize(p.getSize());
                  var _ = -1 !== p.getSelected();
                  p.getLocation().getOrientation() === n.default.HORZ
                    ? ((s +=
                        p.getBorderBarSize() + this._model.getSplitterSize()),
                      _ && ((s += p.getSize()), (l += p.getSize())))
                    : ((a +=
                        p.getBorderBarSize() + this._model.getSplitterSize()),
                      _ && ((a += p.getSize()), (d += p.getSize())));
                }
              }
              for (var f = 0; (s > r && l > 0) || (a > o && d > 0); ) {
                var p;
                if (-1 !== (p = u[f]).getSelected()) {
                  var g = p._getAdjustedSize();
                  s > r &&
                  l > 0 &&
                  p.getLocation().getOrientation() === n.default.HORZ &&
                  g > 0
                    ? (p._setAdjustedSize(g - 1), s--, l--)
                    : a > o &&
                      d > 0 &&
                      p.getLocation().getOrientation() === n.default.VERT &&
                      g > 0 &&
                      (p._setAdjustedSize(g - 1), a--, d--);
                }
                f = (f + 1) % u.length;
              }
              return (
                u.forEach(function (i) {
                  t.outer = i._layoutBorderOuter(t.outer, e);
                }),
                (t.inner = t.outer),
                u.forEach(function (i) {
                  t.inner = i._layoutBorderInner(t.inner, e);
                }),
                t
              );
            }),
            (t.prototype._findDropTargetNode = function (t, e, i) {
              for (var n = 0, o = this._borders; n < o.length; n++) {
                var r = o[n];
                if (r.isShowing()) {
                  var a = r.canDrop(t, e, i);
                  if (void 0 !== a) return a;
                }
              }
            }),
            t
          );
        })();
      e.default = r;
    },
    422: function (t, e, i) {
      'use strict';
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.ICloseType = void 0),
        (function (t) {
          (t[(t.Visible = 1)] = 'Visible'),
            (t[(t.Always = 2)] = 'Always'),
            (t[(t.Selected = 3)] = 'Selected');
        })(e.ICloseType || (e.ICloseType = {}));
    },
    423: function (t, e, i) {
      'use strict';
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.showPopup = void 0);
      var n = i(0),
        o = i(75);
      e.showPopup = function (t, e, i, a, s) {
        var d = e.ownerDocument,
          l = e.getBoundingClientRect(),
          u = t.getBoundingClientRect(),
          c = d.createElement('div');
        (c.className = s('flexlayout__popup_menu_container')),
          l.left < u.left + u.width / 2
            ? (c.style.left = l.left - u.left + 'px')
            : (c.style.right = u.right - l.right + 'px'),
          l.top < u.top + u.height / 2
            ? (c.style.top = l.top - u.top + 'px')
            : (c.style.bottom = u.bottom - l.bottom + 'px'),
          t.appendChild(c);
        var h = function () {
            t.removeChild(c),
              o.unmountComponentAtNode(c),
              c.removeEventListener('mouseup', _),
              d.removeEventListener('mouseup', f);
          },
          _ = function (t) {
            t.stopPropagation();
          },
          f = function (t) {
            h();
          };
        c.addEventListener('mouseup', _),
          d.addEventListener('mouseup', f),
          o.render(
            n.createElement(r, {
              currentDocument: d,
              onSelect: a,
              onHide: h,
              items: i,
              classNameMapper: s,
            }),
            c
          );
      };
      var r = function (t) {
        var e = t.items,
          i = t.onHide,
          o = t.onSelect,
          r = t.classNameMapper,
          a = e.map(function (t) {
            return n.createElement(
              'div',
              {
                key: t.index,
                className: r('flexlayout__popup_menu_item'),
                onClick: function (e) {
                  return (function (t, e) {
                    o(t), i(), e.stopPropagation();
                  })(t, e);
                },
              },
              t.node._getRenderedName()
            );
          });
        return n.createElement(
          'div',
          { className: r('flexlayout__popup_menu') },
          a
        );
      };
    },
    424: function (t, e, i) {
      'use strict';
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.useTabOverflow = void 0);
      var n = i(0),
        o = i(403),
        r = i(407),
        a = i(402);
      e.useTabOverflow = function (t, e, i) {
        var s = n.useRef(!0),
          d = n.useRef(new o.default(0, 0, 0, 0)),
          l = n.useRef(null),
          u = n.useState(0),
          c = u[0],
          h = u[1],
          _ = n.useRef(!1),
          f = n.useState([]),
          p = f[0],
          g = f[1];
        n.useLayoutEffect(
          function () {
            _.current = !1;
          },
          [t.getSelectedNode(), t.getRect().width, t.getRect().height]
        ),
          n.useLayoutEffect(function () {
            b();
          }),
          n.useEffect(function () {
            var t = l.current;
            return (
              t.addEventListener('wheel', T),
              function () {
                t.removeEventListener('wheel', T);
              }
            );
          }, []);
        var T = function (t) {
            t.preventDefault();
          },
          y = function (t) {
            return e === a.default.HORZ ? t.x : t.y;
          },
          v = function (t) {
            return e === a.default.HORZ ? t.getRight() : t.getBottom();
          },
          b = function () {
            var n,
              o = t instanceof r.default ? t.getRect() : t.getTabHeaderRect(),
              l = t.getChildren()[t.getChildren().length - 1];
            if (
              !0 === s.current ||
              o.width !== d.current.width ||
              o.height !== d.current.height
            ) {
              d.current = o;
              var u = !(t instanceof r.default) || !0 === t.isEnableTabStrip(),
                f =
                  v(o) -
                  ((n = i.current.getBoundingClientRect()),
                  e === a.default.HORZ ? n.width : n.height);
              if (u && t.getChildren().length > 0) {
                if (0 === p.length && 0 === c && v(l.getTabRect()) + 2 < f)
                  return;
                f -= p.length > 0 ? (e === a.default.HORZ ? 10 : 0) : 45;
                var T = 0,
                  b = t.getSelectedNode();
                if (b && !_.current) {
                  var E = b.getTabRect(),
                    m = y(E) - 2,
                    S = v(E) + 2;
                  (S > f || m < y(o)) &&
                    (m < y(o) && (T = y(o) - m), S + T > f && (T = f - S));
                }
                for (
                  var A = Math.max(0, f - (v(l.getTabRect()) + 2 + T)),
                    L = Math.min(0, c + T + A),
                    O = L - c,
                    R = [],
                    N = 0;
                  N < t.getChildren().length;
                  N++
                ) {
                  var D = t.getChildren()[N];
                  (y(D.getTabRect()) + O < y(o) || v(D.getTabRect()) + O > f) &&
                    R.push({ node: D, index: N });
                }
                (s.current = !1), g(R), h(L);
              }
            } else s.current = !0;
          };
        return {
          selfRef: l,
          position: c,
          userControlledLeft: _,
          hiddenTabs: p,
          onMouseWheel: function (t) {
            var e = 0;
            (e = Math.abs(t.deltaX) > Math.abs(t.deltaY) ? t.deltaX : t.deltaY),
              1 === t.deltaMode && (e *= 40),
              h(c + e),
              (_.current = !0),
              t.stopPropagation();
          },
        };
      };
    },
    425: function (t, e, i) {
      'use strict';
      var n =
        (this && this.__extends) ||
        (function () {
          var t = function (e, i) {
            return (t =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function (t, e) {
                  t.__proto__ = e;
                }) ||
              function (t, e) {
                for (var i in e)
                  Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
              })(e, i);
          };
          return function (e, i) {
            function n() {
              this.constructor = e;
            }
            t(e, i),
              (e.prototype =
                null === i
                  ? Object.create(i)
                  : ((n.prototype = i.prototype), new n()));
          };
        })();
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.ErrorBoundary = void 0);
      var o = i(0),
        r = i(404),
        a = (function (t) {
          function e(e) {
            var i = t.call(this, e) || this;
            return (i.state = { hasError: !1 }), i;
          }
          return (
            n(e, t),
            (e.getDerivedStateFromError = function (t) {
              return { hasError: !0 };
            }),
            (e.prototype.componentDidCatch = function (t, e) {
              console.debug(t), console.debug(e);
            }),
            (e.prototype.render = function () {
              return this.state.hasError
                ? o.createElement(
                    'div',
                    {
                      className: r.CLASSES.FLEXLAYOUT__ERROR_BOUNDARY_CONTAINER,
                    },
                    o.createElement(
                      'div',
                      {
                        className: r.CLASSES.FLEXLAYOUT__ERROR_BOUNDARY_CONTENT,
                      },
                      this.props.message
                    )
                  )
                : this.props.children;
            }),
            e
          );
        })(o.Component);
      e.ErrorBoundary = a;
    },
    426: function (t, e, i) {
      'use strict';
      Object.defineProperty(e, '__esModule', { value: !0 });
      var n = i(412),
        o = i(410),
        r = i(406),
        a = i(402),
        s = i(403),
        d = i(405),
        l = i(409),
        u = i(421),
        c = i(418),
        h = i(413),
        _ = i(407),
        f = (function () {
          function t() {
            (this._borderRects = {
              inner: s.default.empty(),
              outer: s.default.empty(),
            }),
              (this._attributes = {}),
              (this._idMap = {}),
              (this._nextId = 0),
              (this._borders = new u.default(this)),
              (this._pointerFine = !0);
          }
          return (
            (t.fromJson = function (e) {
              var i = new t();
              return (
                t._attributeDefinitions.fromJson(e.global, i._attributes),
                e.borders && (i._borders = u.default._fromJson(e.borders, i)),
                (i._root = c.default._fromJson(e.layout, i)),
                i._tidy(),
                i
              );
            }),
            (t._createAttributeDefinitions = function () {
              var t = new o.default();
              return (
                t.add('splitterSize', -1).setType(n.default.INT),
                t.add('enableEdgeDock', !0).setType(n.default.BOOLEAN),
                t
                  .add('marginInsets', { top: 0, right: 0, bottom: 0, left: 0 })
                  .setType(n.default.JSON),
                t.add('tabEnableClose', !0).setType(n.default.BOOLEAN),
                t.add('tabCloseType', 1).setType(n.default.INT),
                t.add('tabEnableFloat', !1).setType(n.default.BOOLEAN),
                t.add('tabEnableDrag', !0).setType(n.default.BOOLEAN),
                t.add('tabEnableRename', !0).setType(n.default.BOOLEAN),
                t.add('tabClassName', void 0).setType(n.default.STRING),
                t.add('tabIcon', void 0).setType(n.default.STRING),
                t.add('tabEnableRenderOnDemand', !0).setType(n.default.BOOLEAN),
                t.add('tabDragSpeed', 0.3).setType(n.default.NUMBER),
                t
                  .add('tabSetEnableDeleteWhenEmpty', !0)
                  .setType(n.default.BOOLEAN),
                t.add('tabSetEnableDrop', !0).setType(n.default.BOOLEAN),
                t.add('tabSetEnableDrag', !0).setType(n.default.BOOLEAN),
                t.add('tabSetEnableDivide', !0).setType(n.default.BOOLEAN),
                t.add('tabSetEnableMaximize', !0).setType(n.default.BOOLEAN),
                t.add('tabSetAutoSelectTab', !0).setType(n.default.BOOLEAN),
                t
                  .add('tabSetClassNameTabStrip', void 0)
                  .setType(n.default.STRING),
                t
                  .add('tabSetClassNameHeader', void 0)
                  .setType(n.default.STRING),
                t.add('tabSetEnableTabStrip', !0).setType(n.default.BOOLEAN),
                t
                  .add('tabSetHeaderHeight', 0)
                  .setType(n.default.INT)
                  .setFrom(0),
                t
                  .add('tabSetTabStripHeight', 0)
                  .setType(n.default.INT)
                  .setFrom(0),
                t
                  .add('tabSetMarginInsets', {
                    top: 0,
                    right: 0,
                    bottom: 0,
                    left: 0,
                  })
                  .setType(n.default.JSON),
                t
                  .add('tabSetBorderInsets', {
                    top: 0,
                    right: 0,
                    bottom: 0,
                    left: 0,
                  })
                  .setType(n.default.JSON),
                t.add('tabSetTabLocation', 'top').setType(n.default.STRING),
                t.add('tabSetMinWidth', 0).setType(n.default.NUMBER),
                t.add('tabSetMinHeight', 0).setType(n.default.NUMBER),
                t.add('borderSize', 200).setType(n.default.INT).setFrom(0),
                t.add('borderMinSize', 0).setType(n.default.INT).setFrom(0),
                t.add('borderBarSize', 0).setType(n.default.INT).setFrom(0),
                t.add('borderEnableDrop', !0).setType(n.default.BOOLEAN),
                t
                  .add('borderAutoSelectTabWhenOpen', !0)
                  .setType(n.default.BOOLEAN),
                t
                  .add('borderAutoSelectTabWhenClosed', !1)
                  .setType(n.default.BOOLEAN),
                t.add('borderClassName', void 0).setType(n.default.STRING),
                t
              );
            }),
            (t.prototype._setChangeListener = function (t) {
              this._changeListener = t;
            }),
            (t.prototype.getActiveTabset = function () {
              return this._activeTabSet &&
                this.getNodeById(this._activeTabSet.getId())
                ? this._activeTabSet
                : void 0;
            }),
            (t.prototype._setActiveTabset = function (t) {
              this._activeTabSet = t;
            }),
            (t.prototype.getMaximizedTabset = function () {
              return this._maximizedTabSet;
            }),
            (t.prototype._setMaximizedTabset = function (t) {
              this._maximizedTabSet = t;
            }),
            (t.prototype.getRoot = function () {
              return this._root;
            }),
            (t.prototype.getBorderSet = function () {
              return this._borders;
            }),
            (t.prototype._getOuterInnerRects = function () {
              return this._borderRects;
            }),
            (t.prototype._getPointerFine = function () {
              return this._pointerFine;
            }),
            (t.prototype._setPointerFine = function (t) {
              this._pointerFine = t;
            }),
            (t.prototype.visitNodes = function (t) {
              this._borders._forEachNode(t), this._root._forEachNode(t, 0);
            }),
            (t.prototype.getNodeById = function (t) {
              return this._idMap[t];
            }),
            (t.prototype.doAction = function (t) {
              switch (t.type) {
                case d.default.ADD_NODE:
                  var e = new h.default(this, t.data.json, !0);
                  ((i = this._idMap[t.data.toNode]) instanceof _.default ||
                    i instanceof l.default ||
                    i instanceof c.default) &&
                    i.drop(
                      e,
                      r.default.getByName(t.data.location),
                      t.data.index,
                      t.data.select
                    );
                  break;
                case d.default.MOVE_NODE:
                  var i,
                    n = this._idMap[t.data.fromNode];
                  if (n instanceof h.default || n instanceof _.default)
                    ((i = this._idMap[t.data.toNode]) instanceof _.default ||
                      i instanceof l.default ||
                      i instanceof c.default) &&
                      i.drop(
                        n,
                        r.default.getByName(t.data.location),
                        t.data.index,
                        t.data.select
                      );
                  break;
                case d.default.DELETE_TAB:
                  (g = this._idMap[t.data.node]) instanceof h.default &&
                    (delete this._idMap[t.data.node], g._delete());
                  break;
                case d.default.FLOAT_TAB:
                  (g = this._idMap[t.data.node]) instanceof h.default &&
                    g._setFloating(!0);
                  break;
                case d.default.UNFLOAT_TAB:
                  (g = this._idMap[t.data.node]) instanceof h.default &&
                    g._setFloating(!1);
                  break;
                case d.default.RENAME_TAB:
                  (g = this._idMap[t.data.node]) instanceof h.default &&
                    g._setName(t.data.text);
                  break;
                case d.default.SELECT_TAB:
                  var o = this._idMap[t.data.tabNode];
                  if (o instanceof h.default) {
                    var a = o.getParent(),
                      s = a.getChildren().indexOf(o);
                    a instanceof l.default
                      ? a.getSelected() === s
                        ? a._setSelected(-1)
                        : a._setSelected(s)
                      : a instanceof _.default &&
                        (a.getSelected() !== s && a._setSelected(s),
                        (this._activeTabSet = a));
                  }
                  break;
                case d.default.SET_ACTIVE_TABSET:
                  var u = this._idMap[t.data.tabsetNode];
                  u instanceof _.default && (this._activeTabSet = u);
                  break;
                case d.default.ADJUST_SPLIT:
                  var f = this._idMap[t.data.node1],
                    p = this._idMap[t.data.node2];
                  (f instanceof _.default || f instanceof c.default) &&
                    (p instanceof _.default || p instanceof c.default) &&
                    (this._adjustSplitSide(
                      f,
                      t.data.weight1,
                      t.data.pixelWidth1
                    ),
                    this._adjustSplitSide(
                      p,
                      t.data.weight2,
                      t.data.pixelWidth2
                    ));
                  break;
                case d.default.ADJUST_BORDER_SPLIT:
                  (g = this._idMap[t.data.node]) instanceof l.default &&
                    g._setSize(t.data.pos);
                  break;
                case d.default.MAXIMIZE_TOGGLE:
                  (g = this._idMap[t.data.node]) instanceof _.default &&
                    (g === this._maximizedTabSet
                      ? (this._maximizedTabSet = void 0)
                      : ((this._maximizedTabSet = g),
                        (this._activeTabSet = g)));
                  break;
                case d.default.UPDATE_MODEL_ATTRIBUTES:
                  this._updateAttrs(t.data.json);
                  break;
                case d.default.UPDATE_NODE_ATTRIBUTES:
                  var g;
                  (g = this._idMap[t.data.node])._updateAttrs(t.data.json);
              }
              this._updateIdMap(),
                void 0 !== this._changeListener && this._changeListener();
            }),
            (t.prototype._updateIdMap = function () {
              var t = this;
              (this._idMap = {}),
                this.visitNodes(function (e) {
                  return (t._idMap[e.getId()] = e);
                });
            }),
            (t.prototype._adjustSplitSide = function (t, e, i) {
              t._setWeight(e),
                null != t.getWidth() && t.getOrientation() === a.default.VERT
                  ? t._updateAttrs({ width: i })
                  : null != t.getHeight() &&
                    t.getOrientation() === a.default.HORZ &&
                    t._updateAttrs({ height: i });
            }),
            (t.prototype.toJson = function () {
              var e = { global: {}, layout: {} };
              return (
                t._attributeDefinitions.toJson(e.global, this._attributes),
                this.visitNodes(function (t) {
                  t._fireEvent('save', void 0);
                }),
                (e.borders = this._borders._toJson()),
                (e.layout = this._root._toJson()),
                e
              );
            }),
            (t.prototype.getSplitterSize = function () {
              var t = this._attributes.splitterSize;
              return -1 === t && (t = this._pointerFine ? 8 : 12), t;
            }),
            (t.prototype.isEnableEdgeDock = function () {
              return this._attributes.enableEdgeDock;
            }),
            (t.prototype._addNode = function (t) {
              var e = t.getId();
              if (void 0 !== this._idMap[e])
                throw new Error(
                  'Error: each node must have a unique id, duplicate id:' +
                    t.getId()
                );
              'splitter' !== t.getType() && (this._idMap[e] = t);
            }),
            (t.prototype._layout = function (t, e) {
              var i;
              return (
                (this._borderRects = this._borders._layoutBorder(
                  { outer: t, inner: t },
                  e
                )),
                (t = this._borderRects.inner.removeInsets(
                  this._getAttribute('marginInsets')
                )),
                null === (i = this._root) || void 0 === i || i.calcMinSize(),
                this._root._layout(t, e),
                t
              );
            }),
            (t.prototype._findDropTargetNode = function (t, e, i) {
              var n = this._root._findDropTargetNode(t, e, i);
              return (
                void 0 === n &&
                  (n = this._borders._findDropTargetNode(t, e, i)),
                n
              );
            }),
            (t.prototype._tidy = function () {
              this._root._tidy();
            }),
            (t.prototype._updateAttrs = function (e) {
              t._attributeDefinitions.update(e, this._attributes);
            }),
            (t.prototype._nextUniqueId = function () {
              for (this._nextId++; void 0 !== this._idMap['#' + this._nextId]; )
                this._nextId++;
              return '#' + this._nextId;
            }),
            (t.prototype._getAttribute = function (t) {
              return this._attributes[t];
            }),
            (t.prototype.setOnAllowDrop = function (t) {
              this._onAllowDrop = t;
            }),
            (t.prototype._getOnAllowDrop = function () {
              return this._onAllowDrop;
            }),
            (t.prototype.toString = function () {
              return JSON.stringify(this.toJson());
            }),
            (t._attributeDefinitions = t._createAttributeDefinitions()),
            t
          );
        })();
      e.default = f;
    },
    427: function (t, e, i) {
      'use strict';
      var n =
        (this && this.__extends) ||
        (function () {
          var t = function (e, i) {
            return (t =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function (t, e) {
                  t.__proto__ = e;
                }) ||
              function (t, e) {
                for (var i in e)
                  Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
              })(e, i);
          };
          return function (e, i) {
            function n() {
              this.constructor = e;
            }
            t(e, i),
              (e.prototype =
                null === i
                  ? Object.create(i)
                  : ((n.prototype = i.prototype), new n()));
          };
        })();
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.Layout = void 0);
      var o = i(0),
        r = i(406),
        a = i(417),
        s = i(405),
        d = i(415),
        l = i(413),
        u = i(407),
        c = i(403),
        h = i(404),
        _ = i(428),
        f = i(430),
        p = i(431),
        g = i(432),
        T = i(434),
        y = i(435),
        v = i(436),
        b =
          'undefined' !== typeof window &&
          (window.document.documentMode ||
            /Edge\//.test(window.navigator.userAgent)),
        E =
          'undefined' !== typeof window &&
          window.matchMedia &&
          window.matchMedia('(hover: hover) and (pointer: fine)').matches &&
          !b,
        m = (function (t) {
          function e(e) {
            var i = t.call(this, e) || this;
            return (
              (i.firstMove = !1),
              (i.dragDivText = ''),
              (i.onModelChange = function () {
                i.forceUpdate(),
                  i.props.onModelChange && i.props.onModelChange(i.props.model);
              }),
              (i.updateRect = function () {
                var t = i.getDomRect(),
                  e = new c.default(0, 0, t.width, t.height);
                e.equals(i.state.rect) ||
                  0 === e.width ||
                  0 === e.height ||
                  i.setState({ rect: e });
              }),
              (i.updateLayoutMetrics = function () {
                if (i.findHeaderBarSizeRef.current) {
                  var t = i.findHeaderBarSizeRef.current.getBoundingClientRect()
                    .height;
                  t !== i.state.calculatedHeaderBarSize &&
                    i.setState({ calculatedHeaderBarSize: t });
                }
                if (i.findTabBarSizeRef.current) {
                  var e = i.findTabBarSizeRef.current.getBoundingClientRect()
                    .height;
                  e !== i.state.calculatedTabBarSize &&
                    i.setState({ calculatedTabBarSize: e });
                }
                if (i.findBorderBarSizeRef.current) {
                  var n = i.findBorderBarSizeRef.current.getBoundingClientRect()
                    .height;
                  n !== i.state.calculatedBorderBarSize &&
                    i.setState({ calculatedBorderBarSize: n });
                }
              }),
              (i.getClassName = function (t) {
                return void 0 === i.props.classNameMapper
                  ? t
                  : i.props.classNameMapper(t);
              }),
              (i.onCloseWindow = function (t) {
                i.doAction(s.default.unFloatTab(t));
                try {
                  i.props.model.getNodeById(t)._setWindow(void 0);
                } catch (e) {}
              }),
              (i.onSetWindow = function (t, e) {
                i.props.model.getNodeById(t)._setWindow(e);
              }),
              (i.onCancelAdd = function () {
                i.selfRef.current.removeChild(i.dragDiv),
                  (i.dragDiv = void 0),
                  null != i.fnNewNodeDropped &&
                    (i.fnNewNodeDropped(), (i.fnNewNodeDropped = void 0)),
                  a.default.instance.hideGlass(),
                  (i.newTabJson = void 0);
              }),
              (i.onCancelDrag = function (t) {
                if (t) {
                  var e = i.selfRef.current;
                  try {
                    e.removeChild(i.outlineDiv);
                  } catch (n) {}
                  try {
                    e.removeChild(i.dragDiv);
                  } catch (n) {}
                  (i.dragDiv = void 0),
                    i.hideEdges(e),
                    null != i.fnNewNodeDropped &&
                      (i.fnNewNodeDropped(), (i.fnNewNodeDropped = void 0)),
                    a.default.instance.hideGlass(),
                    (i.newTabJson = void 0);
                }
              }),
              (i.onDragDivMouseDown = function (t) {
                t.preventDefault(),
                  i.dragStart(
                    t,
                    i.dragDivText,
                    l.default._fromJson(i.newTabJson, i.props.model, !1),
                    !0,
                    void 0,
                    void 0
                  );
              }),
              (i.dragStart = function (t, e, n, o, r, s) {
                void 0 === i.props.model.getMaximizedTabset() && o
                  ? ((i.dragNode = n),
                    (i.dragDivText = e),
                    a.default.instance.startDrag(
                      t,
                      i.onDragStart,
                      i.onDragMove,
                      i.onDragEnd,
                      i.onCancelDrag,
                      r,
                      s,
                      i.currentDocument
                    ))
                  : a.default.instance.startDrag(
                      t,
                      void 0,
                      void 0,
                      void 0,
                      void 0,
                      r,
                      s,
                      i.currentDocument
                    );
              }),
              (i.onDragStart = function () {
                i.dropInfo = void 0;
                var t = i.selfRef.current;
                return (
                  (i.outlineDiv = i.currentDocument.createElement('div')),
                  (i.outlineDiv.className = i.getClassName(
                    h.CLASSES.FLEXLAYOUT__OUTLINE_RECT
                  )),
                  t.appendChild(i.outlineDiv),
                  null == i.dragDiv &&
                    ((i.dragDiv = i.currentDocument.createElement('div')),
                    (i.dragDiv.className = i.getClassName(
                      h.CLASSES.FLEXLAYOUT__DRAG_RECT
                    )),
                    (i.dragDiv.innerHTML = i.dragDivText),
                    t.appendChild(i.dragDiv)),
                  i.showEdges(t),
                  void 0 !== i.dragNode &&
                    i.dragNode instanceof l.default &&
                    void 0 !== i.dragNode.getTabRect() &&
                    i.dragNode.getTabRect().positionElement(i.outlineDiv),
                  (i.firstMove = !0),
                  !0
                );
              }),
              (i.onDragMove = function (t) {
                if (!1 === i.firstMove) {
                  var e = i.props.model._getAttribute('tabDragSpeed');
                  i.outlineDiv.style.transition =
                    'top ' +
                    e +
                    's, left ' +
                    e +
                    's, width ' +
                    e +
                    's, height ' +
                    e +
                    's';
                }
                i.firstMove = !1;
                var n = i.selfRef.current.getBoundingClientRect(),
                  o = { x: t.clientX - n.left, y: t.clientY - n.top };
                (i.dragDiv.style.left =
                  o.x - i.dragDiv.getBoundingClientRect().width / 2 + 'px'),
                  (i.dragDiv.style.top = o.y + 5 + 'px');
                var r = i.props.model._findDropTargetNode(i.dragNode, o.x, o.y);
                r &&
                  ((i.dropInfo = r),
                  (i.outlineDiv.className = i.getClassName(r.className)),
                  r.rect.positionElement(i.outlineDiv));
              }),
              (i.onDragEnd = function () {
                var t = i.selfRef.current;
                t.removeChild(i.outlineDiv),
                  t.removeChild(i.dragDiv),
                  (i.dragDiv = void 0),
                  i.hideEdges(t),
                  a.default.instance.hideGlass(),
                  i.dropInfo &&
                    (void 0 !== i.newTabJson
                      ? (i.doAction(
                          s.default.addNode(
                            i.newTabJson,
                            i.dropInfo.node.getId(),
                            i.dropInfo.location,
                            i.dropInfo.index
                          )
                        ),
                        null != i.fnNewNodeDropped &&
                          (i.fnNewNodeDropped(), (i.fnNewNodeDropped = void 0)),
                        (i.newTabJson = void 0))
                      : void 0 !== i.dragNode &&
                        i.doAction(
                          s.default.moveNode(
                            i.dragNode.getId(),
                            i.dropInfo.node.getId(),
                            i.dropInfo.location,
                            i.dropInfo.index
                          )
                        ));
              }),
              i.props.model._setChangeListener(i.onModelChange),
              (i.tabIds = []),
              (i.selfRef = o.createRef()),
              (i.findHeaderBarSizeRef = o.createRef()),
              (i.findTabBarSizeRef = o.createRef()),
              (i.findBorderBarSizeRef = o.createRef()),
              (i.supportsPopout =
                void 0 !== e.supportsPopout ? e.supportsPopout : E),
              (i.popoutURL = e.popoutURL ? e.popoutURL : 'popout.html'),
              (i.icons = e.closeIcon
                ? Object.assign({ close: e.closeIcon }, e.icons)
                : e.icons),
              (i.firstRender = !0),
              (i.state = {
                rect: new c.default(0, 0, 0, 0),
                calculatedHeaderBarSize: 25,
                calculatedTabBarSize: 26,
                calculatedBorderBarSize: 30,
              }),
              i
            );
          }
          return (
            n(e, t),
            (e.prototype.styleFont = function (t) {
              return (
                this.props.font &&
                  (this.props.font.size && (t.fontSize = this.props.font.size),
                  this.props.font.family &&
                    (t.fontFamily = this.props.font.family),
                  this.props.font.style &&
                    (t.fontStyle = this.props.font.style),
                  this.props.font.weight &&
                    (t.fontWeight = this.props.font.weight)),
                t
              );
            }),
            (e.prototype.doAction = function (t) {
              if (void 0 !== this.props.onAction) {
                var e = this.props.onAction(t);
                void 0 !== e && this.props.model.doAction(e);
              } else this.props.model.doAction(t);
            }),
            (e.prototype.componentDidMount = function () {
              this.updateRect(),
                this.updateLayoutMetrics(),
                (this.currentDocument = this.selfRef.current.ownerDocument),
                (this.currentWindow = this.currentDocument.defaultView),
                this.currentWindow.addEventListener('resize', this.updateRect);
            }),
            (e.prototype.componentDidUpdate = function () {
              this.updateRect(),
                this.updateLayoutMetrics(),
                this.props.model !== this.previousModel &&
                  (void 0 !== this.previousModel &&
                    this.previousModel._setChangeListener(void 0),
                  this.props.model._setChangeListener(this.onModelChange),
                  (this.previousModel = this.props.model));
            }),
            (e.prototype.getCurrentDocument = function () {
              return this.currentDocument;
            }),
            (e.prototype.getDomRect = function () {
              return this.selfRef.current.getBoundingClientRect();
            }),
            (e.prototype.getRootDiv = function () {
              return this.selfRef.current;
            }),
            (e.prototype.isSupportsPopout = function () {
              return this.supportsPopout;
            }),
            (e.prototype.getPopoutURL = function () {
              return this.popoutURL;
            }),
            (e.prototype.componentWillUnmount = function () {
              this.currentWindow.removeEventListener('resize', this.updateRect);
            }),
            (e.prototype.render = function () {
              var t = this;
              if (this.firstRender)
                return (
                  (this.firstRender = !1),
                  o.createElement(
                    'div',
                    {
                      ref: this.selfRef,
                      className: this.getClassName(
                        h.CLASSES.FLEXLAYOUT__LAYOUT
                      ),
                    },
                    this.metricsElements()
                  )
                );
              this.props.model._setPointerFine(
                window &&
                  window.matchMedia &&
                  window.matchMedia('(pointer: fine)').matches
              );
              var e = [],
                i = [],
                n = [],
                r = {},
                a = [],
                s = {
                  headerBarSize: this.state.calculatedHeaderBarSize,
                  tabBarSize: this.state.calculatedTabBarSize,
                  borderBarSize: this.state.calculatedBorderBarSize,
                };
              (this.centerRect = this.props.model._layout(this.state.rect, s)),
                this.renderBorder(this.props.model.getBorderSet(), e, r, n, a),
                this.renderChildren(this.props.model.getRoot(), i, r, n, a);
              var d = [],
                l = {};
              return (
                this.tabIds.forEach(function (t) {
                  r[t] && (d.push(t), (l[t] = t));
                }),
                (this.tabIds = d),
                Object.keys(r).forEach(function (e) {
                  l[e] || t.tabIds.push(e);
                }),
                o.createElement(
                  'div',
                  {
                    ref: this.selfRef,
                    className: this.getClassName(h.CLASSES.FLEXLAYOUT__LAYOUT),
                  },
                  i,
                  this.tabIds.map(function (t) {
                    return r[t];
                  }),
                  e,
                  a,
                  n,
                  this.metricsElements()
                )
              );
            }),
            (e.prototype.metricsElements = function () {
              var t = this.styleFont({ visibility: 'hidden' });
              return o.createElement(
                o.Fragment,
                null,
                o.createElement(
                  'div',
                  {
                    key: 'findHeaderBarSize',
                    ref: this.findHeaderBarSizeRef,
                    style: t,
                    className: this.getClassName(
                      h.CLASSES.FLEXLAYOUT__TABSET_HEADER_SIZER
                    ),
                  },
                  'FindHeaderBarSize'
                ),
                o.createElement(
                  'div',
                  {
                    key: 'findTabBarSize',
                    ref: this.findTabBarSizeRef,
                    style: t,
                    className: this.getClassName(
                      h.CLASSES.FLEXLAYOUT__TABSET_SIZER
                    ),
                  },
                  'FindTabBarSize'
                ),
                o.createElement(
                  'div',
                  {
                    key: 'findBorderBarSize',
                    ref: this.findBorderBarSizeRef,
                    style: t,
                    className: this.getClassName(
                      h.CLASSES.FLEXLAYOUT__BORDER_SIZER
                    ),
                  },
                  'FindBorderBarSize'
                )
              );
            }),
            (e.prototype.renderBorder = function (t, e, i, n, r) {
              for (var a = 0, s = t.getBorders(); a < s.length; a++) {
                var u = s[a];
                if (u.isShowing()) {
                  e.push(
                    o.createElement(_.BorderTabSet, {
                      key: 'border_' + u.getLocation().getName(),
                      border: u,
                      layout: this,
                      iconFactory: this.props.iconFactory,
                      titleFactory: this.props.titleFactory,
                      icons: this.icons,
                    })
                  );
                  for (
                    var c = 0, h = 0, g = u._getDrawChildren();
                    h < g.length;
                    h++
                  ) {
                    var b = g[h];
                    if (b instanceof d.default)
                      r.push(
                        o.createElement(f.Splitter, {
                          key: b.getId(),
                          layout: this,
                          node: b,
                        })
                      );
                    else if (b instanceof l.default)
                      if (this.supportsPopout && b.isFloating()) {
                        var E = this._getScreenRect(b);
                        n.push(
                          o.createElement(
                            T.FloatingWindow,
                            {
                              key: b.getId(),
                              url: this.popoutURL,
                              rect: E,
                              title: b.getName(),
                              id: b.getId(),
                              onSetWindow: this.onSetWindow,
                              onCloseWindow: this.onCloseWindow,
                            },
                            o.createElement(y.FloatingWindowTab, {
                              layout: this,
                              node: b,
                              factory: this.props.factory,
                            })
                          )
                        ),
                          (i[b.getId()] = o.createElement(v.TabFloating, {
                            key: b.getId(),
                            layout: this,
                            node: b,
                            selected: c === u.getSelected(),
                          }));
                      } else
                        i[b.getId()] = o.createElement(p.Tab, {
                          key: b.getId(),
                          layout: this,
                          node: b,
                          selected: c === u.getSelected(),
                          factory: this.props.factory,
                        });
                    c++;
                  }
                }
              }
            }),
            (e.prototype.renderChildren = function (t, e, i, n, r) {
              for (var a = 0, s = t._getDrawChildren(); a < s.length; a++) {
                var c = s[a];
                if (c instanceof d.default)
                  r.push(
                    o.createElement(f.Splitter, {
                      key: c.getId(),
                      layout: this,
                      node: c,
                    })
                  );
                else if (c instanceof u.default)
                  e.push(
                    o.createElement(g.TabSet, {
                      key: c.getId(),
                      layout: this,
                      node: c,
                      iconFactory: this.props.iconFactory,
                      titleFactory: this.props.titleFactory,
                      icons: this.icons,
                    })
                  ),
                    this.renderChildren(c, e, i, n, r);
                else if (c instanceof l.default) {
                  var h = c.getParent().getChildren()[
                    c.getParent().getSelected()
                  ];
                  if (
                    (void 0 === h &&
                      console.warn('undefined selectedTab should not happen'),
                    this.supportsPopout && c.isFloating())
                  ) {
                    var _ = this._getScreenRect(c);
                    n.push(
                      o.createElement(
                        T.FloatingWindow,
                        {
                          key: c.getId(),
                          url: this.popoutURL,
                          rect: _,
                          title: c.getName(),
                          id: c.getId(),
                          onSetWindow: this.onSetWindow,
                          onCloseWindow: this.onCloseWindow,
                        },
                        o.createElement(y.FloatingWindowTab, {
                          layout: this,
                          node: c,
                          factory: this.props.factory,
                        })
                      )
                    ),
                      (i[c.getId()] = o.createElement(v.TabFloating, {
                        key: c.getId(),
                        layout: this,
                        node: c,
                        selected: c === h,
                      }));
                  } else
                    i[c.getId()] = o.createElement(p.Tab, {
                      key: c.getId(),
                      layout: this,
                      node: c,
                      selected: c === h,
                      factory: this.props.factory,
                    });
                } else this.renderChildren(c, e, i, n, r);
              }
            }),
            (e.prototype._getScreenRect = function (t) {
              var e = t.getRect().clone(),
                i = this.selfRef.current.getBoundingClientRect(),
                n = Math.min(
                  80,
                  this.currentWindow.outerHeight -
                    this.currentWindow.innerHeight
                ),
                o = Math.min(
                  80,
                  this.currentWindow.outerWidth - this.currentWindow.innerWidth
                );
              return (
                (e.x = e.x + i.x + this.currentWindow.screenX + o),
                (e.y = e.y + i.y + this.currentWindow.screenY + n),
                e
              );
            }),
            (e.prototype.addTabToTabSet = function (t, e) {
              void 0 !== this.props.model.getNodeById(t) &&
                this.doAction(s.default.addNode(e, t, r.default.CENTER, -1));
            }),
            (e.prototype.addTabToActiveTabSet = function (t) {
              var e = this.props.model.getActiveTabset();
              void 0 !== e &&
                this.doAction(
                  s.default.addNode(t, e.getId(), r.default.CENTER, -1)
                );
            }),
            (e.prototype.addTabWithDragAndDrop = function (t, e, i) {
              (this.fnNewNodeDropped = i),
                (this.newTabJson = e),
                this.dragStart(
                  void 0,
                  t,
                  l.default._fromJson(e, this.props.model, !1),
                  !0,
                  void 0,
                  void 0
                );
            }),
            (e.prototype.addTabWithDragAndDropIndirect = function (t, e, i) {
              (this.fnNewNodeDropped = i),
                (this.newTabJson = e),
                a.default.instance.addGlass(this.onCancelAdd),
                (this.dragDivText = t),
                (this.dragDiv = this.currentDocument.createElement('div')),
                (this.dragDiv.className = this.getClassName(
                  'flexlayout__drag_rect'
                )),
                (this.dragDiv.innerHTML = this.dragDivText),
                this.dragDiv.addEventListener(
                  'mousedown',
                  this.onDragDivMouseDown
                ),
                this.dragDiv.addEventListener(
                  'touchstart',
                  this.onDragDivMouseDown
                );
              var n = new c.default(10, 10, 150, 50);
              n.centerInRect(this.state.rect),
                (this.dragDiv.style.left = n.x + 'px'),
                (this.dragDiv.style.top = n.y + 'px'),
                this.selfRef.current.appendChild(this.dragDiv);
            }),
            (e.prototype.showEdges = function (t) {
              if (this.props.model.isEnableEdgeDock()) {
                var e = t.getBoundingClientRect(),
                  i = this.centerRect,
                  n = 100,
                  o = '100px',
                  r = '50px',
                  a = '10px';
                (this.edgeTopDiv = this.currentDocument.createElement('div')),
                  (this.edgeTopDiv.className = this.getClassName(
                    h.CLASSES.FLEXLAYOUT__EDGE_RECT
                  )),
                  (this.edgeTopDiv.style.top = i.y + 'px'),
                  (this.edgeTopDiv.style.left = i.x + (i.width - n) / 2 + 'px'),
                  (this.edgeTopDiv.style.width = o),
                  (this.edgeTopDiv.style.height = a),
                  (this.edgeTopDiv.style.borderBottomLeftRadius = r),
                  (this.edgeTopDiv.style.borderBottomRightRadius = r),
                  (this.edgeLeftDiv = this.currentDocument.createElement(
                    'div'
                  )),
                  (this.edgeLeftDiv.className = this.getClassName(
                    h.CLASSES.FLEXLAYOUT__EDGE_RECT
                  )),
                  (this.edgeLeftDiv.style.top =
                    i.y + (i.height - n) / 2 + 'px'),
                  (this.edgeLeftDiv.style.left = i.x + 'px'),
                  (this.edgeLeftDiv.style.width = a),
                  (this.edgeLeftDiv.style.height = o),
                  (this.edgeLeftDiv.style.borderTopRightRadius = r),
                  (this.edgeLeftDiv.style.borderBottomRightRadius = r),
                  (this.edgeBottomDiv = this.currentDocument.createElement(
                    'div'
                  )),
                  (this.edgeBottomDiv.className = this.getClassName(
                    h.CLASSES.FLEXLAYOUT__EDGE_RECT
                  )),
                  (this.edgeBottomDiv.style.bottom =
                    e.height - i.getBottom() + 'px'),
                  (this.edgeBottomDiv.style.left =
                    i.x + (i.width - n) / 2 + 'px'),
                  (this.edgeBottomDiv.style.width = o),
                  (this.edgeBottomDiv.style.height = a),
                  (this.edgeBottomDiv.style.borderTopLeftRadius = r),
                  (this.edgeBottomDiv.style.borderTopRightRadius = r),
                  (this.edgeRightDiv = this.currentDocument.createElement(
                    'div'
                  )),
                  (this.edgeRightDiv.className = this.getClassName(
                    h.CLASSES.FLEXLAYOUT__EDGE_RECT
                  )),
                  (this.edgeRightDiv.style.top =
                    i.y + (i.height - n) / 2 + 'px'),
                  (this.edgeRightDiv.style.right =
                    e.width - i.getRight() + 'px'),
                  (this.edgeRightDiv.style.width = a),
                  (this.edgeRightDiv.style.height = o),
                  (this.edgeRightDiv.style.borderTopLeftRadius = r),
                  (this.edgeRightDiv.style.borderBottomLeftRadius = r),
                  t.appendChild(this.edgeTopDiv),
                  t.appendChild(this.edgeLeftDiv),
                  t.appendChild(this.edgeBottomDiv),
                  t.appendChild(this.edgeRightDiv);
              }
            }),
            (e.prototype.hideEdges = function (t) {
              if (this.props.model.isEnableEdgeDock())
                try {
                  t.removeChild(this.edgeTopDiv),
                    t.removeChild(this.edgeLeftDiv),
                    t.removeChild(this.edgeBottomDiv),
                    t.removeChild(this.edgeRightDiv);
                } catch (e) {}
            }),
            (e.prototype.maximize = function (t) {
              this.doAction(s.default.maximizeToggle(t.getId()));
            }),
            (e.prototype.customizeTab = function (t, e) {
              this.props.onRenderTab && this.props.onRenderTab(t, e);
            }),
            (e.prototype.customizeTabSet = function (t, e) {
              this.props.onRenderTabSet && this.props.onRenderTabSet(t, e);
            }),
            (e.prototype.i18nName = function (t, e) {
              var i;
              return (
                this.props.i18nMapper && (i = this.props.i18nMapper(t, e)),
                void 0 === i && (i = t + (void 0 === e ? '' : e)),
                i
              );
            }),
            e
          );
        })(o.Component);
      (e.Layout = m), (e.default = m);
    },
    428: function (t, e, i) {
      'use strict';
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.BorderTabSet = void 0);
      var n = i(0),
        o = i(406),
        r = i(429),
        a = i(423),
        s = i(405),
        d = i(408),
        l = i(424),
        u = i(402),
        c = i(404);
      e.BorderTabSet = function (t) {
        for (
          var e = t.border,
            i = t.layout,
            h = t.iconFactory,
            _ = t.titleFactory,
            f = t.icons,
            p = n.useRef(null),
            g = n.useRef(null),
            T = l.useTabOverflow(e, u.default.flip(e.getOrientation()), p),
            y = T.selfRef,
            v = T.position,
            b = T.userControlledLeft,
            E = T.hiddenTabs,
            m = T.onMouseWheel,
            S = function (t) {
              t.stopPropagation();
            },
            A = function (t) {
              i.doAction(s.default.selectTab(t.node.getId())), (b.current = !1);
            },
            L = i.getClassName,
            O = e.getTabHeaderRect().styleWithPosition({}),
            R = [],
            N = function (t) {
              var o = e.getSelected() === t,
                a = e.getChildren()[t];
              R.push(
                n.createElement(r.BorderButton, {
                  layout: i,
                  border: e.getLocation().getName(),
                  node: a,
                  key: a.getId(),
                  selected: o,
                  iconFactory: h,
                  titleFactory: _,
                  icons: f,
                })
              );
            },
            D = 0;
          D < e.getChildren().length;
          D++
        )
          N(D);
        var B =
          L(c.CLASSES.FLEXLAYOUT__BORDER) +
          ' ' +
          L(c.CLASSES.FLEXLAYOUT__BORDER_ + e.getLocation().getName());
        void 0 !== e.getClassName() && (B += ' ' + e.getClassName());
        var w,
          C = [],
          I = { headerContent: {}, buttons: C };
        if ((i.customizeTabSet(e, I), (C = I.buttons), E.length > 0)) {
          var x = i.i18nName(d.I18nLabel.Overflow_Menu_Tooltip);
          C.push(
            n.createElement(
              'button',
              {
                key: 'overflowbutton',
                ref: g,
                className:
                  L('flexlayout__border_toolbar_button_overflow') +
                  ' ' +
                  L(
                    'flexlayout__border_toolbar_button_overflow_' +
                      e.getLocation().getName()
                  ),
                title: x,
                onClick: function () {
                  var t = g.current;
                  a.showPopup(i.getRootDiv(), t, E, A, i.getClassName);
                },
                onMouseDown: S,
                onTouchStart: S,
              },
              null === f || void 0 === f ? void 0 : f.more,
              E.length
            )
          );
        }
        var M = e.getSelected();
        if (-1 !== M) {
          var F = e.getChildren()[M];
          if (
            void 0 !== F &&
            i.isSupportsPopout() &&
            F.isEnableFloat() &&
            !F.isFloating()
          ) {
            var U = i.i18nName(d.I18nLabel.Float_Tab);
            C.push(
              n.createElement('button', {
                key: 'float',
                title: U,
                className:
                  L(c.CLASSES.FLEXLAYOUT__BORDER_TOOLBAR_BUTTON) +
                  ' ' +
                  L(c.CLASSES.FLEXLAYOUT__BORDER_TOOLBAR_BUTTON_FLOAT),
                onClick: function () {
                  var t = e.getChildren()[e.getSelected()];
                  void 0 !== t && i.doAction(s.default.floatTab(t.getId()));
                },
                onMouseDown: S,
                onTouchStart: S,
              })
            );
          }
        }
        (w = n.createElement(
          'div',
          {
            key: 'toolbar',
            ref: p,
            className:
              L(c.CLASSES.FLEXLAYOUT__BORDER_TOOLBAR) +
              ' ' +
              L(
                c.CLASSES.FLEXLAYOUT__BORDER_TOOLBAR_ +
                  e.getLocation().getName()
              ),
          },
          C
        )),
          (O = i.styleFont(O));
        var z = {},
          Y = e.getBorderBarSize() - 1;
        return (
          (z =
            e.getLocation() === o.default.LEFT
              ? { right: Y, height: Y, top: v }
              : e.getLocation() === o.default.RIGHT
              ? { left: Y, height: Y, top: v }
              : { height: Y, left: v }),
          n.createElement(
            'div',
            { ref: y, style: O, className: B, onWheel: m },
            n.createElement(
              'div',
              {
                style: { height: Y },
                className:
                  L(c.CLASSES.FLEXLAYOUT__BORDER_INNER) +
                  ' ' +
                  L(
                    c.CLASSES.FLEXLAYOUT__BORDER_INNER_ +
                      e.getLocation().getName()
                  ),
              },
              n.createElement(
                'div',
                {
                  style: z,
                  className:
                    L(c.CLASSES.FLEXLAYOUT__BORDER_INNER_TAB_CONTAINER) +
                    ' ' +
                    L(
                      c.CLASSES.FLEXLAYOUT__BORDER_INNER_TAB_CONTAINER_ +
                        e.getLocation().getName()
                    ),
                },
                R
              )
            ),
            w
          )
        );
      };
    },
    429: function (t, e, i) {
      'use strict';
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.BorderButton = void 0);
      var n = i(0),
        o = i(416),
        r = i(405),
        a = i(403),
        s = i(422),
        d = i(404);
      e.BorderButton = function (t) {
        var e = t.layout,
          i = t.node,
          l = t.selected,
          u = t.border,
          c = t.iconFactory,
          h = t.titleFactory,
          _ = t.icons,
          f = n.useRef(null),
          p = function (n) {
            var r = e.i18nName(o.I18nLabel.Move_Tab, i.getName());
            t.layout.dragStart(n, r, i, i.isEnableDrag(), g, function (t) {});
          },
          g = function () {
            e.doAction(r.default.selectTab(i.getId()));
          },
          T = function (t) {
            t.stopPropagation();
          };
        n.useLayoutEffect(function () {
          y();
        });
        var y = function () {
            var t = e.getDomRect(),
              n = f.current.getBoundingClientRect();
            i._setTabRect(
              new a.default(n.left - t.left, n.top - t.top, n.width, n.height)
            );
          },
          v = e.getClassName,
          b =
            v(d.CLASSES.FLEXLAYOUT__BORDER_BUTTON) +
            ' ' +
            v(d.CLASSES.FLEXLAYOUT__BORDER_BUTTON_ + u);
        (b += l
          ? ' ' + v(d.CLASSES.FLEXLAYOUT__BORDER_BUTTON__SELECTED)
          : ' ' + v(d.CLASSES.FLEXLAYOUT__BORDER_BUTTON__UNSELECTED)),
          void 0 !== i.getClassName() && (b += ' ' + i.getClassName());
        var E = c ? c(i) : void 0,
          m = (h ? h(i) : void 0) || i.getName();
        void 0 === typeof E &&
          void 0 !== typeof i.getIcon() &&
          (E = n.createElement('img', {
            src: i.getIcon(),
            alt: 'leadingContent',
          }));
        var S = [],
          A = { leading: E, content: m, name: i.getName(), buttons: S };
        e.customizeTab(i, A), i._setRenderedName(A.name);
        var L = n.createElement(
            'div',
            { className: v(d.CLASSES.FLEXLAYOUT__BORDER_BUTTON_CONTENT) },
            A.content
          ),
          O = n.createElement(
            'div',
            { className: v(d.CLASSES.FLEXLAYOUT__BORDER_BUTTON_LEADING) },
            A.leading
          );
        if (i.isEnableClose()) {
          var R = e.i18nName(o.I18nLabel.Close_Tab);
          S.push(
            n.createElement(
              'div',
              {
                key: 'close',
                title: R,
                className: v(d.CLASSES.FLEXLAYOUT__BORDER_BUTTON_TRAILING),
                onMouseDown: T,
                onClick: function (t) {
                  !(function () {
                    var t = i.getCloseType();
                    return (
                      !(!l && t !== s.ICloseType.Always) ||
                      !(
                        t !== s.ICloseType.Visible ||
                        !window.matchMedia ||
                        !window.matchMedia('(hover: hover) and (pointer: fine)')
                          .matches
                      )
                    );
                  })()
                    ? g()
                    : e.doAction(r.default.deleteTab(i.getId()));
                },
                onTouchStart: T,
              },
              null === _ || void 0 === _ ? void 0 : _.close
            )
          );
        }
        return n.createElement(
          'div',
          { ref: f, style: {}, className: b, onMouseDown: p, onTouchStart: p },
          O,
          L,
          S
        );
      };
    },
    430: function (t, e, i) {
      'use strict';
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.Splitter = void 0);
      var n = i(0),
        o = i(417),
        r = i(405),
        a = i(409),
        s = i(402),
        d = i(404);
      e.Splitter = function (t) {
        var e = t.layout,
          i = t.node,
          l = n.useRef([]),
          u = n.useRef(void 0),
          c = i.getParent(),
          h = function (t) {
            o.default.instance.startDrag(
              t,
              f,
              p,
              g,
              _,
              void 0,
              void 0,
              e.getCurrentDocument()
            ),
              (l.current = c._getSplitterBounds(i, !0));
            var n = e.getRootDiv();
            (u.current = e.getCurrentDocument().createElement('div')),
              (u.current.style.position = 'absolute'),
              (u.current.className = e.getClassName(
                d.CLASSES.FLEXLAYOUT__SPLITTER_DRAG
              )),
              (u.current.style.cursor =
                i.getOrientation() === s.default.HORZ
                  ? 'ns-resize'
                  : 'ew-resize'),
              i.getRect().positionElement(u.current),
              n.appendChild(u.current);
          },
          _ = function (t) {
            e.getRootDiv().removeChild(u.current);
          },
          f = function () {
            return !0;
          },
          p = function (t) {
            var n = e.getDomRect(),
              o = t.clientX - n.left,
              r = t.clientY - n.top;
            u &&
              (i.getOrientation() === s.default.HORZ
                ? (u.current.style.top = T(r - 4) + 'px')
                : (u.current.style.left = T(o - 4) + 'px'));
          },
          g = function () {
            var t = 0;
            if (
              (u &&
                (t =
                  i.getOrientation() === s.default.HORZ
                    ? u.current.offsetTop
                    : u.current.offsetLeft),
              c instanceof a.default)
            ) {
              var n = c._calculateSplit(i, t);
              e.doAction(r.default.adjustBorderSplit(i.getParent().getId(), n));
            } else {
              var o = c._calculateSplit(i, t);
              void 0 !== o && e.doAction(r.default.adjustSplit(o));
            }
            e.getRootDiv().removeChild(u.current);
          },
          T = function (t) {
            var e = l.current,
              i = t;
            return t < e[0] && (i = e[0]), t > e[1] && (i = e[1]), i;
          },
          y = e.getClassName,
          v = i._styleWithPosition({
            cursor:
              i.getOrientation() === s.default.HORZ ? 'ns-resize' : 'ew-resize',
          }),
          b =
            y(d.CLASSES.FLEXLAYOUT__SPLITTER) +
            ' ' +
            y(d.CLASSES.FLEXLAYOUT__SPLITTER_ + i.getOrientation().getName());
        return (
          c instanceof a.default
            ? (b += ' ' + y(d.CLASSES.FLEXLAYOUT__SPLITTER_BORDER))
            : void 0 !== i.getModel().getMaximizedTabset() &&
              (v.display = 'none'),
          n.createElement('div', {
            style: v,
            onTouchStart: h,
            onMouseDown: h,
            className: b,
          })
        );
      };
    },
    431: function (t, e, i) {
      'use strict';
      Object.defineProperty(e, '__esModule', { value: !0 }), (e.Tab = void 0);
      var n = i(0),
        o = i(0),
        r = i(405),
        a = i(407),
        s = i(404),
        d = i(425),
        l = i(408),
        u = i(416);
      e.Tab = function (t) {
        var e = t.layout,
          i = t.selected,
          c = t.node,
          h = t.factory,
          _ = n.useState(!t.node.isEnableRenderOnDemand() || t.selected),
          f = _[0],
          p = _[1];
        n.useLayoutEffect(function () {
          !f && i && p(!0);
        });
        var g,
          T = function () {
            var t = c.getParent();
            t.getType() === a.default.TYPE &&
              (t.isActive() ||
                e.doAction(r.default.setActiveTabset(t.getId())));
          },
          y = e.getClassName,
          v = c.getParent(),
          b = c._styleWithPosition({ display: i ? 'block' : 'none' });
        v instanceof a.default &&
          (void 0 === c.getModel().getMaximizedTabset() ||
            v.isMaximized() ||
            (b.display = 'none')),
          f && (g = h(c));
        var E = y(s.CLASSES.FLEXLAYOUT__TAB);
        return (
          v instanceof u.BorderNode &&
            ((E += ' ' + y(s.CLASSES.FLEXLAYOUT__TAB_BORDER)),
            (E +=
              ' ' +
              y(
                s.CLASSES.FLEXLAYOUT__TAB_BORDER_ + v.getLocation().getName()
              ))),
          n.createElement(
            'div',
            { className: E, onMouseDown: T, onTouchStart: T, style: b },
            n.createElement(
              d.ErrorBoundary,
              {
                message: t.layout.i18nName(
                  l.I18nLabel.Error_rendering_component
                ),
              },
              n.createElement(o.Fragment, null, g)
            )
          )
        );
      };
    },
    432: function (t, e, i) {
      'use strict';
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.TabSet = void 0);
      var n = i(0),
        o = i(408),
        r = i(405),
        a = i(423),
        s = i(433),
        d = i(424),
        l = i(402),
        u = i(404);
      e.TabSet = function (t) {
        var e = t.node,
          i = t.layout,
          c = t.iconFactory,
          h = t.titleFactory,
          _ = t.icons,
          f = n.useRef(null),
          p = n.useRef(null),
          g = d.useTabOverflow(e, l.default.HORZ, f),
          T = g.selfRef,
          y = g.position,
          v = g.userControlledLeft,
          b = g.hiddenTabs,
          E = g.onMouseWheel,
          m = function (t) {
            i.doAction(r.default.selectTab(t.node.getId())), (v.current = !1);
          },
          S = function (t) {
            var n = e.getName();
            (n = void 0 === n ? '' : ': ' + n),
              i.doAction(r.default.setActiveTabset(e.getId()));
            var a = i.i18nName(o.I18nLabel.Move_Tabset, n);
            i.dragStart(t, a, e, e.isEnableDrag(), function (t) {}, O);
          },
          A = function (t) {
            t.stopPropagation();
          },
          L = function () {
            return (
              !!e.isEnableMaximize() &&
              (e.getModel().getMaximizedTabset() === e ||
                e.getParent() !== e.getModel().getRoot() ||
                1 !== e.getModel().getRoot().getChildren().length)
            );
          },
          O = function (t) {
            L() && i.maximize(e);
          },
          R = i.getClassName,
          N = e.getSelectedNode(),
          D = e._styleWithPosition();
        void 0 === e.getModel().getMaximizedTabset() ||
          e.isMaximized() ||
          (D.display = 'none');
        var B = [];
        if (e.isEnableTabStrip())
          for (var w = 0; w < e.getChildren().length; w++) {
            var C = e.getChildren()[w],
              I = e.getSelected() === w;
            B.push(
              n.createElement(s.TabButton, {
                layout: i,
                node: C,
                key: C.getId(),
                selected: I,
                show: !0,
                height: e.getTabStripHeight(),
                iconFactory: c,
                titleFactory: h,
                icons: _,
              })
            );
          }
        var x = [],
          M = { headerContent: e.getName(), buttons: x };
        i.customizeTabSet(e, M);
        var F,
          U = M.headerContent;
        if (((x = M.buttons), b.length > 0)) {
          var z = i.i18nName(o.I18nLabel.Overflow_Menu_Tooltip);
          x.push(
            n.createElement(
              'button',
              {
                key: 'overflowbutton',
                ref: p,
                className: R(u.CLASSES.FLEXLAYOUT__TAB_BUTTON_OVERFLOW),
                title: z,
                onClick: function () {
                  var t = p.current;
                  a.showPopup(i.getRootDiv(), t, b, m, i.getClassName);
                },
                onMouseDown: A,
                onTouchStart: A,
              },
              null === _ || void 0 === _ ? void 0 : _.more,
              b.length
            )
          );
        }
        if (
          void 0 !== N &&
          i.isSupportsPopout() &&
          N.isEnableFloat() &&
          !N.isFloating()
        ) {
          var Y = i.i18nName(o.I18nLabel.Float_Tab);
          x.push(
            n.createElement(
              'button',
              {
                key: 'float',
                title: Y,
                className:
                  R(u.CLASSES.FLEXLAYOUT__TAB_TOOLBAR_BUTTON) +
                  ' ' +
                  R(u.CLASSES.FLEXLAYOUT__TAB_TOOLBAR_BUTTON_FLOAT),
                onClick: function () {
                  void 0 !== N && i.doAction(r.default.floatTab(N.getId()));
                },
                onMouseDown: A,
                onTouchStart: A,
              },
              null === _ || void 0 === _ ? void 0 : _.popout
            )
          );
        }
        if (L()) {
          var P = i.i18nName(o.I18nLabel.Restore),
            W = i.i18nName(o.I18nLabel.Maximize);
          x.push(
            n.createElement(
              'button',
              {
                key: 'max',
                title: e.isMaximized() ? P : W,
                className:
                  R(u.CLASSES.FLEXLAYOUT__TAB_TOOLBAR_BUTTON) +
                  ' ' +
                  R(
                    u.CLASSES.FLEXLAYOUT__TAB_TOOLBAR_BUTTON_ +
                      (e.isMaximized() ? 'max' : 'min')
                  ),
                onClick: function () {
                  L() && i.maximize(e);
                },
                onMouseDown: A,
                onTouchStart: A,
              },
              e.isMaximized()
                ? null === _ || void 0 === _
                  ? void 0
                  : _.restore
                : null === _ || void 0 === _
                ? void 0
                : _.maximize
            )
          );
        }
        F = n.createElement(
          'div',
          {
            key: 'toolbar',
            ref: f,
            className: R(u.CLASSES.FLEXLAYOUT__TAB_TOOLBAR),
            onMouseDown: A,
          },
          x
        );
        var H,
          X,
          k = void 0 !== e.getName(),
          j = R(u.CLASSES.FLEXLAYOUT__TABSET_TABBAR_OUTER);
        if (
          (void 0 !== e.getClassNameTabStrip() &&
            (j += ' ' + e.getClassNameTabStrip()),
          (j +=
            ' ' +
            u.CLASSES.FLEXLAYOUT__TABSET_TABBAR_OUTER_ +
            e.getTabLocation()),
          e.isActive() &&
            !k &&
            (j += ' ' + R(u.CLASSES.FLEXLAYOUT__TABSET_SELECTED)),
          e.isMaximized() &&
            !k &&
            (j += ' ' + R(u.CLASSES.FLEXLAYOUT__TABSET_MAXIMIZED)),
          k)
        ) {
          var G = R(u.CLASSES.FLEXLAYOUT__TABSET_HEADER);
          e.isActive() && (G += ' ' + R(u.CLASSES.FLEXLAYOUT__TABSET_SELECTED)),
            e.isMaximized() &&
              (G += ' ' + R(u.CLASSES.FLEXLAYOUT__TABSET_MAXIMIZED)),
            void 0 !== e.getClassNameHeader() &&
              (G += ' ' + e.getClassNameHeader()),
            (H = n.createElement(
              'div',
              {
                className: G,
                style: { height: e.getHeaderHeight() + 'px' },
                onMouseDown: S,
                onTouchStart: S,
              },
              n.createElement(
                'div',
                { className: R(u.CLASSES.FLEXLAYOUT__TABSET_HEADER_CONTENT) },
                U
              ),
              F
            ));
          var J = { height: e.getTabStripHeight() + 'px' };
          'top' === e.getTabLocation()
            ? (J.top = e.getHeaderHeight() + 'px')
            : (J.bottom = '0px'),
            (X = n.createElement(
              'div',
              { className: j, style: J, onMouseDown: S, onTouchStart: S },
              n.createElement(
                'div',
                {
                  className:
                    R(u.CLASSES.FLEXLAYOUT__TABSET_TABBAR_INNER) +
                    ' ' +
                    R(
                      u.CLASSES.FLEXLAYOUT__TABSET_TABBAR_INNER_ +
                        e.getTabLocation()
                    ),
                },
                n.createElement(
                  'div',
                  {
                    style: { left: y },
                    className:
                      R(
                        u.CLASSES.FLEXLAYOUT__TABSET_TABBAR_INNER_TAB_CONTAINER
                      ) +
                      ' ' +
                      R(
                        u.CLASSES
                          .FLEXLAYOUT__TABSET_TABBAR_INNER_TAB_CONTAINER_ +
                          e.getTabLocation()
                      ),
                  },
                  B
                )
              )
            ));
        } else {
          J = { height: e.getTabStripHeight() + 'px' };
          'top' === e.getTabLocation() ? (J.top = '0px') : (J.bottom = '0px'),
            (X = n.createElement(
              'div',
              { className: j, style: J, onMouseDown: S, onTouchStart: S },
              n.createElement(
                'div',
                {
                  className:
                    R(u.CLASSES.FLEXLAYOUT__TABSET_TABBAR_INNER) +
                    ' ' +
                    R(
                      u.CLASSES.FLEXLAYOUT__TABSET_TABBAR_INNER_ +
                        e.getTabLocation()
                    ),
                },
                n.createElement(
                  'div',
                  {
                    style: { left: y },
                    className:
                      R(
                        u.CLASSES.FLEXLAYOUT__TABSET_TABBAR_INNER_TAB_CONTAINER
                      ) +
                      ' ' +
                      R(
                        u.CLASSES
                          .FLEXLAYOUT__TABSET_TABBAR_INNER_TAB_CONTAINER_ +
                          e.getTabLocation()
                      ),
                  },
                  B
                )
              ),
              F
            ));
        }
        return (
          (D = i.styleFont(D)),
          n.createElement(
            'div',
            {
              ref: T,
              style: D,
              className: R(u.CLASSES.FLEXLAYOUT__TABSET),
              onWheel: E,
            },
            H,
            X
          )
        );
      };
    },
    433: function (t, e, i) {
      'use strict';
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.TabButton = void 0);
      var n = i(0),
        o = i(408),
        r = i(405),
        a = i(403),
        s = i(422),
        d = i(404);
      e.TabButton = function (t) {
        var e = t.layout,
          i = t.node,
          l = t.show,
          u = t.selected,
          c = t.iconFactory,
          h = t.titleFactory,
          _ = t.icons,
          f = n.useRef(null),
          p = n.useRef(null),
          g = n.useRef(0),
          T = n.useState(!1),
          y = T[0],
          v = T[1],
          b = function (t) {
            var n = e.i18nName(o.I18nLabel.Move_Tab, i.getName());
            e.dragStart(t, n, i, i.isEnableDrag(), E, m);
          },
          E = function () {
            e.doAction(r.default.selectTab(i.getId()));
          },
          m = function (t) {
            if (i.isEnableRename())
              v(!0),
                e.getCurrentDocument().body.addEventListener('mousedown', S),
                e.getCurrentDocument().body.addEventListener('touchstart', S);
            else {
              var n = i.getParent();
              n.isEnableMaximize() && e.maximize(n);
            }
          },
          S = function t(i) {
            i.target !== p.current &&
              (v(!1),
              e.getCurrentDocument().body.removeEventListener('mousedown', t),
              e.getCurrentDocument().body.removeEventListener('touchstart', t));
          },
          A = function (t) {
            t.stopPropagation();
          };
        n.useLayoutEffect(function () {
          L(), y && p.current.select();
        });
        var L = function () {
            var t = e.getDomRect(),
              n = f.current.getBoundingClientRect();
            i._setTabRect(
              new a.default(n.left - t.left, n.top - t.top, n.width, n.height)
            ),
              (g.current = p.current.getBoundingClientRect().width);
          },
          O = function (t) {
            t.stopPropagation();
          },
          R = e.getClassName,
          N = i.getParent(),
          D = d.CLASSES.FLEXLAYOUT__TAB_BUTTON,
          B = R(D);
        (B += ' ' + R(D + '_' + N.getTabLocation())),
          (B += u ? ' ' + R(D + '--selected') : ' ' + R(D + '--unselected')),
          void 0 !== i.getClassName() && (B += ' ' + i.getClassName());
        var w = c ? c(i) : void 0,
          C = (h ? h(i) : void 0) || i.getName();
        void 0 === typeof w &&
          void 0 !== typeof i.getIcon() &&
          (w = n.createElement('img', {
            src: i.getIcon(),
            alt: 'leadingContent',
          }));
        var I = [],
          x = { leading: w, content: C, name: i.getName(), buttons: I };
        e.customizeTab(i, x), i._setRenderedName(x.name);
        var M = n.createElement(
            'div',
            { ref: p, className: R(d.CLASSES.FLEXLAYOUT__TAB_BUTTON_CONTENT) },
            x.content
          ),
          F = n.createElement(
            'div',
            { className: R(d.CLASSES.FLEXLAYOUT__TAB_BUTTON_LEADING) },
            x.leading
          );
        if (y) {
          var U = { width: g + 'px' };
          M = n.createElement('input', {
            style: U,
            ref: p,
            className: R(d.CLASSES.FLEXLAYOUT__TAB_BUTTON_TEXTBOX),
            type: 'text',
            autoFocus: !0,
            defaultValue: i.getName(),
            onKeyDown: function (t) {
              27 === t.keyCode
                ? v(!1)
                : 13 === t.keyCode &&
                  (v(!1),
                  e.doAction(r.default.renameTab(i.getId(), t.target.value)));
            },
            onMouseDown: O,
            onTouchStart: O,
          });
        }
        if (i.isEnableClose()) {
          var z = e.i18nName(o.I18nLabel.Close_Tab);
          I.push(
            n.createElement(
              'div',
              {
                key: 'close',
                title: z,
                className: R(d.CLASSES.FLEXLAYOUT__TAB_BUTTON_TRAILING),
                onMouseDown: A,
                onClick: function (t) {
                  !(function () {
                    var t = i.getCloseType();
                    return (
                      !(!u && t !== s.ICloseType.Always) ||
                      !(
                        t !== s.ICloseType.Visible ||
                        !window.matchMedia ||
                        !window.matchMedia('(hover: hover) and (pointer: fine)')
                          .matches
                      )
                    );
                  })()
                    ? E()
                    : e.doAction(r.default.deleteTab(i.getId()));
                },
                onTouchStart: A,
              },
              null === _ || void 0 === _ ? void 0 : _.close
            )
          );
        }
        return n.createElement(
          'div',
          {
            ref: f,
            style: { visibility: l ? 'visible' : 'hidden' },
            className: B,
            onMouseDown: b,
            onTouchStart: b,
          },
          F,
          M,
          I
        );
      };
    },
    434: function (t, e, i) {
      'use strict';
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.FloatingWindow = void 0);
      var n = i(0),
        o = i(75),
        r = i(404);
      e.FloatingWindow = function (t) {
        var e = t.title,
          i = t.id,
          a = t.url,
          s = t.rect,
          d = t.onCloseWindow,
          l = t.onSetWindow,
          u = t.children,
          c = n.useRef(null),
          h = n.useState(void 0),
          _ = h[0],
          f = h[1];
        return (
          n.useLayoutEffect(function () {
            var t = s;
            return (
              (c.current = window.open(
                a,
                i,
                'left=' +
                  t.x +
                  ',top=' +
                  t.y +
                  ',width=' +
                  t.width +
                  ',height=' +
                  t.height
              )),
              null !== c.current
                ? (l(i, c.current),
                  window.addEventListener('beforeunload', function () {
                    c.current && (c.current.close(), (c.current = null));
                  }),
                  c.current.addEventListener('load', function () {
                    var t = c.current.document;
                    t.title = e;
                    var n = t.createElement('div');
                    (n.className =
                      r.CLASSES.FLEXLAYOUT__FLOATING_WINDOW_CONTENT),
                      t.body.appendChild(n),
                      (function (t) {
                        var e = t.head,
                          i = [];
                        return (
                          Array.from(window.document.styleSheets).forEach(
                            function (n) {
                              if (n.href) {
                                var o = t.createElement('link');
                                (o.type = n.type),
                                  (o.rel = 'stylesheet'),
                                  (o.href = n.href),
                                  e.appendChild(o),
                                  i.push(
                                    new Promise(function (t, e) {
                                      o.onload = function () {
                                        return t(!0);
                                      };
                                    })
                                  );
                              } else
                                try {
                                  var r = n.cssRules,
                                    a = t.createElement('style');
                                  Array.from(r).forEach(function (e) {
                                    a.appendChild(t.createTextNode(e.cssText));
                                  }),
                                    e.appendChild(a);
                                } catch (s) {}
                            }
                          ),
                          Promise.all(i)
                        );
                      })(t).then(function () {
                        f(n);
                      }),
                      c.current.addEventListener('beforeunload', function () {
                        d(i);
                      });
                  }))
                : (console.warn('Unable to open window ' + a), d(i)),
              function () {
                setTimeout(function () {
                  c.current && (c.current.close(), (c.current = null));
                }, 0);
              }
            );
          }, []),
          void 0 !== _ ? o.createPortal(u, _) : null
        );
      };
    },
    435: function (t, e, i) {
      'use strict';
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.FloatingWindowTab = void 0);
      var n = i(0),
        o = i(425),
        r = i(408),
        a = i(0),
        s = i(404);
      e.FloatingWindowTab = function (t) {
        var e = t.layout,
          i = t.node,
          d = t.factory,
          l = e.getClassName,
          u = d(i);
        return n.createElement(
          'div',
          { className: l(s.CLASSES.FLEXLAYOUT__FLOATING_WINDOW_TAB) },
          n.createElement(
            o.ErrorBoundary,
            {
              message: t.layout.i18nName(r.I18nLabel.Error_rendering_component),
            },
            n.createElement(a.Fragment, null, u)
          )
        );
      };
    },
    436: function (t, e, i) {
      'use strict';
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.TabFloating = void 0);
      var n = i(0),
        o = i(405),
        r = i(407),
        a = i(404),
        s = i(408);
      e.TabFloating = function (t) {
        var e = t.layout,
          i = t.selected,
          d = t.node,
          l = function () {
            var t = d.getParent();
            t.getType() === r.default.TYPE &&
              (t.isActive() ||
                e.doAction(o.default.setActiveTabset(t.getId())));
          },
          u = e.getClassName,
          c = d._styleWithPosition({ display: i ? 'flex' : 'none' }),
          h = e.i18nName(s.I18nLabel.Floating_Window_Message),
          _ = e.i18nName(s.I18nLabel.Floating_Window_Show_Window),
          f = e.i18nName(s.I18nLabel.Floating_Window_Dock_Window);
        return n.createElement(
          'div',
          {
            className: u(a.CLASSES.FLEXLAYOUT__TAB_FLOATING),
            onMouseDown: l,
            onTouchStart: l,
            style: c,
          },
          n.createElement(
            'div',
            { className: u(a.CLASSES.FLEXLAYOUT__TAB_FLOATING_INNER) },
            n.createElement('div', null, h),
            n.createElement(
              'div',
              null,
              n.createElement(
                'a',
                {
                  href: '#',
                  onClick: function (t) {
                    t.preventDefault(), d.getWindow() && d.getWindow().focus();
                  },
                },
                _
              )
            ),
            n.createElement(
              'div',
              null,
              n.createElement(
                'a',
                {
                  href: '#',
                  onClick: function (t) {
                    t.preventDefault(),
                      e.doAction(o.default.unFloatTab(d.getId()));
                  },
                },
                f
              )
            )
          )
        );
      };
    },
    437: function (t, e, i) {},
  },
]);
//# sourceMappingURL=3.f921aa32.chunk.js.map
