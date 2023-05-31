export const USER_ROLES = {
  SALES_MANAGER: 'sales-manager',
  SALES_EXECUTIVE: 'sales-executive',
  SALES_ASSOCIATE: 'sales-associate',
  SALES_SENIOR_ASSOCIATE: 'sales-senior-associate',
  SALES_SENIOR_EXECUTIVE: 'sales-senior-executive',
  CP_AGENT: 'cp-agent',

  LEGAL_MANAGER: 'legal-manager',
  LEGAL_EXECUTIVE: 'legal-executive',
  LEGAL_ASSOCIATE: 'legal-associate',
  LEGAL_SENIOR_EXECUTIVE: 'legal-senior-executive',
  LEGAL_SENIOR_ASSOCIATE: 'legal-senior-associate',

  CRM_MANAGER: 'crm-manager',
  CRM_EXECUTIVE: 'crm-executive',
  CRM_ASSOCIATE: 'crm-associate',
  CRM_SENIOR_EXECUTIVE: 'crm-senior-executive',
  CRM_SENIOR_ASSOCIATE: 'crm-senior-associate',

  FINANCE_MANAGER: 'finance-manager',
  FINANCE_EXECUTIVE: 'finance-executive',
  FINANCE_SENIOR_EXECUTIVE: 'finance-senior-executive',
  FINANCE_ASSOCIATE: 'finance-associate',
  FINANCE_SENIOR_ASSOCIATE: 'finance-senior-associate',

  HR_MANAGER: 'hr-manager',
  HR_EXECUTIVE: 'hr-executive',
  HR_SENIOR_EXECUTIVE: 'hr-senior-executive',
  HR_ASSOCIATE: 'hr-associate',
  HR_SENIOR_ASSOCIATE: 'hr-senior-associate',

  SUPPORT_MANAGER: 'support-manager',
  SUPPORT_EXECUTIVE: 'support-executive',
  SUPPORT_SENIOR_EXECUTIVE: 'support-senior-executive',
  SUPPORT_ASSOCIATE: 'support-associate',
  SUPPORT_SENIOR_ASSOCIATE: 'support-senior-associate',

  HELPER_MANAGER: 'helper-manager',
  HELPER_EXECUTIVE: 'helper-executive',
  HELPER_SENIOR_EXECUTIVE: 'helper-senior-executive',
  HELPER_ASSOCIATE: 'helper-associate',
  HELPER_SENIOR_ASSOCIATE: 'helper-senior-associate',

  PROJECT_MANAGER: 'project-manager',
  PROJECT_EXECUTIVE: 'project-executive',
  PROJECT_SENIOR_EXECUTIVE: 'project-senior-executive',
  PROJECT_ASSOCIATE: 'project-associate',
  PROJECT_SENIOR_ASSOCIATE: 'project-senior-associate',

  DEVELOPER_FRONTEND: 'developer frontend',
  DEVELOPER_BACKEND: 'developer backend',
  DEVELOPER_FULLSTACK: 'developer fullstack',

  ADMIN: 'admin',
}

export const COURSE_LIST = [
  { label: 'Select the Course', value: '' },
  { label: 'Python', value: 'Python' },
  { label: 'Web Development', value: 'Web Development' },
  { label: 'Data Science', value: 'Data Science' },
  { label: 'AWS', value: 'AWS' },
  { label: 'Java', value: 'Java' },
]
 export const DEPARTMENT_LIST = [


    { label: 'Select the Department', value: '' },

    { label: 'IT Employee', value: 'it_employee' },

    { label: 'IT Desk', value: 'it_desk' },

    { label: 'HR', value: 'hr' },

    { label: 'Finance', value: 'finance' },

    { label: 'Project', value: 'project' },

    { label: 'Sales', value: 'sales' },

    { label: 'Learning', value: 'learning' },

    { label: 'Admin', value: 'admin' },

  ]





export const GENDER_LIST = [
  { label: 'Select the Gender', value: '' },
  { label: 'Male', value: 'Male' },
  { label: 'Female', value: 'Female' },
]


