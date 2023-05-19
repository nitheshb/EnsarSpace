export const USER_ROLES = {
  SALES_MANAGER: 'sales-manager',
  SALES_EXECUTIVE: 'sales-executive',
  CP_AGENT: 'cp-agent',
  LEGAL_MANAGER: 'legal-manager',
  LEGAL_EXECUTIVE: 'legal-executive',
  CRM_MANAGER: 'crm-manager',
  CRM_EXECUTIVE: 'crm-executive',
  FINANCE_MANAGER: 'finance-manager',
  FINANCE_EXECUTIVE: 'finance-executive',
  HR_MANAGER: 'hr-manager',
  HR_EXECUTIVE: 'hr-executive',
  SUPPORT_MANAGER: 'support-manager',
  SUPPORT_EXECUTIVE: 'support-executive',
  HELPER_MANAGER: 'helper-manager',
  HELPER_EXECUTIVE: 'helper-executive',
  PROJECT_MANAGER: 'project-manager',
  PROJECT_EXECUTIVE: 'project-executive',
  ADMIN: 'admin',
  TRAINEE: 'trainee',
  DATA_SCIENTIST: 'data-scientist',

}

export const DEPARTMENT_LIST = [
  { label: 'Select the Department', value: '' },
  { label: 'Admin', value: 'admin' },
  { label: 'CRM', value: 'crm' },
  { label: 'Fresher', value: 'fresher' },
  { label: 'Finance', value: 'finance' },
  { label: 'Helper', value: 'helper' },
  { label: 'HR', value: 'hr' },
  { label: 'Legal', value: 'legal' },
  { label: 'Project', value: 'project' },
  { label: 'Support', value: 'support' },
  { label: 'Sales', value: 'sales' },
  { label: 'Data Scientist', value: 'data scientist' },
]

export const ROLES_LIST = [
  { label: 'Select the role', value: '' },

  { label: 'Sales manager', value: USER_ROLES.SALES_MANAGER, dept: 'sales' },
  {
    label: 'Sales executive',
    value: USER_ROLES.SALES_EXECUTIVE,
    dept: 'sales',
  },
  {
    label: 'Trainee',
    value: USER_ROLES.TRAINEE,
    dept: 'fresher',
  },

  {
    label: 'IT Support',
    value: USER_ROLES.TRAINEE,
    dept: ' fresher',
  },
  {
    label: 'Quality Assurance Analyst',
    value: USER_ROLES.TRAINEE,
    dept: ' fresher',
  },
  {
    label: 'Data Scientist',
    value: USER_ROLES.DATA_SCIENTIST,
    dept: 'data scientist',
  },
  {
    label: 'Data Analyst',
    value: USER_ROLES.DATA_SCIENTIST,
    dept: 'data scientist',
  },
  {
    label: 'Machine Learning Engineer',
    value: USER_ROLES.DATA_SCIENTIST,
    dept: 'data scientist',
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
  { label: 'CRM manager', value: USER_ROLES.CRM_MANAGER, dept: 'crm' },
  { label: 'CRM executive', value: USER_ROLES.CRM_EXECUTIVE, dept: 'crm' },
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
  { label: 'HR manager', value: USER_ROLES.HR_MANAGER, dept: 'hr' },
  { label: 'HR executive', value: USER_ROLES.HR_EXECUTIVE, dept: 'hr' },
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
  { label: 'Helper manager', value: USER_ROLES.HELPER_MANAGER, dept: 'helper' },
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
  { label: 'Admin', value: USER_ROLES.ADMIN, dept: 'admin' },
]
