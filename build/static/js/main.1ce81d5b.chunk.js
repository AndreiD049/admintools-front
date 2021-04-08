(this['webpackJsonpadmintools-front'] =
  this['webpackJsonpadmintools-front'] || []).push([
  [0],
  {
    11: function (e, t, n) {
      'use strict';
      var r = n(1),
        a = (n(0), n(124)),
        s = n(81),
        c = {
          notify: function (e, t, n) {
            s.a.emit('notification-add', {
              onRender: function (s) {
                return Object(r.jsx)(a.a, {
                  text: e,
                  type: t,
                  actions: n,
                  onDismiss: s,
                });
              },
            });
          },
          notifyError: function (e) {
            this.notify(e, 'error');
          },
          notifySuccess: function (e) {
            this.notify(e, 'success');
          },
          notifyInfo: function (e) {
            this.notify(e, 'info');
          },
          notifySevereWarning: function (e) {
            this.notify(e, 'severeWarning');
          },
        };
      t.a = c;
    },
    110: function (e, t, n) {
      'use strict';
      var r = n(1),
        a = n(4),
        s = n(63),
        c = n(5),
        i = n(0),
        o = n(291),
        u = n(290),
        l = n(289),
        d = n(81);
      n(236);
      t.a = function (e) {
        var t = e.timeout,
          n = void 0 === t ? 5e3 : t,
          p = Object(i.useState)([]),
          f = Object(c.a)(p, 2),
          b = f[0],
          j = f[1],
          m = function (e) {
            return function () {
              j(function (t) {
                var n = t.find(function (t) {
                  return t.id === e;
                });
                return n
                  ? (n.timer && clearTimeout(n.timer),
                    t.filter(function (t) {
                      return t.id !== e;
                    }))
                  : t;
              });
            };
          };
        return (
          Object(i.useEffect)(
            function () {
              return (
                d.a.on('notification-add', function (e) {
                  var t = Object(l.a)();
                  j(function (r) {
                    return [].concat(Object(s.a)(r), [
                      Object(a.a)(
                        Object(a.a)({}, e),
                        {},
                        {
                          onRender: e.onRender.bind({}, m(t)),
                          id: t,
                          timer: setTimeout(function () {
                            return j(function (e) {
                              return e.filter(function (e) {
                                return e.id !== t;
                              });
                            });
                          }, n),
                        }
                      ),
                    ]);
                  });
                }),
                function () {
                  d.a.off('notification-add');
                }
              );
            },
            [n]
          ),
          Object(r.jsx)('div', {
            className: 'container',
            children: Object(r.jsx)(o.a, {
              children: b.map(function (e) {
                return Object(r.jsx)(
                  u.a,
                  {
                    timeout: 400,
                    classNames: 'notification',
                    children: Object(r.jsx)('div', {
                      className: 'item-wrapper',
                      children: e.onRender(),
                    }),
                  },
                  e.id
                );
              }),
            }),
          })
        );
      };
    },
    12: function (e, t, n) {
      'use strict';
      var r = {
        dialogAnswers: { Yes: 1, No: 0, Cancel: 2, Ok: 3 },
        timeOptions: (function () {
          for (var e = [], t = 0; t < 24; t += 1)
            for (var n = 0; n < 60; n += 10) {
              var r = ''
                .concat('0'.concat(t).slice(-2), ':')
                .concat('0'.concat(n).slice(-2));
              e.push({ key: r, text: r });
            }
          return e;
        })(),
        connections: {
          actions: {
            INSERT: 'INSERT',
            UPDATE: 'UPDATE',
            DELETE: 'DELETE',
            RELOAD: 'RELOAD',
          },
        },
        tasks: {
          status: {
            New: 'New',
            InProgress: 'InProgress',
            Paused: 'Paused',
            Finished: 'Finished',
            Cancelled: 'Cancelled',
          },
          types: { Daily: 'Daily', Weekly: 'Weekly', Monthly: 'Monthly' },
          DayTypes: { Workday: 'Work', Calendar: 'Calendar' },
          MonthlyOnType: {
            Day: 'Day',
            Workday: 'Workday',
            Monday: 'Monday',
            Tuesday: 'Tuesday',
            Wednesday: 'Wednesday',
            Thursday: 'Thursday',
            Friday: 'Friday',
            Saturday: 'Saturday',
            Sunday: 'Sunday',
          },
        },
        colors: [
          '#FFB900',
          '#FF8C00',
          '#E74856',
          '#E81123',
          '#0078D7',
          '#0063B1',
          '#0099BC',
          '#2D7D9A',
          '#EA005E',
          '#C30052',
          '#8E8CD8',
          '#6B69D6',
          '#00B7C3',
          '#038387',
          '#7A7574',
          '#5D5A58',
          '#68768A',
          '#515C6B',
          '#B146C2',
          '#881798',
          '#00CC6A',
          '#10893E',
          '#498205',
          '#107C10',
        ],
        securities: {
          REPORTS: {
            code: 'REPORTS',
            description: 'Access to view, generate, create and edit reports',
            grants: {
              read: 'read',
              create: 'create',
              update: 'update',
              delete: 'delete',
            },
          },
          APPRAISAL_DETAILS: {
            code: 'APPRAISAL DETAILS',
            description:
              'Access to see, add, edit, delete Appraisal details for user himself',
            grants: {
              read: 'read',
              create: 'create',
              update: 'update',
              delete: 'delete',
              createFinished: 'create-finished',
              updateFinished: 'update-finished',
              deleteFinished: 'delete-finished',
            },
          },
          APPRAISAL_DETAILS_OTHER: {
            code: 'APPRAISAL DETAILS - OTHER USERS',
            description:
              'Access to see, add, edit, delete Appraisal details for other users within the team',
            grants: {
              read: 'read',
              create: 'create',
              update: 'update',
              delete: 'delete',
              createFinished: 'create-finished',
              updateFinished: 'update-finished',
              deleteFinished: 'delete-finished',
              toggleLock: 'toggle-lock',
            },
          },
          APPRAISAL_PERIODS: {
            code: 'APPRAISAL PERIODS',
            description: 'Access to see, add, edit, finish Appraisal Periods',
            grants: {
              read: 'read',
              create: 'create',
              update: 'update',
              delete: 'delete',
              finish: 'finish',
            },
          },
          SETTINGS: {
            code: 'SETTINGS',
            description:
              'Access to various settings. Be careful about following: users - will allow users to modify other users; permissions - will allow users to alter permissions',
            grants: {
              read: 'read',
              general: 'general',
              users: 'users',
              appraisalItems: 'appraisal-items',
              appraisalPeriods: 'appraisal-periods',
              permissions: 'permissions',
            },
          },
          AUDITS: {
            code: 'AUDITS',
            description: 'Access to request, execute, update, delete audits.',
            grants: {
              read: 'read',
              create: 'create',
              update: 'update',
              delete: 'delete',
            },
          },
          REPORT_TEMPLATES: {
            code: 'REPORT-TEMPLATES',
            description: 'Access to create and edit report templates',
            grants: {
              read: 'read',
              create: 'create',
              update: 'update',
              delete: 'delete',
            },
          },
          TASK: {
            code: 'TASK',
            description: 'Access to read, update, create or delete tasks',
            grants: {
              read: 'read',
              create: 'create',
              update: 'update',
              delete: 'delete',
            },
          },
          TASK_RULE: {
            code: 'TASK-RULE',
            description: 'Access to read, update, create or delete task rules',
            grants: {
              read: 'read',
              create: 'create',
              update: 'update',
              delete: 'delete',
            },
          },
          TASK_FLOW: {
            code: 'TASK-FLOW',
            description: 'Access to read, update, create or delete task flows',
            grants: {
              read: 'read',
              create: 'create',
              update: 'update',
              delete: 'delete',
            },
          },
          TASK_PLANNING: {
            code: 'TASK-PLANNING',
            description:
              'Access to read, update, create or delete task planning items',
            grants: {
              read: 'read',
              create: 'create',
              update: 'update',
              delete: 'delete',
            },
          },
        },
      };
      t.a = r;
    },
    124: function (e, t, n) {
      'use strict';
      n.d(t, 'a', function () {
        return o;
      });
      var r = n(110),
        a = n(1),
        s = (n(0), n(22)),
        c = n(387),
        i = n(196),
        o = function (e) {
          var t,
            n = e.type,
            r = e.text,
            o = e.actions,
            u = e.onDismiss;
          switch (n) {
            case 'success':
              t = s.a.success;
              break;
            case 'warning':
              t = s.a.warning;
              break;
            case 'error':
              t = s.a.error;
              break;
            case 'info':
              t = s.a.info;
              break;
            case 'blocked':
              t = s.a.blocked;
              break;
            case 'severeWarning':
              t = s.a.severeWarning;
              break;
            default:
              t = s.a.info;
          }
          return Object(a.jsx)(c.a, {
            messageBarType: t,
            actions: o || null,
            onDismiss: u,
            children: Object(a.jsx)(i.a, { variant: 'medium', children: r }),
          });
        };
      r.a;
    },
    125: function (e, t, n) {
      'use strict';
      var r = n(1),
        a = n(4),
        s = n(5),
        c = n(69),
        i = n(0),
        o = n(359),
        u = n(369),
        l = function (e) {
          var t = e.columns,
            n = e.items,
            l = e.searchValue,
            d = e.sortedCol,
            p = e.setSelectionDetails,
            f = Object(c.a)(e, [
              'columns',
              'items',
              'searchValue',
              'sortedCol',
              'setSelectionDetails',
            ]),
            b = Object(i.useState)(null),
            j = Object(s.a)(b, 2),
            m = j[0],
            h = j[1],
            O = Object(i.useState)(t),
            x = Object(s.a)(O, 2),
            v = x[0],
            g = x[1],
            C = Object(i.useState)([]),
            y = Object(s.a)(C, 2),
            k = y[0],
            w = y[1],
            S = new o.a({
              onSelectionChanged: function () {
                p({ count: S.getSelectedCount(), items: S.getSelection() });
              },
            }),
            T = function (e, t) {
              if (t.isSortable) {
                var n = t,
                  r = v.map(function (e) {
                    var r = e;
                    if (r.key === t.key) {
                      if (((n = r), r.isSorted))
                        return (
                          (r.isSortedDescending = !r.isSortedDescending), r
                        );
                      (r.isSorted = !0), (r.isSortedDescending = !0);
                    } else (r.isSorted = !1), (r.isSortedDescending = !1);
                    return r;
                  });
                g(r), h(n);
              }
            },
            A = Object(i.useCallback)(
              function (e) {
                if (!l) return e;
                var t = new RegExp(l, 'i');
                return e.filter(function (e) {
                  for (
                    var n = v.filter(function (e) {
                        return e.isFilterable;
                      }),
                      r = 0;
                    r < n.length;
                    r += 1
                  ) {
                    var a = n[r],
                      s = e[a.fieldName];
                    if (
                      (a.filterValueAccessor && (s = a.filterValueAccessor(e)),
                      t.test(s))
                    )
                      return !0;
                  }
                  return !1;
                });
              },
              [v, l]
            );
          return (
            Object(i.useEffect)(
              function () {
                var e,
                  t = n.slice();
                return (
                  m &&
                    t.sort(
                      (e = m).sort
                        ? function (t, n) {
                            return e.isSortedDescending
                              ? e.sort(t, n)
                              : e.sort(n, t);
                          }
                        : function (t, n) {
                            return e.isSortedDescending
                              ? t[e.fieldName] > n[e.fieldName]
                                ? -1
                                : 1
                              : t[e.fieldName] < n[e.fieldName]
                              ? -1
                              : 1;
                          }
                    ),
                  w(l ? A(t) : t)
                );
              },
              [n, l, A, m]
            ),
            Object(i.useEffect)(
              function () {
                d &&
                  (g(function (e) {
                    return e.map(function (e) {
                      return e.key === d.key
                        ? Object(a.a)(
                            Object(a.a)({}, e),
                            {},
                            {
                              isSorted: d.isSorted,
                              isSortedDescending: d.isSortedDescending,
                            }
                          )
                        : e;
                    });
                  }),
                  h(d));
              },
              [d]
            ),
            Object(r.jsx)(
              u.a,
              Object(a.a)(
                Object(a.a)({}, f),
                {},
                {
                  selection: S,
                  columns: v.map(function (e) {
                    return Object(a.a)(
                      Object(a.a)({}, e),
                      {},
                      { onColumnClick: T }
                    );
                  }),
                  items: k,
                  selectionPreservedOnEmptyClick: !0,
                }
              )
            )
          );
        };
      l.defaultProps = {
        searchValue: '',
        sortedCol: null,
        setSelectionDetails: function () {},
      };
      var d = l;
      t.a = d;
    },
    16: function (e, t, n) {
      'use strict';
      n.d(t, 'a', function () {
        return x;
      }),
        n.d(t, 'c', function () {
          return v;
        }),
        n.d(t, 'b', function () {
          return g;
        }),
        n.d(t, 'd', function () {
          return C;
        }),
        n.d(t, 'e', function () {
          return y;
        });
      var r = n(4),
        a = n(3),
        s = n.n(a),
        c = n(6),
        i = {
          and: function (e) {
            return Object(c.a)(
              s.a.mark(function t() {
                var n;
                return s.a.wrap(
                  function (t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          if (((t.prev = 0), 0 !== e.length)) {
                            t.next = 3;
                            break;
                          }
                          throw new Error('No validations provided');
                        case 3:
                          return (
                            (t.next = 5),
                            Promise.all(
                              e.map(function (e) {
                                return e();
                              })
                            )
                          );
                        case 5:
                          if (
                            !(n = t.sent).every(function (e) {
                              return e.result;
                            })
                          ) {
                            t.next = 8;
                            break;
                          }
                          return t.abrupt('return', n[0]);
                        case 8:
                          return t.abrupt(
                            'return',
                            n.find(function (e) {
                              return !1 === e.result;
                            })
                          );
                        case 11:
                          return (
                            (t.prev = 11),
                            (t.t0 = t.catch(0)),
                            t.abrupt('return', {
                              result: !1,
                              message: t.t0.message,
                            })
                          );
                        case 14:
                        case 'end':
                          return t.stop();
                      }
                  },
                  t,
                  null,
                  [[0, 11]]
                );
              })
            );
          },
          andSync: function (e) {
            return function () {
              try {
                var t,
                  n = e.length;
                if (0 === n) throw new Error('No validations provided');
                for (var r = 0; r < n && (t = e[r]()).result; r += 1);
                return t;
              } catch (a) {
                return { result: !1, message: 'error' };
              }
            };
          },
          or: function (e) {
            return Object(c.a)(
              s.a.mark(function t() {
                var n;
                return s.a.wrap(
                  function (t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          if (((t.prev = 0), 0 !== e.length)) {
                            t.next = 3;
                            break;
                          }
                          throw new Error('No validations provided');
                        case 3:
                          return (
                            (t.next = 5),
                            Promise.all(
                              e.map(function (e) {
                                return e();
                              })
                            )
                          );
                        case 5:
                          if (
                            !(n = t.sent).some(function (e) {
                              return e.result;
                            })
                          ) {
                            t.next = 8;
                            break;
                          }
                          return t.abrupt(
                            'return',
                            n.find(function (e) {
                              return e.result;
                            })
                          );
                        case 8:
                          return t.abrupt('return', n[n.length - 1]);
                        case 11:
                          return (
                            (t.prev = 11),
                            (t.t0 = t.catch(0)),
                            t.abrupt('return', { result: !1, message: 'error' })
                          );
                        case 14:
                        case 'end':
                          return t.stop();
                      }
                  },
                  t,
                  null,
                  [[0, 11]]
                );
              })
            );
          },
          orSync: function (e) {
            return function () {
              try {
                var t,
                  n = e.length;
                if (0 === n) throw new Error('No validations provided');
                for (var r = 0; r < n && !(t = e[r]()).result; r += 1);
                return t;
              } catch (a) {
                return { result: !1, message: 'error' };
              }
            };
          },
          not: function (e) {
            return Object(c.a)(
              s.a.mark(function t() {
                var n;
                return s.a.wrap(
                  function (t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          return (t.prev = 0), (t.next = 3), e();
                        case 3:
                          return (
                            ((n = t.sent).result = !n.result),
                            (n.message = 'Not - '.concat(n.message)),
                            t.abrupt('return', n)
                          );
                        case 9:
                          return (
                            (t.prev = 9),
                            (t.t0 = t.catch(0)),
                            t.abrupt('return', { result: !1, message: 'error' })
                          );
                        case 12:
                        case 'end':
                          return t.stop();
                      }
                  },
                  t,
                  null,
                  [[0, 9]]
                );
              })
            );
          },
          notSync: function (e) {
            return function () {
              try {
                var t = e();
                return (t.result = !t.result), t;
              } catch (n) {
                return { result: !1, message: 'error' };
              }
            };
          },
          perform: (function () {
            var e = Object(c.a)(
              s.a.mark(function e(t) {
                var n,
                  r,
                  a = arguments;
                return s.a.wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          (n = !(a.length > 1 && void 0 !== a[1]) || a[1]),
                          (e.next = 3),
                          t()
                        );
                      case 3:
                        if ((r = e.sent).result) {
                          e.next = 12;
                          break;
                        }
                        if (!n) {
                          e.next = 9;
                          break;
                        }
                        throw new Error(r.message);
                      case 9:
                        return e.abrupt('return', r);
                      case 10:
                        e.next = 13;
                        break;
                      case 12:
                        return e.abrupt('return', r);
                      case 13:
                      case 'end':
                        return e.stop();
                    }
                }, e);
              })
            );
            return function (t) {
              return e.apply(this, arguments);
            };
          })(),
          performSync: function (e) {
            var t =
                !(arguments.length > 1 && void 0 !== arguments[1]) ||
                arguments[1],
              n = e();
            if (n.result) return n;
            if (t) throw new Error(n.message);
            return n;
          },
        },
        o = {
          userExists: function (e) {
            return Object(c.a)(
              s.a.mark(function t() {
                return s.a.wrap(function (t) {
                  for (;;)
                    switch ((t.prev = t.next)) {
                      case 0:
                        return t.abrupt('return', {
                          result: Boolean(e),
                          message: "User doesn't exist.",
                        });
                      case 1:
                      case 'end':
                        return t.stop();
                    }
                }, t);
              })
            );
          },
          userAuthorized: function (e, t, n) {
            return Object(c.a)(
              s.a.mark(function r() {
                return s.a.wrap(function (r) {
                  for (;;)
                    switch ((r.prev = r.next)) {
                      case 0:
                        return r.abrupt('return', {
                          result: e.Authorize(t, n),
                          message: 'Access denied. Code: '
                            .concat(t, ', Grant: ')
                            .concat(n),
                        });
                      case 1:
                      case 'end':
                        return r.stop();
                    }
                }, r);
              })
            );
          },
        },
        u = {
          isTruthy: function (e) {
            return function () {
              return {
                result: Boolean(e),
                message: ''.concat(e, ' is not true'),
              };
            };
          },
        },
        l = n(12),
        d = i.and,
        p = i.or,
        f = i.not,
        b = i.perform,
        j = l.a.securities.APPRAISAL_DETAILS,
        m = l.a.securities.APPRAISAL_DETAILS_OTHER,
        h = function (e, t) {
          return Object(c.a)(
            s.a.mark(function n() {
              return s.a.wrap(function (n) {
                for (;;)
                  switch ((n.prev = n.next)) {
                    case 0:
                      return n.abrupt('return', {
                        result: Boolean(e.status === t),
                        message: "Period '"
                          .concat(e.name, "' status is not valid. Expected (")
                          .concat(t, ')'),
                      });
                    case 1:
                    case 'end':
                      return n.stop();
                  }
              }, n);
            })
          );
        },
        O = {
          periodExists: function (e) {
            return Object(c.a)(
              s.a.mark(function t() {
                return s.a.wrap(function (t) {
                  for (;;)
                    switch ((t.prev = t.next)) {
                      case 0:
                        return t.abrupt('return', {
                          result: Boolean(e),
                          message: "Period doesn't exist.",
                        });
                      case 1:
                      case 'end':
                        return t.stop();
                    }
                }, t);
              })
            );
          },
          itemExists: function (e) {
            return Object(c.a)(
              s.a.mark(function t() {
                return s.a.wrap(function (t) {
                  for (;;)
                    switch ((t.prev = t.next)) {
                      case 0:
                        return t.abrupt('return', {
                          result: Boolean(e),
                          message: "Item doesn't exist.",
                        });
                      case 1:
                      case 'end':
                        return t.stop();
                    }
                }, t);
              })
            );
          },
          periodStatus: h,
          periodLocked: function (e, t) {
            var n =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : null;
            return Object(c.a)(
              s.a.mark(function r() {
                var a, c;
                return s.a.wrap(function (r) {
                  for (;;)
                    switch ((r.prev = r.next)) {
                      case 0:
                        if (!(a = e.users)) {
                          r.next = 5;
                          break;
                        }
                        if (
                          !(c = a.find(function (e) {
                            return e._id === t;
                          }))
                        ) {
                          r.next = 5;
                          break;
                        }
                        return r.abrupt('return', {
                          result: Boolean(c.locked),
                          message: n || 'Period is not locked',
                        });
                      case 5:
                        return r.abrupt('return', {
                          result: !1,
                          message: n || 'Period is not locked',
                        });
                      case 6:
                      case 'end':
                        return r.stop();
                    }
                }, r);
              })
            );
          },
          itemStatus: function (e, t) {
            return Object(c.a)(
              s.a.mark(function n() {
                return s.a.wrap(function (n) {
                  for (;;)
                    switch ((n.prev = n.next)) {
                      case 0:
                        return n.abrupt('return', {
                          result: Boolean(e.status === t),
                          message: "Item '"
                            .concat(
                              e.content,
                              "' status is not valid. Expected '"
                            )
                            .concat(t, "'."),
                        });
                      case 1:
                      case 'end':
                        return n.stop();
                    }
                }, n);
              })
            );
          },
          itemType: function (e, t) {
            return Object(c.a)(
              s.a.mark(function n() {
                return s.a.wrap(function (n) {
                  for (;;)
                    switch ((n.prev = n.next)) {
                      case 0:
                        return n.abrupt('return', {
                          result: Boolean(e.type === t),
                          message: "Item '"
                            .concat(
                              e.content,
                              "' type is not valid. Expected '"
                            )
                            .concat(t, "'."),
                        });
                      case 1:
                      case 'end':
                        return n.stop();
                    }
                }, n);
              })
            );
          },
          itemSameUser: function (e, t) {
            return Object(c.a)(
              s.a.mark(function n() {
                return s.a.wrap(function (n) {
                  for (;;)
                    switch ((n.prev = n.next)) {
                      case 0:
                        return n.abrupt('return', {
                          result: Boolean(String(e.user) === String(t.id)),
                          message: "Item '"
                            .concat(e.content, "'s user is not the same as '")
                            .concat(t.username, "'"),
                        });
                      case 1:
                      case 'end':
                        return n.stop();
                    }
                }, n);
              })
            );
          },
          itemRelated: function (e) {
            return Object(c.a)(
              s.a.mark(function t() {
                return s.a.wrap(function (t) {
                  for (;;)
                    switch ((t.prev = t.next)) {
                      case 0:
                        return t.abrupt('return', {
                          result: Boolean(e.relatedItemId),
                          message: 'Item is related.',
                        });
                      case 1:
                      case 'end':
                        return t.stop();
                    }
                }, t);
              })
            );
          },
          itemContentNotNull: function (e) {
            return Object(c.a)(
              s.a.mark(function t() {
                return s.a.wrap(function (t) {
                  for (;;)
                    switch ((t.prev = t.next)) {
                      case 0:
                        return t.abrupt('return', {
                          result: Boolean(e.content.trim().length > 0),
                          message: 'Item content is empty',
                        });
                      case 1:
                      case 'end':
                        return t.stop();
                    }
                }, t);
              })
            );
          },
          canInsert: function (e, t, n) {
            return Object(c.a)(
              s.a.mark(function r() {
                var a;
                return s.a.wrap(function (r) {
                  for (;;)
                    switch ((r.prev = r.next)) {
                      case 0:
                        return (
                          (a = b(
                            p([
                              d([
                                h(t, 'Active'),
                                p([
                                  d([
                                    f(u.isTruthy(n)),
                                    o.userAuthorized(
                                      e,
                                      j.code,
                                      j.grants.create
                                    ),
                                  ]),
                                  d([
                                    u.isTruthy(n),
                                    o.userAuthorized(
                                      e,
                                      m.code,
                                      m.grants.create
                                    ),
                                  ]),
                                ]),
                              ]),
                              d([
                                h(t, 'Finished'),
                                p([
                                  d([
                                    f(u.isTruthy(n)),
                                    o.userAuthorized(
                                      e,
                                      j.code,
                                      j.grants.createFinished
                                    ),
                                  ]),
                                  d([
                                    u.isTruthy(n),
                                    o.userAuthorized(
                                      e,
                                      m.code,
                                      m.grants.createFinished
                                    ),
                                  ]),
                                ]),
                              ]),
                            ]),
                            !1
                          )),
                          r.abrupt('return', a)
                        );
                      case 2:
                      case 'end':
                        return r.stop();
                    }
                }, r);
              })
            );
          },
          canUpdate: function (e, t, n) {
            return Object(c.a)(
              s.a.mark(function r() {
                var a;
                return s.a.wrap(function (r) {
                  for (;;)
                    switch ((r.prev = r.next)) {
                      case 0:
                        return (
                          (a = b(
                            p([
                              d([
                                h(t, 'Active'),
                                p([
                                  d([
                                    f(u.isTruthy(n)),
                                    o.userAuthorized(
                                      e,
                                      j.code,
                                      j.grants.update
                                    ),
                                  ]),
                                  d([
                                    u.isTruthy(n),
                                    o.userAuthorized(
                                      e,
                                      m.code,
                                      m.grants.update
                                    ),
                                  ]),
                                ]),
                              ]),
                              d([
                                h(t, 'Finished'),
                                p([
                                  d([
                                    f(u.isTruthy(n)),
                                    o.userAuthorized(
                                      e,
                                      j.code,
                                      j.grants.updateFinished
                                    ),
                                  ]),
                                  d([
                                    u.isTruthy(n),
                                    o.userAuthorized(
                                      e,
                                      m.code,
                                      m.grants.updateFinished
                                    ),
                                  ]),
                                ]),
                              ]),
                            ]),
                            !1
                          )),
                          r.abrupt('return', a)
                        );
                      case 2:
                      case 'end':
                        return r.stop();
                    }
                }, r);
              })
            );
          },
          canDelete: function (e, t, n) {
            return Object(c.a)(
              s.a.mark(function r() {
                var a;
                return s.a.wrap(function (r) {
                  for (;;)
                    switch ((r.prev = r.next)) {
                      case 0:
                        return (
                          (r.next = 2),
                          b(
                            p([
                              d([
                                h(t, 'Active'),
                                p([
                                  d([
                                    f(u.isTruthy(n)),
                                    o.userAuthorized(
                                      e,
                                      j.code,
                                      j.grants.delete
                                    ),
                                  ]),
                                  d([
                                    u.isTruthy(n),
                                    o.userAuthorized(
                                      e,
                                      m.code,
                                      m.grants.delete
                                    ),
                                  ]),
                                ]),
                              ]),
                              d([
                                h(t, 'Finished'),
                                p([
                                  d([
                                    f(u.isTruthy(n)),
                                    o.userAuthorized(
                                      e,
                                      j.code,
                                      j.grants.deleteFinished
                                    ),
                                  ]),
                                  d([
                                    u.isTruthy(n),
                                    o.userAuthorized(
                                      e,
                                      m.code,
                                      m.grants.deleteFinished
                                    ),
                                  ]),
                                ]),
                              ]),
                            ]),
                            !1
                          )
                        );
                      case 2:
                        return (a = r.sent), r.abrupt('return', a);
                      case 4:
                      case 'end':
                        return r.stop();
                    }
                }, r);
              })
            );
          },
        },
        x = i.and,
        v = i.or,
        g = i.not,
        C = i.perform,
        y = Object(r.a)(Object(r.a)(Object(r.a)({}, O), o), u);
    },
    169: function (e, t, n) {
      'use strict';
      var r = n(1),
        a = n(3),
        s = n.n(a),
        c = n(6),
        i = n(5),
        o = n(0),
        u = n(40),
        l = n(27),
        d = function () {
          var e = Object(o.useState)(!1),
            t = Object(i.a)(e, 2),
            n = t[0],
            a = t[1],
            d = Object(o.useContext)(l.a);
          return (
            Object(o.useEffect)(
              function () {
                function e() {
                  return (e = Object(c.a)(
                    s.a.mark(function e() {
                      return s.a.wrap(function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              if (d.userLoaded) {
                                e.next = 2;
                                break;
                              }
                              return e.abrupt('return');
                            case 2:
                              null === d.user && a(!0);
                            case 3:
                            case 'end':
                              return e.stop();
                          }
                      }, e);
                    })
                  )).apply(this, arguments);
                }
                !(function () {
                  e.apply(this, arguments);
                })();
              },
              [d]
            ),
            Object(r.jsx)(r.Fragment, {
              children: n ? Object(r.jsx)(u.a, { to: '/login' }) : null,
            })
          );
        };
      t.a = d;
    },
    236: function (e, t, n) {},
    27: function (e, t, n) {
      'use strict';
      var r = n(1),
        a = n(0),
        s = n.n(a),
        c = n(124),
        i = n(81),
        o = s.a.createContext({
          user: null,
          connection: null,
          connectionId: null,
          Authorize: function (e, t, n) {
            return !1;
          },
          setContext: function () {
            return null;
          },
          userPreferences: { theme: null },
          notify: function (e, t) {
            var n =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : null;
            i.a.emit('notification-add', {
              onRender: function (a) {
                return Object(r.jsx)(c.a, {
                  text: e,
                  type: t,
                  actions: n,
                  onDismiss: a,
                });
              },
            });
          },
        });
      t.a = o;
    },
    272: function (e, t, n) {},
    273: function (e, t, n) {},
    274: function (e, t, n) {
      'use strict';
      n.r(t);
      var r = n(1),
        a = n(0),
        s = n.n(a),
        c = n(75),
        i = n.n(c),
        o = n(181),
        u = n(4),
        l = n(5),
        d = n(380),
        p = n(373),
        f = n(34),
        b = n(36),
        j = n.n(b),
        m = n(42),
        h = n(40),
        O = n(27),
        x = n(3),
        v = n.n(x),
        g = n(6),
        C = n(13),
        y = n.n(C),
        k = n(11),
        w = {
          getRolesPath: '/api/security/roles',
          getCurrentUserSecuritiesPath: '/api/security/permissions/me',
          getUserSecuritiesPath: function (e) {
            return '/api/security/permissions/user/'.concat(e);
          },
          getOrganizationUsersSecuritiesPath:
            '/api/security/permissions/organization',
          getRolesSecuritiesPath: '/api/security/permissions/role',
          getPermissionCodesPath: '/api/security/permissions/code',
          addPermissionPath: '/api/security/permissions',
          updatePermissionPath: function (e) {
            return '/api/security/permissions/'.concat(e);
          },
          deletePermissionPath: function (e) {
            return '/api/security/permissions/'.concat(e);
          },
          getRoles: function () {
            var e = this;
            return Object(g.a)(
              v.a.mark(function t() {
                var n;
                return v.a.wrap(
                  function (t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          return (
                            (t.prev = 0), (t.next = 3), y.a.get(e.getRolesPath)
                          );
                        case 3:
                          if (200 !== (n = t.sent).status) {
                            t.next = 6;
                            break;
                          }
                          return t.abrupt('return', n.data);
                        case 6:
                          return t.abrupt('return', null);
                        case 9:
                          throw (
                            ((t.prev = 9),
                            (t.t0 = t.catch(0)),
                            k.a.notifyError(
                              (t.t0.response.data &&
                                t.t0.response.data.error) ||
                                t.t0.message
                            ),
                            t.t0)
                          );
                        case 13:
                        case 'end':
                          return t.stop();
                      }
                  },
                  t,
                  null,
                  [[0, 9]]
                );
              })
            )();
          },
          getSecurities: function () {
            var e = this;
            return Object(g.a)(
              v.a.mark(function t() {
                var n;
                return v.a.wrap(
                  function (t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          return (
                            (t.prev = 0),
                            (t.next = 3),
                            y.a.get(e.getCurrentUserSecuritiesPath)
                          );
                        case 3:
                          if (200 !== (n = t.sent).status) {
                            t.next = 6;
                            break;
                          }
                          return t.abrupt('return', n.data);
                        case 6:
                          return t.abrupt('return', null);
                        case 9:
                          throw (
                            ((t.prev = 9),
                            (t.t0 = t.catch(0)),
                            k.a.notifyError(
                              (t.t0.response.data &&
                                t.t0.response.data.error) ||
                                t.t0.message
                            ),
                            t.t0)
                          );
                        case 13:
                        case 'end':
                          return t.stop();
                      }
                  },
                  t,
                  null,
                  [[0, 9]]
                );
              })
            )();
          },
          getUserSecurities: function (e) {
            var t = this;
            return Object(g.a)(
              v.a.mark(function n() {
                var r;
                return v.a.wrap(
                  function (n) {
                    for (;;)
                      switch ((n.prev = n.next)) {
                        case 0:
                          return (
                            (n.prev = 0),
                            (n.next = 3),
                            y.a.get(t.getUserSecuritiesPath(e))
                          );
                        case 3:
                          if (200 !== (r = n.sent).status) {
                            n.next = 6;
                            break;
                          }
                          return n.abrupt('return', r.data);
                        case 6:
                          return n.abrupt('return', null);
                        case 9:
                          throw (
                            ((n.prev = 9),
                            (n.t0 = n.catch(0)),
                            k.a.notifyError(
                              (n.t0.response.data &&
                                n.t0.response.data.error) ||
                                n.t0.message
                            ),
                            n.t0)
                          );
                        case 13:
                        case 'end':
                          return n.stop();
                      }
                  },
                  n,
                  null,
                  [[0, 9]]
                );
              })
            )();
          },
          getOrganizationUsersSecurities: function () {
            var e = this;
            return Object(g.a)(
              v.a.mark(function t() {
                var n;
                return v.a.wrap(
                  function (t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          return (
                            (t.prev = 0),
                            (t.next = 3),
                            y.a.get(e.getOrganizationUsersSecuritiesPath)
                          );
                        case 3:
                          if (200 !== (n = t.sent).status) {
                            t.next = 6;
                            break;
                          }
                          return t.abrupt('return', n.data);
                        case 6:
                          return t.abrupt('return', null);
                        case 9:
                          throw (
                            ((t.prev = 9),
                            (t.t0 = t.catch(0)),
                            k.a.notifyError(
                              (t.t0.response.data &&
                                t.t0.response.data.error) ||
                                t.t0.message
                            ),
                            t.t0)
                          );
                        case 13:
                        case 'end':
                          return t.stop();
                      }
                  },
                  t,
                  null,
                  [[0, 9]]
                );
              })
            )();
          },
          getRolesSecurities: function () {
            var e = this;
            return Object(g.a)(
              v.a.mark(function t() {
                var n;
                return v.a.wrap(
                  function (t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          return (
                            (t.prev = 0),
                            (t.next = 3),
                            y.a.get(e.getRolesSecuritiesPath)
                          );
                        case 3:
                          if (200 !== (n = t.sent).status) {
                            t.next = 6;
                            break;
                          }
                          return t.abrupt('return', n.data);
                        case 6:
                          return t.abrupt('return', null);
                        case 9:
                          throw (
                            ((t.prev = 9),
                            (t.t0 = t.catch(0)),
                            k.a.notifyError(
                              (t.t0.response.data &&
                                t.t0.response.data.error) ||
                                t.t0.message
                            ),
                            t.t0)
                          );
                        case 13:
                        case 'end':
                          return t.stop();
                      }
                  },
                  t,
                  null,
                  [[0, 9]]
                );
              })
            )();
          },
          getPermissionCodes: function () {
            var e = this;
            return Object(g.a)(
              v.a.mark(function t() {
                var n;
                return v.a.wrap(
                  function (t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          return (
                            (t.prev = 0),
                            (t.next = 3),
                            y.a.get(e.getPermissionCodesPath)
                          );
                        case 3:
                          if (200 !== (n = t.sent).status) {
                            t.next = 6;
                            break;
                          }
                          return t.abrupt('return', n.data);
                        case 6:
                          return t.abrupt('return', null);
                        case 9:
                          throw (
                            ((t.prev = 9),
                            (t.t0 = t.catch(0)),
                            k.a.notifyError(
                              (t.t0.response.data &&
                                t.t0.response.data.error) ||
                                t.t0.message
                            ),
                            t.t0)
                          );
                        case 13:
                        case 'end':
                          return t.stop();
                      }
                  },
                  t,
                  null,
                  [[0, 9]]
                );
              })
            )();
          },
          addPermission: function (e) {
            var t = this;
            return Object(g.a)(
              v.a.mark(function n() {
                var r;
                return v.a.wrap(
                  function (n) {
                    for (;;)
                      switch ((n.prev = n.next)) {
                        case 0:
                          return (
                            (n.prev = 0),
                            (n.next = 3),
                            y.a.post(t.addPermissionPath, e)
                          );
                        case 3:
                          if (200 !== (r = n.sent).status) {
                            n.next = 6;
                            break;
                          }
                          return n.abrupt('return', r.data);
                        case 6:
                          return n.abrupt('return', null);
                        case 9:
                          throw (
                            ((n.prev = 9),
                            (n.t0 = n.catch(0)),
                            k.a.notifyError(
                              (n.t0.response.data &&
                                n.t0.response.data.error) ||
                                n.t0.message
                            ),
                            n.t0)
                          );
                        case 13:
                        case 'end':
                          return n.stop();
                      }
                  },
                  n,
                  null,
                  [[0, 9]]
                );
              })
            )();
          },
          updatePermission: function (e, t) {
            var n = this;
            return Object(g.a)(
              v.a.mark(function r() {
                var a;
                return v.a.wrap(
                  function (r) {
                    for (;;)
                      switch ((r.prev = r.next)) {
                        case 0:
                          return (
                            (r.prev = 0),
                            (r.next = 3),
                            y.a.put(n.updatePermissionPath(e), t)
                          );
                        case 3:
                          if (200 !== (a = r.sent).status) {
                            r.next = 6;
                            break;
                          }
                          return r.abrupt('return', a.data);
                        case 6:
                          return r.abrupt('return', null);
                        case 9:
                          throw (
                            ((r.prev = 9),
                            (r.t0 = r.catch(0)),
                            k.a.notifyError(
                              (r.t0.response.data &&
                                r.t0.response.data.error) ||
                                r.t0.message
                            ),
                            r.t0)
                          );
                        case 13:
                        case 'end':
                          return r.stop();
                      }
                  },
                  r,
                  null,
                  [[0, 9]]
                );
              })
            )();
          },
          deletePermission: function (e) {
            var t = this;
            return Object(g.a)(
              v.a.mark(function n() {
                var r;
                return v.a.wrap(
                  function (n) {
                    for (;;)
                      switch ((n.prev = n.next)) {
                        case 0:
                          return (
                            (n.prev = 0),
                            (n.next = 3),
                            y.a.delete(t.deletePermissionPath(e))
                          );
                        case 3:
                          if (200 !== (r = n.sent).status) {
                            n.next = 6;
                            break;
                          }
                          return n.abrupt('return', r.data);
                        case 6:
                          return n.abrupt('return', null);
                        case 9:
                          throw (
                            ((n.prev = 9),
                            (n.t0 = n.catch(0)),
                            k.a.notifyError(
                              (n.t0.response.data &&
                                n.t0.response.data.error) ||
                                n.t0.message
                            ),
                            n.t0)
                          );
                        case 13:
                        case 'end':
                          return n.stop();
                      }
                  },
                  n,
                  null,
                  [[0, 9]]
                );
              })
            )();
          },
          Authorize: function (e, t) {
            try {
              if (this.security) {
                var n = this.security
                  .map(function (e) {
                    return e.code;
                  })
                  .indexOf(e);
                if (-1 !== n) return -1 !== this.security[n].grants.indexOf(t);
              }
              return !1;
            } catch (r) {
              return (
                k.a.notifyError(
                  (r.response.data && r.response.data.error) || r.message
                ),
                !1
              );
            }
          },
        },
        S = n(184),
        T = {
          currentUserPath: '/api/me',
          getCurrentUser: function () {
            var e = this;
            return Object(g.a)(
              v.a.mark(function t() {
                var n;
                return v.a.wrap(
                  function (t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          return (
                            (t.prev = 0),
                            (t.next = 3),
                            y.a.get(e.currentUserPath)
                          );
                        case 3:
                          if (200 !== (n = t.sent).status) {
                            t.next = 6;
                            break;
                          }
                          return t.abrupt('return', n.data);
                        case 6:
                          return t.abrupt('return', null);
                        case 9:
                          return (
                            (t.prev = 9),
                            (t.t0 = t.catch(0)),
                            k.a.notify(
                              'Not logged in. '.concat(
                                (t.t0.response.data &&
                                  t.t0.response.data.error) ||
                                  t.t0.message
                              ),
                              'error',
                              Object(r.jsx)(S.a, {
                                as: 'a',
                                href: '/auth/login',
                                children: 'Log in',
                              })
                            ),
                            t.abrupt('return', null)
                          );
                        case 13:
                        case 'end':
                          return t.stop();
                      }
                  },
                  t,
                  null,
                  [[0, 9]]
                );
              })
            )();
          },
        },
        A = function () {
          var e = Object(a.useState)(!1),
            t = Object(l.a)(e, 2),
            n = t[0],
            r = t[1],
            s = Object(a.useContext)(O.a);
          return (
            Object(a.useEffect)(
              function () {
                function e() {
                  return (e = Object(g.a)(
                    v.a.mark(function e() {
                      var t, a;
                      return v.a.wrap(function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              if (s.setContext) {
                                e.next = 2;
                                break;
                              }
                              return e.abrupt('return', r(!1));
                            case 2:
                              if (s.user || n) {
                                e.next = 9;
                                break;
                              }
                              return r(!0), (e.next = 6), T.getCurrentUser();
                            case 6:
                              return (
                                (t = e.sent) &&
                                  ((a =
                                    t.displayName || t.username || 'Unknown'),
                                  (t.avatar = a
                                    .split(/[. ,_-]/)
                                    .map(function (e) {
                                      return e[0];
                                    })
                                    .join('')
                                    .slice(0, 2)
                                    .toUpperCase())),
                                e.abrupt(
                                  'return',
                                  s.setContext(
                                    Object(u.a)(
                                      Object(u.a)({}, s),
                                      {},
                                      { user: t, userLoaded: !0 }
                                    )
                                  )
                                )
                              );
                            case 9:
                              return e.abrupt('return', null);
                            case 10:
                            case 'end':
                              return e.stop();
                          }
                      }, e);
                    })
                  )).apply(this, arguments);
                }
                !(function () {
                  e.apply(this, arguments);
                })();
              },
              [n, s]
            ),
            null
          );
        },
        P = function () {
          var e = Object(a.useContext)(O.a);
          return (
            Object(a.useEffect)(
              function () {
                function t() {
                  return (t = Object(g.a)(
                    v.a.mark(function t() {
                      var n;
                      return v.a.wrap(function (t) {
                        for (;;)
                          switch ((t.prev = t.next)) {
                            case 0:
                              if (e.security || null === e.user) {
                                t.next = 5;
                                break;
                              }
                              return (t.next = 3), w.getSecurities();
                            case 3:
                              (n = t.sent) &&
                                e.setContext(function (e) {
                                  return Object(u.a)(
                                    Object(u.a)({}, e),
                                    {},
                                    { security: n }
                                  );
                                });
                            case 5:
                            case 'end':
                              return t.stop();
                          }
                      }, t);
                    })
                  )).apply(this, arguments);
                }
                !(function () {
                  t.apply(this, arguments);
                })();
              },
              [e.user, e.security, e.setContext]
            ),
            null
          );
        },
        R = n(278),
        E = n(150),
        D = n(121),
        L = n(395),
        N = n(196),
        I = n(101),
        F = n(357),
        U = n(384),
        z = n(197),
        M = n(390),
        W = n(10),
        H = n(375),
        B = n(292),
        Z = n(179),
        V = { root: { padding: '3px' } },
        G = n(377),
        q = n(149),
        K = n(376),
        Y = n(8),
        J = Object(Y.t)({
          palette: {
            themePrimary: '#0078d7',
            themeLighterAlt: '#f3f9fd',
            themeLighter: '#d1e7f8',
            themeLight: '#aad2f3',
            themeTertiary: '#5ca8e7',
            themeSecondary: '#1a84db',
            themeDarkAlt: '#006ac1',
            themeDark: '#005aa3',
            themeDarker: '#004278',
            neutralLighterAlt: '#faf9f8',
            neutralLighter: '#f3f2f1',
            neutralLight: '#edebe9',
            neutralQuaternaryAlt: '#e1dfdd',
            neutralQuaternary: '#d0d0d0',
            neutralTertiaryAlt: '#c8c6c4',
            neutralTertiary: '#a19f9d',
            neutralSecondary: '#605e5c',
            neutralPrimaryAlt: '#3b3a39',
            neutralPrimary: '#323130',
            neutralDark: '#201f1e',
            black: '#000000',
            white: '#ffffff',
            accent: '#ffffff',
          },
          type: 'light',
        }),
        Q = Object(Y.t)({
          palette: {
            themePrimary: '#0078d7',
            themeLighterAlt: '#000509',
            themeLighter: '#001322',
            themeLight: '#002340',
            themeTertiary: '#004781',
            themeSecondary: '#0068bc',
            themeDarkAlt: '#1682da',
            themeDark: '#3693e0',
            themeDarker: '#66aee8',
            neutralLighterAlt: '#212121',
            neutralLighter: '#2a2a2a',
            neutralLight: '#393939',
            neutralQuaternaryAlt: '#424242',
            neutralQuaternary: '#494949',
            neutralTertiaryAlt: '#686868',
            neutralTertiary: '#c8c8c8',
            neutralSecondary: '#d0d0d0',
            neutralPrimaryAlt: '#dadada',
            neutralPrimary: '#ffffff',
            neutralDark: '#f4f4f4',
            black: '#f8f8f8',
            white: '#171717',
            accent: '#ffffff',
          },
          type: 'dark',
          isInverted: !0,
        }),
        X = Object(Y.t)({
          palette: {
            themePrimary: '#268bd2',
            themeLighterAlt: '#f5fafd',
            themeLighter: '#d7eaf8',
            themeLight: '#b6d9f1',
            themeTertiary: '#74b5e3',
            themeSecondary: '#3c96d7',
            themeDarkAlt: '#227cbc',
            themeDark: '#1d699f',
            themeDarker: '#154d75',
            neutralLighterAlt: '#f6efdd',
            neutralLighter: '#f2ebd9',
            neutralLight: '#e8e2d1',
            neutralQuaternaryAlt: '#d8d2c2',
            neutralQuaternary: '#cec9b9',
            neutralTertiaryAlt: '#c6c1b2',
            neutralTertiary: '#585959',
            neutralSecondary: '#363737',
            neutralPrimaryAlt: '#2e2f2f',
            neutralPrimary: '#000000',
            neutralDark: '#151515',
            black: '#0b0b0b',
            white: '#fdf6e3',
            accent: '#ffffff',
          },
        }),
        _ = Object(Y.t)({
          palette: {
            themePrimary: '#ffffff',
            themeLighterAlt: '#767676',
            themeLighter: '#a6a6a6',
            themeLight: '#c8c8c8',
            themeTertiary: '#d0d0d0',
            themeSecondary: '#dadada',
            themeDarkAlt: '#eaeaea',
            themeDark: '#f4f4f4',
            themeDarker: '#f8f8f8',
            neutralLighterAlt: '#333839',
            neutralLighter: '#3a4041',
            neutralLight: '#464d4e',
            neutralQuaternaryAlt: '#4e5456',
            neutralQuaternary: '#545b5d',
            neutralTertiaryAlt: '#6f7679',
            neutralTertiary: '#f3f3f3',
            neutralSecondary: '#f5f5f5',
            neutralPrimaryAlt: '#f7f7f7',
            neutralPrimary: '#ededed',
            neutralDark: '#fbfbfb',
            black: '#fdfdfd',
            white: '#2b2f30',
            accent: '#000000',
          },
          type: 'dark',
          isInverted: !0,
        }),
        $ = function (e) {
          switch (e || localStorage.getItem('theme')) {
            case 'light':
              return J;
            case 'dark':
              return Q;
            case 'warm':
              return X;
            case 'blackwhite':
              return _;
            default:
              return J;
          }
        },
        ee =
          'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAABmJLR0QA/wD/AP+gvaeTAAAGuElEQVR4nO2aS2waVxSG/3uHVzAm2CBiaCDGE0VJ5RAFlKSLLKo+sqgqxYq6qdRuskj2aStVaqS2UleVsLKLFGXVl6pKUYmyidR20V3VGKM4XkQ4ECeyDZiABwwGLGZuF85MwU8eA0Me34o59zJzzj/3ee4QbMLv9w8YDIb3GGM8AP3m8hcRQsg6gDhj7M9IJLLWUFb/OxAIfE4I+QrA/p562DsEAN9FIpFJAAz4XwAaDAZ/AvCxVp71mF8ikcgnABgBgEAg8AUh5Hu51Gg0wmq1guM4zTxUE1EUUSgUUK1W682fRSKRSeL3+wf0ev0injd7h8MBj8cDSqkmznYLSZLw9OlTZLNZ2SQAeIMaDIZ38Tx4o9H4UgYPAJRSeL1eGI1G2WRjjL1DGWNHZIvValWCZ4whm83WK9a0rV+hlMJqtSrXhJAjOkKIhTEGANDr/5/1crkc5ufn5YoYHh5u2tbP1MdICLG+fG29RXQ7FdjtdhCyMUvKb7VZ24vEjgIA2wfUrO1F4XUXqL9YXV1VmvPLwtDQUP3Ut4UtAqyurnbdqV7y7NkzjI+P71hOAcR7507/oZuamvo5EAgwl8v1o9bOqA2lFENDQ7vWUTr8pUuXWNc96gOSySSWlpYAAISQb1/5WeC1AKdPnz4SDAYTs7OzqFQqWvvTc2itVvsIgK9arUIQBK396TmUUmqQL+Rd4avEKz8G7LoZapVarQZBEFAulwEAZrMZNputr3OLqgmQyWSwsLAASZIa7BzH4eDBg3A4HGo9SlVUESCVSmFxcXHbMlEU8eTJE4iiiAMHDqjxOFXpeAyoVCrKymo3FhcX+3Ka7ViATCbT1OzBGEMmk+n0carTsQClUqkrdXtFxwJsHvTUqtsrOhbAYDDsXek5u2VmtKJjAWw2W1fq9oqOp0G73Y5MJoO1tbVd65nN5razxysrKxAEAevr69DpdLBYLHA4HKossDpuAYQQ8Dy/a/M2mUzgeb7lhKsoipibm0MikUAul0OxWIQgCHA4HDh+/DhMJlOn7quzEDIYDDh27BjS6TSy2SzW19cVu91ux8jISMsHrnLwm2cOi8WCy5cvg1KKEydO4Pbt23u2vt1QbSnMcRzcbjfcbjdEUQQhpO1T5p2CBzYWXoVCATabDYODg5iYmEA4HG5bhK7sBjmO60rwwMaG69q1aygUCgA2WsSFCxdgsVjael5fbYf3Cl4mmUwiFAopIpjNZkxMTLQlQt8I0GzwMqlUCqFQCPl8HkD7IlBJktblC62OxVoNXiaVSmFycrJtERhjVc7j8aQZYx8YjcZht9sNnU7VHMmetBu8TLFYxIMHDxAIBGAymaDX68HzPBKJhDIb1WMwGJDP5yGKYlwUxa80PRjpNPh6RkZGcOXKFezfv/GJ49raGsLhMIrF4rb1b9y4QQANxwA1gwfaHxM0EUDt4GXS6TRCoZCS3pdFGBwc3PE/uwogiiIEQUA2m0WhUFBlOyuKImKxWNdyA+l0GpOTkw0inD9/vuHrsHp2FGBpaQkzMzOIx+OYn5/H3NwclpeXO9qAyMF3snRthlZE2CIAYwyJRALJZLLhjY+NjeHq1au4ePEiRkdHW3aqV8HLbO4O+/bt21aEBgHk4FdWVrbc0Ol0glIKQgjOnTsHn8/XtDNyn+9V8DLLy8vbilA/JijtORAIfPP48eMdzweTySQOHToEp9MJAOB5Htlsds/zxF6/+c2USqUt64TR0VGk0+lfHz16lJUFoMPDw19v9+ZlGGOYnp6Gx+NR8vs8zyOfzyOXy237H62DlymVSpiZmcHJkydhMpnAGMOdO3feXFhY+IEDgGAw+GWlUnl3rxtJkoRoNNoggs/n21aEfgleplQqIRqNolwuIxwOI5fL+Vwu12/cmTNnrJIk/Q6gqYylLEJ9d/D5fBAEQekOer0e4+PjOHr0KGKxGGq1WtcCa4VyuYxYLKYslgDc51wu14cAPm3lRpIkYXp6ukGEsbExOJ1OOBwOnD17FjzPw+v1QhAE5WPqfoMQ8i8FwLfz51qthuvXr2N2dlaxeTwe+P1+ZfnJGNvxzLAfIIToOLfb/T6At9u5gSRJiEQi0Ov18Hq9DYukXC6Hmzdv4uHDh2r5qzqEkL873vuKoohbt27h7t27OHz4MAYGBpDJZBCPx/vyJGgzqm3+S6US7t+/r9btekbfpMS04rUAWjugNZQxVt272ssJY6xKCSFTWjuiFZIk/Uunpqb+IIT8pLUzvYYx9mM0Gv1LyQqfOnXqPUmS3gLQ3hnTi0ORUvrPvXv3/gSA/wDZmkXYs+fHBwAAAABJRU5ErkJggg==',
        te =
          'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAABmJLR0QA/wD/AP+gvaeTAAAGu0lEQVR4nO2abWxb1RnHf+f6Ok5qJ2vjhHSbApRkWdrSteNl6iakVbRAK00QUAu0aXmXVrFPg060o0iZOq0tIKSxrYwPBAZpGdCVVAjWqcmksSHWNFIJrDRp4kqEQtuQtInr2HHse88+uHbsxHZs3xtfB/r7ZD/38TnP87/n3UcwmS1dTmyOVSiyBintU57PTsYRigeHr42mG/zxD8TERynY2rMF5JPAt/IcYH6QYhghf8uu+udASIgK0CQVxrpbgPVWxpc3BPvYWb8RhIwIsLX7VyCfjj6vcdtZWeNkXonNshjN5EJAo90zimcoNGEUPM7Ohc8JtnQ5UYu+4FKzf+TGufzx9iocqkhR3OwkGJY8evAszZ0jEYMUw5T4vqtgd6zkUvK17qKvZfIADlWw5475XFN+aVwXci5B580KyLqo06raObHkdQktx7y0HPMiJVnZChWHKlhV64w31alIXNFvVS419mTfR142vfklAEJA47KyjG2FzLdLJ3JEUqZYF0phoKZ60LisDCEi8+T6pWVZ2WYTKQVI1pwztc0mLneB+C8ffBZg97+GrIrFdBQhuGORi7qKopQ+CQK09Y3S1jc644Hlkxc7LtC3pSblcwUhPXmMp+BQcSzcS6BHPrGi/DWrgzEbZ5Hg3h+kH6BVmoQOtOzaJb92AmTCN34WuCwA207U8cSJUzXPeOgdHLc6nryjoLMWwYJT50Ps/99Fq+PJOwqC2CohGC7w/ewM8I0fA1JuhnJhyBektfNzjp+OHDtdWz2XhuurKXelXopajWkC7Dl8kq1/PcbFsVCC/ZclnTy9/jp+vvJ7ZlVlKqZ0gd3vHOcXr3RMSR7AGwixufkIz777qRlVmY5hAU58McL2tz6a1m/bG8foOeM1Wp3pGBbgz+29hLXpZ4+wJnmxvddodaZjWIAOz2DGvkey8M0XhgUYDYYz9vWNZe6bLwwLsKDSNb1TzNc5vVOeMSxAww3VGfvedeOVRqszHcPrgE03XcPvD3XT1X8hrd8Pry5nw08WZF2+lPB2Zz9/6+inf8jPPGcRNy+ezyMranEVG1/GGC5BtQkOPr6CW3e1czLFNFf/nTJaH/spqi27/xxH/CHWPf8+hz85k2B/p9vH9rYLvLqxlruWVeYcO5i0ELqqwsnRHWvY3rCEK93OBPtTdy6hY8eaBHsmjPhD3La7fUryKCq4axm1z2Pt6+fY23HOUOymLYXLSuzsWLeUHeuW4hsLIwQ4HbkVH03+SF+SaVPqoIfAZkcqKpsOfIUENv6oKqe6ZmQ36CpWZyZ5iAgwcBK0yLJbCpX7Dgzyyodnc6qvoLbD0yYfJRSAgZ44EWw8dHAoJxEKRoCMk48SGpsqQuv5rEVQkMQOAq26GZJ18lEmi6AoPNR6npfTiFCUOBMFFRT2I6Snxm1n7bWl2UdvkJyTj5JEhIfTiLB2SSk1bjsI6UGT+2NySJn/Cy6Gk4/HXgxXfB9skTtAQtd5qaGcB388P6m7EEKAhWOAqclDpCWcy7wlRLFEANOTjxLOXoS0XWDEH+L97nMM+YJUu53cVFeJw27s8uSwf5xbd7Zz9NQM3kNQi6EqsTs03+nmgeUTi6VoF0gqgKZLfnPgY55991MC41rsR+65ZTz2s8X8ek3q/9vTkZfko0wWQWo0N1TEREgpQEjTufcP/+HA0f7EAh0uuKIeBNxWrXHo0cVZxZPX5KNMHhilxksNbh5cPj/5IBjSdO55/t9TkwdQHTG5/vG5jdUvHM84jhF/iNW7/5nf5CHpYunh1iGaP5zYYMVawHhYk0nffLxrZS2UTNykX3OVznubF6WNwZI3P5lJ3UHRw+hfnqin5e6eSAtoalIa//RBmuQBJAz2QWAkZvn7ZwqrX0h93l8QycOU2UFHgB7eA9EW0PjqNqT4XUaFCQEVk1uC5L3NCxPcCib5eNQicFZEXuL4KGhykY3GljIkbwOOjAsKDEPRnMggA/SNCI70DrDh+kqEgO6zfq575hN6vTYIeimYW9S6BsGLsZaATelS0eUtCLLbBEgdBj1QURNrCYf6FUq3d1FRDKf9NnRRCq5SCPnh4oDZqZiD1KsUFJnbpB4VIW5M8EsH/QEHuogehkgY9yf/fUEgVAUp5uT8e6nDV33gPRv5HI82DgN9EPQZDHJmMeFMUMLwafCeAUdp5NBSC0b6WoF0/XSYd0FC1yKD4yyjYI7ErOKyAFYHYDUKQgatDsIyhAwq6KLT6jisQ+lQeH3TYQQtVoeSf8Rr7N3YPnFIvuEvq0AsB5H5jYdZifSB/C/77m8D+D8TYN/y0fprNgAAAABJRU5ErkJggg==',
        ne =
          'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAABmJLR0QA/wD/AP+gvaeTAAAG80lEQVR4nO2aW2wcVxnHf2f2lvWuvWuT+hKStEmonVSkqEGQEpTSNOWhKOpDSzAOLZeqBaGK8gCF0AoUlIuqQoMAlYciaBLHoagNlQgtCOISgps6F6cQqdhRYkdO6vttL/beZmcOD/Z6vba33st4Z5Pm9zbfnJnzff855zu3Eczm0UMutPj9SLEGgW3O/esSGUORnZTEj/PSt0Iz74gZhQQNv/8+QjwLeArsYaHwIeQemh7bD0JCQoBduxQurTyMpMFU9wrHEY584xEQ0grAxRXfQySDX13p5L61FZSXWE3z0EjGQnHe6hilazCcMO2g4UAbf2C/mOrzPUw1+8c2L+OXDXU4bIppDi8GUVXnO00dHHi7L2Hy4VY/qiDVrUwFv6ay5IYMHsBhU/j1V9ay6hZnwuRlwnafgi5qE5at6yqmg9el5EhrP0da+5GSrGzFisOmsHVdRdKgi1orSHciF1aVJUe9V04P8PXfvQeAENCwsTpjWzFT47EnL4ReduO19SxJm+YbNlYjBAghqP9UVVa264m0AszXnDO1XU/c7AIzL05d9vOzv3Wb5YvhKAIe/MQt3F5dkrZMigDN7aM0t48uumOF5Lcne+jYuyntfQWUzgL6U3RYqe1u4uJK+fQDtzaa7YzRlDgsC45M08vh2ER3kc/jjGH3n7vYfezK1JX86Yd+FLgpAPUHa9nxclfdM6e4PBBa+IkbDAWL/kWQq64MhTl6ftBsfwqOAvr08iim6mb6Ygof+hxg6KbfaFjjrx1hLg6pAKyttPNAnZNyZ/HqbJgAL58Nsrt5jPFY6nTix3bBTz5fztc+WWpUVYZiiAC/OhVgz/Gxee8FY5Kn3xhlPCZ58jNlRlRnKHm3zUvDKs+95Vuw3N5mH5dH4vlWZzh5C3CgLUhcX3gWHdclh9qC+VZnOHkLcL4nmnHZtizKFoq8BQjFMi87ESu+9VbeAqwszzyPrvQW31Fb3gJ8oc65cKEptq1LvzVlFnl/ku13unjpdID3BtQPLLe+2s5DH89eACnhzY4Qx9pD9ATieJYobL5tCY9scOOy5z/BylsAqyJorK9ie9MAnSPzi/Cxj9g4VF+JVRHz3k9HIKrz+KvDnOgKp9hHJjQGgnG2rXOxYbkjZ9/BoInQcq+Fvz9Rw4tv+/njhXF6/Nq0vf5ON09u8uC2Zx98/eHBOSNHqUPhqU2lWARcGYmiSsnGFUty9t2wrFRqF+zc4mXnFi8TMR0BlOTYRNMFDxBRJcGIjtepUOpQ6BmLcRpyFmFRVikuu7IowQOoumTfvwL4I5NLd7ddoW9M5fS1SE71FdUybaHgE/QGNPb8MylCiV3kLELRCJBp8An6gpMi+GaI0O/LXgQFlOm5nN2kP0OyDT5BX1Bj7wwRnLaFRbBZZ8QoRFRBU14DOldXOnl4Q2Uu/udFrsEnyFaEhzdUsrrSCdCJFK+ZejCSb/AzqSm18OyWMrxLJr9wWJVUe21pRwe761YBJuYAI4OHyZawL8vuACYJYHTwCXoTIoRniXA1vQgf2AUCUZ3W7iijYY1lZVY2rnDgsGY3o5uNP6LzpcODvNu7eHsDy0otPHNvGV5nsjvUeG18ekZ3SHSBeQXQdMnPT/p58Z0AETWpyx2VNp76rIeH1rtycqwQwSdYSIS0OUDV4PGjw7xw0p8S/O1Lrfzwc2W4rJKDZwNZO1TI4GGyO+w9kdod+nwqZ2flhBQBVA2eODrIG+1zzwir3BYsYvKnqJpShUPnMhchENX5clPhgk/QN48IvbNywrQAqgbf/NMQb3aE574JaL0a5UJ/crlb7VZobFtYBH9EZ3uj8QkvU/qCGvtOpI4O7/tU6na31EFCgF1S+fbrQ/N++QRxHfa3BHi3NylClUuh6Xx6EQrd7NMxe3SwKuCL6L+BqSRY/oOTP5KCfZm8zKrAdzeVcdey5G+1w2HJjrtST36KJfiZLHUp3HObg//0qXSNxrFIeYelYldrmYxrrwMZba3oEs69H2N1hZUqtwWAEpug9WqE9dUOhID+cY2DZ4J4nPC/wThakRw6h1RJ+1CcsamWoAvxX4v97q9uE/BoNi/SJZy5liqCyyZ4pztM27Uow+Mqyz0WVpVb8UV0ukaL70QIQCDPKEjW5PKwqkt+0RJMSYxVbgvLPZbpzUpdSq76NGO8XQwEVkUImfNetapL9rcE+EtHGFVLnUiOhHReaAlOH5UXK3nvCcZ1eOVCiGMdYWqXWim1KwyGdC4NqWjFdxA0B8M2RSdiMmWIvF4omi0xs7gpgNkOmI0idFE8U7UCI3QRVXT0c2Y7YhY6nFH8z9/7D+Cw2c4UHEGj//l7mqd3hDw7/32/kPrdQuI206/FRgrGpVBa/c9tPg7wfy9OQ3nZbcB7AAAAAElFTkSuQmCC',
        re =
          'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAABmJLR0QA/wD/AP+gvaeTAAAG3ElEQVR4nO2bXUxTZxjH/+97TmmlIpZqWkAvHILORYeYGTaVidTO4QWZH/PK3UyTSeYu3JYMp5mLhCxLZoJbFgOLyTSYjBkxURP5UtLFaNisiNkM0BaISMeNYlLoqW3Puws4R+qotD2Hnvrxu+p5znPe93n+vN/nQPAUdvtuo8j7bYySPMqY7un7zyOMsceEULeBCm0XLlwYn3qPTP1tK9/5BQj7GkBmckNMGqMEqG69dPYYAAYAHAAcOXKE8sYFDSA4AMCgZYSzjAGA/bVlr+d7eu82AZMtwFa+80sQ9r3klZNtweo3V2Lu3LkaxakuPp8Pt27fwbB3RLYxQj5vv/j7MWK37zaKOv99TDb7998rw/5PPoZO90J0f5lgMIjjP/+Cy61XJNPoHBrIpUwnlGEy+Zxs6wuZPADodDp8VrkH2VaLZJo/HtZvogysQLIUFa6Sk2eMof2qA+1XHWCMxWVLVXQ6HYoKVz4xUFLAg2AuJuM2mZ4M/lc6/sB3P/w4cUEIyjZuiNmWymRlmeTfBGwe1TCWlICPdmPTxg0AISAgKH13XVy254moApBpmnOstueJV11g6sXf//Tgt7PntYpFdQiheKf4LSzKzY7qEyGAs6sbzq7uWQ8smVy63IJf63+Kep8SkbiTGE/Kwa9b+0bDtT/vsA93fHBa62DUxmDQo7Tk2TOTvB1mqb6MU4lTZxpx+szvExcE3770s8ArAcrKdxXYtu7wfLTnU9wf9modT9KhlIR3AFji/XcEjms3tI4n6VBGkCZdBINBLWPRhJd+DIi6GUqEsbExdHV1YXh4GACQk5ODwsJCGI1GNatRFdUE6OjoQFNTEwRBiLA3NjZi+/btKCkpUasqVVFFgObmZpw7d27ae4IgoKGhAYIgwG63q1GdqigeA7xeL86fn3kH2dTUhJGRkRn9ko1iARwOB0RRnNFPFEU4HA6l1amOYgEGBgZi9u3v71daneooFiAQCMyKb7JQLMCCBQti9jWbzUqrUx3FAhQWFsbsW1RUpLQ61VE8DRYXF6O9vR1DQ0PP9Fu8eDHWrl0bd/mMMXR1dcHpdOLBgwdIT0/H8uXLsX79euj1+kTDllHcAiilqKyshMViiepjtVpRWVkJSuOrzu/3o7a2FidOnEBnZydcLhe6u7tRV1eHXbt24fr160rDV2cvYDabcfDgQZSXlyMrKyvCvnXrVlRVVUXYY0FK/u7duxH2UCgEj8eDoaEhHDhwAB0dHYpiV20pbDAYUFFRgYqKCnm0T7SJSslPN21yHAee5xEMBhEMBlFVVYWamhqUlpYmVNes7Ab1ev2sJA9MvIkqKCiQ32JLIrS1tSVUX0pth2dKXsJgMESIEAqFcOjQoYRESBkBYk1eQi0RKGF4LF1o9WVIvMlLJCKCjn8y7DEgQEXGnQWYOyfbgpJ1xYlloIBEk5eIV4QN695GTrYFAHNTsLOavhhRmvxUBEFAb2+vfK7J8zyqq6ths9mm9SeEEEDDMUDN5IHExwRNBFA7eYloIrS2tkZ95pldwO/3o6+vDz6fD1lZWVi6dCl4XtnaaXx8HLW1tXGdI8RLLN1B6gLTCiCKIi5evIiWlpaIdwUcx8Fms2Hbtm0JBZaM5CVmEiGqAOFwGPX19bh161ZEgWNjY+jp6QFjDHa7HTU1NXEFlMzkJQKBAHp6eiJEOHr0KDZv3iwLENGeoyUPTCgqNZKWlhYAiFkEv9+P48ePJzV5YGJJvmzZMlmEUCiEw4cPR3zQKbeAUCjEoiUPTOzL3W43Hj16JNu2bNmC6urqZwahxV/+aZ7uDjqdDitWrFh+8uTJHvlz+b6+vm+cTmfUQgghMJlMGB8fl3d7LpcL/f39UefaVEgemGj6mZmZGB0dhSiKIITAarWucDqdpzgAyM/P/8rr9ZbNVNB0Ing8HgwMDKCsLPLxVElegud5mEwmcByH3NxcpKWlLVm9enUjt3///nnhcLgJQEz71+lEcLvdGBwcRGlpKQghuHfvHvbt24fe3l5kZGTEfRI0W3Ach4yMjKl7ntu8IAibCSEZ8RRECEFeXl7EmNDc3IzOzk6YzWYMDg7K/S09PR0LFy5UMw/VoJRaKCEkL5GHJREyM598Yf7w4UO4XK6ItcOcOXOURzpLMMZ4CiA90QIkESwWy/+aeVpaGvLz81P+324UnwkSQrBo0SJYrVb4fD6Ew2Ho9XoYjUZMrjVSGtUORXmex/z589UqLmmkxvCsIa8E0DoAraGMsdR7Z50kGGMBSin9S+tAtIJS2sndvHnTs2bNmqUAVmkdUJI5XVdXd0yeqPfu3WujlBaLopjaKxeFUEp9oijeqK+vbwOA/wBI/iG1u8B8OgAAAABJRU5ErkJggg==',
        ae = function () {
          var e = Object(a.useContext)(O.a),
            t = Object(a.useState)(e.userPreferences.theme.type),
            n = Object(l.a)(t, 2),
            s = n[0],
            c = n[1],
            i = Object(a.useState)([
              {
                key: 'light',
                text: 'Light',
                imageSrc: te,
                selectedImageSrc: te,
                imageSize: { width: 64, height: 64 },
              },
              {
                key: 'warm',
                text: 'Warm',
                imageSrc: ne,
                selectedImageSrc: ne,
                imageSize: { width: 64, height: 64 },
              },
              {
                key: 'dark',
                text: 'Dark',
                imageSrc: ee,
                selectedImageSrc: ee,
                imageSize: { width: 64, height: 64 },
              },
              {
                key: 'blackwhite',
                text: 'Dark Black&White',
                imageSrc: re,
                selectedImageSrc: re,
                imageSize: { width: 64, height: 64 },
              },
            ]),
            o = Object(l.a)(i, 1)[0];
          return Object(r.jsxs)(z.a, {
            verticalAlign: 'start',
            tokens: { childrenGap: 16 },
            children: [
              Object(r.jsx)(N.a, {
                variant: 'large',
                children: 'Select color theme:',
              }),
              Object(r.jsx)(K.a, {
                options: o,
                selectedKey: s,
                onChange: function (t, n) {
                  n &&
                    n.key &&
                    (c(n.key),
                    localStorage.setItem('theme', n.key),
                    e.setContext(function (t) {
                      return Object(u.a)(
                        Object(u.a)({}, t),
                        {},
                        {
                          userPreferences: Object(u.a)(
                            Object(u.a)({}, e.userPreferences),
                            {},
                            { theme: $(n.key) }
                          ),
                        }
                      );
                    }));
                },
              }),
            ],
          });
        },
        se = function (e) {
          var t = e.isOpen,
            n = e.setOpen;
          return Object(r.jsx)(G.a, {
            isOpen: t,
            onDismiss: function () {
              return n(!1);
            },
            isBlocking: !1,
            styles: {
              scrollableContent: { minWidth: 300, minHeight: 300, height: 300 },
            },
            children: Object(r.jsxs)(z.a, {
              style: { height: '100%', padding: '16px' },
              horizontalAlign: 'space-evenly',
              verticalAlign: 'center',
              children: [
                Object(r.jsx)(q.a, {
                  grow: 1,
                  children: Object(r.jsx)(ae, {}),
                }),
                Object(r.jsx)(q.a, {
                  align: 'center',
                  children: Object(r.jsx)(S.a, {
                    onClick: function () {
                      return n(!1);
                    },
                    children: 'Close',
                  }),
                }),
              ],
            }),
          });
        },
        ce = Object(E.a)(function (e) {
          return {
            root: {
              height: '40px',
              width: '200px',
              display: 'flex',
              flexFlow: 'column nowrap',
              justifyContent: 'center',
            },
            link: {
              color: e.palette.accent,
              textAlign: 'center',
              display: 'block',
              paddingRight: '16px',
            },
            fluidLink: { color: e.palette.accent },
            usernameText: {
              overflow: 'hidden',
              paddingRight: '8px',
              textDecoration: 'none',
              color: e.palette.accent,
            },
            callout: { minWidth: '200px', minHeight: '100px', padding: '16px' },
          };
        }),
        ie = function () {
          var e = ce(),
            t = Object(a.useState)(!1),
            n = Object(l.a)(t, 2),
            s = n[0],
            c = n[1],
            i = Object(a.useState)(!1),
            o = Object(l.a)(i, 2),
            u = o[0],
            d = o[1],
            p = Object(a.useContext)(O.a),
            f = Object(F.a)({
              keytipProps: {
                styles: V,
                content: 'I',
                keySequences: ['i'],
                onExecute: function (e) {
                  return e.click();
                },
              },
            }),
            b = p.user ? p.user.displayName || p.user.username : 'Unknown',
            j = function () {
              return c(function (e) {
                return !e;
              });
            };
          return Object(r.jsx)('div', {
            className: e.root,
            children: p.user
              ? Object(r.jsxs)(U.a, {
                  ref: f,
                  onClick: j,
                  style: { textDecoration: 'none' },
                  id: 'persona',
                  children: [
                    Object(r.jsxs)(z.a, {
                      verticalAlign: 'center',
                      wrap: !1,
                      horizontal: !0,
                      children: [
                        Object(r.jsx)(N.a, {
                          className: e.usernameText,
                          children: p.user.username,
                        }),
                        Object(r.jsx)(M.a, {
                          size: W.c.size32,
                          text: b,
                          hidePersonaDetails: !0,
                          className: e.fluidLink,
                          styles: { root: { marginRight: '18px' } },
                        }),
                      ],
                    }),
                    s &&
                      Object(r.jsxs)(H.a, {
                        role: 'alertdialog',
                        gapSpace: 0,
                        target: '#persona',
                        setInitialFocus: !0,
                        isBeakVisible: !1,
                        onDismiss: j,
                        children: [
                          Object(r.jsxs)(z.a, {
                            className: e.callout,
                            children: [
                              Object(r.jsxs)(z.a, {
                                horizontalAlign: 'space-between',
                                horizontal: !0,
                                children: [
                                  Object(r.jsx)(N.a, {
                                    variant: 'medium',
                                    children: 'Admin Tools',
                                  }),
                                  Object(r.jsx)(U.a, {
                                    href: '/auth/logout',
                                    children: Object(r.jsx)(N.a, {
                                      variant: 'medium',
                                      children: 'Sign Out',
                                    }),
                                  }),
                                ],
                              }),
                              Object(r.jsx)(B.a, {}),
                              Object(r.jsxs)(z.a, {
                                horizontal: !0,
                                horizontalAlign: 'space-evenly',
                                wrap: !0,
                                children: [
                                  Object(r.jsx)(M.a, { size: W.c.size56 }),
                                  Object(r.jsx)(N.a, {
                                    variant: 'mediumPlus',
                                    children: p.user.username,
                                  }),
                                ],
                              }),
                              Object(r.jsx)(B.a, {}),
                              Object(r.jsx)(Z.a, {
                                onClick: function () {
                                  return d(!0);
                                },
                                iconProps: { iconName: 'Brush' },
                                children: 'Chgange Layout',
                              }),
                              Object(r.jsx)(B.a, {}),
                            ],
                          }),
                          Object(r.jsx)(se, { isOpen: u, setOpen: d }),
                        ],
                      }),
                  ],
                })
              : Object(r.jsx)('div', {
                  children: p.userLoaded
                    ? Object(r.jsx)(U.a, {
                        href: '/auth/login',
                        children: Object(r.jsx)(N.a, {
                          className: e.link,
                          variant: 'mediumPlus',
                          children: 'Login',
                        }),
                      })
                    : null,
                }),
          });
        },
        oe = Object(E.a)(function (e) {
          return {
            root: {
              position: 'relative',
              backgroundColor: e.palette.themeDark,
              height: '40px',
              width: '100vw',
              display: 'flex',
              flexFlow: 'row nowrap',
              justifyContent: 'space-between',
            },
            flex: {
              height: '40px',
              display: 'flex',
              flexFlow: 'row nowrap',
              justifyContent: 'start',
            },
            icon: { height: '40px', color: e.palette.accent },
            text: {
              width: '150px',
              alignSelf: 'center',
              textAlign: 'center',
              color: e.palette.accent,
            },
          };
        }),
        ue = function (e) {
          var t = e.toggleDrawer,
            n = Object(D.a)(),
            a = oe();
          return Object(r.jsxs)('div', {
            className: a.root,
            children: [
              Object(r.jsxs)('div', {
                className: a.flex,
                children: [
                  Object(r.jsx)(L.a, {
                    keytipProps: {
                      styles: V,
                      content: 'M',
                      keySequences: ['m'],
                      onExecute: t,
                      hasMenu: !0,
                    },
                    className: a.icon,
                    iconProps: { iconName: 'GlobalNavButton' },
                    title: 'Global Nav',
                    ariaLabel: 'Global Navigation',
                    onClick: t,
                  }),
                  Object(r.jsxs)(N.a, {
                    className: a.text,
                    variant: 'large',
                    block: !0,
                    nowrap: !0,
                    children: [
                      Object(r.jsx)(I.a, {
                        iconName: 'Glasses',
                        styles: {
                          root: { fontSize: '25px', padding: n.spacing.s2 },
                        },
                      }),
                      'Admin Tools',
                    ],
                  }),
                ],
              }),
              Object(r.jsx)(ie, {}),
            ],
          });
        },
        le = n(391),
        de = n(47),
        pe = n(392),
        fe = n(12),
        be = Object(R.a)(),
        je = function () {
          return {
            root: {},
            icon: {
              height: '40px',
              width: '100%',
              borderBottom: '1px solid',
              position: 'absolute',
              top: 0,
              left: 0,
            },
            nav: { marginTop: '40px' },
          };
        },
        me = function (e) {
          var t = e.isOpen,
            n = e.toggleDrawer,
            s = be(je),
            c = Object(a.useContext)(O.a),
            i = Object(h.g)(),
            o = function (e, t) {
              e.preventDefault(), i.push(t.url), n();
            },
            u = Object(a.useState)([
              {
                links: [
                  {
                    name: 'Home',
                    url: '/',
                    icon: 'Home',
                    keyTipContent: '1',
                    keyTipSequence: ['m', '1'],
                    hasMenu: !1,
                    onClick: o,
                  },
                  {
                    name: 'Appraisals',
                    url: '/appraisals',
                    code: fe.a.securities.APPRAISAL_PERIODS.code,
                    grant: 'read',
                    icon: 'Feedback',
                    keyTipContent: '2',
                    keyTipSequence: ['m', '2'],
                    hasMenu: !1,
                    onClick: o,
                  },
                  {
                    name: 'Audits',
                    url: '/audits',
                    code: fe.a.securities.AUDITS.code,
                    grant: 'read',
                    icon: 'ComplianceAudit',
                    keyTipContent: '3',
                    keyTipSequence: ['m', '3'],
                    hasMenu: !1,
                    onClick: o,
                  },
                  {
                    name: 'Reporting',
                    code: fe.a.securities.REPORTS.code,
                    grant: 'read',
                    keyTipContent: '4',
                    keyTipSequence: ['m', '4'],
                    hasMenu: !0,
                    links: [
                      {
                        name: 'Appraisal report',
                        url: '/reporting/appraisal-report',
                        code: fe.a.securities.REPORTS.code,
                        grant: 'read',
                        icon: 'AutoFillTemplate',
                        keyTipContent: '1',
                        keyTipSequence: ['m', '4', '1'],
                        hasMenu: !1,
                        onClick: o,
                      },
                      {
                        name: 'Custom reports',
                        url: '/reporting/reports',
                        code: fe.a.securities.REPORTS.code,
                        grant: 'read',
                        icon: 'ReportDocument',
                        keyTipContent: '2',
                        keyTipSequence: ['m', '4', '2'],
                        hasMenu: !1,
                        onClick: o,
                      },
                      {
                        name: 'Templates',
                        url: '/reporting/templates',
                        code: fe.a.securities.REPORT_TEMPLATES.code,
                        grant: 'read',
                        icon: 'FileTemplate',
                        keyTipContent: '3',
                        keyTipSequence: ['m', '4', '3'],
                        hasMenu: !1,
                        onClick: o,
                      },
                    ],
                  },
                  {
                    name: 'Tasks',
                    code: fe.a.securities.TASK.code,
                    grant: fe.a.securities.TASK.grants.read,
                    keyTipContent: '5',
                    keyTipSequence: ['m', '5'],
                    hasMenu: !0,
                    links: [
                      {
                        name: 'Dashboard',
                        url: '/tasks',
                        code: fe.a.securities.TASK.code,
                        grant: fe.a.securities.TASK.grants.read,
                        icon: 'ViewDashboard',
                        keyTipContent: '1',
                        keyTipSequence: ['m', '5', '1'],
                        hasMenu: !1,
                        onClick: o,
                      },
                      {
                        name: 'Planning',
                        url: '/tasks/planning',
                        code: fe.a.securities.TASK.code,
                        grant: fe.a.securities.TASK.grants.read,
                        icon: 'PlanView',
                        keyTipContent: '2',
                        keyTipSequence: ['m', '5', '2'],
                        hasMenu: !1,
                        onClick: o,
                      },
                      {
                        name: 'Rules',
                        url: '/tasks/task-rules',
                        code: fe.a.securities.TASK.code,
                        grant: fe.a.securities.TASK.grants.read,
                        icon: 'AustralianRules',
                        keyTipContent: '3',
                        keyTipSequence: ['m', '5', '3'],
                        hasMenu: !1,
                        onClick: o,
                      },
                      {
                        name: 'Flows',
                        url: '/tasks/task-flows',
                        code: fe.a.securities.TASK.code,
                        grant: fe.a.securities.TASK.grants.read,
                        icon: 'Flow',
                        keyTipContent: '4',
                        keyTipSequence: ['m', '5', '4'],
                        hasMenu: !1,
                        onClick: o,
                      },
                    ],
                  },
                  {
                    name: 'Settings',
                    code: fe.a.securities.SETTINGS.code,
                    grant: 'read',
                    keyTipContent: '6',
                    keyTipSequence: ['m', '6'],
                    hasMenu: !0,
                    links: [
                      {
                        name: 'General',
                        url: '/settings',
                        code: fe.a.securities.SETTINGS.code,
                        grant: 'read',
                        icon: 'Settings',
                        keyTipContent: '1',
                        keyTipSequence: ['m', '6', '1'],
                        hasMenu: !1,
                        onClick: o,
                      },
                      {
                        name: 'Users',
                        url: '/settings/users',
                        code: fe.a.securities.SETTINGS.code,
                        grant: 'users',
                        icon: 'UserFollowed',
                        keyTipContent: '2',
                        keyTipSequence: ['m', '6', '2'],
                        hasMenu: !1,
                        onClick: o,
                      },
                      {
                        name: 'Permissions',
                        url: '/settings/permissions',
                        code: fe.a.securities.SETTINGS.code,
                        grant: 'permissions',
                        icon: 'Permissions',
                        keyTipContent: '3',
                        keyTipSequence: ['m', '6', '3'],
                        hasMenu: !1,
                        onClick: o,
                      },
                    ],
                  },
                ],
              },
            ]),
            d = Object(l.a)(u, 1)[0],
            p = function e(t) {
              var n = [];
              return (
                t.forEach(function (t) {
                  t.code && t.grant
                    ? c.Authorize(t.code, t.grant) &&
                      (t.links && (t.links = e(t.links)), n.push(t))
                    : n.push(t);
                }),
                n
              );
            },
            f = Object(a.useState)([]),
            b = Object(l.a)(f, 2),
            j = b[0],
            m = b[1];
          return (
            Object(a.useEffect)(
              function () {
                m([{ links: p(d[0].links) }]);
              },
              [c.security, c.user, c.Authorize]
            ),
            Object(r.jsxs)(le.a, {
              isOpen: t,
              hasCloseButton: !1,
              type: de.a.smallFixedNear,
              isLightDismiss: !0,
              onDismiss: n,
              children: [
                Object(r.jsx)(Z.a, {
                  className: s.icon,
                  onClick: n,
                  children: Object(r.jsx)(I.a, {
                    iconName: 'GlobalNavButton',
                    style: { marginLeft: 5 },
                  }),
                }),
                Object(r.jsx)(pe.a, {
                  className: s.nav,
                  ariaLabel: 'Global navigation',
                  selectedKey: '',
                  groups: j,
                  onRenderLink: function (e) {
                    return Object(r.jsx)(Z.a, {
                      keytipProps: e.keyTipContent && {
                        styles: V,
                        content: e.keyTipContent,
                        onExecute: function (t) {
                          return (e.links && e.isExpanded) || t.click();
                        },
                        keySequences: e.keyTipSequence,
                        hasMenu: e.hasMenu || !1,
                      },
                      children: e.name,
                    });
                  },
                }),
              ],
            })
          );
        },
        he = Object(R.a)(),
        Oe = { root: { position: 'fixed', zIndex: 1002, left: 0, top: 0 } };
      function xe() {
        var e = he(Oe),
          t = Object(a.useState)(!1),
          n = Object(l.a)(t, 2),
          s = n[0],
          c = n[1];
        return Object(r.jsxs)('div', {
          className: e.root,
          children: [
            Object(r.jsx)(ue, {
              toggleDrawer: function () {
                return c(!0);
              },
            }),
            Object(r.jsx)(me, {
              isOpen: s,
              toggleDrawer: function () {
                return c(function (e) {
                  return !e;
                });
              },
            }),
          ],
        });
      }
      var ve = n(288),
        ge = n(293),
        Ce = n(393),
        ye = n(39),
        ke = n(7),
        we = n(77),
        Se = n(125),
        Te = n(33),
        Ae = n(69),
        Pe = function (e) {
          var t = e.code,
            n = e.grant,
            s = e.to,
            c = e.failureNotification,
            i = Object(Ae.a)(e, ['code', 'grant', 'to', 'failureNotification']),
            o = Object(a.useContext)(O.a),
            u = Object(a.useState)(!1),
            d = Object(l.a)(u, 2),
            p = d[0],
            f = d[1],
            b = Object(a.useState)(!1),
            j = Object(l.a)(b, 2),
            m = j[0],
            x = j[1],
            v = Object(a.useState)(!1),
            g = Object(l.a)(v, 2),
            C = g[0],
            y = g[1];
          Object(a.useEffect)(
            function () {
              var e = o.Authorize(t, n);
              f(e),
                o.security &&
                  (x(!e), !c || e || C || (k.a.notify(c.content), y(!0)));
            },
            [o, t, n, c, C]
          );
          var w = null;
          return (
            p && (w = i.children),
            m && (w = Object(r.jsx)(h.a, { to: s || '/' })),
            w
          );
        },
        Re = function (e) {
          var t = e.periodId,
            n = e.setPeriodDetails;
          return (
            Object(a.useEffect)(
              function () {
                function e() {
                  return (e = Object(g.a)(
                    v.a.mark(function e() {
                      var r;
                      return v.a.wrap(function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (e.next = 2), Te.a.getItems(t);
                            case 2:
                              (r = e.sent), n(r);
                            case 4:
                            case 'end':
                              return e.stop();
                          }
                      }, e);
                    })
                  )).apply(this, arguments);
                }
                !(function () {
                  e.apply(this, arguments);
                })();
              },
              [t, n]
            ),
            null
          );
        },
        Ee = {
          baseUrl: '/api/users',
          teamUsersPath: '/api/users/team-users',
          updateUsersPath: function (e) {
            return '/api/users/'.concat(e);
          },
          getUserPath: function (e) {
            return '/api/users/user/'.concat(e);
          },
          getUserOrganizationsPath: '/api/users/organizations',
          getUserTeamMembersPath: '/api/users/team-members',
          getSettingsUsersPath: '/api/settings/users',
          putSettingsUsersPath: function (e) {
            return '/api/settings/users/'.concat(e);
          },
          normalizeUser: function (e) {
            var t = e;
            return (
              t.role && t.role.id && (t.role = t.role.id),
              t.organization &&
                t.organization.id &&
                (t.organization = t.organization.id),
              (t.organizations = t.organizations.map(function (e) {
                return e.id || e;
              })),
              t
            );
          },
          getSettingsUsers: function () {
            var e = this;
            return Object(g.a)(
              v.a.mark(function t() {
                var n;
                return v.a.wrap(
                  function (t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          return (
                            (t.prev = 0),
                            (t.next = 3),
                            y.a.get(e.getSettingsUsersPath)
                          );
                        case 3:
                          if (200 !== (n = t.sent).status) {
                            t.next = 6;
                            break;
                          }
                          return t.abrupt('return', n.data);
                        case 6:
                          throw new Error(
                            'Server response: '
                              .concat(n.status, ' - ')
                              .concat(n.statusText)
                          );
                        case 9:
                          throw (
                            ((t.prev = 9),
                            (t.t0 = t.catch(0)),
                            k.a.notifyError(
                              (t.t0.response.data &&
                                t.t0.response.data.error) ||
                                t.t0.message
                            ),
                            t.t0)
                          );
                        case 13:
                        case 'end':
                          return t.stop();
                      }
                  },
                  t,
                  null,
                  [[0, 9]]
                );
              })
            )();
          },
          getUser: function (e) {
            var t = this;
            return Object(g.a)(
              v.a.mark(function n() {
                var r;
                return v.a.wrap(
                  function (n) {
                    for (;;)
                      switch ((n.prev = n.next)) {
                        case 0:
                          return (
                            (n.prev = 0),
                            (n.next = 3),
                            y.a.get(t.getUserPath(e))
                          );
                        case 3:
                          if (200 !== (r = n.sent).status) {
                            n.next = 6;
                            break;
                          }
                          return n.abrupt('return', r.data);
                        case 6:
                          throw new Error(
                            'Server response: '
                              .concat(r.status, ' - ')
                              .concat(r.statusText)
                          );
                        case 9:
                          throw (
                            ((n.prev = 9),
                            (n.t0 = n.catch(0)),
                            k.a.notifyError(
                              (n.t0.response.data &&
                                n.t0.response.data.error) ||
                                n.t0.message
                            ),
                            n.t0)
                          );
                        case 13:
                        case 'end':
                          return n.stop();
                      }
                  },
                  n,
                  null,
                  [[0, 9]]
                );
              })
            )();
          },
          updateUser: function (e, t) {
            var n = this;
            return Object(g.a)(
              v.a.mark(function r() {
                var a;
                return v.a.wrap(
                  function (r) {
                    for (;;)
                      switch ((r.prev = r.next)) {
                        case 0:
                          return (
                            (r.prev = 0),
                            (r.next = 3),
                            y.a.put(n.updateUsersPath(e), n.normalizeUser(t))
                          );
                        case 3:
                          if (200 !== (a = r.sent).status) {
                            r.next = 6;
                            break;
                          }
                          return r.abrupt('return', a.data);
                        case 6:
                          throw new Error(
                            'Server response: '
                              .concat(a.status, ' - ')
                              .concat(a.statusText, '\n')
                          );
                        case 9:
                          throw (
                            ((r.prev = 9),
                            (r.t0 = r.catch(0)),
                            k.a.notifyError(
                              (r.t0.response.data &&
                                r.t0.response.data.error) ||
                                r.t0.message
                            ),
                            r.t0)
                          );
                        case 13:
                        case 'end':
                          return r.stop();
                      }
                  },
                  r,
                  null,
                  [[0, 9]]
                );
              })
            )();
          },
          updateSettingsUser: function (e, t) {
            var n = this;
            return Object(g.a)(
              v.a.mark(function r() {
                var a;
                return v.a.wrap(
                  function (r) {
                    for (;;)
                      switch ((r.prev = r.next)) {
                        case 0:
                          return (
                            (r.prev = 0),
                            (r.next = 3),
                            y.a.put(
                              n.putSettingsUsersPath(e),
                              n.normalizeUser(t)
                            )
                          );
                        case 3:
                          if (200 !== (a = r.sent).status) {
                            r.next = 6;
                            break;
                          }
                          return r.abrupt('return', a.data);
                        case 6:
                          throw new Error(
                            'Server response: '
                              .concat(a.status, ' - ')
                              .concat(a.statusText, '\n')
                          );
                        case 9:
                          throw (
                            ((r.prev = 9),
                            (r.t0 = r.catch(0)),
                            k.a.notifyError(
                              (r.t0.response.data &&
                                r.t0.response.data.error) ||
                                r.t0.message
                            ),
                            r.t0)
                          );
                        case 13:
                        case 'end':
                          return r.stop();
                      }
                  },
                  r,
                  null,
                  [[0, 9]]
                );
              })
            )();
          },
          getUserOrganizations: function () {
            var e = this;
            return Object(g.a)(
              v.a.mark(function t() {
                var n;
                return v.a.wrap(
                  function (t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          return (
                            (t.prev = 0),
                            (t.next = 3),
                            y.a.get(e.getUserOrganizationsPath)
                          );
                        case 3:
                          if (200 !== (n = t.sent).status) {
                            t.next = 6;
                            break;
                          }
                          return t.abrupt('return', n.data);
                        case 6:
                          throw new Error(
                            'Server response: '
                              .concat(n.status, ' - ')
                              .concat(n.statusText)
                          );
                        case 9:
                          throw (
                            ((t.prev = 9),
                            (t.t0 = t.catch(0)),
                            k.a.notifyError(
                              (t.t0.response.data &&
                                t.t0.response.data.error) ||
                                t.t0.message
                            ),
                            t.t0)
                          );
                        case 13:
                        case 'end':
                          return t.stop();
                      }
                  },
                  t,
                  null,
                  [[0, 9]]
                );
              })
            )();
          },
          getUserTeamMembers: function () {
            var e = this;
            return Object(g.a)(
              v.a.mark(function t() {
                var n;
                return v.a.wrap(
                  function (t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          return (
                            (t.prev = 0),
                            (t.next = 3),
                            y.a.get(e.getUserTeamMembersPath)
                          );
                        case 3:
                          return (n = t.sent), t.abrupt('return', n.data);
                        case 7:
                          throw (
                            ((t.prev = 7),
                            (t.t0 = t.catch(0)),
                            k.a.notifyError(
                              (t.t0.response.data &&
                                t.t0.response.data.error) ||
                                t.t0.message
                            ),
                            t.t0)
                          );
                        case 11:
                        case 'end':
                          return t.stop();
                      }
                  },
                  t,
                  null,
                  [[0, 7]]
                );
              })
            )();
          },
        },
        De = n(371),
        Le = Object(E.a)(function (e) {
          return {
            item: {
              textAlign: 'center',
              padding: e.spacing.m,
              color: e.palette.neutralSecondary,
              marginTop: e.spacing.s2,
              '& > *': {
                padding: e.spacing.s2,
                border: '1px solid '.concat(e.palette.themeSecondary),
              },
            },
            suggestion: { padding: e.spacing.m },
            root: {
              '& input': {
                backgroundColor: e.palette.white,
                color: e.palette.neutralTertiary,
                '& ::placeholder': { color: e.palette.neutralTertiary },
              },
            },
          };
        }),
        Ne = function (e) {
          return e.text;
        },
        Ie = function (e) {
          var t = e.options,
            n = e.getTextFromItem,
            s = e.selected,
            c = e.onSelect,
            i = e.onRenderItem,
            o = e.onRenderSuggestionsItem,
            u = e.placeholder,
            d = void 0 === u ? 'Select or search a value in the list...' : u,
            p = e.className,
            f = e.styles,
            b = e.maxHeight,
            j = Le(),
            m = Object(ke.useScreenClass)(),
            h = Object(a.useState)([]),
            O = Object(l.a)(h, 2),
            x = O[0],
            v = O[1],
            g = Object(a.useState)(200),
            C = Object(l.a)(g, 2),
            y = C[0],
            k = C[1],
            w = Object(a.useRef)(),
            S = n || Ne,
            T =
              i ||
              (function (e, t) {
                return function (n) {
                  return Object(r.jsx)(
                    'div',
                    {
                      className: t.item,
                      children: Object(r.jsx)(N.a, {
                        variant: 'mediumPlus',
                        children: e(n),
                      }),
                    },
                    n.key
                  );
                };
              })(S, j),
            A =
              o ||
              (function (e, t) {
                return function (n) {
                  return Object(r.jsx)('div', {
                    className: t.suggestion,
                    children: Object(r.jsx)(N.a, {
                      variant: 'mediumPlus',
                      children: e(n),
                    }),
                  });
                };
              })(S, j);
          return (
            Object(a.useEffect)(
              function () {
                w.current && k(w.current.clientWidth);
              },
              [w, m]
            ),
            Object(r.jsx)('div', {
              ref: w,
              className: ''.concat(j.root, ' ').concat(p),
              children: Object(r.jsx)(De.a, {
                inputProps: { placeholder: d },
                pickerCalloutProps: { styles: { root: { width: y } } },
                pickerSuggestionsProps: {
                  styles: { suggestionsContainer: { maxHeight: b } },
                },
                styles: f,
                selectedItems: s ? [s] : x,
                onItemSelected: function (e) {
                  c && c(e), v([e]);
                },
                onEmptyResolveSuggestions: function () {
                  return t;
                },
                onResolveSuggestions: function (e, n) {
                  return '' === e
                    ? n
                    : t.filter(function (t) {
                        return (
                          -1 !== S(t).toLowerCase().indexOf(e.toLowerCase())
                        );
                      });
                },
                onRenderItem: function (e) {
                  var t = e.item;
                  return T(t);
                },
                getTextFromItem: S,
                onRenderSuggestionsItem: A,
              }),
            })
          );
        };
      Ie.defaultProps = {
        getTextFromItem: Ne,
        selected: null,
        onSelect: null,
        onRenderItem: null,
        onRenderSuggestionsItem: null,
        placeholder: 'Select or search a value in the list...',
        className: '',
        styles: null,
        maxHeight: '600px',
      };
      var Fe = Ie,
        Ue = function (e) {
          var t = e.onUserSelect,
            n = Object(a.useState)([]),
            s = Object(l.a)(n, 2),
            c = s[0],
            i = s[1];
          Object(a.useEffect)(function () {
            var e = !0;
            function t() {
              return (t = Object(g.a)(
                v.a.mark(function t() {
                  var n;
                  return v.a.wrap(function (t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          return (t.next = 2), Ee.getUserTeamMembers();
                        case 2:
                          (n = t.sent), e && i(n);
                        case 4:
                        case 'end':
                          return t.stop();
                      }
                  }, t);
                })
              )).apply(this, arguments);
            }
            return (
              (function () {
                t.apply(this, arguments);
              })(),
              function () {
                e = !1;
              }
            );
          }, []);
          return Object(r.jsx)(Fe, {
            placeholder: 'Select or search for a user',
            options: c.map(function (e) {
              return { key: e.id, data: e };
            }),
            getTextFromItem: function (e) {
              return e.data.username;
            },
            onSelect: function (e) {
              t && t(e.data);
            },
            onRenderItem: function () {
              return null;
            },
          });
        },
        ze = function (e) {
          var t = e.defaultValue,
            n = Object(h.h)().id,
            s = Object(h.g)(),
            c = Object(a.useState)(t || null),
            i = Object(l.a)(c, 2),
            o = i[0],
            u = i[1],
            d = Object(a.useCallback)(
              function (e) {
                return e
                  ? s.push('/appraisals/'.concat(n, '/user/').concat(e.id))
                  : u(e);
              },
              [s, n]
            );
          return Object(r.jsx)(r.Fragment, {
            children: Object(r.jsx)(Ue, {
              value: o,
              onUserSelect: function (e) {
                return d(e);
              },
              defaultValue: t,
            }),
          });
        };
      ze.defaultProps = { defaultValue: null };
      var Me = ze,
        We = function (e) {
          var t = e.code,
            n = e.grant,
            r = e.onReject,
            s = Object(Ae.a)(e, ['code', 'grant', 'onReject']),
            c = Object(a.useContext)(O.a),
            i = Object(a.useState)(!1),
            o = Object(l.a)(i, 2),
            u = o[0],
            d = o[1];
          return (
            Object(a.useEffect)(
              function () {
                d(c.Authorize(t, n));
              },
              [c, t, n]
            ),
            u ? s.children : r ? r() : null
          );
        },
        He = n(16),
        Be = n(43),
        Ze = Object(E.a)(function () {
          return {
            chip: {
              borderRadius: '16px',
              textAlign: 'center',
              verticalAlign: 'middle',
            },
          };
        }),
        Ve = function (e) {
          var t = e.style,
            n = e.children,
            a = e.className,
            s = Ze();
          return Object(r.jsx)('div', {
            className: ''.concat(a, ' ').concat(s.chip),
            style: t,
            children: n,
          });
        };
      Ve.defaultProps = { className: '', style: {} };
      var Ge = Ve,
        qe = Ge,
        Ke = n(183),
        Ye = Object(E.a)(function (e) {
          return { calloutPrefix: { boxShadow: e.effects.elevation64 } };
        }),
        Je = function (e) {
          var t = e.children,
            n = e.id,
            s = Ye(),
            c = Object(a.useState)(!1),
            i = Object(l.a)(c, 2),
            o = i[0],
            u = i[1];
          return Object(r.jsxs)(r.Fragment, {
            children: [
              Object(r.jsx)(Z.a, {
                id: 'prefix-'.concat(n),
                tabIndex: -1,
                iconProps: { iconName: 'Info' },
                onClick: function () {
                  return u(function (e) {
                    return !e;
                  });
                },
              }),
              o
                ? Object(r.jsx)(H.a, {
                    className: s.calloutPrefix,
                    target: '#prefix-'.concat(n),
                    setInitialFocus: !0,
                    onDismiss: function () {
                      return u(!1);
                    },
                    role: 'alertdialog',
                    children: Object(r.jsxs)(z.a, {
                      horizontalAlign: 'start',
                      tokens: { childrenGap: 4 },
                      style: { padding: '20px' },
                      children: [
                        t,
                        Object(r.jsx)(S.a, {
                          onClick: function () {
                            return u(!1);
                          },
                          children: 'Close',
                        }),
                      ],
                    }),
                  })
                : null,
            ],
          });
        },
        Qe = function (e) {
          var t = e.menuProps;
          return Object(r.jsx)(Z.a, {
            tabIndex: -1,
            iconProps: { iconName: 'MoreVertical' },
            menuProps: t,
          });
        },
        Xe = function (e) {
          var t = e.item,
            n = e.idx,
            s = e.changeHandler,
            c = e.blurHandler,
            i = e.removeHandler,
            o = e.changeTypeHandler,
            d = e.canInsert,
            p = e.canUpdate,
            f = e.canDelete,
            b = Object(ke.useScreenClass)(),
            j = 80;
          'sm' === b || 'xl' === b
            ? (j = 50)
            : ('xs' !== b && 'md' !== b) || (j = 25);
          var m = Object(a.useState)(Object(u.a)({}, t)),
            O = Object(l.a)(m, 2),
            x = O[0],
            C = O[1],
            y = Object(a.useState)(!1),
            k = Object(l.a)(y, 2),
            w = k[0],
            S = k[1],
            T = Object(a.useState)(t.content.length > j),
            A = Object(l.a)(T, 2),
            P = A[0],
            R = A[1],
            E = Object(h.h)().userId,
            D = Object(a.useState)({
              isRelated: !1,
              isDeletable: !1,
              isFinished: !1,
              inputEditable: !0,
            }),
            L = Object(l.a)(D, 2),
            I = L[0],
            F = L[1];
          Object(a.useEffect)(
            function () {
              var e = !0;
              function n() {
                return (n = Object(g.a)(
                  v.a.mark(function n() {
                    var r, a, s, c, i, o, u, b, j, m;
                    return v.a.wrap(function (n) {
                      for (;;)
                        switch ((n.prev = n.next)) {
                          case 0:
                            return (
                              (r = [
                                Object(He.d)(He.e.itemRelated(t), !1),
                                Object(He.d)(
                                  He.e.itemStatus(t, 'Finished'),
                                  !1
                                ),
                                Object(He.d)(
                                  Object(He.a)([
                                    Object(He.b)(He.e.itemRelated(t)),
                                    Object(He.c)([
                                      Object(He.b)(He.e.isTruthy(E)),
                                      He.e.isTruthy(E),
                                    ]),
                                  ]),
                                  !1
                                ),
                              ]),
                              (n.next = 3),
                              Promise.all(r)
                            );
                          case 3:
                            (a = n.sent),
                              (s = Object(l.a)(a, 3)),
                              (c = s[0]),
                              (i = s[1]),
                              (o = s[2]),
                              (u = c.result),
                              (b = i.result),
                              (j = (d || p) && o.result),
                              (m = f && !u),
                              e &&
                                F({
                                  isRelated: u,
                                  isDeletable: m,
                                  isFinished: b,
                                  inputEditable: j,
                                });
                          case 13:
                          case 'end':
                            return n.stop();
                        }
                    }, n);
                  })
                )).apply(this, arguments);
              }
              return (
                C(Object(u.a)({}, t)),
                (function () {
                  n.apply(this, arguments);
                })(),
                function () {
                  e = !1;
                }
              );
            },
            [t, d, p, f, E]
          );
          var U = (function () {
              var e = Object(g.a)(
                v.a.mark(function e(t) {
                  var r;
                  return v.a.wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            t.persist(),
                            (r = w),
                            S(!1),
                            (e.next = 5),
                            c(x, n, r)
                          );
                        case 5:
                        case 'end':
                          return e.stop();
                      }
                  }, e);
                })
              );
              return function (t) {
                return e.apply(this, arguments);
              };
            })(),
            M = function (e) {
              if ('Feedback' !== t.type) {
                var r = e.target.value.length > j;
                P !== r && R(r);
              }
              C(
                Object(u.a)(Object(u.a)({}, t), {}, { content: e.target.value })
              ),
                s(
                  Object(u.a)(
                    Object(u.a)({}, x),
                    {},
                    { content: e.target.value }
                  ),
                  n,
                  !w
                ),
                S(!0);
            },
            W = function (e) {
              return Object(g.a)(
                v.a.mark(function n() {
                  return v.a.wrap(function (n) {
                    for (;;)
                      switch ((n.prev = n.next)) {
                        case 0:
                          if (0 === t.id) {
                            n.next = 3;
                            break;
                          }
                          return (n.next = 3), o(t.id, e);
                        case 3:
                        case 'end':
                          return n.stop();
                      }
                  }, n);
                })
              );
            },
            H = (function () {
              var e = Object(g.a)(
                v.a.mark(function e(r) {
                  return v.a.wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            r.persist(),
                            C(
                              Object(u.a)(
                                Object(u.a)({}, t),
                                {},
                                { content: '' }
                              )
                            ),
                            (e.next = 4),
                            i(x, n)
                          );
                        case 4:
                          S(!1);
                        case 5:
                        case 'end':
                          return e.stop();
                      }
                  }, e);
                })
              );
              return function (t) {
                return e.apply(this, arguments);
              };
            })(),
            Z = {
              shouldFocusOnMount: !0,
              shouldFocusOnContainer: !0,
              items: [],
            };
          -1 !== t.type.indexOf('Planned') &&
            Z.items.push({
              key: 'moveAchieved',
              text: 'Move to Achieved',
              iconProps: { iconName: 'ChevronLeftSmall' },
              onClick: W(t.type.replace('Planned', 'Achieved')),
            }),
            -1 !== t.type.indexOf('Achieved') &&
              Z.items.push({
                key: 'movePlanned',
                text: 'Move to Planned',
                iconProps: { iconName: 'ChevronRightSmall' },
                onClick: W(t.type.replace('Achieved', 'Planned')),
              }),
            Z.items.push({
              key: 'delete',
              text: 'Delete',
              iconProps: { iconName: 'Delete' },
              disabled: !I.isDeletable,
              onClick: H,
            });
          var V = Object(r.jsxs)(z.a, {
            horizontalAlign: 'start',
            tokens: { childrenGap: '3' },
            children: [
              I.isRelated
                ? Object(r.jsxs)(r.Fragment, {
                    children: [
                      Object(r.jsx)(z.a.Item, {
                        children: Object(r.jsx)(N.a, {
                          variant: 'medium',
                          children:
                            'This item was added automatically from previous appraisals',
                        }),
                      }),
                      Object(r.jsx)(z.a.Item, {
                        align: 'stretch',
                        children: Object(r.jsx)(B.a, {}),
                      }),
                    ],
                  })
                : null,
              Object(r.jsxs)(N.a, {
                variant: 'medium',
                children: [
                  Object(r.jsx)('strong', { children: 'Created user:' }),
                  ' ',
                  t.createdUser && t.createdUser.username,
                ],
              }),
              Object(r.jsxs)(N.a, {
                variant: 'medium',
                children: [
                  Object(r.jsx)('strong', { children: 'Created date:' }),
                  ' ',
                  t.createdDate && new Date(t.createdDate).toLocaleString(),
                ],
              }),
              Object(r.jsx)(z.a.Item, {
                align: 'stretch',
                children: Object(r.jsx)(B.a, {}),
              }),
              t.modifiedUser
                ? Object(r.jsx)(r.Fragment, {
                    children: Object(r.jsx)(z.a.Item, {
                      children: Object(r.jsxs)(N.a, {
                        variant: 'medium',
                        children: [
                          Object(r.jsx)('strong', {
                            children: 'Modified user:',
                          }),
                          ' ',
                          t.modifiedUser && t.modifiedUser.username,
                        ],
                      }),
                    }),
                  })
                : null,
              t.modifiedUser
                ? Object(r.jsxs)(r.Fragment, {
                    children: [
                      Object(r.jsx)(z.a.Item, {
                        children: Object(r.jsxs)(N.a, {
                          variant: 'medium',
                          children: [
                            Object(r.jsx)('strong', {
                              children: 'Modified date:',
                            }),
                            ' ',
                            t.modifiedDate &&
                              new Date(t.modifiedDate).toLocaleString(),
                          ],
                        }),
                      }),
                      Object(r.jsx)(z.a.Item, {
                        align: 'stretch',
                        children: Object(r.jsx)(B.a, {}),
                      }),
                    ],
                  })
                : null,
            ],
          });
          return 'Feedback' !== t.type
            ? Object(r.jsx)(Ke.a, {
                id: 'app-item-'.concat(t.type.toLowerCase(), '-').concat(n),
                value: x.content,
                resizable: !0,
                multiline: P,
                styles: {
                  prefix: { backgroundColor: 'transparent', padding: '0' },
                  suffix: { backgroundColor: 'transparent', padding: '0' },
                  field: { padding: '0' },
                },
                onRenderPrefix: function () {
                  return 0 !== t.id
                    ? Object(r.jsx)(Je, {
                        id: ''.concat(t.type, '-').concat(n),
                        children: V,
                      })
                    : null;
                },
                onRenderSuffix: function () {
                  return 0 !== t.id
                    ? Object(r.jsx)(Qe, { menuProps: Z })
                    : null;
                },
                autoAdjustHeight: !0,
                autoComplete: 'off',
                onChange: M,
                onBlur: U,
                readOnly: !I.inputEditable,
                iconProps: I.isRelated
                  ? {
                      iconName: 'History',
                      style: {
                        position: 'relative',
                        alignSelf: 'center',
                        bottom: 0,
                        right: 0,
                        paddingRight: 0,
                        marginLeft: '8px',
                      },
                    }
                  : null,
              })
            : Object(r.jsx)(Ke.a, {
                id: 'app-item-'.concat(t.type.toLowerCase(), '-').concat(n),
                value: x.content,
                multiline: !0,
                autoAdjustHeight: !0,
                autoComplete: 'off',
                onChange: M,
                onBlur: U,
                disabled: !I.inputEditable,
              });
        },
        _e = Object(E.a)(function (e) {
          return { box: { padding: e.spacing.l2 } };
        }),
        $e = function (e) {
          var t = e.children,
            n = e.style,
            a = e.className,
            s = _e();
          return Object(r.jsx)('div', {
            style: n,
            className: ''.concat(s.box, ' ').concat(a),
            children: t,
          });
        };
      $e.defaultProps = { style: {}, className: '' };
      var et = $e,
        tt = Object(E.a)(function (e) {
          return { stack: { '& > * + *': { paddingTop: e.spacing.s1 } } };
        }),
        nt = function (e) {
          var t = e.context,
            n = e.items,
            s = e.setItems,
            c = e.details,
            i = e.type,
            o = e.setOtherItems,
            d = {
              Achieved: 'Achieved',
              Planned: 'Planned',
              Training_Planned: 'Planned',
              Training_Achieved: 'Achieved',
              SWOT_S: 'Strengths',
              SWOT_W: 'Weaknesses',
              SWOT_O: 'Opportunities',
              SWOT_T: 'Threats',
              Feedback: 'Remarks / Other feedback',
            },
            p = c.id,
            f = tt(),
            b =
              {
                Achieved: 5,
                Planned: 5,
                Training_Planned: 3,
                Training_Achieved: 3,
                SWOT_S: 5,
                SWOT_W: 5,
                SWOT_O: 5,
                SWOT_T: 5,
                Feedback: 1,
              }[i] || 0,
            j = Object(a.useState)({
              canInsert: !1,
              canUpdate: !1,
              canDelete: !1,
            }),
            m = Object(l.a)(j, 2),
            O = m[0],
            x = m[1],
            C = Object(h.h)().userId,
            y = t.user;
          Object(a.useEffect)(function () {
            function e() {
              return (e = Object(g.a)(
                v.a.mark(function e() {
                  var n, r, a, s;
                  return v.a.wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          if (C) {
                            e.next = 6;
                            break;
                          }
                          return (e.next = 3), He.e.periodLocked(c, y.id)();
                        case 3:
                          (e.t0 = e.sent.result), (e.next = 7);
                          break;
                        case 6:
                          e.t0 = !1;
                        case 7:
                          return (
                            (n = e.t0),
                            (e.next = 10),
                            He.e.periodStatus(c, 'Finished')()
                          );
                        case 10:
                          if ((e.sent.result && (n = !1), n)) {
                            e.next = 23;
                            break;
                          }
                          return (
                            (e.next = 15),
                            Object(He.d)(He.e.canInsert(t, c, C), !1)
                          );
                        case 15:
                          return (
                            (r = e.sent.result),
                            (e.next = 18),
                            Object(He.d)(He.e.canUpdate(t, c, C), !1)
                          );
                        case 18:
                          return (
                            (a = e.sent.result),
                            (e.next = 21),
                            Object(He.d)(He.e.canDelete(t, c, C), !1)
                          );
                        case 21:
                          (s = e.sent.result),
                            x(function (e) {
                              return Object(u.a)(
                                Object(u.a)({}, e),
                                {},
                                { canInsert: r, canUpdate: a, canDelete: s }
                              );
                            });
                        case 23:
                        case 'end':
                          return e.stop();
                      }
                  }, e);
                })
              )).apply(this, arguments);
            }
            s(Te.a.normalizeSet(p, t.user, n, b, i)),
              (function () {
                e.apply(this, arguments);
              })();
          }, []);
          var k = Object(a.useCallback)(
              (function () {
                var e = Object(g.a)(
                  v.a.mark(function e(t, n) {
                    return v.a.wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            if (C) {
                              e.next = 2;
                              break;
                            }
                            return e.abrupt('return', Te.a.addItemToSet(t, n));
                          case 2:
                            return e.abrupt(
                              'return',
                              Te.a.addUserItemToSet(t, C, n)
                            );
                          case 3:
                          case 'end':
                            return e.stop();
                        }
                    }, e);
                  })
                );
                return function (t, n) {
                  return e.apply(this, arguments);
                };
              })(),
              [C]
            ),
            w = Object(a.useCallback)(
              (function () {
                var e = Object(g.a)(
                  v.a.mark(function e(t, n) {
                    return v.a.wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            if (C) {
                              e.next = 2;
                              break;
                            }
                            return e.abrupt(
                              'return',
                              Te.a.updateItemInSet(t, n)
                            );
                          case 2:
                            return e.abrupt(
                              'return',
                              Te.a.updateUserItemInSet(t, C, n)
                            );
                          case 3:
                          case 'end':
                            return e.stop();
                        }
                    }, e);
                  })
                );
                return function (t, n) {
                  return e.apply(this, arguments);
                };
              })(),
              [C]
            ),
            S = Object(a.useCallback)(
              (function () {
                var e = Object(g.a)(
                  v.a.mark(function e(t, n) {
                    return v.a.wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            if (C) {
                              e.next = 2;
                              break;
                            }
                            return e.abrupt(
                              'return',
                              Te.a.deleteItemFromSet(t, n)
                            );
                          case 2:
                            return e.abrupt(
                              'return',
                              Te.a.deleteUserItemFromSet(t, C, n)
                            );
                          case 3:
                          case 'end':
                            return e.stop();
                        }
                    }, e);
                  })
                );
                return function (t, n) {
                  return e.apply(this, arguments);
                };
              })(),
              [C]
            ),
            T = Object(a.useCallback)(
              function (e, t, n) {
                n &&
                  s(function (n) {
                    var r = n.slice();
                    return (
                      (r[t].content = e.content),
                      Te.a.normalizeSet(p, y, r, b, i)
                    );
                  });
              },
              [y, p, i, b, s]
            ),
            A = Object(a.useCallback)(
              (function () {
                var e = Object(g.a)(
                  v.a.mark(function e(t, r) {
                    var a, c;
                    return v.a.wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            if (0 === t || !o) {
                              e.next = 8;
                              break;
                            }
                            if (
                              !(a = n.find(function (e) {
                                return e.id === t;
                              }))
                            ) {
                              e.next = 8;
                              break;
                            }
                            return (a.type = r), (e.next = 6), w(p, a);
                          case 6:
                            (c = e.sent).error ||
                              (s(function (e) {
                                return Te.a.normalizeSet(
                                  p,
                                  y,
                                  e.filter(function (e) {
                                    return e.id !== c.value.id;
                                  }),
                                  b,
                                  r
                                );
                              }),
                              o(function (e) {
                                return Te.a.normalizeSet(
                                  p,
                                  y,
                                  e
                                    .filter(function (e) {
                                      return '' !== e.content;
                                    })
                                    .concat(c.value),
                                  b,
                                  r
                                );
                              }));
                          case 8:
                          case 'end':
                            return e.stop();
                        }
                    }, e);
                  })
                );
                return function (t, n) {
                  return e.apply(this, arguments);
                };
              })(),
              [y, o, b, n, p, s, w]
            ),
            P = Object(a.useCallback)(
              (function () {
                var e = Object(g.a)(
                  v.a.mark(function e(t, r) {
                    var a;
                    return v.a.wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              if (
                                ((e.prev = 0),
                                Number.isNaN(r) || !(r < n.length))
                              ) {
                                e.next = 9;
                                break;
                              }
                              if (0 === t.id) {
                                e.next = 8;
                                break;
                              }
                              return (e.next = 5), S(p, n[r]);
                            case 5:
                              if (null === (a = e.sent).error) {
                                e.next = 8;
                                break;
                              }
                              throw a.error;
                            case 8:
                              s(function (e) {
                                var n = e.filter(function (e) {
                                  return e.id !== t.id;
                                });
                                return Te.a.normalizeSet(p, y, n, b, i);
                              });
                            case 9:
                              e.next = 14;
                              break;
                            case 11:
                              (e.prev = 11),
                                (e.t0 = e.catch(0)),
                                s(function (e) {
                                  var n = e.slice();
                                  return (
                                    (n[r] = t), Te.a.normalizeSet(p, y, n, b, i)
                                  );
                                });
                            case 14:
                            case 'end':
                              return e.stop();
                          }
                      },
                      e,
                      null,
                      [[0, 11]]
                    );
                  })
                );
                return function (t, n) {
                  return e.apply(this, arguments);
                };
              })(),
              [y, n, p, i, b, S, s]
            ),
            R = Object(a.useCallback)(
              (function () {
                var e = Object(g.a)(
                  v.a.mark(function e(t, r, a) {
                    var c, o, u, l, d;
                    return v.a.wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            if (!(r < n.length && t.type === i)) {
                              e.next = 22;
                              break;
                            }
                            if (
                              ((c = 0 === t.id && t.content),
                              (o = 0 !== t.id && '' === t.content),
                              !c)
                            ) {
                              e.next = 10;
                              break;
                            }
                            return (e.next = 6), k(p, t);
                          case 6:
                            (u = e.sent),
                              s(function (e) {
                                var n = e.slice();
                                return (
                                  u.error
                                    ? ((n[r] = t), (n[r].content = ''))
                                    : (n[r] = u.value),
                                  Te.a.normalizeSet(p, y, n, b, i)
                                );
                              }),
                              (e.next = 22);
                            break;
                          case 10:
                            if (!o) {
                              e.next = 17;
                              break;
                            }
                            return (e.next = 13), S(p, t);
                          case 13:
                            (l = e.sent),
                              s(function (e) {
                                var n = e.slice();
                                return (
                                  l.error
                                    ? l.value && (n[r] = l.value)
                                    : (n = n.filter(function (e) {
                                        return e.id !== t.id;
                                      })),
                                  Te.a.normalizeSet(p, y, n, b, i)
                                );
                              }),
                              (e.next = 22);
                            break;
                          case 17:
                            if (c || o || !a || '' === t.content) {
                              e.next = 22;
                              break;
                            }
                            return (e.next = 20), w(p, t);
                          case 20:
                            (d = e.sent),
                              s(function (e) {
                                var n;
                                return (
                                  d.error
                                    ? ((n = e.slice()),
                                      d.value && (n[r] = d.value))
                                    : (n = e.map(function (e) {
                                        return e.id === t.id ? d.value : e;
                                      })),
                                  Te.a.normalizeSet(p, y, n, b, i)
                                );
                              });
                          case 22:
                          case 'end':
                            return e.stop();
                        }
                    }, e);
                  })
                );
                return function (t, n, r) {
                  return e.apply(this, arguments);
                };
              })(),
              [y, n, p, i, b, k, S, w, s]
            );
          return Object(r.jsx)(et, {
            children: Object(r.jsxs)(z.a, {
              verticalAlign: 'center',
              className: f.stack,
              children: [
                Object(r.jsx)(z.a.Item, {
                  align: 'center',
                  children: Object(r.jsx)(N.a, {
                    variant: 'mediumPlus',
                    children: d[i],
                  }),
                }),
                n.map(function (e, t) {
                  var n = 0 === e.id ? t : e.id;
                  return Object(r.jsx)(
                    z.a.Item,
                    {
                      className: f.listItem,
                      children: Object(r.jsx)(Xe, {
                        item: e,
                        idx: t,
                        label: d[i],
                        changeHandler: T,
                        blurHandler: R,
                        removeHandler: P,
                        changeTypeHandler: A,
                        canInsert: O.canInsert,
                        canUpdate: O.canUpdate,
                        canDelete: O.canDelete,
                      }),
                    },
                    n
                  );
                }),
              ],
            }),
          });
        };
      nt.defaultProps = { setOtherItems: null };
      var rt = nt,
        at = Object(E.a)(function (e) {
          return {
            chipContent: {
              backgroundColor: e.palette.neutralQuaternary,
              padding: '7px',
              display: 'inline-flex',
              flexFlow: 'row nowrap',
              justifyContent: 'center',
              alignItems: 'center',
            },
            lockedChip: {
              backgroundColor: e.palette.themePrimary,
              padding: '7px',
              display: 'inline-flex',
              flexFlow: 'row nowrap',
              justifyContent: 'center',
              alignItems: 'center',
              color: '#fff',
            },
            lockIcon: { marginRight: e.spacing.s1 },
            container: { '& > * + *': { marginTop: e.spacing.m } },
          };
        }),
        st = function (e) {
          var t = e.context,
            n = e.periodDetails,
            s = at(),
            c = Object(a.useState)(
              n.items.filter(function (e) {
                return 'Achieved' === e.type;
              })
            ),
            i = Object(l.a)(c, 2),
            o = i[0],
            u = i[1],
            d = Object(a.useState)(
              n.items.filter(function (e) {
                return 'Planned' === e.type;
              })
            ),
            p = Object(l.a)(d, 2),
            f = p[0],
            b = p[1],
            j = Object(a.useState)(
              n.items.filter(function (e) {
                return 'Training_Planned' === e.type;
              })
            ),
            m = Object(l.a)(j, 2),
            h = m[0],
            O = m[1],
            x = Object(a.useState)(
              n.items.filter(function (e) {
                return 'Training_Achieved' === e.type;
              })
            ),
            C = Object(l.a)(x, 2),
            y = C[0],
            k = C[1],
            w = Object(a.useState)(
              n.items.filter(function (e) {
                return 'SWOT_S' === e.type;
              })
            ),
            S = Object(l.a)(w, 2),
            T = S[0],
            A = S[1],
            P = Object(a.useState)(
              n.items.filter(function (e) {
                return 'SWOT_W' === e.type;
              })
            ),
            R = Object(l.a)(P, 2),
            E = R[0],
            D = R[1],
            L = Object(a.useState)(
              n.items.filter(function (e) {
                return 'SWOT_O' === e.type;
              })
            ),
            F = Object(l.a)(L, 2),
            U = F[0],
            z = F[1],
            H = Object(a.useState)(
              n.items.filter(function (e) {
                return 'SWOT_T' === e.type;
              })
            ),
            Z = Object(l.a)(H, 2),
            V = Z[0],
            G = Z[1],
            q = Object(a.useState)(
              n.items.filter(function (e) {
                return 'Feedback' === e.type;
              })
            ),
            K = Object(l.a)(q, 2),
            Y = K[0],
            J = K[1],
            Q = Object(a.useState)(!1),
            X = Object(l.a)(Q, 2),
            _ = X[0],
            $ = X[1],
            ee = t.user;
          return (
            Object(a.useEffect)(
              function () {
                var e = !0;
                function t() {
                  return (t = Object(g.a)(
                    v.a.mark(function t() {
                      var r;
                      return v.a.wrap(function (t) {
                        for (;;)
                          switch ((t.prev = t.next)) {
                            case 0:
                              return (
                                (t.next = 2), He.e.periodLocked(n, ee.id)()
                              );
                            case 2:
                              (r = t.sent.result), e && $(r);
                            case 4:
                            case 'end':
                              return t.stop();
                          }
                      }, t);
                    })
                  )).apply(this, arguments);
                }
                return (
                  (function () {
                    t.apply(this, arguments);
                  })(),
                  function () {
                    e = !1;
                  }
                );
              },
              [n, ee.id]
            ),
            Object(r.jsxs)(ke.Container, {
              md: !0,
              className: s.container,
              children: [
                Object(r.jsx)(ke.Row, {
                  children: Object(r.jsx)(ke.Col, {
                    xs: 12,
                    children: Object(r.jsx)(Be.a, {
                      text: "Details '".concat(n.name ? n.name : '', "'"),
                    }),
                  }),
                }),
                Object(r.jsx)(ke.Row, {
                  justify: 'center',
                  children: Object(r.jsx)(ke.Col, {
                    xs: 12,
                    md: 6,
                    lg: 4,
                    children: Object(r.jsx)(We, {
                      code: 'APPRAISAL DETAILS - OTHER USERS',
                      grant: 'read',
                      children: Object(r.jsx)(Me, {}),
                    }),
                  }),
                }),
                Object(r.jsx)(ke.Row, {
                  justify: 'center',
                  children: Object(r.jsx)('div', {
                    children: ee
                      ? Object(r.jsx)(qe, {
                          className: s.chipContent,
                          children: Object(r.jsx)(M.a, {
                            size: W.c.size24,
                            text: ee.username,
                          }),
                        })
                      : null,
                  }),
                }),
                Object(r.jsx)(ke.Row, {
                  justify: 'center',
                  children: Object(r.jsx)('div', {
                    children: _
                      ? Object(r.jsxs)(qe, {
                          className: s.lockedChip,
                          children: [
                            Object(r.jsx)(I.a, {
                              className: s.lockIcon,
                              iconName: 'LockSolid',
                            }),
                            Object(r.jsx)(N.a, {
                              variant: 'smallPlus',
                              children: 'Locked',
                            }),
                          ],
                        })
                      : null,
                  }),
                }),
                Object(r.jsx)(B.a, {
                  children: Object(r.jsx)(N.a, {
                    variant: 'mediumPlus',
                    children: 'Objectives',
                  }),
                }),
                Object(r.jsxs)(ke.Row, {
                  children: [
                    Object(r.jsx)(ke.Col, {
                      xs: 12,
                      md: 6,
                      children: Object(r.jsx)(rt, {
                        context: t,
                        details: n,
                        items: o,
                        setItems: u,
                        type: 'Achieved',
                        setOtherItems: b,
                      }),
                    }),
                    Object(r.jsx)(ke.Col, {
                      xs: 12,
                      md: 6,
                      children: Object(r.jsx)(rt, {
                        context: t,
                        details: n,
                        items: f,
                        setItems: b,
                        type: 'Planned',
                        setOtherItems: u,
                      }),
                    }),
                  ],
                }),
                Object(r.jsx)(B.a, {
                  children: Object(r.jsx)(N.a, {
                    variant: 'mediumPlus',
                    children: 'Trainings',
                  }),
                }),
                Object(r.jsxs)(ke.Row, {
                  children: [
                    Object(r.jsx)(ke.Col, {
                      xs: 12,
                      md: 6,
                      children: Object(r.jsx)(rt, {
                        context: t,
                        details: n,
                        items: y,
                        setItems: k,
                        type: 'Training_Achieved',
                        setOtherItems: O,
                      }),
                    }),
                    Object(r.jsx)(ke.Col, {
                      xs: 12,
                      md: 6,
                      children: Object(r.jsx)(rt, {
                        context: t,
                        details: n,
                        items: h,
                        setItems: O,
                        type: 'Training_Planned',
                        setOtherItems: k,
                      }),
                    }),
                  ],
                }),
                Object(r.jsx)(B.a, {
                  children: Object(r.jsx)(N.a, {
                    variant: 'mediumPlus',
                    children: 'SWOT',
                  }),
                }),
                Object(r.jsxs)(ke.Row, {
                  nogutter: !0,
                  children: [
                    Object(r.jsx)(ke.Col, {
                      xs: 12,
                      md: 6,
                      children: Object(r.jsx)(rt, {
                        context: t,
                        details: n,
                        items: T,
                        setItems: A,
                        type: 'SWOT_S',
                      }),
                    }),
                    Object(r.jsx)(ke.Col, {
                      xs: 12,
                      md: 6,
                      children: Object(r.jsx)(rt, {
                        context: t,
                        details: n,
                        items: E,
                        setItems: D,
                        type: 'SWOT_W',
                      }),
                    }),
                    Object(r.jsx)(ke.Col, {
                      xs: 12,
                      md: 6,
                      children: Object(r.jsx)(rt, {
                        context: t,
                        details: n,
                        items: U,
                        setItems: z,
                        type: 'SWOT_O',
                      }),
                    }),
                    Object(r.jsx)(ke.Col, {
                      xs: 12,
                      md: 6,
                      children: Object(r.jsx)(rt, {
                        context: t,
                        details: n,
                        items: V,
                        setItems: G,
                        type: 'SWOT_T',
                      }),
                    }),
                  ],
                }),
                Object(r.jsx)(ke.Row, {
                  children: Object(r.jsx)(ke.Col, {
                    xs: 12,
                    children: Object(r.jsx)(rt, {
                      context: t,
                      details: n,
                      items: Y,
                      setItems: J,
                      type: 'Feedback',
                    }),
                  }),
                }),
                Object(r.jsx)('div', { style: { padding: '20px' } }),
              ],
            })
          );
        },
        ct = function (e) {
          var t = e.periodId,
            n = e.userId,
            r = e.setUserDetails,
            s = e.setPeriodDetails;
          return (
            Object(a.useEffect)(
              function () {
                function e() {
                  return (e = Object(g.a)(
                    v.a.mark(function e() {
                      var a, c;
                      return v.a.wrap(function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (e.next = 2), Ee.getUser(n);
                            case 2:
                              return (
                                (a = e.sent),
                                r(a),
                                (e.next = 6),
                                Te.a.getUserItems(t, n)
                              );
                            case 6:
                              (c = e.sent), s(c);
                            case 8:
                            case 'end':
                              return e.stop();
                          }
                      }, e);
                    })
                  )).apply(this, arguments);
                }
                !(function () {
                  e.apply(this, arguments);
                })();
              },
              [t, n, s, r]
            ),
            null
          );
        },
        it = n(364),
        ot = Object(E.a)(function (e) {
          return {
            chipContent: {
              backgroundColor: e.palette.neutralQuaternary,
              padding: '7px',
              display: 'inline-flex',
              flexFlow: 'row nowrap',
              justifyContent: 'center',
              alignItems: 'center',
            },
            lockedChip: {
              backgroundColor: e.palette.themePrimary,
              padding: '7px',
              display: 'inline-flex',
              flexFlow: 'row nowrap',
              justifyContent: 'center',
              alignItems: 'center',
              color: '#fff',
            },
            lockIcon: { marginRight: e.spacing.s1 },
            container: { '& > * + *': { marginTop: e.spacing.m } },
          };
        }),
        ut = function (e) {
          var t = e.context,
            n = e.periodDetails,
            s = e.userDetails,
            c = e.handleLockButton,
            i = ot(),
            o = Object(a.useState)(
              n.items.filter(function (e) {
                return 'Achieved' === e.type;
              })
            ),
            u = Object(l.a)(o, 2),
            d = u[0],
            p = u[1],
            f = Object(a.useState)(
              n.items.filter(function (e) {
                return 'Planned' === e.type;
              })
            ),
            b = Object(l.a)(f, 2),
            j = b[0],
            m = b[1],
            h = Object(a.useState)(
              n.items.filter(function (e) {
                return 'Training_Planned' === e.type;
              })
            ),
            O = Object(l.a)(h, 2),
            x = O[0],
            C = O[1],
            y = Object(a.useState)(
              n.items.filter(function (e) {
                return 'Training_Achieved' === e.type;
              })
            ),
            k = Object(l.a)(y, 2),
            w = k[0],
            S = k[1],
            T = Object(a.useState)(
              n.items.filter(function (e) {
                return 'SWOT_S' === e.type;
              })
            ),
            A = Object(l.a)(T, 2),
            P = A[0],
            R = A[1],
            E = Object(a.useState)(
              n.items.filter(function (e) {
                return 'SWOT_W' === e.type;
              })
            ),
            D = Object(l.a)(E, 2),
            L = D[0],
            F = D[1],
            U = Object(a.useState)(
              n.items.filter(function (e) {
                return 'SWOT_O' === e.type;
              })
            ),
            z = Object(l.a)(U, 2),
            H = z[0],
            Z = z[1],
            V = Object(a.useState)(
              n.items.filter(function (e) {
                return 'SWOT_T' === e.type;
              })
            ),
            G = Object(l.a)(V, 2),
            q = G[0],
            K = G[1],
            Y = Object(a.useState)(
              n.items.filter(function (e) {
                return 'Feedback' === e.type;
              })
            ),
            J = Object(l.a)(Y, 2),
            Q = J[0],
            X = J[1],
            _ = Object(a.useState)(!1),
            $ = Object(l.a)(_, 2),
            ee = $[0],
            te = $[1],
            ne = Object(a.useState)(!1),
            re = Object(l.a)(ne, 2),
            ae = re[0],
            se = re[1];
          return (
            Object(a.useEffect)(
              function () {
                var e = !0;
                function t() {
                  return (t = Object(g.a)(
                    v.a.mark(function t() {
                      var r, a;
                      return v.a.wrap(function (t) {
                        for (;;)
                          switch ((t.prev = t.next)) {
                            case 0:
                              return (t.next = 2), He.e.periodLocked(n, s.id)();
                            case 2:
                              return (
                                (r = t.sent.result),
                                (t.next = 5),
                                He.e.periodStatus(n, 'Finished')()
                              );
                            case 5:
                              (a = t.sent.result), e && (te(r), se(a));
                            case 7:
                            case 'end':
                              return t.stop();
                          }
                      }, t);
                    })
                  )).apply(this, arguments);
                }
                return (
                  (function () {
                    t.apply(this, arguments);
                  })(),
                  function () {
                    e = !1;
                  }
                );
              },
              [n, s.id]
            ),
            Object(r.jsxs)(ke.Container, {
              md: !0,
              className: i.container,
              children: [
                Object(r.jsx)(ke.Row, {
                  children: Object(r.jsx)(ke.Col, {
                    xs: 12,
                    children: Object(r.jsx)(Be.a, {
                      text: "Details '".concat(n.name ? n.name : '', "'"),
                    }),
                  }),
                }),
                Object(r.jsx)(ke.Row, {
                  justify: 'center',
                  children: Object(r.jsx)(ke.Col, {
                    xs: 12,
                    md: 6,
                    lg: 4,
                    children: Object(r.jsx)(We, {
                      code: 'APPRAISAL DETAILS - OTHER USERS',
                      grant: 'read',
                      children: Object(r.jsx)(Me, {}),
                    }),
                  }),
                }),
                Object(r.jsx)(ke.Row, {
                  justify: 'center',
                  children: Object(r.jsx)('div', {
                    children: s
                      ? Object(r.jsx)(qe, {
                          className: i.chipContent,
                          children: Object(r.jsx)(M.a, {
                            size: W.c.size24,
                            text: s.username,
                          }),
                        })
                      : null,
                  }),
                }),
                Object(r.jsx)(ke.Row, {
                  justify: 'center',
                  children: Object(r.jsx)('div', {
                    children: ee
                      ? Object(r.jsxs)(qe, {
                          className: i.lockedChip,
                          children: [
                            Object(r.jsx)(I.a, {
                              className: i.lockIcon,
                              iconName: 'LockSolid',
                            }),
                            Object(r.jsx)(N.a, {
                              variant: 'smallPlus',
                              children: 'Locked',
                            }),
                          ],
                        })
                      : null,
                  }),
                }),
                Object(r.jsx)(B.a, {
                  children: Object(r.jsx)(N.a, {
                    variant: 'mediumPlus',
                    children: 'Objectives',
                  }),
                }),
                Object(r.jsxs)(ke.Row, {
                  children: [
                    Object(r.jsx)(ke.Col, {
                      xs: 12,
                      md: 6,
                      children: Object(r.jsx)(rt, {
                        context: t,
                        details: n,
                        items: d,
                        setItems: p,
                        type: 'Achieved',
                        setOtherItems: m,
                      }),
                    }),
                    Object(r.jsx)(ke.Col, {
                      xs: 12,
                      md: 6,
                      children: Object(r.jsx)(rt, {
                        context: t,
                        details: n,
                        items: j,
                        setItems: m,
                        type: 'Planned',
                        setOtherItems: p,
                      }),
                    }),
                  ],
                }),
                Object(r.jsx)(B.a, {
                  children: Object(r.jsx)(N.a, {
                    variant: 'mediumPlus',
                    children: 'Trainings',
                  }),
                }),
                Object(r.jsxs)(ke.Row, {
                  children: [
                    Object(r.jsx)(ke.Col, {
                      xs: 12,
                      md: 6,
                      children: Object(r.jsx)(rt, {
                        context: t,
                        details: n,
                        items: w,
                        setItems: S,
                        type: 'Training_Achieved',
                        setOtherItems: C,
                      }),
                    }),
                    Object(r.jsx)(ke.Col, {
                      xs: 12,
                      md: 6,
                      children: Object(r.jsx)(rt, {
                        context: t,
                        details: n,
                        items: x,
                        setItems: C,
                        type: 'Training_Planned',
                        setOtherItems: S,
                      }),
                    }),
                  ],
                }),
                Object(r.jsx)(B.a, {
                  children: Object(r.jsx)(N.a, {
                    variant: 'mediumPlus',
                    children: 'SWOT',
                  }),
                }),
                Object(r.jsxs)(ke.Row, {
                  nogutter: !0,
                  children: [
                    Object(r.jsx)(ke.Col, {
                      xs: 12,
                      md: 6,
                      children: Object(r.jsx)(rt, {
                        context: t,
                        details: n,
                        items: P,
                        setItems: R,
                        type: 'SWOT_S',
                      }),
                    }),
                    Object(r.jsx)(ke.Col, {
                      xs: 12,
                      md: 6,
                      children: Object(r.jsx)(rt, {
                        context: t,
                        details: n,
                        items: L,
                        setItems: F,
                        type: 'SWOT_W',
                      }),
                    }),
                    Object(r.jsx)(ke.Col, {
                      xs: 12,
                      md: 6,
                      children: Object(r.jsx)(rt, {
                        context: t,
                        details: n,
                        items: H,
                        setItems: Z,
                        type: 'SWOT_O',
                      }),
                    }),
                    Object(r.jsx)(ke.Col, {
                      xs: 12,
                      md: 6,
                      children: Object(r.jsx)(rt, {
                        context: t,
                        details: n,
                        items: q,
                        setItems: K,
                        type: 'SWOT_T',
                      }),
                    }),
                  ],
                }),
                Object(r.jsx)(ke.Row, {
                  children: Object(r.jsx)(ke.Col, {
                    xs: 12,
                    children: Object(r.jsx)(rt, {
                      context: t,
                      details: n,
                      items: Q,
                      setItems: X,
                      type: 'Feedback',
                    }),
                  }),
                }),
                Object(r.jsxs)(We, {
                  code: fe.a.securities.APPRAISAL_DETAILS_OTHER.code,
                  grant:
                    fe.a.securities.APPRAISAL_DETAILS_OTHER.grants.toggleLock,
                  children: [
                    ae
                      ? null
                      : Object(r.jsx)(ke.Row, {
                          align: 'center',
                          justify: 'center',
                          children: Object(r.jsx)(it.a, {
                            primary: !0,
                            iconProps: { iconName: ee ? 'Unlock' : 'Lock' },
                            onClick: c,
                            text: ee ? 'Unlock' : 'Lock',
                          }),
                        }),
                    Object(r.jsx)('div', { style: { padding: '20px' } }),
                  ],
                }),
              ],
            })
          );
        },
        lt = function (e) {
          var t = e.context,
            n = Object(a.useState)(null),
            s = Object(l.a)(n, 2),
            c = s[0],
            i = s[1],
            o = Object(a.useState)(null),
            d = Object(l.a)(o, 2),
            p = d[0],
            f = d[1],
            b = Object(h.h)().id,
            m = Object(h.h)().userId;
          Object(a.useEffect)(
            function () {
              i(null), f(null);
            },
            [m]
          );
          var O,
            x = (function () {
              var e = Object(g.a)(
                v.a.mark(function e() {
                  var t;
                  return v.a.wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          if (!m) {
                            e.next = 5;
                            break;
                          }
                          return (e.next = 3), Te.a.toggleLockPeriod(c.id, m);
                        case 3:
                          (t = e.sent),
                            i(function (e) {
                              return e
                                ? Object(u.a)(
                                    Object(u.a)({}, e),
                                    {},
                                    { users: t.users.slice() }
                                  )
                                : e;
                            });
                        case 5:
                        case 'end':
                          return e.stop();
                      }
                  }, e);
                })
              );
              return function () {
                return e.apply(this, arguments);
              };
            })();
          return (
            (O = m
              ? Object(r.jsx)(r.Fragment, {
                  children:
                    null === c || null === p
                      ? Object(r.jsx)(ct, {
                          periodId: b,
                          userId: m,
                          setUserDetails: f,
                          setPeriodDetails: i,
                        })
                      : Object(r.jsx)(ut, {
                          context: t,
                          periodDetails: c,
                          userDetails: p,
                          handleLockButton: x,
                        }),
                })
              : Object(r.jsx)(r.Fragment, {
                  children:
                    null === c
                      ? Object(r.jsx)(Re, { periodId: b, setPeriodDetails: i })
                      : Object(r.jsx)(st, { context: t, periodDetails: c }),
                })),
            Object(r.jsx)(j.a, { title: c ? c.name : 'App', children: O })
          );
        },
        dt = function () {
          var e = Object(a.useContext)(O.a);
          return Object(r.jsx)(ke.Container, {
            md: !0,
            children: Object(r.jsx)(Pe, {
              code: fe.a.securities.APPRAISAL_DETAILS.code,
              grant: fe.a.securities.APPRAISAL_DETAILS.grants.read,
              to: '/appraisals',
              failureNotification: {
                type: 'info',
                header: 'No access',
                content:
                  'You have no access to this page. Please contact your administrator',
              },
              children: Object(r.jsx)(lt, { context: e }),
            }),
          });
        },
        pt = function (e) {
          var t = e.isOpen,
            n = e.setOpen,
            s = e.handleCreate,
            c = Object(a.useState)(''),
            i = Object(l.a)(c, 2),
            o = i[0],
            u = i[1];
          return Object(r.jsx)(le.a, {
            isOpen: t,
            onDismiss: function () {
              return n(!1);
            },
            type: de.a.smallFixedFar,
            headerText: 'Create period',
            children: Object(r.jsx)('form', {
              onSubmit: function (e) {
                e.preventDefault(),
                  s(o).finally(function () {
                    u(''), n(!1);
                  });
              },
              children: Object(r.jsxs)(z.a, {
                verticalAlign: 'start',
                children: [
                  Object(r.jsx)(z.a.Item, {
                    tokens: { margin: '10px 0' },
                    children: Object(r.jsx)(Ke.a, {
                      label: 'Name',
                      value: o,
                      autoFocus: !0,
                      onChange: function (e) {
                        var t = e.target.value;
                        u(t);
                      },
                    }),
                  }),
                  Object(r.jsxs)(z.a, {
                    horizontal: !0,
                    horizontalAlign: 'space-evenly',
                    children: [
                      Object(r.jsx)(it.a, {
                        type: 'submit',
                        children: 'Create',
                      }),
                      Object(r.jsx)(S.a, {
                        onClick: function () {
                          return n(!1);
                        },
                        children: 'Cancel',
                      }),
                    ],
                  }),
                ],
              }),
            }),
          });
        },
        ft = function (e) {
          var t = e.item,
            n = e.isOpen,
            s = e.setOpen,
            c = e.handleEdit,
            i = Object(a.useState)(t ? t.name : ''),
            o = Object(l.a)(i, 2),
            u = o[0],
            d = o[1];
          return (
            Object(a.useEffect)(
              function () {
                d(t ? t.name : '');
              },
              [t]
            ),
            Object(r.jsx)(le.a, {
              isOpen: n,
              onDismiss: function () {
                return s(!1);
              },
              type: de.a.smallFixedFar,
              headerText: 'Edit period',
              children: Object(r.jsx)('form', {
                onSubmit: function (e) {
                  e.preventDefault(),
                    c(t.id, u).finally(function () {
                      d(''), s(!1);
                    });
                },
                children: Object(r.jsxs)(z.a, {
                  verticalAlign: 'start',
                  children: [
                    Object(r.jsx)(z.a.Item, {
                      tokens: { margin: '10px 0' },
                      children: Object(r.jsx)(Ke.a, {
                        label: 'Name',
                        value: u,
                        autoFocus: !0,
                        onChange: function (e) {
                          var t = e.target.value;
                          d(t);
                        },
                      }),
                    }),
                    Object(r.jsxs)(z.a, {
                      horizontal: !0,
                      horizontalAlign: 'space-evenly',
                      children: [
                        Object(r.jsx)(it.a, {
                          type: 'submit',
                          children: 'Update',
                        }),
                        Object(r.jsx)(S.a, {
                          onClick: function () {
                            return s(!1);
                          },
                          children: 'Cancel',
                        }),
                      ],
                    }),
                  ],
                }),
              }),
            })
          );
        };
      ft.defaultProps = { item: null };
      var bt = ft,
        jt = n(32),
        mt = fe.a.securities,
        ht = mt.APPRAISAL_PERIODS,
        Ot = mt.REPORTS,
        xt = function () {
          var e = Object(D.a)(),
            t = Object(h.g)(),
            n = Object(ke.useScreenClass)(),
            s = Object(a.useState)([]),
            c = Object(l.a)(s, 2),
            i = c[0],
            o = c[1],
            d = Object(a.useState)([]),
            p = Object(l.a)(d, 2),
            f = p[0],
            b = p[1],
            j = Object(a.useState)(!0),
            m = Object(l.a)(j, 2),
            x = m[0],
            C = m[1],
            y = Object(a.useState)(!1),
            w = Object(l.a)(y, 2),
            S = w[0],
            T = w[1],
            A = Object(a.useState)(!1),
            P = Object(l.a)(A, 2),
            R = P[0],
            E = P[1],
            L = Object(a.useState)(''),
            I = Object(l.a)(L, 2),
            F = I[0],
            U = I[1],
            M = Object(a.useContext)(O.a),
            W = Object(h.i)().path,
            H = Object(a.useState)({ count: 0, items: [] }),
            Z = Object(l.a)(H, 2),
            V = Z[0],
            G = Z[1],
            q = Object(a.useState)([
              {
                key: 'status',
                name: 'Status',
                fieldName: 'status',
                minWidth: 70,
                maxWidth: 70,
                isSortable: !0,
                isFilterable: !0,
                sort: function (e, t) {
                  return e.status > t.status ? -1 : 1;
                },
                onRender: function (t) {
                  return Object(r.jsx)(qe, {
                    style: {
                      backgroundColor:
                        'Finished' === t.status
                          ? e.palette.blue
                          : e.palette.green,
                      padding: '3px',
                    },
                    children: Object(r.jsx)(N.a, {
                      variant: 'xSmall',
                      style: { color: '#fff' },
                      children: t.status,
                    }),
                  });
                },
              },
              {
                key: 'name',
                name: 'Name',
                fieldName: 'name',
                data: 'string',
                isResizable: !0,
                isSortable: !0,
                isFilterable: !0,
                minWidth: 100,
                maxWidth: 350,
              },
              {
                key: 'createdUser',
                name: 'Created by',
                fieldName: 'createdUser',
                isPadded: !0,
                isResizable: !0,
                isSortable: !0,
                isFilterable: !0,
                filterValueAccessor: function (e) {
                  return e.createdUser.username;
                },
                sort: function (e, t) {
                  return e.createdUser.username < t.createdUser.username
                    ? -1
                    : 1;
                },
                data: 'string',
                minWidth: 200,
                maxWidth: 300,
                onRender: function (e) {
                  return Object(r.jsx)('div', {
                    children: e.createdUser.username,
                  });
                },
              },
              {
                key: 'createdDate',
                name: 'Created on',
                fieldName: 'createdDate',
                isResizable: !0,
                isPadded: !0,
                isSortable: !0,
                data: 'date',
                minWidth: 200,
                maxWidth: 300,
                onRender: function (e) {
                  return Object(r.jsx)('div', {
                    children: new Date(e.createdDate).toLocaleString(),
                  });
                },
              },
            ]),
            K = Object(l.a)(q, 1)[0],
            Y = Object(a.useState)(null),
            J = Object(l.a)(Y, 2),
            Q = J[0],
            X = J[1];
          Object(a.useEffect)(function () {
            function e() {
              return (e = Object(g.a)(
                v.a.mark(function e() {
                  var t;
                  return v.a.wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (e.next = 2), Te.a.getPeriods();
                        case 2:
                          (t = e.sent), o(t);
                        case 4:
                        case 'end':
                          return e.stop();
                      }
                  }, e);
                })
              )).apply(this, arguments);
            }
            !(function () {
              e.apply(this, arguments);
            })();
          }, []),
            Object(a.useEffect)(
              function () {
                X(
                  Object(u.a)(
                    Object(u.a)({}, K[3]),
                    {},
                    { isSorted: !0, isSortedDescending: !0 }
                  )
                );
              },
              [K]
            ),
            Object(a.useEffect)(
              function () {
                b(
                  x
                    ? i
                    : i.filter(function (e) {
                        return 'Finished' !== e.status;
                      })
                );
              },
              [x, i]
            );
          var _ = function (e) {
              t.push(''.concat(W, '/').concat(e.id));
            },
            $ = (function () {
              var e = Object(g.a)(
                v.a.mark(function e() {
                  var t;
                  return v.a.wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          if (!V.count) {
                            e.next = 6;
                            break;
                          }
                          return (
                            (t = V.items[0]),
                            (e.next = 4),
                            Te.a.finishPeriod(t.id)
                          );
                        case 4:
                          e.sent &&
                            (o(function (e) {
                              return e.map(function (e) {
                                return e.id === t.id
                                  ? Object(u.a)(
                                      Object(u.a)({}, t),
                                      {},
                                      { status: 'Finished' }
                                    )
                                  : e;
                              });
                            }),
                            k.a.notifySuccess(
                              "Period '".concat(t.name, "' finished")
                            ));
                        case 6:
                        case 'end':
                          return e.stop();
                      }
                  }, e);
                })
              );
              return function () {
                return e.apply(this, arguments);
              };
            })(),
            ee = (function () {
              var e = Object(g.a)(
                v.a.mark(function e(t) {
                  var n;
                  return v.a.wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          if (
                            !(
                              M.user &&
                              M.user.id &&
                              M.user.organization &&
                              M.user.organization.id
                            )
                          ) {
                            e.next = 6;
                            break;
                          }
                          return (
                            (e.next = 3),
                            Te.a.addPeriod({
                              name: t,
                              status: 'Active',
                              organizationId: M.user.organization.id,
                              createdUser: M.user.id,
                            })
                          );
                        case 3:
                          (n = e.sent),
                            o(function (e) {
                              return e.slice().concat(n);
                            }),
                            k.a.notifySuccess(
                              "Period '".concat(t, "' created")
                            );
                        case 6:
                        case 'end':
                          return e.stop();
                      }
                  }, e);
                })
              );
              return function (t) {
                return e.apply(this, arguments);
              };
            })(),
            te = (function () {
              var e = Object(g.a)(
                v.a.mark(function e(t, n) {
                  var r;
                  return v.a.wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          if (
                            !(
                              M.user &&
                              M.user.id &&
                              M.user.organization &&
                              M.user.organization.id &&
                              M.Authorize(ht.code, ht.grants.update)
                            )
                          ) {
                            e.next = 5;
                            break;
                          }
                          return (
                            (e.next = 3), Te.a.updatePeriod(t, { name: n })
                          );
                        case 3:
                          (r = e.sent),
                            o(function (e) {
                              return e.map(function (e) {
                                return e.id === r.id ? r : e;
                              });
                            });
                        case 5:
                        case 'end':
                          return e.stop();
                      }
                  }, e);
                })
              );
              return function (t, n) {
                return e.apply(this, arguments);
              };
            })(),
            ne = (function () {
              var e = Object(g.a)(
                v.a.mark(function e(t) {
                  var n;
                  return v.a.wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (e.prev = 0),
                              (e.next = 3),
                              jt.a.generateAppraisalReport({ periods: [t] })
                            );
                          case 3:
                            (n = e.sent) &&
                              (Object(we.downloadBlob)('appraisal.xlsx', n),
                              k.a.notifySuccess('Report generated')),
                              (e.next = 10);
                            break;
                          case 7:
                            (e.prev = 7),
                              (e.t0 = e.catch(0)),
                              k.a.notifyError(
                                'Cannot generate report -',
                                e.t0.message
                              );
                          case 10:
                          case 'end':
                            return e.stop();
                        }
                    },
                    e,
                    null,
                    [[0, 7]]
                  );
                })
              );
              return function (t) {
                return e.apply(this, arguments);
              };
            })();
          return Object(r.jsx)(r.Fragment, {
            children: Object(r.jsxs)(h.d, {
              children: [
                Object(r.jsx)(h.b, {
                  exact: !0,
                  path: W,
                  children: Object(r.jsxs)(ke.Container, {
                    md: !0,
                    children: [
                      Object(r.jsx)(ke.Row, {
                        children: Object(r.jsx)(ke.Col, {
                          xs: 12,
                          children: Object(r.jsx)(Be.a, { text: 'Appraisals' }),
                        }),
                      }),
                      Object(r.jsx)(B.a, {}),
                      Object(r.jsx)(ke.Row, {
                        children: Object(r.jsx)(ke.Col, {
                          xs: 12,
                          children: Object(r.jsxs)(z.a, {
                            horizontalAlign: 'stretch',
                            children: [
                              Object(r.jsxs)(ke.Row, {
                                align: 'start',
                                children: [
                                  Object(r.jsx)(ke.Col, {
                                    xs: 12,
                                    sm: 6,
                                    children: Object(r.jsx)(ve.a, {
                                      items: [
                                        {
                                          key: 'openItem',
                                          text: 'Open',
                                          disabled:
                                            0 === V.count ||
                                            !M.Authorize(
                                              ht.code,
                                              ht.grants.read
                                            ),
                                          iconProps: { iconName: 'OpenFile' },
                                          onClick: function () {
                                            return _(V.count && V.items[0]);
                                          },
                                        },
                                        {
                                          key: 'newItem',
                                          text: 'New',
                                          disabled: !M.Authorize(
                                            ht.code,
                                            ht.grants.create
                                          ),
                                          iconProps: { iconName: 'Add' },
                                          onClick: function () {
                                            return T(!0);
                                          },
                                        },
                                        {
                                          key: 'editItem',
                                          text: 'Edit',
                                          disabled:
                                            0 === V.count ||
                                            !M.Authorize(
                                              ht.code,
                                              ht.grants.update
                                            ),
                                          iconProps: { iconName: 'Edit' },
                                          onClick: function () {
                                            return E(!0);
                                          },
                                        },
                                        {
                                          key: 'finishItem',
                                          text: 'Finish',
                                          disabled:
                                            0 === V.count ||
                                            (V.count &&
                                              'Finished' ===
                                                V.items[0].status) ||
                                            !M.Authorize(
                                              ht.code,
                                              ht.grants.finish
                                            ),
                                          iconProps: {
                                            iconName: 'SaveAndClose',
                                          },
                                          onClick: $,
                                        },
                                        {
                                          key: 'generateReport',
                                          text: 'Appraisal report',
                                          disabled:
                                            0 === V.count ||
                                            !M.Authorize(
                                              Ot.code,
                                              Ot.grants.read
                                            ),
                                          iconProps: {
                                            iconName: 'MobileReport',
                                          },
                                          onClick: function () {
                                            return ne(
                                              V.count ? V.items[0].id : null
                                            );
                                          },
                                        },
                                      ],
                                    }),
                                  }),
                                  Object(r.jsx)(ke.Col, {
                                    xs: 12,
                                    sm: 6,
                                    children: Object(r.jsx)(z.a, {
                                      horizontalAlign:
                                        'xs' === n ? 'start' : 'end',
                                      horizontal: !0,
                                      children: Object(r.jsxs)(z.a, {
                                        verticalAlign: 'center',
                                        horizontalAlign: 'start',
                                        children: [
                                          Object(r.jsx)(ge.a, {
                                            placeholder: 'Search',
                                            styles: { root: { minWidth: 250 } },
                                            value: F,
                                            onChange: function (e, t) {
                                              return U(t);
                                            },
                                          }),
                                          Object(r.jsx)(Ce.a, {
                                            label: 'Show closed',
                                            checked: x,
                                            onChange: function () {
                                              return C(function (e) {
                                                return !e;
                                              });
                                            },
                                            styles: {
                                              root: {
                                                paddingTop: e.spacing.s1,
                                              },
                                            },
                                          }),
                                        ],
                                      }),
                                    }),
                                  }),
                                ],
                              }),
                              Object(r.jsx)(B.a, {}),
                              Object(r.jsx)(Se.a, {
                                items: f,
                                columns: K,
                                selectionMode: ye.b.single,
                                onItemInvoked: _,
                                searchValue: F,
                                sortedCol: Q,
                                setSelectionDetails: G,
                              }),
                              Object(r.jsx)(pt, {
                                isOpen: S,
                                setOpen: T,
                                handleCreate: ee,
                              }),
                              Object(r.jsx)(bt, {
                                item: V.count ? V.items[0] : null,
                                isOpen: R,
                                setOpen: E,
                                handleEdit: te,
                              }),
                            ],
                          }),
                        }),
                      }),
                    ],
                  }),
                }),
                Object(r.jsx)(h.b, {
                  exact: !0,
                  path: ''.concat(W, '/:id/user/:userId'),
                  children: Object(r.jsx)(dt, { ctx: M, setCtx: M.setContext }),
                }),
                Object(r.jsx)(h.b, {
                  path: ''.concat(W, '/:id'),
                  children: Object(r.jsx)(dt, { ctx: M, setCtx: M.setContext }),
                }),
              ],
            }),
          });
        },
        vt = function () {
          return Object(r.jsx)(r.Fragment, {
            children: Object(r.jsx)('h1', { children: 'Settings general' }),
          });
        },
        gt = n(30),
        Ct = {
          baseUrl: '/api/teams',
          validate: function (e) {
            if (!e) throw new Error('Team name missing');
            return !0;
          },
          getTeams: function () {
            var e = this;
            return Object(g.a)(
              v.a.mark(function t() {
                var n;
                return v.a.wrap(
                  function (t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          return (t.prev = 0), (t.next = 3), y.a.get(e.baseUrl);
                        case 3:
                          if (200 !== (n = t.sent).status) {
                            t.next = 6;
                            break;
                          }
                          return t.abrupt('return', n.data);
                        case 6:
                          throw new Error(
                            'Server response: '
                              .concat(n.status, ' - ')
                              .concat(n.statusText)
                          );
                        case 9:
                          throw (
                            ((t.prev = 9),
                            (t.t0 = t.catch(0)),
                            k.a.notifyError(
                              (t.t0.response.data &&
                                t.t0.response.data.error) ||
                                t.t0.message
                            ),
                            t.t0)
                          );
                        case 13:
                        case 'end':
                          return t.stop();
                      }
                  },
                  t,
                  null,
                  [[0, 9]]
                );
              })
            )();
          },
          addTeam: function (e) {
            var t = this;
            return Object(g.a)(
              v.a.mark(function n() {
                var r;
                return v.a.wrap(
                  function (n) {
                    for (;;)
                      switch ((n.prev = n.next)) {
                        case 0:
                          return (
                            (n.prev = 0),
                            t.validate(e),
                            (n.next = 4),
                            y.a.post(t.baseUrl, { team: e })
                          );
                        case 4:
                          if (200 !== (r = n.sent).status) {
                            n.next = 7;
                            break;
                          }
                          return n.abrupt('return', r.data);
                        case 7:
                          throw new Error(
                            'Server response: '
                              .concat(r.status, ' - ')
                              .concat(r.statusText)
                          );
                        case 10:
                          throw (
                            ((n.prev = 10),
                            (n.t0 = n.catch(0)),
                            k.a.notifyError(
                              (n.t0.response.data &&
                                n.t0.response.data.error) ||
                                n.t0.message
                            ),
                            n.t0)
                          );
                        case 14:
                        case 'end':
                          return n.stop();
                      }
                  },
                  n,
                  null,
                  [[0, 10]]
                );
              })
            )();
          },
        },
        yt = n(68),
        kt = n(394),
        wt = function (e) {
          var t,
            n = e.isOpen,
            s = e.user,
            c = e.setOpen,
            i = e.handleEdit,
            o = e.teams,
            d = e.organizations,
            p = e.roles,
            f = Object(a.useState)([]),
            b = Object(l.a)(f, 2),
            j = b[0],
            m = b[1],
            h = Object(a.useState)(null),
            O = Object(l.a)(h, 2),
            x = O[0],
            v = O[1],
            g = Object(a.useState)([]),
            C = Object(l.a)(g, 2),
            y = C[0],
            k = C[1],
            w = Object(a.useState)(null),
            T = Object(l.a)(w, 2),
            A = T[0],
            P = T[1],
            R = function (e) {
              return function (t, n) {
                n.selected
                  ? (function (e, t) {
                      t(function (t) {
                        return t.concat(e);
                      });
                    })(n.data, e)
                  : (function (e, t) {
                      t(function (t) {
                        return t.filter(function (t) {
                          return t.id !== e.id;
                        });
                      });
                    })(n.data, e);
              };
            };
          return (
            Object(a.useEffect)(
              function () {
                s &&
                  (m(s.teams),
                  v(s.team),
                  k(s.organizations),
                  s.role && P(s.role));
              },
              [s]
            ),
            Object(a.useEffect)(
              function () {
                (null === x || void 0 === x ? void 0 : x.id) &&
                  !j.find(function (e) {
                    return (
                      e.id === (null === x || void 0 === x ? void 0 : x.id)
                    );
                  }) &&
                  v(null);
              },
              [j]
            ),
            Object(r.jsx)(r.Fragment, {
              children: Object(r.jsx)(le.a, {
                isOpen: n,
                onDismiss: function () {
                  return c(!1);
                },
                type: de.a.smallFixedFar,
                headerText: 'Edit user',
                children: Object(r.jsx)('form', {
                  onSubmit: function (e) {
                    e.preventDefault(),
                      i(
                        Object(u.a)(
                          Object(u.a)({}, s),
                          {},
                          { teams: j, team: x, organizations: y, role: A }
                        )
                      ).finally(function () {
                        c(!1);
                      });
                  },
                  children: Object(r.jsxs)(z.a, {
                    verticalAlign: 'start',
                    children: [
                      Object(r.jsxs)(z.a.Item, {
                        tokens: { margin: '10px 0' },
                        children: [
                          Object(r.jsx)(kt.a, {
                            label: 'Teams',
                            multiSelect: !0,
                            id: 'user-edit-select-team',
                            useComboBoxAsMenuWidth: !0,
                            selectedKey: j.map(function (e) {
                              return e.id;
                            }),
                            onChange: R(m),
                            options: o.map(function (e) {
                              return { key: e.id, text: e.name, data: e };
                            }),
                          }),
                          Object(r.jsx)(kt.a, {
                            label: 'Primary team',
                            id: 'user-edit-select-primary-team',
                            useComboBoxAsMenuWidth: !0,
                            selectedKey:
                              null === x || void 0 === x ? void 0 : x.id,
                            onChange: function (e, t) {
                              return v(t.data);
                            },
                            options: j.map(function (e) {
                              return { key: e.id, text: e.name, data: e };
                            }),
                          }),
                          Object(r.jsx)(kt.a, {
                            label: 'Organizations',
                            multiSelect: !0,
                            id: 'user-edit-select-organizations',
                            useComboBoxAsMenuWidth: !0,
                            selectedKey: y.map(function (e) {
                              return e.id;
                            }),
                            onChange: R(k),
                            options: d.map(function (e) {
                              return { key: e.id, text: e.name, data: e };
                            }),
                          }),
                          Object(r.jsx)(kt.a, {
                            label: 'Role',
                            id: 'user-edit-select-role',
                            useComboBoxAsMenuWidth: !0,
                            selectedKey: A && A.id,
                            onChange:
                              ((t = P),
                              function (e, n) {
                                t(n.data);
                              }),
                            options: p.map(function (e) {
                              return { key: e.id, text: e.name, data: e };
                            }),
                          }),
                        ],
                      }),
                      Object(r.jsxs)(z.a, {
                        horizontal: !0,
                        horizontalAlign: 'space-evenly',
                        children: [
                          Object(r.jsx)(it.a, {
                            type: 'submit',
                            children: 'Update',
                          }),
                          Object(r.jsx)(S.a, {
                            onClick: function () {
                              return c(!1);
                            },
                            children: 'Cancel',
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
              }),
            })
          );
        };
      wt.defaultProps = { user: null, teams: [], organizations: [], roles: [] };
      var St = wt,
        Tt = function () {
          var e = Object(a.useState)([]),
            t = Object(l.a)(e, 2),
            n = t[0],
            s = t[1],
            c = Object(a.useState)([]),
            i = Object(l.a)(c, 2),
            o = i[0],
            d = i[1],
            p = Object(a.useState)([]),
            f = Object(l.a)(p, 2),
            b = f[0],
            j = f[1],
            m = Object(a.useState)(!1),
            h = Object(l.a)(m, 2),
            x = h[0],
            C = h[1],
            y = Object(a.useContext)(O.a),
            k = Object(a.useState)({ count: 0, items: [], indices: [] }),
            S = Object(l.a)(k, 2),
            T = S[0],
            A = S[1],
            P = Object(a.useState)([
              {
                key: 'username',
                name: ' Username',
                fieldName: 'username',
                isSortable: !0,
                isFilterable: !0,
                isResizable: !0,
                iconName: 'UserOptional',
                minWidth: 100,
                maxWidth: 300,
              },
              {
                key: 'teams',
                name: ' Teams',
                fieldName: 'teams',
                onRender: function (e) {
                  return e.teams
                    .map(function (e) {
                      return e.name;
                    })
                    .join(', ');
                },
                isSortable: !0,
                isFilterable: !0,
                isResizable: !0,
                sort: function (e, t) {
                  return e.teams[0].name > t.teams[0].name ? -1 : 1;
                },
                filterValueAccessor: function (e) {
                  return e.teams
                    .map(function (e) {
                      return e.name;
                    })
                    .join(',');
                },
                iconName: 'Teamwork',
                minWidth: 100,
                maxWidth: 500,
              },
              {
                key: 'organizations',
                name: ' Organizations',
                fieldName: 'organizations',
                onRender: function (e) {
                  return e.organizations
                    .map(function (e) {
                      return e.name;
                    })
                    .join(', ');
                },
                isSortable: !0,
                isFilterable: !0,
                isResizable: !0,
                sort: function (e, t) {
                  var n, r;
                  return (null === (n = e.organizations[0]) || void 0 === n
                    ? void 0
                    : n.name) >
                    (null === (r = t.organizations[0]) || void 0 === r
                      ? void 0
                      : r.name)
                    ? -1
                    : 1;
                },
                filterValueAccessor: function (e) {
                  return e.organizations
                    .map(function (e) {
                      return e.name;
                    })
                    .join(',');
                },
                iconName: 'Org',
                minWidth: 50,
                maxWidth: 200,
              },
              {
                key: 'role',
                name: ' Role',
                onRender: function (e) {
                  var t;
                  return (
                    e.role &&
                    (null === (t = e.role) || void 0 === t ? void 0 : t.name)
                  );
                },
                isSortable: !0,
                isFilterable: !0,
                isResizable: !0,
                sort: function (e, t) {
                  var n, r;
                  return (null === (n = e.role) || void 0 === n
                    ? void 0
                    : n.name) >
                    (null === (r = t.role) || void 0 === r ? void 0 : r.name)
                    ? -1
                    : 1;
                },
                filterValueAccessor: function (e) {
                  var t;
                  return (
                    e.role &&
                    (null === (t = e.role) || void 0 === t ? void 0 : t.name)
                  );
                },
                iconName: 'Signin',
                isPadded: !0,
              },
            ]),
            R = Object(l.a)(P, 1)[0],
            E = Object(a.useState)({
              key: 'role',
              name: ' Role',
              onRender: function (e) {
                var t;
                return (
                  e.role &&
                  (null === (t = e.role) || void 0 === t ? void 0 : t.name)
                );
              },
              isSortable: !0,
              isFilterable: !0,
              isResizable: !0,
              sort: function (e, t) {
                var n, r;
                return (null === (n = e.role) || void 0 === n
                  ? void 0
                  : n.name) >
                  (null === (r = t.role) || void 0 === r ? void 0 : r.name)
                  ? -1
                  : 1;
              },
              filterValueAccessor: function (e) {
                var t;
                return (
                  e.role &&
                  (null === (t = e.role) || void 0 === t ? void 0 : t.name)
                );
              },
              iconName: 'Signin',
              isPadded: !0,
              isSorted: !0,
              isSortedDescending: !1,
            }),
            D = Object(l.a)(E, 1)[0],
            L = (function () {
              var e = Object(g.a)(
                v.a.mark(function e(t) {
                  var r, a, c, i, o;
                  return v.a.wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          if (
                            ((r = n.findIndex(function (e) {
                              return e.id === t.id;
                            })),
                            (a = n.slice()),
                            -1 === r)
                          ) {
                            e.next = 10;
                            break;
                          }
                          return (
                            (i = t.organization || null),
                            !t.organization && t.organizations.length
                              ? (i = t.organizations[0].id)
                              : 0 === t.organizations.length && (i = null),
                            (e.next = 7),
                            Ee.updateSettingsUser(
                              t.id,
                              Object(u.a)(
                                Object(u.a)({}, t),
                                {},
                                {
                                  teams: t.teams.map(function (e) {
                                    return e.id;
                                  }),
                                  team:
                                    (null === (c = t.team) || void 0 === c
                                      ? void 0
                                      : c.id) || null,
                                  organizations: t.organizations.map(function (
                                    e
                                  ) {
                                    return e.id;
                                  }),
                                  organization: i,
                                }
                              )
                            )
                          );
                        case 7:
                          (o = e.sent) && (a[r] = o), s(a);
                        case 10:
                        case 'end':
                          return e.stop();
                      }
                  }, e);
                })
              );
              return function (t) {
                return e.apply(this, arguments);
              };
            })();
          return (
            Object(a.useEffect)(function () {
              function e() {
                return (e = Object(g.a)(
                  v.a.mark(function e() {
                    var t, n, r, a, c;
                    return v.a.wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (e.next = 2),
                              Promise.all([
                                Ee.getSettingsUsers(),
                                Ct.getTeams(),
                                w.getRoles(),
                              ])
                            );
                          case 2:
                            (t = e.sent),
                              (n = Object(l.a)(t, 3)),
                              (r = n[0]),
                              (a = n[1]),
                              (c = n[2]),
                              s(function () {
                                return r;
                              }),
                              d(function () {
                                return a;
                              }),
                              j(function () {
                                return c;
                              });
                          case 10:
                          case 'end':
                            return e.stop();
                        }
                    }, e);
                  })
                )).apply(this, arguments);
              }
              !(function () {
                e.apply(this, arguments);
              })();
            }, []),
            Object(r.jsxs)(ke.Container, {
              fluid: !0,
              children: [
                Object(r.jsx)(ke.Row, {
                  justify: 'center',
                  children: Object(r.jsx)(Be.a, { text: 'Users Settings' }),
                }),
                Object(r.jsx)(B.a, {}),
                Object(r.jsx)(ke.Row, {
                  align: 'start',
                  children: Object(r.jsx)(ke.Col, {
                    xs: 12,
                    children: Object(r.jsx)(yt.a, {
                      commandItems: [
                        {
                          key: 'details',
                          text: 'Details',
                          disabled: !0,
                          iconProps: { iconName: 'ProfileSearch' },
                        },
                        {
                          key: 'editItem',
                          text: 'Edit',
                          disabled: 0 === T.count,
                          iconProps: { iconName: 'Edit' },
                          onClick: function () {
                            return C(!0);
                          },
                        },
                      ],
                      tableProps: {
                        items: n,
                        columns: R,
                        selectionMode: ye.b.single,
                        onItemInvoked: function () {
                          return C(!0);
                        },
                        layoutMode: gt.e.justified,
                        sortedCol: D,
                        setSelectionDetails: A,
                      },
                    }),
                  }),
                }),
                Object(r.jsx)(St, {
                  isOpen: x,
                  handleEdit: L,
                  setOpen: C,
                  user: T.count ? T.items[0] : null,
                  teams: o,
                  organizations: y.user.organizations,
                  roles: b,
                }),
              ],
            })
          );
        },
        At = function () {
          return Object(r.jsx)('h1', { children: 'AppraisalPeriods Settings' });
        },
        Pt = function () {
          return Object(r.jsx)('h1', { children: 'AppraisalItems Settings' });
        },
        Rt = n(378),
        Et = n(367),
        Dt = n(23),
        Lt = function (e) {
          var t = e.setLoaded,
            n = e.setPermissionCodes,
            r = e.setRoles,
            s = e.setUsers,
            c = e.setRolePermissions,
            i = e.setUserPermissions;
          return (
            Object(a.useEffect)(
              function () {
                function e() {
                  return (e = Object(g.a)(
                    v.a.mark(function e() {
                      var a, o, l, d, p, f, b;
                      return v.a.wrap(function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (e.next = 2), w.getPermissionCodes();
                            case 2:
                              return (
                                (a = e.sent),
                                n(
                                  a.sort(function (e, t) {
                                    return e.code < t.code ? -1 : 1;
                                  })
                                ),
                                (e.next = 6),
                                w.getRoles()
                              );
                            case 6:
                              return (
                                (o = e.sent),
                                r(
                                  o.sort(function (e, t) {
                                    return e.name < t.name ? -1 : 1;
                                  })
                                ),
                                (e.next = 10),
                                Ee.getSettingsUsers()
                              );
                            case 10:
                              return (
                                (l = e.sent),
                                s(
                                  l.sort(function (e, t) {
                                    return e.username < t.username ? -1 : 1;
                                  })
                                ),
                                (e.next = 14),
                                w.getRolesSecurities()
                              );
                            case 14:
                              return (
                                (d = e.sent),
                                (p = {}),
                                d.forEach(function (e) {
                                  p[e.reference.name] = Object(u.a)(
                                    Object(u.a)({}, p[e.reference.name]),
                                    {},
                                    Object(Dt.a)({}, e.code.code, e)
                                  );
                                }),
                                c(p),
                                (e.next = 20),
                                w.getOrganizationUsersSecurities()
                              );
                            case 20:
                              (f = e.sent),
                                (b = {}),
                                f.forEach(function (e) {
                                  b[e.reference.username] = Object(u.a)(
                                    Object(u.a)({}, b[e.reference.username]),
                                    {},
                                    Object(Dt.a)({}, e.code.code, e)
                                  );
                                }),
                                i(b),
                                t(!0);
                            case 25:
                            case 'end':
                              return e.stop();
                          }
                      }, e);
                    })
                  )).apply(this, arguments);
                }
                !(function () {
                  e.apply(this, arguments);
                })();
              },
              [n, t, r, s, c, i]
            ),
            null
          );
        },
        Nt = n(63),
        It = n(88),
        Ft = Object(E.a)(function (e) {
          return {
            root: { '& > * + *': { marginTop: e.spacing.m } },
            autocomplete: { marginTop: e.spacing.l2 },
            secondaryText: { color: e.palette.neutralTertiary },
            searchBox: {
              alignSelf: 'center',
              marginLeft: e.spacing.m,
              minWidth: 200,
            },
          };
        }),
        Ut = function (e) {
          var t = e.codes,
            n = e.roles,
            s = e.rolePermissions,
            c = e.setRolePermissions,
            i = e.selectedRole,
            o = e.setSelectedRole,
            d = Ft(),
            p = Object(a.useState)([]),
            f = Object(l.a)(p, 2),
            b = f[0],
            j = f[1],
            m = Object(a.useState)(''),
            h = Object(l.a)(m, 2),
            O = h[0],
            x = h[1],
            C = function (e, t, n) {
              j(
                n
                  ? function (e) {
                      return [].concat(Object(Nt.a)(e), [t.code]);
                    }
                  : function (e) {
                      return e.filter(function (e) {
                        return e !== t.code;
                      });
                    }
              );
            },
            y = function (e, t) {
              x(t);
            },
            k = function (e, t, n) {
              c(function (r) {
                return Object(u.a)(
                  Object(u.a)({}, r),
                  {},
                  Object(Dt.a)(
                    {},
                    e.name,
                    Object(u.a)(
                      Object(u.a)({}, r[e.name]),
                      {},
                      Object(Dt.a)({}, t.code, n)
                    )
                  )
                );
              });
            },
            S = (function () {
              var e = Object(g.a)(
                v.a.mark(function e(t, n, r) {
                  var a;
                  return v.a.wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.next = 2),
                            w.addPermission({
                              grants: [r],
                              code: n.id,
                              permissionType: 'Role',
                              reference: t.id,
                            })
                          );
                        case 2:
                          return (a = e.sent), e.abrupt('return', a);
                        case 4:
                        case 'end':
                          return e.stop();
                      }
                  }, e);
                })
              );
              return function (t, n, r) {
                return e.apply(this, arguments);
              };
            })(),
            T = (function () {
              var e = Object(g.a)(
                v.a.mark(function e(t) {
                  var n;
                  return v.a.wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (e.next = 2), w.updatePermission(t.id, t);
                        case 2:
                          return (n = e.sent), e.abrupt('return', n);
                        case 4:
                        case 'end':
                          return e.stop();
                      }
                  }, e);
                })
              );
              return function (t) {
                return e.apply(this, arguments);
              };
            })(),
            A = (function () {
              var e = Object(g.a)(
                v.a.mark(function e(t) {
                  var n;
                  return v.a.wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (e.prev = 0),
                              (e.next = 3),
                              w.deletePermission(t.id)
                            );
                          case 3:
                            return (n = e.sent), e.abrupt('return', n);
                          case 7:
                            return (
                              (e.prev = 7),
                              (e.t0 = e.catch(0)),
                              e.abrupt('return', null)
                            );
                          case 10:
                          case 'end':
                            return e.stop();
                        }
                    },
                    e,
                    null,
                    [[0, 7]]
                  );
                })
              );
              return function (t) {
                return e.apply(this, arguments);
              };
            })(),
            P = function (e, t, n) {
              return (function () {
                var r = Object(g.a)(
                  v.a.mark(function r(a) {
                    var c, i, o, l, d;
                    return v.a.wrap(function (r) {
                      for (;;)
                        switch ((r.prev = r.next)) {
                          case 0:
                            if ((a.persist(), s[e.name] && s[e.name][t.code])) {
                              r.next = 8;
                              break;
                            }
                            return (r.next = 4), S(e, t, n);
                          case 4:
                            (c = r.sent) && k(e, t, c), (r.next = 28);
                            break;
                          case 8:
                            if (!a.target.checked) {
                              r.next = 16;
                              break;
                            }
                            return (
                              (i = [].concat(
                                Object(Nt.a)(s[e.name][t.code].grants),
                                [n]
                              )),
                              (r.next = 12),
                              T(
                                Object(u.a)(
                                  Object(u.a)({}, s[e.name][t.code]),
                                  {},
                                  { grants: i }
                                )
                              )
                            );
                          case 12:
                            (o = r.sent) && k(e, t, o), (r.next = 28);
                            break;
                          case 16:
                            if (a.target.checked) {
                              r.next = 28;
                              break;
                            }
                            if (
                              0 !==
                              (l = s[e.name][t.code].grants.filter(function (
                                e
                              ) {
                                return e !== n;
                              })).length
                            ) {
                              r.next = 24;
                              break;
                            }
                            return (r.next = 21), A(s[e.name][t.code]);
                          case 21:
                            k(e, t, null), (r.next = 28);
                            break;
                          case 24:
                            return (
                              (r.next = 26),
                              T(
                                Object(u.a)(
                                  Object(u.a)({}, s[e.name][t.code]),
                                  {},
                                  { grants: l }
                                )
                              )
                            );
                          case 26:
                            (d = r.sent) && k(e, t, d);
                          case 28:
                          case 'end':
                            return r.stop();
                        }
                    }, r);
                  })
                );
                return function (e) {
                  return r.apply(this, arguments);
                };
              })();
            },
            R = function (e, t, n) {
              var r = s[e.name] && s[e.name][t.code];
              return !!r && -1 !== r.grants.indexOf(n);
            };
          return Object(r.jsxs)(ke.Container, {
            fluid: !0,
            className: d.root,
            children: [
              Object(r.jsx)(ke.Row, {
                justify: 'center',
                children: Object(r.jsx)(ke.Col, {
                  xs: 12,
                  md: 4,
                  children: Object(r.jsx)(Fe, {
                    className: d.autocomplete,
                    options: n.map(function (e) {
                      return { key: e.id, data: e };
                    }),
                    getTextFromItem: function (e) {
                      return e.data.name;
                    },
                    selected: { key: i.id, data: i },
                    onSelect: function (e) {
                      return o(e.data);
                    },
                  }),
                }),
              }),
              Object(r.jsx)(ke.Row, {
                children: Object(r.jsx)(ke.Col, {
                  xs: 12,
                  children: Object(r.jsx)(ve.a, {
                    items: [
                      {
                        key: 'expandAll',
                        text: ''.concat(
                          b.length === t.length ? 'Collapse' : 'Expand',
                          ' All'
                        ),
                        iconProps: {
                          iconName: ''.concat(
                            b.length === t.length
                              ? 'ChevronFold10'
                              : 'ChevronUnfold10'
                          ),
                        },
                        onClick: function () {
                          b.length === t.length
                            ? j([])
                            : j(
                                t.map(function (e) {
                                  return e.code;
                                })
                              );
                        },
                        buttonStyles: { root: { minWidth: '120px' } },
                      },
                      {
                        key: 'search',
                        onRender: function () {
                          return Object(r.jsx)(ge.a, {
                            className: d.searchBox,
                            value: O,
                            onChange: y,
                            onClear: function () {
                              return x('');
                            },
                          });
                        },
                      },
                    ],
                    styles: { root: { paddingLeft: 0 } },
                  }),
                }),
              }),
              Object(r.jsx)(ke.Row, {
                children: (function () {
                  if (i) {
                    var e = t.filter(function (e) {
                      return (
                        -1 !== e.code.toLowerCase().indexOf(O.toLowerCase())
                      );
                    });
                    return Object(r.jsx)(It.a, {
                      items: e.map(function (e) {
                        return Object(u.a)(
                          Object(u.a)({}, e),
                          {},
                          { text: e.code, isOpen: -1 !== b.indexOf(e.code) }
                        );
                      }),
                      getKey: function (e) {
                        return e.id;
                      },
                      headerProps: {
                        onRenderHeaderText: function (e) {
                          return Object(r.jsxs)('div', {
                            children: [
                              Object(r.jsx)(N.a, {
                                variant: 'mediumPlus',
                                block: !0,
                                children: e.code,
                              }),
                              Object(r.jsx)(N.a, {
                                variant: 'medium',
                                className: d.secondaryText,
                                children: e.description,
                              }),
                            ],
                          });
                        },
                      },
                      onRenderItem: function (e) {
                        return Object(r.jsx)(z.a, {
                          verticalAlign: 'start',
                          tokens: { childrenGap: 3 },
                          children: e.grants.map(function (t) {
                            return Object(r.jsx)(
                              Ce.a,
                              {
                                label: t,
                                checked: R(i, e, t),
                                onChange: P(i, e, t),
                              },
                              ''.concat(e.id, '-').concat(t)
                            );
                          }),
                        });
                      },
                      onToggle: C,
                    });
                  }
                  return null;
                })(),
              }),
            ],
          });
        },
        zt = Object(E.a)(function (e) {
          return {
            root: { '& > * + *': { marginTop: e.spacing.m } },
            autocomplete: { marginTop: e.spacing.l2 },
            secondaryText: { color: e.palette.neutralTertiary },
            searchBox: {
              alignSelf: 'center',
              marginLeft: e.spacing.m,
              minWidth: 200,
            },
          };
        }),
        Mt = function (e) {
          var t = e.codes,
            n = e.users,
            s = e.userPermissions,
            c = e.setUserPermissions,
            i = e.selectedUser,
            o = e.setSelectedUser,
            d = zt(),
            p = Object(a.useState)([]),
            f = Object(l.a)(p, 2),
            b = f[0],
            j = f[1],
            m = Object(a.useState)(''),
            h = Object(l.a)(m, 2),
            O = h[0],
            x = h[1],
            C = function (e, t, n) {
              j(
                n
                  ? function (e) {
                      return [].concat(Object(Nt.a)(e), [t.code]);
                    }
                  : function (e) {
                      return e.filter(function (e) {
                        return e !== t.code;
                      });
                    }
              );
            },
            y = function (e, t) {
              x(t);
            },
            k = function (e, t, n) {
              c(function (r) {
                return Object(u.a)(
                  Object(u.a)({}, r),
                  {},
                  Object(Dt.a)(
                    {},
                    e.username,
                    Object(u.a)(
                      Object(u.a)({}, r[e.username]),
                      {},
                      Object(Dt.a)({}, t.code, n)
                    )
                  )
                );
              });
            },
            S = (function () {
              var e = Object(g.a)(
                v.a.mark(function e(t, n, r) {
                  var a;
                  return v.a.wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.next = 2),
                            w.addPermission({
                              grants: [r],
                              code: n.id,
                              permissionType: 'User',
                              reference: t.id,
                            })
                          );
                        case 2:
                          return (a = e.sent), e.abrupt('return', a);
                        case 4:
                        case 'end':
                          return e.stop();
                      }
                  }, e);
                })
              );
              return function (t, n, r) {
                return e.apply(this, arguments);
              };
            })(),
            T = (function () {
              var e = Object(g.a)(
                v.a.mark(function e(t) {
                  var n;
                  return v.a.wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (e.next = 2), w.updatePermission(t.id, t);
                        case 2:
                          return (n = e.sent), e.abrupt('return', n);
                        case 4:
                        case 'end':
                          return e.stop();
                      }
                  }, e);
                })
              );
              return function (t) {
                return e.apply(this, arguments);
              };
            })(),
            A = (function () {
              var e = Object(g.a)(
                v.a.mark(function e(t) {
                  var n;
                  return v.a.wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (e.prev = 0),
                              (e.next = 3),
                              w.deletePermission(t.id)
                            );
                          case 3:
                            return (n = e.sent), e.abrupt('return', n);
                          case 7:
                            return (
                              (e.prev = 7),
                              (e.t0 = e.catch(0)),
                              e.abrupt('return', null)
                            );
                          case 10:
                          case 'end':
                            return e.stop();
                        }
                    },
                    e,
                    null,
                    [[0, 7]]
                  );
                })
              );
              return function (t) {
                return e.apply(this, arguments);
              };
            })(),
            P = function (e, t, n) {
              return (function () {
                var r = Object(g.a)(
                  v.a.mark(function r(a) {
                    var c, i, o, l, d;
                    return v.a.wrap(function (r) {
                      for (;;)
                        switch ((r.prev = r.next)) {
                          case 0:
                            if (
                              (a.persist(),
                              s[e.username] && s[e.username][t.code])
                            ) {
                              r.next = 8;
                              break;
                            }
                            return (r.next = 4), S(e, t, n);
                          case 4:
                            (c = r.sent) && k(e, t, c), (r.next = 28);
                            break;
                          case 8:
                            if (!a.target.checked) {
                              r.next = 16;
                              break;
                            }
                            return (
                              (i = [].concat(
                                Object(Nt.a)(s[e.username][t.code].grants),
                                [n]
                              )),
                              (r.next = 12),
                              T(
                                Object(u.a)(
                                  Object(u.a)({}, s[e.username][t.code]),
                                  {},
                                  { grants: i }
                                )
                              )
                            );
                          case 12:
                            (o = r.sent) && k(e, t, o), (r.next = 28);
                            break;
                          case 16:
                            if (a.target.checked) {
                              r.next = 28;
                              break;
                            }
                            if (
                              0 !==
                              (l = s[e.username][t.code].grants.filter(
                                function (e) {
                                  return e !== n;
                                }
                              )).length
                            ) {
                              r.next = 24;
                              break;
                            }
                            return (r.next = 21), A(s[e.username][t.code]);
                          case 21:
                            k(e, t, null), (r.next = 28);
                            break;
                          case 24:
                            return (
                              (r.next = 26),
                              T(
                                Object(u.a)(
                                  Object(u.a)({}, s[e.username][t.code]),
                                  {},
                                  { grants: l }
                                )
                              )
                            );
                          case 26:
                            (d = r.sent) && k(e, t, d);
                          case 28:
                          case 'end':
                            return r.stop();
                        }
                    }, r);
                  })
                );
                return function (e) {
                  return r.apply(this, arguments);
                };
              })();
            },
            R = function (e, t, n) {
              var r = s[e.username] && s[e.username][t.code];
              return !!r && -1 !== r.grants.indexOf(n);
            };
          return Object(r.jsxs)(ke.Container, {
            fluid: !0,
            className: d.root,
            children: [
              Object(r.jsx)(ke.Row, {
                justify: 'center',
                children: Object(r.jsx)(ke.Col, {
                  xs: 12,
                  md: 4,
                  children: Object(r.jsx)(Fe, {
                    className: d.autocomplete,
                    options: n.map(function (e) {
                      return { key: e.id, data: e };
                    }),
                    getTextFromItem: function (e) {
                      return e.data.username;
                    },
                    selected: { key: i.id, data: i },
                    onSelect: function (e) {
                      return o(e.data);
                    },
                  }),
                }),
              }),
              Object(r.jsx)(ke.Row, {
                children: Object(r.jsx)(ke.Col, {
                  xs: 12,
                  children: Object(r.jsx)(ve.a, {
                    items: [
                      {
                        key: 'expandAll',
                        text: ''.concat(
                          b.length === t.length ? 'Collapse' : 'Expand',
                          ' All'
                        ),
                        iconProps: {
                          iconName: ''.concat(
                            b.length === t.length
                              ? 'ChevronFold10'
                              : 'ChevronUnfold10'
                          ),
                        },
                        onClick: function () {
                          b.length === t.length
                            ? j([])
                            : j(
                                t.map(function (e) {
                                  return e.code;
                                })
                              );
                        },
                        buttonStyles: { root: { minWidth: '120px' } },
                      },
                      {
                        key: 'search',
                        onRender: function () {
                          return Object(r.jsx)(ge.a, {
                            className: d.searchBox,
                            value: O,
                            onChange: y,
                            onClear: function () {
                              return x('');
                            },
                          });
                        },
                      },
                    ],
                    styles: { root: { paddingLeft: 0 } },
                  }),
                }),
              }),
              Object(r.jsx)(ke.Row, {
                children: (function () {
                  if (i) {
                    var e = t.filter(function (e) {
                      return (
                        -1 !== e.code.toLowerCase().indexOf(O.toLowerCase())
                      );
                    });
                    return Object(r.jsx)(It.a, {
                      items: e.map(function (e) {
                        return Object(u.a)(
                          Object(u.a)({}, e),
                          {},
                          { text: e.code, isOpen: -1 !== b.indexOf(e.code) }
                        );
                      }),
                      getKey: function (e) {
                        return e.id;
                      },
                      headerProps: {
                        onRenderHeaderText: function (e) {
                          return Object(r.jsxs)('div', {
                            children: [
                              Object(r.jsx)(N.a, {
                                variant: 'mediumPlus',
                                block: !0,
                                children: e.code,
                              }),
                              Object(r.jsx)(N.a, {
                                variant: 'medium',
                                className: d.secondaryText,
                                children: e.description,
                              }),
                            ],
                          });
                        },
                      },
                      onRenderItem: function (e) {
                        return Object(r.jsxs)(z.a, {
                          verticalAlign: 'start',
                          tokens: { childrenGap: 3 },
                          children: [
                            Object(r.jsx)(Ce.a, {
                              label: 'overrule',
                              checked: R(i, e, 'overrule'),
                              onChange: P(i, e, 'overrule'),
                            }),
                            e.grants.map(function (t) {
                              return Object(r.jsx)(Ce.a, {
                                label: t,
                                checked: R(i, e, t),
                                onChange: P(i, e, t),
                              });
                            }),
                          ],
                        });
                      },
                      onToggle: C,
                    });
                  }
                  return null;
                })(),
              }),
            ],
          });
        },
        Wt = function () {
          var e = Object(a.useState)([]),
            t = Object(l.a)(e, 2),
            n = t[0],
            s = t[1],
            c = Object(a.useState)([]),
            i = Object(l.a)(c, 2),
            o = i[0],
            u = i[1],
            d = Object(a.useState)([]),
            p = Object(l.a)(d, 2),
            f = p[0],
            b = p[1],
            j = Object(a.useState)({}),
            m = Object(l.a)(j, 2),
            h = m[0],
            O = m[1],
            x = Object(a.useState)({}),
            v = Object(l.a)(x, 2),
            g = v[0],
            C = v[1],
            y = Object(a.useState)(null),
            k = Object(l.a)(y, 2),
            w = k[0],
            S = k[1],
            T = Object(a.useState)(null),
            A = Object(l.a)(T, 2),
            P = A[0],
            R = A[1],
            E = Object(a.useState)(!1),
            D = Object(l.a)(E, 2),
            L = D[0],
            N = D[1];
          return (
            Object(a.useEffect)(
              function () {
                S(function (e) {
                  return null === e && o.length > 0 ? o[0] : e;
                });
              },
              [o]
            ),
            Object(a.useEffect)(
              function () {
                R(function (e) {
                  return null === e && f.length > 0 ? f[0] : e;
                });
              },
              [f]
            ),
            Object(r.jsxs)(r.Fragment, {
              children: [
                Object(r.jsx)(Lt, {
                  setLoaded: N,
                  setPermissionCodes: s,
                  setRoles: u,
                  setUsers: b,
                  setRolePermissions: O,
                  setUserPermissions: C,
                }),
                Object(r.jsxs)(ke.Container, {
                  lg: !0,
                  children: [
                    Object(r.jsx)(Be.a, { text: 'Permissions' }),
                    L
                      ? Object(r.jsxs)(Rt.a, {
                          'aria-label': 'User and Roles permissions',
                          styles: {
                            root: {
                              display: 'flex',
                              flexFlow: 'row nowrap',
                              justifyContent: 'center',
                              alignItems: 'center',
                            },
                          },
                          children: [
                            Object(r.jsx)(Et.a, {
                              headerText: 'Roles',
                              itemIcon: 'SecurityGroup',
                              children: Object(r.jsx)(Ut, {
                                codes: n,
                                roles: o,
                                rolePermissions: h,
                                setRolePermissions: O,
                                selectedRole: w,
                                setSelectedRole: S,
                              }),
                            }),
                            Object(r.jsx)(Et.a, {
                              headerText: 'Users',
                              itemIcon: 'Contact',
                              children: Object(r.jsx)(Mt, {
                                codes: n,
                                users: f,
                                userPermissions: g,
                                setUserPermissions: C,
                                selectedUser: P,
                                setSelectedUser: R,
                              }),
                            }),
                          ],
                        })
                      : null,
                  ],
                }),
              ],
            })
          );
        },
        Ht = function () {
          return Object(r.jsx)(Wt, {});
        },
        Bt = function () {
          var e = Object(h.i)().path;
          return Object(r.jsx)(r.Fragment, {
            children: Object(r.jsx)(ke.Container, {
              lg: !0,
              fluid: !0,
              children: Object(r.jsxs)(h.d, {
                children: [
                  Object(r.jsx)(h.b, {
                    exact: !0,
                    path: e,
                    children: Object(r.jsx)(Pe, {
                      code: 'SETTINGS',
                      grant: 'general',
                      to: '/',
                      failureNotification: {
                        header: 'No Access',
                        content:
                          'No permission to access this page. Please contact your administrator.',
                      },
                      children: Object(r.jsx)(vt, {}),
                    }),
                  }),
                  Object(r.jsx)(h.b, {
                    path: ''.concat(e, '/users'),
                    children: Object(r.jsx)(Pe, {
                      code: 'SETTINGS',
                      grant: 'users',
                      to: '/',
                      failureNotification: {
                        header: 'No Access',
                        content:
                          'No permission to access this page. Please contact your administrator.',
                      },
                      children: Object(r.jsx)(j.a, {
                        title: 'Users',
                        children: Object(r.jsx)(Tt, {}),
                      }),
                    }),
                  }),
                  Object(r.jsx)(h.b, {
                    path: ''.concat(e, '/appraisal-periods'),
                    children: Object(r.jsx)(Pe, {
                      code: 'SETTINGS',
                      grant: 'appraisal-periods',
                      to: '/',
                      failureNotification: {
                        header: 'No Access',
                        content:
                          'No permission to access this page. Please contact your administrator.',
                      },
                      children: Object(r.jsx)(j.a, {
                        title: 'Settings - appraisal periods',
                        children: Object(r.jsx)(At, {}),
                      }),
                    }),
                  }),
                  Object(r.jsx)(h.b, {
                    path: ''.concat(e, '/appraisal-items'),
                    children: Object(r.jsx)(Pe, {
                      code: 'SETTINGS',
                      grant: 'appraisal-items',
                      to: '/',
                      failureNotification: {
                        header: 'No Access',
                        content:
                          'No permission to access this page. Please contact your administrator.',
                      },
                      children: Object(r.jsx)(j.a, {
                        title: 'Settings - appraisal items',
                        children: Object(r.jsx)(Pt, {}),
                      }),
                    }),
                  }),
                  Object(r.jsx)(h.b, {
                    path: ''.concat(e, '/permissions'),
                    children: Object(r.jsx)(Pe, {
                      code: 'SETTINGS',
                      grant: 'permissions',
                      to: '/',
                      failureNotification: {
                        header: 'No Access',
                        content:
                          'No permission to access this page. Please contact your administrator.',
                      },
                      children: Object(r.jsx)(j.a, {
                        title: 'Settings - Securities',
                        children: Object(r.jsx)(Ht, {}),
                      }),
                    }),
                  }),
                ],
              }),
            }),
          });
        },
        Zt = n(35),
        Vt = n.n(Zt),
        Gt = function (e) {
          var t = e.setReports;
          return (
            Object(a.useEffect)(
              function () {
                var e = !0;
                function n() {
                  return (n = Object(g.a)(
                    v.a.mark(function n() {
                      var r;
                      return v.a.wrap(function (n) {
                        for (;;)
                          switch ((n.prev = n.next)) {
                            case 0:
                              return (n.next = 2), jt.a.getReports();
                            case 2:
                              (r = n.sent), e && t(r);
                            case 4:
                            case 'end':
                              return n.stop();
                          }
                      }, n);
                    })
                  )).apply(this, arguments);
                }
                return (
                  (function () {
                    n.apply(this, arguments);
                  })(),
                  function () {
                    e = !1;
                  }
                );
              },
              [t]
            ),
            null
          );
        };
      Gt.propTypes = { setReports: Vt.a.func.isRequired };
      var qt = Gt,
        Kt = n(87),
        Yt = n(388),
        Jt = Object(E.a)(function (e) {
          return {
            root: { '& > * + *': { marginTop: '16px' } },
            topMargin: { marginTop: '8px' },
            box: {
              border: '1px solid '.concat(e.palette.themeSecondary),
              '&:not(:first-of-type)': { borderTop: 'none' },
            },
            invisibleInput: {
              background: 'none',
              outline: 'none',
              border: 'none',
              height: 0,
            },
          };
        }),
        Qt = function (e) {
          var t = e.isOpen,
            n = e.setOpen,
            s = e.addReport,
            c = Jt(),
            i = Object(a.useState)(''),
            o = Object(l.a)(i, 2),
            u = o[0],
            d = o[1],
            p = Object(a.useState)(''),
            f = Object(l.a)(p, 2),
            b = f[0],
            j = f[1],
            m = Object(a.useState)(''),
            O = Object(l.a)(m, 2),
            x = O[0],
            C = O[1],
            y = Object(a.useState)(''),
            w = Object(l.a)(y, 2),
            T = w[0],
            A = w[1],
            P = Object(a.useState)([]),
            R = Object(l.a)(P, 2),
            E = R[0],
            D = R[1],
            L = Object(a.useState)([]),
            N = Object(l.a)(L, 2),
            I = N[0],
            F = N[1],
            U = Object(a.useState)([]),
            M = Object(l.a)(U, 2),
            W = M[0],
            H = M[1],
            Z = Object(h.g)(),
            V = function (e) {
              return function (t) {
                e(t.target.value);
              };
            },
            G = function (e) {
              return function (t) {
                t.persist(),
                  H(function (n) {
                    var r = n.slice();
                    return (r[e].name = t.target.value), r;
                  });
              };
            },
            q = function (e) {
              return function (t) {
                t.persist(),
                  H(function (n) {
                    var r = n.slice();
                    return (r[e].defaultValue = t.target.value), r;
                  });
              };
            },
            K = (function () {
              var e = Object(g.a)(
                v.a.mark(function e(t) {
                  var r, a;
                  return v.a.wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            t.persist(),
                            t.preventDefault(),
                            (r = new FormData()).append('name', u),
                            r.append('description', b),
                            r.append('template', x),
                            r.append('parameters', JSON.stringify(W)),
                            (e.next = 9),
                            jt.a.addReport(r)
                          );
                        case 9:
                          (a = e.sent) &&
                            (Z.push('/reporting/reports'),
                            k.a.notifySuccess('Report successfully created'),
                            n(!1),
                            s(a));
                        case 11:
                        case 'end':
                          return e.stop();
                      }
                  }, e);
                })
              );
              return function (t) {
                return e.apply(this, arguments);
              };
            })();
          Object(a.useEffect)(function () {
            var e = !0;
            function t() {
              return (t = Object(g.a)(
                v.a.mark(function t() {
                  var n;
                  return v.a.wrap(function (t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          return (t.next = 2), jt.a.getTemplates();
                        case 2:
                          (n = t.sent), e && D(n);
                        case 4:
                        case 'end':
                          return t.stop();
                      }
                  }, t);
                })
              )).apply(this, arguments);
            }
            return (
              (function () {
                t.apply(this, arguments);
              })(),
              function () {
                e = !1;
              }
            );
          }, []),
            Object(a.useEffect)(
              function () {
                var e = !0;
                function t() {
                  return (t = Object(g.a)(
                    v.a.mark(function t() {
                      var n;
                      return v.a.wrap(function (t) {
                        for (;;)
                          switch ((t.prev = t.next)) {
                            case 0:
                              if ('' === x) {
                                t.next = 7;
                                break;
                              }
                              return (
                                (t.next = 3), jt.a.getTempalteParameters(x)
                              );
                            case 3:
                              (n = t.sent).length && e && F(n), (t.next = 8);
                              break;
                            case 7:
                              F([]);
                            case 8:
                              H([]), A('');
                            case 10:
                            case 'end':
                              return t.stop();
                          }
                      }, t);
                    })
                  )).apply(this, arguments);
                }
                return (
                  (function () {
                    t.apply(this, arguments);
                  })(),
                  function () {
                    e = !1;
                  }
                );
              },
              [x]
            );
          return Object(r.jsx)(le.a, {
            isOpen: t,
            onDismiss: function () {
              return n(!1);
            },
            headerText: 'Create Report',
            type: de.a.large,
            onRenderFooterContent: function () {
              return Object(r.jsxs)(z.a, {
                horizontal: !0,
                horizontalAlign: 'start',
                tokens: { childrenGap: 10 },
                children: [
                  Object(r.jsx)(it.a, {
                    form: 'new-report-form',
                    type: 'submit',
                    children: 'Create',
                  }),
                  Object(r.jsx)(S.a, {
                    onClick: function () {
                      return n(!1);
                    },
                    children: 'Close',
                  }),
                ],
              });
            },
            children: Object(r.jsx)('form', {
              onSubmit: K,
              id: 'new-report-form',
              children: Object(r.jsxs)(ke.Container, {
                fluid: !0,
                className: c.root,
                children: [
                  Object(r.jsx)(B.a, { children: 'General' }),
                  Object(r.jsx)(ke.Row, {
                    justify: 'start',
                    children: Object(r.jsxs)(ke.Col, {
                      xs: 12,
                      sm: 8,
                      md: 6,
                      children: [
                        Object(r.jsx)(Ke.a, {
                          label: 'Name',
                          value: u,
                          onChange: V(d),
                          required: !0,
                        }),
                        Object(r.jsx)(Ke.a, {
                          label: 'Description',
                          value: b,
                          onChange: V(j),
                          multiline: !0,
                        }),
                        Object(r.jsx)(Yt.a, { children: 'Select template' }),
                        Object(r.jsx)(Fe, {
                          options: E.map(function (e) {
                            return { key: e.id, data: e };
                          }),
                          getTextFromItem: function (e) {
                            return e.data.name;
                          },
                          onSelect: function (e) {
                            C(e.data.id);
                          },
                          onRenderItem: function () {
                            var e;
                            return Object(r.jsx)(Ke.a, {
                              value: x
                                ? null ===
                                    (e = E.find(function (e) {
                                      return e.id === x;
                                    })) || void 0 === e
                                  ? void 0
                                  : e.name
                                : null,
                              underlined: !0,
                              readOnly: !0,
                            });
                          },
                          maxHeight: '400px',
                        }),
                        Object(r.jsx)('input', {
                          value: x,
                          className: c.invisibleInput,
                          required: !0,
                        }),
                      ],
                    }),
                  }),
                  Object(r.jsx)(B.a, { children: 'Parameters' }),
                  Object(r.jsx)(ke.Row, {
                    justify: 'start',
                    children: Object(r.jsxs)(ke.Col, {
                      xs: 12,
                      sm: 8,
                      md: 6,
                      children: [
                        Object(r.jsx)(Yt.a, { children: 'Select parameter' }),
                        Object(r.jsx)(Fe, {
                          options: I.map(function (e) {
                            return e.paths.map(function (t) {
                              return {
                                key: ''.concat(e.name).concat(t),
                                data: ''.concat(e.name).concat(t),
                              };
                            });
                          }).flat(),
                          getTextFromItem: function (e) {
                            return e.data;
                          },
                          onSelect: function (e) {
                            return (function (e) {
                              A(e.data);
                            })(e);
                          },
                          onRenderItem: function () {
                            return Object(r.jsx)(Ke.a, {
                              value: T,
                              underlined: !0,
                              readOnly: !0,
                            });
                          },
                          maxHeight: '400px',
                        }),
                        Object(r.jsx)(S.a, {
                          className: c.topMargin,
                          onClick: function () {
                            '' !== T &&
                              (A(''),
                              H(function (e) {
                                return -1 ===
                                  W.map(function (e) {
                                    return e.name;
                                  }).indexOf(T)
                                  ? e.concat({
                                      name: T,
                                      defaultValue: '',
                                      path: T,
                                    })
                                  : e;
                              }));
                          },
                          children: 'Add Parameter',
                        }),
                      ],
                    }),
                  }),
                  Object(r.jsx)(B.a, { children: 'Selected Paramaters' }),
                  Object(r.jsx)(ke.Row, {
                    justify: 'start',
                    children: Object(r.jsx)(ke.Col, {
                      xs: 12,
                      sm: 8,
                      md: 6,
                      children: W.map(function (e, t) {
                        return Object(r.jsxs)(et, {
                          className: c.box,
                          children: [
                            Object(r.jsx)(Ke.a, {
                              label: 'Name',
                              value: e.name,
                              onChange: G(t),
                            }),
                            Object(r.jsx)(Ke.a, {
                              label: 'Default value',
                              value: e.defaultValue,
                              onChange: q(t),
                            }),
                            Object(r.jsx)(Ke.a, {
                              label: 'Path',
                              value: e.path,
                              readOnly: !0,
                            }),
                          ],
                        });
                      }),
                    }),
                  }),
                ],
              }),
            }),
          });
        },
        Xt = Object(E.a)(function (e) {
          return {
            root: { '& > * + *': { marginTop: '16px' } },
            box: {
              border: '1px solid '.concat(e.palette.themeSecondary),
              '&:not(:first-of-type)': { borderTop: 'none' },
            },
          };
        }),
        _t = function (e) {
          var t = e.id,
            n = e.isOpen,
            s = e.setOpen,
            c = Xt(),
            i = Object(a.useState)(null),
            o = Object(l.a)(i, 2),
            u = o[0],
            d = o[1],
            p = Object(a.useState)([]),
            f = Object(l.a)(p, 2),
            b = f[0],
            j = f[1];
          Object(a.useEffect)(
            function () {
              var e = !0;
              function r() {
                return (r = Object(g.a)(
                  v.a.mark(function r() {
                    var a;
                    return v.a.wrap(function (r) {
                      for (;;)
                        switch ((r.prev = r.next)) {
                          case 0:
                            if (!t || !n) {
                              r.next = 5;
                              break;
                            }
                            return (r.next = 3), jt.a.getReport(t);
                          case 3:
                            (a = r.sent),
                              e &&
                                (d(a),
                                j(
                                  a.parameters.map(function (e) {
                                    return {
                                      name: e.name,
                                      value: e.defaultValue,
                                      path: e.path,
                                    };
                                  })
                                ));
                          case 5:
                          case 'end':
                            return r.stop();
                        }
                    }, r);
                  })
                )).apply(this, arguments);
              }
              return (
                (function () {
                  r.apply(this, arguments);
                })(),
                function () {
                  e = !1;
                }
              );
            },
            [t, n]
          );
          return n && u
            ? Object(r.jsx)(le.a, {
                isOpen: n,
                onDismiss: function () {
                  return s(!1);
                },
                headerText: 'Create Report',
                type: de.a.large,
                onRenderFooterContent: function () {
                  return Object(r.jsx)(z.a, {
                    horizontal: !0,
                    horizontalAlign: 'start',
                    tokens: { childrenGap: 10 },
                    children: Object(r.jsx)(S.a, {
                      onClick: function () {
                        return s(!1);
                      },
                      children: 'Close',
                    }),
                  });
                },
                isLightDismiss: !0,
                children: Object(r.jsxs)(ke.Container, {
                  fluid: !0,
                  className: c.root,
                  children: [
                    Object(r.jsx)(B.a, { children: 'General' }),
                    Object(r.jsx)(ke.Row, {
                      justify: 'start',
                      children: Object(r.jsxs)(ke.Col, {
                        xs: 12,
                        sm: 8,
                        md: 6,
                        children: [
                          Object(r.jsx)(Ke.a, {
                            label: 'Name: ',
                            value: u.name,
                            underlined: !0,
                            readOnly: !0,
                          }),
                          Object(r.jsx)(Ke.a, {
                            label: 'Description: ',
                            value: u.description,
                            multiline: !0,
                            underlined: !0,
                            readOnly: !0,
                            resizable: !1,
                          }),
                          Object(r.jsx)(Ke.a, {
                            label: 'Template: ',
                            value: u.template.name,
                            underlined: !0,
                            readOnly: !0,
                          }),
                        ],
                      }),
                    }),
                    Object(r.jsx)(B.a, { children: 'Parameters' }),
                    Object(r.jsx)(ke.Row, {
                      justify: 'start',
                      children: Object(r.jsx)(ke.Col, {
                        xs: 12,
                        sm: 8,
                        md: 6,
                        children: b.map(function (e) {
                          return Object(r.jsxs)(et, {
                            className: c.box,
                            children: [
                              Object(r.jsx)(Ke.a, {
                                label: 'Name: ',
                                value: e.name,
                                underlined: !0,
                                readOnly: !0,
                              }),
                              Object(r.jsx)(Ke.a, {
                                label: 'Path: ',
                                value: e.path,
                                underlined: !0,
                                readOnly: !0,
                              }),
                              Object(r.jsx)(Ke.a, {
                                label: 'Default value: ',
                                value: e.value,
                                underlined: !0,
                                readOnly: !0,
                              }),
                            ],
                          });
                        }),
                      }),
                    }),
                    Object(r.jsx)(B.a, { children: 'Aggregation' }),
                    Object(r.jsx)(ke.Row, {
                      justify: 'start',
                      children: Object(r.jsx)(ke.Col, {
                        xs: 12,
                        sm: 8,
                        md: 6,
                        children: Object(r.jsx)(Ke.a, {
                          value: JSON.stringify(
                            JSON.parse(u.template.aggregation),
                            null,
                            4
                          ),
                          multiline: !0,
                          underlined: !0,
                          readOnly: !0,
                          autoAdjustHeight: !0,
                          resizable: !1,
                        }),
                      }),
                    }),
                  ],
                }),
              })
            : null;
        },
        $t = Object(E.a)(function (e) {
          return {
            root: { '& > * + *': { marginTop: '16px' } },
            box: {
              border: '1px solid '.concat(e.palette.themeSecondary),
              '&:not(:first-of-type)': { borderTop: 'none' },
            },
          };
        }),
        en = function (e) {
          var t = e.id,
            n = e.isOpen,
            s = e.setOpen,
            c = e.setReport,
            i = $t(),
            o = Object(a.useState)(null),
            d = Object(l.a)(o, 2),
            p = d[0],
            f = d[1],
            b = Object(a.useState)([]),
            j = Object(l.a)(b, 2),
            m = j[0],
            h = j[1],
            O = Object(a.useState)([]),
            x = Object(l.a)(O, 2),
            C = x[0],
            y = x[1],
            w = Object(a.useState)({}),
            T = Object(l.a)(w, 2),
            A = T[0],
            P = T[1],
            R = Object(a.useState)({ name: '', path: '', defaultValue: '' }),
            E = Object(l.a)(R, 2),
            D = E[0],
            L = E[1],
            N = function (e, t) {
              return function (n) {
                var r = n.target.value;
                h(function (n) {
                  return n.map(function (n) {
                    return n && n.path === t.path
                      ? Object(u.a)(
                          Object(u.a)({}, n),
                          {},
                          Object(Dt.a)({}, e, r)
                        )
                      : n;
                  });
                });
              };
            },
            I = function (e) {
              return function (t) {
                var n = t.target.value;
                L(function (t) {
                  return Object(u.a)(
                    Object(u.a)({}, t),
                    {},
                    Object(Dt.a)({}, e, n)
                  );
                });
              };
            },
            F = (function () {
              var e = Object(g.a)(
                v.a.mark(function e() {
                  var t;
                  return v.a.wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.next = 2),
                            jt.a.updateReport(p.id, {
                              description: p.description,
                              parameters: m,
                            })
                          );
                        case 2:
                          (t = e.sent) &&
                            (c(t),
                            s(!1),
                            f(null),
                            h([]),
                            L({}),
                            k.a.notifySuccess('Report saved'));
                        case 4:
                        case 'end':
                          return e.stop();
                      }
                  }, e);
                })
              );
              return function () {
                return e.apply(this, arguments);
              };
            })();
          Object(a.useEffect)(
            function () {
              var e = !0;
              function r() {
                return (r = Object(g.a)(
                  v.a.mark(function r() {
                    var a, s, c;
                    return v.a.wrap(function (r) {
                      for (;;)
                        switch ((r.prev = r.next)) {
                          case 0:
                            if (!t || !n) {
                              r.next = 10;
                              break;
                            }
                            return (r.next = 3), jt.a.getReport(t);
                          case 3:
                            if (
                              ((s = r.sent),
                              (c = []),
                              !(null === s ||
                              void 0 === s ||
                              null === (a = s.template) ||
                              void 0 === a
                                ? void 0
                                : a.id))
                            ) {
                              r.next = 9;
                              break;
                            }
                            return (
                              (r.next = 8),
                              jt.a.getTempalteParameters(s.template.id)
                            );
                          case 8:
                            c = r.sent;
                          case 9:
                            e && (f(s), h(s.parameters), y(c));
                          case 10:
                          case 'end':
                            return r.stop();
                        }
                    }, r);
                  })
                )).apply(this, arguments);
              }
              return (
                (function () {
                  r.apply(this, arguments);
                })(),
                function () {
                  e = !1;
                }
              );
            },
            [t, n]
          );
          var U;
          return n && p
            ? Object(r.jsx)(le.a, {
                isOpen: n,
                onDismiss: function () {
                  return s(!1);
                },
                headerText: 'Create Report',
                type: de.a.large,
                onRenderFooterContent: function () {
                  return Object(r.jsxs)(z.a, {
                    horizontal: !0,
                    horizontalAlign: 'start',
                    tokens: { childrenGap: 10 },
                    children: [
                      Object(r.jsx)(it.a, { onClick: F, children: 'Save' }),
                      Object(r.jsx)(S.a, {
                        onClick: function () {
                          return s(!1);
                        },
                        children: 'Close',
                      }),
                    ],
                  });
                },
                children: Object(r.jsxs)(ke.Container, {
                  fluid: !0,
                  className: i.root,
                  children: [
                    Object(r.jsx)(B.a, { children: 'General' }),
                    Object(r.jsx)(ke.Row, {
                      justify: 'start',
                      children: Object(r.jsxs)(ke.Col, {
                        xs: 12,
                        sm: 8,
                        md: 6,
                        children: [
                          Object(r.jsx)(Ke.a, {
                            label: 'Name: ',
                            value: p.name,
                            underlined: !0,
                            disabled: !0,
                          }),
                          Object(r.jsx)(Ke.a, {
                            label: 'Description: ',
                            value: p.description,
                            multiline: !0,
                            underlined: !0,
                            resizable: !1,
                            onChange:
                              ((U = 'description'),
                              function (e) {
                                var t = e.target.value;
                                f(function (e) {
                                  return Object(u.a)(
                                    Object(u.a)({}, e),
                                    {},
                                    Object(Dt.a)({}, U, t)
                                  );
                                });
                              }),
                          }),
                          Object(r.jsx)(Ke.a, {
                            label: 'Template: ',
                            value: p.template.name,
                            underlined: !0,
                            disabled: !0,
                          }),
                        ],
                      }),
                    }),
                    Object(r.jsx)(B.a, { children: 'Parameters' }),
                    Object(r.jsx)(ke.Row, {
                      justify: 'start',
                      children: Object(r.jsxs)(ke.Col, {
                        xs: 12,
                        sm: 8,
                        md: 6,
                        children: [
                          m.map(function (e) {
                            return Object(r.jsxs)(et, {
                              className: i.box,
                              children: [
                                Object(r.jsx)(Ke.a, {
                                  label: 'Name: ',
                                  value: e.name,
                                  underlined: !0,
                                  onChange: N('name', e),
                                }),
                                Object(r.jsx)(Ke.a, {
                                  label: 'Path: ',
                                  value: e.path,
                                  underlined: !0,
                                  disabled: !0,
                                }),
                                Object(r.jsx)(Ke.a, {
                                  label: 'Default value: ',
                                  value: e.defaultValue,
                                  underlined: !0,
                                  onChange: N('defaultValue', e),
                                }),
                                Object(r.jsx)(Z.a, {
                                  onClick:
                                    ((t = e),
                                    function () {
                                      h(function (e) {
                                        return e.filter(function (e) {
                                          return e.path !== t.path;
                                        });
                                      });
                                    }),
                                  iconProps: { iconName: 'Delete' },
                                  text: 'Delete',
                                }),
                              ],
                            });
                            var t;
                          }),
                          Object(r.jsxs)(et, {
                            className: i.box,
                            children: [
                              Object(r.jsx)(Fe, {
                                options: C.map(function (e) {
                                  return e.paths.map(function (t) {
                                    return {
                                      key: ''.concat(e.name).concat(t),
                                      data: ''.concat(e.name).concat(t),
                                    };
                                  });
                                }).flat(),
                                getTextFromItem: function (e) {
                                  return e.data;
                                },
                                onSelect: function (e) {
                                  return L(function (t) {
                                    return Object(u.a)(
                                      Object(u.a)({}, t),
                                      {},
                                      { path: e.data }
                                    );
                                  });
                                },
                                onRenderItem: function () {
                                  return null;
                                },
                                maxHeight: '400px',
                              }),
                              Object(r.jsx)(Ke.a, {
                                label: 'Name: ',
                                value: D.name || '',
                                underlined: !0,
                                onChange: I('name'),
                                required: !0,
                                errorMessage: A.newParamName || '',
                              }),
                              Object(r.jsx)(Ke.a, {
                                label: 'Path: ',
                                value: D.path || '',
                                underlined: !0,
                                required: !0,
                                errorMessage: A.newParamPath || '',
                              }),
                              Object(r.jsx)(Ke.a, {
                                label: 'Default value: ',
                                value: D.defaultValue || '',
                                underlined: !0,
                                onChange: I('defaultValue'),
                              }),
                              Object(r.jsx)(Z.a, {
                                onClick: function () {
                                  var e = !1;
                                  '' === D.name
                                    ? ((e = !0),
                                      P(function (e) {
                                        return Object(u.a)(
                                          Object(u.a)({}, e),
                                          {},
                                          { newParamName: 'Name is required' }
                                        );
                                      }))
                                    : P(function (e) {
                                        return Object(u.a)(
                                          Object(u.a)({}, e),
                                          {},
                                          { newParamName: '' }
                                        );
                                      }),
                                    '' === D.path
                                      ? ((e = !0),
                                        P(function (e) {
                                          return Object(u.a)(
                                            Object(u.a)({}, e),
                                            {},
                                            { newParamPath: 'Path is required' }
                                          );
                                        }))
                                      : P(function (e) {
                                          return Object(u.a)(
                                            Object(u.a)({}, e),
                                            {},
                                            { newParamPath: '' }
                                          );
                                        }),
                                    e ||
                                      h(function (e) {
                                        return e.find(function (e) {
                                          return e.path === D.path;
                                        })
                                          ? (P(function () {
                                              return Object(u.a)(
                                                Object(u.a)({}, e),
                                                {},
                                                {
                                                  newParamPath:
                                                    'This parameter is already added.',
                                                }
                                              );
                                            }),
                                            e)
                                          : e.concat(D);
                                      });
                                },
                                iconProps: { iconName: 'Add' },
                                text: 'Add',
                              }),
                            ],
                          }),
                        ],
                      }),
                    }),
                    Object(r.jsx)(B.a, { children: 'Aggregation' }),
                    Object(r.jsx)(ke.Row, {
                      justify: 'start',
                      children: Object(r.jsx)(ke.Col, {
                        xs: 12,
                        sm: 8,
                        md: 6,
                        children: Object(r.jsx)(Ke.a, {
                          value: JSON.stringify(
                            JSON.parse(p.template.aggregation),
                            null,
                            4
                          ),
                          multiline: !0,
                          underlined: !0,
                          disabled: !0,
                          autoAdjustHeight: !0,
                          resizable: !1,
                        }),
                      }),
                    }),
                  ],
                }),
              })
            : null;
        };
      en.defaultProps = { id: null };
      var tn = en,
        nn = function () {
          var e = Object(a.useState)(!1),
            t = Object(l.a)(e, 2),
            n = t[0],
            s = t[1],
            c = Object(a.useState)(!1),
            i = Object(l.a)(c, 2),
            o = i[0],
            u = i[1],
            d = Object(a.useState)(!1),
            p = Object(l.a)(d, 2),
            f = p[0],
            b = p[1],
            j = Object(a.useState)([]),
            m = Object(l.a)(j, 2),
            h = m[0],
            O = m[1],
            x = Object(a.useState)({ count: 0, items: [] }),
            v = Object(l.a)(x, 2),
            g = v[0],
            C = v[1],
            y = Object(a.useState)([
              {
                key: 'name',
                name: ' Name',
                fieldName: 'name',
                isSortable: !0,
                isFilterable: !0,
                isResizable: !0,
                iconName: 'FileTemplate',
                minWidth: 100,
                maxWidth: 300,
              },
              {
                key: 'description',
                name: ' Description',
                fieldName: 'description',
                isSortable: !0,
                isFilterable: !0,
                isResizable: !0,
                iconName: 'FileBug',
                minWidth: 200,
                maxWidth: 300,
              },
              {
                key: 'createdby',
                name: ' Created by',
                isSortable: !0,
                isFilterable: !0,
                isResizable: !0,
                iconName: 'Contact',
                minWidth: 100,
                maxWidth: 300,
                sort: function (e, t) {
                  return e.createdUser.username < t.createdUser.username
                    ? -1
                    : 1;
                },
                onRender: function (e) {
                  return e.createdUser.username;
                },
              },
              {
                key: 'createdon',
                name: ' Created on',
                fieldName: 'createdDate',
                isSortable: !0,
                isFilterable: !0,
                isResizable: !0,
                iconName: 'DateTime',
                minWidth: 200,
                maxWidth: 300,
                onRender: function (e) {
                  return new Date(e.createdDate).toLocaleString();
                },
              },
            ]),
            k = Object(l.a)(y, 1)[0],
            w = Object(a.useState)({
              key: 'name',
              name: ' Name',
              fieldName: 'name',
              isSortable: !0,
              isFilterable: !0,
              isResizable: !0,
              iconName: 'FileTemplate',
              minWidth: 100,
              maxWidth: 300,
              isSorted: !0,
              isSortedDescending: !1,
            }),
            S = Object(l.a)(w, 1)[0];
          return Object(r.jsxs)(ke.Container, {
            fluid: !0,
            children: [
              Object(r.jsx)(qt, { setReports: O }),
              Object(r.jsx)(Kt.a, { text: 'Reports' }),
              Object(r.jsx)(B.a, {}),
              Object(r.jsx)(ke.Row, {
                children: Object(r.jsx)(ke.Col, {
                  xs: 12,
                  children: Object(r.jsx)(yt.a, {
                    commandItems: [
                      {
                        key: 'createItem',
                        text: 'Create',
                        iconProps: { iconName: 'BoxAdditionSolid' },
                        onClick: function () {
                          return s(!0);
                        },
                      },
                      {
                        key: 'details',
                        text: 'Details',
                        disabled: 0 === g.count,
                        iconProps: { iconName: 'ProfileSearch' },
                        onClick: function () {
                          return u(!0);
                        },
                      },
                      {
                        key: 'editItem',
                        text: 'Edit',
                        disabled: 0 === g.count,
                        iconProps: { iconName: 'Edit' },
                        onClick: function () {
                          return b(!0);
                        },
                      },
                    ],
                    tableProps: {
                      items: h,
                      columns: k,
                      setSelectionDetails: C,
                      selectionMode: ye.b.single,
                      onItemInvoked: function () {
                        return u(!0);
                      },
                      layoutMode: gt.e.justified,
                      sortedCol: S,
                    },
                  }),
                }),
              }),
              Object(r.jsx)(Qt, {
                isOpen: n,
                setOpen: s,
                addReport: function (e) {
                  return O(function (t) {
                    return t.concat(e);
                  });
                },
              }),
              Object(r.jsx)(_t, {
                id: g.count > 0 ? g.items[0].id : null,
                isOpen: o,
                setOpen: u,
              }),
              Object(r.jsx)(tn, {
                id: g.count > 0 ? g.items[0].id : null,
                isOpen: f,
                setOpen: b,
                setReport: function (e) {
                  return O(function (t) {
                    return t.map(function (t) {
                      return t.id === e.id ? e : t;
                    });
                  });
                },
              }),
            ],
          });
        },
        rn = function () {
          var e = Object(h.i)().path;
          return Object(r.jsx)(r.Fragment, {
            children: Object(r.jsxs)(h.d, {
              children: [
                Object(r.jsx)(h.b, {
                  exact: !0,
                  path: e,
                  children: Object(r.jsx)(nn, {}),
                }),
                Object(r.jsx)(h.b, {
                  exact: !0,
                  path: ''.concat(e, '/new'),
                  children: Object(r.jsx)('h1', { children: 'Report' }),
                }),
                Object(r.jsx)(h.b, {
                  exact: !0,
                  path: ''.concat(e, '/:id'),
                  children: Object(r.jsx)('h1', { children: 'Report' }),
                }),
              ],
            }),
          });
        },
        an = n(275).default,
        sn = function () {
          var e = Object(h.i)().path;
          return Object(r.jsx)(h.d, {
            children: Object(r.jsx)(h.b, {
              exact: !0,
              path: e,
              children: Object(r.jsx)(an, {}),
            }),
          });
        },
        cn = n(381),
        on = n(386),
        un = Object(E.a)(function (e) {
          return { root: { '& > * + *': { marginTop: e.spacing.m } } };
        }),
        ln = function () {
          var e = un(),
            t = Object(a.useState)([]),
            n = Object(l.a)(t, 2),
            s = n[0],
            c = n[1],
            i = Object(a.useState)(null),
            o = Object(l.a)(i, 2),
            u = o[0],
            d = o[1],
            p = Object(a.useState)(null),
            f = Object(l.a)(p, 2),
            b = f[0],
            j = f[1],
            m = Object(a.useState)([]),
            h = Object(l.a)(m, 2),
            O = h[0],
            x = h[1],
            C = function (e) {
              return function (t) {
                e(
                  new Date(Date.UTC(t.getFullYear(), t.getMonth(), t.getDate()))
                );
              };
            },
            y = (function () {
              var e = Object(g.a)(
                v.a.mark(function e() {
                  var t;
                  return v.a.wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          if (!(u && b && b < u)) {
                            e.next = 2;
                            break;
                          }
                          return e.abrupt(
                            'return',
                            k.a.notifySevereWarning(
                              "'Date to' should be bigger than 'Date from'"
                            )
                          );
                        case 2:
                          if (!(u || b || O.length)) {
                            e.next = 9;
                            break;
                          }
                          return (
                            (e.next = 5),
                            jt.a.generateAppraisalReport({
                              dateFrom: u,
                              dateTo: b,
                              periods: O,
                            })
                          );
                        case 5:
                          if (!(t = e.sent)) {
                            e.next = 8;
                            break;
                          }
                          return e.abrupt(
                            'return',
                            Object(we.downloadBlob)('appraisal.xlsx', t)
                          );
                        case 8:
                          return e.abrupt('return', null);
                        case 9:
                          return e.abrupt(
                            'return',
                            k.a.notifySevereWarning(
                              'At least one field should be set'
                            )
                          );
                        case 10:
                        case 'end':
                          return e.stop();
                      }
                  }, e);
                })
              );
              return function () {
                return e.apply(this, arguments);
              };
            })();
          return (
            Object(a.useEffect)(function () {
              var e = !0;
              function t() {
                return (t = Object(g.a)(
                  v.a.mark(function t() {
                    var n;
                    return v.a.wrap(function (t) {
                      for (;;)
                        switch ((t.prev = t.next)) {
                          case 0:
                            return (t.next = 2), Te.a.getPeriods();
                          case 2:
                            (n = t.sent) &&
                              e &&
                              c(
                                n.map(function (e) {
                                  return { key: e.id, text: e.name, data: e };
                                })
                              );
                          case 4:
                          case 'end':
                            return t.stop();
                        }
                    }, t);
                  })
                )).apply(this, arguments);
              }
              return (
                (function () {
                  t.apply(this, arguments);
                })(),
                function () {
                  e = !1;
                }
              );
            }, []),
            Object(r.jsxs)(ke.Container, {
              fluid: !0,
              className: e.root,
              children: [
                Object(r.jsx)(Be.a, { text: 'Appraisal Report' }),
                Object(r.jsx)(B.a, {}),
                Object(r.jsx)(ke.Row, {
                  align: 'center',
                  justify: 'center',
                  children: Object(r.jsx)(ke.Col, {
                    md: 8,
                    sm: 12,
                    children: Object(r.jsx)(cn.a, {
                      placeholder: 'Select periods',
                      label: 'Select one or multiple periods',
                      multiSelect: !0,
                      options: s,
                      onChange: function (e, t) {
                        t &&
                          (t.selected
                            ? x(function (e) {
                                return e.concat(t.key);
                              })
                            : x(function (e) {
                                return e.filter(function (e) {
                                  return e !== t.key;
                                });
                              }));
                      },
                      selectedKeys: O,
                    }),
                  }),
                }),
                Object(r.jsxs)(ke.Row, {
                  align: 'center',
                  justify: 'center',
                  children: [
                    Object(r.jsx)(ke.Col, {
                      md: 4,
                      sm: 12,
                      children: Object(r.jsx)(ke.Row, {
                        justify: 'center',
                        children: Object(r.jsx)(on.a, {
                          placeholder: 'Select date from...',
                          'aria-label': 'Select date from',
                          value: u,
                          label: 'Date from',
                          onSelectDate: C(d),
                        }),
                      }),
                    }),
                    Object(r.jsx)(ke.Col, {
                      md: 4,
                      sm: 12,
                      children: Object(r.jsx)(ke.Row, {
                        justify: 'center',
                        children: Object(r.jsx)(on.a, {
                          placeholder: 'Select date to...',
                          'aria-label': 'Select date to',
                          value: b,
                          label: 'Date to',
                          onSelectDate: C(j),
                        }),
                      }),
                    }),
                  ],
                }),
                Object(r.jsx)(ke.Row, {
                  align: 'center',
                  justify: 'center',
                  children: Object(r.jsx)(ke.Col, {
                    md: 4,
                    sm: 12,
                    children: Object(r.jsx)(ke.Row, {
                      justify: 'center',
                      children: Object(r.jsx)(it.a, {
                        text: 'Generate',
                        type: 'submit',
                        onClick: y,
                      }),
                    }),
                  }),
                }),
              ],
            })
          );
        },
        dn = function () {
          var e = Object(h.i)().path;
          return Object(r.jsx)(ke.Container, {
            lg: !0,
            children: Object(r.jsxs)(h.d, {
              children: [
                Object(r.jsx)(h.b, {
                  path: ''.concat(e, '/reports'),
                  children: Object(r.jsx)(Pe, {
                    code: 'REPORTS',
                    grant: 'read',
                    to: '/',
                    failureNotification: {
                      header: 'No Access',
                      content:
                        'No permission to access this page. Please contact your administrator.',
                    },
                    children: Object(r.jsx)(rn, {}),
                  }),
                }),
                Object(r.jsx)(h.b, {
                  path: ''.concat(e, '/templates'),
                  children: Object(r.jsx)(Pe, {
                    code: 'REPORT-TEMPLATES',
                    grant: 'read',
                    to: '/',
                    failureNotification: {
                      header: 'No Access',
                      content:
                        'No permission to access this page. Please contact your administrator.',
                    },
                    children: Object(r.jsx)(j.a, {
                      title: 'Reporting Templates',
                      children: Object(r.jsx)(sn, {}),
                    }),
                  }),
                }),
                Object(r.jsx)(h.b, {
                  path: ''.concat(e, '/appraisal-report'),
                  children: Object(r.jsx)(Pe, {
                    code: 'REPORTS',
                    grant: 'read',
                    to: '/',
                    failureNotification: {
                      header: 'No Access',
                      content:
                        'No permission to access this page. Please contact your administrator.',
                    },
                    children: Object(r.jsx)(j.a, {
                      title: 'Appraisal Report',
                      children: Object(r.jsx)(ln, {}),
                    }),
                  }),
                }),
              ],
            }),
          });
        },
        pn = n(169);
      function fn() {
        return (fn =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
          }).apply(this, arguments);
      }
      function bn(e, t) {
        if (null == e) return {};
        var n,
          r,
          a = (function (e, t) {
            if (null == e) return {};
            var n,
              r,
              a = {},
              s = Object.keys(e);
            for (r = 0; r < s.length; r++)
              (n = s[r]), t.indexOf(n) >= 0 || (a[n] = e[n]);
            return a;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var s = Object.getOwnPropertySymbols(e);
          for (r = 0; r < s.length; r++)
            (n = s[r]),
              t.indexOf(n) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, n) &&
                  (a[n] = e[n]));
        }
        return a;
      }
      var jn = a.createElement('rect', {
          width: 750,
          height: 750,
          fill: 'none',
        }),
        mn = a.createElement('path', {
          id: 'cat_bg',
          d:
            'M515.544 157.768C509.591 141.875 503.381 125.294 461.334 136.509C438.757 142.532 419.831 163.809 404.36 195.408C392.72 220.537 382.885 253.033 375.039 291.995C359.008 371.61 352.254 474.596 355.411 574.726L348.415 574.947L348.323 571.927C346.187 499.623 349.185 425.969 357.094 360.668C323.445 325.695 285.092 298.13 257.144 288.975C190.914 274.371 173.417 312.953 173.851 347.37C173.93 353.663 176.13 358.897 178.345 364.17C180.636 369.623 182.944 375.116 182.944 381.865C182.944 386.341 172.935 395.586 159.924 407.605C134.344 431.232 97.1624 465.577 101.625 495.466C105.749 523.087 131.903 544.06 155.976 555.336C158.333 556.44 160.9 558.491 163.989 560.958C166.185 562.714 168.646 564.68 171.482 566.666L171.7 566.817C173.928 568.352 177.605 570.517 182.732 573.312L184.313 574.17C256.838 613.294 341.009 586.936 367.238 577.207L368.77 576.633L554.767 574.562L554.743 574.417C554.692 574.114 554.609 573.664 554.502 573.082C552.753 563.607 544.542 519.099 562.027 501.163C616.632 445.15 676.509 284.851 595.099 217.679C577.108 202.835 559.256 193.811 545.546 186.88C537.219 182.671 530.42 179.234 526.045 175.734C520.658 171.425 518.125 164.661 515.544 157.768Z',
          fill: '#64FCD9',
        }),
        hn = a.createElement('path', {
          fillRule: 'evenodd',
          clipRule: 'evenodd',
          d:
            'M186.151 337.183C182.052 336.471 189.296 344.599 189.296 344.599C189.296 344.599 190.25 337.896 186.151 337.183Z',
          fill: 'white',
        }),
        On = a.createElement('path', {
          fillRule: 'evenodd',
          clipRule: 'evenodd',
          d:
            'M247.46 575.187C247.46 575.187 203.432 556.766 203.432 531.119C203.432 523.595 208.138 524.317 217.551 533.286C218.575 534.262 220.042 535.759 221.951 537.779C223.121 539.016 196.697 506.93 210.011 500.928C222.99 495.077 226.009 525.451 226.687 525.032C227.442 524.566 227.221 515.376 230.225 511.313C231.843 509.124 236.602 508.656 240.203 511.313C259.119 525.27 247.46 575.187 247.46 575.187Z',
          fill: 'white',
        }),
        xn = a.createElement('path', {
          fillRule: 'evenodd',
          clipRule: 'evenodd',
          d:
            'M228.535 387.042C228.535 387.042 210.221 386.102 207.725 380.279C205.228 374.455 218.809 377.765 218.809 377.765L228.535 387.042Z',
          fill: 'white',
        }),
        vn = a.createElement('path', {
          fillRule: 'evenodd',
          clipRule: 'evenodd',
          d:
            'M197.562 359.435C193.462 357.141 195.794 351.67 197.562 351.443C202.797 350.769 206.927 362.369 207.504 363.53C208.503 365.542 199.642 360.599 197.562 359.435Z',
          fill: 'white',
        }),
        gn = a.createElement('path', {
          fillRule: 'evenodd',
          clipRule: 'evenodd',
          d:
            'M239.724 394.598C239.724 394.598 229.696 369.033 238.979 371.048C248.262 373.062 245.591 402.782 245.591 402.782L239.724 394.598Z',
          fill: 'white',
        }),
        Cn = a.createElement('path', {
          fillRule: 'evenodd',
          clipRule: 'evenodd',
          d:
            'M232.992 375.977C233.123 380.123 234.894 386.484 238.296 395.158C238.343 395.276 238.404 395.388 238.478 395.492L244.346 403.675C245.174 404.83 246.991 404.335 247.119 402.919L247.225 401.695C248.874 381.879 246.493 371.109 239.304 369.549C235.122 368.642 232.839 371.143 232.992 375.977ZM238.809 372.583C243.275 373.728 245.352 382.015 244.444 397.569L244.387 398.472L241.08 393.859L240.502 392.358C237.645 384.85 236.166 379.331 236.056 375.88L236.048 375.398C236.041 372.783 236.759 372.135 238.654 372.546L238.809 372.583Z',
          fill: '#00160A',
        }),
        yn = a.createElement('path', {
          fillRule: 'evenodd',
          clipRule: 'evenodd',
          d:
            'M204.313 499.378C197.853 502.29 198.301 509.636 203.231 519.642L203.61 520.399C204.512 522.172 205.541 524.004 206.68 525.883L207.072 526.524L207.023 526.492C205.179 525.265 203.588 524.547 202.22 524.337C198.585 523.779 196.732 526.457 196.732 531.119C196.732 549.068 211.889 564.239 241.804 576.755C242.774 577.161 243.876 576.597 244.115 575.573C252.027 541.699 249.537 519.776 236.212 509.945C232.124 506.928 226.213 507.116 223.858 510.302L223.653 510.59C222.652 512.062 221.954 513.999 221.436 516.408L221.413 516.515L221.346 516.25C220.978 514.808 220.589 513.448 220.148 512.085C218.688 507.568 216.942 504.02 214.751 501.646C211.868 498.521 208.284 497.588 204.313 499.378ZM218.945 520.918L219.692 524.437L219.778 524.803C219.833 525.024 219.883 525.202 219.934 525.353C220.002 525.556 220.073 525.724 220.186 525.903C220.327 526.124 220.501 526.319 220.778 526.486C221.317 526.812 222.01 526.831 222.581 526.478C223.316 526.024 223.496 525.634 223.697 524.348L223.791 523.706C223.857 523.231 224.1 521.213 224.142 520.893C224.305 519.618 224.468 518.565 224.669 517.563C225.139 515.21 225.773 513.431 226.592 512.323C227.712 510.807 231.492 510.687 234.193 512.68L234.547 512.947C245.785 521.603 248.218 541.209 241.465 571.891L241.256 572.828L240.564 572.528C213.488 560.719 200.132 546.878 200.132 531.119C200.132 528.256 200.632 527.533 201.704 527.698C203.601 527.989 206.915 530.264 211.378 534.517L211.949 535.07C212.629 535.739 213.465 536.59 214.454 537.622L215.772 539.005C215.795 539.027 215.829 539.057 215.896 539.118L215.918 539.17C215.97 539.255 216.137 539.286 217.252 539.493L217.64 539.356C218.1 539.182 218.173 539.067 218.564 538.453L218.653 538.08C218.707 537.835 218.699 537.777 218.67 537.565L218.596 537.264C218.58 537.205 218.567 537.174 218.547 537.131L218.53 537.095C218.484 536.996 218.458 536.945 218.415 536.88L217.952 536.257L216.774 534.698C216.572 534.427 216.368 534.151 216.142 533.845C214.204 531.214 212.325 528.498 210.559 525.693C208.904 523.066 207.46 520.533 206.281 518.14C202.121 509.697 201.789 504.245 205.71 502.478C210.428 500.351 214.051 504.277 216.913 513.131C217.691 515.537 218.307 517.961 218.945 520.918Z',
          fill: '#00160A',
        }),
        kn = a.createElement('path', {
          fillRule: 'evenodd',
          clipRule: 'evenodd',
          d:
            'M209.585 364.468L210.982 365.739C228.298 381.546 240.354 394.158 246.781 402.91C257.998 418.186 267.038 434.031 274.656 450.809C277.363 456.771 279.814 462.675 282.229 468.943L282.887 470.662C283.64 472.642 284.368 474.597 285.161 476.764L288.542 486.09C297.684 511.123 294.658 512.343 285.954 487.994L282.535 478.552C281.819 476.59 281.163 474.818 280.504 473.068L280.008 471.757C277.399 464.9 274.775 458.524 271.85 452.082C264.316 435.489 255.381 419.828 244.297 404.734L243.789 404.05C237.205 395.282 224.981 382.608 207.514 366.748C206.884 366.177 206.837 365.202 207.409 364.572C207.981 363.943 208.955 363.896 209.585 364.468ZM169.054 329.552L190.618 347.959C192.64 349.693 194.216 351.052 194.968 351.715C195.606 352.277 195.667 353.251 195.105 353.889C194.542 354.527 193.569 354.588 192.93 354.026L187.318 349.188C179.866 342.804 168.1 332.791 167.05 331.893C166.404 331.339 166.329 330.367 166.882 329.721C167.435 329.074 168.408 328.999 169.054 329.552Z',
          fill: '#00160A',
        }),
        wn = a.createElement('path', {
          fillRule: 'evenodd',
          clipRule: 'evenodd',
          d:
            'M208.908 375.243C206.077 375.885 205.124 378.102 206.316 380.883C208.304 385.521 215.676 387.917 228.457 388.573C229.877 388.646 230.623 386.914 229.594 385.933L219.868 376.655C219.673 376.47 219.433 376.339 219.172 376.275C214.429 375.119 211.053 374.757 208.908 375.243ZM218.048 379.158L224.39 385.206L224.009 385.17L223.051 385.069C214.887 384.155 210.243 382.261 209.134 379.674L209.018 379.397C208.679 378.546 208.802 378.412 209.587 378.234C211.034 377.905 213.742 378.164 217.602 379.054L218.048 379.158Z',
          fill: '#00160A',
        }),
        Sn = a.createElement('path', {
          fillRule: 'evenodd',
          clipRule: 'evenodd',
          d:
            'M199.906 584.188C196.045 586.411 197.618 588.726 205.944 592.421C214.929 596.461 231.65 604.261 260.371 606.458C304.855 609.861 345.359 603.44 396.49 603.44C467.278 603.44 498.35 618.994 523.126 615.407C589.542 605.791 604.588 587.129 584.774 582.314C563.021 577.027 493.88 577.673 470.605 576.153L463.402 575.691L457.215 575.536C390.222 573.89 282.837 575.536 261.865 575.536C219.081 575.536 199.906 584.188 199.906 584.188Z',
          fill: 'white',
        }),
        Tn = a.createElement('path', {
          fillRule: 'evenodd',
          clipRule: 'evenodd',
          d:
            'M396.49 603.44C467.278 603.44 498.351 619.531 523.126 615.944C589.542 606.328 604.588 587.129 584.775 582.314C563.021 577.027 484 575.31 464.542 575.731C464.542 575.731 553.995 592.26 549.208 597.734C534.956 614.034 499.466 594.338 435.01 594.912C421.731 595.03 396.49 603.44 396.49 603.44Z',
          fill: '#E7EAEE',
        }),
        An = a.createElement('path', {
          fillRule: 'evenodd',
          clipRule: 'evenodd',
          d:
            'M266.111 576.234C264.388 576.244 263.004 576.248 261.865 576.248L259.912 576.253C232.098 576.383 211.811 579.307 198.965 585.103L198.764 585.206C195.764 586.934 194.614 589.478 196.5 592.091C197.719 593.781 200.271 595.376 204.58 597.317L208.242 598.953C212.812 600.978 215.522 602.074 219.591 603.505L220.033 603.66C231.77 607.761 244.796 610.56 260.196 611.739C271.139 612.576 282.29 612.863 294.515 612.693L298.794 612.618C306.832 612.453 313.679 612.171 326.188 611.499L347.81 610.302C368.414 609.187 380.984 608.741 395.824 608.728L396.49 608.728C423.05 608.728 444.746 610.749 468.811 614.689L470.899 615.037C474.525 615.667 494.469 619.181 499.975 619.972L500.166 619.999C509.774 621.351 516.884 621.622 523.454 620.671L525.29 620.4C555.122 615.943 576.679 609.303 587.566 601.956C598.443 594.616 597.458 586.207 585.675 583.181L585.315 583.091C575.529 580.713 556.954 579.392 528.093 578.527L522.173 578.359C520.448 578.313 518.665 578.267 516.79 578.221L491.664 577.64C481.988 577.401 476.055 577.195 471.564 576.921L463.549 576.408L457.272 576.249L450.892 576.104C432.391 575.719 410.294 575.534 385 575.518L377.48 575.518C359.854 575.529 341.611 575.615 321.243 575.768L266.111 576.234ZM390.882 580.1C416.128 580.143 438.017 580.364 456.118 580.797L463.345 580.977L471.561 581.504C476.083 581.774 482.003 581.977 491.531 582.213L515.733 582.771C518.586 582.841 521.223 582.909 523.752 582.979L529.679 583.152C557.193 584.007 575.077 585.311 584.234 587.536L584.783 587.675C592.378 589.668 592.627 593.022 585.007 598.164C574.587 605.195 531.814 624.033 501.587 617.611L500.197 617.414C493.808 616.464 472.396 611.662 471.135 611.452L468.032 610.944C444.854 607.212 423.698 605.256 398.197 605.172L394.488 605.172C379.239 605.212 366.104 605.722 343.787 606.957L328.3 607.82C313.321 608.636 306.179 608.928 296.86 609.097L296.11 609.11C248.848 610.944 220.033 599.935 220.033 599.935C216.261 598.588 206.502 595.198 206.502 595.198L205.776 594.866C183.008 587.136 232.717 580.954 259.953 580.827L268.443 580.794L317.765 580.369C340.726 580.191 360.941 580.094 380.496 580.092L390.882 580.1Z',
          fill: '#00160A',
        }),
        Pn = a.createElement('path', {
          fillRule: 'evenodd',
          clipRule: 'evenodd',
          d:
            'M495.913 543.221C495.913 543.221 495.793 550.001 497.881 553.139C499.968 556.277 505.789 565.006 511.203 567.302C512.871 568.01 519.238 568.1 523.064 570.335C530.749 574.826 532.46 582.914 523.064 584.628C504.409 588.03 497.881 578.197 497.881 578.197C497.881 578.197 490.195 567.302 482.493 560.078C474.791 552.853 468.654 550.678 468.654 550.678',
          fill: 'white',
        }),
        Rn = a.createElement('path', {
          d:
            'M560.293 245.085C557.697 244.89 556.17 246.864 556.17 249.253C556.17 257.525 569.684 268.837 578.491 268.837C581.072 268.837 583.184 266.991 582.434 264.169C582.151 263.105 581.501 262.161 580.434 260.998L580.199 260.745C579 259.472 577.761 258.335 574.981 255.943L570.723 252.294C569.679 251.39 568.017 249.948 567.515 249.519L566.911 249.005C565.747 248.024 564.847 247.309 564.044 246.741C562.623 245.737 561.523 245.177 560.293 245.085Z',
          fill: 'white',
        }),
        En = a.createElement('path', {
          fillRule: 'evenodd',
          clipRule: 'evenodd',
          d:
            'M473.962 407.267C473.962 407.267 468.845 392.663 455.695 388.709C451.516 387.452 469.795 415.038 453.662 425.328C448.626 428.54 439.672 430.207 428.654 431.775C379.54 438.767 364.732 420.44 334.414 411.49C322.257 407.902 263.125 392.027 254.184 472.892C248.588 523.507 290.974 539.194 328.96 547.236C405.056 563.348 521.659 556.998 558.025 503.895C601.373 440.596 534.749 385.472 525.362 379.645C523.088 378.234 529.607 396.324 530.331 405.473C531.055 414.623 525.362 417.95 525.362 417.95C525.362 417.95 523.118 408.263 503.278 406.601C483.439 404.939 473.962 407.267 473.962 407.267Z',
          fill: 'white',
        }),
        Dn = a.createElement('path', {
          fillRule: 'evenodd',
          clipRule: 'evenodd',
          d:
            'M182.065 339.878C182.76 341.518 184.378 343.689 187.007 346.64C188.743 348.588 191.965 347.615 192.332 345.031C193.172 339.129 191.415 334.986 186.676 334.162C182.967 333.518 180.572 336.358 182.065 339.878ZM189.296 344.599L188.826 344.067C184.401 339.019 183.51 336.724 186.151 337.183C188.884 337.658 189.932 340.13 189.296 344.599Z',
          fill: '#00160A',
        }),
        Ln = a.createElement('path', {
          fillRule: 'evenodd',
          clipRule: 'evenodd',
          d:
            'M197.366 349.922C195.642 350.144 194.237 352.167 193.85 354.402C193.405 356.973 194.361 359.401 196.813 360.773L198.504 361.71C200.134 362.604 201.599 363.371 203.024 364.056L203.685 364.368C204.746 364.858 205.605 365.202 206.258 365.381C206.927 365.565 207.434 365.617 207.975 365.42C209.132 364.997 209.335 363.904 208.935 362.974L208.809 362.692C208.649 362.317 208.254 361.376 208.027 360.851L207.978 360.737C207.359 359.322 206.728 358.017 206.033 356.772C203.46 352.162 200.693 349.494 197.366 349.922ZM203.672 358.846C204.088 359.628 204.486 360.445 204.876 361.309L205.005 361.599L204.627 361.423L204.352 361.292C202.527 360.415 200.598 359.377 198.311 358.097C197.075 357.406 196.636 356.289 196.872 354.926C196.974 354.332 197.207 353.759 197.499 353.339C197.588 353.211 197.676 353.107 197.755 353.031L197.841 352.956L197.758 352.963C199.353 352.758 201.363 354.696 203.356 358.266L203.672 358.846Z',
          fill: '#00160A',
        }),
        Nn = a.createElement('path', {
          fillRule: 'evenodd',
          clipRule: 'evenodd',
          d:
            'M223.587 376.364C223.314 375.177 208.041 347.343 218.766 348.217C229.49 349.092 226.937 380.638 226.563 380.638C226.124 380.638 223.783 377.217 223.587 376.364Z',
          fill: 'white',
        }),
        In = a.createElement('path', {
          fillRule: 'evenodd',
          clipRule: 'evenodd',
          d:
            'M213.419 352.363C213.419 355.026 214.308 358.552 215.901 362.835C216.38 364.121 216.916 365.457 217.505 366.844L217.865 367.681C219.28 370.943 222.117 376.815 222.093 376.708C222.245 377.371 222.882 378.477 223.723 379.693L224.031 380.136C225.059 381.595 225.57 382.123 226.437 382.168L226.803 382.178C227.843 382.232 227.842 382.59 228.082 381.077L228.169 380.523C228.205 380.297 228.242 380.001 228.279 379.648L228.301 379.43C228.398 378.447 228.484 377.163 228.542 375.76C228.694 372.133 228.651 368.251 228.354 364.63L228.273 363.711C227.315 353.558 224.529 347.149 218.89 346.689C215.287 346.395 213.418 348.65 213.419 352.363ZM218.641 349.745C222.234 350.038 224.543 355.67 225.298 364.881C225.584 368.366 225.626 372.124 225.479 375.631L225.428 376.674L225.373 376.581C225.225 376.327 225.123 376.134 225.091 376.05L225.081 376.021C225.015 375.734 221.939 369.367 220.678 366.461C219.966 364.82 219.329 363.254 218.775 361.766C217.299 357.799 216.486 354.57 216.485 352.363C216.485 350.353 217 349.662 218.479 349.735L218.641 349.745Z',
          fill: '#00160A',
        }),
        Fn = a.createElement('path', {
          fillRule: 'evenodd',
          clipRule: 'evenodd',
          d:
            'M265.735 432.91C265.735 432.91 269.094 428.243 270.982 425.925C272.87 423.607 274.895 421.667 274.895 421.667C274.895 421.667 229.287 417.128 213.489 405.369C192.859 390.014 174.354 364.546 155.714 359.159C133.43 352.72 125.183 367.656 118.756 368.874C99.1757 372.584 63.3151 383.141 79.7128 415.028C84.7752 424.872 101.175 429.45 112.728 423.962C125.624 417.836 141.505 402.83 158.208 402.83C177.523 402.83 180.886 418.653 205.405 427.042C220.453 432.191 265.735 432.91 265.735 432.91Z',
          fill: 'white',
        }),
        Un = a.createElement('path', {
          fillRule: 'evenodd',
          clipRule: 'evenodd',
          d:
            'M320.041 545.745C320.041 545.745 331.175 557.899 335.789 565.718C340.402 573.538 338.786 577.778 345.191 581.392C354.813 586.822 364.731 585.452 369.144 582.565C373.557 579.678 369.417 572.288 360.166 572.288C357.891 572.288 355.214 567.063 353.919 563.607C352.623 560.15 353.216 551.643 353.216 551.643L320.041 545.745Z',
          fill: 'white',
        }),
        zn = a.createElement('path', {
          fillRule: 'evenodd',
          clipRule: 'evenodd',
          d:
            'M527.427 382.705C527.427 382.705 599.974 471.686 497.953 523.916C426.602 560.445 309.376 540.723 309.376 540.723C309.376 540.723 436.99 575.03 520.398 533.669C573.618 507.277 584.145 462.417 558.755 416.742C552.111 404.79 527.427 382.705 527.427 382.705Z',
          fill: '#E7EAEE',
        }),
        Mn = a.createElement('path', {
          fillRule: 'evenodd',
          clipRule: 'evenodd',
          d:
            'M523.166 378.268C524.08 377.057 525.505 377.042 526.568 377.702C529.993 379.828 536.189 384.973 542.149 391.009C550.421 399.386 557.807 408.879 563.47 419.11C578.976 447.124 577.591 476.452 557.912 505.188C540.517 530.588 506.486 545.918 458.717 552.785C416.935 558.791 368.566 557.96 328.486 549.474L326.476 549.042C303.539 544.035 286.629 537.674 273.835 527.843C257.055 514.948 249.228 496.905 251.911 472.64C255.972 435.911 270.493 415.498 292.383 408.347C300.52 405.688 309.236 405.035 318.231 405.922C324.399 406.531 329.578 407.678 335.061 409.297L336.036 409.588C341.993 411.395 347.062 413.389 354.881 416.853L360.661 419.442C372.638 424.811 379.569 427.357 388.541 429.166C399.831 431.443 412.262 431.711 427.345 429.649L429.582 429.331C441.893 427.536 448.501 425.907 452.432 423.4C457.033 420.465 458.675 415.708 458.017 409.122C457.718 406.126 456.974 402.965 455.8 399.281L455.476 398.287C454.969 396.782 453.488 392.552 453.215 391.633C452.878 390.495 452.723 389.702 452.778 388.964C452.917 387.114 454.539 385.972 456.353 386.518C465.946 389.403 472.835 397.781 477.066 411.363C477.442 412.57 476.769 413.852 475.563 414.228C474.357 414.603 473.074 413.93 472.699 412.724C469.478 402.385 464.774 395.659 458.615 392.374L458.21 392.165L459.876 397.021L459.922 397.161C464.15 415.192 461.009 429.331 432.569 433.7C431.004 433.94 399.555 436.646 386.498 433.415C366.716 428.52 338.642 410.252 321.812 409.588C304.981 408.924 301.281 410.252 293.803 412.695C273.739 419.25 257.052 440.48 253.684 475.543C251.906 494.058 261.907 512.818 278.306 524.375C320.041 553.785 416.824 555.186 458.066 549.257C504.692 542.554 539.618 526.725 556.137 502.603C574.763 475.405 574.186 447.917 559.468 421.326C554.022 411.488 546.89 402.321 538.894 394.223C535.252 390.535 531.528 387.201 528.505 384.77L527.996 384.364L528.438 386.107L529.854 391.55L530.372 393.589C530.452 393.911 530.53 394.225 530.605 394.535L530.875 395.654C531.832 399.675 532.414 402.796 532.611 405.293C533.158 412.195 531.159 417.211 526.516 419.925C525.425 420.562 524.024 420.195 523.387 419.104C522.749 418.013 523.117 416.612 524.208 415.975C527.155 414.253 528.47 410.951 528.051 405.654C527.875 403.439 527.327 400.506 526.418 396.686L526.162 395.622C526.05 395.167 525.935 394.701 525.812 394.215L523.819 386.512C523.522 385.346 523.299 384.429 523.121 383.63L523.068 383.394C522.764 382.007 522.605 381.013 522.596 380.265C522.587 379.5 522.696 378.89 523.166 378.268Z',
          fill: '#00160A',
        }),
        Wn = a.createElement('path', {
          fillRule: 'evenodd',
          clipRule: 'evenodd',
          d:
            'M473.779 404.746L475.414 404.471C486.204 402.691 494.912 402.048 501.567 402.552C508.588 403.083 516.031 404.981 523.895 408.236C524.933 408.665 525.426 409.855 524.996 410.892C524.567 411.93 523.378 412.423 522.34 411.993C514.856 408.896 507.829 407.104 501.26 406.606C494.658 406.106 485.717 406.818 474.469 408.754C473.363 408.944 472.311 408.202 472.121 407.095C471.93 405.988 472.673 404.937 473.779 404.746Z',
          fill: '#00160A',
        }),
        Hn = a.createElement('path', {
          fillRule: 'evenodd',
          clipRule: 'evenodd',
          d:
            'M486.784 395.624C491.654 394.623 496.102 395.141 500.071 397.19C503.87 399.153 507.161 401.621 509.938 404.593C510.519 405.215 510.486 406.19 509.864 406.771C509.243 407.352 508.268 407.318 507.687 406.697C505.154 403.986 502.147 401.73 498.657 399.928C495.336 398.213 491.605 397.779 487.404 398.641C486.571 398.813 485.756 398.276 485.585 397.442C485.414 396.609 485.951 395.795 486.784 395.624Z',
          fill: '#00160A',
        }),
        Bn = a.createElement('path', {
          fillRule: 'evenodd',
          clipRule: 'evenodd',
          d:
            'M496.631 387.556C497.068 386.826 498.014 386.588 498.744 387.025C502.65 389.361 505.884 391.975 508.439 394.87C511.019 397.793 513.137 401.53 514.804 406.07C515.097 406.869 514.687 407.754 513.888 408.047C513.089 408.34 512.204 407.93 511.911 407.132C510.37 402.932 508.44 399.527 506.129 396.909C503.794 394.263 500.807 391.849 497.163 389.669C496.432 389.232 496.195 388.287 496.631 387.556Z',
          fill: '#00160A',
        }),
        Zn = a.createElement('path', {
          fillRule: 'evenodd',
          clipRule: 'evenodd',
          d:
            'M451.997 424.162C452.641 423.242 453.909 423.019 454.828 423.663C455.748 424.307 436.118 452.263 436.118 457.687C436.118 463.569 439.007 467.505 446.704 473.714L449.965 476.307L450.914 477.068C455.684 480.922 458.463 483.626 460.825 487.06C464.126 491.858 465.68 497.216 465.284 503.57C464.796 511.407 462.431 516.823 457.746 523.073L457.321 523.632C456.795 524.312 454.476 527.274 453.841 528.142C451.574 531.237 450.507 533.568 450.313 536.304C449.458 548.361 455.131 562.921 467.452 579.928C468.11 580.838 467.907 582.109 466.998 582.768C466.089 583.426 464.817 583.223 464.159 582.314C451.329 564.604 445.322 549.189 446.257 536.016C446.505 532.523 447.778 529.627 450.256 526.158L450.56 525.739C451.289 524.743 453.949 521.349 454.173 521.055C458.637 515.2 465.089 506.633 459.923 490.331C457.321 482.123 432.622 476.307 431.81 458.836C431.619 454.72 438.481 443.455 451.997 424.162Z',
          fill: '#00160A',
        }),
        Vn = a.createElement('path', {
          d:
            'M459.472 508.689L456.635 508.72C439.838 508.935 429.621 509.781 426.465 511.135L426.35 511.186C421.709 513.314 418.059 516.2 415.268 519.659C413.101 522.345 411.57 525.224 410.569 528.099C410.271 528.955 410.039 529.756 409.867 530.485L409.75 531.002L414.608 537.228C414.657 537.29 414.701 537.354 414.741 537.42L414.789 537.487L414.942 537.711C415.991 539.233 417.183 540.721 418.716 542.456L419.422 543.242C420.681 544.616 424.688 548.935 426.049 550.49C428.962 553.816 431.415 557.015 433.764 560.689C437.345 566.289 440.504 572.756 443.34 580.587L443.544 581.159L443.747 581.747C443.995 582.472 444.237 583.217 444.501 584.057L445.698 587.983C447.465 593.771 448.7 596.429 450.658 598.039L450.987 598.302C453.553 600.301 455.944 600.794 462.593 601.005L464.536 601.059C473.374 601.301 477.984 594.282 472.927 589.182C471.341 587.583 466.11 586.343 457.555 585.824C456.434 585.756 457.486 582.868 457.555 581.747C457.623 580.626 458.586 579.773 459.707 579.841C460.698 579.901 461.65 579.97 462.563 580.048C451.232 563.626 445.701 549.631 446.58 537.228C446.828 533.734 446.453 532.367 448.932 528.898L449.405 528.249C450.308 527.044 452.64 524.069 452.849 523.795C454.757 521.292 456.086 519.241 457.153 517.003L457.362 516.553L457.433 516.391L457.551 516.13C458.112 514.846 458.706 512.634 459.311 509.534L459.472 508.689Z',
          fill: 'white',
        }),
        Gn = a.createElement('path', {
          fillRule: 'evenodd',
          clipRule: 'evenodd',
          d:
            'M411.72 528.643C413.322 533.317 416.117 536.169 420.008 540.584L420.555 541.198C421.527 542.267 425.933 547.01 427.374 548.656C430.287 551.982 432.74 555.181 435.089 558.855C438.67 564.455 441.829 570.922 444.664 578.753C444.801 579.13 444.936 579.516 445.072 579.913L445.443 581.025C445.526 581.279 445.61 581.54 445.695 581.81L446.18 583.371C446.428 584.183 446.93 585.845 447.023 586.149L447.29 587.015C448.919 592.207 450.126 594.678 451.983 596.205L452.312 596.468C454.769 598.382 457.065 598.915 463.092 599.142L465.861 599.225C474.699 599.467 479.309 592.449 474.251 587.349C472.665 585.749 467.435 584.509 458.879 583.99C457.758 583.922 456.905 582.958 456.973 581.837C457.041 580.716 458.005 579.863 459.126 579.931L460.193 580C469.127 580.619 474.681 582.007 477.139 584.485C485.055 592.469 478.006 603.4 466.111 603.297L464.68 603.261C456.188 603.032 453.143 602.424 449.4 599.346C446.73 597.15 445.28 594.199 443.416 588.251L442.209 584.291L441.822 583.047C441.656 582.526 441.499 582.043 441.342 581.575L441.224 581.228C441.096 580.853 440.969 580.491 440.841 580.138C438.106 572.585 435.08 566.388 431.663 561.046C429.604 557.825 427.459 554.987 424.95 552.067L424.315 551.335C422.847 549.659 418.065 544.516 417.4 543.772C413.064 538.925 410.473 535.01 408.624 529.85L408.436 529.312C404.84 518.821 400.223 515.241 394.192 517.477C393.139 517.868 381.355 523.52 392.768 515.932C404.18 508.343 411.72 528.643 411.72 528.643Z',
          fill: '#00160A',
        }),
        qn = a.createElement('path', {
          fillRule: 'evenodd',
          clipRule: 'evenodd',
          d:
            'M482.672 456.41C480.456 456.41 477.277 450.047 477.277 446.937C477.277 443.828 485.232 444.88 485.232 444.88C485.232 444.88 493.587 446 492.435 449.127C491.284 452.255 483.903 456.41 482.672 456.41Z',
          fill: '#FFB61D',
        }),
        Kn = a.createElement('ellipse', {
          cx: 469.575,
          cy: 433.517,
          rx: 4.38775,
          ry: 8.1971,
          fill: '#00160A',
        }),
        Yn = a.createElement('ellipse', {
          cx: 511.538,
          cy: 435.371,
          rx: 4.80869,
          ry: 8.0687,
          fill: '#00160A',
        }),
        Jn = a.createElement('path', {
          fillRule: 'evenodd',
          clipRule: 'evenodd',
          d:
            'M508.4 448.917C512.063 447.344 516.116 447.046 520.517 448.007C524.821 448.947 537.786 457.062 537.333 457.781C536.88 458.501 523.751 451.867 519.86 451.017C516.065 450.189 512.665 450.438 509.616 451.748C508.834 452.084 507.928 451.722 507.592 450.941C507.256 450.159 507.618 449.253 508.4 448.917Z',
          fill: '#00160A',
        }),
        Qn = a.createElement('path', {
          fillRule: 'evenodd',
          clipRule: 'evenodd',
          d:
            'M510.733 454.242C514.578 454.445 515.58 453.568 520.847 456.987C526.114 460.406 530.05 468.458 529.329 468.911C528.609 469.363 524.406 462.182 519.582 458.566C514.758 454.95 509.069 456.548 509.114 455.699C509.156 454.896 509.805 454.27 510.593 454.241L510.733 454.242Z',
          fill: '#00160A',
        }),
        Xn = a.createElement('path', {
          fillRule: 'evenodd',
          clipRule: 'evenodd',
          d:
            'M484.032 459.748C482.963 466.387 483.232 470.614 483.632 475.329C484.032 480.045 487.802 486.835 488.18 489.673C488.558 492.511 481.049 480.808 480.595 475.846C480.14 470.885 476.922 457.399 482.544 458.026C482.544 458.026 484.151 459.01 484.032 459.748Z',
          fill: '#00160A',
        }),
        _n = a.createElement('path', {
          fillRule: 'evenodd',
          clipRule: 'evenodd',
          d:
            'M456.051 449.729C459.465 449.729 460.849 449.813 464.173 450.468C465.008 450.632 465.552 451.442 465.388 452.276C465.223 453.111 464.413 453.655 463.579 453.491C462.395 453.258 460.126 452.268 456.363 452.308C451.22 452.362 446.744 455.216 446.52 454.744C446.155 453.975 452.637 449.729 456.051 449.729Z',
          fill: '#00160A',
        }),
        $n = a.createElement('path', {
          fillRule: 'evenodd',
          clipRule: 'evenodd',
          d:
            'M461.635 443.115C462.463 443.31 462.976 444.14 462.781 444.968C462.586 445.796 461.756 446.309 460.928 446.113C453.531 444.369 447.597 444.416 443.411 444.252C439.294 444.091 430.059 444.736 429.788 443.93C429.518 443.123 454.063 441.329 461.635 443.115Z',
          fill: '#00160A',
        }),
        er = a.createElement('path', {
          fillRule: 'evenodd',
          clipRule: 'evenodd',
          d:
            'M495.949 541.188C497.072 541.207 497.966 542.134 497.946 543.256C497.873 547.402 498.453 550.329 499.574 552.013C504.273 559.079 508.259 563.845 511.997 565.431C512.099 565.474 512.342 565.536 512.72 565.609L513.281 565.71C513.701 565.78 515.476 566.048 515.786 566.097C516.955 566.282 517.918 566.459 518.858 566.672C520.934 567.143 522.66 567.745 524.09 568.58C528.386 571.09 531.221 574.76 531.497 578.368C531.816 582.538 528.785 585.651 523.429 586.628C510.276 589.027 501.069 586.676 496.219 579.369C491.171 572.213 486.13 566.277 481.102 561.561C476.155 556.92 471.762 553.937 467.974 552.594C466.916 552.219 466.362 551.057 466.738 549.998C467.113 548.94 468.275 548.386 469.333 548.761C473.728 550.319 478.562 553.603 483.884 558.595C489.126 563.512 494.343 569.655 499.575 577.072C503.396 582.829 510.979 584.765 522.699 582.628C526.175 581.994 527.585 580.545 527.442 578.678C527.281 576.575 525.281 573.986 522.038 572.091C521.025 571.499 519.665 571.025 517.959 570.638C517.225 570.471 516.458 570.327 515.549 570.178L512.611 569.721L512.043 569.621C511.339 569.488 510.838 569.356 510.409 569.174C507.614 567.988 504.742 565.437 501.734 561.841C499.752 559.47 498.23 557.335 496.188 554.265C494.525 551.765 493.794 548.08 493.88 543.185C493.9 542.062 494.826 541.168 495.949 541.188Z',
          fill: '#00160A',
        }),
        tr = a.createElement('path', {
          fillRule: 'evenodd',
          clipRule: 'evenodd',
          d:
            'M512.371 578.698C512.572 578.025 513.28 577.643 513.953 577.844C516.046 578.469 517.528 579.16 518.432 579.982C519.289 580.761 520.135 581.956 521.003 583.579C521.334 584.198 521.101 584.968 520.482 585.299C519.863 585.63 519.093 585.396 518.762 584.778C518.019 583.389 517.329 582.414 516.723 581.863C516.163 581.354 514.985 580.805 513.225 580.279C512.553 580.078 512.171 579.37 512.371 578.698Z',
          fill: '#00160A',
        }),
        nr = a.createElement('path', {
          fillRule: 'evenodd',
          clipRule: 'evenodd',
          d:
            'M519.001 576.008C519.223 575.343 519.942 574.982 520.608 575.204C522.401 575.8 523.734 576.481 524.619 577.285C525.497 578.083 526.34 579.372 527.193 581.168C527.494 581.802 527.224 582.56 526.59 582.861C525.956 583.162 525.198 582.892 524.897 582.258C524.173 580.735 523.496 579.698 522.91 579.166C522.331 578.64 521.292 578.11 519.806 577.615C519.14 577.394 518.78 576.674 519.001 576.008Z',
          fill: '#00160A',
        }),
        rr = a.createElement('path', {
          fillRule: 'evenodd',
          clipRule: 'evenodd',
          d:
            'M464.6 593.52C464.821 592.854 465.541 592.494 466.206 592.716C467.999 593.312 469.332 593.993 470.217 594.797C471.095 595.595 471.938 596.884 472.791 598.68C473.092 599.314 472.822 600.072 472.188 600.373C471.554 600.674 470.796 600.404 470.495 599.77C469.771 598.247 469.094 597.21 468.508 596.678C467.93 596.152 466.891 595.622 465.404 595.127C464.738 594.906 464.378 594.186 464.6 593.52Z',
          fill: '#00160A',
        }),
        ar = a.createElement('path', {
          fillRule: 'evenodd',
          clipRule: 'evenodd',
          d:
            'M468.296 589.207C468.518 588.541 469.237 588.181 469.903 588.403C471.696 588.999 473.029 589.679 473.914 590.484C474.792 591.281 475.634 592.57 476.487 594.367C476.788 595.001 476.518 595.759 475.884 596.06C475.25 596.361 474.493 596.091 474.192 595.457C473.468 593.933 472.791 592.897 472.205 592.365C471.626 591.839 470.587 591.309 469.101 590.814C468.435 590.592 468.075 589.873 468.296 589.207Z',
          fill: '#00160A',
        }),
        sr = a.createElement('path', {
          fillRule: 'evenodd',
          clipRule: 'evenodd',
          d:
            'M318.668 544.246C319.496 543.488 333.53 559.584 336.54 564.685C337.51 566.329 338.276 567.912 338.957 569.605C339.166 570.127 339.362 570.643 339.573 571.226L340.371 573.48C341.555 576.771 343.522 578.116 346.19 579.622C354.017 584.038 363.26 583.985 368.03 580.864C370.676 579.133 367.103 574.321 360.166 574.321C356.924 574.321 354.135 569.975 352.015 564.32C351.022 561.672 350.773 557.443 351.187 551.502C351.266 550.382 352.237 549.537 353.357 549.615C354.477 549.693 355.322 550.664 355.244 551.785C354.867 557.186 355.088 560.933 355.822 562.893L356.036 563.446C357.464 567.027 359.565 570.255 360.166 570.255C365.054 570.255 369.188 572.138 371.411 575.132C373.763 578.299 373.453 582.176 370.257 584.266C364.178 588.244 353.307 588.307 344.192 583.163C340.669 581.175 339.125 579.115 337.68 575.226L336.904 573.041C336.645 572.311 336.423 571.717 336.184 571.122C335.576 569.611 334.899 568.211 334.038 566.752C331.047 561.683 325.877 555.126 318.542 547.119C317.783 546.291 317.84 545.005 318.668 544.246Z',
          fill: '#00160A',
        }),
        cr = a.createElement('path', {
          fillRule: 'evenodd',
          clipRule: 'evenodd',
          d:
            'M356.318 578.698C356.519 578.025 357.227 577.643 357.899 577.844C359.993 578.469 361.474 579.16 362.378 579.982C363.235 580.761 364.082 581.956 364.95 583.579C365.281 584.198 365.048 584.968 364.429 585.299C363.81 585.63 363.04 585.396 362.709 584.778C361.966 583.389 361.276 582.414 360.669 581.863C360.109 581.354 358.932 580.805 357.172 580.279C356.5 580.078 356.117 579.37 356.318 578.698Z',
          fill: '#00160A',
        }),
        ir = a.createElement('path', {
          fillRule: 'evenodd',
          clipRule: 'evenodd',
          d:
            'M361.1 576.625C361.321 575.959 362.041 575.599 362.706 575.82C364.499 576.417 365.832 577.097 366.717 577.901C367.595 578.699 368.438 579.988 369.291 581.785C369.592 582.419 369.322 583.177 368.688 583.478C368.054 583.779 367.296 583.509 366.995 582.875C366.271 581.351 365.594 580.315 365.008 579.782C364.43 579.257 363.391 578.726 361.904 578.232C361.238 578.01 360.878 577.291 361.1 576.625Z',
          fill: '#00160A',
        }),
        or = a.createElement('path', {
          fillRule: 'evenodd',
          clipRule: 'evenodd',
          d:
            'M126.717 361.57L126.287 361.866C124.927 362.817 122.307 364.728 121.73 365.134L121.671 365.175C120.176 366.205 119.166 366.727 118.377 366.876C104.437 369.517 92.3974 372.473 84.1561 378.713C72.6325 387.438 66.4077 402.695 74.3035 418.049C79.922 428.974 101.163 431.707 113.6 425.798C115.728 424.787 117.995 423.522 120.73 421.849L121.867 421.147C122.26 420.902 122.664 420.648 123.095 420.376L126.073 418.475L129.329 416.39L130.52 415.637C142.491 408.116 150.097 404.863 158.208 404.863C164.912 404.863 169.631 406.704 175.558 411.052L176.005 411.383C177.034 412.152 183.713 417.48 185.969 419.122C191.812 423.377 197.582 426.515 204.746 428.966L205.376 429.175C215.86 432.568 235.914 434.47 265.702 434.943C266.368 434.954 266.996 434.638 267.385 434.098L268.546 432.495C270.214 430.206 271.553 428.443 272.558 427.209C273.765 425.727 275.013 424.37 276.301 423.135C277.555 421.934 276.823 419.816 275.096 419.644L273.304 419.462C244.228 416.437 224.656 411.147 214.703 403.738L213.977 403.194C208.669 399.18 203.599 394.65 195.872 387.236L185.885 377.643C181.937 373.881 180.549 372.658 177.783 370.308L177.35 369.941C170.883 364.457 165.272 360.697 159.83 358.454C158.635 357.962 157.452 357.545 156.279 357.206C144.159 353.704 135.459 355.65 126.717 361.57ZM155.15 361.113C156.178 361.41 157.22 361.777 158.28 362.214C163.103 364.201 168.208 367.582 174.125 372.541L176.441 374.509C178.99 376.701 180.755 378.341 186.629 383.986L193.595 390.687C201.485 398.24 206.652 402.815 212.275 407L212.605 407.243C222.819 414.663 241.373 419.878 268.364 423.009L270.572 423.258L270.541 423.293C270.286 423.585 270.033 423.883 269.782 424.184L269.227 424.861L268.803 425.393C267.997 426.412 267.039 427.677 265.927 429.189L264.706 430.859L262.235 430.814C234.216 430.245 215.44 428.327 206.063 425.118C199.57 422.897 194.313 420.089 189 416.295L188.362 415.835C186.197 414.259 179.544 408.952 178.438 408.126C171.651 403.056 166.062 400.797 158.208 400.797C149.103 400.797 140.963 404.274 128.378 412.18L126.444 413.407L122.296 416.066C121.065 416.851 120.092 417.465 119.147 418.049L118.096 418.691C115.703 420.141 113.705 421.247 111.855 422.125C101.312 427.134 86.0832 422.97 81.5209 414.098C74.5426 400.528 76.998 390.555 86.9699 383.005C94.5877 377.238 105.761 373.405 119.134 370.871C120.534 370.606 121.883 369.936 123.643 368.752L123.978 368.524C124.499 368.164 127.664 365.853 128.871 365.023L128.997 364.937C136.805 359.649 144.292 357.975 155.15 361.113Z',
          fill: '#00160A',
        }),
        ur = a.createElement('path', {
          fillRule: 'evenodd',
          clipRule: 'evenodd',
          d:
            'M642.085 416.371L641.893 416.837L641.507 417.799C636.506 430.486 632.092 449.925 628.237 476.161L628.013 477.702L628 477.627C626.507 468.829 624.622 461.993 622.328 457.096C618.342 448.589 612.664 445.378 605.953 448.43C584.176 458.337 585.476 498.621 608.538 569.413C608.844 570.355 609.722 570.992 610.713 570.992H635.749C636.421 570.992 637.059 570.697 637.494 570.184C668.758 533.309 682.758 508.518 679.336 494.898L679.225 494.466C676.11 482.748 668.321 480.238 657.215 486.534L656.82 486.76L657.373 485.486C676.642 440.849 680.178 413.364 667.158 402.652C657.599 394.788 648.877 399.991 642.085 416.371ZM664.624 404.419C676.086 413.849 672.012 444.729 650.27 492.59C649.276 494.779 674.899 477.627 674.899 496.012L674.981 496.362C677.448 507.679 664.716 530.525 636.644 564.091L634.687 566.417L610.713 568.126C610.713 568.126 578.391 461.405 607.848 452.594C616.324 450.059 622.578 462.369 625.68 495.667C625.934 498.394 629.894 498.452 630.228 495.734L630.499 493.54C634.955 457.927 640.242 432.758 646.311 418.123L646.658 417.298C652.326 404.027 658.22 399.15 664.624 404.419Z',
          fill: '#00160A',
        }),
        lr = a.createElement('path', {
          d:
            'M664.251 406.185C675.713 415.615 671.069 444.49 649.327 492.351C648.332 494.539 650.954 496.584 652.834 495.086L653.598 494.484C665.951 484.869 672.284 485.604 674.899 496.012L674.981 496.362C677.448 507.679 664.716 530.525 636.644 564.091L634.687 566.417H612.375L611.574 563.924C590.54 497.997 589.71 460.846 607.848 452.594C616.215 448.788 622.578 462.369 625.68 495.667C625.934 498.394 629.894 498.452 630.228 495.734L630.499 493.54C634.955 457.927 640.242 432.758 646.311 418.123L646.658 417.298C652.326 404.027 657.847 400.916 664.251 406.185Z',
          fill: 'white',
        }),
        dr = a.createElement('circle', {
          cx: 604.647,
          cy: 481.759,
          r: 8.13278,
          fill: '#E7EAEE',
        }),
        pr = a.createElement('circle', {
          cx: 655.477,
          cy: 428.896,
          r: 8.13278,
          fill: '#E7EAEE',
        }),
        fr = a.createElement('circle', {
          cx: 659.543,
          cy: 507.174,
          r: 8.13278,
          fill: '#E7EAEE',
        }),
        br = a.createElement('path', {
          fillRule: 'evenodd',
          clipRule: 'evenodd',
          d:
            'M228.485 576.642C214.13 576.869 164.762 580.527 163.909 578.695C162.818 576.352 216.653 573.271 228.388 573.085L232.064 573.035C242.734 572.92 228.485 576.642 228.485 576.642ZM439.654 571.883C440.917 571.85 441.968 572.847 442.001 574.11C442.034 575.372 441.038 576.423 439.775 576.457L419.342 576.961C406.625 577.253 391.885 577.556 370.103 577.985C368.84 578.01 367.796 577.006 367.771 575.743C367.747 574.48 368.75 573.436 370.013 573.411L408.583 572.625C420.293 572.372 429.7 572.146 439.654 571.883ZM492.355 570.818C493.618 570.798 494.658 571.805 494.678 573.069C494.698 574.332 493.69 575.372 492.427 575.392L487.067 575.457L470.668 575.571C467.234 575.606 464.546 575.653 461.377 575.73C460.115 575.761 459.066 574.763 459.035 573.5C459.004 572.237 460.003 571.188 461.265 571.157L465.299 571.07C467.94 571.022 470.624 570.992 474.19 570.966L487.827 570.875C489.412 570.86 490.848 570.841 492.355 570.818ZM640.594 566.417C640.594 566.417 644.701 565.709 674.684 567.953C675.943 568.048 676.888 569.145 676.794 570.405C676.699 571.665 661.873 571.028 641.604 570.993L636.03 571.002C621.147 571.068 607.321 571.471 584.374 572.415L555.411 573.639C543.052 574.145 535.678 574.391 526.712 574.603C525.449 574.633 524.401 573.633 524.371 572.37C524.341 571.107 525.341 570.059 526.604 570.03L533.804 569.841C542.369 569.594 551.171 569.249 566.776 568.583L583.324 567.88C609.197 566.81 623.585 566.417 640.594 566.417Z',
          fill: '#00160A',
        }),
        jr = a.createElement('path', {
          d:
            'M571.287 237.158L571.811 236.194C575.913 228.766 579.486 225.077 583.652 226.281C583.99 226.378 584.321 226.511 584.645 226.679C587.199 228.003 587.812 230.464 587.095 233.823L587.049 234.03L587.169 233.857C588.379 232.139 589.533 230.811 590.729 229.826L590.986 229.621C593.646 227.55 596.467 227.358 599.023 229.515C603.102 232.959 602.64 238.736 599.309 242.291L599.124 242.483C598.661 242.951 598.382 243.964 598.071 246.348L597.802 248.437C597.479 250.847 597.262 251.904 596.754 253.537C595.794 256.621 594.219 259.193 591.768 261.294C588.687 263.935 583.486 263.566 576.161 260.556C575.374 260.233 574.999 259.333 575.322 258.546C575.645 257.759 565.048 248.413 564.727 248.822L564.624 248.942C564.034 249.555 563.059 249.575 562.446 248.985L560.957 247.551C560.06 246.686 560.507 245.17 561.729 244.93C563.968 244.491 565.705 244.006 566.926 243.489C567.951 243.054 568.51 242.638 568.644 242.369C568.644 242.369 570.869 237.937 571.287 237.158Z',
          fill: 'white',
        }),
        mr = a.createElement('path', {
          fillRule: 'evenodd',
          clipRule: 'evenodd',
          d:
            'M560.293 245.085C557.697 244.89 556.17 246.864 556.17 249.253C556.17 257.525 569.684 268.837 578.49 268.837C581.071 268.837 583.183 266.991 582.434 264.169C582.151 263.105 581.5 262.161 580.434 260.998L580.199 260.745C579 259.472 577.76 258.335 574.981 255.943L570.723 252.294C569.678 251.39 568.017 249.948 567.515 249.519L566.91 249.005C565.747 248.024 564.847 247.309 564.043 246.741C562.623 245.737 561.522 245.177 560.293 245.085ZM559.251 249.253C559.251 246.019 563.884 250.49 569.461 255.275L573.166 258.445C577.701 262.355 583.237 266.423 580.434 266.721C571.552 267.667 559.251 255.889 559.251 249.253Z',
          fill: '#00160A',
        }),
        hr = a.createElement('path', {
          fillRule: 'evenodd',
          clipRule: 'evenodd',
          d:
            'M561.005 223.407C561.641 222.843 564.821 220.623 563.179 223.538C561.537 226.454 552.042 230.152 561.537 244.896C561.898 245.456 561.458 246.582 560.666 246.893C559.874 247.204 558.98 246.814 558.669 246.022C556.269 239.908 555.158 235.482 555.371 232.604C555.596 229.555 557.51 226.505 561.005 223.407Z',
          fill: '#00160A',
        }),
        Or = a.createElement('path', {
          fillRule: 'evenodd',
          clipRule: 'evenodd',
          d:
            'M549.142 228.54C549.309 227.706 550.955 225.642 550.955 227.333C550.955 229.024 548.536 233.313 551.941 238.146C555.345 242.979 561.203 246.256 560.702 246.944C560.201 247.632 559.237 247.783 558.55 247.282C553.621 243.691 550.628 240.882 549.5 238.681C548.324 236.383 548.243 233.021 549.142 228.54Z',
          fill: '#00160A',
        }),
        xr = a.createElement('path', {
          fillRule: 'evenodd',
          clipRule: 'evenodd',
          d:
            'M571.287 237.158L571.811 236.194C575.913 228.766 579.486 225.077 583.652 226.281C583.99 226.378 584.321 226.511 584.645 226.679C587.199 228.003 587.812 230.464 587.095 233.823L587.049 234.03L587.169 233.857C588.379 232.139 589.533 230.811 590.729 229.826L590.986 229.621C593.646 227.55 596.467 227.358 599.023 229.515C603.102 232.959 602.64 238.736 599.309 242.291L599.124 242.483C598.661 242.951 598.382 243.964 598.071 246.348L597.802 248.437C597.479 250.847 597.262 251.904 596.754 253.537C595.794 256.621 594.219 259.193 591.768 261.294C588.687 263.935 583.486 263.566 576.161 260.556C575.374 260.233 574.999 259.333 575.322 258.546C575.645 257.759 586.736 264.203 590.986 259.193C595.236 254.183 595.695 243.82 596.92 240.679L597.217 240.131C599.567 237.755 599.646 234.073 597.035 231.869C595.688 230.732 594.467 230.815 592.878 232.052C591.431 233.178 589.923 235.113 588.183 237.928L587.674 238.767C586.818 240.211 585.103 243.204 584.876 243.585L584.563 244.103C583.508 245.827 582.163 246.907 581.963 246.953C581.764 247 581.48 246.839 581.41 245.381C581.387 244.901 581.509 244.419 581.764 243.762L581.866 243.508C582.175 242.756 583.877 239.22 583.994 238.966C584.51 237.853 584.925 236.882 585.269 235.967C586.654 232.277 584.593 230.122 583.228 229.415C583.081 229.339 582.938 229.281 582.797 229.241C580.681 228.629 577.737 231.77 574.3 238.063L573.555 239.456C573.005 240.506 572.466 241.586 571.406 243.732C570.636 245.293 568.58 246.412 565.152 247.314L564.964 247.361L564.981 247.406C565.131 247.88 565.048 248.413 564.727 248.822L564.624 248.942C564.034 249.555 563.059 249.575 562.446 248.985L560.957 247.551C560.06 246.686 560.507 245.17 561.729 244.93C563.968 244.491 565.705 244.006 566.926 243.489C567.951 243.054 568.51 242.638 568.644 242.369L570.084 239.472C570.526 238.596 570.869 237.937 571.287 237.158Z',
          fill: '#00160A',
        }),
        vr = a.createElement('ellipse', {
          cx: 591.5,
          cy: 241.869,
          rx: 3.5,
          ry: 2.86947,
          fill: '#FFB61D',
        }),
        gr = a.createElement('ellipse', {
          cx: 581.5,
          cy: 233.869,
          rx: 3.5,
          ry: 2.86947,
          fill: '#FFB61D',
        }),
        Cr = a.createElement('path', {
          fillRule: 'evenodd',
          clipRule: 'evenodd',
          d:
            'M559.984 253.996C559.495 253.562 558.885 252.781 558.347 251.935L557.654 252.243L556.835 252.594C556.67 252.67 556.564 252.728 556.531 252.776C556.437 252.952 556.219 253.019 556.041 252.926C555.868 252.833 555.798 252.615 555.893 252.439C555.958 252.272 556.418 251.749 557.273 251.238C557.427 251.145 557.598 251.059 557.782 250.974C557.467 250.385 557.219 249.815 557.103 249.359C556.927 248.685 557.068 248.208 557.299 248.04C557.525 247.874 558.094 247.843 558.959 248.562C559.118 248.683 559.143 248.909 559.022 249.067C558.902 249.224 558.676 249.253 558.517 249.132C558.352 249.01 558.186 248.941 558.052 248.892L558.117 249.149C558.143 249.242 558.175 249.338 558.219 249.431C558.374 249.771 558.571 250.158 558.792 250.556C559.469 250.3 560.239 250.068 561.07 249.957C561.476 249.902 561.889 249.891 562.318 249.895C562.564 249.879 562.779 250.066 562.795 250.313C562.811 250.56 562.623 250.774 562.377 250.79C561.376 250.887 560.452 251.139 559.635 251.424L559.368 251.52C559.809 252.21 560.282 252.838 560.688 253.192C560.908 253.386 560.93 253.724 560.738 253.946C560.54 254.169 560.204 254.191 559.984 253.996Z',
          fill: '#FFB61D',
        }),
        yr = a.createElement('path', {
          fillRule: 'evenodd',
          clipRule: 'evenodd',
          d:
            'M324.826 529.117C322.297 541.032 310.092 544.412 310.224 554.004C310.292 558.966 311.662 563.082 312.787 566.247C315.074 572.683 321.034 579.312 323.794 585.449C326.153 590.694 337.989 587.146 338.934 595.298C339.449 599.738 331.076 602.296 328.797 602.469C325.527 602.717 321.381 601.594 316.36 599.099C310.253 596.133 305.351 593.794 301.802 589.519C301.111 588.686 300.676 586.332 299.91 582.631C299.073 578.581 296.212 568.285 288.737 551.662C287.67 549.288 283.584 539.572 279.039 529.634C275.289 521.433 290.788 505.004 297.66 505.579C314.542 506.99 326.612 520.7 324.826 529.117Z',
          fill: 'white',
        }),
        kr = a.createElement('path', {
          fillRule: 'evenodd',
          clipRule: 'evenodd',
          d:
            'M312.99 599.275C308.788 596.773 305.331 593.89 302.621 590.625C301.929 589.791 301.42 586.72 300.655 583.019C300.254 581.079 285.664 546.076 280.851 532.902C279.953 530.443 282.133 532.164 282.645 532.902C285.437 536.925 302.621 563.465 310.831 588.053',
          fill: '#E7EAEE',
        }),
        wr = a.createElement('path', {
          fillRule: 'evenodd',
          clipRule: 'evenodd',
          d:
            'M316.265 598.229L316.89 598.537C321.612 600.884 325.424 601.916 328.269 601.701C331.326 601.469 336.315 598.713 336.535 596.367C336.889 592.6 335.869 591.531 330.83 589.628C329.368 589.076 325.416 589.196 319.326 590.118C318.216 590.286 317.179 589.523 317.011 588.412C316.843 587.302 317.607 586.266 318.717 586.098L319.719 585.95C325.949 585.058 330.031 584.979 332.267 585.824L332.93 586.08C338.978 588.472 341.129 590.945 340.584 596.747C340.121 601.664 333.373 605.392 328.577 605.756C324.999 606.027 320.688 604.899 315.607 602.438L315.097 602.187C308.741 599.1 303.682 595.305 299.938 590.794C299.444 590.2 299.129 589.409 298.805 588.195L298.73 587.907C298.61 587.435 298.491 586.912 298.351 586.257L297.545 582.302L297.421 581.725C296.094 575.786 292.254 564.826 286.434 551.806L285.547 549.847C285 548.655 277.196 536.007 276.613 533.043C274.435 521.962 283.341 516.472 283.341 516.472C283.341 516.472 278.722 526.218 280.024 531.01C281.036 534.735 289.577 547.552 292.615 557.379C295.759 567.548 299.05 578.399 303.857 587.27C307.486 593.968 310.084 597.002 316.265 598.229Z',
          fill: '#00160A',
        }),
        Sr = a.createElement('path', {
          fillRule: 'evenodd',
          clipRule: 'evenodd',
          d:
            'M326.126 595.951C326.327 595.278 327.035 594.896 327.707 595.097C329.801 595.722 331.282 596.413 332.186 597.235C333.043 598.014 333.89 599.209 334.758 600.832C335.089 601.451 334.855 602.221 334.236 602.552C333.617 602.883 332.847 602.649 332.517 602.031C331.774 600.642 331.084 599.667 330.477 599.116C329.917 598.607 328.74 598.058 326.98 597.532C326.307 597.331 325.925 596.623 326.126 595.951Z',
          fill: '#00160A',
        }),
        Tr = a.createElement('path', {
          fillRule: 'evenodd',
          clipRule: 'evenodd',
          d:
            'M329.675 592.029C329.896 591.363 330.616 591.003 331.282 591.225C333.075 591.821 334.407 592.501 335.292 593.306C336.17 594.103 337.013 595.392 337.866 597.189C338.167 597.823 337.897 598.581 337.263 598.882C336.629 599.183 335.871 598.913 335.57 598.279C334.847 596.755 334.169 595.719 333.583 595.187C333.005 594.661 331.966 594.131 330.479 593.636C329.813 593.414 329.453 592.695 329.675 592.029Z',
          fill: '#00160A',
        }),
        Ar = a.createElement('path', {
          fillRule: 'evenodd',
          clipRule: 'evenodd',
          d:
            'M316.951 510.131C321.422 511.929 330.214 521.898 328.854 527.496C327.448 533.285 325.385 535.598 322.103 539.436L321.759 539.832C320.758 540.971 316.624 545.171 316.46 545.348L316.068 545.78C312.384 549.937 310.878 554.534 313.875 563.007C316.071 569.213 319.682 576.267 324.666 582.995C325.324 583.882 326.96 586.489 326.072 587.146C325.185 587.804 323.084 585.679 322.427 584.791C317.218 577.761 313.441 570.946 311.104 564.341C307.574 554.362 308.426 550.25 313.298 544.878L313.608 544.543C314.13 544 317.712 540.357 318.66 539.299L318.755 539.191C321.816 535.709 323.834 532.021 325.129 526.691C326.024 523.007 322.262 516.465 314.312 511.157C309.035 507.633 312.481 508.332 316.951 510.131Z',
          fill: '#00160A',
        });
      function Pr(e, t) {
        var n = e.title,
          r = e.titleId,
          s = bn(e, ['title', 'titleId']);
        return a.createElement(
          'svg',
          fn(
            {
              width: 750,
              height: 350,
              viewBox: '0 0 750 750',
              fill: 'none',
              xmlns: 'http://www.w3.org/2000/svg',
              ref: t,
              'aria-labelledby': r,
            },
            s
          ),
          n ? a.createElement('title', { id: r }, n) : null,
          jn,
          mn,
          hn,
          On,
          xn,
          vn,
          gn,
          Cn,
          yn,
          kn,
          wn,
          Sn,
          Tn,
          An,
          Pn,
          Rn,
          En,
          Dn,
          Ln,
          Nn,
          In,
          Fn,
          Un,
          zn,
          Mn,
          Wn,
          Hn,
          Bn,
          Zn,
          Vn,
          Gn,
          qn,
          Kn,
          Yn,
          Jn,
          Qn,
          Xn,
          _n,
          $n,
          er,
          tr,
          nr,
          rr,
          ar,
          sr,
          cr,
          ir,
          or,
          ur,
          lr,
          dr,
          pr,
          fr,
          br,
          jr,
          mr,
          hr,
          Or,
          xr,
          vr,
          gr,
          Cr,
          yr,
          kr,
          wr,
          Sr,
          Tr,
          Ar
        );
      }
      var Rr = a.forwardRef(Pr),
        Er =
          (n.p,
          Object(E.a)(function (e) {
            return {
              root: { '& #cat_bg': { fill: e.palette.themePrimary } },
              image: {
                width: '35%',
                height: '400px',
                '@media (max-width: 768px)': { width: '80%', height: '200px' },
              },
              loginBtn: { marginTop: '10px !important' },
            };
          })),
        Dr = function () {
          var e = Er();
          return Object(r.jsx)(ke.Container, {
            md: !0,
            className: e.root,
            children: Object(r.jsxs)(z.a, {
              verticalAlign: 'center',
              horizontalAlign: 'center',
              children: [
                Object(r.jsx)(Rr, { className: e.image }),
                Object(r.jsx)(N.a, {
                  block: !0,
                  variant: 'xLarge',
                  children: 'You are not logged in',
                }),
                Object(r.jsx)(m.b, {
                  className: e.loginBtn,
                  to: '/auth/login',
                  component: it.a,
                  children: 'Log In',
                }),
              ],
            }),
          });
        },
        Lr = n(110),
        Nr = n(18),
        Ir = {
          initialData: [],
          dependencies: [],
          callback: null,
          resetData: !0,
          skipFirst: !1,
        },
        Fr = function (e) {
          var t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : null,
            n =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : {
                    initialData: [],
                    dependencies: [],
                    callback: null,
                    resetDataOnChange: !0,
                    skipFirst: !1,
                  },
            r = Object(u.a)(Object(u.a)({}, Ir), n),
            s = Object(a.useState)(r.initialData),
            c = Object(l.a)(s, 2),
            i = c[0],
            o = c[1],
            d = Object(a.useRef)(!0);
          return (
            Object(a.useEffect)(function () {
              function n() {
                return (n = Object(g.a)(
                  v.a.mark(function n() {
                    var a;
                    return v.a.wrap(function (n) {
                      for (;;)
                        switch ((n.prev = n.next)) {
                          case 0:
                            if (!r.skipFirst || !d.current) {
                              n.next = 3;
                              break;
                            }
                            return (d.current = !1), n.abrupt('return');
                          case 3:
                            return (
                              (d.current = !1),
                              r.resetDataOnChange && o(r.initialData),
                              (n.next = 7),
                              y.a.get(e, t)
                            );
                          case 7:
                            200 === (a = n.sent).status &&
                              o(r.callback ? r.callback(a.data) : a.data);
                          case 9:
                          case 'end':
                            return n.stop();
                        }
                    }, n);
                  })
                )).apply(this, arguments);
              }
              e &&
                (function () {
                  n.apply(this, arguments);
                })();
            }, [e].concat(Object(Nt.a)(r.dependencies))),
            [i, o]
          );
        },
        Ur = {
          baseUrl: '/api/tasks',
          taskPath: function (e) {
            return '/api/tasks/'.concat(e);
          },
          taskStatusPath: function (e) {
            return '/api/tasks/'.concat(e, '/status');
          },
          tasksCheckConflictsPath: '/api/tasks/check-busy',
          getTasks: function () {
            var e = arguments,
              t = this;
            return Object(g.a)(
              v.a.mark(function n() {
                var r, a;
                return v.a.wrap(
                  function (n) {
                    for (;;)
                      switch ((n.prev = n.next)) {
                        case 0:
                          return (
                            (r = e.length > 0 && void 0 !== e[0] ? e[0] : {}),
                            (n.prev = 1),
                            (n.next = 4),
                            y.a.get(t.baseUrl, { params: r })
                          );
                        case 4:
                          if (200 !== (a = n.sent).status) {
                            n.next = 7;
                            break;
                          }
                          return n.abrupt('return', a.data);
                        case 7:
                          throw new Error(
                            'Server response: '
                              .concat(a.data, ' - ')
                              .concat(a.statusText)
                          );
                        case 10:
                          throw (
                            ((n.prev = 10),
                            (n.t0 = n.catch(1)),
                            k.a.notifyError(
                              (n.t0.response && n.t0.response.data.error) ||
                                n.t0.message
                            ),
                            n.t0)
                          );
                        case 14:
                        case 'end':
                          return n.stop();
                      }
                  },
                  n,
                  null,
                  [[1, 10]]
                );
              })
            )();
          },
          getBusyTasks: function (e) {
            var t = this;
            return Object(g.a)(
              v.a.mark(function n() {
                var r, a;
                return v.a.wrap(
                  function (n) {
                    for (;;)
                      switch ((n.prev = n.next)) {
                        case 0:
                          return (
                            (r = e.user),
                            (n.prev = 1),
                            (n.next = 4),
                            y.a.get(t.tasksCheckConflictsPath, {
                              params: { user: r },
                            })
                          );
                        case 4:
                          if (200 !== (a = n.sent).status) {
                            n.next = 7;
                            break;
                          }
                          return n.abrupt('return', a.data);
                        case 7:
                          throw new Error(
                            'Server response: '
                              .concat(a.data, ' - ')
                              .concat(a.statusText)
                          );
                        case 10:
                          throw (
                            ((n.prev = 10),
                            (n.t0 = n.catch(1)),
                            k.a.notifyError(
                              (n.t0.response && n.t0.response.data.error) ||
                                n.t0.message
                            ),
                            n.t0)
                          );
                        case 14:
                        case 'end':
                          return n.stop();
                      }
                  },
                  n,
                  null,
                  [[1, 10]]
                );
              })
            )();
          },
          getTask: function () {
            return Object(g.a)(
              v.a.mark(function e() {
                return v.a.wrap(
                  function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          (e.prev = 0), (e.next = 7);
                          break;
                        case 3:
                          throw (
                            ((e.prev = 3),
                            (e.t0 = e.catch(0)),
                            k.a.notifyError(
                              (e.t0.response && e.t0.response.data.error) ||
                                e.t0.message
                            ),
                            e.t0)
                          );
                        case 7:
                        case 'end':
                          return e.stop();
                      }
                  },
                  e,
                  null,
                  [[0, 3]]
                );
              })
            )();
          },
          createTask: function (e) {
            var t = this;
            return Object(g.a)(
              v.a.mark(function n() {
                var r;
                return v.a.wrap(
                  function (n) {
                    for (;;)
                      switch ((n.prev = n.next)) {
                        case 0:
                          return (
                            (n.prev = 0), (n.next = 3), y.a.post(t.baseUrl, e)
                          );
                        case 3:
                          if (200 !== (r = n.sent).status) {
                            n.next = 6;
                            break;
                          }
                          return n.abrupt('return', r.data);
                        case 6:
                          throw new Error(
                            'Server response: '
                              .concat(r.data, ' - ')
                              .concat(r.statusText)
                          );
                        case 9:
                          throw (
                            ((n.prev = 9),
                            (n.t0 = n.catch(0)),
                            k.a.notifyError(
                              (n.t0.response && n.t0.response.data.error) ||
                                n.t0.message
                            ),
                            n.t0)
                          );
                        case 13:
                        case 'end':
                          return n.stop();
                      }
                  },
                  n,
                  null,
                  [[0, 9]]
                );
              })
            )();
          },
          updateTask: function (e, t) {
            var n = this;
            return Object(g.a)(
              v.a.mark(function r() {
                var a;
                return v.a.wrap(
                  function (r) {
                    for (;;)
                      switch ((r.prev = r.next)) {
                        case 0:
                          return (
                            (r.prev = 0),
                            (r.next = 3),
                            y.a.put(n.taskPath(e), t)
                          );
                        case 3:
                          if (200 !== (a = r.sent).status) {
                            r.next = 6;
                            break;
                          }
                          return r.abrupt('return', a.data);
                        case 6:
                          throw new Error(
                            'Server response: '
                              .concat(a.data, ' - ')
                              .concat(a.statusText)
                          );
                        case 9:
                          throw (
                            ((r.prev = 9),
                            (r.t0 = r.catch(0)),
                            k.a.notifyError(
                              (r.t0.response && r.t0.response.data.error) ||
                                r.t0.message
                            ),
                            r.t0)
                          );
                        case 13:
                        case 'end':
                          return r.stop();
                      }
                  },
                  r,
                  null,
                  [[0, 9]]
                );
              })
            )();
          },
          updateTaskStatus: function (e, t) {
            var n = this;
            return Object(g.a)(
              v.a.mark(function r() {
                var a;
                return v.a.wrap(
                  function (r) {
                    for (;;)
                      switch ((r.prev = r.next)) {
                        case 0:
                          return (
                            (r.prev = 0),
                            (r.next = 3),
                            y.a.put(n.taskStatusPath(e), t)
                          );
                        case 3:
                          if (200 !== (a = r.sent).status) {
                            r.next = 6;
                            break;
                          }
                          return r.abrupt('return', a.data);
                        case 6:
                          throw new Error(
                            'Server response: '
                              .concat(a.data, ' - ')
                              .concat(a.statusText)
                          );
                        case 9:
                          throw (
                            ((r.prev = 9),
                            (r.t0 = r.catch(0)),
                            k.a.notifyError(
                              (r.t0.response && r.t0.response.data.error) ||
                                r.t0.message
                            ),
                            r.t0)
                          );
                        case 13:
                        case 'end':
                          return r.stop();
                      }
                  },
                  r,
                  null,
                  [[0, 9]]
                );
              })
            )();
          },
          deleteTask: function () {
            return Object(g.a)(
              v.a.mark(function e() {
                return v.a.wrap(
                  function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          (e.prev = 0), (e.next = 7);
                          break;
                        case 3:
                          throw (
                            ((e.prev = 3),
                            (e.t0 = e.catch(0)),
                            k.a.notifyError(
                              (e.t0.response && e.t0.response.data.error) ||
                                e.t0.message
                            ),
                            e.t0)
                          );
                        case 7:
                        case 'end':
                          return e.stop();
                      }
                  },
                  e,
                  null,
                  [[0, 3]]
                );
              })
            )();
          },
          createTaskObject: function (e) {
            var t = Object(u.a)({}, e),
              n = Nr.DateTime.fromISO(e.expectedStartDate).toUTC(),
              r = n.plus({ minute: e.duration });
            return (
              (t.expectedStartDate = Nr.DateTime.fromObject({
                year: n.year,
                month: n.month,
                day: n.day,
                hour: n.hour,
                minute: n.minute,
                second: 0,
                zone: e.zone,
              }).toISO()),
              (t.expectedFinishDate = Nr.DateTime.fromObject({
                year: r.year,
                month: r.month,
                day: r.day,
                hour: r.hour,
                minute: r.minute,
                second: 0,
                zone: e.zone,
              }).toISO()),
              t
            );
          },
        },
        zr = Object(a.createContext)({
          isPanel: !1,
          isOpen: null,
          setOpen: null,
          onRenderFooter: null,
          setOnRenderFooter: null,
        }),
        Mr = function (e) {
          var t,
            n,
            s,
            c,
            i,
            o,
            d =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {},
            p =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : {},
            f = Object(a.useState)(!1),
            b = Object(l.a)(f, 2),
            j = b[0],
            m = b[1],
            h = Object(a.useState)(function () {
              return d.onRenderFooterContent;
            }),
            O = Object(l.a)(h, 2),
            x = O[0],
            v = O[1],
            g = Object(a.useRef)(null),
            C = Object(a.useState)({
              isPanel: !0,
              isOpen: j,
              setOpen: m,
              onRenderFooter: x,
              setOnRenderFooter: v,
            }),
            y = Object(l.a)(C, 1),
            k = y[0],
            w = Object(r.jsx)(zr.Provider, {
              value: k,
              children: Object(r.jsx)(le.a, {
                id: null !== (t = d.id) && void 0 !== t ? t : 'use-panel',
                componentRef: g,
                isOpen: j,
                onDismiss:
                  null !==
                    (n =
                      (null === d || void 0 === d ? void 0 : d.onDismiss) &&
                      d.onDismiss(j, m)) && void 0 !== n
                    ? n
                    : function () {
                        return m(!1);
                      },
                type:
                  null !== (s = d.type) && void 0 !== s
                    ? s
                    : de.a.smallFixedFar,
                headerText:
                  null !== (c = d.headerText) && void 0 !== c ? c : 'Panel',
                isLightDismiss:
                  null !== (i = d.isLightDismiss) && void 0 !== i && i,
                onRenderFooterContent: x,
                isFooterAtBottom:
                  null !== (o = d.isFooterAtBottom) && void 0 !== o && o,
                children: j
                  ? Object(r.jsx)(e, Object(u.a)({ isOpen: j, setOpen: m }, p))
                  : null,
              }),
            });
          return { isOpen: j, setOpen: m, render: w, componentRef: g };
        },
        Wr = n(399),
        Hr = n(382),
        Br = n(19),
        Zr = {
          getHoursFromText: function (e) {
            var t = e.split(':').map(function (e) {
                return +e;
              }),
              n = Object(l.a)(t, 3),
              r = n[0],
              a = n[1],
              s = n[2];
            return { h: r, m: a, s: null !== s && void 0 !== s ? s : 0 };
          },
          combineDateHours: function (e, t) {
            return new Date(
              e.getFullYear(),
              e.getMonth(),
              e.getDate(),
              t.h,
              t.m,
              t.s
            );
          },
          makeUTC: function (e) {
            return Number.isNaN(+new Date(e)) || null === e
              ? null
              : new Date(
                  Date.UTC(
                    e.getFullYear(),
                    e.getMonth(),
                    e.getDate(),
                    e.getHours(),
                    e.getMinutes(),
                    e.getSeconds()
                  )
                );
          },
          getWeekFromDate: function (e) {
            var t =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : 1,
              n = [],
              r = this.makeUTCDateOnly(e),
              a = r.getDay();
            0 === a && 1 === t && (a = 7), r.setDate(r.getDate() - a + t);
            for (var s = 0; s < 7; s += 1) {
              var c = new Date(r);
              c.setDate(c.getDate() + s), n.push(c);
            }
            return n;
          },
          makeUTCDateOnly: function (e) {
            return Number.isNaN(+new Date(e)) || null === e
              ? null
              : new Date(
                  Date.UTC(e.getFullYear(), e.getMonth(), e.getDate(), 0, 0, 0)
                );
          },
          getNearestTimeUTC: function (e) {
            var t = Nr.DateTime.fromJSDate(e).toUTC(),
              n = 10 * Math.ceil(t.minute / 10);
            return t.set({ minute: n });
          },
          getTimeText: function (e) {
            return Nr.DateTime.fromJSDate(e).toUTC().toFormat('HH:mm');
          },
          getValidTimeStringUTC: function (e) {
            var t =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : null,
              n = /\d{2}:\d{2}/,
              r = t ? Nr.DateTime.fromJSDate(t) : Nr.DateTime.now();
            if (!n.test(e))
              return r
                .toUTC()
                .set({ hour: 0, minute: 0, second: 0, millisecond: 0 })
                .toISO();
            var a = e.split(':'),
              s = Object(l.a)(a, 2),
              c = s[0],
              i = s[1];
            if (+c < 0 || +c > 23) {
              var o = c;
              (c = c.slice(0, 1)),
                (i = ''.concat(o.slice(1)).concat(i).slice(0, 2));
            }
            return (
              (+i < 0 || +i > 59) && (i = '0'.concat(i).slice(0, 2)),
              r
                .toUTC()
                .set({ hour: c, minute: i, second: 0, millisecond: 0 })
                .toISO()
            );
          },
          getEndTimeTextUTC: function (e, t) {
            return Nr.DateTime.fromJSDate(e)
              .plus({ minute: t })
              .toUTC()
              .toFormat('HH:mm');
          },
          transform2UTCDate: function (e) {
            var t = Nr.DateTime.fromJSDate(e);
            return Nr.DateTime.utc(
              t.year,
              t.month,
              t.day,
              t.hour,
              t.minute,
              0,
              0
            ).toJSDate();
          },
          setDateFromTo: function (e, t) {
            var n = Nr.DateTime.fromJSDate(e);
            return Nr.DateTime.fromJSDate(t)
              .set({ year: n.year, month: n.month, day: n.day })
              .toJSDate();
          },
        },
        Vr = Object(E.a)(function (e) {
          return {
            root: {},
            picker: {
              '& input': {
                backgroundColor: e.palette.white,
                color: e.palette.neutralPrimary,
              },
            },
            suggestionRoot: { padding: e.spacing.s2 },
            suggestionCheck: {
              marginRight: e.spacing.s2,
              padding: e.spacing.s2,
              outline: 'none',
            },
            suggestionText: { textTransform: 'capitalize' },
            itemRoot: { marginTop: 4, '&:first-child': { marginTop: 8 } },
          };
        }),
        Gr = function (e) {
          var t = e.label,
            n = e.options,
            s = e.onSelect,
            c = e.onRemove,
            i = e.selected,
            o = e.disabled,
            l = Object(Ae.a)(e, [
              'label',
              'options',
              'onSelect',
              'onRemove',
              'selected',
              'disabled',
            ]),
            d = Vr(),
            p = Object(a.useMemo)(
              function () {
                return new Set(
                  i.map(function (e) {
                    return e.key;
                  })
                );
              },
              [i]
            ),
            f = function (e) {
              return function (t) {
                return (
                  t.preventDefault(),
                  t.stopPropagation(),
                  p.has(e.key) ? c(e) : s(e)
                );
              };
            };
          return Object(r.jsxs)(
            'div',
            Object(u.a)(
              Object(u.a)({}, l),
              {},
              {
                children: [
                  t && Object(r.jsx)(Yt.a, { children: t }),
                  Object(r.jsx)(De.a, {
                    inputProps: { placeholder: 'Select...' },
                    disabled: o,
                    className: d.picker,
                    onRenderSuggestionsItem: function e(t) {
                      return Object(r.jsxs)(
                        z.a,
                        {
                          className: d.suggestionRoot,
                          horizontalAlign: 'start',
                          verticalAlign: 'center',
                          horizontal: !0,
                          children: [
                            Object(r.jsx)('span', {
                              className: d.suggestionCheck,
                              role: 'button',
                              tabIndex: -1,
                              onKeyDown: function (n) {
                                return 'Space' === n.key ? e(t)() : null;
                              },
                              onClick: f(t),
                              children: Object(r.jsx)(Ce.a, {
                                checked: p.has(t.key),
                              }),
                            }),
                            Object(r.jsx)(N.a, {
                              className: d.suggestionText,
                              variant: 'mediumPlus',
                              children: t.data.username,
                            }),
                          ],
                        },
                        t.key
                      );
                    },
                    onResolveSuggestions: function (e) {
                      return n.filter(function (t) {
                        return (
                          -1 !==
                          t.data.username.toLowerCase().indexOf(e.toLowerCase())
                        );
                      });
                    },
                    resolveDelay: 300,
                    onRenderItem: function (e) {
                      return Object(r.jsx)(
                        z.a,
                        {
                          className: d.itemRoot,
                          horizontalAlign: 'start',
                          verticalAlign: 'center',
                          horizontal: !0,
                          children: Object(r.jsx)(M.a, {
                            text: e.item.data.username,
                            size: W.c.size24,
                          }),
                        },
                        e.item.id
                      );
                    },
                    selectedItems: i,
                    onEmptyResolveSuggestions: function () {
                      return n;
                    },
                    onItemSelected: function (e) {
                      return p.has(e.key) ? c(e) : s(e);
                    },
                    pickerCalloutProps: { preventDismissOnScroll: !0 },
                  }),
                ],
              }
            )
          );
        };
      Gr.defaultProps = { label: null, props: null, disabled: !1 };
      var qr = Gr,
        Kr = function (e) {
          var t,
            n = e.setOpen,
            s = e.handleAdd,
            c = Fr(Ee.teamUsersPath, null, {
              callback: function (e) {
                return e.map(function (e) {
                  return { key: e.id, data: e };
                });
              },
            }),
            i = Object(l.a)(c, 1)[0],
            o = Object(a.useState)({
              title: '',
              description: '',
              remarks: '',
              expectedStartDate: Zr.getNearestTimeUTC(
                Zr.transform2UTCDate(new Date())
              ).toJSDate(),
              duration: 60,
              isBackgroundTask: !1,
              assignedTo: [],
            }),
            d = Object(l.a)(o, 2),
            p = d[0],
            f = d[1],
            b = function (e) {
              var t =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : function (e) {
                      return e[0].target.value;
                    };
              return function () {
                for (
                  var n = arguments.length, r = new Array(n), a = 0;
                  a < n;
                  a++
                )
                  r[a] = arguments[a];
                f(function (n) {
                  return Object(u.a)(
                    Object(u.a)({}, n),
                    {},
                    Object(Dt.a)({}, e, t(r))
                  );
                });
              };
            },
            j = (function () {
              var e = Object(g.a)(
                v.a.mark(function e(t) {
                  var r;
                  return v.a.wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            t.persist(),
                            t.preventDefault(),
                            (e.next = 4),
                            Ur.createTask({
                              title: p.title,
                              description: p.description,
                              remarks: p.remarks,
                              expectedStartDate: p.expectedStartDate,
                              duration: p.duration,
                              assignedTo: p.assignedTo.map(function (e) {
                                return e.id;
                              }),
                              isBackgroundTask: p.isBackgroundTask,
                              zone: Nr.DateTime.local().zoneName,
                            })
                          );
                        case 4:
                          (r = e.sent) && s(r), n && n(!1);
                        case 7:
                        case 'end':
                          return e.stop();
                      }
                  }, e);
                })
              );
              return function (t) {
                return e.apply(this, arguments);
              };
            })();
          return Object(r.jsx)(r.Fragment, {
            children: Object(r.jsxs)('form', {
              id: 'create-task-form',
              onSubmit: j,
              children: [
                Object(r.jsx)(Ke.a, {
                  required: !0,
                  label: 'Title',
                  value: p.title,
                  onChange: b('title'),
                }),
                Object(r.jsx)(Ke.a, {
                  label: 'Description',
                  value: p.description,
                  onChange: b('description'),
                }),
                Object(r.jsx)(Ke.a, {
                  label: 'Remarks',
                  value: p.remarks,
                  multiline: !0,
                  onChange: b('remarks'),
                }),
                Object(r.jsx)(on.a, {
                  label: 'Start date',
                  value: p.expectedStartDate,
                  onSelectDate: function (e) {
                    return f(function (t) {
                      return Object(u.a)(
                        Object(u.a)({}, t),
                        {},
                        {
                          expectedStartDate: Zr.setDateFromTo(
                            e,
                            t.expectedStartDate
                          ),
                        }
                      );
                    });
                  },
                }),
                Object(r.jsx)(Wr.a, {
                  label: 'Start time',
                  mask: '99:99',
                  maskChar: '0',
                  value: Nr.DateTime.fromJSDate(p.expectedStartDate)
                    .toUTC()
                    .toFormat('HH:mm'),
                  onChange: b('expectedStartDate', function (e) {
                    return Nr.DateTime.fromISO(
                      Zr.getValidTimeStringUTC(e[1], p.expectedStartDate)
                    ).toJSDate();
                  }),
                }),
                Object(r.jsx)(Wr.a, {
                  label: 'End time',
                  mask: '99:99',
                  maskChar: '0',
                  value: Zr.getEndTimeTextUTC(p.expectedStartDate, p.duration),
                  onChange: b('duration', function (e) {
                    var t,
                      n,
                      r,
                      a = Zr.getValidTimeStringUTC(e[1]),
                      s = Nr.DateTime.fromJSDate(p.expectedStartDate),
                      c = Nr.DateTime.fromISO(a);
                    return c < s
                      ? 0
                      : null !==
                          (t =
                            null === (n = c.diff(s, 'minute')) ||
                            void 0 === n ||
                            null === (r = n.values) ||
                            void 0 === r
                              ? void 0
                              : r.minutes) && void 0 !== t
                      ? t
                      : 0;
                  }),
                }),
                Object(r.jsx)(Hr.a, {
                  label: 'Duration (min)',
                  value: p.duration,
                  onChange: function (e) {
                    var t = +e.target.value;
                    Number.isNaN(t) && (t = 0),
                      f(function (e) {
                        return Object(u.a)(
                          Object(u.a)({}, e),
                          {},
                          { duration: t }
                        );
                      });
                  },
                  onIncrement: function (e) {
                    return f(function (t) {
                      return Object(u.a)(
                        Object(u.a)({}, t),
                        {},
                        { duration: +e + 10 }
                      );
                    });
                  },
                  onDecrement: function (e) {
                    e > 10 &&
                      f(function (t) {
                        return Object(u.a)(
                          Object(u.a)({}, t),
                          {},
                          { duration: +e - 10 }
                        );
                      });
                  },
                  min: 0,
                  step: 10,
                  incrementButtonAriaLabel: 'Increase value by 10',
                  decrementButtonAriaLabel: 'Decrease value by 10',
                  labelPosition: Br.a.top,
                }),
                Object(r.jsx)(qr, {
                  label: 'Assigned to',
                  options: i,
                  onSelect: function (e) {
                    return f(function (t) {
                      return Object(u.a)(
                        Object(u.a)({}, t),
                        {},
                        { assignedTo: t.assignedTo.concat(e.data) }
                      );
                    });
                  },
                  onRemove: function (e) {
                    return f(function (t) {
                      return Object(u.a)(
                        Object(u.a)({}, t),
                        {},
                        {
                          assignedTo: t.assignedTo.filter(function (t) {
                            return t.id !== e.data.id;
                          }),
                        }
                      );
                    });
                  },
                  selected:
                    null === (t = p.assignedTo) || void 0 === t
                      ? void 0
                      : t.map(function (e) {
                          return { key: e.id, data: e };
                        }),
                }),
              ],
            }),
          });
        };
      Kr.defaultProps = { setOpen: null };
      var Yr = Kr,
        Jr = function (e) {
          var t = e.currentDate,
            n = e.setCurrentDate;
          return Object(r.jsx)(r.Fragment, {
            children: Object(r.jsxs)(z.a, {
              horizontal: !0,
              verticalAlign: 'center',
              horizontalAlign: 'center',
              children: [
                Object(r.jsx)(Z.a, {
                  onClick: function () {
                    return n(function (e) {
                      return Object(u.a)(
                        Object(u.a)({}, e),
                        {},
                        { from: e.from.minus({ day: 1 }) }
                      );
                    });
                  },
                  iconProps: { iconName: 'Previous' },
                }),
                Object(r.jsx)(on.a, {
                  value: t.toJSDate(),
                  onSelectDate: function (e) {
                    return n(function (t) {
                      var n = Nr.DateTime.fromJSDate(e);
                      return Object(u.a)(
                        Object(u.a)({}, t),
                        {},
                        {
                          from: t.from.set({
                            year: n.year,
                            month: n.month,
                            day: n.day,
                          }),
                        }
                      );
                    });
                  },
                  firstDayOfWeek: 1,
                }),
                Object(r.jsx)(Z.a, {
                  onClick: function () {
                    return n(function (e) {
                      return Object(u.a)(
                        Object(u.a)({}, e),
                        {},
                        { from: e.from.plus({ day: 1 }) }
                      );
                    });
                  },
                  iconProps: { iconName: 'Next' },
                }),
              ],
            }),
          });
        },
        Qr = n(188),
        Xr = n(72),
        _r = n(374),
        $r = n(120),
        ea = n(186),
        ta = n(383),
        na = n(128),
        ra = Object(E.a)(function () {
          return {
            root: { display: 'inline-block' },
            container: { textAlign: 'center' },
          };
        }),
        aa = function (e) {
          var t = e.task,
            n = ra();
          return Object(r.jsx)('div', {
            className: n.container,
            children: Object(r.jsx)(ta.a, {
              className: n.root,
              personaSize: W.c.size24,
              maxDisplayablePersonas: 1,
              overflowButtonType: na.a.descriptive,
              overflowButtonProps: { ariaDescription: 'More users' },
              personas: t.assignedTo.map(function (e) {
                return { personaName: e.username };
              }),
            }),
          });
        },
        sa = Object(E.a)(function () {
          return {
            root: { '& table': { margin: 'auto', borderCollapse: 'unset' } },
            statusText: { textAlign: 'center' },
          };
        }),
        ca = function (e) {
          var t = e.task,
            n = e.collapsed,
            a = e.setCollapsed,
            s = e.handleStatusChange,
            c = sa(),
            i = function (e) {
              return Object(g.a)(
                v.a.mark(function n() {
                  return v.a.wrap(function (n) {
                    for (;;)
                      switch ((n.prev = n.next)) {
                        case 0:
                          return (n.next = 2), s(t, e.status);
                        case 2:
                          a(!0);
                        case 3:
                        case 'end':
                          return n.stop();
                      }
                  }, n);
                })
              );
            };
          return Object(r.jsx)('div', {
            className: c.root,
            children: Object(r.jsxs)($r.Collapse, {
              isOpened: !n,
              children: [
                Object(r.jsx)(B.a, {}),
                Object(r.jsx)(aa, { task: t }),
                Object(r.jsx)(B.a, {
                  children: Object(r.jsx)(N.a, {
                    variant: 'smallPlus',
                    children: 'Status',
                  }),
                }),
                Object(r.jsx)(ea.a, {
                  columnCount: 2,
                  onRenderItem: function (e) {
                    return Object(r.jsx)(S.a, {
                      onClick: i(e),
                      disabled: e.disabled,
                      style: { width: 115, margin: 3, fontSize: 8, height: 18 },
                      children: Object(r.jsx)(N.a, {
                        variant: 'small',
                        children: e.text,
                      }),
                    });
                  },
                  items: [
                    {
                      key: 'inprogress',
                      text: 'In progress',
                      status: 'InProgress',
                      disabled: 'InProgress' === t.status,
                    },
                    {
                      key: 'paused',
                      text: 'Paused',
                      status: 'Paused',
                      disabled: 'InProgress' !== t.status,
                    },
                    {
                      key: 'finished',
                      text: 'Finished',
                      status: 'Finished',
                      disabled: 'Finished' === t.status,
                    },
                    {
                      key: 'cancelled',
                      text: 'Cancelled',
                      status: 'Cancelled',
                      disabled: 'Cancelled' === t.status,
                    },
                  ],
                }),
              ],
            }),
          });
        };
      function ia() {
        return (ia =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
          }).apply(this, arguments);
      }
      function oa(e, t) {
        if (null == e) return {};
        var n,
          r,
          a = (function (e, t) {
            if (null == e) return {};
            var n,
              r,
              a = {},
              s = Object.keys(e);
            for (r = 0; r < s.length; r++)
              (n = s[r]), t.indexOf(n) >= 0 || (a[n] = e[n]);
            return a;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var s = Object.getOwnPropertySymbols(e);
          for (r = 0; r < s.length; r++)
            (n = s[r]),
              t.indexOf(n) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, n) &&
                  (a[n] = e[n]));
        }
        return a;
      }
      var ua = a.createElement(
        'g',
        null,
        a.createElement('circle', {
          id: 'expired_clock_border',
          cx: 213.044,
          cy: 218.354,
          fill: '#365e7d',
          r: 205.544,
        }),
        a.createElement('path', {
          d:
            'm418.589 218.354c0-113.519-92.025-205.544-205.545-205.544-4.622 0-9.204.168-13.75.469 102.32 6.76 184.171 88.382 191.282 190.605.483 6.946-5.209 12.689-12.17 12.541-1.067-.023-2.137-.034-3.21-.034-84.773 0-153.496 68.722-153.496 153.496 0 7.961.608 15.779 1.779 23.411 2.314 15.087-8.645 29.083-23.874 30.113-.104.007-.208.014-.312.021 4.546.3 9.128.469 13.75.469 114.191-.002 205.546-92.786 205.546-205.547z',
          fill: '#2b4d66',
        }),
        a.createElement('circle', {
          cx: 213.044,
          cy: 218.354,
          fill: '#f4fbff',
          r: 157.782,
        }),
        a.createElement('path', {
          d:
            'm370.826 218.354c0-87.14-70.641-157.782-157.782-157.782-4.275 0-8.508.176-12.697.51 81.505 6.491 145.56 74.913 145.082 158.198-.003.004-.005.006-.009.01-66.577 13.089-116.233 68.597-122.944 134.833-1.154 11.386-10.071 20.493-21.476 21.45-.218.018-.435.036-.653.053 91.876 7.32 170.479-65.064 170.479-157.272z',
          fill: '#daf1f4',
        }),
        a.createElement('circle', {
          id: 'expired_warning',
          cx: 375.196,
          cy: 369.885,
          fill: '#eab14d',
          r: 129.303,
        }),
        a.createElement('path', {
          d:
            'm375.196 240.582c-5.034 0-9.998.298-14.882.858 64.401 7.382 114.421 62.068 114.421 128.446s-50.02 121.064-114.421 128.446c4.884.56 9.848.858 14.882.858 71.412 0 129.303-57.891 129.303-129.303 0-71.414-57.89-129.305-129.303-129.305z',
          fill: '#e49542',
        }),
        a.createElement(
          'g',
          null,
          a.createElement(
            'g',
            null,
            a.createElement('path', {
              d:
                'm375.196 400.664c-8.284 0-15-6.716-15-15v-89.555c0-8.284 6.716-15 15-15s15 6.716 15 15v89.555c0 8.284-6.716 15-15 15z',
              fill: '#f4fbff',
            })
          ),
          a.createElement(
            'g',
            null,
            a.createElement('path', {
              d:
                'm375.196 458.662c-8.284 0-15-6.716-15-15v-9.555c0-8.284 6.716-15 15-15s15 6.716 15 15v9.555c0 8.284-6.716 15-15 15z',
              fill: '#f4fbff',
            })
          )
        ),
        a.createElement(
          'g',
          null,
          a.createElement(
            'g',
            { fill: '#daf1f4' },
            a.createElement('path', {
              d:
                'm375.196 281.109c-2.735 0-5.292.744-7.5 2.023 4.479 2.595 7.5 7.428 7.5 12.977v89.555c0 5.549-3.021 10.382-7.5 12.977 2.208 1.279 4.765 2.023 7.5 2.023 8.284 0 15-6.716 15-15v-89.555c0-8.284-6.716-15-15-15z',
            }),
            a.createElement('path', {
              d:
                'm375.196 419.107c-2.735 0-5.292.744-7.5 2.023 4.479 2.595 7.5 7.428 7.5 12.977v9.555c0 5.549-3.021 10.382-7.5 12.977 2.208 1.279 4.765 2.023 7.5 2.023 8.284 0 15-6.716 15-15v-9.555c0-8.284-6.716-15-15-15z',
            })
          )
        ),
        a.createElement(
          'g',
          null,
          a.createElement('path', {
            d:
              'm213.044 83.786c-4.143 0-7.5 3.357-7.5 7.5v10.602c0 4.143 3.357 7.5 7.5 7.5s7.5-3.357 7.5-7.5v-10.602c0-4.143-3.357-7.5-7.5-7.5z',
          }),
          a.createElement('path', {
            d:
              'm300.701 141.303 7.497-7.496c2.93-2.929 2.93-7.678.001-10.606s-7.678-2.93-10.606-.001l-7.497 7.496c-2.93 2.929-2.93 7.678-.001 10.606 2.928 2.929 7.676 2.931 10.606.001z',
          }),
          a.createElement('path', {
            d:
              'm340.113 225.854c4.143 0 7.5-3.357 7.5-7.5s-3.357-7.5-7.5-7.5h-10.603c-4.143 0-7.5 3.357-7.5 7.5s3.357 7.5 7.5 7.5z',
          }),
          a.createElement('path', {
            d:
              'm208.629 337.906v10.603c0 4.143 3.357 7.5 7.5 7.5s7.5-3.357 7.5-7.5v-10.603c0-4.143-3.357-7.5-7.5-7.5s-7.5 3.357-7.5 7.5z',
          }),
          a.createElement('path', {
            d:
              'm117.889 313.509c2.931 2.929 7.678 2.928 10.607 0l7.497-7.497c2.929-2.93 2.929-7.678 0-10.607-2.93-2.928-7.678-2.928-10.607 0l-7.497 7.497c-2.929 2.93-2.929 7.678 0 10.607z',
          }),
          a.createElement('path', {
            d:
              'm96.577 225.854c4.143 0 7.5-3.357 7.5-7.5s-3.357-7.5-7.5-7.5h-10.602c-4.143 0-7.5 3.357-7.5 7.5s3.357 7.5 7.5 7.5z',
          }),
          a.createElement('path', {
            d:
              'm125.387 141.303c2.928 2.928 7.677 2.929 10.606-.001 2.929-2.929 2.929-7.678-.001-10.606l-7.497-7.496c-2.928-2.928-7.677-2.929-10.606.001-2.929 2.929-2.929 7.678.001 10.606z',
          }),
          a.createElement('path', {
            d:
              'm205.544 203.667-13.646-13.287c-2.968-2.891-7.717-2.827-10.605.141-2.89 2.968-2.827 7.716.141 10.605l26.378 25.686c4.714 4.592 12.732 1.29 12.732-5.373v-70.977c0-4.143-3.357-7.5-7.5-7.5s-7.5 3.357-7.5 7.5z',
          }),
          a.createElement('path', {
            d:
              'm424.727 242.365c.899-7.992 1.362-16.042 1.362-24.01 0-54.784-20.758-106.842-58.45-146.582-2.851-3.006-7.599-3.13-10.603-.28-3.006 2.851-3.131 7.598-.28 10.603 35.037 36.941 54.333 85.333 54.333 136.26 0 6.389-.322 12.837-.946 19.258-10.405-2.751-21.291-4.302-32.503-4.5.439-4.924.686-9.861.686-14.759 0-91.137-74.146-165.282-165.282-165.282s-165.281 74.145-165.281 165.282c0 18.367 3 36.423 8.917 53.665 1.067 3.111 3.978 5.067 7.093 5.067.808 0 1.629-.131 2.436-.408 3.918-1.345 6.004-5.61 4.659-9.528-5.378-15.671-8.104-32.089-8.104-48.796 0-82.866 67.416-150.282 150.281-150.282 82.866 0 150.282 67.416 150.282 150.282 0 5.082-.273 10.212-.792 15.319-68.406 6.309-122.388 63.184-124.098 132.805-8.373 1.424-16.887 2.158-25.392 2.158-53.52 0-103.418-28.824-130.223-75.226-2.072-3.588-6.66-4.812-10.246-2.742-3.586 2.072-4.814 6.659-2.742 10.246 28.624 49.55 82.145 82.722 143.211 82.722 8.652 0 17.316-.68 25.857-2.022.949 11.128 3.227 21.884 6.691 32.099-10.734 1.775-21.644 2.687-32.547 2.687-109.204-.002-198.046-88.844-198.046-198.046s88.842-198.045 198.044-198.045c44.857 0 87.16 14.624 122.335 42.291 3.254 2.562 7.971 1.998 10.531-1.258 2.562-3.256 1.998-7.971-1.258-10.531-37.844-29.768-83.354-45.502-131.608-45.502-117.473 0-213.044 95.571-213.044 213.045 0 117.473 95.571 213.044 213.044 213.044 12.841 0 25.696-1.164 38.3-3.453 21.879 46.484 69.166 78.743 123.852 78.743 28.344 0 55.542-8.599 78.653-24.866 3.388-2.384 4.201-7.062 1.816-10.449-2.383-3.388-7.063-4.201-10.449-1.816-20.571 14.479-44.783 22.132-70.021 22.132-66.339 0-121.804-53.76-121.804-121.804 0-67.162 54.641-121.803 121.804-121.803 67.162 0 121.803 54.641 121.803 121.803 0 29.821-10.896 58.521-30.68 80.813-2.75 3.099-2.467 7.839.631 10.588 3.101 2.751 7.84 2.468 10.588-.631 22.223-25.04 34.461-57.276 34.461-90.771.001-57.973-36.249-107.634-87.271-127.52z',
          }),
          a.createElement('path', {
            d:
              'm397.696 296.109c0-12.406-10.094-22.5-22.5-22.5s-22.5 10.094-22.5 22.5v89.555c0 12.406 10.094 22.5 22.5 22.5s22.5-10.094 22.5-22.5zm-15 89.555c0 4.136-3.364 7.5-7.5 7.5s-7.5-3.364-7.5-7.5v-89.555c0-4.136 3.364-7.5 7.5-7.5s7.5 3.364 7.5 7.5z',
          }),
          a.createElement('path', {
            d:
              'm375.196 411.607c-12.406 0-22.5 10.094-22.5 22.5v9.555c0 12.406 10.094 22.5 22.5 22.5s22.5-10.094 22.5-22.5v-9.555c0-12.406-10.093-22.5-22.5-22.5zm7.5 32.055c0 4.136-3.364 7.5-7.5 7.5s-7.5-3.364-7.5-7.5v-9.555c0-4.136 3.364-7.5 7.5-7.5s7.5 3.364 7.5 7.5z',
          })
        )
      );
      function la(e, t) {
        var n = e.title,
          r = e.titleId,
          s = oa(e, ['title', 'titleId']);
        return a.createElement(
          'svg',
          ia(
            {
              id: 'Capa_1',
              enableBackground: 'new 0 0 511.999 511.999',
              height: 25,
              viewBox: '0 0 511.999 511.999',
              width: 25,
              xmlns: 'http://www.w3.org/2000/svg',
              ref: t,
              'aria-labelledby': r,
            },
            s
          ),
          n ? a.createElement('title', { id: r }, n) : null,
          ua
        );
      }
      var da = a.forwardRef(la);
      n.p;
      function pa() {
        return (pa =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
          }).apply(this, arguments);
      }
      function fa(e, t) {
        if (null == e) return {};
        var n,
          r,
          a = (function (e, t) {
            if (null == e) return {};
            var n,
              r,
              a = {},
              s = Object.keys(e);
            for (r = 0; r < s.length; r++)
              (n = s[r]), t.indexOf(n) >= 0 || (a[n] = e[n]);
            return a;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var s = Object.getOwnPropertySymbols(e);
          for (r = 0; r < s.length; r++)
            (n = s[r]),
              t.indexOf(n) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, n) &&
                  (a[n] = e[n]));
        }
        return a;
      }
      var ba = a.createElement('path', {
          className: 'main',
          d:
            'm158 0h71c4.417969 0 8 3.582031 8 8v311c0 4.417969-3.582031 8-8 8h-71c-4.417969 0-8-3.582031-8-8v-311c0-4.417969 3.582031-8 8-8zm0 0',
        }),
        ja = a.createElement('path', {
          className: 'main',
          d:
            'm8 0h71c4.417969 0 8 3.582031 8 8v311c0 4.417969-3.582031 8-8 8h-71c-4.417969 0-8-3.582031-8-8v-311c0-4.417969 3.582031-8 8-8zm0 0',
        });
      function ma(e, t) {
        var n = e.title,
          r = e.titleId,
          s = fa(e, ['title', 'titleId']);
        return a.createElement(
          'svg',
          pa(
            {
              height: 20,
              viewBox: '-45 0 327 327',
              width: 20,
              xmlns: 'http://www.w3.org/2000/svg',
              ref: t,
              'aria-labelledby': r,
            },
            s
          ),
          n ? a.createElement('title', { id: r }, n) : null,
          ba,
          ja
        );
      }
      var ha = a.forwardRef(ma),
        Oa = (n.p, fe.a.tasks.status),
        xa = Object(E.a)(function (e) {
          return {
            root: {
              minHeight: '75px',
              position: 'relative',
              '& .task-new': {
                minHeight: 'inherit',
                border: '1px solid #87D7A1',
                borderLeft: '10px solid #87D7A1',
                '& .task-new-status': { backgroundColor: '#87D7A1' },
              },
              '& .task-inprogress': {
                minHeight: 'inherit',
                border: '1px solid #F4C884',
                borderLeft: '10px solid #F4C884',
                '& .task-inprogress-status': { backgroundColor: '#F4C884' },
              },
              '& .task-finished': {
                minHeight: 'inherit',
                border: '1px solid #C4C4C4',
                borderLeft: '10px solid #C4C4C4',
                '& .task-finished-status': { backgroundColor: '#C4C4C4' },
              },
              '& .task-cancelled': {
                minHeight: 'inherit',
                border: '1px solid #FF6B59',
                borderLeft: '10px solid #FF6B59',
                '& .task-cancelled-status': { backgroundColor: '#FF6B59' },
              },
              '& .task-paused': {
                minHeight: 'inherit',
                border: '1px solid #66aee8',
                borderLeft: '10px solid #66aee8',
                '& .task-paused-status': { backgroundColor: '#66aee8' },
              },
            },
            status: {
              alignSelf: 'center',
              display: 'inline',
              minWidth: '80px',
              position: 'absolute',
              textAlign: 'center',
              color: e.palette.neutralLighterAlt,
              padding: '2px 0',
            },
            collapse: {
              width: '100%',
              textAlign: 'center',
              cursor: 'pointer',
              outline: 'none',
              marginBottom: e.spacing.s2,
            },
            chevron: { height: '100%' },
            chevronIcon: { color: ''.concat(e.palette.black, ' !important') },
            rows: {
              display: 'flex',
              flexFlow: 'column nowrap',
              flexGrow: '1',
              alignItems: 'center',
              justifyContent: 'center',
              minHeight: 'inherit',
              maxWidth: '75%',
            },
            taskDescription: {
              display: 'flex',
              flexFlow: 'column nowrap',
              justifyContent: 'space-between',
              width: '100%',
              margin: '25px 0',
            },
            nowrap: {
              whiteSpace: 'nowrap',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
            },
            prewrap: { whiteSpace: 'pre-wrap' },
            title: { paddingLeft: e.spacing.s1 },
            icons: {
              paddingLeft: e.spacing.s1,
              paddingBottom: e.spacing.s1,
              display: 'flex',
              flexFlow: 'row nowrap',
              alignItems: 'center',
              justifyContent: 'flex-start',
            },
            icon_expired: {
              '& #expired_clock_border': { fill: e.palette.themePrimary },
              '& #expired_warning': { fill: e.palette.orange },
            },
            icon_paused: {
              marginLeft: e.spacing.s2,
              '& .main': { fill: e.palette.themePrimary },
            },
            description: {
              color: e.palette.neutralSecondaryAlt,
              paddingLeft: e.spacing.s1,
            },
            time: { paddingRight: e.spacing.s1, lineHeight: '10px' },
            column: { display: 'flex', flexFlow: 'column nowrap' },
          };
        }),
        va = function (e) {
          var t = e.task,
            n = e.handleStatusChange,
            s = xa(),
            c = Object(a.useState)({ from: '', to: '' }),
            i = Object(l.a)(c, 2),
            o = i[0],
            d = i[1],
            p = Object(a.useState)({ paused: !1, expired: !1 }),
            f = Object(l.a)(p, 2),
            b = f[0],
            j = f[1],
            m = Object(a.useState)(!0),
            h = Object(l.a)(m, 2),
            O = h[0],
            x = h[1],
            v = Object(a.useRef)(null),
            g = function (e, t) {
              return j(function (n) {
                return Object(u.a)(
                  Object(u.a)({}, n),
                  {},
                  Object(Dt.a)({}, e, t)
                );
              });
            },
            C = function () {
              var e = Nr.DateTime.fromISO(t.expectedFinishDate);
              t.status !== Oa.Paused || b.paused
                ? t.status !== Oa.Paused && b.paused && g('paused', !1)
                : g('paused', !0),
                t.status !== Oa.Finished && t.status !== Oa.Cancelled
                  ? !b.expired && e < Nr.DateTime.utc() && g('expired', !0)
                  : b.expired && g('expired', !1);
            };
          return (
            Object(a.useEffect)(
              function () {
                return (
                  C(),
                  (v.current = setInterval(C, 3e4)),
                  function () {
                    clearInterval(v.current);
                  }
                );
              },
              [t]
            ),
            Object(a.useEffect)(
              function () {
                if (t) {
                  var e = Nr.DateTime.fromISO(t.expectedStartDate),
                    n = Nr.DateTime.fromISO(t.expectedFinishDate);
                  d(function () {
                    return {
                      from: e.toFormat('HH:mm'),
                      to: n.toFormat('HH:mm'),
                    };
                  });
                }
              },
              [t]
            ),
            Object(r.jsx)('div', {
              className: s.root,
              children: Object(r.jsxs)('div', {
                className: Object(Xr.a)(
                  'task-'.concat(t.status.toLowerCase()),
                  s.column
                ),
                children: [
                  Object(r.jsx)('span', {
                    className: Object(Xr.a)([
                      'task-'.concat(t.status.toLowerCase(), '-status'),
                      s.status,
                    ]),
                    children: t.status,
                  }),
                  Object(r.jsxs)('div', {
                    style: {
                      display: 'flex',
                      flexFlow: 'row nowrap',
                      justifyContent: 'space-between',
                      minHeight: 'inherit',
                      alignItems: 'center',
                    },
                    children: [
                      Object(r.jsx)('div', {
                        className: s.rows,
                        children: Object(r.jsxs)('div', {
                          className: s.taskDescription,
                          children: [
                            Object(r.jsxs)('div', {
                              className: s.icons,
                              children: [
                                b.expired &&
                                  Object(r.jsx)(_r.a, {
                                    content: 'This task is expired',
                                    children: Object(r.jsx)(da, {
                                      className: s.icon_expired,
                                    }),
                                  }),
                                b.paused &&
                                  Object(r.jsx)(_r.a, {
                                    content: 'This task is paused',
                                    children: Object(r.jsx)(ha, {
                                      className: s.icon_paused,
                                    }),
                                  }),
                              ],
                            }),
                            Object(r.jsx)(N.a, {
                              variant: 'medium',
                              className: Object(Xr.a)([s.title, O && s.nowrap]),
                              children: t.title,
                            }),
                            Object(r.jsx)(N.a, {
                              variant: 'smallPlus',
                              className: Object(Xr.a)([
                                s.description,
                                O ? s.nowrap : s.prewrap,
                              ]),
                              children: t.description,
                            }),
                          ],
                        }),
                      }),
                      Object(r.jsxs)('div', {
                        className: s.time,
                        children: [
                          Object(r.jsx)(N.a, {
                            variant: 'smallPlus',
                            children: o.from,
                          }),
                          Object(r.jsx)(B.a, {
                            styles: { root: { padding: 0 } },
                          }),
                          Object(r.jsx)(N.a, {
                            variant: 'smallPlus',
                            children: o.to,
                          }),
                        ],
                      }),
                    ],
                  }),
                  Object(r.jsx)(ca, {
                    task: t,
                    collapsed: O,
                    setCollapsed: x,
                    handleStatusChange: n,
                  }),
                  Object(r.jsx)('div', {
                    tabIndex: '-1',
                    role: 'button',
                    onKeyDown: function (e) {
                      return (
                        'Enter' === e.key &&
                        x(function (e) {
                          return !e;
                        })
                      );
                    },
                    className: Object(Xr.a)(s.collapse),
                    onClick: function () {
                      return x(function (e) {
                        return !e;
                      });
                    },
                    children: Object(r.jsx)(Z.a, {
                      className: s.chevron,
                      iconProps: {
                        iconName: O ? 'ChevronDown' : 'ChevronUp',
                        className: s.chevronIcon,
                      },
                    }),
                  }),
                ],
              }),
            })
          );
        },
        ga = Object(E.a)(function (e) {
          return {
            root: {
              display: 'flex',
              flexFlow: 'column nowrap',
              alignContent: 'center',
              width: '400px',
              minWidth: '400px',
              minHeight: '400px',
              maxHeight: '600px',
              padding: '5px',
              overflow: 'auto',
              backgroundColor: e.semanticColors.bodyBackground,
              border: '2px solid '.concat(e.palette.neutralLight),
              '& > * + *': { marginTop: '2px' },
              marginTop: e.spacing.l1,
            },
          };
        }),
        Ca = function (e) {
          var t = e.tasks,
            n = e.setTasks,
            a = e.handleStatusChange,
            s = e.user,
            c = e.showFinished,
            i = e.showCancelled,
            o = ga(),
            l = { transition: 'opacity 300ms ease-in-out', opacity: 0 },
            d = {
              entering: { opacity: 1 },
              entered: { opacity: 1 },
              exiting: { opacity: 0 },
              exited: { opacity: 0 },
            };
          return Object(r.jsx)('div', {
            className: o.root,
            children: Object(r.jsxs)(z.a, {
              horizontalAlign: 'stretch',
              verticalAlign: 'stretch',
              children: [
                Object(r.jsx)(q.a, {
                  align: 'center',
                  children: Object(r.jsx)(M.a, {
                    size: W.c.size32,
                    text: null === s || void 0 === s ? void 0 : s.username,
                  }),
                }),
                Object(r.jsx)(B.a, {}),
                t.map(function (e) {
                  return Object(r.jsx)(
                    Qr.a,
                    {
                      in:
                        ((t = e.status),
                        !(t === fe.a.tasks.status.Finished && !c) &&
                          !(t === fe.a.tasks.status.Cancelled && !i)),
                      timeout: 300,
                      unmountOnExit: !0,
                      children: function (t) {
                        return Object(r.jsx)('div', {
                          style: Object(u.a)(Object(u.a)({}, l), d[t]),
                          children: Object(r.jsx)(va, {
                            task: e,
                            setTasks: n,
                            handleStatusChange: a,
                          }),
                        });
                      },
                    },
                    e.id
                  );
                  var t;
                }),
              ],
            }),
          });
        };
      Ca.defaultProps = { user: null };
      var ya = Ca,
        ka = [
          { key: '00:00', text: '00:00' },
          { key: '01:00', text: '01:00' },
          { key: '02:00', text: '02:00' },
          { key: '03:00', text: '03:00' },
          { key: '04:00', text: '04:00' },
          { key: '05:00', text: '05:00' },
          { key: '06:00', text: '06:00' },
          { key: '07:00', text: '07:00' },
          { key: '08:00', text: '08:00' },
          { key: '09:00', text: '09:00' },
          { key: '10:00', text: '10:00' },
          { key: '11:00', text: '11:00' },
          { key: '12:00', text: '12:00' },
          { key: '13:00', text: '13:00' },
          { key: '14:00', text: '14:00' },
          { key: '15:00', text: '15:00' },
          { key: '16:00', text: '16:00' },
          { key: '17:00', text: '17:00' },
          { key: '18:00', text: '18:00' },
          { key: '19:00', text: '19:00' },
          { key: '20:00', text: '20:00' },
          { key: '21:00', text: '21:00' },
          { key: '22:00', text: '22:00' },
          { key: '23:00', text: '23:00' },
        ],
        wa = Object(E.a)(function () {
          return {
            combo: { width: 100 },
            space: { padding: '0px 10px' },
            text: { padding: '10px' },
          };
        }),
        Sa = function (e) {
          var t,
            n = e.hours,
            a = e.setHours,
            s = wa();
          return Object(r.jsx)(r.Fragment, {
            children: Object(r.jsxs)(z.a, {
              horizontalAlign: 'center',
              children: [
                Object(r.jsx)(N.a, {
                  className: s.text,
                  variant: 'medium',
                  children: 'Working hours',
                }),
                Object(r.jsxs)(z.a, {
                  horizontalAlign: 'center',
                  horizontal: !0,
                  verticalAlign: 'center',
                  children: [
                    Object(r.jsx)(kt.a, {
                      className: s.combo,
                      options: ka,
                      selectedKey: n.from.toFormat('HH:mm'),
                      autoComplete: 'on',
                      useComboBoxAsMenuWidth: !0,
                      calloutProps: { calloutMaxHeight: 500 },
                      onChange: function (e, t) {
                        var n = t.key.split(':').map(function (e) {
                            return +e;
                          }),
                          r = Object(l.a)(n, 2),
                          s = r[0],
                          c = r[1];
                        if (Number.isNaN(s) || Number.isNaN(c))
                          throw new Error(
                            'Option key is not in correct format. Supposed to be hh:mm.',
                            t.key
                          );
                        a(function (e) {
                          return Object(u.a)(
                            Object(u.a)({}, e),
                            {},
                            { from: e.from.set({ hour: s, minute: c }) }
                          );
                        });
                      },
                    }),
                    Object(r.jsx)('span', {
                      className: s.space,
                      children: '-',
                    }),
                    Object(r.jsx)(kt.a, {
                      className: s.combo,
                      options: ka,
                      selectedKey: n.from
                        .plus({
                          minute:
                            null !== (t = n.duration) && void 0 !== t ? t : 0,
                        })
                        .toFormat('HH:mm'),
                      autoComplete: 'on',
                      useComboBoxAsMenuWidth: !0,
                      calloutProps: { calloutMaxHeight: 500 },
                      onChange: function (e, t) {
                        var r = t.key.split(':').map(function (e) {
                            return +e;
                          }),
                          s = Object(l.a)(r, 2),
                          c = s[0],
                          i = s[1];
                        if (Number.isNaN(c) || Number.isNaN(i))
                          throw new Error(
                            'Option key is not in correct format. Supposed to be hh:mm.',
                            t.key
                          );
                        var o = n.from.set({ hour: c, minute: i });
                        o <= n.from && (o = o.plus({ day: 1 }));
                        var d = o.diff(n.from, 'minute');
                        a(function (e) {
                          return Object(u.a)(
                            Object(u.a)({}, e),
                            {},
                            { duration: d.values.minutes }
                          );
                        });
                      },
                    }),
                  ],
                }),
              ],
            }),
          });
        },
        Ta = n(379),
        Aa = n(82),
        Pa = n(187),
        Ra = Object(a.createContext)({
          isDialog: !1,
          isVisible: !1,
          setVisible: null,
          show: null,
          accept: null,
          cancel: null,
          resolve: null,
          setResolve: null,
          dialogFooter: null,
          setDialogFooter: null,
        }),
        Ea = function (e) {
          var t,
            n,
            s,
            c,
            i,
            o =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {},
            d =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : {},
            p = Object(a.useState)(!1),
            f = Object(l.a)(p, 2),
            b = f[0],
            j = f[1],
            m = Object(a.useState)(null),
            h = Object(l.a)(m, 2),
            O = h[0],
            x = h[1],
            C = Object(a.useState)(function () {
              return o.dialogFooter;
            }),
            y = Object(l.a)(C, 2),
            k = y[0],
            w = y[1];
          Object(a.useEffect)(
            function () {
              O && !b && O(fe.a.dialogAnswers.No);
            },
            [O]
          );
          var S = (function () {
              var e = Object(g.a)(
                v.a.mark(function e() {
                  return v.a.wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            j(!0),
                            e.abrupt(
                              'return',
                              new Promise(function (e) {
                                x(function () {
                                  return e;
                                });
                              })
                            )
                          );
                        case 2:
                        case 'end':
                          return e.stop();
                      }
                  }, e);
                })
              );
              return function () {
                return e.apply(this, arguments);
              };
            })(),
            T = function () {
              null !== O && O(fe.a.dialogAnswers.Yes), j(!1);
            },
            A = function () {
              null !== O && O(fe.a.dialogAnswers.No), j(!1);
            },
            P = Object(a.useState)({
              isDialog: !0,
              isVisible: b,
              setVisible: j,
              show: S,
              accept: T,
              cancel: A,
              resolve: O,
              setResolve: x,
              dialogFooter: k,
              setDialogFooter: w,
            }),
            R = Object(l.a)(P, 1),
            E = R[0],
            D = b
              ? Object(r.jsx)(Ra.Provider, {
                  value: E,
                  children: Object(r.jsxs)(Ta.a, {
                    hidden: !b,
                    onDismiss:
                      null !== (t = o.onDismiss) && void 0 !== t
                        ? t
                        : function () {
                            return j(!1);
                          },
                    modalProps: {
                      isBlocking:
                        null !== (n = o.isBlocking) && void 0 !== n && n,
                    },
                    dialogContentProps: {
                      type:
                        null !== (s = o.type) && void 0 !== s ? s : Aa.a.normal,
                      title:
                        null !== (c = o.title) && void 0 !== c ? c : 'Title',
                      subText:
                        null !== (i = o.subText) && void 0 !== i ? i : '',
                    },
                    children: [
                      Object(r.jsx)(
                        e,
                        Object(u.a)({ accept: T, cancel: A }, d)
                      ),
                      k ? Object(r.jsx)(Pa.a, { children: k(T, A) }) : null,
                    ],
                  }),
                })
              : null;
          return { visible: b, setVisible: j, render: D, show: S };
        },
        Da = function (e) {
          var t = e.accept,
            n = e.setTasks,
            a = e.conflictTasks,
            s = void 0 === a ? [] : a,
            c = (function () {
              var e = Object(g.a)(
                v.a.mark(function e(r) {
                  var a;
                  return v.a.wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (e.prev = 0),
                              r.preventDefault(),
                              (a = s.map(function (e) {
                                return Ur.updateTaskStatus(e.id, {
                                  status: fe.a.tasks.status.Paused,
                                });
                              })),
                              (e.next = 5),
                              Promise.all(a)
                            );
                          case 5:
                            e.sent.map(function (e) {
                              return n(function (t) {
                                return t.map(function (t) {
                                  return t.id === e.result.id
                                    ? Ur.createTaskObject(e.result)
                                    : t;
                                });
                              });
                            });
                          case 6:
                            return (e.prev = 6), t(), e.finish(6);
                          case 9:
                          case 'end':
                            return e.stop();
                        }
                    },
                    e,
                    null,
                    [[0, , 6, 9]]
                  );
                })
              );
              return function (t) {
                return e.apply(this, arguments);
              };
            })();
          return Object(r.jsxs)('form', {
            id: 'task-busy-resolve',
            onSubmit: c,
            children: [
              Object(r.jsx)(N.a, {
                block: !0,
                variant: 'medium',
                children: 'Following tasks are still busy:',
              }),
              Object(r.jsx)(B.a, {}),
              s.map(function (e, t) {
                return Object(r.jsx)(m.b, {
                  to: '/tasks/'.concat(e.id),
                  target: '_blank',
                  component: U.a,
                  children: Object(r.jsxs)(N.a, {
                    variant: 'medium',
                    children: [
                      t + 1,
                      '. ',
                      e.title,
                      ' ('.concat(
                        new Date(e.actualStartDate).toLocaleString(),
                        ')'
                      ),
                    ],
                  }),
                });
              }),
              Object(r.jsx)(B.a, {}),
              Object(r.jsx)(N.a, {
                block: !0,
                variant: 'medium',
                children: 'If you continue, tasks will be paused.',
              }),
            ],
          });
        },
        La = function (e) {
          var t,
            n =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : [],
            r =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : function (e) {
                    return e;
                  },
            s = Object(a.useState)(
              null !== (t = r(JSON.parse(localStorage.getItem(e)))) &&
                void 0 !== t
                ? t
                : n
            ),
            c = Object(l.a)(s, 2),
            i = c[0],
            o = c[1];
          return (
            Object(a.useEffect)(
              function () {
                localStorage.setItem(e, JSON.stringify(i));
              },
              [i]
            ),
            [i, o]
          );
        },
        Na = {
          baseUrl: '/stream',
          subscribePath: '/stream/subscribe',
          connectSSE: function () {
            var e = this;
            return Object(g.a)(
              v.a.mark(function t() {
                var n;
                return v.a.wrap(
                  function (t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          return (
                            (t.prev = 0),
                            (n = new EventSource(e.baseUrl)),
                            t.abrupt('return', n)
                          );
                        case 5:
                          return (
                            (t.prev = 5),
                            (t.t0 = t.catch(0)),
                            t.abrupt('return', null)
                          );
                        case 8:
                        case 'end':
                          return t.stop();
                      }
                  },
                  t,
                  null,
                  [[0, 5]]
                );
              })
            )();
          },
          subscribe: function (e) {
            var t = this;
            return Object(g.a)(
              v.a.mark(function n() {
                var r;
                return v.a.wrap(
                  function (n) {
                    for (;;)
                      switch ((n.prev = n.next)) {
                        case 0:
                          return (
                            (n.prev = 0),
                            (n.next = 3),
                            y.a.post(t.subscribePath, e)
                          );
                        case 3:
                          if (200 !== (r = n.sent).status) {
                            n.next = 6;
                            break;
                          }
                          return n.abrupt('return', r.data);
                        case 6:
                          throw new Error(
                            'Server response: '
                              .concat(r.status, ' - ')
                              .concat(r.statusText)
                          );
                        case 9:
                          throw (
                            ((n.prev = 9),
                            (n.t0 = n.catch(0)),
                            k.a.notifyError(
                              (n.t0.response.data &&
                                n.t0.response.data.error) ||
                                n.t0.message
                            ),
                            n.t0)
                          );
                        case 13:
                        case 'end':
                          return n.stop();
                      }
                  },
                  n,
                  null,
                  [[0, 9]]
                );
              })
            )();
          },
        },
        Ia = function (e) {
          var t = e.setTasks,
            n = e.hours,
            r = e.setReload,
            s = Object(a.useContext)(O.a),
            c = (function () {
              var e = Object(g.a)(
                v.a.mark(function e(a) {
                  var s, c, i;
                  return v.a.wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          (s = JSON.parse(a.data)) &&
                            (s.action === fe.a.connections.actions.INSERT
                              ? ((c = s.data),
                                (i = Nr.DateTime.fromISO(
                                  c.expectedStartDate
                                )) >= n.from &&
                                  i <= n.to &&
                                  t(function (e) {
                                    return e
                                      .filter(function (e) {
                                        return e.id !== c.id;
                                      })
                                      .concat(Ur.createTaskObject(c));
                                  }))
                              : s.action === fe.a.connections.actions.UPDATE
                              ? t(function (e) {
                                  return e.map(function (e) {
                                    return e.id === s.data.id
                                      ? Ur.createTaskObject(s.data)
                                      : e;
                                  });
                                })
                              : s.action === fe.a.connections.actions.RELOAD &&
                                r(function (e) {
                                  return !e;
                                }));
                        case 2:
                        case 'end':
                          return e.stop();
                      }
                  }, e);
                })
              );
              return function (t) {
                return e.apply(this, arguments);
              };
            })();
          return (
            Object(a.useEffect)(
              function () {
                return (
                  s.connection && s.connection.addEventListener('message', c),
                  function () {
                    s.connection &&
                      s.connection.removeEventListener('message', c);
                  }
                );
              },
              [s.connection]
            ),
            null
          );
        };
      Ia.propTypes = {
        setTasks: Vt.a.func.isRequired,
        hours: Vt.a.shape({
          from: Vt.a.instanceOf(Nr.DateTime),
          to: Vt.a.instanceOf(Nr.DateTime),
        }).isRequired,
        setReload: Vt.a.func.isRequired,
      };
      var Fa = Ia,
        Ua = Object(E.a)(function (e) {
          return {
            searchIcon: {
              color: e.palette.themePrimary,
              marginLeft: e.spacing.s1,
              marginRight: e.spacing.s1,
            },
          };
        }),
        za = function () {
          var e = Ua(),
            t = Object(a.useContext)(O.a),
            n = Fr(Ee.teamUsersPath),
            s = Object(l.a)(n, 1)[0],
            c = Object(a.useState)([]),
            i = Object(l.a)(c, 2),
            o = i[0],
            u = i[1],
            d = Object(a.useState)(!0),
            p = Object(l.a)(d, 2),
            f = p[0],
            b = p[1],
            j = La('DTSelectedUsers', [t.user.id]),
            m = Object(l.a)(j, 2),
            h = m[0],
            x = m[1],
            C = La(
              'DTWorkingHours',
              {
                from: Nr.DateTime.now()
                  .setZone('utc', { keepLocalTime: !0 })
                  .set({ hour: 9, minute: 0, second: 0, millisecond: 0 }),
                duration: 540,
              },
              function (e) {
                return (
                  e && {
                    from: Nr.DateTime.fromISO(
                      null === e || void 0 === e ? void 0 : e.from
                    ).toUTC(),
                    duration: null === e || void 0 === e ? void 0 : e.duration,
                  }
                );
              }
            ),
            y = Object(l.a)(C, 2),
            k = y[0],
            w = y[1],
            T = La('DTShowFinished', !1),
            A = Object(l.a)(T, 2),
            P = A[0],
            R = A[1],
            E = La('DTShowFinished', !1),
            D = Object(l.a)(E, 2),
            L = D[0],
            N = D[1],
            F = {
              params: {
                fromDate: k.from.toJSDate(),
                toDate: k.from.plus({ minute: k.duration }).toJSDate(),
                users: h,
              },
            },
            U = Fr(Ur.baseUrl, F, {
              dependencies: [k, h, f],
              callback: function (e) {
                return e.map(function (e) {
                  return Ur.createTaskObject(e);
                });
              },
              resetDataOnChange: !1,
            }),
            M = Object(l.a)(U, 2),
            W = M[0],
            H = M[1],
            Z = Mr(
              Yr,
              {
                headerText: 'Create new task',
                onRenderFooterContent: function () {
                  return Object(r.jsx)(it.a, {
                    text: 'Create',
                    type: 'submit',
                    form: 'create-task-form',
                  });
                },
              },
              {
                handleAdd: function (e) {
                  var t = Nr.DateTime.fromISO(e.expectedStartDate);
                  t >= k.from &&
                    t <= k.to &&
                    H(function (t) {
                      return t
                        .filter(function (t) {
                          return t.id !== e.id;
                        })
                        .concat(Ur.createTaskObject(e));
                    });
                },
              }
            ),
            V = Object(a.useState)({}),
            G = Object(l.a)(V, 2),
            q = G[0],
            K = G[1],
            Y = Ea(
              Da,
              {
                isBlocking: !0,
                title: 'Busy task found',
                dialogFooter: function (e, t) {
                  return Object(r.jsxs)(r.Fragment, {
                    children: [
                      Object(r.jsx)(S.a, { onClick: t, children: 'Cancel' }),
                      Object(r.jsx)(it.a, {
                        style: { marginLeft: '5px' },
                        form: 'task-busy-resolve',
                        type: 'submit',
                        children: 'Continue',
                      }),
                    ],
                  });
                },
              },
              q
            );
          Object(a.useEffect)(
            function () {
              function e() {
                return (e = Object(g.a)(
                  v.a.mark(function e() {
                    return v.a.wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            if (!t.connectionId) {
                              e.next = 3;
                              break;
                            }
                            return (
                              (e.next = 3),
                              Na.subscribe({
                                to: h,
                                connectionId: t.connectionId,
                              })
                            );
                          case 3:
                          case 'end':
                            return e.stop();
                        }
                    }, e);
                  })
                )).apply(this, arguments);
              }
              !(function () {
                e.apply(this, arguments);
              })();
            },
            [h, t.connectionId]
          ),
            Object(a.useEffect)(
              function () {
                u(
                  s.map(function (e) {
                    return { key: e.id, text: e.username, data: e };
                  })
                );
              },
              [s]
            );
          var J = function (e, t) {
              t.selected
                ? x(function (e) {
                    return e.concat(t.key);
                  })
                : x(function (e) {
                    return e.filter(function (e) {
                      return e !== t.key;
                    });
                  });
            },
            Q = (function () {
              var e = Object(g.a)(
                v.a.mark(function e(n, r) {
                  var a, s, c;
                  return v.a.wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          if (
                            r !== fe.a.tasks.status.InProgress ||
                            n.isBackgroundTask
                          ) {
                            e.next = 11;
                            break;
                          }
                          return (
                            (e.next = 3), Ur.getBusyTasks({ user: t.user.id })
                          );
                        case 3:
                          if (!((s = e.sent).length > 0)) {
                            e.next = 11;
                            break;
                          }
                          return (
                            K({ setTasks: H, conflictTasks: s }),
                            (e.next = 8),
                            Y.show()
                          );
                        case 8:
                          if (e.sent !== fe.a.dialogAnswers.No) {
                            e.next = 11;
                            break;
                          }
                          return e.abrupt('return');
                        case 11:
                          return (
                            (e.next = 13),
                            Ur.updateTaskStatus(n.id, { status: r })
                          );
                        case 13:
                          (c = e.sent),
                            (null === (a = c.unpaused) || void 0 === a
                              ? void 0
                              : a.id) &&
                              H(function (e) {
                                return e.map(function (e) {
                                  return e.id === c.unpaused.id
                                    ? Ur.createTaskObject(c.unpaused)
                                    : e;
                                });
                              }),
                            H(function (e) {
                              return e.map(function (e) {
                                return e.id === n.id
                                  ? Ur.createTaskObject(c.result)
                                  : e;
                              });
                            });
                        case 16:
                        case 'end':
                          return e.stop();
                      }
                  }, e);
                })
              );
              return function (t, n) {
                return e.apply(this, arguments);
              };
            })();
          return Object(r.jsxs)(r.Fragment, {
            children: [
              Object(r.jsx)(Fa, { setTasks: H, hours: k, setReload: b }),
              Object(r.jsxs)(ke.Container, {
                lg: !0,
                children: [
                  Object(r.jsx)(Be.a, { text: 'Daily tasks' }),
                  Object(r.jsx)(ke.Row, {
                    children: Object(r.jsx)(ke.Col, {
                      xs: 12,
                      children: Object(r.jsx)(Jr, {
                        currentDate: k.from,
                        setCurrentDate: w,
                      }),
                    }),
                  }),
                  Object(r.jsx)(ke.Row, {
                    children: Object(r.jsx)(ke.Col, {
                      children: Object(r.jsx)(Sa, { hours: k, setHours: w }),
                    }),
                  }),
                  Object(r.jsx)(B.a, {}),
                  Object(r.jsx)(ke.Row, {
                    children: Object(r.jsx)(ke.Col, {
                      children: Object(r.jsx)(ve.a, {
                        items: [
                          {
                            key: 'new',
                            text: 'New',
                            iconProps: { iconName: 'Add' },
                            onClick: function () {
                              Z.setOpen(!0);
                            },
                          },
                          {
                            key: 'users',
                            text: 'Users',
                            iconProps: { iconName: 'ProfileSearch' },
                            onRender: function () {
                              return Object(r.jsxs)(z.a, {
                                horizontal: !0,
                                horizontalAlign: 'center',
                                verticalAlign: 'center',
                                children: [
                                  Object(r.jsx)(I.a, {
                                    className: e.searchIcon,
                                    iconName: 'ProfileSearch',
                                  }),
                                  Object(r.jsx)(kt.a, {
                                    autoComplete: 'on',
                                    options: o,
                                    multiSelect: !0,
                                    selectedKey: h,
                                    openOnKeyboardFocus: !0,
                                    onChange: J,
                                    calloutProps: { calloutMaxHeight: 500 },
                                  }),
                                ],
                              });
                            },
                          },
                        ],
                        farItems: [
                          {
                            key: 'showFinished',
                            iconProps: { iconName: 'RedEye' },
                            onRender: function () {
                              return Object(r.jsxs)(z.a, {
                                tokens: { childrenGap: 4 },
                                horizontalAlign: 'start',
                                verticalAlign: 'center',
                                children: [
                                  Object(r.jsx)(Ce.a, {
                                    label: 'Show Finished',
                                    checked: P,
                                    onChange: function (e, t) {
                                      return R(t);
                                    },
                                  }),
                                  Object(r.jsx)(Ce.a, {
                                    label: 'Show Cancelled',
                                    checked: L,
                                    onChange: function (e, t) {
                                      return N(t);
                                    },
                                  }),
                                ],
                              });
                            },
                          },
                        ],
                      }),
                    }),
                  }),
                  Object(r.jsx)(B.a, {}),
                  Object(r.jsx)(ke.Row, {
                    justify: 'around',
                    children: h.map(function (e) {
                      return Object(r.jsx)(
                        ya,
                        {
                          tasks: W.filter(function (t) {
                            return (
                              void 0 !==
                              t.assignedTo.find(function (t) {
                                return t.id === e;
                              })
                            );
                          }).sort(function (e, t) {
                            return e.expectedStartDate < t.expectedStartDate
                              ? -1
                              : 1;
                          }),
                          user: s.find(function (t) {
                            return t.id === e;
                          }),
                          setTasks: H,
                          handleStatusChange: Q,
                          showFinished: P,
                          showCancelled: L,
                        },
                        e
                      );
                    }),
                  }),
                ],
              }),
              Z.render,
              Y.render,
            ],
          });
        },
        Ma = n(370),
        Wa = (function () {
          var e = Object(g.a)(
            v.a.mark(function e(t) {
              var n,
                r,
                a,
                s = arguments;
              return v.a.wrap(
                function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          (n = s.length > 1 && void 0 !== s[1] ? s[1] : 200),
                          (r = !(s.length > 2 && void 0 !== s[2]) || s[2]),
                          (e.prev = 2),
                          (e.next = 5),
                          t()
                        );
                      case 5:
                        if ((a = e.sent).status !== n) {
                          e.next = 8;
                          break;
                        }
                        return e.abrupt('return', a.data);
                      case 8:
                        throw new Error(
                          'Server response: '
                            .concat(a.status, ' - ')
                            .concat(a.statusText)
                        );
                      case 11:
                        throw (
                          ((e.prev = 11),
                          (e.t0 = e.catch(2)),
                          r &&
                            k.a.notifyError(
                              (e.t0.response.data &&
                                e.t0.response.data.error) ||
                                e.t0.message
                            ),
                          e.t0)
                        );
                      case 15:
                      case 'end':
                        return e.stop();
                    }
                },
                e,
                null,
                [[2, 11]]
              );
            })
          );
          return function (t) {
            return e.apply(this, arguments);
          };
        })(),
        Ha = {
          baseUrl: '/api/task-flows',
          singleUrl: function (e) {
            return '/api/task-flows/'.concat(e);
          },
          getTaskFlow: function (e) {
            var t = this;
            return Object(g.a)(
              v.a.mark(function n() {
                return v.a.wrap(function (n) {
                  for (;;)
                    switch ((n.prev = n.next)) {
                      case 0:
                        return n.abrupt(
                          'return',
                          Wa(function () {
                            return y.a.get(t.singleUrl(e));
                          })
                        );
                      case 1:
                      case 'end':
                        return n.stop();
                    }
                }, n);
              })
            )();
          },
          createTaskFlow: function (e) {
            var t = this;
            return Object(g.a)(
              v.a.mark(function n() {
                return v.a.wrap(function (n) {
                  for (;;)
                    switch ((n.prev = n.next)) {
                      case 0:
                        return n.abrupt(
                          'return',
                          Wa(function () {
                            return y.a.post(t.baseUrl, e);
                          })
                        );
                      case 1:
                      case 'end':
                        return n.stop();
                    }
                }, n);
              })
            )();
          },
          updateTaskFlow: function (e, t) {
            var n = this;
            return Object(g.a)(
              v.a.mark(function r() {
                return v.a.wrap(function (r) {
                  for (;;)
                    switch ((r.prev = r.next)) {
                      case 0:
                        return r.abrupt(
                          'return',
                          Wa(function () {
                            return y.a.put(n.singleUrl(e), t);
                          })
                        );
                      case 1:
                      case 'end':
                        return r.stop();
                    }
                }, r);
              })
            )();
          },
        },
        Ba = function (e) {
          var t = e.setFlows,
            n = Fr(Ct.baseUrl),
            s = Object(l.a)(n, 1)[0],
            c = Object(a.useState)({ name: '', teams: [], color: '' }),
            i = Object(l.a)(c, 2),
            o = i[0],
            d = i[1],
            p = Object(a.useContext)(zr),
            f = function (e) {
              var t =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : function (e) {
                      return e[0].target.value;
                    };
              return function () {
                for (
                  var n = arguments.length, r = new Array(n), a = 0;
                  a < n;
                  a++
                )
                  r[a] = arguments[a];
                d(function (n) {
                  return Object(u.a)(
                    Object(u.a)({}, n),
                    {},
                    Object(Dt.a)({}, e, t(r))
                  );
                });
              };
            },
            b = (function () {
              var e = Object(g.a)(
                v.a.mark(function e(n) {
                  var r;
                  return v.a.wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          if ((n.preventDefault(), o.name)) {
                            e.next = 3;
                            break;
                          }
                          return e.abrupt(
                            'return',
                            k.a.notifyError('Flow Name is missing')
                          );
                        case 3:
                          if (0 !== o.teams.length) {
                            e.next = 5;
                            break;
                          }
                          return e.abrupt(
                            'return',
                            k.a.notifyError('Please choose at least one team')
                          );
                        case 5:
                          if (o.color) {
                            e.next = 7;
                            break;
                          }
                          return e.abrupt(
                            'return',
                            k.a.notifyError('Color must be provided')
                          );
                        case 7:
                          return (e.next = 9), Ha.createTaskFlow(o);
                        case 9:
                          return (
                            (r = e.sent) &&
                              t(function (e) {
                                return e.concat(r);
                              }),
                            p.isPanel && p.setOpen(!1),
                            e.abrupt('return', null)
                          );
                        case 13:
                        case 'end':
                          return e.stop();
                      }
                  }, e);
                })
              );
              return function (t) {
                return e.apply(this, arguments);
              };
            })();
          return (
            Object(a.useEffect)(
              function () {
                p.isPanel &&
                  p.setOnRenderFooter(function () {
                    return function () {
                      return Object(r.jsxs)(z.a, {
                        horizontal: !0,
                        tokens: { childrenGap: 2 },
                        children: [
                          Object(r.jsx)(it.a, {
                            text: 'Create',
                            type: 'submit',
                            form: 'add-flow-form',
                          }),
                          Object(r.jsx)(S.a, {
                            text: 'Close',
                            onClick: function () {
                              return p.setOpen(!1);
                            },
                          }),
                        ],
                      });
                    };
                  });
              },
              [p]
            ),
            Object(r.jsxs)('form', {
              onSubmit: b,
              id: 'add-flow-form',
              children: [
                Object(r.jsx)(Ke.a, {
                  label: 'Name',
                  value: o.name,
                  onChange: f('name'),
                  placeholder: 'Flow name',
                }),
                Object(r.jsx)(cn.a, {
                  placeholder: 'Flow teams',
                  label: 'Teams',
                  selectedKeys: o.teams,
                  multiSelect: !0,
                  options: s.map(function (e) {
                    return { key: e.id, text: e.name };
                  }),
                  onChange: f('teams', function (e) {
                    var t = Object(l.a)(e, 2),
                      n = (t[0], t[1]);
                    return n.selected
                      ? o.teams.concat(n.key)
                      : o.teams.filter(function (e) {
                          return e !== n.key;
                        });
                  }),
                }),
                Object(r.jsx)(Yt.a, {
                  htmlFor: 'add-flow-color-picker',
                  children: 'Color',
                }),
                Object(r.jsx)(Ma.a, {
                  id: 'add-flow-color-picker',
                  columnCount: 6,
                  cellHeight: 35,
                  cellWidth: 35,
                  cellShape: 'square',
                  colorCells: fe.a.colors.map(function (e) {
                    return { id: e, color: e };
                  }),
                  selectedId: o.color,
                  onColorChanged: f('color', function (e) {
                    return Object(l.a)(e, 1)[0];
                  }),
                }),
              ],
            })
          );
        },
        Za = function (e) {
          var t = e.id,
            n = e.setFlows,
            s = Fr(Ha.singleUrl(t), null, {
              initialData: null,
              callback: function (e) {
                return {
                  name: e.name,
                  color: e.color,
                  isActive: e.isActive,
                  teams: e.teams.map(function (e) {
                    return e.id;
                  }),
                };
              },
            }),
            c = Object(l.a)(s, 2),
            i = c[0],
            o = c[1],
            d = Fr(Ct.baseUrl),
            p = Object(l.a)(d, 1)[0],
            f = Object(a.useContext)(zr),
            b = (function () {
              var e = Object(g.a)(
                v.a.mark(function e(r) {
                  var a;
                  return v.a.wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            r.preventDefault(),
                            (e.next = 3),
                            Ha.updateTaskFlow(t, i)
                          );
                        case 3:
                          (a = e.sent) &&
                            n(function (e) {
                              return e.map(function (e) {
                                return e.id === a.id ? a : e;
                              });
                            }),
                            f.isPanel && f.setOpen(!1);
                        case 6:
                        case 'end':
                          return e.stop();
                      }
                  }, e);
                })
              );
              return function (t) {
                return e.apply(this, arguments);
              };
            })(),
            j = function (e) {
              var t =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : function (e) {
                      return e[0].target.value;
                    };
              return function () {
                for (
                  var n = arguments.length, r = new Array(n), a = 0;
                  a < n;
                  a++
                )
                  r[a] = arguments[a];
                o(function (n) {
                  return Object(u.a)(
                    Object(u.a)({}, n),
                    {},
                    Object(Dt.a)({}, e, t(r))
                  );
                });
              };
            };
          return (
            Object(a.useEffect)(
              function () {
                f.isPanel &&
                  f.setOnRenderFooter(function () {
                    return function () {
                      return Object(r.jsxs)(z.a, {
                        horizontal: !0,
                        tokens: { childrenGap: 2 },
                        children: [
                          Object(r.jsx)(it.a, {
                            text: 'Update',
                            type: 'submit',
                            form: 'edit-flow-form',
                          }),
                          Object(r.jsx)(S.a, {
                            text: 'Close',
                            onClick: function () {
                              return f.setOpen(!1);
                            },
                          }),
                        ],
                      });
                    };
                  });
              },
              [f]
            ),
            null !== i &&
              Object(r.jsxs)('form', {
                onSubmit: b,
                id: 'edit-flow-form',
                children: [
                  Object(r.jsx)(Ke.a, {
                    label: 'Name',
                    value: null === i || void 0 === i ? void 0 : i.name,
                    onChange: j('name'),
                    placeholder: 'Flow name',
                  }),
                  Object(r.jsx)(cn.a, {
                    placeholder: 'Flow teams',
                    label: 'Teams',
                    selectedKeys: null === i || void 0 === i ? void 0 : i.teams,
                    multiSelect: !0,
                    options: p.map(function (e) {
                      return { key: e.id, text: e.name };
                    }),
                    onChange: j('teams', function (e) {
                      var t,
                        n = Object(l.a)(e, 2),
                        r = (n[0], n[1]);
                      return r.selected
                        ? null === i || void 0 === i
                          ? void 0
                          : i.teams.concat(r.key)
                        : null === i ||
                          void 0 === i ||
                          null === (t = i.teams) ||
                          void 0 === t
                        ? void 0
                        : t.filter(function (e) {
                            return e !== r.key;
                          });
                    }),
                  }),
                  Object(r.jsx)(Yt.a, {
                    htmlFor: 'edit-flow-color-picker',
                    children: 'Color',
                  }),
                  Object(r.jsx)(Ma.a, {
                    id: 'edit-flow-color-picker',
                    columnCount: 6,
                    cellHeight: 35,
                    cellWidth: 35,
                    cellShape: 'square',
                    colorCells: fe.a.colors.map(function (e) {
                      return { id: e, color: e };
                    }),
                    selectedId: null === i || void 0 === i ? void 0 : i.color,
                    onColorChanged: j('color', function (e) {
                      return Object(l.a)(e, 1)[0];
                    }),
                  }),
                  Object(r.jsx)(Ce.a, {
                    label: 'Active',
                    checked: null === i || void 0 === i ? void 0 : i.isActive,
                    onChange: j('isActive', function (e) {
                      var t = Object(l.a)(e, 2);
                      t[0];
                      return t[1];
                    }),
                  }),
                ],
              })
          );
        },
        Va = function () {
          var e,
            t = Fr(Ha.baseUrl),
            n = Object(l.a)(t, 2),
            s = n[0],
            c = n[1],
            i = Object(a.useState)({ count: 0, items: [], indices: [] }),
            o = Object(l.a)(i, 2),
            u = o[0],
            d = o[1],
            p = Mr(
              Ba,
              {
                id: 'add-flow-panel',
                headerText: 'Create new flow',
                isFooterAtBottom: !0,
                type: de.a.smallFixedFar,
                isLightDismiss: !1,
                onDismiss: function (e, t) {
                  return function (e) {
                    var n = document.getElementById('add-flow-panel');
                    n && n.contains(e.target) && t(!1);
                  };
                },
              },
              { setFlows: c }
            ),
            f = Mr(
              Za,
              {
                id: 'edit-flow-panel',
                headerText: 'Update flow',
                isFooterAtBottom: !0,
                type: de.a.smallFixedFar,
                isLightDismiss: !1,
              },
              {
                id: null === (e = u.items[0]) || void 0 === e ? void 0 : e.id,
                setFlows: c,
              }
            ),
            b = Object(a.useState)([
              {
                key: 'color',
                name: ' Color',
                fieldName: 'color',
                isSortable: !0,
                isFilterable: !0,
                isResizable: !1,
                maxWidth: 50,
                onRender: function (e) {
                  return Object(r.jsx)('div', {
                    style: { backgroundColor: e.color, width: 20, height: 20 },
                  });
                },
              },
              {
                key: 'name',
                name: ' Name',
                fieldName: 'name',
                isSortable: !0,
                isFilterable: !0,
                isResizable: !0,
                minWidth: 100,
                maxWidth: 300,
              },
              {
                key: 'status',
                name: ' Status',
                fieldName: 'isActive',
                isSortable: !0,
                isFilterable: !0,
                isResizable: !0,
                onRender: function (e) {
                  return e.isActive ? 'Active' : 'Disabled';
                },
                filterValueAccessor: function (e) {
                  return e.isActive ? 'Active' : 'Disabled';
                },
                minWidth: 100,
                maxWidth: 150,
              },
              {
                key: 'teams',
                name: ' Teams',
                fieldName: 'teams',
                isSortable: !0,
                isFilterable: !0,
                isResizable: !0,
                minWidth: 100,
                maxWidth: 300,
                onRender: function (e) {
                  return e.teams
                    .map(function (e) {
                      return e.name;
                    })
                    .join(', ');
                },
              },
            ]),
            j = Object(l.a)(b, 1)[0];
          return Object(r.jsxs)(ke.Container, {
            md: !0,
            children: [
              Object(r.jsx)(ke.Row, {
                children: Object(r.jsx)(ke.Col, {
                  children: Object(r.jsx)(Be.a, { text: 'Task Flows' }),
                }),
              }),
              Object(r.jsx)(B.a, {}),
              Object(r.jsx)(ke.Row, {
                children: Object(r.jsx)(ke.Col, {
                  children: Object(r.jsx)(yt.a, {
                    commandItems: [
                      {
                        key: 'add',
                        text: 'Add',
                        iconProps: { iconName: 'Add' },
                        onClick: function () {
                          return p.setOpen(!0);
                        },
                      },
                      {
                        key: 'edit',
                        text: 'Edit',
                        iconProps: { iconName: 'Edit' },
                        disabled: 0 === u.items.length,
                        onClick: function () {
                          return f.setOpen(!0);
                        },
                      },
                    ],
                    tableProps: {
                      items: s,
                      columns: j,
                      selectionMode: ye.b.single,
                      onItemInvoked: function () {
                        return f.setOpen(!0);
                      },
                      layoutMode: gt.e.justified,
                      setSelectionDetails: d,
                    },
                  }),
                }),
              }),
              p.render,
              f.render,
            ],
          });
        },
        Ga = n(368),
        qa = n(41),
        Ka = n(369),
        Ya = n(185),
        Ja = Object(E.a)(function (e) {
          return {
            root: {
              backgroundColor: e.palette.neutralLighter,
              height: '100%',
              textAlign: 'center',
              display: 'flex',
              flexFlow: 'column nowrap',
              justifyContent: 'center',
              cursor: 'pointer',
              '&:hover': { backgroundColor: e.palette.themePrimary },
            },
            selected: { backgroundColor: e.palette.themeDark },
            flowItem: { padding: 3 },
            noSelect: { userSelect: 'none' },
          };
        }),
        Qa = function (e) {
          var t,
            n,
            a = e.userFlows,
            s = e.handleClick,
            c = e.handleInvoke,
            i = e.isSelected,
            o = Ja();
          return Object(r.jsx)('div', {
            role: 'button',
            tabIndex: 0,
            className: Object(Xr.a)([o.root, i && o.selected]),
            onClick: s,
            onKeyDown: function (e) {
              return 'Enter' === e.code && s();
            },
            onDoubleClick: c,
            children:
              (null === a || void 0 === a ? void 0 : a.flows) &&
              0 !==
                (null === a ||
                void 0 === a ||
                null === (t = a.flows) ||
                void 0 === t
                  ? void 0
                  : t.length)
                ? Object(r.jsx)('ul', {
                    children:
                      null ===
                        (n = Array.from(
                          null === a || void 0 === a ? void 0 : a.flows
                        )) || void 0 === n
                        ? void 0
                        : n.map(function (e) {
                            var t;
                            return Object(r.jsx)(
                              'li',
                              {
                                className: o.flowItem,
                                children: Object(r.jsx)(Ge, {
                                  className: o.noSelect,
                                  style: {
                                    backgroundColor:
                                      null !== (t = e.color) && void 0 !== t
                                        ? t
                                        : 'transparent',
                                    padding: 3,
                                    whiteSpace: 'pre-wrap',
                                  },
                                  children: Object(r.jsx)(N.a, {
                                    variant: 'medium',
                                    children: e.name,
                                  }),
                                }),
                              },
                              e.id
                            );
                          }),
                  })
                : Object(r.jsx)(N.a, {
                    className: o.noSelect,
                    variant: 'medium',
                    children: '-',
                  }),
          });
        };
      Qa.defaultProps = { userFlows: null };
      var Xa = Qa,
        _a = Object(E.a)(function (e) {
          return { row: { color: e.palette.black } };
        }),
        $a = function (e) {
          var t = e.userFlowMap,
            n = e.dates,
            a = e.users,
            s = e.selectedCell,
            c = e.setSelectedCell,
            i = e.handleInvoke,
            o = _a(),
            l = Object(D.a)(),
            d = Nr.DateTime.now().toISODate(),
            p = {
              key: 'username',
              name: 'Username',
              fieldName: 'username',
              maxWidth: 300,
              onRender: function (e) {
                return Object(r.jsx)(M.a, {
                  size: W.c.size24,
                  text: e.username,
                });
              },
              isResizable: !0,
            },
            f = function (e, t) {
              return Boolean(
                (null === s || void 0 === s ? void 0 : s.date) &&
                  s.date === e &&
                  (null === s || void 0 === s ? void 0 : s.user) &&
                  s.user === t
              );
            },
            b = function (e, t) {
              return function () {
                c({ date: e, user: t });
              };
            };
          return Object(r.jsx)(ke.Container, {
            fluid: !0,
            children: Object(r.jsx)(Ka.a, {
              layoutMode: gt.e.fixedColumns,
              onRenderRow: function (e) {
                return Object(r.jsx)(
                  Ya.a,
                  Object(u.a)(
                    Object(u.a)({ className: o.row }, e),
                    {},
                    {
                      styles: {
                        root: { '&:hover': { backgroundColor: 'transparent' } },
                      },
                    }
                  )
                );
              },
              columns: [p].concat(
                n.map(function (e) {
                  return {
                    key: Nr.DateTime.fromJSDate(e).toISODate(),
                    name: Nr.DateTime.fromJSDate(e).toISODate(),
                    minWidth: 100,
                    styles: {
                      root: {
                        border: '1px solid '.concat(
                          Nr.DateTime.fromJSDate(e).toISODate() === d
                            ? l.palette.themePrimary
                            : 'transparent'
                        ),
                      },
                    },
                    onRender: function (e, n, a) {
                      var s;
                      return Object(r.jsx)(Xa, {
                        userFlows:
                          null === (s = t.get(e.id)) || void 0 === s
                            ? void 0
                            : s.get(a.key),
                        handleClick: b(a.key, e.id),
                        handleInvoke: i,
                        isSelected: f(a.key, e.id),
                      });
                    },
                  };
                })
              ),
              items: a,
              selectionMode: ye.b.none,
            }),
          });
        };
      $a.defaultProps = { selectedCell: null };
      var es = $a,
        ts = {
          baseUrl: '/api/task-planning',
          addFlowUrl: function (e, t) {
            return '/api/task-planning/'.concat(e, '/add-flow/').concat(t);
          },
          removeFlowUrl: function (e, t) {
            return '/api/task-planning/'.concat(e, '/remove-flow/').concat(t);
          },
          createPlanning: function (e, t, n) {
            var r = this;
            return Object(g.a)(
              v.a.mark(function a() {
                return v.a.wrap(function (a) {
                  for (;;)
                    switch ((a.prev = a.next)) {
                      case 0:
                        return a.abrupt(
                          'return',
                          Wa(function () {
                            return y.a.post(r.baseUrl, {
                              date: e,
                              user: t,
                              flows: n.map(function (e) {
                                return e.id;
                              }),
                            });
                          })
                        );
                      case 1:
                      case 'end':
                        return a.stop();
                    }
                }, a);
              })
            )();
          },
          addFlowToPlanning: function (e, t) {
            var n = this;
            return Object(g.a)(
              v.a.mark(function r() {
                return v.a.wrap(function (r) {
                  for (;;)
                    switch ((r.prev = r.next)) {
                      case 0:
                        return r.abrupt(
                          'return',
                          Wa(function () {
                            return y.a.put(n.addFlowUrl(e, t));
                          })
                        );
                      case 1:
                      case 'end':
                        return r.stop();
                    }
                }, r);
              })
            )();
          },
          removeFromFromPlanning: function (e, t) {
            var n = this;
            return Object(g.a)(
              v.a.mark(function r() {
                return v.a.wrap(function (r) {
                  for (;;)
                    switch ((r.prev = r.next)) {
                      case 0:
                        return r.abrupt(
                          'return',
                          Wa(function () {
                            return y.a.delete(n.removeFlowUrl(e, t));
                          })
                        );
                      case 1:
                      case 'end':
                        return r.stop();
                    }
                }, r);
              })
            )();
          },
        },
        ns = Object(E.a)(function (e) {
          return {
            root: {},
            suggestionRoot: { padding: e.spacing.s2 },
            suggestionCheck: {
              marginRight: e.spacing.s2,
              padding: e.spacing.s2,
              outline: 'none',
            },
            picker: {
              '& input': {
                backgroundColor: e.palette.white,
                color: e.palette.neutralPrimary,
              },
            },
            suggestion: { padding: e.spacing.s1 },
            colorBox: { width: 20, height: 20, marginRight: e.spacing.s1 },
            secondaryText: { color: e.palette.neutralSecondaryAlt },
            item: { marginTop: 4, '&:first-child': { marginTop: 8 } },
            removeIcon: { width: 32, height: 32 },
          };
        }),
        rs = function (e) {
          var t = e.label,
            n = e.options,
            s = e.onSelect,
            c = e.disabled,
            i = e.onRemove,
            o = e.selected,
            l = e.showDeleteIcon,
            d = e.showCheckboxes,
            p = Object(Ae.a)(e, [
              'label',
              'options',
              'onSelect',
              'disabled',
              'onRemove',
              'selected',
              'showDeleteIcon',
              'showCheckboxes',
            ]),
            f = ns(),
            b = Object(a.useMemo)(
              function () {
                return new Set(
                  o.map(function (e) {
                    return e.key;
                  })
                );
              },
              [o]
            ),
            j = function (e) {
              return function (t) {
                return (
                  t.preventDefault(),
                  t.stopPropagation(),
                  b.has(e.key) ? i(e) : s(e)
                );
              };
            };
          return Object(r.jsxs)(
            'div',
            Object(u.a)(
              Object(u.a)({}, p),
              {},
              {
                children: [
                  t && Object(r.jsx)(Yt.a, { children: t }),
                  Object(r.jsx)(De.a, {
                    inputProps: { placeholder: 'Select...' },
                    className: f.picker,
                    disabled: c,
                    onRenderSuggestionsItem: function e(t) {
                      var n, a;
                      return Object(r.jsxs)(
                        z.a,
                        {
                          className: f.suggestionRoot,
                          horizontalAlign: 'start',
                          verticalAlign: 'center',
                          horizontal: !0,
                          children: [
                            d &&
                              Object(r.jsx)('span', {
                                className: f.suggestionCheck,
                                role: 'button',
                                tabIndex: -1,
                                onKeyDown: function (n) {
                                  return 'Space' === n.key ? e(t)() : null;
                                },
                                onClick: j(t),
                                children: Object(r.jsx)(Ce.a, {
                                  checked: b.has(t.key),
                                }),
                              }),
                            Object(r.jsx)('div', {
                              className: f.colorBox,
                              style: {
                                backgroundColor:
                                  null !==
                                    (n =
                                      null === t ||
                                      void 0 === t ||
                                      null === (a = t.data) ||
                                      void 0 === a
                                        ? void 0
                                        : a.color) && void 0 !== n
                                    ? n
                                    : 'transparent',
                              },
                            }),
                            Object(r.jsxs)(z.a, {
                              horizontalAlign: 'start',
                              children: [
                                Object(r.jsx)(N.a, {
                                  variant: 'mediumPlus',
                                  children: t.data.name,
                                }),
                                Object(r.jsx)(N.a, {
                                  className: f.secondaryText,
                                  variant: 'xSmall',
                                  children: t.data.teams
                                    .map(function (e) {
                                      return e.name;
                                    })
                                    .join(', '),
                                }),
                              ],
                            }),
                          ],
                        },
                        t.key
                      );
                    },
                    onResolveSuggestions: function (e) {
                      return n.filter(function (t) {
                        return (
                          -1 !==
                          t.data.name.toLowerCase().indexOf(e.toLowerCase())
                        );
                      });
                    },
                    resolveDelay: 300,
                    onRenderItem: function (e) {
                      var t, n, a, s, c, o, u;
                      return Object(r.jsxs)(
                        z.a,
                        {
                          className: f.item,
                          horizontalAlign: 'center',
                          verticalAlign: 'center',
                          horizontal: !0,
                          children: [
                            Object(r.jsx)(qe, {
                              style: {
                                backgroundColor:
                                  null !==
                                    (a =
                                      null === (s = e.item) ||
                                      void 0 === s ||
                                      null === (c = s.data) ||
                                      void 0 === c
                                        ? void 0
                                        : c.color) && void 0 !== a
                                    ? a
                                    : 'transparent',
                                padding: 3,
                                whiteSpace: 'pre-wrap',
                                width: '50%',
                                marginLeft: l ? 32 : 0,
                              },
                              children: Object(r.jsx)(N.a, {
                                variant: 'medium',
                                children:
                                  null === (o = e.item) ||
                                  void 0 === o ||
                                  null === (u = o.data) ||
                                  void 0 === u
                                    ? void 0
                                    : u.name,
                              }),
                            }),
                            l &&
                              Object(r.jsx)(L.a, {
                                className: f.removeIcon,
                                iconProps: { iconName: 'Delete' },
                                onClick: function () {
                                  return i(e.item);
                                },
                              }),
                          ],
                        },
                        null === (t = e.item) ||
                          void 0 === t ||
                          null === (n = t.data) ||
                          void 0 === n
                          ? void 0
                          : n.id
                      );
                    },
                    selectedItems: o,
                    onEmptyResolveSuggestions: function () {
                      return n;
                    },
                    onItemSelected: function (e) {
                      return b.has(e.key) ? i(e) : s(e);
                    },
                    pickerCalloutProps: { preventDismissOnScroll: !0 },
                  }),
                ],
              }
            )
          );
        };
      rs.defaultProps = {
        label: null,
        props: null,
        disabled: !1,
        showCheckboxes: !0,
        showDeleteIcon: !1,
      };
      var as = rs,
        ss = Object(E.a)(function (e) {
          return {
            root: { minWidth: 300, minHeight: 200 },
            picker: {
              '& input': {
                backgroundColor: e.palette.neutralLight,
                color: e.palette.neutralPrimary,
              },
            },
            secondaryText: { color: e.palette.neutralSecondaryAlt },
            suggestion: { padding: e.spacing.s1 },
            item: { marginTop: e.spacing.s1 },
            colorBox: { width: 20, height: 20, marginRight: e.spacing.s1 },
            focusPoint: {
              visibility: 'hidden',
              height: 0,
              width: 0,
              margin: 0,
              padding: 0,
              border: 'none',
            },
            removeIcon: { width: 32, height: 32 },
          };
        }),
        cs = function (e) {
          var t,
            n = e.planning,
            s = e.options,
            c = e.addFlow,
            i = e.removeFlow,
            o = e.users,
            u = e.user,
            l = ss(),
            d = Object(a.useMemo)(
              function () {
                var e,
                  t,
                  r,
                  a = new Set(
                    null === n ||
                    void 0 === n ||
                    null === (e = n.flows) ||
                    void 0 === e
                      ? void 0
                      : e.map(function (e) {
                          return e.id;
                        })
                  ),
                  c = new Set(
                    null ===
                      (t = o.find(function (e) {
                        return e.id === u;
                      })) ||
                    void 0 === t ||
                    null === (r = t.teams) ||
                    void 0 === r
                      ? void 0
                      : r.map(function (e) {
                          return e.id;
                        })
                  );
                return s
                  .filter(function (e) {
                    return e.data.isActive;
                  })
                  .filter(function (e) {
                    return (
                      e.data.teams.filter(function (e) {
                        return c.has(e.id);
                      }).length > 0
                    );
                  })
                  .filter(function (e) {
                    return !a.has(e.data.id);
                  });
              },
              [s, n, o, u]
            );
          return Object(r.jsxs)('div', {
            className: l.root,
            children: [
              Object(r.jsx)('input', { className: l.focusPoint }),
              Object(r.jsx)(as, {
                options: d,
                showCheckboxes: !1,
                showDeleteIcon: !0,
                onSelect: function (e) {
                  c(n, e.data);
                },
                onRemove: function (e) {
                  i(n, e.data);
                },
                selected: n
                  ? null === n ||
                    void 0 === n ||
                    null === (t = n.flows) ||
                    void 0 === t
                    ? void 0
                    : t.map(function (e) {
                        return { key: e.id, data: e };
                      })
                  : [],
              }),
            ],
          });
        },
        is = Object(E.a)(function (e) {
          return {
            searchIcon: {
              color: e.palette.themePrimary,
              marginLeft: e.spacing.s1,
              marginRight: e.spacing.s1,
            },
          };
        }),
        os = function () {
          var e,
            t = is(),
            n = Object(a.useState)(new Date()),
            s = Object(l.a)(n, 2),
            c = s[0],
            i = s[1],
            o = Object(a.useState)(Zr.getWeekFromDate(c, 1)),
            u = Object(l.a)(o, 2),
            d = u[0],
            p = u[1],
            f = Fr(Ha.baseUrl),
            b = Object(l.a)(f, 1)[0],
            j = Object(a.useState)(null),
            m = Object(l.a)(j, 2),
            h = m[0],
            O = m[1],
            x = Fr(Ct.baseUrl, null, {
              callback: function (e) {
                return e.map(function (e) {
                  return { key: e.id, text: e.name, data: e };
                });
              },
            }),
            C = Object(l.a)(x, 1)[0],
            y = La('TaskPlanningSelectedTeam', null),
            k = Object(l.a)(y, 2),
            w = k[0],
            S = k[1],
            T = Fr(
              Ee.baseUrl,
              { params: { teams: [w] } },
              { dependencies: [w] }
            ),
            A = Object(l.a)(T, 1)[0],
            P = Fr(
              ts.baseUrl,
              {
                params: {
                  dateFrom: Zr.makeUTCDateOnly(d[0]),
                  dateTo: Zr.makeUTCDateOnly(d[d.length - 1]),
                  teams: [w],
                },
              },
              { dependencies: [w, d] }
            ),
            R = Object(l.a)(P, 2),
            E = R[0],
            D = R[1],
            L = Object(a.useMemo)(
              function () {
                var e = new Map();
                return (
                  A.forEach(function (t) {
                    return e.set(t.id, new Map());
                  }),
                  E.forEach(function (t) {
                    var n;
                    e.has(
                      null === (n = t.user) || void 0 === n ? void 0 : n.id
                    ) &&
                      e
                        .get(t.user.id)
                        .set(
                          Nr.DateTime.fromISO(t.date).toUTC().toISODate(),
                          t
                        );
                  }),
                  e
                );
              },
              [E, A]
            ),
            N = (function () {
              var e = Object(g.a)(
                v.a.mark(function e(t, n) {
                  var r, a;
                  return v.a.wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          if (t) {
                            e.next = 7;
                            break;
                          }
                          return (
                            (e.next = 3), ts.createPlanning(h.date, h.user, [n])
                          );
                        case 3:
                          (r = e.sent),
                            D(function (e) {
                              return e.concat(r);
                            }),
                            (e.next = 11);
                          break;
                        case 7:
                          return (e.next = 9), ts.addFlowToPlanning(t.id, n.id);
                        case 9:
                          (a = e.sent),
                            D(function (e) {
                              return e.map(function (e) {
                                return e.id === a.id ? a : e;
                              });
                            });
                        case 11:
                        case 'end':
                          return e.stop();
                      }
                  }, e);
                })
              );
              return function (t, n) {
                return e.apply(this, arguments);
              };
            })(),
            F = (function () {
              var e = Object(g.a)(
                v.a.mark(function e(t, n) {
                  var r;
                  return v.a.wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          if (!(null === t || void 0 === t ? void 0 : t.id)) {
                            e.next = 5;
                            break;
                          }
                          return (
                            (e.next = 3), ts.removeFromFromPlanning(t.id, n.id)
                          );
                        case 3:
                          (r = e.sent),
                            D(function (e) {
                              return e.map(function (e) {
                                return e.id === r.id ? r : e;
                              });
                            });
                        case 5:
                        case 'end':
                          return e.stop();
                      }
                  }, e);
                })
              );
              return function (t, n) {
                return e.apply(this, arguments);
              };
            })(),
            U = Ea(
              cs,
              {
                title: 'Details',
                type: Aa.a.largeHeader,
                dialogFooter: function () {
                  return Object(r.jsx)(it.a, {
                    tabIndex: 0,
                    onClick: function () {
                      return U.setVisible(!1);
                    },
                    text: 'Close',
                  });
                },
              },
              {
                planning:
                  null ===
                    (e = L.get(null === h || void 0 === h ? void 0 : h.user)) ||
                  void 0 === e
                    ? void 0
                    : e.get(null === h || void 0 === h ? void 0 : h.date),
                options: b.map(function (e) {
                  return { key: e.id, data: e };
                }),
                addFlow: N,
                removeFlow: F,
                users: A,
                user: null === h || void 0 === h ? void 0 : h.user,
              }
            );
          return Object(r.jsxs)(ke.Container, {
            md: !0,
            children: [
              Object(r.jsx)(ke.Row, {
                children: Object(r.jsx)(ke.Col, {
                  children: Object(r.jsx)(Be.a, { text: 'Task Planning' }),
                }),
              }),
              Object(r.jsx)(B.a, {}),
              Object(r.jsx)(ve.a, {
                items: [
                  {
                    key: 'add',
                    text: 'Add',
                    iconProps: { iconName: 'Add' },
                    disabled: null === h,
                  },
                  {
                    key: 'copy',
                    text: 'Copy',
                    iconProps: { iconName: 'Copy' },
                    disabled: null === h,
                  },
                  {
                    key: 'paste',
                    text: 'Paste',
                    iconProps: { iconName: 'Paste' },
                    disabled: null === h,
                  },
                  {
                    key: 'copymult',
                    text: 'Copy mult.',
                    iconProps: { iconName: 'Copy' },
                    disabled: null === h,
                  },
                  {
                    key: 'teams',
                    text: 'Teams',
                    iconProps: { iconName: 'Search' },
                    onRender: function () {
                      return Object(r.jsxs)(z.a, {
                        horizontal: !0,
                        horizontalAlign: 'center',
                        verticalAlign: 'center',
                        children: [
                          Object(r.jsx)(I.a, {
                            className: t.searchIcon,
                            iconName: 'ProfileSearch',
                          }),
                          Object(r.jsx)(kt.a, {
                            placeholder: 'Teams',
                            autoComplete: 'on',
                            options: C,
                            selectedKey: w,
                            openOnKeyboardFocus: !0,
                            onChange: function (e, t) {
                              return S(t.key);
                            },
                            calloutProps: { calloutMaxHeight: 500 },
                            useComboBoxAsMenuWidth: !0,
                          }),
                        ],
                      });
                    },
                  },
                ],
              }),
              Object(r.jsx)(B.a, {}),
              Object(r.jsxs)(ke.Row, {
                children: [
                  Object(r.jsx)(Ga.a, {
                    isMonthPickerVisible: !1,
                    dateRangeType: qa.b.Week,
                    showWeekNumbers: !0,
                    showSixWeeksByDefault: !0,
                    showGoToToday: !0,
                    value: c,
                    onSelectDate: function (e, t) {
                      i(e), p(t);
                    },
                    firstDayOfWeek: 1,
                  }),
                  Object(r.jsx)(ke.Col, {
                    children: Object(r.jsx)(es, {
                      userFlowMap: L,
                      users: A,
                      dates: d,
                      selectedCell: h,
                      setSelectedCell: O,
                      handleInvoke: function () {
                        U.setVisible(!0);
                      },
                    }),
                  }),
                ],
              }),
              U.render,
            ],
          });
        },
        us = {
          baseUrl: '/api/task-rules',
          taskRulePath: function (e) {
            return '/api/task-rules/'.concat(e);
          },
          getTaskRules: function () {
            var e = arguments,
              t = this;
            return Object(g.a)(
              v.a.mark(function n() {
                var r, a;
                return v.a.wrap(
                  function (n) {
                    for (;;)
                      switch ((n.prev = n.next)) {
                        case 0:
                          return (
                            (r = e.length > 0 && void 0 !== e[0] ? e[0] : {}),
                            (n.prev = 1),
                            (n.next = 4),
                            y.a.get(t.baseUrl, { params: r })
                          );
                        case 4:
                          if (200 !== (a = n.sent).status) {
                            n.next = 7;
                            break;
                          }
                          return n.abrupt('return', a.data);
                        case 7:
                          throw new Error(
                            'Server response: '
                              .concat(a.data, ' - ')
                              .concat(a.statusText)
                          );
                        case 10:
                          throw (
                            ((n.prev = 10),
                            (n.t0 = n.catch(1)),
                            k.a.notifyError(
                              (n.t0.response && n.t0.response.data.error) ||
                                n.t0.message
                            ),
                            n.t0)
                          );
                        case 14:
                        case 'end':
                          return n.stop();
                      }
                  },
                  n,
                  null,
                  [[1, 10]]
                );
              })
            )();
          },
          getTaskRule: function () {
            return Object(g.a)(
              v.a.mark(function e() {
                return v.a.wrap(
                  function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          (e.prev = 0), (e.next = 7);
                          break;
                        case 3:
                          throw (
                            ((e.prev = 3),
                            (e.t0 = e.catch(0)),
                            k.a.notifyError(
                              (e.t0.response && e.t0.response.data.error) ||
                                e.t0.message
                            ),
                            e.t0)
                          );
                        case 7:
                        case 'end':
                          return e.stop();
                      }
                  },
                  e,
                  null,
                  [[0, 3]]
                );
              })
            )();
          },
          createTaskRule: function (e) {
            var t = this;
            return Object(g.a)(
              v.a.mark(function n() {
                var r;
                return v.a.wrap(
                  function (n) {
                    for (;;)
                      switch ((n.prev = n.next)) {
                        case 0:
                          return (
                            (n.prev = 0), (n.next = 3), y.a.post(t.baseUrl, e)
                          );
                        case 3:
                          if (200 !== (r = n.sent).status) {
                            n.next = 6;
                            break;
                          }
                          return n.abrupt('return', r.data);
                        case 6:
                          throw new Error(
                            'Server response: '
                              .concat(r.data, ' - ')
                              .concat(r.statusText)
                          );
                        case 9:
                          throw (
                            ((n.prev = 9),
                            (n.t0 = n.catch(0)),
                            k.a.notifyError(
                              (n.t0.response && n.t0.response.data.error) ||
                                n.t0.message
                            ),
                            n.t0)
                          );
                        case 13:
                        case 'end':
                          return n.stop();
                      }
                  },
                  n,
                  null,
                  [[0, 9]]
                );
              })
            )();
          },
          updateTaskRule: function (e, t) {
            var n = this;
            return Object(g.a)(
              v.a.mark(function r() {
                var a;
                return v.a.wrap(
                  function (r) {
                    for (;;)
                      switch ((r.prev = r.next)) {
                        case 0:
                          return (
                            (r.prev = 0),
                            (r.next = 3),
                            y.a.put(n.taskRulePath(e), t)
                          );
                        case 3:
                          if (200 !== (a = r.sent).status) {
                            r.next = 6;
                            break;
                          }
                          return r.abrupt('return', a.data);
                        case 6:
                          throw new Error(
                            'Server response: '
                              .concat(a.data, ' - ')
                              .concat(a.statusText)
                          );
                        case 9:
                          throw (
                            ((r.prev = 9),
                            (r.t0 = r.catch(0)),
                            k.a.notifyError(
                              (r.t0.response && r.t0.response.data.error) ||
                                r.t0.message
                            ),
                            r.t0)
                          );
                        case 13:
                        case 'end':
                          return r.stop();
                      }
                  },
                  r,
                  null,
                  [[0, 9]]
                );
              })
            )();
          },
          deleteTaskRule: function () {
            return Object(g.a)(
              v.a.mark(function e() {
                return v.a.wrap(
                  function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          (e.prev = 0), (e.next = 7);
                          break;
                        case 3:
                          throw (
                            ((e.prev = 3),
                            (e.t0 = e.catch(0)),
                            k.a.notifyError(
                              (e.t0.response && e.t0.response.data.error) ||
                                e.t0.message
                            ),
                            e.t0)
                          );
                        case 7:
                        case 'end':
                          return e.stop();
                      }
                  },
                  e,
                  null,
                  [[0, 3]]
                );
              })
            )();
          },
        },
        ls = [
          { key: fe.a.tasks.MonthlyOnType.Day, text: 'Callendar day' },
          { key: fe.a.tasks.MonthlyOnType.Workday, text: 'Workday' },
          { key: fe.a.tasks.MonthlyOnType.Monday, text: 'Monday' },
          { key: fe.a.tasks.MonthlyOnType.Tuesday, text: 'Tuesday' },
          { key: fe.a.tasks.MonthlyOnType.Wednesday, text: 'Wednesday' },
          { key: fe.a.tasks.MonthlyOnType.Thursday, text: 'Thursday' },
          { key: fe.a.tasks.MonthlyOnType.Friday, text: 'Friday' },
          { key: fe.a.tasks.MonthlyOnType.Saturday, text: 'Saturday' },
          { key: fe.a.tasks.MonthlyOnType.Sunday, text: 'Sunday' },
        ],
        ds = Object(E.a)(function (e) {
          return {
            weeklyCheck: {
              '& > * + *': {
                marginTop: ''.concat(e.spacing.s2, ' !important'),
              },
            },
            monthlyCheck: {
              '& > * + *': {
                marginTop: ''.concat(e.spacing.s2, ' !important'),
              },
            },
            monthlyDropdown: { marginBottom: e.spacing.m },
          };
        }),
        ps = function (e) {
          var t,
            n = e.data,
            a = e.setData,
            s = ds(),
            c = function (e) {
              return function (t, r) {
                var s,
                  c = null !== (s = n.weeklyDays) && void 0 !== s ? s : [];
                return a(
                  r
                    ? function (t) {
                        return Object(u.a)(
                          Object(u.a)({}, t),
                          {},
                          { weeklyDays: c.concat(e).sort() }
                        );
                      }
                    : function (t) {
                        return Object(u.a)(
                          Object(u.a)({}, t),
                          {},
                          {
                            weeklyDays: c
                              .filter(function (t) {
                                return t !== e;
                              })
                              .sort(),
                          }
                        );
                      }
                );
              };
            },
            i = function (e) {
              return function (t, r) {
                var s,
                  c = null !== (s = n.monthlyMonths) && void 0 !== s ? s : [];
                return a(
                  r
                    ? function (t) {
                        return Object(u.a)(
                          Object(u.a)({}, t),
                          {},
                          { monthlyMonths: c.concat(e).sort() }
                        );
                      }
                    : function (t) {
                        return Object(u.a)(
                          Object(u.a)({}, t),
                          {},
                          {
                            monthlyMonths: c
                              .filter(function (t) {
                                return t !== e;
                              })
                              .sort(),
                          }
                        );
                      }
                );
              };
            },
            o = function (e) {
              return !!n.weeklyDays && -1 !== n.weeklyDays.indexOf(e);
            };
          switch (n.type) {
            case fe.a.tasks.types.Daily:
              t = Object(r.jsx)(r.Fragment, {
                children: Object(r.jsx)(K.a, {
                  label: 'Day type',
                  defaultSelectedKey: n.dailyType,
                  options: [
                    { key: 'Work', text: 'Workday' },
                    { key: 'Calendar', text: 'Calendar day' },
                  ],
                  onChange: function (e, t) {
                    return a(function (e) {
                      return Object(u.a)(
                        Object(u.a)({}, e),
                        {},
                        { dailyType: t.key }
                      );
                    });
                  },
                }),
              });
              break;
            case fe.a.tasks.types.Weekly:
              t = Object(r.jsxs)(z.a, {
                className: s.weeklyCheck,
                verticalFill: !0,
                verticalAlign: 'start',
                children: [
                  Object(r.jsx)(Ce.a, {
                    onChange: c(1),
                    checked: o(1),
                    label: 'Monday',
                  }),
                  Object(r.jsx)(Ce.a, {
                    onChange: c(2),
                    checked: o(2),
                    label: 'Tuesday',
                  }),
                  Object(r.jsx)(Ce.a, {
                    onChange: c(3),
                    checked: o(3),
                    label: 'Wednesday',
                  }),
                  Object(r.jsx)(Ce.a, {
                    onChange: c(4),
                    checked: o(4),
                    label: 'Thursday',
                  }),
                  Object(r.jsx)(Ce.a, {
                    onChange: c(5),
                    checked: o(5),
                    label: 'Friday',
                  }),
                  Object(r.jsx)(Ce.a, {
                    onChange: c(6),
                    checked: o(6),
                    label: 'Saturday',
                  }),
                  Object(r.jsx)(Ce.a, {
                    onChange: c(7),
                    checked: o(7),
                    label: 'Sunday',
                  }),
                ],
              });
              break;
            case fe.a.tasks.types.Monthly:
              t = Object(r.jsxs)(z.a, {
                verticalAlign: 'start',
                verticalFill: !0,
                children: [
                  Object(r.jsx)(Hr.a, {
                    value: n.monthlyOn,
                    onChange: function (e, t) {
                      t &&
                        !Number.isNaN(+t) &&
                        a(function (e) {
                          return Object(u.a)(
                            Object(u.a)({}, e),
                            {},
                            { monthlyOn: +t }
                          );
                        });
                    },
                    min: 1,
                    max: 31,
                    label: 'On',
                    incrementButtonAriaLabel: 'Increase value by 1',
                    decrementButtonAriaLabel: 'Decrease value by 1',
                    labelPosition: Br.a.top,
                  }),
                  Object(r.jsx)(cn.a, {
                    className: s.monthlyDropdown,
                    options: ls,
                    placeHolder: 'Select',
                    onChange: function (e, t) {
                      return a(function (e) {
                        return Object(u.a)(
                          Object(u.a)({}, e),
                          {},
                          { monthlyOnType: t.key }
                        );
                      });
                    },
                    label: 'Type',
                  }),
                  Object(r.jsx)(Ce.a, {
                    className: s.monthlyCheck,
                    onChange: i(0),
                    label: 'January',
                  }),
                  Object(r.jsx)(Ce.a, {
                    className: s.monthlyCheck,
                    onChange: i(1),
                    label: 'February',
                  }),
                  Object(r.jsx)(Ce.a, {
                    className: s.monthlyCheck,
                    onChange: i(2),
                    label: 'March',
                  }),
                  Object(r.jsx)(Ce.a, {
                    className: s.monthlyCheck,
                    onChange: i(3),
                    label: 'April',
                  }),
                  Object(r.jsx)(Ce.a, {
                    className: s.monthlyCheck,
                    onChange: i(4),
                    label: 'May',
                  }),
                  Object(r.jsx)(Ce.a, {
                    className: s.monthlyCheck,
                    onChange: i(5),
                    label: 'June',
                  }),
                  Object(r.jsx)(Ce.a, {
                    className: s.monthlyCheck,
                    onChange: i(6),
                    label: 'July',
                  }),
                  Object(r.jsx)(Ce.a, {
                    className: s.monthlyCheck,
                    onChange: i(7),
                    label: 'August',
                  }),
                  Object(r.jsx)(Ce.a, {
                    className: s.monthlyCheck,
                    onChange: i(8),
                    label: 'September',
                  }),
                  Object(r.jsx)(Ce.a, {
                    className: s.monthlyCheck,
                    onChange: i(9),
                    label: 'October',
                  }),
                  Object(r.jsx)(Ce.a, {
                    className: s.monthlyCheck,
                    onChange: i(10),
                    label: 'November',
                  }),
                  Object(r.jsx)(Ce.a, {
                    className: s.monthlyCheck,
                    onChange: i(11),
                    label: 'December',
                  }),
                ],
              });
              break;
            default:
              t = null;
          }
          return t;
        },
        fs = fe.a.tasks,
        bs = Object(E.a)(function (e) {
          return { form: { '& > * + *': { paddingTop: e.spacing.s1 } } };
        }),
        js = function (e) {
          var t,
            n,
            s,
            c,
            i,
            o,
            d = e.setRules,
            p = e.setOpen,
            f = bs(),
            b = Fr(Ee.teamUsersPath, null, {
              callback: function (e) {
                return e.map(function (e) {
                  return { key: e.id, data: e };
                });
              },
            }),
            j = Object(l.a)(b, 1)[0],
            m = Fr(Ha.baseUrl, null, {
              callback: function (e) {
                return e.map(function (e) {
                  return { key: e.id, data: e };
                });
              },
            }),
            h = Object(l.a)(m, 1)[0],
            O = Object(a.useState)({
              title: '',
              description: '',
              type: fs.types.Daily,
              dailyType: fs.DayTypes.Workday,
              isBackgroundTask: !1,
              isSharedTask: !1,
              taskStartTime: Zr.getNearestTimeUTC(
                Zr.transform2UTCDate(new Date())
              ).toJSDate(),
              validFrom: new Date(),
              taskDuration: 60,
              users: [],
              flows: [],
              zone: Nr.DateTime.local().zoneName,
            }),
            x = Object(l.a)(O, 2),
            C = x[0],
            y = x[1],
            w = Object(a.useRef)(
              Object.keys(fs.types).map(function (e) {
                return { key: e, text: e };
              })
            ),
            S = function (e) {
              return function (t) {
                y(function (n) {
                  return Object(u.a)(
                    Object(u.a)({}, n),
                    {},
                    Object(Dt.a)(
                      {},
                      e,
                      new Date(
                        Date.UTC(
                          t.getFullYear(),
                          t.getMonth(),
                          t.getDate(),
                          0,
                          0,
                          0
                        )
                      )
                    )
                  );
                });
              };
            },
            T = function (e) {
              var t =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : function (e) {
                      return e[0].target.value;
                    };
              return function () {
                for (
                  var n = arguments.length, r = new Array(n), a = 0;
                  a < n;
                  a++
                )
                  r[a] = arguments[a];
                y(function (n) {
                  return Object(u.a)(
                    Object(u.a)({}, n),
                    {},
                    Object(Dt.a)({}, e, t(r))
                  );
                });
              };
            },
            A = (function () {
              var e = Object(g.a)(
                v.a.mark(function e(t) {
                  var n, r;
                  return v.a.wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          if (
                            (t.preventDefault(),
                            !(
                              C.validFrom &&
                              C.validTo &&
                              C.validTo < C.validFrom
                            ))
                          ) {
                            e.next = 5;
                            break;
                          }
                          return (
                            (e.next = 4),
                            k.a.notifyError(
                              "'Valid From' cannot be bigger than 'Valid To'"
                            )
                          );
                        case 4:
                          return e.abrupt('return');
                        case 5:
                          return (
                            C.weeklyDays &&
                              C.weeklyDays.length &&
                              (C.weeklyDays = C.weeklyDays.map(function (e) {
                                return Nr.DateTime.local()
                                  .toUTC()
                                  .set({ weekday: e });
                              })),
                            C.monthlyMonths &&
                              C.monthlyMonths.length &&
                              (C.monthlyMonths = C.monthlyMonths.map(function (
                                e
                              ) {
                                var t = new Date(2020, 1, 1);
                                return (
                                  t.setMonth(e),
                                  t.setHours(C.taskStartTime.getHours()),
                                  t.setMinutes(C.taskStartTime.getMinutes()),
                                  t
                                );
                              })),
                            delete (n = Object(u.a)({}, C)).flows,
                            delete n.users,
                            C.users.length > 0 &&
                              (n.users = C.users.map(function (e) {
                                return e.id;
                              })),
                            C.flows.length > 0 &&
                              (n.flows = C.flows.map(function (e) {
                                return e.id;
                              })),
                            (e.next = 14),
                            us.createTaskRule(n)
                          );
                        case 14:
                          (r = e.sent),
                            d(function (e) {
                              return [].concat(Object(Nt.a)(e), [r]);
                            }),
                            p(!1);
                        case 17:
                        case 'end':
                          return e.stop();
                      }
                  }, e);
                })
              );
              return function (t) {
                return e.apply(this, arguments);
              };
            })();
          return Object(r.jsxs)('form', {
            className: f.form,
            id: 'add-task-rule-form',
            onSubmit: A,
            children: [
              Object(r.jsx)(Ke.a, {
                required: !0,
                label: 'Title',
                value: C.title,
                onChange: T('title'),
                name: 'task-rule-title',
              }),
              Object(r.jsx)(Ke.a, {
                label: 'Description',
                multiline: !0,
                name: 'task-rule-description',
                onChange: T('description'),
                value: C.description,
              }),
              Object(r.jsx)(cn.a, {
                label: 'Type',
                selectedKey: C.type,
                onChange: function (e, t) {
                  y(function (e) {
                    return Object(u.a)(Object(u.a)({}, e), {}, { type: t.key });
                  });
                },
                options: w.current,
                name: 'task-rule-type',
              }),
              Object(r.jsx)(ps, { data: C, setData: y }),
              Object(r.jsx)(Wr.a, {
                label: 'Start time',
                mask: '99:99',
                maskChar: '0',
                value: Nr.DateTime.fromJSDate(C.taskStartTime)
                  .toUTC()
                  .toFormat('HH:mm'),
                onChange: T('taskStartTime', function (e) {
                  return Nr.DateTime.fromISO(
                    Zr.getValidTimeStringUTC(e[1])
                  ).toJSDate();
                }),
              }),
              Object(r.jsx)(Wr.a, {
                label: 'End time',
                mask: '99:99',
                maskChar: '0',
                value: Zr.getEndTimeTextUTC(C.taskStartTime, C.taskDuration),
                onChange: T('taskDuration', function (e) {
                  var t,
                    n,
                    r,
                    a = Zr.getValidTimeStringUTC(e[1]),
                    s = Nr.DateTime.fromJSDate(C.taskStartTime),
                    c = Nr.DateTime.fromISO(a);
                  return c < s
                    ? 0
                    : null !==
                        (t =
                          null === (n = c.diff(s, 'minute')) ||
                          void 0 === n ||
                          null === (r = n.values) ||
                          void 0 === r
                            ? void 0
                            : r.minutes) && void 0 !== t
                    ? t
                    : 0;
                }),
              }),
              Object(r.jsx)(Hr.a, {
                label: 'Duration (min)',
                value: C.taskDuration,
                onChange: function (e) {
                  var t = +e.target.value;
                  Number.isNaN(t) && (t = 0),
                    y(function (e) {
                      return Object(u.a)(
                        Object(u.a)({}, e),
                        {},
                        { taskDuration: t }
                      );
                    });
                },
                onIncrement: function (e) {
                  return y(function (t) {
                    return Object(u.a)(
                      Object(u.a)({}, t),
                      {},
                      { taskDuration: +e + 10 }
                    );
                  });
                },
                onDecrement: function (e) {
                  e > 10 &&
                    y(function (t) {
                      return Object(u.a)(
                        Object(u.a)({}, t),
                        {},
                        { taskDuration: +e - 10 }
                      );
                    });
                },
                min: 0,
                step: 10,
                incrementButtonAriaLabel: 'Increase value by 10',
                decrementButtonAriaLabel: 'Decrease value by 10',
                labelPosition: Br.a.top,
              }),
              Object(r.jsx)(on.a, {
                required: !0,
                label: 'Valid From',
                value: C.validFrom,
                onSelectDate: S('validFrom'),
              }),
              Object(r.jsx)(on.a, {
                label: 'Valid To',
                value: C.validTo,
                onSelectDate: S('validTo'),
              }),
              Object(r.jsx)(Ce.a, {
                className: f.checkbox,
                label: 'Background',
                value: C.isBackgroundTask,
                onChange: function (e, t) {
                  return y(function (e) {
                    return Object(u.a)(
                      Object(u.a)({}, e),
                      {},
                      { isBackgroundTask: t }
                    );
                  });
                },
              }),
              Object(r.jsx)(Ce.a, {
                className: f.checkbox,
                label: 'Shared',
                value: C.isSharedTask,
                onChange: function (e, t) {
                  return y(function (e) {
                    return Object(u.a)(
                      Object(u.a)({}, e),
                      {},
                      { isSharedTask: t }
                    );
                  });
                },
              }),
              Object(r.jsx)(_r.a, {
                styles: { root: { width: '90%' } },
                content:
                  (null === (t = C.flows) || void 0 === t ? void 0 : t.length) >
                  0
                    ? 'Rule can be assigned to users or flows, but not both'
                    : '',
                children: Object(r.jsx)(qr, {
                  label: 'Assigned to (Users)',
                  options: j,
                  disabled:
                    (null === (n = C.flows) || void 0 === n
                      ? void 0
                      : n.length) > 0,
                  onSelect: function (e) {
                    return y(function (t) {
                      return Object(u.a)(
                        Object(u.a)({}, t),
                        {},
                        { users: t.users.concat(e.data) }
                      );
                    });
                  },
                  onRemove: function (e) {
                    return y(function (t) {
                      return Object(u.a)(
                        Object(u.a)({}, t),
                        {},
                        {
                          users: t.users.filter(function (t) {
                            return t.id !== e.data.id;
                          }),
                        }
                      );
                    });
                  },
                  selected:
                    null === (s = C.users) || void 0 === s
                      ? void 0
                      : s.map(function (e) {
                          return { key: e.id, data: e };
                        }),
                }),
              }),
              Object(r.jsx)(B.a, {}),
              Object(r.jsx)(_r.a, {
                styles: { root: { width: '90%' } },
                content:
                  (null === (c = C.users) || void 0 === c ? void 0 : c.length) >
                  0
                    ? 'Rule can be assigned to users or flows, but not both'
                    : '',
                children: Object(r.jsx)(as, {
                  label: 'Assigned to (Flows)',
                  options: h,
                  disabled:
                    (null === (i = C.users) || void 0 === i
                      ? void 0
                      : i.length) > 0,
                  onSelect: function (e) {
                    return y(function (t) {
                      var n;
                      return Object(u.a)(
                        Object(u.a)({}, t),
                        {},
                        {
                          flows:
                            null === (n = t.flows) || void 0 === n
                              ? void 0
                              : n.concat(e.data),
                        }
                      );
                    });
                  },
                  onRemove: function (e) {
                    return y(function (t) {
                      var n;
                      return Object(u.a)(
                        Object(u.a)({}, t),
                        {},
                        {
                          flows:
                            null === (n = t.flows) || void 0 === n
                              ? void 0
                              : n.filter(function (t) {
                                  return t.id !== e.data.id;
                                }),
                        }
                      );
                    });
                  },
                  selected:
                    null === (o = C.flows) || void 0 === o
                      ? void 0
                      : o.map(function (e) {
                          return { key: e.id, data: e };
                        }),
                }),
              }),
            ],
          });
        };
      js.defaultProps = { setOpen: null };
      var ms = js,
        hs = Object(E.a)(function (e) {
          return {
            root: {
              '& > * + *': {
                marginTop: ''.concat(e.spacing.s2, ' !important'),
              },
            },
            description: {
              color: e.palette.neutralSecondaryAlt,
              '& textarea': { color: 'inherit' },
            },
            typeIcon: { fontSize: 50, height: 50, width: 50 },
            typeDetails: {
              width: '50%',
              borderTop: '1px solid '.concat(e.palette.themeSecondary),
              borderBottom: '1px solid '.concat(e.palette.themeSecondary),
              marginTop: ''.concat(e.spacing.s2, ' !important'),
              paddingTop: e.spacing.m,
              paddingBottom: e.spacing.m,
            },
            paddingLeft: { paddingLeft: e.spacing.s2 },
            userColumn: { width: '50%' },
            separator: {
              margin: ''.concat(e.spacing.m, ' 0'),
              "& div[role='separator']": {
                backgroundColor: e.palette.themePrimary,
                padding: '3px',
                borderRadius: '5px',
                minWidth: 60,
              },
            },
            weekDay: {
              backgroundColor: e.palette.themePrimary,
              color: e.palette.black,
              padding: '5px 10px',
              marginRight: e.spacing.s2,
            },
            month: {
              backgroundColor: e.palette.themePrimary,
              color: e.palette.black,
              padding: '5px 10px',
              marginRight: e.spacing.s2,
              marginTop: e.spacing.s2,
            },
          };
        }),
        Os = [
          null,
          'Monday',
          'Tuesday',
          'Wednesday',
          'Thursday',
          'Friday',
          'Saturday',
          'Sunday',
        ],
        xs = [
          null,
          'January',
          'February',
          'March',
          'April',
          'May',
          'June',
          'July',
          'August',
          'September',
          'October',
          'November',
          'December',
        ],
        vs = function (e) {
          switch (e) {
            case 1:
              return 'st';
            case 2:
              return 'nd';
            case 3:
              return 'rd';
            default:
              return 'th';
          }
        },
        gs = function (e) {
          var t = e.rule,
            n = hs();
          return Object(r.jsxs)(r.Fragment, {
            children: [
              Object(r.jsx)(B.a, { className: n.separator, children: 'Type' }),
              Object(r.jsxs)(z.a, {
                horizontalAlign: 'center',
                children: [
                  Object(r.jsx)(I.a, {
                    className: n.typeIcon,
                    iconName: (function (e) {
                      switch (e) {
                        case fe.a.tasks.types.Daily:
                          return 'CalendarDay';
                        case fe.a.tasks.types.Weekly:
                          return 'CalendarWorkWeek';
                        case fe.a.tasks.types.Monthly:
                          return 'Calendar';
                        default:
                          return 'Unknown';
                      }
                    })(t.type),
                  }),
                  Object(r.jsx)(N.a, { variant: 'medium', children: t.type }),
                  Object(r.jsx)(q.a, {
                    className: n.typeDetails,
                    children: (function (e) {
                      switch (e.type) {
                        case fe.a.tasks.types.Daily:
                          return Object(r.jsxs)(z.a, {
                            horizontal: !0,
                            horizontalAlign: 'center',
                            verticalAlign: 'center',
                            children: [
                              Object(r.jsx)(Yt.a, { children: 'Day type: ' }),
                              Object(r.jsx)(N.a, {
                                block: !0,
                                className: n.paddingLeft,
                                variant: 'medium',
                                children: t.dailyType,
                              }),
                            ],
                          });
                        case fe.a.tasks.types.Weekly:
                          return Object(r.jsxs)(z.a, {
                            horizontalAlign: 'center',
                            verticalAlign: 'center',
                            children: [
                              Object(r.jsx)(Yt.a, {
                                style: { display: 'block' },
                                children: 'Days: ',
                              }),
                              Object(r.jsx)(z.a, {
                                horizontal: !0,
                                horizontalAlign: 'center',
                                children: t.weeklyDays.map(function (e) {
                                  return Object(r.jsx)(qe, {
                                    className: n.weekDay,
                                    children: Object(r.jsx)(N.a, {
                                      variant: 'medium',
                                      children: Os[new Date(e).getDay()],
                                    }),
                                  });
                                }),
                              }),
                            ],
                          });
                        case fe.a.tasks.types.Monthly:
                          return Object(r.jsxs)(z.a, {
                            horizontalAlign: 'center',
                            verticalAlign: 'center',
                            children: [
                              Object(r.jsx)(Yt.a, { children: 'Occurs on: ' }),
                              Object(r.jsx)(N.a, {
                                variant: 'medium',
                                children: ''
                                  .concat(t.monthlyOn)
                                  .concat(vs(t.monthlyOn), ' ')
                                  .concat(t.monthlyOnType, ' of the month'),
                              }),
                              Object(r.jsx)(Yt.a, { children: 'Months:' }),
                              Object(r.jsx)(z.a, {
                                horizontal: !0,
                                horizontalAlign: 'center',
                                wrap: !0,
                                tokens: { childrenGap: 4 },
                                children: t.monthlyMonths.map(function (e) {
                                  return Object(r.jsx)(qe, {
                                    className: n.month,
                                    children: Object(r.jsx)(N.a, {
                                      variant: 'medium',
                                      children: xs[e],
                                    }),
                                  });
                                }),
                              }),
                            ],
                          });
                        default:
                          return null;
                      }
                    })(t),
                  }),
                ],
              }),
            ],
          });
        },
        Cs = function (e) {
          var t,
            n,
            s,
            c,
            i,
            o,
            d,
            p,
            f,
            b,
            j,
            m,
            h,
            x,
            C,
            y,
            k,
            w,
            T,
            A,
            P,
            R = e.id,
            E = e.editing,
            D = e.setEditing,
            L = e.setRules,
            I = hs(),
            F = Object(a.useContext)(O.a),
            U = Fr(R && us.taskRulePath(R), null, { initialData: null }),
            H = Object(l.a)(U, 1)[0],
            Z = Object(a.useContext)(zr),
            V = Object(a.useState)({}),
            G = Object(l.a)(V, 2),
            K = G[0],
            Y = G[1],
            J = Fr(
              Ee.baseUrl,
              {
                params: {
                  teams: F.user.teams.map(function (e) {
                    return e.id;
                  }),
                },
              },
              {
                callback: function (e) {
                  return e.map(function (e) {
                    return { key: e.id, data: e };
                  });
                },
              }
            ),
            Q = Object(l.a)(J, 1)[0],
            X = Fr(Ha.baseUrl, null, {
              callback: function (e) {
                return e.map(function (e) {
                  return { key: e.id, data: e };
                });
              },
            }),
            _ = Object(l.a)(X, 1)[0],
            $ = Object(a.useCallback)(
              Object(g.a)(
                v.a.mark(function e() {
                  var t, n;
                  return v.a.wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (t = Object(u.a)({}, K)),
                            K.users &&
                              (t.users = K.users.map(function (e) {
                                return e.id;
                              })),
                            K.flows &&
                              (t.flows = K.flows.map(function (e) {
                                return e.id;
                              })),
                            (e.next = 5),
                            us.updateTaskRule(H.id, t)
                          );
                        case 5:
                          (n = e.sent),
                            L(function (e) {
                              return e.map(function (e) {
                                return e.id === n.id ? n : e;
                              });
                            }),
                            Z.setOpen(!1),
                            D(!1);
                        case 9:
                        case 'end':
                          return e.stop();
                      }
                  }, e);
                })
              ),
              [H, K]
            ),
            ee = function (e) {
              var t =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : function (e) {
                      return e[0].target.value;
                    };
              return function () {
                for (
                  var n = arguments.length, r = new Array(n), a = 0;
                  a < n;
                  a++
                )
                  r[a] = arguments[a];
                Y(function (n) {
                  return Object(u.a)(
                    Object(u.a)({}, n),
                    {},
                    Object(Dt.a)({}, e, t(r))
                  );
                });
              };
            },
            te = Object(a.useCallback)(
              function () {
                return Object(r.jsxs)(r.Fragment, {
                  children: [
                    E
                      ? Object(r.jsx)(it.a, { onClick: $, children: 'Save' })
                      : Object(r.jsx)(it.a, {
                          onClick: function () {
                            return D(!0);
                          },
                          children: 'Edit',
                        }),
                    Object(r.jsx)(S.a, {
                      style: { marginLeft: '8px' },
                      onClick: function () {
                        D(!1), Z.setOpen(!1);
                      },
                      children: 'Close',
                    }),
                  ],
                });
              },
              [Z, E, $]
            );
          return (
            Object(a.useEffect)(
              function () {
                Z.isPanel &&
                  Z.setOnRenderFooter(function () {
                    return te;
                  });
              },
              [Z, te]
            ),
            H &&
              Object(r.jsxs)(z.a, {
                className: I.root,
                verticalAlign: 'start',
                children: [
                  Object(r.jsx)(B.a, {
                    className: I.separator,
                    children: 'General',
                  }),
                  Object(r.jsx)(Ke.a, {
                    borderless: !E,
                    label: 'Title',
                    readOnly: !E,
                    value: null !== (t = K.title) && void 0 !== t ? t : H.title,
                    onChange: ee('title'),
                  }),
                  Object(r.jsx)(Ke.a, {
                    autoAdjustHeight: !0,
                    borderless: !E,
                    className: I.description,
                    label: 'Description',
                    multiline: !0,
                    readOnly: !E,
                    resizable: !1,
                    value:
                      null !==
                        (n =
                          null !== (s = K.description) && void 0 !== s
                            ? s
                            : H.description) && void 0 !== n
                        ? n
                        : '-',
                    onChange: ee('description'),
                  }),
                  Object(r.jsx)(Wr.a, {
                    label: 'Start time',
                    disabled: !E,
                    mask: '99:99',
                    maskChar: '0',
                    value: Zr.getTimeText(
                      null !== (c = K.taskStartTime) && void 0 !== c
                        ? c
                        : new Date(H.taskStartTime)
                    ),
                    onChange: E
                      ? ee('taskStartTime', function (e) {
                          return new Date(Zr.getValidTimeStringUTC(e[1]));
                        })
                      : null,
                  }),
                  Object(r.jsx)(Wr.a, {
                    label: 'End time',
                    disabled: !E,
                    mask: '99:99',
                    maskChar: '0',
                    value: Zr.getEndTimeTextUTC(
                      null !== (i = K.taskStartTime) && void 0 !== i
                        ? i
                        : new Date(H.taskStartTime),
                      null !== (o = K.taskDuration) && void 0 !== o
                        ? o
                        : H.taskDuration
                    ),
                    onChange: E
                      ? ee('taskDuration', function (e) {
                          var t,
                            n = Zr.getValidTimeStringUTC(e[1]),
                            r = Nr.DateTime.fromJSDate(
                              null !== (t = K.taskStartTime) && void 0 !== t
                                ? t
                                : new Date(H.taskStartTime)
                            ),
                            a = Nr.DateTime.fromISO(n);
                          return a < r ? 0 : a.diff(r, 'minute').values.minutes;
                        })
                      : null,
                  }),
                  E
                    ? Object(r.jsx)(Hr.a, {
                        label: 'Duration',
                        labelPosition: Br.a.top,
                        value:
                          null !== (d = K.taskDuration) && void 0 !== d
                            ? d
                            : H.taskDuration,
                        onChange: ee('taskDuration', function (e) {
                          return Number.isNaN(+e[0].target.value)
                            ? 0
                            : +e[0].target.value;
                        }),
                        onIncrement: function (e) {
                          return Y(function (t) {
                            return Object(u.a)(
                              Object(u.a)({}, t),
                              {},
                              { taskDuration: +e + 10 }
                            );
                          });
                        },
                        onDecrement: function (e) {
                          e > 10 &&
                            Y(function (t) {
                              return Object(u.a)(
                                Object(u.a)({}, t),
                                {},
                                { taskDuration: +e - 10 }
                              );
                            });
                        },
                        type: 'number',
                        min: 0,
                        max: 1440,
                        step: 10,
                      })
                    : Object(r.jsx)(Ke.a, {
                        label: 'Duration',
                        disabled: !E,
                        value:
                          null !== (p = K.taskDuration) && void 0 !== p
                            ? p
                            : H.taskDuration,
                        onChange: ee('taskDuration'),
                        min: '1',
                        max: '1440',
                        type: 'number',
                      }),
                  Object(r.jsx)(on.a, {
                    borderless: !E,
                    value:
                      null !== (f = K.validFrom) && void 0 !== f
                        ? f
                        : new Date(H.validFrom),
                    disabled: !E,
                    label: 'Valid from',
                    onSelectDate: ee('validFrom', function (e) {
                      return Zr.makeUTC(e[0]);
                    }),
                  }),
                  Object(r.jsx)(on.a, {
                    borderless: !E,
                    value:
                      null !== (b = K.validTo) && void 0 !== b
                        ? b
                        : H.validTo && new Date(H.validTo),
                    disabled: !E,
                    onSelectDate: ee('validTo', function (e) {
                      return Zr.makeUTC(e[0]);
                    }),
                    label: 'Valid to',
                    allowTextInput: !0,
                  }),
                  Object(r.jsx)(gs, { rule: H }),
                  Object(r.jsx)(B.a, {
                    className: I.separator,
                    children: 'Assigned',
                  }),
                  Object(r.jsxs)(z.a, {
                    horizontal: !0,
                    horizontalAlign: 'stretch',
                    verticalAlign: 'stretch',
                    children: [
                      Object(r.jsx)(q.a, {
                        className: I.userColumn,
                        grow: 1,
                        children: Object(r.jsxs)(z.a, {
                          horizontalAlign: 'center',
                          children: [
                            Object(r.jsx)(Yt.a, { children: 'Users' }),
                            E
                              ? Object(r.jsx)(_r.a, {
                                  styles: { root: { width: '90%' } },
                                  content: (
                                    K.flows
                                      ? (null === (j = K.flows) || void 0 === j
                                          ? void 0
                                          : j.length) > 0
                                      : (null === (m = H.flows) || void 0 === m
                                          ? void 0
                                          : m.length) > 0
                                  )
                                    ? 'Rule can be assigned to users or flows, but not both'
                                    : '',
                                  children: Object(r.jsx)(qr, {
                                    options: Q,
                                    disabled: K.flows
                                      ? (null === (h = K.flows) || void 0 === h
                                          ? void 0
                                          : h.length) > 0
                                      : (null === (x = H.flows) || void 0 === x
                                          ? void 0
                                          : x.length) > 0,
                                    onSelect: function (e) {
                                      return Y(function (t) {
                                        return t.users
                                          ? Object(u.a)(
                                              Object(u.a)({}, t),
                                              {},
                                              { users: t.users.concat(e.data) }
                                            )
                                          : Object(u.a)(
                                              Object(u.a)({}, t),
                                              {},
                                              { users: H.users.concat(e.data) }
                                            );
                                      });
                                    },
                                    onRemove: function (e) {
                                      return Y(function (t) {
                                        return t.users
                                          ? Object(u.a)(
                                              Object(u.a)({}, t),
                                              {},
                                              {
                                                users: t.users.filter(function (
                                                  t
                                                ) {
                                                  return t.id !== e.data.id;
                                                }),
                                              }
                                            )
                                          : Object(u.a)(
                                              Object(u.a)({}, t),
                                              {},
                                              {
                                                users: H.users.filter(function (
                                                  t
                                                ) {
                                                  return t.id !== e.data.id;
                                                }),
                                              }
                                            );
                                      });
                                    },
                                    selected: K.users
                                      ? K.users.map(function (e) {
                                          return { key: e.id, data: e };
                                        })
                                      : H.users.map(function (e) {
                                          return { key: e.id, data: e };
                                        }),
                                  }),
                                })
                              : null === (C = H.users) || void 0 === C
                              ? void 0
                              : C.map(function (e) {
                                  return Object(r.jsx)(
                                    q.a,
                                    {
                                      align: 'start',
                                      children: Object(r.jsx)(M.a, {
                                        text: e.username,
                                        size: W.c.size24,
                                      }),
                                    },
                                    e.id
                                  );
                                }),
                          ],
                        }),
                      }),
                      Object(r.jsx)(B.a, { vertical: !0 }),
                      Object(r.jsx)(q.a, {
                        className: I.userColumn,
                        grow: 1,
                        children: Object(r.jsxs)(z.a, {
                          horizontalAlign: 'center',
                          children: [
                            Object(r.jsx)(Yt.a, { children: 'Flows' }),
                            E
                              ? Object(r.jsx)(_r.a, {
                                  styles: { root: { width: '90%' } },
                                  content: (
                                    K.users
                                      ? (null === (y = K.users) || void 0 === y
                                          ? void 0
                                          : y.length) > 0
                                      : (null === (k = H.users) || void 0 === k
                                          ? void 0
                                          : k.length) > 0
                                  )
                                    ? 'Rule can be assigned to users or flows, but not both'
                                    : '',
                                  children: Object(r.jsx)(as, {
                                    style: { width: '90%' },
                                    options: _,
                                    disabled: K.users
                                      ? (null === (w = K.users) || void 0 === w
                                          ? void 0
                                          : w.length) > 0
                                      : (null === (T = H.users) || void 0 === T
                                          ? void 0
                                          : T.length) > 0,
                                    showCheckboxes: !0,
                                    showDeleteIcon: !1,
                                    onSelect: function (e) {
                                      return Y(function (t) {
                                        return t.flows
                                          ? Object(u.a)(
                                              Object(u.a)({}, t),
                                              {},
                                              { flows: t.flows.concat(e.data) }
                                            )
                                          : Object(u.a)(
                                              Object(u.a)({}, t),
                                              {},
                                              { flows: H.flows.concat(e.data) }
                                            );
                                      });
                                    },
                                    onRemove: function (e) {
                                      return Y(function (t) {
                                        return t.flows
                                          ? Object(u.a)(
                                              Object(u.a)({}, t),
                                              {},
                                              {
                                                flows: t.flows.filter(function (
                                                  t
                                                ) {
                                                  return t.id !== e.data.id;
                                                }),
                                              }
                                            )
                                          : Object(u.a)(
                                              Object(u.a)({}, t),
                                              {},
                                              {
                                                flows: H.flows.filter(function (
                                                  t
                                                ) {
                                                  return t.id !== e.data.id;
                                                }),
                                              }
                                            );
                                      });
                                    },
                                    selected: K.flows
                                      ? K.flows.map(function (e) {
                                          return { key: e.id, data: e };
                                        })
                                      : H.flows.map(function (e) {
                                          return { key: e.id, data: e };
                                        }),
                                  }),
                                })
                              : H.flows.map(function (e) {
                                  var t;
                                  return Object(r.jsx)(qe, {
                                    style: {
                                      backgroundColor:
                                        null !== (t = e.color) && void 0 !== t
                                          ? t
                                          : 'transparent',
                                      padding: 3,
                                      whiteSpace: 'pre-wrap',
                                      width: '50%',
                                      marginLeft: 32,
                                      marginTop: 4,
                                    },
                                    children: Object(r.jsx)(N.a, {
                                      variant: 'medium',
                                      children: e.name,
                                    }),
                                  });
                                }),
                          ],
                        }),
                      }),
                    ],
                  }),
                  Object(r.jsx)(B.a, {
                    className: I.separator,
                    children: 'Flags',
                  }),
                  Object(r.jsx)(Ce.a, {
                    checked:
                      null !== (A = K.isBackgroundTask) && void 0 !== A
                        ? A
                        : H.isBackgroundTask,
                    label: 'Background',
                    disabled: !E,
                    onChange: ee('isBackgroundTask', function (e) {
                      return e[0].target.checked;
                    }),
                  }),
                  Object(r.jsx)(Ce.a, {
                    checked: H.isSharedTask,
                    label: 'Shared',
                    disabled: !0,
                  }),
                  Object(r.jsx)(B.a, {
                    className: I.separator,
                    children: 'Created',
                  }),
                  Object(r.jsxs)(z.a, {
                    horizontalAlign: 'center',
                    children: [
                      Object(r.jsx)(N.a, {
                        variant: 'medium',
                        children:
                          null === (P = H.createdUser) || void 0 === P
                            ? void 0
                            : P.username,
                      }),
                      Object(r.jsx)(N.a, {
                        variant: 'medium',
                        children: new Date(H.createdDate).toLocaleString(),
                      }),
                    ],
                  }),
                ],
              })
          );
        },
        ys = function () {
          var e = Fr(us.baseUrl),
            t = Object(l.a)(e, 2),
            n = t[0],
            s = t[1],
            c = Object(a.useState)({ count: 0, items: [] }),
            i = Object(l.a)(c, 2),
            o = i[0],
            u = i[1],
            d = Mr(
              ms,
              {
                headerText: 'Create new rule',
                onRenderFooterContent: function () {
                  return Object(r.jsx)(it.a, {
                    text: 'Create',
                    type: 'submit',
                    form: 'add-task-rule-form',
                  });
                },
              },
              { setRules: s }
            ),
            p = Object(a.useState)(!1),
            f = Object(l.a)(p, 2),
            b = f[0],
            j = f[1],
            m = Mr(
              Cs,
              {
                headerText: 'Rule Details',
                isLightDismiss: !b,
                type: de.a.medium,
                isFooterAtBottom: !0,
                onDismiss: function (e, t) {
                  return function () {
                    j(!1), t(!1);
                  };
                },
              },
              {
                id: o.items.length > 0 ? o.items[0].id : null,
                editing: b,
                setEditing: j,
                setRules: s,
              }
            ),
            h = Object(a.useState)({
              key: 'createdDate',
              name: ' Created on',
              fieldName: 'createdDate',
              isSortable: !0,
              isFilterable: !0,
              isResizable: !0,
              iconName: 'People',
              minWidth: 100,
              maxWidth: 300,
              isSorted: !0,
              isSortedDescending: !0,
            }),
            O = Object(l.a)(h, 1)[0],
            x = Object(a.useState)([
              {
                key: 'title',
                name: ' Title',
                fieldName: 'title',
                isSortable: !0,
                isFilterable: !0,
                isResizable: !0,
                iconName: 'FileTemplate',
                minWidth: 100,
                maxWidth: 300,
              },
              {
                key: 'type',
                name: ' Type',
                fieldName: 'type',
                isSortable: !0,
                isFilterable: !0,
                isResizable: !0,
                iconName: '',
                minWidth: 100,
                maxWidth: 300,
              },
              {
                key: 'users',
                name: ' Users',
                fieldName: 'users',
                isSortable: !0,
                isFilterable: !0,
                isResizable: !0,
                iconName: 'People',
                minWidth: 300,
                maxWidth: 400,
                onRender: function (e) {
                  return e.users
                    .map(function (e) {
                      return e.username;
                    })
                    .join(', ');
                },
                sort: function (e, t) {
                  var n, r, a, s;
                  return (null === (n = e.users[0]) ||
                  void 0 === n ||
                  null === (r = n.username) ||
                  void 0 === r
                    ? void 0
                    : r.toLowerCase()) <
                    (null === (a = t.users[0]) ||
                    void 0 === a ||
                    null === (s = a.username) ||
                    void 0 === s
                      ? void 0
                      : s.toLowerCase())
                    ? -1
                    : 1;
                },
                filterValueAccessor: function (e) {
                  return e.users
                    .map(function (e) {
                      return e.username;
                    })
                    .join(' ');
                },
              },
              {
                key: 'createdDate',
                name: ' Created on',
                fieldName: 'createdDate',
                isSortable: !0,
                isFilterable: !0,
                isResizable: !0,
                iconName: 'People',
                minWidth: 100,
                maxWidth: 300,
                onRender: function (e) {
                  return Object(r.jsx)('div', {
                    children: new Date(e.createdDate).toLocaleString(),
                  });
                },
              },
            ]),
            v = Object(l.a)(x, 1)[0];
          return Object(r.jsxs)(ke.Container, {
            fluid: !0,
            children: [
              Object(r.jsx)(Be.a, { text: 'Rules' }),
              Object(r.jsx)(B.a, {}),
              Object(r.jsx)(ke.Row, {
                children: Object(r.jsx)(ke.Col, {
                  xs: 12,
                  children: Object(r.jsx)(yt.a, {
                    commandItems: [
                      {
                        key: 'createItem',
                        text: 'Create',
                        iconProps: { iconName: 'BoxAdditionSolid' },
                        onClick: function () {
                          d.setOpen(!0);
                        },
                      },
                    ],
                    tableProps: {
                      items: n,
                      columns: v,
                      setSelectionDetails: u,
                      selectionMode: ye.b.single,
                      onItemInvoked: function () {
                        return m.setOpen(!0);
                      },
                      layoutMode: gt.e.justified,
                      sortedCol: O,
                    },
                  }),
                }),
              }),
              d.render,
              m.render,
            ],
          });
        },
        ks = function () {
          var e = Object(h.i)().path;
          return Object(r.jsx)(ke.Container, {
            fluid: !0,
            children: Object(r.jsxs)(h.d, {
              children: [
                Object(r.jsx)(h.b, {
                  exact: !0,
                  path: ''.concat(e),
                  children: Object(r.jsx)(Pe, {
                    code: fe.a.securities.TASK.code,
                    grant: fe.a.securities.TASK.grants.read,
                    to: '/',
                    failureNotification: {
                      header: 'No Access',
                      content:
                        'No permission to access this page. Please contact your administrator.',
                    },
                    children: Object(r.jsx)(j.a, {
                      title: 'Task Dashboard',
                      children: Object(r.jsx)(za, {}),
                    }),
                  }),
                }),
                Object(r.jsx)(h.b, {
                  path: ''.concat(e, '/planning'),
                  children: Object(r.jsx)(Pe, {
                    code: fe.a.securities.TASK_PLANNING.code,
                    grant: fe.a.securities.TASK_PLANNING.grants.read,
                    to: '/',
                    failureNotification: {
                      header: 'No Access',
                      content:
                        'No permission to access this page. Please contact your administrator.',
                    },
                    children: Object(r.jsx)(j.a, {
                      title: 'Planning',
                      children: Object(r.jsx)(os, {}),
                    }),
                  }),
                }),
                Object(r.jsx)(h.b, {
                  path: ''.concat(e, '/task-rules'),
                  children: Object(r.jsx)(Pe, {
                    code: fe.a.securities.TASK_RULE.code,
                    grant: fe.a.securities.TASK_RULE.grants.read,
                    to: '/',
                    failureNotification: {
                      header: 'No Access',
                      content:
                        'No permission to access this page. Please contact your administrator.',
                    },
                    children: Object(r.jsx)(j.a, {
                      title: 'Task Rules',
                      children: Object(r.jsx)(ys, {}),
                    }),
                  }),
                }),
                Object(r.jsx)(h.b, {
                  path: ''.concat(e, '/task-flows'),
                  children: Object(r.jsx)(Pe, {
                    code: fe.a.securities.TASK_FLOW.code,
                    grant: fe.a.securities.TASK_FLOW.grants.read,
                    to: '/',
                    failureNotification: {
                      header: 'No Access',
                      content:
                        'No permission to access this page. Please contact your administrator.',
                    },
                    children: Object(r.jsx)(j.a, {
                      title: 'Flows',
                      children: Object(r.jsx)(Va, {}),
                    }),
                  }),
                }),
                Object(r.jsx)(h.b, {
                  exact: !0,
                  path: ''.concat(e, '/:id'),
                  children: Object(r.jsx)(Pe, {
                    code: fe.a.securities.TASK.code,
                    grant: fe.a.securities.TASK.grants.read,
                    to: '/',
                    failureNotification: {
                      header: 'No Access',
                      content:
                        'No permission to access this page. Please contact your administrator.',
                    },
                    children: Object(r.jsx)(j.a, {
                      title: 'Task',
                      children: Object(r.jsx)('div', { children: 'Task' }),
                    }),
                  }),
                }),
              ],
            }),
          });
        },
        ws = function () {
          var e = Object(a.useContext)(O.a);
          return (
            Object(a.useEffect)(
              function () {
                function t() {
                  return (t = Object(g.a)(
                    v.a.mark(function t() {
                      var n;
                      return v.a.wrap(function (t) {
                        for (;;)
                          switch ((t.prev = t.next)) {
                            case 0:
                              if (!e.user) {
                                t.next = 5;
                                break;
                              }
                              return (t.next = 3), Na.connectSSE();
                            case 3:
                              (n = t.sent).addEventListener(
                                'init',
                                function (t) {
                                  e.setContext(function (e) {
                                    return Object(u.a)(
                                      Object(u.a)({}, e),
                                      {},
                                      {
                                        connectionId: JSON.parse(t.data)[0],
                                        connection: n,
                                      }
                                    );
                                  });
                                }
                              );
                            case 5:
                            case 'end':
                              return t.stop();
                          }
                      }, t);
                    })
                  )).apply(this, arguments);
                }
                !(function () {
                  t.apply(this, arguments);
                })();
              },
              [e.user]
            ),
            null
          );
        },
        Ss = s.a.lazy(function () {
          return Promise.all([n.e(3), n.e(5)]).then(n.bind(null, 439));
        }),
        Ts = function () {
          var e = Object(a.useState)({
              user: null,
              Authorize: w.Authorize,
              setContext: null,
              userPreferences: { theme: $() },
            }),
            t = Object(l.a)(e, 2),
            n = t[0],
            s = t[1],
            c = Object(a.useContext)(O.a),
            i = n.userPreferences.theme;
          return (
            Object(a.useEffect)(
              function () {
                s(function (e) {
                  return Object(u.a)(
                    Object(u.a)(Object(u.a)({}, c), e),
                    {},
                    { setContext: s }
                  );
                });
              },
              [c]
            ),
            Object(r.jsx)(O.a.Provider, {
              value: n,
              children: Object(r.jsxs)(d.a, {
                applyTo: 'body',
                theme: i,
                children: [
                  Object(r.jsx)(ws, {}),
                  Object(r.jsx)(Lr.a, { timeout: 1e4 }),
                  Object(r.jsxs)(m.a, {
                    children: [
                      Object(r.jsx)(A, { ctx: n, setCtx: s }),
                      Object(r.jsx)(P, {}),
                      Object(r.jsx)(xe, {}),
                      Object(r.jsx)(pn.a, {}),
                      Object(r.jsx)(p.a, {
                        keytipStartSequences: [
                          { key: 'a', modifierKeys: [f.a.alt] },
                        ],
                      }),
                      Object(r.jsx)(h.d, {
                        children: Object(r.jsxs)('div', {
                          style: { marginTop: '40px' },
                          children: [
                            Object(r.jsx)(h.b, {
                              path: '/appraisals',
                              children: Object(r.jsx)(j.a, {
                                title: 'Appraisals',
                                children: Object(r.jsx)(xt, {
                                  ctx: n,
                                  setCtx: s,
                                }),
                              }),
                            }),
                            Object(r.jsx)(h.b, {
                              path: '/audits',
                              children: Object(r.jsx)(j.a, {
                                title: 'Audits',
                                children: Object(r.jsx)('h1', {
                                  children: 'IN PROGRESS',
                                }),
                              }),
                            }),
                            Object(r.jsx)(h.b, {
                              path: '/reporting',
                              children: Object(r.jsx)(j.a, {
                                title: 'Reporting',
                                children: Object(r.jsx)(dn, {
                                  ctx: n,
                                  setCtx: s,
                                }),
                              }),
                            }),
                            Object(r.jsx)(h.b, {
                              path: '/settings',
                              children: Object(r.jsx)(j.a, {
                                title: 'Settings',
                                children: Object(r.jsx)(Bt, {}),
                              }),
                            }),
                            Object(r.jsx)(h.b, {
                              path: '/tasks',
                              children: Object(r.jsx)(j.a, {
                                title: 'Tasks',
                                children: Object(r.jsx)(ks, {}),
                              }),
                            }),
                            Object(r.jsx)(h.b, {
                              path: '/login',
                              children: Object(r.jsx)(j.a, {
                                title: 'Sign in',
                                children: Object(r.jsx)(Dr, {
                                  ctx: n,
                                  setCtx: s,
                                }),
                              }),
                            }),
                            Object(r.jsx)(h.b, {
                              exact: !0,
                              path: '/',
                              children: Object(r.jsx)(a.Suspense, {
                                fallback: Object(r.jsx)('div', {
                                  children: 'Loading...',
                                }),
                                children: Object(r.jsx)(Ss, {
                                  ctx: n,
                                  setCtx: s,
                                }),
                              }),
                            }),
                          ],
                        }),
                      }),
                    ],
                  }),
                ],
              }),
            })
          );
        };
      n(273);
      Object(o.a)(),
        i.a.render(
          Object(r.jsx)(s.a.StrictMode, { children: Object(r.jsx)(Ts, {}) }),
          document.getElementById('root')
        );
    },
    275: function (e, t, n) {
      'use strict';
      n.r(t);
      var r = n(1),
        a = n(3),
        s = n.n(a),
        c = n(6),
        i = n(5),
        o = n(101),
        u = n(292),
        l = n(39),
        d = n(30),
        p = n(0),
        f = n(7),
        b = n(32),
        j = n(68),
        m = n(87),
        h = n(23),
        O = n(4),
        x = n(150),
        v = n(197),
        g = n(364),
        C = n(184),
        y = n(391),
        k = n(47),
        w = n(196),
        S = n(183),
        T = n(77),
        A = n(88).a,
        P = Object(x.a)(function () {
          return { root: { '& > * + *': { marginTop: '16px' } } };
        }),
        R = function (e) {
          var t = e.isOpen,
            n = e.setOpen,
            a = P(),
            o = Object(p.useState)(''),
            l = Object(i.a)(o, 2),
            d = l[0],
            j = l[1],
            m = Object(p.useState)(''),
            x = Object(i.a)(m, 2),
            R = x[0],
            E = x[1],
            D = Object(p.useState)(null),
            L = Object(i.a)(D, 2),
            N = L[0],
            I = L[1],
            F = Object(p.useState)(''),
            U = Object(i.a)(F, 2),
            z = U[0],
            M = U[1],
            W = Object(p.useState)({ aggregation: !0, sample: !1 }),
            H = Object(i.a)(W, 2),
            B = H[0],
            Z = H[1],
            V = function (e) {
              return function (t) {
                t && t.target && e && e(t.target.value);
              };
            },
            G = (function () {
              var e = Object(c.a)(
                s.a.mark(function e() {
                  var t, n;
                  return s.a.wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (t = new FormData()).append('aggregation', d),
                            t.append('name', R),
                            t.append('template', N),
                            (e.next = 6),
                            b.a.generateTemplate(t)
                          );
                        case 6:
                          return (
                            (n = e.sent),
                            (e.next = 9),
                            Object(T.downloadBlob)(N.name, n)
                          );
                        case 9:
                        case 'end':
                          return e.stop();
                      }
                  }, e);
                })
              );
              return function () {
                return e.apply(this, arguments);
              };
            })(),
            q = (function () {
              var e = Object(c.a)(
                s.a.mark(function e() {
                  var t;
                  return s.a.wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (e.next = 2), b.a.getSample(d);
                        case 2:
                          (t = e.sent) &&
                            t.data &&
                            (M(JSON.stringify(t.data, null, 4)),
                            Z({ aggregation: !1, sample: !0 }));
                        case 4:
                        case 'end':
                          return e.stop();
                      }
                  }, e);
                })
              );
              return function () {
                return e.apply(this, arguments);
              };
            })(),
            K = (function () {
              var e = Object(c.a)(
                s.a.mark(function e() {
                  var t;
                  return s.a.wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (t = new FormData()).append('aggregation', d),
                            t.append('name', R),
                            t.append('template', N),
                            (e.next = 6),
                            b.a.createTemplate(t)
                          );
                        case 6:
                          n(!1);
                        case 7:
                        case 'end':
                          return e.stop();
                      }
                  }, e);
                })
              );
              return function () {
                return e.apply(this, arguments);
              };
            })();
          return Object(r.jsx)(y.a, {
            isOpen: t,
            onDismiss: function () {
              return n(!1);
            },
            headerText: 'Create template',
            type: k.a.large,
            onRenderFooterContent: function () {
              return Object(r.jsxs)(v.a, {
                horizontal: !0,
                horizontalAlign: 'start',
                tokens: { childrenGap: 10 },
                children: [
                  Object(r.jsx)(g.a, {
                    type: 'submit',
                    form: 'new-template-form',
                    children: 'Create',
                  }),
                  Object(r.jsx)(C.a, { onClick: q, children: 'Sample' }),
                  Object(r.jsx)(C.a, { onClick: G, children: 'Generate' }),
                  Object(r.jsx)(C.a, {
                    onClick: function () {
                      return n(!1);
                    },
                    children: 'Cancel',
                  }),
                ],
              });
            },
            children: Object(r.jsx)('form', {
              id: 'new-template-form',
              onSubmit: K,
              children: Object(r.jsxs)(f.Container, {
                fluid: !0,
                className: a.root,
                children: [
                  Object(r.jsx)(u.a, { children: 'Aggregation' }),
                  Object(r.jsx)(f.Row, {
                    justify: 'center',
                    children: Object(r.jsxs)(w.a, {
                      variant: 'mediumPlus',
                      children: [
                        'Create a valid MongoDB aggregation. Test and verify if it returns valid info below. For more info, refer to MongoDB',
                        ' ',
                        Object(r.jsx)('a', {
                          href: 'https://docs.mongodb.com/manual/aggregation/',
                          target: '_blank',
                          rel: 'noopener noreferrer',
                          children: 'documentation',
                        }),
                        '.',
                      ],
                    }),
                  }),
                  Object(r.jsx)(A, {
                    items: [
                      {
                        key: 'aggregation',
                        text: 'Aggregation',
                        isOpen: B.aggregation,
                        render: function () {
                          return Object(r.jsx)(f.Row, {
                            children: Object(r.jsx)(f.Col, {
                              xs: 12,
                              children: Object(r.jsx)(S.a, {
                                multiline: !0,
                                value: d,
                                onChange: V(j),
                                autoAdjustHeight: !0,
                                required: !0,
                              }),
                            }),
                          });
                        },
                      },
                      {
                        key: 'sample',
                        text: 'Sample Data',
                        isOpen: B.sample,
                        render: function () {
                          return Object(r.jsx)(f.Row, {
                            children: Object(r.jsx)(f.Col, {
                              xs: 12,
                              children: Object(r.jsx)(S.a, {
                                multiline: !0,
                                readOnly: !0,
                                value: z,
                                autoAdjustHeight: !0,
                              }),
                            }),
                          });
                        },
                      },
                    ],
                    onRenderItem: function (e) {
                      return e.render();
                    },
                    onToggle: function (e, t, n) {
                      return Z(function (e) {
                        return Object(O.a)(
                          Object(O.a)({}, e),
                          {},
                          Object(h.a)({}, t.key, n)
                        );
                      });
                    },
                  }),
                  Object(r.jsx)(u.a, { children: 'Template' }),
                  Object(r.jsx)(f.Row, {
                    justify: 'center',
                    children: Object(r.jsx)(w.a, {
                      variant: 'mediumPlus',
                      children:
                        'Specify your template name, then attach your template file. (Ex: All user info, or Items per user).',
                    }),
                  }),
                  Object(r.jsx)(f.Row, {
                    children: Object(r.jsxs)(f.Col, {
                      xs: 12,
                      children: [
                        Object(r.jsx)(S.a, {
                          label: 'Template name',
                          value: R,
                          onChange: V(E),
                          required: !0,
                        }),
                        Object(r.jsx)(S.a, {
                          styles: {
                            fieldGroup: { padding: '8px', height: 'auto' },
                          },
                          onChange: function (e) {
                            if (e && e.target) {
                              var t = e.target.files;
                              t.length > 0 ? I(t[0]) : I(null);
                            }
                          },
                          type: 'file',
                          label: 'Template file',
                          required: !0,
                        }),
                      ],
                    }),
                  }),
                ],
              }),
            }),
          });
        },
        E = n(179),
        D = Object(x.a)(function () {
          return { root: { '& > * + *': { marginTop: '16px' } } };
        }),
        L = function (e) {
          var t = e.id,
            n = e.isOpen,
            a = e.setOpen,
            o = e.setEdit,
            l = D(),
            d = Object(p.useState)(null),
            j = Object(i.a)(d, 2),
            m = j[0],
            h = j[1];
          Object(p.useEffect)(
            function () {
              var e = !0;
              function n() {
                return (n = Object(c.a)(
                  s.a.mark(function n() {
                    var r;
                    return s.a.wrap(function (n) {
                      for (;;)
                        switch ((n.prev = n.next)) {
                          case 0:
                            return (n.next = 2), b.a.getTemplate(t);
                          case 2:
                            (r = n.sent), e && h(r);
                          case 4:
                          case 'end':
                            return n.stop();
                        }
                    }, n);
                  })
                )).apply(this, arguments);
              }
              return (
                t &&
                  (function () {
                    n.apply(this, arguments);
                  })(),
                function () {
                  e = !1;
                }
              );
            },
            [t]
          );
          var O = function () {
            o(!0), a(!1);
          };
          return Object(r.jsx)(y.a, {
            isOpen: n,
            onDismiss: function () {
              return a(!1);
            },
            headerText: 'Details - '.concat(m ? m.name : ''),
            type: k.a.large,
            onRenderFooterContent: function () {
              return Object(r.jsxs)(v.a, {
                horizontal: !0,
                horizontalAlign: 'start',
                tokens: { childrenGap: 10 },
                children: [
                  Object(r.jsx)(g.a, { onClick: O, children: 'Edit' }),
                  Object(r.jsx)(C.a, {
                    onClick: function () {
                      return a(!1);
                    },
                    children: 'Close',
                  }),
                ],
              });
            },
            isLightDismiss: !0,
            children: Object(r.jsxs)(f.Container, {
              fluid: !0,
              className: l.root,
              children: [
                Object(r.jsx)(u.a, { children: 'General' }),
                m &&
                  Object(r.jsxs)(r.Fragment, {
                    children: [
                      Object(r.jsx)(f.Row, {
                        justify: 'start',
                        children: Object(r.jsxs)(f.Col, {
                          xs: 12,
                          sm: 8,
                          md: 4,
                          children: [
                            Object(r.jsx)(S.a, {
                              label: 'Name: ',
                              value: m && m.name,
                              readOnly: !0,
                              underlined: !0,
                            }),
                            Object(r.jsx)(S.a, {
                              label: 'Created by: ',
                              value:
                                m && m.createdUser && m.createdUser.username,
                              readOnly: !0,
                              underlined: !0,
                            }),
                            Object(r.jsx)(S.a, {
                              label: 'Created on: ',
                              value:
                                m && new Date(m.createdDate).toLocaleString(),
                              readOnly: !0,
                              underlined: !0,
                            }),
                            m.modifiedUser &&
                              Object(r.jsxs)(r.Fragment, {
                                children: [
                                  Object(r.jsx)(S.a, {
                                    label: 'Modified by: ',
                                    value: m.modifiedUser.username,
                                    readOnly: !0,
                                    underlined: !0,
                                  }),
                                  Object(r.jsx)(S.a, {
                                    label: 'Modified on: ',
                                    value:
                                      m.modifiedDate &&
                                      new Date(m.modifiedDate).toLocaleString(),
                                    readOnly: !0,
                                    underlined: !0,
                                  }),
                                ],
                              }),
                          ],
                        }),
                      }),
                      Object(r.jsx)(u.a, { children: 'Details' }),
                      Object(r.jsxs)(f.Row, {
                        justify: 'start',
                        children: [
                          Object(r.jsx)(f.Col, {
                            xs: 12,
                            sm: 8,
                            md: 4,
                            children: Object(r.jsx)(S.a, {
                              label: 'Filename: ',
                              value: m.filename,
                              readOnly: !0,
                              underlined: !0,
                            }),
                          }),
                          Object(r.jsx)(f.Col, {
                            xs: 12,
                            sm: 8,
                            md: 4,
                            children: Object(r.jsx)(E.a, {
                              iconProps: { iconName: 'DownloadDocument' },
                              text: 'Download template',
                              onClick: function () {
                                b.a.downloadTemplate(
                                  t,
                                  m.filename || 'template'
                                );
                              },
                            }),
                          }),
                        ],
                      }),
                      Object(r.jsx)(f.Row, {
                        justify: 'start',
                        children: Object(r.jsx)(f.Col, {
                          xs: 12,
                          sm: 8,
                          md: 6,
                          children: Object(r.jsx)(S.a, {
                            readOnly: !0,
                            multiline: !0,
                            autoAdjustHeight: !0,
                            value: m.aggregation || '',
                            label: 'Aggregation',
                          }),
                        }),
                      }),
                    ],
                  }),
              ],
            }),
          });
        },
        N = Object(x.a)(function () {
          return { root: { '& > * + *': { marginTop: '16px' } } };
        }),
        I = function (e) {
          var t = e.id,
            n = e.isOpen,
            a = e.updateTemplates,
            l = e.setOpen,
            d = N(),
            j = Object(p.useState)({}),
            m = Object(i.a)(j, 2),
            x = m[0],
            w = m[1],
            T = Object(p.useState)({}),
            A = Object(i.a)(T, 2),
            P = A[0],
            R = A[1],
            D = Object(p.useState)(null),
            L = Object(i.a)(D, 2),
            I = L[0],
            F = L[1];
          Object(p.useEffect)(
            function () {
              var e = !0;
              function n() {
                return (n = Object(c.a)(
                  s.a.mark(function n() {
                    var r;
                    return s.a.wrap(function (n) {
                      for (;;)
                        switch ((n.prev = n.next)) {
                          case 0:
                            return (n.next = 2), b.a.getTemplate(t);
                          case 2:
                            (r = n.sent),
                              e &&
                                (w(r),
                                R({
                                  name: r.name,
                                  filename: r.filename,
                                  aggregation: r.aggregation,
                                }));
                          case 4:
                          case 'end':
                            return n.stop();
                        }
                    }, n);
                  })
                )).apply(this, arguments);
              }
              return (
                t &&
                  (function () {
                    n.apply(this, arguments);
                  })(),
                function () {
                  e = !1;
                }
              );
            },
            [t]
          );
          var U = function (e) {
              return function (t) {
                t &&
                  t.target &&
                  R(function (n) {
                    return Object(O.a)(
                      Object(O.a)({}, n),
                      {},
                      Object(h.a)({}, e, t.target.value)
                    );
                  });
              };
            },
            z = (function () {
              var e = Object(c.a)(
                s.a.mark(function e() {
                  var t, n;
                  return s.a.wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (t = new FormData()).append(
                              'aggregation',
                              P.aggregation
                            ),
                            t.append('name', P.name),
                            t.append('filename', P.filename),
                            I && t.append('template', I),
                            (e.next = 7),
                            b.a.updateTemplate(x.id, t)
                          );
                        case 7:
                          (n = e.sent), w(n), a(n), l(!1);
                        case 11:
                        case 'end':
                          return e.stop();
                      }
                  }, e);
                })
              );
              return function () {
                return e.apply(this, arguments);
              };
            })(),
            M = function (e, t, n) {
              return function (a) {
                return Object(r.jsxs)('label', {
                  style: { lineHeight: '2em', fontWeight: 600 },
                  htmlFor: t,
                  id: e,
                  children: [Object(r.jsx)(o.a, { iconName: n }), ' ', a.label],
                });
              };
            };
          return Object(r.jsx)(y.a, {
            isOpen: n,
            onDismiss: function () {
              return l(!1);
            },
            headerText: 'Edit - '.concat(x ? x.name : ''),
            type: k.a.large,
            onRenderFooterContent: function () {
              return Object(r.jsxs)(v.a, {
                horizontal: !0,
                horizontalAlign: 'start',
                tokens: { childrenGap: 10 },
                children: [
                  Object(r.jsx)(g.a, { onClick: z, children: 'Update' }),
                  Object(r.jsx)(C.a, {
                    onClick: function () {
                      return l(!1);
                    },
                    children: 'Close',
                  }),
                ],
              });
            },
            children: Object(r.jsxs)(f.Container, {
              fluid: !0,
              className: d.root,
              children: [
                Object(r.jsx)(u.a, { children: 'General' }),
                x &&
                  Object(r.jsxs)(r.Fragment, {
                    children: [
                      Object(r.jsx)(f.Row, {
                        justify: 'start',
                        children: Object(r.jsxs)(f.Col, {
                          xs: 12,
                          sm: 8,
                          md: 4,
                          children: [
                            Object(r.jsx)(S.a, {
                              onRenderLabel: M(
                                'label-aggregation-edit',
                                'aggregation-edit',
                                'Edit'
                              ),
                              label: 'Name: ',
                              value: P && P.name,
                              onChange: U('name'),
                              underlined: !0,
                            }),
                            Object(r.jsx)(S.a, {
                              label: 'Created by: ',
                              value:
                                x && x.createdUser && x.createdUser.username,
                              readOnly: !0,
                              underlined: !0,
                              tabIndex: -1,
                            }),
                            Object(r.jsx)(S.a, {
                              label: 'Created on: ',
                              value:
                                x && new Date(x.createdDate).toLocaleString(),
                              readOnly: !0,
                              underlined: !0,
                              tabIndex: -1,
                            }),
                            x.modifiedUser &&
                              Object(r.jsxs)(r.Fragment, {
                                children: [
                                  Object(r.jsx)(S.a, {
                                    label: 'Modified by: ',
                                    value: x.modifiedUser.username,
                                    readOnly: !0,
                                    underlined: !0,
                                    tabIndex: -1,
                                  }),
                                  Object(r.jsx)(S.a, {
                                    label: 'Modified on: ',
                                    value:
                                      x.modifiedDate &&
                                      new Date(x.modifiedDate).toLocaleString(),
                                    readOnly: !0,
                                    underlined: !0,
                                    tabIndex: -1,
                                  }),
                                ],
                              }),
                          ],
                        }),
                      }),
                      Object(r.jsx)(u.a, { children: 'Details' }),
                      Object(r.jsxs)(f.Row, {
                        justify: 'start',
                        children: [
                          Object(r.jsx)(f.Col, {
                            xs: 12,
                            sm: 8,
                            md: 4,
                            children: Object(r.jsx)(S.a, {
                              onRenderLabel: M(
                                'label-aggregation-edit',
                                'aggregation-edit',
                                'Edit'
                              ),
                              label: 'Filename: ',
                              value: P.filename,
                              onChange: U('filename'),
                              underlined: !0,
                            }),
                          }),
                          Object(r.jsx)(f.Col, {
                            xs: 12,
                            sm: 8,
                            md: 4,
                            children: Object(r.jsx)(E.a, {
                              iconProps: { iconName: 'DownloadDocument' },
                              text: 'Download template',
                              onClick: function () {
                                b.a.downloadTemplate(
                                  t,
                                  x.filename || 'template'
                                );
                              },
                            }),
                          }),
                        ],
                      }),
                      Object(r.jsx)(f.Row, {
                        justify: 'start',
                        children: Object(r.jsx)(f.Col, {
                          xs: 12,
                          sm: 8,
                          md: 4,
                          children: Object(r.jsx)(S.a, {
                            styles: {
                              fieldGroup: { padding: '8px', height: 'auto' },
                            },
                            onChange: function (e) {
                              if (e && e.target) {
                                var t = e.target.files;
                                t.length > 0
                                  ? (F(t[0]),
                                    R(function (e) {
                                      return Object(O.a)(
                                        Object(O.a)({}, e),
                                        {},
                                        { filename: t[0].name }
                                      );
                                    }))
                                  : F(null);
                              }
                            },
                            type: 'file',
                            label: 'Template file',
                          }),
                        }),
                      }),
                      Object(r.jsx)(f.Row, {
                        justify: 'start',
                        children: Object(r.jsx)(f.Col, {
                          xs: 12,
                          sm: 8,
                          md: 6,
                          children: Object(r.jsx)(S.a, {
                            onRenderLabel: M(
                              'label-aggregation-edit',
                              'aggregation-edit',
                              'Edit'
                            ),
                            multiline: !0,
                            autoAdjustHeight: !0,
                            value: P.aggregation || '',
                            onChange: U('aggregation'),
                            label: 'Aggregation',
                            'aria-labelledby': 'label-aggregation-edit',
                            id: 'aggregation-edit',
                          }),
                        }),
                      }),
                    ],
                  }),
              ],
            }),
          });
        },
        F = function (e) {
          var t = e.item;
          if (t.filename) {
            var n,
              a = t.filename.split('.');
            switch (a[a.length - 1]) {
              case 'xlsx':
                n = 'ExcelLogo';
                break;
              case 'docx':
                n = 'WordLogo';
                break;
              default:
                n = 'FileBug';
            }
            return Object(r.jsx)('div', {
              style: { textAlign: 'center' },
              children: Object(r.jsx)(o.a, {
                styles: { root: { fontSize: '1.3em' } },
                iconName: n,
              }),
            });
          }
          return null;
        };
      t.default = function () {
        var e = Object(p.useState)([]),
          t = Object(i.a)(e, 2),
          n = t[0],
          a = t[1],
          o = Object(p.useState)(!1),
          h = Object(i.a)(o, 2),
          O = h[0],
          x = h[1],
          v = Object(p.useState)(!1),
          g = Object(i.a)(v, 2),
          C = g[0],
          y = g[1],
          k = Object(p.useState)(!1),
          w = Object(i.a)(k, 2),
          S = w[0],
          T = w[1],
          A = Object(p.useState)({ count: 0, items: [] }),
          P = Object(i.a)(A, 2),
          E = P[0],
          D = P[1],
          N = Object(p.useState)([
            {
              key: 'type',
              name: ' Type',
              fieldName: 'name',
              iconName: 'ToDoLogoBottom',
              minWidth: 70,
              maxWidth: 70,
              onRender: function (e) {
                return Object(r.jsx)(F, { item: e });
              },
            },
            {
              key: 'name',
              name: ' Name',
              fieldName: 'name',
              isSortable: !0,
              isFilterable: !0,
              iconName: 'FileTemplate',
              minWidth: 100,
              maxWidth: 300,
            },
            {
              key: 'filename',
              name: ' Filename',
              fieldName: 'filename',
              isSortable: !0,
              isFilterable: !0,
              iconName: 'FileBug',
              minWidth: 100,
              maxWidth: 200,
            },
            {
              key: 'createdby',
              name: ' Created by',
              isSortable: !0,
              isFilterable: !0,
              iconName: 'Contact',
              minWidth: 100,
              maxWidth: 300,
              sort: function (e, t) {
                return e.createdUser.username < t.createdUser.username ? -1 : 1;
              },
              onRender: function (e) {
                return e.createdUser.username;
              },
            },
            {
              key: 'createdon',
              name: ' Created on',
              fieldName: 'createdDate',
              isSortable: !0,
              isFilterable: !0,
              iconName: 'DateTime',
              minWidth: 200,
              maxWidth: 300,
              onRender: function (e) {
                return new Date(e.createdDate).toLocaleString();
              },
            },
          ]),
          U = Object(i.a)(N, 1)[0],
          z = Object(p.useState)({
            key: 'createdon',
            name: ' Created on',
            fieldName: 'createdDate',
            isSorted: !0,
            isSortedDescending: !0,
            isSortable: !0,
            isFilterable: !0,
            iconName: 'DateTime',
            minWidth: 200,
            maxWidth: 300,
            onRender: function (e) {
              return new Date(e.createdDate).toLocaleString();
            },
          }),
          M = Object(i.a)(z, 1)[0];
        return (
          Object(p.useEffect)(function () {
            var e = !0;
            function t() {
              return (t = Object(c.a)(
                s.a.mark(function t() {
                  var n;
                  return s.a.wrap(function (t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          return (t.next = 2), b.a.getTemplates();
                        case 2:
                          (n = t.sent), e && a(n);
                        case 4:
                        case 'end':
                          return t.stop();
                      }
                  }, t);
                })
              )).apply(this, arguments);
            }
            return (
              (function () {
                t.apply(this, arguments);
              })(),
              function () {
                e = !1;
              }
            );
          }, []),
          Object(r.jsxs)(f.Container, {
            fluid: !0,
            children: [
              Object(r.jsx)(m.a, { text: 'Templates' }),
              Object(r.jsx)(u.a, {}),
              Object(r.jsx)(f.Row, {
                children: Object(r.jsx)(f.Col, {
                  xs: 12,
                  children: Object(r.jsx)(j.a, {
                    commandItems: [
                      {
                        key: 'createItem',
                        text: 'Create',
                        iconProps: { iconName: 'BoxAdditionSolid' },
                        onClick: function () {
                          return x(!0);
                        },
                      },
                      {
                        key: 'details',
                        text: 'Details',
                        disabled: 0 === E.count,
                        iconProps: { iconName: 'ProfileSearch' },
                        onClick: function () {
                          return y(!0);
                        },
                      },
                      {
                        key: 'editItem',
                        text: 'Edit',
                        disabled: 0 === E.count,
                        iconProps: { iconName: 'Edit' },
                        onClick: function () {
                          return T(!0);
                        },
                      },
                    ],
                    tableProps: {
                      items: n,
                      columns: U,
                      setSelectionDetails: D,
                      selectionMode: l.b.single,
                      onItemInvoked: function () {
                        return y(!0);
                      },
                      layoutMode: d.e.justified,
                      sortedCol: M,
                    },
                  }),
                }),
              }),
              Object(r.jsx)(R, { isOpen: O, setOpen: x }),
              Object(r.jsx)(L, {
                isOpen: C,
                setOpen: y,
                id: E.items.length > 0 ? E.items[0].id : '',
                setEdit: T,
              }),
              Object(r.jsx)(I, {
                isOpen: S,
                setOpen: T,
                updateTemplates: function (e) {
                  return a(function (t) {
                    return t.map(function (t) {
                      return t.id === e.id ? e : t;
                    });
                  });
                },
                id: E.items.length > 0 ? E.items[0].id : '',
              }),
            ],
          })
        );
      };
    },
    32: function (e, t, n) {
      'use strict';
      var r = n(3),
        a = n.n(r),
        s = n(6),
        c = n(13),
        i = n.n(c),
        o = n(77),
        u = n(11),
        l = {
          templatesPath: '/api/reporting/templates',
          templatePath: function (e) {
            return '/api/reporting/templates/'.concat(e);
          },
          templateDownloadPath: function (e) {
            return '/api/reporting/templates/'.concat(e, '/download');
          },
          templateParametersPath: function (e) {
            return '/api/reporting/templates/'.concat(e, '/parameters');
          },
          generateTemplatePath: '/api/reporting/templates/generate',
          templateSamplePath: '/api/reporting/templates/sample',
          getTemplates: function () {
            var e = this;
            return Object(s.a)(
              a.a.mark(function t() {
                var n;
                return a.a.wrap(
                  function (t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          return (
                            (t.prev = 0), (t.next = 3), i.a.get(e.templatesPath)
                          );
                        case 3:
                          if (200 !== (n = t.sent).status) {
                            t.next = 6;
                            break;
                          }
                          return t.abrupt('return', n.data);
                        case 6:
                          throw new Error(
                            'Server response: '
                              .concat(n.status, ' - ')
                              .concat(n.statusText)
                          );
                        case 9:
                          throw (
                            ((t.prev = 9),
                            (t.t0 = t.catch(0)),
                            u.a.notifyError(
                              t.t0.response &&
                                t.t0.response.data &&
                                t.t0.response.data.error
                            ),
                            t.t0)
                          );
                        case 13:
                        case 'end':
                          return t.stop();
                      }
                  },
                  t,
                  null,
                  [[0, 9]]
                );
              })
            )();
          },
          getTemplate: function (e) {
            var t = this;
            return Object(s.a)(
              a.a.mark(function n() {
                var r;
                return a.a.wrap(
                  function (n) {
                    for (;;)
                      switch ((n.prev = n.next)) {
                        case 0:
                          return (
                            (n.prev = 0),
                            (n.next = 3),
                            i.a.get(t.templatePath(e))
                          );
                        case 3:
                          if (200 !== (r = n.sent).status) {
                            n.next = 6;
                            break;
                          }
                          return n.abrupt('return', r.data);
                        case 6:
                          throw new Error(
                            'Server response: '
                              .concat(r.status, ' - ')
                              .concat(r.statusText)
                          );
                        case 9:
                          throw (
                            ((n.prev = 9),
                            (n.t0 = n.catch(0)),
                            u.a.notifyError(
                              n.t0.response &&
                                n.t0.response.data &&
                                n.t0.response.data.error
                            ),
                            n.t0)
                          );
                        case 13:
                        case 'end':
                          return n.stop();
                      }
                  },
                  n,
                  null,
                  [[0, 9]]
                );
              })
            )();
          },
          createTemplate: function (e) {
            var t = this;
            return Object(s.a)(
              a.a.mark(function n() {
                var r;
                return a.a.wrap(
                  function (n) {
                    for (;;)
                      switch ((n.prev = n.next)) {
                        case 0:
                          return (
                            (n.prev = 0),
                            (n.next = 3),
                            i.a.post(t.templatesPath, e, {
                              headers: {
                                'Content-Type': 'multipart/form-data',
                              },
                            })
                          );
                        case 3:
                          if (200 !== (r = n.sent).status) {
                            n.next = 7;
                            break;
                          }
                          return (
                            u.a.notifySuccess('Tempalte successfully created'),
                            n.abrupt('return', r.data)
                          );
                        case 7:
                          throw new Error(
                            'Server response: '
                              .concat(r.status, ' - ')
                              .concat(r.statusText)
                          );
                        case 10:
                          throw (
                            ((n.prev = 10),
                            (n.t0 = n.catch(0)),
                            u.a.notifyError(
                              n.t0.response &&
                                n.t0.response.data &&
                                n.t0.response.data.error
                            ),
                            n.t0)
                          );
                        case 14:
                        case 'end':
                          return n.stop();
                      }
                  },
                  n,
                  null,
                  [[0, 10]]
                );
              })
            )();
          },
          updateTemplate: function (e, t) {
            var n = this;
            return Object(s.a)(
              a.a.mark(function r() {
                var s;
                return a.a.wrap(
                  function (r) {
                    for (;;)
                      switch ((r.prev = r.next)) {
                        case 0:
                          return (
                            (r.prev = 0),
                            (r.next = 3),
                            i.a.put(n.templatePath(e), t, {
                              headers: {
                                'Content-Type': 'multipart/form-data',
                              },
                            })
                          );
                        case 3:
                          if (200 !== (s = r.sent).status) {
                            r.next = 6;
                            break;
                          }
                          return r.abrupt('return', s.data);
                        case 6:
                          throw new Error(
                            'Server response: '
                              .concat(s.status, ' - ')
                              .concat(s.statusText)
                          );
                        case 9:
                          throw (
                            ((r.prev = 9),
                            (r.t0 = r.catch(0)),
                            u.a.notifyError(
                              r.t0.response &&
                                r.t0.response.data &&
                                r.t0.response.data.error
                            ),
                            r.t0)
                          );
                        case 13:
                        case 'end':
                          return r.stop();
                      }
                  },
                  r,
                  null,
                  [[0, 9]]
                );
              })
            )();
          },
          downloadTemplate: function (e, t) {
            var n = this;
            return Object(s.a)(
              a.a.mark(function r() {
                var s;
                return a.a.wrap(
                  function (r) {
                    for (;;)
                      switch ((r.prev = r.next)) {
                        case 0:
                          return (
                            (r.prev = 0),
                            (r.next = 3),
                            i.a.post(n.templateDownloadPath(e), null, {
                              responseType: 'blob',
                            })
                          );
                        case 3:
                          if (200 !== (s = r.sent).status) {
                            r.next = 7;
                            break;
                          }
                          return (
                            (r.next = 7), Object(o.downloadBlob)(t, s.data)
                          );
                        case 7:
                          r.next = 13;
                          break;
                        case 9:
                          throw (
                            ((r.prev = 9),
                            (r.t0 = r.catch(0)),
                            u.a.notifyError(
                              r.t0.response &&
                                r.t0.response.data &&
                                r.t0.response.data.error
                            ),
                            r.t0)
                          );
                        case 13:
                        case 'end':
                          return r.stop();
                      }
                  },
                  r,
                  null,
                  [[0, 9]]
                );
              })
            )();
          },
          getTempalteParameters: function (e) {
            var t = this;
            return Object(s.a)(
              a.a.mark(function n() {
                var r;
                return a.a.wrap(
                  function (n) {
                    for (;;)
                      switch ((n.prev = n.next)) {
                        case 0:
                          return (
                            (n.prev = 0),
                            (n.next = 3),
                            i.a.get(t.templateParametersPath(e))
                          );
                        case 3:
                          if (200 !== (r = n.sent).status) {
                            n.next = 6;
                            break;
                          }
                          return n.abrupt('return', r.data);
                        case 6:
                          throw new Error(
                            'Server response: '
                              .concat(r.status, ' - ')
                              .concat(r.statusText)
                          );
                        case 9:
                          throw (
                            ((n.prev = 9),
                            (n.t0 = n.catch(0)),
                            u.a.notifyError(
                              n.t0.response &&
                                n.t0.response.data &&
                                n.t0.response.data.error
                            ),
                            n.t0)
                          );
                        case 13:
                        case 'end':
                          return n.stop();
                      }
                  },
                  n,
                  null,
                  [[0, 9]]
                );
              })
            )();
          },
          generateTemplate: function (e) {
            var t = this;
            return Object(s.a)(
              a.a.mark(function n() {
                var r;
                return a.a.wrap(
                  function (n) {
                    for (;;)
                      switch ((n.prev = n.next)) {
                        case 0:
                          return (
                            (n.prev = 0),
                            (n.next = 3),
                            i.a.post(t.generateTemplatePath, e, {
                              headers: {
                                'Content-Type': 'multipart/form-data',
                              },
                              responseType: 'blob',
                            })
                          );
                        case 3:
                          if (200 !== (r = n.sent).status) {
                            n.next = 7;
                            break;
                          }
                          return (
                            u.a.notifySuccess(
                              'Tempalte successfully generated'
                            ),
                            n.abrupt('return', r.data)
                          );
                        case 7:
                          throw new Error(
                            'Server response: '
                              .concat(r.status, ' - ')
                              .concat(r.statusText)
                          );
                        case 10:
                          throw (
                            ((n.prev = 10),
                            (n.t0 = n.catch(0)),
                            u.a.notifyError(
                              n.t0.response &&
                                n.t0.response.data &&
                                n.t0.response.data.error
                            ),
                            n.t0)
                          );
                        case 14:
                        case 'end':
                          return n.stop();
                      }
                  },
                  n,
                  null,
                  [[0, 10]]
                );
              })
            )();
          },
          getSample: function (e) {
            var t = this;
            return Object(s.a)(
              a.a.mark(function n() {
                var r;
                return a.a.wrap(
                  function (n) {
                    for (;;)
                      switch ((n.prev = n.next)) {
                        case 0:
                          return (
                            (n.prev = 0),
                            (n.next = 3),
                            i.a.post(t.templateSamplePath, { aggregation: e })
                          );
                        case 3:
                          if (200 !== (r = n.sent).status) {
                            n.next = 6;
                            break;
                          }
                          return n.abrupt('return', r.data);
                        case 6:
                          throw new Error(
                            'Server response: '
                              .concat(r.status, ' - ')
                              .concat(r.statusText)
                          );
                        case 9:
                          throw (
                            ((n.prev = 9),
                            (n.t0 = n.catch(0)),
                            u.a.notifyError(
                              n.t0.response &&
                                n.t0.response.data &&
                                n.t0.response.data.error
                            ),
                            n.t0)
                          );
                        case 13:
                        case 'end':
                          return n.stop();
                      }
                  },
                  n,
                  null,
                  [[0, 9]]
                );
              })
            )();
          },
          appraisalReportPath: '/api/reporting/reports/appraisal-report',
          reportPath: function (e) {
            return '/api/reporting/reports/'.concat(e);
          },
          postReportGeneratePath: function (e) {
            return '/api/reporting/reports/'.concat(e, '/generate');
          },
          reportsPath: '/api/reporting/reports',
          generateAppraisalReport: function (e) {
            var t = this;
            return Object(s.a)(
              a.a.mark(function n() {
                var r;
                return a.a.wrap(
                  function (n) {
                    for (;;)
                      switch ((n.prev = n.next)) {
                        case 0:
                          return (
                            (n.prev = 0),
                            (n.next = 3),
                            i.a.post(t.appraisalReportPath, e, {
                              responseType: 'blob',
                            })
                          );
                        case 3:
                          if (200 !== (r = n.sent).status) {
                            n.next = 6;
                            break;
                          }
                          return n.abrupt('return', r.data);
                        case 6:
                          if (204 !== r.status) {
                            n.next = 9;
                            break;
                          }
                          return (
                            u.a.notifyError(
                              'No data available for this filter'
                            ),
                            n.abrupt('return', null)
                          );
                        case 9:
                          throw new Error(
                            'Server response: '
                              .concat(r.status, ' - ')
                              .concat(r.statusText)
                          );
                        case 12:
                          return (
                            (n.prev = 12),
                            (n.t0 = n.catch(0)),
                            n.t0.response && 400 === n.t0.response.status
                              ? u.a.notifyError('Invalid filters provided')
                              : u.a.notifyError(n.t0.message),
                            n.abrupt('return', null)
                          );
                        case 16:
                        case 'end':
                          return n.stop();
                      }
                  },
                  n,
                  null,
                  [[0, 12]]
                );
              })
            )();
          },
          getReports: function () {
            var e = this;
            return Object(s.a)(
              a.a.mark(function t() {
                var n;
                return a.a.wrap(
                  function (t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          return (
                            (t.prev = 0), (t.next = 3), i.a.get(e.reportsPath)
                          );
                        case 3:
                          if (200 !== (n = t.sent).status) {
                            t.next = 6;
                            break;
                          }
                          return t.abrupt('return', n.data);
                        case 6:
                          throw new Error(
                            'Server response: '
                              .concat(n.status, ' - ')
                              .concat(n.statusText)
                          );
                        case 9:
                          throw (
                            ((t.prev = 9),
                            (t.t0 = t.catch(0)),
                            u.a.notifyError(
                              t.t0.response &&
                                t.t0.response.data &&
                                t.t0.response.data.error
                            ),
                            t.t0)
                          );
                        case 13:
                        case 'end':
                          return t.stop();
                      }
                  },
                  t,
                  null,
                  [[0, 9]]
                );
              })
            )();
          },
          getReport: function (e) {
            var t = this;
            return Object(s.a)(
              a.a.mark(function n() {
                var r;
                return a.a.wrap(
                  function (n) {
                    for (;;)
                      switch ((n.prev = n.next)) {
                        case 0:
                          return (
                            (n.prev = 0), (n.next = 3), i.a.get(t.reportPath(e))
                          );
                        case 3:
                          if (200 !== (r = n.sent).status) {
                            n.next = 6;
                            break;
                          }
                          return n.abrupt('return', r.data);
                        case 6:
                          throw new Error(
                            'Server response: '
                              .concat(r.status, ' - ')
                              .concat(r.statusText)
                          );
                        case 9:
                          throw (
                            ((n.prev = 9),
                            (n.t0 = n.catch(0)),
                            u.a.notifyError(
                              n.t0.response &&
                                n.t0.response.data &&
                                n.t0.response.data.error
                            ),
                            n.t0)
                          );
                        case 13:
                        case 'end':
                          return n.stop();
                      }
                  },
                  n,
                  null,
                  [[0, 9]]
                );
              })
            )();
          },
          addReport: function (e) {
            var t = this;
            return Object(s.a)(
              a.a.mark(function n() {
                var r;
                return a.a.wrap(
                  function (n) {
                    for (;;)
                      switch ((n.prev = n.next)) {
                        case 0:
                          return (
                            (n.prev = 0),
                            (n.next = 3),
                            i.a.post(t.reportsPath, e, {
                              headers: {
                                'Content-Type': 'multipart/form-data',
                              },
                            })
                          );
                        case 3:
                          return (r = n.sent), n.abrupt('return', r.data);
                        case 7:
                          throw (
                            ((n.prev = 7),
                            (n.t0 = n.catch(0)),
                            u.a.notifyError(
                              n.t0.response &&
                                n.t0.response.data &&
                                n.t0.response.data.error
                            ),
                            n.t0)
                          );
                        case 11:
                        case 'end':
                          return n.stop();
                      }
                  },
                  n,
                  null,
                  [[0, 7]]
                );
              })
            )();
          },
          updateReport: function (e, t) {
            var n = this;
            return Object(s.a)(
              a.a.mark(function r() {
                var s;
                return a.a.wrap(
                  function (r) {
                    for (;;)
                      switch ((r.prev = r.next)) {
                        case 0:
                          return (
                            (r.prev = 0),
                            (r.next = 3),
                            i.a.put(n.reportPath(e), t)
                          );
                        case 3:
                          return (s = r.sent), r.abrupt('return', s.data);
                        case 7:
                          throw (
                            ((r.prev = 7),
                            (r.t0 = r.catch(0)),
                            u.a.notifyError(
                              r.t0.response &&
                                r.t0.response.data &&
                                r.t0.response.data.error
                            ),
                            r.t0)
                          );
                        case 11:
                        case 'end':
                          return r.stop();
                      }
                  },
                  r,
                  null,
                  [[0, 7]]
                );
              })
            )();
          },
          generateReport: function (e, t) {
            var n = this;
            return Object(s.a)(
              a.a.mark(function r() {
                var s;
                return a.a.wrap(
                  function (r) {
                    for (;;)
                      switch ((r.prev = r.next)) {
                        case 0:
                          return (
                            (r.prev = 0),
                            (r.next = 3),
                            i.a.post(n.postReportGeneratePath(e), t, {
                              responseType: 'blob',
                            })
                          );
                        case 3:
                          if (200 !== (s = r.sent).status) {
                            r.next = 6;
                            break;
                          }
                          return r.abrupt('return', s.data);
                        case 6:
                          throw new Error(
                            'Server response: '
                              .concat(s.status, ' - ')
                              .concat(s.statusText)
                          );
                        case 9:
                          throw (
                            ((r.prev = 9),
                            (r.t0 = r.catch(0)),
                            u.a.notifyError(
                              r.t0.response &&
                                r.t0.response.data &&
                                r.t0.response.data.error
                            ),
                            r.t0)
                          );
                        case 13:
                        case 'end':
                          return r.stop();
                      }
                  },
                  r,
                  null,
                  [[0, 9]]
                );
              })
            )();
          },
        };
      t.a = l;
    },
    33: function (e, t, n) {
      'use strict';
      var r = n(4),
        a = n(3),
        s = n.n(a),
        c = n(6),
        i = n(13),
        o = n.n(i),
        u = n(11),
        l = n(16);
      function d(e) {
        (this.id = e.id ? e.id : 0),
          (this.type = e.type),
          (this.status = e.status ? e.status : 'Active'),
          (this.content = e.content ? e.content : ''),
          (this.periodId = e.periodId),
          (this.organizationId = e.organizationId ? e.organizationId : null),
          (this.user = e.user),
          (this.modifiedUser = e.modifiedUser ? e.modifiedUser : null),
          (this.modifiedDate = e.modifiedDate ? e.modifiedDate : null),
          (this.createdUser = e.createdUser ? e.createdUser : e.user),
          (this.createdDate = e.createdDate ? e.createdDate : new Date());
      }
      var p = {
        getPeriodsPath: '/api/periods',
        addPeriodsPath: '/api/periods',
        periodPath: function (e) {
          return '/api/periods/'.concat(e);
        },
        periodFinishPath: function (e) {
          return '/api/periods/'.concat(e, '/finish');
        },
        getItemsPath: function (e) {
          return '/api/periods/'.concat(e);
        },
        getUserItemsPath: function (e, t) {
          return '/api/periods/'.concat(e, '/users/').concat(t);
        },
        toggleLockPeriodPath: function (e, t) {
          return '/api/periods/'.concat(e, '/users/').concat(t, '/toggle-lock');
        },
        getItemPath: function (e, t) {
          return '/api/periods/'.concat(e, '/items/').concat(t);
        },
        getOrphansPath: '/api/appraisal-items',
        addItemPath: '/api/appraisal-items',
        updateItemPath: function (e) {
          return '/api/appraisal-items/'.concat(e);
        },
        deleteItemPath: function (e) {
          return '/api/appraisal-items/'.concat(e);
        },
        addItemToPeriodPath: function (e) {
          return '/api/periods/'.concat(e, '/items');
        },
        addUserItemPath: function (e, t) {
          return '/api/periods/'.concat(e, '/users/').concat(t, '/items');
        },
        updateItemInPeriodPath: function (e, t) {
          return '/api/periods/'.concat(e, '/items/').concat(t);
        },
        updateUserItemPath: function (e, t, n) {
          return '/api/periods/'
            .concat(e, '/users/')
            .concat(t, '/items/')
            .concat(n);
        },
        deleteItemFromPeriodPath: function (e, t) {
          return '/api/periods/'.concat(e, '/items/').concat(t);
        },
        deleteUserItemPath: function (e, t, n) {
          return '/api/periods/'
            .concat(e, '/users/')
            .concat(t, '/items/')
            .concat(n);
        },
        updateItemTypePath: function (e, t) {
          return '/api/periods/'.concat(e, '/items/').concat(t, '/change-type');
        },
        updateUserItemTypePath: function (e, t, n) {
          return '/api/periods/'
            .concat(e, '/users/')
            .concat(t, '/items/')
            .concat(n, '/change-type');
        },
        getPeriods: function () {
          var e = this;
          return Object(c.a)(
            s.a.mark(function t() {
              var n;
              return s.a.wrap(
                function (t) {
                  for (;;)
                    switch ((t.prev = t.next)) {
                      case 0:
                        return (
                          (t.prev = 0), (t.next = 3), o.a.get(e.getPeriodsPath)
                        );
                      case 3:
                        if (200 !== (n = t.sent).status) {
                          t.next = 6;
                          break;
                        }
                        return t.abrupt('return', n.data);
                      case 6:
                        throw new Error(
                          'Server response: '
                            .concat(n.status, ' - ')
                            .concat(n.statusText)
                        );
                      case 9:
                        throw (
                          ((t.prev = 9),
                          (t.t0 = t.catch(0)),
                          u.a.notifyError(
                            (t.t0.response && t.t0.response.data.error) ||
                              t.t0.message
                          ),
                          t.t0)
                        );
                      case 13:
                      case 'end':
                        return t.stop();
                    }
                },
                t,
                null,
                [[0, 9]]
              );
            })
          )();
        },
        getItems: function (e) {
          var t = this;
          return Object(c.a)(
            s.a.mark(function n() {
              var r;
              return s.a.wrap(
                function (n) {
                  for (;;)
                    switch ((n.prev = n.next)) {
                      case 0:
                        return (
                          (n.prev = 0), (n.next = 3), o.a.get(t.getItemsPath(e))
                        );
                      case 3:
                        if (200 !== (r = n.sent).status) {
                          n.next = 6;
                          break;
                        }
                        return n.abrupt('return', r.data);
                      case 6:
                        throw new Error(
                          'Server response: '
                            .concat(r.status, ' - ')
                            .concat(r.statusText)
                        );
                      case 9:
                        throw (
                          ((n.prev = 9),
                          (n.t0 = n.catch(0)),
                          u.a.notifyError(
                            (n.t0.response && n.t0.response.data.error) ||
                              n.t0.message
                          ),
                          n.t0)
                        );
                      case 13:
                      case 'end':
                        return n.stop();
                    }
                },
                n,
                null,
                [[0, 9]]
              );
            })
          )();
        },
        getOrphans: function () {
          var e = arguments,
            t = this;
          return Object(c.a)(
            s.a.mark(function n() {
              var r, a;
              return s.a.wrap(
                function (n) {
                  for (;;)
                    switch ((n.prev = n.next)) {
                      case 0:
                        return (
                          (r = e.length > 0 && void 0 !== e[0] ? e[0] : null),
                          (n.prev = 1),
                          (n.next = 4),
                          o.a.get(t.getOrphansPath, { params: { type: r } })
                        );
                      case 4:
                        if (200 !== (a = n.sent).status) {
                          n.next = 7;
                          break;
                        }
                        return n.abrupt('return', a.data);
                      case 7:
                        throw new Error(
                          'Server response: '
                            .concat(a.status, ' - ')
                            .concat(a.statusText)
                        );
                      case 10:
                        throw (
                          ((n.prev = 10),
                          (n.t0 = n.catch(1)),
                          u.a.notifyError(
                            (n.t0.response && n.t0.response.data.error) ||
                              n.t0.message
                          ),
                          n.t0)
                        );
                      case 14:
                      case 'end':
                        return n.stop();
                    }
                },
                n,
                null,
                [[1, 10]]
              );
            })
          )();
        },
        getUserItems: function (e, t) {
          var n = this;
          return Object(c.a)(
            s.a.mark(function r() {
              var a;
              return s.a.wrap(
                function (r) {
                  for (;;)
                    switch ((r.prev = r.next)) {
                      case 0:
                        return (
                          (r.prev = 0),
                          (r.next = 3),
                          o.a.get(n.getUserItemsPath(e, t))
                        );
                      case 3:
                        if (200 !== (a = r.sent).status) {
                          r.next = 6;
                          break;
                        }
                        return r.abrupt('return', a.data);
                      case 6:
                        throw new Error(
                          'Server response: '
                            .concat(a.status, ' - ')
                            .concat(a.statusText)
                        );
                      case 9:
                        throw (
                          ((r.prev = 9),
                          (r.t0 = r.catch(0)),
                          u.a.notifyError(
                            (r.t0.response && r.t0.response.data.error) ||
                              r.t0.message
                          ),
                          r.t0)
                        );
                      case 13:
                      case 'end':
                        return r.stop();
                    }
                },
                r,
                null,
                [[0, 9]]
              );
            })
          )();
        },
        getItem: function (e, t) {
          var n = this;
          return Object(c.a)(
            s.a.mark(function r() {
              var a;
              return s.a.wrap(
                function (r) {
                  for (;;)
                    switch ((r.prev = r.next)) {
                      case 0:
                        return (
                          (r.prev = 0),
                          (r.next = 3),
                          o.a.get(n.getItemPath(e, t))
                        );
                      case 3:
                        if (200 !== (a = r.sent).status) {
                          r.next = 6;
                          break;
                        }
                        return r.abrupt('return', a.data);
                      case 6:
                        throw new Error(
                          'Server response: '
                            .concat(a.status, ' - ')
                            .concat(a.statusText)
                        );
                      case 9:
                        throw (
                          ((r.prev = 9),
                          (r.t0 = r.catch(0)),
                          u.a.notifyError(
                            (r.t0.response && r.t0.response.data.error) ||
                              r.t0.message
                          ),
                          r.t0)
                        );
                      case 13:
                      case 'end':
                        return r.stop();
                    }
                },
                r,
                null,
                [[0, 9]]
              );
            })
          )();
        },
        addItem: function (e, t) {
          var n = this;
          return Object(c.a)(
            s.a.mark(function a() {
              var c, i;
              return s.a.wrap(
                function (a) {
                  for (;;)
                    switch ((a.prev = a.next)) {
                      case 0:
                        return (
                          (a.prev = 0),
                          (c = Object(l.a)([
                            l.e.itemContentNotNull(t),
                            l.e.isTruthy(t.user),
                          ])),
                          (a.next = 4),
                          Object(l.d)(c)
                        );
                      case 4:
                        return (
                          (a.next = 6),
                          o.a.post(n.addItemToPeriodPath(e), Object(r.a)({}, t))
                        );
                      case 6:
                        if (200 !== (i = a.sent).status) {
                          a.next = 9;
                          break;
                        }
                        return a.abrupt('return', i.data);
                      case 9:
                        throw new Error(
                          'Server response: '
                            .concat(i.status, ' - ')
                            .concat(i.statusText)
                        );
                      case 12:
                        throw (
                          ((a.prev = 12),
                          (a.t0 = a.catch(0)),
                          u.a.notifyError(
                            (a.t0.response && a.t0.response.data.error) ||
                              a.t0.message
                          ),
                          a.t0)
                        );
                      case 16:
                      case 'end':
                        return a.stop();
                    }
                },
                a,
                null,
                [[0, 12]]
              );
            })
          )();
        },
        addOrphan: function (e) {
          var t = this;
          return Object(c.a)(
            s.a.mark(function n() {
              var r;
              return s.a.wrap(
                function (n) {
                  for (;;)
                    switch ((n.prev = n.next)) {
                      case 0:
                        return (
                          (n.prev = 0), (n.next = 3), o.a.post(t.addItemPath, e)
                        );
                      case 3:
                        if (200 !== (r = n.sent).status) {
                          n.next = 6;
                          break;
                        }
                        return n.abrupt('return', r.data);
                      case 6:
                        throw new Error(
                          'Server response: '
                            .concat(r.status, ' - ')
                            .concat(r.statusText)
                        );
                      case 9:
                        throw (
                          ((n.prev = 9),
                          (n.t0 = n.catch(0)),
                          u.a.notifyError(
                            (n.t0.response && n.t0.response.data.error) ||
                              n.t0.message
                          ),
                          n.t0)
                        );
                      case 13:
                      case 'end':
                        return n.stop();
                    }
                },
                n,
                null,
                [[0, 9]]
              );
            })
          )();
        },
        addUserItem: function (e, t, n) {
          var a = this;
          return Object(c.a)(
            s.a.mark(function c() {
              var i, d;
              return s.a.wrap(
                function (s) {
                  for (;;)
                    switch ((s.prev = s.next)) {
                      case 0:
                        return (
                          (s.prev = 0),
                          (i = Object(l.a)([
                            l.e.itemContentNotNull(n),
                            l.e.isTruthy(n.user),
                          ])),
                          (s.next = 4),
                          Object(l.d)(i)
                        );
                      case 4:
                        return (
                          (s.next = 6),
                          o.a.post(a.addUserItemPath(e, t), Object(r.a)({}, n))
                        );
                      case 6:
                        if (200 !== (d = s.sent).status) {
                          s.next = 9;
                          break;
                        }
                        return s.abrupt('return', d.data);
                      case 9:
                        throw new Error(
                          'Server response: '
                            .concat(d.status, ' - ')
                            .concat(d.statusText)
                        );
                      case 12:
                        throw (
                          ((s.prev = 12),
                          (s.t0 = s.catch(0)),
                          u.a.notifyError(
                            (s.t0.response && s.t0.response.data.error) ||
                              s.t0.message
                          ),
                          s.t0)
                        );
                      case 16:
                      case 'end':
                        return s.stop();
                    }
                },
                c,
                null,
                [[0, 12]]
              );
            })
          )();
        },
        updateItemInPeriod: function (e, t) {
          var n = this;
          return Object(c.a)(
            s.a.mark(function a() {
              var c, i;
              return s.a.wrap(
                function (a) {
                  for (;;)
                    switch ((a.prev = a.next)) {
                      case 0:
                        return (
                          (a.prev = 0),
                          (c = Object(l.a)([
                            l.e.itemContentNotNull(t),
                            l.e.isTruthy(t.user),
                            l.e.isTruthy(t.periodId),
                          ])),
                          (a.next = 4),
                          Object(l.d)(c)
                        );
                      case 4:
                        return (
                          (a.next = 6),
                          o.a.put(
                            n.updateItemInPeriodPath(e, t.id),
                            Object(r.a)({}, t)
                          )
                        );
                      case 6:
                        if (200 !== (i = a.sent).status) {
                          a.next = 9;
                          break;
                        }
                        return a.abrupt('return', i.data);
                      case 9:
                        throw new Error(
                          'Server response: '
                            .concat(i.status, ' - ')
                            .concat(i.statusText)
                        );
                      case 12:
                        throw (
                          ((a.prev = 12),
                          (a.t0 = a.catch(0)),
                          u.a.notifyError(
                            (a.t0.response && a.t0.response.data.error) ||
                              a.t0.message
                          ),
                          a.t0)
                        );
                      case 16:
                      case 'end':
                        return a.stop();
                    }
                },
                a,
                null,
                [[0, 12]]
              );
            })
          )();
        },
        updateItem: function (e) {
          var t = this;
          return Object(c.a)(
            s.a.mark(function n() {
              var r, a;
              return s.a.wrap(
                function (n) {
                  for (;;)
                    switch ((n.prev = n.next)) {
                      case 0:
                        return (
                          (n.prev = 0),
                          (r = Object(l.a)([
                            l.e.itemContentNotNull(e),
                            l.e.isTruthy(e.user),
                          ])),
                          (n.next = 4),
                          Object(l.d)(r)
                        );
                      case 4:
                        return (n.next = 6), o.a.put(t.updateItemPath(e.id), e);
                      case 6:
                        if (200 !== (a = n.sent).status) {
                          n.next = 9;
                          break;
                        }
                        return n.abrupt('return', a.data);
                      case 9:
                        throw new Error(
                          'Server response: '
                            .concat(a.status, ' - ')
                            .concat(a.statusText)
                        );
                      case 12:
                        throw (
                          ((n.prev = 12),
                          (n.t0 = n.catch(0)),
                          u.a.notifyError(
                            (n.t0.response && n.t0.response.data.error) ||
                              n.t0.message
                          ),
                          n.t0)
                        );
                      case 16:
                      case 'end':
                        return n.stop();
                    }
                },
                n,
                null,
                [[0, 12]]
              );
            })
          )();
        },
        updateUserItem: function (e, t, n) {
          var a = this;
          return Object(c.a)(
            s.a.mark(function c() {
              var i, d;
              return s.a.wrap(
                function (s) {
                  for (;;)
                    switch ((s.prev = s.next)) {
                      case 0:
                        return (
                          (s.prev = 0),
                          (i = Object(l.a)([
                            l.e.itemContentNotNull(n),
                            l.e.isTruthy(n.user),
                          ])),
                          (s.next = 4),
                          Object(l.d)(i)
                        );
                      case 4:
                        return (
                          (s.next = 6),
                          o.a.put(
                            a.updateUserItemPath(e, t, n.id),
                            Object(r.a)({}, n)
                          )
                        );
                      case 6:
                        if (200 !== (d = s.sent).status) {
                          s.next = 9;
                          break;
                        }
                        return s.abrupt('return', d.data);
                      case 9:
                        throw new Error(
                          'Server response: '
                            .concat(d.status, ' - ')
                            .concat(d.statusText)
                        );
                      case 12:
                        throw (
                          ((s.prev = 12),
                          (s.t0 = s.catch(0)),
                          u.a.notifyError(
                            (s.t0.response && s.t0.response.data.error) ||
                              s.t0.message
                          ),
                          s.t0)
                        );
                      case 16:
                      case 'end':
                        return s.stop();
                    }
                },
                c,
                null,
                [[0, 12]]
              );
            })
          )();
        },
        updateItemType: function (e, t) {
          var n = this;
          return Object(c.a)(
            s.a.mark(function r() {
              var a, c;
              return s.a.wrap(
                function (r) {
                  for (;;)
                    switch ((r.prev = r.next)) {
                      case 0:
                        return (
                          (r.prev = 0),
                          (a = Object(l.a)([
                            l.e.itemContentNotNull(t),
                            l.e.isTruthy(t.user),
                          ])),
                          (r.next = 4),
                          Object(l.d)(a)
                        );
                      case 4:
                        return (
                          (r.next = 6),
                          o.a.post(n.updateItemTypePath(e, t.id), {
                            type: t.type,
                          })
                        );
                      case 6:
                        if (200 !== (c = r.sent).status) {
                          r.next = 9;
                          break;
                        }
                        return r.abrupt('return', c.data);
                      case 9:
                        throw new Error(
                          'Server response: '
                            .concat(c.status, ' - ')
                            .concat(c.statusText)
                        );
                      case 12:
                        throw (
                          ((r.prev = 12),
                          (r.t0 = r.catch(0)),
                          u.a.notifyError(
                            (r.t0.response && r.t0.response.data.error) ||
                              r.t0.message
                          ),
                          r.t0)
                        );
                      case 16:
                      case 'end':
                        return r.stop();
                    }
                },
                r,
                null,
                [[0, 12]]
              );
            })
          )();
        },
        updateUserItemType: function (e, t, n) {
          var r = this;
          return Object(c.a)(
            s.a.mark(function a() {
              var c, i;
              return s.a.wrap(
                function (a) {
                  for (;;)
                    switch ((a.prev = a.next)) {
                      case 0:
                        return (
                          (a.prev = 0),
                          (c = Object(l.a)([
                            l.e.itemContentNotNull(n),
                            l.e.isTruthy(n.user),
                          ])),
                          (a.next = 4),
                          Object(l.d)(c)
                        );
                      case 4:
                        return (
                          (a.next = 6),
                          o.a.post(r.updateUserItemTypePath(e, t, n.id), {
                            type: n.type,
                          })
                        );
                      case 6:
                        if (200 !== (i = a.sent).status) {
                          a.next = 9;
                          break;
                        }
                        return a.abrupt('return', i.data);
                      case 9:
                        throw new Error(
                          'Server response: '
                            .concat(i.status, ' - ')
                            .concat(i.statusText)
                        );
                      case 12:
                        throw (
                          ((a.prev = 12),
                          (a.t0 = a.catch(0)),
                          u.a.notifyError(
                            (a.t0.response && a.t0.response.data.error) ||
                              a.t0.message
                          ),
                          a.t0)
                        );
                      case 16:
                      case 'end':
                        return a.stop();
                    }
                },
                a,
                null,
                [[0, 12]]
              );
            })
          )();
        },
        deleteItemFromPeriod: function (e, t) {
          var n = this;
          return Object(c.a)(
            s.a.mark(function r() {
              var a;
              return s.a.wrap(
                function (r) {
                  for (;;)
                    switch ((r.prev = r.next)) {
                      case 0:
                        return (
                          (r.prev = 0),
                          (r.next = 3),
                          o.a.delete(n.deleteItemFromPeriodPath(e, t))
                        );
                      case 3:
                        if (204 !== (a = r.sent).status) {
                          r.next = 6;
                          break;
                        }
                        return r.abrupt('return', a.data);
                      case 6:
                        throw new Error(
                          'Server response: '
                            .concat(a.status, ' - ')
                            .concat(a.statusText)
                        );
                      case 9:
                        throw (
                          ((r.prev = 9),
                          (r.t0 = r.catch(0)),
                          u.a.notifyError(
                            (r.t0.response && r.t0.response.data.error) ||
                              r.t0.message
                          ),
                          r.t0)
                        );
                      case 13:
                      case 'end':
                        return r.stop();
                    }
                },
                r,
                null,
                [[0, 9]]
              );
            })
          )();
        },
        deleteItem: function (e) {
          var t = this;
          return Object(c.a)(
            s.a.mark(function n() {
              var r;
              return s.a.wrap(
                function (n) {
                  for (;;)
                    switch ((n.prev = n.next)) {
                      case 0:
                        return (
                          (n.prev = 0),
                          (n.next = 3),
                          o.a.delete(t.deleteItemPath(e))
                        );
                      case 3:
                        if (204 !== (r = n.sent).status) {
                          n.next = 6;
                          break;
                        }
                        return n.abrupt('return', r.data);
                      case 6:
                        throw new Error(
                          'Server response: '
                            .concat(r.status, ' - ')
                            .concat(r.statusText)
                        );
                      case 9:
                        throw (
                          ((n.prev = 9),
                          (n.t0 = n.catch(0)),
                          u.a.notifyError(
                            (n.t0.response && n.t0.response.data.error) ||
                              n.t0.message
                          ),
                          n.t0)
                        );
                      case 13:
                      case 'end':
                        return n.stop();
                    }
                },
                n,
                null,
                [[0, 9]]
              );
            })
          )();
        },
        deleteUserItem: function (e, t, n) {
          var r = this;
          return Object(c.a)(
            s.a.mark(function a() {
              var c;
              return s.a.wrap(
                function (a) {
                  for (;;)
                    switch ((a.prev = a.next)) {
                      case 0:
                        return (
                          (a.prev = 0),
                          (a.next = 3),
                          o.a.delete(r.deleteUserItemPath(e, t, n))
                        );
                      case 3:
                        if (204 !== (c = a.sent).status) {
                          a.next = 6;
                          break;
                        }
                        return a.abrupt('return', c.data);
                      case 6:
                        throw new Error(
                          'Server response: '
                            .concat(c.status, ' - ')
                            .concat(c.statusText)
                        );
                      case 9:
                        throw (
                          ((a.prev = 9),
                          (a.t0 = a.catch(0)),
                          u.a.notifyError(
                            (a.t0.response && a.t0.response.data.error) ||
                              a.t0.message
                          ),
                          a.t0)
                        );
                      case 13:
                      case 'end':
                        return a.stop();
                    }
                },
                a,
                null,
                [[0, 9]]
              );
            })
          )();
        },
        addPeriod: function (e) {
          var t = this;
          return Object(c.a)(
            s.a.mark(function n() {
              var r;
              return s.a.wrap(
                function (n) {
                  for (;;)
                    switch ((n.prev = n.next)) {
                      case 0:
                        return (
                          (n.prev = 0),
                          (n.next = 3),
                          o.a.post(t.addPeriodsPath, e)
                        );
                      case 3:
                        if (200 !== (r = n.sent).status) {
                          n.next = 6;
                          break;
                        }
                        return n.abrupt('return', r.data);
                      case 6:
                        throw new Error(
                          'Server response: '
                            .concat(r.status, ' - ')
                            .concat(r.statusText)
                        );
                      case 9:
                        throw (
                          ((n.prev = 9),
                          (n.t0 = n.catch(0)),
                          u.a.notifyError(
                            (n.t0.response && n.t0.response.data.error) ||
                              n.t0.message
                          ),
                          n.t0)
                        );
                      case 13:
                      case 'end':
                        return n.stop();
                    }
                },
                n,
                null,
                [[0, 9]]
              );
            })
          )();
        },
        updatePeriod: function (e, t) {
          var n = this;
          return Object(c.a)(
            s.a.mark(function r() {
              var a;
              return s.a.wrap(
                function (r) {
                  for (;;)
                    switch ((r.prev = r.next)) {
                      case 0:
                        return (
                          (r.prev = 0),
                          (r.next = 3),
                          o.a.put(n.periodPath(e), t)
                        );
                      case 3:
                        if (200 !== (a = r.sent).status) {
                          r.next = 6;
                          break;
                        }
                        return r.abrupt('return', a.data);
                      case 6:
                        throw new Error(
                          'Server response: '
                            .concat(a.status, ' - ')
                            .concat(a.statusText)
                        );
                      case 9:
                        throw (
                          ((r.prev = 9),
                          (r.t0 = r.catch(0)),
                          u.a.notifyError(
                            (r.t0.response && r.t0.response.data.error) ||
                              r.t0.message
                          ),
                          r.t0)
                        );
                      case 13:
                      case 'end':
                        return r.stop();
                    }
                },
                r,
                null,
                [[0, 9]]
              );
            })
          )();
        },
        finishPeriod: function (e) {
          var t = this;
          return Object(c.a)(
            s.a.mark(function n() {
              var r;
              return s.a.wrap(
                function (n) {
                  for (;;)
                    switch ((n.prev = n.next)) {
                      case 0:
                        return (
                          (n.prev = 0),
                          (n.next = 3),
                          o.a.post(t.periodFinishPath(e), null, {
                            timeout: 2e5,
                          })
                        );
                      case 3:
                        if (200 !== (r = n.sent).status) {
                          n.next = 6;
                          break;
                        }
                        return n.abrupt('return', !0);
                      case 6:
                        throw new Error(
                          'Server response: '
                            .concat(r.status, ' - ')
                            .concat(r.statusText)
                        );
                      case 9:
                        throw (
                          ((n.prev = 9),
                          (n.t0 = n.catch(0)),
                          u.a.notifyError(
                            (n.t0.response && n.t0.response.data.error) ||
                              n.t0.message
                          ),
                          n.t0)
                        );
                      case 13:
                      case 'end':
                        return n.stop();
                    }
                },
                n,
                null,
                [[0, 9]]
              );
            })
          )();
        },
        toggleLockPeriod: function (e, t) {
          var n = this;
          return Object(c.a)(
            s.a.mark(function r() {
              var a;
              return s.a.wrap(
                function (r) {
                  for (;;)
                    switch ((r.prev = r.next)) {
                      case 0:
                        if (((r.prev = 0), t)) {
                          r.next = 3;
                          break;
                        }
                        throw new Error('User is unknown');
                      case 3:
                        return (
                          (r.next = 5), o.a.post(n.toggleLockPeriodPath(e, t))
                        );
                      case 5:
                        if (200 !== (a = r.sent).status) {
                          r.next = 8;
                          break;
                        }
                        return r.abrupt('return', a.data);
                      case 8:
                        throw new Error(
                          'Server response: '
                            .concat(a.status, ' - ')
                            .concat(a.statusText)
                        );
                      case 11:
                        throw (
                          ((r.prev = 11),
                          (r.t0 = r.catch(0)),
                          u.a.notifyError(
                            (r.t0.response && r.t0.response.data.error) ||
                              r.t0.message
                          ),
                          r.t0)
                        );
                      case 15:
                      case 'end':
                        return r.stop();
                    }
                },
                r,
                null,
                [[0, 11]]
              );
            })
          )();
        },
        blankItem: function (e, t, n) {
          var r =
            arguments.length > 3 && void 0 !== arguments[3]
              ? arguments[3]
              : 'Active';
          return new d({
            type: n,
            status: r,
            periodId: e,
            user: t ? t.id : null,
          });
        },
        normalizeSet: function (e, t, n, r, a) {
          var s = n.slice().filter(function (e) {
            return null !== e.user;
          });
          if (!t) return s;
          if ('Feedback' === a && n.length > 0) return s;
          0 ===
            s
              .map(function (e, t) {
                return t;
              })
              .filter(function (e) {
                return '' === s[e].content;
              }).length && s.push(this.blankItem(e, t, a));
          for (var c = r - s.length; c > 0; )
            s.push(this.blankItem(e, t, a)), (c -= 1);
          return s;
        },
        addItemToSet: function (e, t) {
          var n = this;
          return Object(c.a)(
            s.a.mark(function r() {
              var a;
              return s.a.wrap(
                function (r) {
                  for (;;)
                    switch ((r.prev = r.next)) {
                      case 0:
                        return (r.prev = 0), (r.next = 3), n.addItem(e, t);
                      case 3:
                        return (
                          (a = r.sent),
                          r.abrupt('return', { value: a, error: null })
                        );
                      case 7:
                        return (
                          (r.prev = 7),
                          (r.t0 = r.catch(0)),
                          r.abrupt('return', { value: null, error: r.t0 })
                        );
                      case 10:
                      case 'end':
                        return r.stop();
                    }
                },
                r,
                null,
                [[0, 7]]
              );
            })
          )();
        },
        addUserItemToSet: function (e, t, n) {
          var r = this;
          return Object(c.a)(
            s.a.mark(function a() {
              var c;
              return s.a.wrap(
                function (a) {
                  for (;;)
                    switch ((a.prev = a.next)) {
                      case 0:
                        return (
                          (a.prev = 0), (a.next = 3), r.addUserItem(e, t, n)
                        );
                      case 3:
                        return (
                          (c = a.sent),
                          a.abrupt('return', { value: c, error: null })
                        );
                      case 7:
                        return (
                          (a.prev = 7),
                          (a.t0 = a.catch(0)),
                          a.abrupt('return', { value: null, error: a.t0 })
                        );
                      case 10:
                      case 'end':
                        return a.stop();
                    }
                },
                a,
                null,
                [[0, 7]]
              );
            })
          )();
        },
        deleteItemFromSet: function (e, t) {
          var n = this;
          return Object(c.a)(
            s.a.mark(function r() {
              var a;
              return s.a.wrap(
                function (r) {
                  for (;;)
                    switch ((r.prev = r.next)) {
                      case 0:
                        return (
                          (r.prev = 0),
                          (r.next = 3),
                          n.deleteItemFromPeriod(e, t.id)
                        );
                      case 3:
                        return (
                          (a = r.sent),
                          r.abrupt('return', { value: a, error: null })
                        );
                      case 7:
                        return (
                          (r.prev = 7),
                          (r.t0 = r.catch(0)),
                          (r.next = 11),
                          n.getItem(e, t.id)
                        );
                      case 11:
                        return (
                          (r.t1 = r.sent),
                          (r.t2 = r.t0),
                          r.abrupt('return', { value: r.t1, error: r.t2 })
                        );
                      case 14:
                      case 'end':
                        return r.stop();
                    }
                },
                r,
                null,
                [[0, 7]]
              );
            })
          )();
        },
        deleteUserItemFromSet: function (e, t, n) {
          var r = this;
          return Object(c.a)(
            s.a.mark(function a() {
              var c;
              return s.a.wrap(
                function (a) {
                  for (;;)
                    switch ((a.prev = a.next)) {
                      case 0:
                        return (
                          (a.prev = 0),
                          (a.next = 3),
                          r.deleteUserItem(e, t, n.id)
                        );
                      case 3:
                        return (
                          (c = a.sent),
                          a.abrupt('return', { value: c, error: null })
                        );
                      case 7:
                        return (
                          (a.prev = 7),
                          (a.t0 = a.catch(0)),
                          (a.next = 11),
                          r.getItem(e, n.id)
                        );
                      case 11:
                        return (
                          (a.t1 = a.sent),
                          (a.t2 = a.t0),
                          a.abrupt('return', { value: a.t1, error: a.t2 })
                        );
                      case 14:
                      case 'end':
                        return a.stop();
                    }
                },
                a,
                null,
                [[0, 7]]
              );
            })
          )();
        },
        updateItemInSet: function (e, t) {
          var n = this;
          return Object(c.a)(
            s.a.mark(function r() {
              var a;
              return s.a.wrap(
                function (r) {
                  for (;;)
                    switch ((r.prev = r.next)) {
                      case 0:
                        return (
                          (r.prev = 0), (r.next = 3), n.updateItemInPeriod(e, t)
                        );
                      case 3:
                        return (
                          (a = r.sent),
                          r.abrupt('return', { value: a, error: null })
                        );
                      case 7:
                        return (
                          (r.prev = 7),
                          (r.t0 = r.catch(0)),
                          (r.next = 11),
                          n.getItem(e, t.id)
                        );
                      case 11:
                        return (
                          (r.t1 = r.sent),
                          (r.t2 = r.t0),
                          r.abrupt('return', { value: r.t1, error: r.t2 })
                        );
                      case 14:
                      case 'end':
                        return r.stop();
                    }
                },
                r,
                null,
                [[0, 7]]
              );
            })
          )();
        },
        updateUserItemInSet: function (e, t, n) {
          var r = this;
          return Object(c.a)(
            s.a.mark(function a() {
              var c;
              return s.a.wrap(
                function (a) {
                  for (;;)
                    switch ((a.prev = a.next)) {
                      case 0:
                        return (
                          (a.prev = 0), (a.next = 3), r.updateUserItem(e, t, n)
                        );
                      case 3:
                        return (
                          (c = a.sent),
                          a.abrupt('return', { value: c, error: null })
                        );
                      case 7:
                        return (
                          (a.prev = 7),
                          (a.t0 = a.catch(0)),
                          (a.next = 11),
                          r.getItem(e, n.id)
                        );
                      case 11:
                        return (
                          (a.t1 = a.sent),
                          (a.t2 = a.t0),
                          a.abrupt('return', { value: a.t1, error: a.t2 })
                        );
                      case 14:
                      case 'end':
                        return a.stop();
                    }
                },
                a,
                null,
                [[0, 7]]
              );
            })
          )();
        },
      };
      t.a = p;
    },
    43: function (e, t, n) {
      'use strict';
      var r = n(87);
      t.a = r.a;
    },
    68: function (e, t, n) {
      'use strict';
      var r = n(4),
        a = n(1),
        s = n(5),
        c = n(0),
        i = n(7),
        o = n(197),
        u = n(288),
        l = n(293),
        d = n(292),
        p = n(125),
        f = function (e) {
          var t = e.commandItems,
            n = e.tableProps,
            f = Object(c.useState)(''),
            b = Object(s.a)(f, 2),
            j = b[0],
            m = b[1];
          return Object(a.jsx)(i.Container, {
            fluid: !0,
            children: Object(a.jsx)(i.Row, {
              children: Object(a.jsx)(i.Col, {
                xs: 12,
                children: Object(a.jsxs)(o.a, {
                  horizontalAlign: 'stretch',
                  children: [
                    Object(a.jsxs)(i.Row, {
                      align: 'start',
                      children: [
                        Object(a.jsx)(i.Col, {
                          xs: 12,
                          sm: 9,
                          children: Object(a.jsx)(u.a, { items: t }),
                        }),
                        Object(a.jsx)(i.Col, {
                          xs: 12,
                          sm: 3,
                          children: Object(a.jsx)(l.a, {
                            placeholder: 'Search',
                            value: j,
                            onChange: function (e, t) {
                              return m(t);
                            },
                          }),
                        }),
                      ],
                    }),
                    Object(a.jsx)(d.a, {}),
                    Object(a.jsx)(
                      p.a,
                      Object(r.a)(Object(r.a)({}, n), {}, { searchValue: j })
                    ),
                  ],
                }),
              }),
            }),
          });
        };
      (f.defaultProps = { commandItems: null }), (t.a = f);
    },
    81: function (e, t, n) {
      'use strict';
      var r = n(170),
        a = new (n.n(r).a)(),
        s = {
          on: function (e, t) {
            return a.on(e, t);
          },
          once: function (e, t) {
            return a.once(e, t);
          },
          off: function (e, t) {
            return a.off(e, t);
          },
          emit: function (e, t) {
            return a.emit(e, t);
          },
        };
      Object.freeze(s);
      var c = s;
      t.a = c;
    },
    87: function (e, t, n) {
      'use strict';
      var r = n(1),
        a = (n(0), n(197)),
        s = n(196),
        c = {
          root: { marginTop: '16px', marginBottom: '16px', align: 'center' },
        };
      t.a = function (e) {
        var t = e.text;
        return Object(r.jsx)(a.a, {
          horizontal: !0,
          horizontalAlign: 'center',
          children: Object(r.jsx)(s.a, {
            variant: 'xLarge',
            styles: c,
            children: t,
          }),
        });
      };
    },
    88: function (e, t, n) {
      'use strict';
      var r = n(5),
        a = n(4),
        s = n(1),
        c = n(23),
        i = n(0),
        o = n(101),
        u = n(196),
        l = n(150),
        d = n(8),
        p = n(120),
        f = n(72),
        b =
          (n(272),
          function (e, t, n) {
            var r;
            return Object(s.jsx)('span', {
              style: { paddingRight: '8px' },
              children: Object(s.jsx)(o.a, {
                className: Object(f.a)(
                  ((r = {}),
                  Object(c.a)(r, n.headerIcon, !0),
                  Object(c.a)(r, n.headerIconOpen, t),
                  r)
                ),
                iconName: 'ChevronRightMed',
              }),
            });
          }),
        j = function (e) {
          return Object(s.jsx)(u.a, { variant: 'medium', children: e.text });
        },
        m = function (e, t, n) {
          var r = n;
          return Object(s.jsxs)('div', {
            style: {
              display: 'flex',
              flexFlow: 'row nowrap',
              alignItems: 'center',
            },
            children: [
              t.onRenderHeaderFold(e, t.isOpen, r),
              t.onRenderHeaderText(e, t.isOpen, r),
            ],
          });
        },
        h = function (e) {
          var t = e.item,
            n = e.headerProps,
            r = e.onRenderItem,
            c = e.isOpen,
            i = e.onToggle,
            o = e.classes;
          return Object(s.jsxs)('div', {
            className: o.container,
            children: [
              Object(s.jsx)('div', {
                role: 'menuitem',
                tabIndex: 0,
                onClick: function (e) {
                  return i(e, t, !c);
                },
                onKeyPress: function (e) {
                  return i(e, t, !c);
                },
                className: o.header,
                children: n.onRenderHeader(
                  t,
                  Object(a.a)(Object(a.a)({}, n), {}, { isOpen: c }),
                  o
                ),
              }),
              Object(s.jsx)(p.Collapse, {
                isOpened: c,
                children: Object(s.jsx)('div', {
                  className: o.itemContent,
                  children: r(t),
                }),
              }),
            ],
          });
        },
        O = function (e) {
          var t = e.items,
            n = e.getKey,
            o = e.headerProps,
            u = e.onRenderItem,
            p = e.exclusive,
            f = e.styles,
            O = e.compact,
            x = e.onToggle,
            v = Object(l.a)(function (e) {
              return Object(d.r)(
                (function (e) {
                  var t =
                    arguments.length > 1 &&
                    void 0 !== arguments[1] &&
                    arguments[1];
                  return {
                    root: {
                      boxShadow: e.effects.elevation4,
                      width: '100%',
                      border: '1px solid '.concat(e.palette.themeLight),
                    },
                    container: {
                      outline: 'none',
                      borderTop: '1px solid '.concat(e.palette.themeLight),
                      '&:first-child': { borderTop: 'none' },
                      '& > div:first-child': { outline: 'none' },
                    },
                    header: {
                      cursor: 'pointer',
                      padding: ''.concat(t ? '8px' : '16px'),
                    },
                    headerIcon: {
                      fontSize: '0.7em',
                      transition: '.2s transform',
                    },
                    headerIconOpen: {
                      transform: 'rotate(90deg)',
                      transformOrigin: 'center',
                    },
                    itemContent: { padding: ''.concat(t ? '8px' : '16px') },
                  };
                })(e, O),
                f
              );
            })(),
            g = Object(i.useState)(function () {
              var e = {};
              return (
                t.forEach(function (t) {
                  var r = n(t);
                  e[r] = Boolean(t.isOpen) || !1;
                }),
                e
              );
            }),
            C = Object(r.a)(g, 2),
            y = C[0],
            k = C[1],
            w = Object(a.a)(
              {
                onRenderHeader: m,
                onRenderHeaderFold: b,
                onRenderHeaderText: j,
              },
              o
            ),
            S = function (e) {
              return p
                ? function (t, r, s) {
                    return k(function (t) {
                      var r = Object(a.a)({}, t),
                        c = n(e);
                      return (
                        Object.keys(r).forEach(function (e) {
                          r[e] = e === c && s;
                        }),
                        r
                      );
                    });
                  }
                : function (t, r, s) {
                    return k(function (t) {
                      return Object(a.a)(
                        Object(a.a)({}, t),
                        {},
                        Object(c.a)({}, n(e), s)
                      );
                    });
                  };
            };
          return (
            Object(i.useEffect)(
              function () {
                k(function () {
                  var e = {};
                  return (
                    t.forEach(function (t) {
                      var r = n(t);
                      e[r] = Boolean(t.isOpen) || !1;
                    }),
                    e
                  );
                });
              },
              [t, n]
            ),
            Object(s.jsx)('div', {
              className: v.root,
              children: t.map(function (e) {
                return Object(s.jsx)(
                  h,
                  {
                    item: e,
                    headerProps: w,
                    onRenderItem: u,
                    isOpen: Boolean(y[n(e)]),
                    setOpen: S(e),
                    getKey: n,
                    classes: v,
                    onToggle: x || S(e),
                  },
                  n(e)
                );
              }),
            })
          );
        };
      (O.defaultProps = {
        getKey: function (e) {
          return e.key;
        },
        onRenderItem: function (e) {
          return Object(s.jsx)('p', { children: e.text });
        },
        exclusive: !1,
        headerProps: {
          onRenderHeader: m,
          onRenderHeaderFold: b,
          onRenderHeaderText: j,
        },
        styles: {},
        compact: !1,
        onToggle: null,
      }),
        (h.defaultProps = {
          headerProps: {
            onRenderHeader: m,
            onRenderHeaderFold: b,
            onRenderHeaderText: j,
          },
        }),
        (t.a = O);
    },
  },
  [[274, 1, 2]],
]);
//# sourceMappingURL=main.1ce81d5b.chunk.js.map