export const ROLES_LIST = [
  { label: 'Select the role', value: '' },
  { label: 'Sales manager', value: USER_ROLES.SALES_MANAGER, dept: 'sales' },
  { label: 'Sales senior associate', value: USER_ROLES.SALES_SENIOR_ASSOCIATE, dept: 'sales' },
  { label: 'Sales associate', value: USER_ROLES.SALES_ASSOCIATE, dept: 'sales' },
  {
    label: 'Sales executive',
    value: USER_ROLES.SALES_EXECUTIVE,
    dept: 'sales',
  },

  {
    label: 'Sales senior executive',
    value: USER_ROLES.SALES_SENIOR_EXECUTIVE,
    dept: 'sales',
  },


  {
    label: 'CP Agent',
    value: USER_ROLES.CP_AGENT,
    dept: 'sales',
  },


  { label: 'Legal manager', value: USER_ROLES.LEGAL_MANAGER, dept: 'legal' },
  {
    label: 'Legal executive',
    value: USER_ROLES.LEGAL_EXECUTIVE,
    dept: 'legal',
  },
  {
    label: 'Legal senior executive',
    value: USER_ROLES.LEGAL_SENIOR_EXECUTIVE,
    dept: 'legal',
  },
  {
    label: 'Legal associate',
    value: USER_ROLES.LEGAL_ASSOCIATE,
    dept: 'legal',
  },
  {
    label: 'Legal senior associate',
    value: USER_ROLES.LEGAL_SENIOR_EXECUTIVE,
    dept: 'legal',
  },


  { label: 'CRM manager', value: USER_ROLES.CRM_MANAGER, dept: 'crm' },
  { label: 'CRM executive', value: USER_ROLES.CRM_EXECUTIVE, dept: 'crm' },
  { label: 'CRM senior executive', value: USER_ROLES.CRM_SENIOR_EXECUTIVE, dept: 'crm' },
  { label: 'CRM associate', value: USER_ROLES.CRM_ASSOCIATE, dept: 'crm' },
  { label: 'CRM senior associate', value: USER_ROLES.CRM_SENIOR_ASSOCIATE, dept: 'crm' },


  {
    label: 'Finance manager',
    value: USER_ROLES.FINANCE_MANAGER,
    dept: 'finance',
  },
  {
    label: 'Finance executive',
    value: USER_ROLES.FINANCE_EXECUTIVE,
    dept: 'finance',
  },
  {
    label: 'Finance senior executive',
    value: USER_ROLES.FINANCE_SENIOR_EXECUTIVE,
    dept: 'finance',
  },
  {
    label: 'Finance associate',
    value: USER_ROLES.FINANCE_ASSOCIATE,
    dept: 'finance',
  },
  {
    label: 'Finance senior associate',
    value: USER_ROLES.FINANCE_SENIOR_ASSOCIATE,
    dept: 'finance',
  },


  { label: 'HR manager', value: USER_ROLES.HR_MANAGER, dept: 'hr' },
  { label: 'HR executive', value: USER_ROLES.HR_EXECUTIVE, dept: 'hr' },
  { label: 'HR senior executive', value: USER_ROLES.HR_SENIOR_EXECUTIVE, dept: 'hr' },
  { label: 'HR associate', value: USER_ROLES.HR_ASSOCIATE, dept: 'hr' },
  { label: 'HR senior associate', value: USER_ROLES.HR_SENIOR_ASSOCIATE, dept: 'hr' },
  {
    label: 'Support manager',
    value: USER_ROLES.SUPPORT_MANAGER,
    dept: 'support',
  },
  {
    label: 'Support executive',
    value: USER_ROLES.SUPPORT_EXECUTIVE,
    dept: 'support',
  },
  {
    label: 'Support senior executive',
    value: USER_ROLES.SUPPORT_SENIOR_EXECUTIVE,
    dept: 'support',
  },
  {
    label: 'Support associate',
    value: USER_ROLES.SUPPORT_ASSOCIATE,
    dept: 'support',
  },
  {
    label: 'Support senior associate',
    value: USER_ROLES.SUPPORT_SENIOR_ASSOCIATE,
    dept: 'support',
  },


  { label: 'Helper manager', value: USER_ROLES.HELPER_MANAGER, dept: 'helper' },
  { label: 'Helper associate', value: USER_ROLES.HELPER_ASSOCIATE, dept: 'helper' },
  {
    label: 'Helper executive',
    value: USER_ROLES.HELPER_EXECUTIVE,
    dept: 'helper',
  },


  { label: 'project head', value: USER_ROLES.PROJECT_MANAGER, dept: 'project' },
  {
    label: 'project manager',
    value: USER_ROLES.PROJECT_EXECUTIVE,
    dept: 'project',
  },
  {
    label: 'project executive',
    value: USER_ROLES.PROJECT_EXECUTIVE,
    dept: 'project',
  },
  {
    label: 'project associate',
    value: USER_ROLES.PROJECT_ASSOCIATE,
    dept: 'project',
  },
  {
    label: 'project senior executive',
    value: USER_ROLES.PROJECT_SENIOR_EXECUTIVE,
    dept: 'project',
  },


  {
    label: 'developer frontend',
    value: USER_ROLES.DEVELOPER_FRONTEND,
    dept:'developer',
  },

  {
    label: 'developer backend',
    value: USER_ROLES.DEVELOPER_BACKEND,
    dept:'developer',
  },

  {
    label: 'developer fullstack',
    value: USER_ROLES.DEVELOPER_FULLSTACK,
    dept:'developer',
  },

  {
    label: 'developer backend',
    value: USER_ROLES.DEVELOPER_BACKEND,
    dept:'trainer',
  },


  { label: 'Admin', value: USER_ROLES.ADMIN, dept: 'admin' },
]
