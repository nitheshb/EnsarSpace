export const USER_ROLES = {
  SALES_EXECUTIVE: 'sales-executive',
  SALES_MANAGER: 'sales-manager',
  SALES_ASSOCIATE: 'sales-associate',
  SALES_SENIOR_EXECUTIVE: 'sales-senior-executive',
  SALES_SENIOR_MANAGER: 'sales-senior-manager',
  SALES_SENIOR_ASSOCIATE: 'sales-senior-associate',
  CP_AGENT: 'cp-agent',

  ITEMPLOYEE_EXECUTIVE: 'itemployee-executive',
  ITEMPLOYEE_MANAGER: 'itemployee-manager',
  ITEMPLOYEE_ASSOCIATE: 'itemployee-associate',
  ITEMPLOYEE_SENIOR_EXECUTIVE: 'itemployee-senior-executive',
  ITEMPLOYEE_SENIOR_MANAGER: 'itemployee-senior-manager',
  ITEMPLOYEE_SENIOR_ASSOCIATE: 'itemployee-senior-associate',


  ITDESK_EXECUTIVE: 'itdesk-executive',
  ITDESK_MANAGER: 'itdesk-manager',
  ITDESK_ASSOCIATE: 'itdesk-associate',
  ITDESK_SENIOR_EXECUTIVE: 'itdesk-senior-executive',
  ITDESK_SENIOR_MANAGER: 'itdesk-senior-manager',
  ITDESK_SENIOR_ASSOCIATE: 'itdesk-senior-associate',

  HR_EXECUTIVE: 'hr-executive',
  HR_MANAGER: 'hr-manager',
  HR_ASSOCIATE: 'hr-associate',
  HR_SENIOR_EXECUTIVE: 'hr-senior-executive',
  HR_SENIOR_MANAGER: 'hr-senior-manager',
  HR_SENIOR_ASSOCIATE: 'hr-senior-associate',

  FINANCE_EXECUTIVE: 'finance-executive',
  FINANCE_MANAGER: 'finance-manager',
  FINANCE_ASSOCIATE: 'finance-associate',
  FINANCE_SENIOR_EXECUTIVE: 'finance-senior-executive',
  FINANCE_SENIOR_MANAGER: 'finance-senior-manager',
  FINANCE_SENIOR_ASSOCIATE: 'finance-senior-associate',




  SUPPORT_EXECUTIVE: 'support-executive',
  SUPPORT_MANAGER: 'support-manager',
  SUPPORT_ASSOCIATE: 'support-associate',
  SUPPORT_SENIOR_EXECUTIVE: 'support-senior-executive',
  SUPPORT_SENIOR_MANAGER: 'support-senior-manager',
  SUPPORT_SENIOR_ASSOCIATE: 'support-senior-associate',


  HELPER_EXECUTIVE: 'helper-executive',
  HELPER_MANAGER: 'helper-manager',
  HELPER_ASSOCIATE: 'helper-associate',
  HELPER_SENIOR_EXECUTIVE: 'helper-senior-executive',
  HELPER_SENIOR_MANAGER: 'helper-senior-manager',
  HELPER_SENIOR_ASSOCIATE: 'helper-senior-associate',


  PROJECT_EXECUTIVE: 'project-executive',
  PROJECT_MANAGER: 'project-manager',
  PROJECT_ASSOCIATE: 'project-associate',
  PROJECT_SENIOR_EXECUTIVE: 'project-senior-executive',
  PROJECT_SENIOR_MANAGER: 'project-senior-manager',
  PROJECT_SENIOR_ASSOCIATE: 'project-senior-associate',


  DEVELOPER_EXECUTIVE: 'developer executive',
  DEVELOPER_MANAGER: 'developer manager',
  DEVELOPER_ASSOCIATE: 'developer associate',
  DEVELOPER_SENIOR_EXECUTIVE: 'developer senior executive',
  DEVELOPER_SENIOR_MANAGER: 'developer senior manager',
  DEVELOPER_SENIOR_ASSOCIATE: 'developer senior associate',





  LEARNING_EXECUTIVE: 'learning executive',
  LEARNING_MANAGER: 'learning manager',
  LEARNING_ASSOCIATE: 'learning associate',
  LEARNING_SENIOR_EXECUTIVE: 'learning senior executive',
  LEARNING_SENIOR_MANAGER: 'learning senior manager',
  LEARNING_SENIOR_ASSOCIATE: 'learning senior associate',

  FRESHER_EXECUTIVE: 'fresher executive',
  FRESHER_MANAGER: 'fresher manager',
  FRESHER_ASSOCIATE: 'fresher associate',
  FRESHER_SENIOR_MANAGER: 'fresher senior manager',
  FRESHER_SENIOR_EXECUTIVE: 'fresher senior executive',
  FRESHER_SENIOR_ASSOCIATE: 'fresher senior associate',


  ADMIN: 'admin',
  TRAINEE: 'trainee',
  DATA_SCIENTIST: 'data-scientist',

}

