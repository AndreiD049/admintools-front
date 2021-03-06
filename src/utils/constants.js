const constants = {
  dialogAnswers: {
    Yes: 1,
    No: 0,
    Cancel: 2,
    Ok: 3,
  },
  timeOptions: (() => {
    const options = [];
    for (let h = 0; h < 24; h += 1) {
      for (let m = 0; m < 60; m += 10) {
        const str = `${`0${h}`.slice(-2)}:${`0${m}`.slice(-2)}`;
        options.push({
          key: str,
          text: str,
        });
      }
    }
    return options;
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
    types: {
      Daily: 'Daily',
      Weekly: 'Weekly',
      Monthly: 'Monthly',
    },
    DayTypes: {
      Workday: 'Work',
      Calendar: 'Calendar',
    },
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

export default constants;
