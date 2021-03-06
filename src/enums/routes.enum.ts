export const Routes = {
  HOME: '/',
  LOGIN: '/login',
  REGISTER: '/sign-up',
  REGISTER_CONFIRMATION: '/sign-up/confirm',
  REGISTER_ON_BOARD: '/sign-up/onboard',
  FORGOT_PASSWORD: '/forgot-password',
  FORGOT_PASSWORD_CONFIRMATION: '/forgot-password/confirmation',
  RESET_PASSWORD: '/reset-password',
  VERIFY_EMAIL: '/email/verify',
  PROFILE: '/profile',
  EDIT_PROFILE: '/edit-profile',
  CHAT: '/chat',
  CALENDAR: '/calendar',
  NOTIFICATIONS: '/notifications',
  SETTINGS: '/settings/:tab?',
  NOTIFICATIONS_SETTINGS: '/settings/notifications',
  TRAINER: '/trainer',
  INVOICES: '/invoices',
  CLIENTS: '/clients',
  ADD_NEW_CLIENT: '/add-new-client',
  SESSIONS: '/sessions',
  ACTIVITIES: '/activities',
  ACTIVITIES_DP: '/activities/:clientId?/diet-plans',
  ACTIVITIES_DP_ID:
    '/activities/:clientId?/diet-plans/:id/revisions/:revisionId',
  ACTIVITIES_TP: '/activities/:clientId?/training-plans',
  ACTIVITIES_TP_NEW: '/activities/training-plans/create',
  ACTIVITIES_TP_ID:
    '/activities/:clientId?/training-plans/:id/revisions/:revisionId',
  ACTIVITIES_CURR_PLAN: '/activities/current-plan',
  ACTIVITIES_TS: '/activities/:clientId?/training-splits',
  ACTIVITIES_TS_ALL: '/activities/all/training-splits',
  ACTIVITIES_TS_NEW: '/activities/:clientId?/training-splits/create',
  ACTIVITIES_TS_ID:
    '/activities/:clientId?/training-split/:id/revision/:revisionId',
  ACTIVITIES_TS_EDIT:
    '/activities/:clientId?/training-split/:id/revision/:revisionId/edit',
  ACTIVITIES_TS_EDIT_TP: '/activities/training-splits/:id/edit/training-plan',
  ACTIVITIES_TS_EDIT_MP: '/activities/training-splits/:id/edit/meal-plan',
  ACTIVITIES_TM: '/templates',
  ACTIVITIES_TM_TS: '/templates/training-splits',
  ACTIVITIES_TM_TS_ID: '/templates/training-splits/:id',
  ACTIVITIES_TM_TS_REVISION_ID:
    '/templates/training-splits/:id/revisions/:revisionId',
  ACTIVITIES_TM_TP: '/templates/training-plans',
  ACTIVITIES_TM_TP_ID: '/templates/training-plans/:id',
  ACTIVITIES_TM_TP_REVISION_ID:
    '/templates/training-plans/:id/revisions/:revisionId',
  ACTIVITIES_TM_DP: '/templates/diet-plans',
  ACTIVITIES_TM_DP_ID: '/templates/diet-plans/:id',
  ACTIVITIES_TM_WD: '/templates/workout-days',
  ACTIVITIES_TM_WD_ID: '/templates/workout-days/:id',
  ACTIVITIES_TM_WO: '/templates/workouts',
  ACTIVITIES_TM_WO_ID: '/templates/workouts/:id',
  ACTIVITIES_TM_EX: '/templates/excercises',
  ACTIVITIES_TM_EX_ID: '/templates/excercises/:id',
  ACTIVITIES_TM_MP: '/templates/meal-plans',
  ACTIVITIES_TM_MP_ID: '/templates/meal-plans/:id',
  ACTIVITIES_TM_ML: '/templates/meals',
  ACTIVITIES_TM_ML_ID: '/templates/meals/:id',
  ACTIVITIES_TM_FO: '/templates/foods',
  ACTIVITIES_TM_FO_ID: '/templates/foods/:id',
  MEALS: '/meals',
  SPLITS: '/plans/training-splits',
  DIETS: '/plans/diet-plans',
  WORKOUTS: '/plans/workout-plans',
  INVITATIONS: '/invitations',
  HUB: '/hub',
  PROGRESS_CLIENT_LOG_HEALTH_DATA: '/progress/health-data/log/:date?',
  PROGRESS_LOG_HEALTH_DATA: '/progress/:clientId/health-data/log/:date?',
  PROGRESS_CLIENT_LOG_MEASUREMENTS: '/progress/measurements/log/:logId?',
  PROGRESS_LOG_MEASUREMENTS: '/progress/:clientId/measurements/log/:logId?',
  PROGRESS_LOG_PHOTOS: '/progress/:clientId/log-photos',
  PROGRESS_CLIENTS: '/progress',
  PROGRESS_CLIENT: '/progress/:tab',
  PROGRESS: '/progress/:clientId/:tab',
  PROGRESS_CLIENT_HEALTH_DATA: '/progress/health-data',
  PROGRESS_HEALTH_DATA: '/progress/:clientId/health-data',
  PROGRESS_CLIENT_MEASUREMENTS: '/progress/measurements',
  PROGRESS_MEASUREMENTS: '/progress/:clientId/measurements',
  PROGRESS_LOG_GOALS: '/progress/:clientId/goals/log/:date?',
  PROGRESS_LOG_CLIENT_GOALS: '/progress/goals/log/:date?',
  PROGRESS_GOALS: '/progress/:clientId/goals',
  PROGRESS_CLIENT_GOALS: '/progress/goals',
  CREATE_INVOICE: '/create-invoice',
  FINANCIALS: '/financials/:path',
  FINANCIALS_OVERVIEW: '/financials/overview',
  FINANCIALS_RECEIVABLES: '/financials/receivables',
  FINANCIALS_PAYABLES: '/financials/payables',
  FINANCIALS_GOALS: '/financials/goals',
  FINANCIALS_GET_PAID: '/financials/get-paid',
  EDIT_GOALS: '/edit-goals',
  PAYMENT_METHODS: '/payment-methods'
}
