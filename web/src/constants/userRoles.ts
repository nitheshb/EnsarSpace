export const USER_ROLES = {
  SALES_MANAGER: 'sales-manager',
  SALES_EXECUTIVE: 'sales-executive',
  SALES_ASSOCIATE: 'sales-associate',
  SALES_SENIOR_ASSOCIATE: 'sales-senior-associate',
  SALES_SENIOR_EXECUTIVE: 'sales-senior-executive',
  SALES_SENIOR_MANAGER: 'sales-senior-manager',
  CP_AGENT: 'cp-agent',

  LEGAL_MANAGER: 'legal-manager',
  LEGAL_EXECUTIVE: 'legal-executive',
  LEGAL_ASSOCIATE: 'legal-associate',
  LEGAL_SENIOR_EXECUTIVE: 'legal-senior-executive',
  LEGAL_SENIOR_ASSOCIATE: 'legal-senior-associate',
  LEGAL_SENIOR_MANAGER: 'legal-senior-manager',


  CRM_MANAGER: 'crm-manager',
  CRM_EXECUTIVE: 'crm-executive',
  CRM_ASSOCIATE: 'crm-associate',
  CRM_SENIOR_EXECUTIVE: 'crm-senior-executive',
  CRM_SENIOR_ASSOCIATE: 'crm-senior-associate',
  CRM_SENIOR_MANAGER: 'crm-senior-manager',


  FINANCE_MANAGER: 'finance-manager',
  FINANCE_EXECUTIVE: 'finance-executive',
  FINANCE_ASSOCIATE: 'finance-associate',
  FINANCE_SENIOR_EXECUTIVE: 'finance-senior-executive',
  FINANCE_SENIOR_ASSOCIATE: 'finance-senior-associate',
  FINANCE_SENIOR_MANAGER: 'finance-senior-manager',


  HR_MANAGER: 'hr-manager',
  HR_EXECUTIVE: 'hr-executive',
  HR_ASSOCIATE: 'hr-associate',
  HR_SENIOR_EXECUTIVE: 'hr-senior-executive',
  HR_SENIOR_ASSOCIATE: 'hr-senior-associate',
  HR_SENIOR_MANAGER: 'hr-senior-manager',


  SUPPORT_MANAGER: 'support-manager',
  SUPPORT_EXECUTIVE: 'support-executive',
  SUPPORT_ASSOCIATE: 'support-associate',
  SUPPORT_SENIOR_EXECUTIVE: 'support-senior-executive',
  SUPPORT_SENIOR_ASSOCIATE: 'support-senior-associate',
  SUPPORT_SENIOR_MANAGER: 'support-senior-manager',


  HELPER_MANAGER: 'helper-manager',
  HELPER_EXECUTIVE: 'helper-executive',
  HELPER_ASSOCIATE: 'helper-associate',
  HELPER_SENIOR_EXECUTIVE: 'helper-senior-executive',
  HELPER_SENIOR_ASSOCIATE: 'helper-senior-associate',
  HELPER_SENIOR_MANAGER: 'helper-senior-manager',


  PROJECT_MANAGER: 'project-manager',
  PROJECT_EXECUTIVE: 'project-executive',
  PROJECT_ASSOCIATE: 'project-associate',
  PROJECT_SENIOR_EXECUTIVE: 'project-senior-executive',
  PROJECT_SENIOR_ASSOCIATE: 'project-senior-associate',
  PROJECT_SENIOR_MANAGER: 'project-senior-manager',


  DEVELOPER_MANAGER: 'developer manager',
  DEVELOPER_SENIOR_MANAGER: 'developer senior manager',
  DEVELOPER_EXECUTIVE: 'developer executive',
  DEVELOPER_SENIOR_EXECUTIVE: 'developer senior executive',
  DEVELOPER_ASSOCIATE: 'developer associate',
  DEVELOPER_SENIOR_ASSOCIATE: 'developer senior associate',

  TRAINER_MANAGER: 'trainer manager',
  TRAINER_EXECUTIVE: 'trainer executive',
  TRAINER_ASSOCIATE: 'trainer associate',
  TRAINER_SENIOR_MANAGER: 'trainer senior manager',
  TRAINER_SENIOR_EXECUTIVE: 'trainer senior executive',
  TRAINER_SENIOR_ASSOCIATE: 'trainer senior associate',

  FRESHER_MANAGER: 'fresher manager',
  FRESHER_SENIOR_MANAGER: 'fresher senior manager',
  FRESHER_EXECUTIVE: 'fresher executive',
  FRESHER_SENIOR_EXECUTIVE: 'fresher senior executive',
  FRESHER_ASSOCIATE: 'fresher associate',
  FRESHER_SENIOR_ASSOCIATE: 'fresher senior associate',


  ADMIN: 'admin',
}