export const DEPARTMENT_LIST = [
  { label: 'Select the Department', value: '' },
  { label: 'Admin', value: 'admin' },
  { label: 'CRM', value: 'crm' },
  { label: 'Finance', value: 'finance' },
  { label: 'Project', value: 'project' },
  { label: 'Sales', value: 'sales' },
  { label: 'Developer', value: 'developer' },
  { label: 'Learner', value: 'learner' },
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

export const Category = [
  { label: 'Select the Category', value: '' },
  { label: 'Aws', value: 'Aws' },
  { label: 'Data Science', value: 'Data Science' },
  { label: 'Design', value: 'Design' },
  // { label: 'Java', value: 'Java' },
  { label: 'Marketing', value: 'Marketing' },
  { label: 'Python', value: 'Python' },
  { label: 'Web Development', value: 'Web Development' },
]

export const Lang = [
  { label: 'Select the Language', value: '' },
  { label: 'English', value: 'English' },
  { label: 'French', value: 'French' },
]




export const ROLES_LIST = [
  { label: 'Select the role', value: '' },
  { label: 'Sales manager', value: USER_ROLES.SALES_MANAGER, dept: 'sales' },
  {
    label: 'Sales Executive',
    value: USER_ROLES.SALES_EXECUTIVE,
    dept: 'sales',
  },
  {
    label: 'CP Agent',
    value: USER_ROLES.CP_AGENT,
    dept: 'sales',
  },


  {
    label: 'IT Employee Executive',
    value: USER_ROLES.ITEMPLOYEE_EXECUTIVE,
    dept: 'it_employee',
  },
  { label: 'IT Employee Manager', value: USER_ROLES.ITEMPLOYEE_MANAGER, dept: 'it_employee' },
  {
    label: 'IT Employee Associate',
    value: USER_ROLES.ITEMPLOYEE_ASSOCIATE,
    dept: 'it_employee',
  },
  {
    label: 'IT Employee Senior Executive',
    value: USER_ROLES.ITEMPLOYEE_SENIOR_EXECUTIVE,
    dept: 'it_employee',
  },
  { label: 'IT Employee Senior Manager', value: USER_ROLES.ITEMPLOYEE_SENIOR_MANAGER, dept: 'it_employee' },
  {
    label: 'IT Employee Senior Associate',
    value: USER_ROLES.ITEMPLOYEE_SENIOR_EXECUTIVE,
    dept: 'it_employee',
  },


  { label: 'IT Desk Executive', value: USER_ROLES.ITDESK_EXECUTIVE, dept: 'it_desk' },
  { label: 'IT Desk Manager', value: USER_ROLES.ITDESK_MANAGER, dept: 'it_desk' },
  { label: 'IT Desk Associate', value: USER_ROLES.ITDESK_ASSOCIATE, dept: 'it_desk' },
  { label: 'IT Desk Senior executive', value: USER_ROLES.ITDESK_SENIOR_EXECUTIVE, dept: 'it_desk' },
  { label: 'IT Desk Senior manager', value: USER_ROLES.ITDESK_SENIOR_MANAGER, dept: 'it_desk' },
  { label: 'IT Desk Senior associate', value: USER_ROLES.ITDESK_SENIOR_ASSOCIATE, dept: 'it_desk' },


  {
    label: 'Finance Executive',
    value: USER_ROLES.FINANCE_EXECUTIVE,
    dept: 'finance',
  },
  {
    label: 'Finance Manager',
    value: USER_ROLES.FINANCE_MANAGER,
    dept: 'finance',
  },
  {
    label: 'Finance Associate',
    value: USER_ROLES.FINANCE_ASSOCIATE,
    dept: 'finance',
  },
  {
    label: 'Finance Senior Executive',
    value: USER_ROLES.FINANCE_SENIOR_EXECUTIVE,
    dept: 'finance',
  },
  {
    label: 'Finance Senior Manager',
    value: USER_ROLES.FINANCE_SENIOR_MANAGER,
    dept: 'finance',
  },
  {
    label: 'Finance Senior Associate',
    value: USER_ROLES.FINANCE_SENIOR_ASSOCIATE,
    dept: 'finance',
  },


  { label: 'HR Executive', value: USER_ROLES.HR_EXECUTIVE, dept: 'hr' },
  { label: 'HR Manager', value: USER_ROLES.HR_MANAGER, dept: 'hr' },
  { label: 'HR Associate', value: USER_ROLES.HR_ASSOCIATE, dept: 'hr' },
  { label: 'HR Senior Executive', value: USER_ROLES.HR_SENIOR_EXECUTIVE, dept: 'hr' },
  { label: 'HR Senior Manager', value: USER_ROLES.HR_SENIOR_MANAGER, dept: 'hr' },
  { label: 'HR Senior Associate', value: USER_ROLES.HR_SENIOR_ASSOCIATE, dept: 'hr' },

  {
    label: 'Support Executive',
    value: USER_ROLES.SUPPORT_EXECUTIVE,
    dept: 'support',
  },
  {
    label: 'Support Manager',
    value: USER_ROLES.SUPPORT_MANAGER,
    dept: 'support',
  },
  {
    label: 'Support Associate',
    value: USER_ROLES.SUPPORT_ASSOCIATE,
    dept: 'support',
  },
  {
    label: 'Support Senior Executive',
    value: USER_ROLES.SUPPORT_SENIOR_EXECUTIVE,
    dept: 'support',
  },
  {
    label: 'Support Senior Manager',
    value: USER_ROLES.SUPPORT_SENIOR_MANAGER,
    dept: 'support',
  },
  {
    label: 'Support Senior Associate',
    value: USER_ROLES.SUPPORT_SENIOR_ASSOCIATE,
    dept: 'support',
  },

  {
    label: 'Helper Executive',
    value: USER_ROLES.HELPER_EXECUTIVE,
    dept: 'helper',
  },
  { label: 'Helper Manager', value: USER_ROLES.HELPER_MANAGER, dept: 'helper' },
  { label: 'Helper Associate', value: USER_ROLES.HELPER_ASSOCIATE, dept: 'helper' },
  {
    label: 'Helper Senior Executive',
    value: USER_ROLES.HELPER_SENIOR_EXECUTIVE,
    dept: 'helper',
  },
  { label: 'Helper Senior Manager', value: USER_ROLES.HELPER_SENIOR_MANAGER, dept: 'helper' },
  { label: 'Helper Senior Associate', value: USER_ROLES.HELPER_SENIOR_ASSOCIATE, dept: 'helper' },


  { label: 'Project Head', value: USER_ROLES.PROJECT_MANAGER, dept: 'project' },
  {
    label: 'Project Executive',
    value: USER_ROLES.PROJECT_EXECUTIVE,
    dept: 'project',
  },
  {
    label: 'Project Manager',
    value: USER_ROLES.PROJECT_EXECUTIVE,
    dept: 'project',
  },
  {
    label: 'Project Associate',
    value: USER_ROLES.PROJECT_ASSOCIATE,
    dept: 'project',
  },
  {
    label: 'Project Senior Executive',
    value: USER_ROLES.PROJECT_SENIOR_EXECUTIVE,
    dept: 'project',
  },
  {
    label: 'Project Senior Manager',
    value: USER_ROLES.PROJECT_SENIOR_EXECUTIVE,
    dept: 'project',
  },
  {
    label: 'Project Senior Associate',
    value: USER_ROLES.PROJECT_SENIOR_ASSOCIATE,
    dept: 'project',
  },


  {
    label: 'Developer Executive',
    value: USER_ROLES.DEVELOPER_EXECUTIVE,
    dept:'developer',
  },
  {
    label: 'Developer Manager',
    value: USER_ROLES.DEVELOPER_MANAGER,
    dept:'developer',
  },

  {
    label: 'Developer Associate',
    value: USER_ROLES.DEVELOPER_ASSOCIATE,
    dept:'developer',
  },

    {
      label: 'Developer Senior Executive',
      value: USER_ROLES.DEVELOPER_SENIOR_EXECUTIVE,
      dept:'developer',
    },
  {
    label: 'Developer Senior Manager',
    value: USER_ROLES.DEVELOPER_SENIOR_MANAGER,
    dept:'developer',
  },
  {
    label: 'Developer Senior Associate',
    value: USER_ROLES.DEVELOPER_SENIOR_ASSOCIATE,
    dept:'developer',
  },



  {
    label: 'Learning Executive',
    value: USER_ROLES.LEARNING_EXECUTIVE,
    dept:'learning',
  },
  {
    label: 'Learning Manager',
    value: USER_ROLES.LEARNING_MANAGER,
    dept:'learning',
  },
  {
    label: 'Learning Associate',
    value: USER_ROLES.LEARNING_ASSOCIATE,
    dept:'learning',
  },
  {
    label: 'Learning Senior Executive',
    value: USER_ROLES.LEARNING_SENIOR_EXECUTIVE,
    dept:'learning',
  },
  {
    label: 'Learning Senior Manager',
    value: USER_ROLES.LEARNING_SENIOR_MANAGER,
    dept:'learning',
  },
  {
    label: 'Learning Senior Associate',
    value: USER_ROLES.LEARNING_SENIOR_ASSOCIATE,
    dept:'learning',
  },

  {
    label: 'Fresher Executive',
    value: USER_ROLES.FRESHER_EXECUTIVE,
    dept:'fresher',
  },
  {
    label: 'Fresher Manager',
    value: USER_ROLES.FRESHER_MANAGER,
    dept:'fresher',
  },
  {
    label: 'Fresher Associate',
    value: USER_ROLES.FRESHER_ASSOCIATE,
    dept:'fresher',
  },
  {
    label: 'Fresher Senior Executive',
    value: USER_ROLES.FRESHER_SENIOR_EXECUTIVE,
    dept:'fresher',
  },
  {
    label: 'Fresher Senior Manager',
    value: USER_ROLES.FRESHER_SENIOR_MANAGER,
    dept:'fresher',
  },
  {
    label: 'Fresher Senior Associate',
    value: USER_ROLES.FRESHER_SENIOR_ASSOCIATE,
    dept:'fresher',
  },

  { label: 'Admin', value: USER_ROLES.ADMIN, dept: 'admin' },
]