export const DEPARTMENT_LIST = [
  { label: 'Select the Department', value: '' },
  { label: 'Admin', value: 'admin' },
  { label: 'CRM', value: 'crm' },
  { label: 'Finance', value: 'finance' },
  { label: 'Helper', value: 'helper' },
  { label: 'HR', value: 'hr' },
  { label: 'Legal', value: 'legal' },
  { label: 'Project', value: 'project' },
  { label: 'Support', value: 'support' },
  { label: 'Sales', value: 'sales' },
  { label: 'Developer', value: 'developer' },
  { label: 'Trainer', value: 'trainer' },
  { label: 'Fresher', value: 'fresher' },
]


export const QUALIFICATION_LIST = [
  { label: 'Select the Qualification', value: '' },
  { label: 'Xth', value: 'Xth' },
  { label: 'XIIth', value: 'XIIth' },
  { label: 'Diploma', value: 'Diploma' },
  { label: 'BE/B.Tech', value: 'be/b.tech' },
  { label: 'Degree', value: 'degree' },
  { label: 'M.Tech', value: 'm.tech' },
  { label: 'PG', value: 'PG' },
]

export const EXPERIENCE_LIST = [
  { label: 'Select the Experience', value: '' },
  { label: 'None', value: 'none' },
  { label: '0 to 6 Months', value: '0 to 6 months' },
  { label: '7 to 12 Months', value: '7 to 12 months' },
  { label: '1 - 2 Years', value: '1 - 2 Years' },
  { label: '2 - 3 Years', value: '2 - 3 Years' },
  { label: '3 - 4 Years', value: '3 - 4 Years' },
  { label: '5+ Years', value: '5+ Years' },
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

  // export const DEPARTMENT_LIST = [
  //   { label: 'Select the role', value: '' },
  //   { label: 'Sales manager', value: USER_DEPARTMENT.SALES_MANAGER, dept: 'sales' },
  //   { label: 'Sales senior associate', value: USER_DEPARTMENT.SALES_SENIOR_ASSOCIATE, dept: 'sales' },
  //   { label: 'Sales associate', value: USER_DEPARTMENT.SALES_ASSOCIATE, dept: 'sales' },
  //   {
  //     label: 'Sales executive',
  //     value: USER_DEPARTMENT.SALES_EXECUTIVE,
  //     dept: 'sales',
  //   },
  // ]


  {
    label: 'Sales senior executive',
    value: USER_ROLES.SALES_SENIOR_EXECUTIVE,
    dept: 'sales',
  },
  {
    label: 'Sales senior manager',
    value: USER_ROLES.SALES_SENIOR_MANAGER,
    dept: 'sales',
  },


  {
    label: 'CP Agent',
    value: USER_ROLES.CP_AGENT,
    dept: 'sales',
  },


  { label: 'Legal manager', value: USER_ROLES.LEGAL_MANAGER, dept: 'legal' },
  { label: 'Legal senior manager', value: USER_ROLES.LEGAL_SENIOR_MANAGER, dept: 'legal' },
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
  { label: 'CRM senior manager', value: USER_ROLES.CRM_SENIOR_MANAGER, dept: 'crm' },


  {
    label: 'Finance manager',
    value: USER_ROLES.FINANCE_MANAGER,
    dept: 'finance',
  },
  {
    label: 'Finance senior manager',
    value: USER_ROLES.FINANCE_SENIOR_MANAGER,
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
  { label: 'HR senior manager', value: USER_ROLES.HR_SENIOR_MANAGER, dept: 'hr' },
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
    label: 'Support senior manager',
    value: USER_ROLES.SUPPORT_SENIOR_MANAGER,
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
  { label: 'Helper senior manager', value: USER_ROLES.HELPER_SENIOR_MANAGER, dept: 'helper' },
  { label: 'Helper associate', value: USER_ROLES.HELPER_ASSOCIATE, dept: 'helper' },
  { label: 'Helper senior associate', value: USER_ROLES.HELPER_SENIOR_ASSOCIATE, dept: 'helper' },
  {
    label: 'Helper executive',
    value: USER_ROLES.HELPER_EXECUTIVE,
    dept: 'helper',
  },
  {
    label: 'Helper senior executive',
    value: USER_ROLES.HELPER_SENIOR_EXECUTIVE,
    dept: 'helper',
  },


  { label: 'project head', value: USER_ROLES.PROJECT_MANAGER, dept: 'project' },
  {
    label: 'project manager',
    value: USER_ROLES.PROJECT_EXECUTIVE,
    dept: 'project',
  },
  {
    label: 'project senior manager',
    value: USER_ROLES.PROJECT_SENIOR_EXECUTIVE,
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
    label: 'project senior associate',
    value: USER_ROLES.PROJECT_SENIOR_ASSOCIATE,
    dept: 'project',
  },
  {
    label: 'project senior executive',
    value: USER_ROLES.PROJECT_SENIOR_EXECUTIVE,
    dept: 'project',
  },


  {
    label: 'developer manager',
    value: USER_ROLES.DEVELOPER_MANAGER,
    dept:'developer',
  },

  {
    label: 'developer senior manager',
    value: USER_ROLES.DEVELOPER_SENIOR_MANAGER,
    dept:'developer',
  },

  {
    label: 'developer executive',
    value: USER_ROLES.DEVELOPER_EXECUTIVE,
    dept:'developer',
  },
  {
    label: 'developer senior executive',
    value: USER_ROLES.DEVELOPER_SENIOR_EXECUTIVE,
    dept:'developer',
  },
  {
    label: 'developer associate',
    value: USER_ROLES.DEVELOPER_ASSOCIATE,
    dept:'developer',
  },
  {
    label: 'developer senior associate',
    value: USER_ROLES.DEVELOPER_SENIOR_ASSOCIATE,
    dept:'developer',
  },

  {
    label: 'trainer manager',
    value: USER_ROLES.TRAINER_MANAGER,
    dept:'trainer',
  },
  {
    label: 'trainer senior manager',
    value: USER_ROLES.TRAINER_SENIOR_MANAGER,
    dept:'trainer',
  },
  {
    label: 'trainer executive',
    value: USER_ROLES.TRAINER_EXECUTIVE,
    dept:'trainer',
  },
  {
    label: 'trainer senior executive',
    value: USER_ROLES.TRAINER_SENIOR_EXECUTIVE,
    dept:'trainer',
  },
  {
    label: 'trainer associate',
    value: USER_ROLES.TRAINER_ASSOCIATE,
    dept:'trainer',
  },
  {
    label: 'trainer senior associate',
    value: USER_ROLES.TRAINER_SENIOR_ASSOCIATE,
    dept:'trainer',
  },
  {
    label: 'fresher manager',
    value: USER_ROLES.FRESHER_MANAGER,
    dept:'fresher',
  },
  {
    label: 'fresher senior manager',
    value: USER_ROLES.FRESHER_SENIOR_MANAGER,
    dept:'fresher',
  },
  {
    label: 'fresher executive',
    value: USER_ROLES.FRESHER_EXECUTIVE,
    dept:'fresher',
  },
  {
    label: 'fresher senior executive',
    value: USER_ROLES.FRESHER_SENIOR_EXECUTIVE,
    dept:'fresher',
  },
  {
    label: 'fresher associate',
    value: USER_ROLES.FRESHER_ASSOCIATE,
    dept:'fresher',
  },
  {
    label: 'fresher senior associate',
    value: USER_ROLES.FRESHER_SENIOR_ASSOCIATE,
    dept:'fresher',
  },

  { label: 'Admin', value: USER_ROLES.ADMIN, dept: 'admin' },
]
