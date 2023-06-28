export const USER_ROLES = {
  ADMIN: 'admin',
  ADMIN_MANAGER: 'admin manager',
  TRAINEE: 'trainee',
  DATA_SCIENTIST: 'data-scientist',

  DEVELOPER_EXECUTIVE: 'developer executive',
  DEVELOPER_MANAGER: 'developer manager',
  DEVELOPER_SENIOR_MANAGER: 'developer senior manager',
  DEVELOPER_SENIOR_EXECUTIVE: 'developer senior executive',
  DEVELOPER_ASSOCIATE: 'developer associate',
  DEVELOPER_SENIOR_ASSOCIATE: 'developer senior associate',

  FINANCE_MANAGER: 'finance-manager',

  FINANCE_EXECUTIVE: 'finance-executive',

  FINANCE_ASSOCIATE: 'finance-associate',

  FINANCE_SENIOR_EXECUTIVE: 'finance-senior-executive',

  FINANCE_SENIOR_ASSOCIATE: 'finance-senior-associate',

  FINANCE_SENIOR_MANAGER: 'finance-senior-manager',

  FRESHER_EXECUTIVE: 'fresher executive',
  FRESHER_MANAGER: 'fresher manager',
  FRESHER_SENIOR_MANAGER: 'fresher senior manager',
  FRESHER_SENIOR_EXECUTIVE: 'fresher senior executive',
  FRESHER_ASSOCIATE: 'fresher associate',
  FRESHER_SENIOR_ASSOCIATE: 'fresher senior associate',

  LEARNER_MANAGER: 'learner manager',
  LEARNER_EXECUTIVE: 'learner executive',
  LEARNER_ASSOCIATE: 'learner associate',
  LEARNER_SENIOR_MANAGER: 'learner senior manager',
  LEARNER_SENIOR_EXECUTIVE: 'learner senior executive',
  LEARNER_SENIOR_ASSOCIATE: 'learner senior associate',

  LEARNING_EXECUTIVE: 'learning executive',
  LEARNING_MANAGER: 'learning manager',
  LEARNING_ASSOCIATE: 'learning associate',
  LEARNING_SENIOR_EXECUTIVE: 'learning senior executive',
  LEARNING_SENIOR_MANAGER: 'learning senior manager',
  LEARNING_SENIOR_ASSOCIATE: 'learning senior associate',

  LEGAL_MANAGER: 'legal-manager',
  LEGAL_EXECUTIVE: 'legal-executive',
  LEGAL_ASSOCIATE: 'legal-associate',
  LEGAL_SENIOR_EXECUTIVE: 'legal-senior-executive',
  LEGAL_SENIOR_ASSOCIATE: 'legal-senior-associate',
  LEGAL_SENIOR_MANAGER: 'legal-senior-manager',

  HELPER_EXECUTIVE: 'helper-executive',
  HELPER_MANAGER: 'helper-manager',
  HELPER_ASSOCIATE: 'helper-associate',

  HELPER_SENIOR_EXECUTIVE: 'helper-senior-executive',

  HELPER_SENIOR_ASSOCIATE: 'helper-senior-associate',

  HELPER_SENIOR_MANAGER: 'helper-senior-manager',

  HR_EXECUTIVE: 'helper-executive',
  HR_MANAGER: 'helper-manager',
  HR_ASSOCIATE: 'helper-associate',
  HR_SENIOR_EXECUTIVE: 'helper-senior-executive',
  HR_SENIOR_ASSOCIATE: 'helper-senior-associate',
  HR_SENIOR_MANAGER: 'helper-senior-manager',

  ITDESK_EXECUTIVE: 'itdesk-executive',
  ITDESK_MANAGER: 'itdesk-manager',
  ITDESK_ASSOCIATE: 'itdesk-associate',
  ITDESK_SENIOR_EXECUTIVE: 'itdesk-senior-executive',
  ITDESK_SENIOR_MANAGER: 'itdesk-senior-manager',
  ITDESK_SENIOR_ASSOCIATE: 'itdesk-senior-associate',

  ITEMPLOYEE_EXECUTIVE: 'learning executive',
  ITEMPLOYEE_MANAGER: 'learning manager',
  ITEMPLOYEE_ASSOCIATE: 'learning associate',
  ITEMPLOYEE_SENIOR_EXECUTIVE: 'learning senior executive',
  ITEMPLOYEE_SENIOR_MANAGER: 'learning senior manager',
  ITEMPLOYEE_SENIOR_ASSOCIATE: 'learning senior associate',

  PROJECT_EXECUTIVE: 'project-executive',
  PROJECT_MANAGER: 'project-manager',
  PROJECT_ASSOCIATE: 'project-associate',

  PROJECT_SENIOR_EXECUTIVE: 'project-senior-executive',

  PROJECT_SENIOR_ASSOCIATE: 'project-senior-associate',

  PROJECT_SENIOR_MANAGER: 'project-senior-manager',

  SALES_MANAGER: 'sales-manager',
  SALES_EXECUTIVE: 'sales-executive',
  SALES_ASSOCIATE: 'sales-associate',
  SALES_SENIOR_ASSOCIATE: 'sales-senior-associate',
  SALES_SENIOR_EXECUTIVE: 'sales-senior-executive',
  SALES_SENIOR_MANAGER: 'sales-senior-manager',
  CP_AGENT: 'cp-agent',

  SUPPORT_EXECUTIVE: 'support-executive',
  SUPPORT_MANAGER: 'support-manager',
  SUPPORT_ASSOCIATE: 'support-associate',
  SUPPORT_SENIOR_EXECUTIVE: 'support-senior-executive',
  SUPPORT_SENIOR_ASSOCIATE: 'support-senior-associate',
  SUPPORT_SENIOR_MANAGER: 'support-senior-manager',

  TRAINER_MANAGER: 'trainer manager',

  TRAINER_EXECUTIVE: 'trainer executive',

  TRAINER_ASSOCIATE: 'trainer associate',

  TRAINER_SENIOR_MANAGER: 'trainer senior manager',

  TRAINER_SENIOR_EXECUTIVE: 'trainer senior executive',

  TRAINER_SENIOR_ASSOCIATE: 'trainer senior associate',
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

  { label: 'Marketing', value: 'Marketing' },

  { label: 'Python', value: 'Python' },

  { label: 'Web Development', value: 'Web Development' },
]

export const Lang = [
  { label: 'Select the Language', value: '' },

  { label: 'English', value: 'English' },

  { label: 'French', value: 'French' },
]

export const options = [
  { label: 'Select the product', value: '' },
  { value: 'Laptop', label: 'Laptop' },
  { value: 'Phone windows', label: 'Phone windows' },
  { value: 'Phone android', label: 'Phone android' },
  { value: 'Sim', label: 'Sim' },
]
export const options1 = [
  { label: 'Select the screen', value: '' },
  { value: 'amoled', label: 'Amoled' },
  { value: 'lcd', label: 'Lcd' },
  { value: 'hd', label: 'Hd' },
]
export const options2 = [
  { label: 'Select the sensor', value: '' },
  { value: 'acclerometer', label: 'Acclerometer' },
  { value: 'gyroscope', label: 'Gyroscope' },
  { value: 'proximity', label: 'Proximity' },
  { value: 'fingerprint', label: 'Fingerprint' },
]
export const options3 = [
  { label: 'Select the Nfc', value: '' },
  { value: 'yes', label: 'Yes' },
  { value: 'no', label: 'No' },
]
export const options4 = [
  { label: 'Select the display', value: '' },
  { value: 'gorilla', label: 'Gorilla' },
  { value: 'diamondglass', label: 'Diamond glass' },
  { value: 'temperglass', label: 'Temperglass' },
]
export const options5 = [
  { label: 'Select phone connector', value: '' },
  { value: 'microusb ', label: 'Micro USB' },
  { value: 'type-c', label: 'Type-c' },
  { value: 'usb type-a', label: 'Usb type-a' },
]
export const options6 = [
  { label: 'Select the keypad', value: '' },
  { value: 'virtual keypad', label: 'Virtual keypad' },
  { value: 'gboard', label: 'Gboard' },
  { value: 'swiftkey', label: 'Swiftkwy' },
]

export const ROLES_LIST = [
  { label: 'Select the role', value: '' },

  { label: 'Sales manager', value: USER_ROLES.SALES_MANAGER, dept: 'sales' },
  { label: 'Admin manager', value: USER_ROLES.ADMIN_MANAGER, dept: 'admin' },

  {
    label: 'Sales senior associate',
    value: USER_ROLES.SALES_SENIOR_ASSOCIATE,
    dept: 'sales',
  },

  {
    label: 'Sales associate',
    value: USER_ROLES.SALES_ASSOCIATE,
    dept: 'sales',
  },

  {
    label: 'Sales executive',

    value: USER_ROLES.SALES_EXECUTIVE,

    dept: 'sales',
  },
  { label: 'Sales Manager', value: USER_ROLES.SALES_MANAGER, dept: 'sales' },
  {
    label: 'Sales Associate',
    value: USER_ROLES.SALES_ASSOCIATE,
    dept: 'sales',
  },
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
    label: 'Sales Senior Associate',
    value: USER_ROLES.SALES_SENIOR_ASSOCIATE,
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
  {
    label: 'IT Employee Manager',
    value: USER_ROLES.ITEMPLOYEE_MANAGER,
    dept: 'it_employee',
  },
  {
    label: 'IT Employee Associate',
    value: USER_ROLES.ITEMPLOYEE_ASSOCIATE,
    dept: 'it_employee',
  },

  {
    label: 'Legal senior executive',

    value: USER_ROLES.LEGAL_SENIOR_EXECUTIVE,

    dept: 'legal',
  },

  {
    label: 'IT Employee Senior Manager',
    value: USER_ROLES.ITEMPLOYEE_SENIOR_MANAGER,
    dept: 'it_employee',
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

  {
    label: 'IT Desk Executive',
    value: USER_ROLES.ITDESK_EXECUTIVE,
    dept: 'it_desk',
  },
  {
    label: 'IT Desk Manager',
    value: USER_ROLES.ITDESK_MANAGER,
    dept: 'it_desk',
  },
  {
    label: 'IT Desk Associate',
    value: USER_ROLES.ITDESK_ASSOCIATE,
    dept: 'it_desk',
  },
  {
    label: 'IT Desk Senior executive',
    value: USER_ROLES.ITDESK_SENIOR_EXECUTIVE,
    dept: 'it_desk',
  },
  {
    label: 'IT Desk Senior manager',
    value: USER_ROLES.ITDESK_SENIOR_MANAGER,
    dept: 'it_desk',
  },
  {
    label: 'IT Desk Senior associate',
    value: USER_ROLES.ITDESK_SENIOR_ASSOCIATE,
    dept: 'it_desk',
  },

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

  { label: 'HR Executive', value: USER_ROLES.HR_EXECUTIVE, dept: 'hr' },
  { label: 'HR Manager', value: USER_ROLES.HR_MANAGER, dept: 'hr' },
  { label: 'HR Associate', value: USER_ROLES.HR_ASSOCIATE, dept: 'hr' },
  {
    label: 'HR Senior Executive',
    value: USER_ROLES.HR_SENIOR_EXECUTIVE,
    dept: 'hr',
  },
  {
    label: 'HR Senior Manager',
    value: USER_ROLES.HR_SENIOR_MANAGER,
    dept: 'hr',
  },
  {
    label: 'HR Senior Associate',
    value: USER_ROLES.HR_SENIOR_ASSOCIATE,
    dept: 'hr',
  },

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

  {
    label: 'Helper senior manager',
    value: USER_ROLES.HELPER_SENIOR_MANAGER,
    dept: 'helper',
  },

  {
    label: 'Helper associate',
    value: USER_ROLES.HELPER_ASSOCIATE,
    dept: 'helper',
  },

  {
    label: 'Helper senior associate',
    value: USER_ROLES.HELPER_SENIOR_ASSOCIATE,
    dept: 'helper',
  },

  {
    label: 'Helper executive',

    value: USER_ROLES.HELPER_EXECUTIVE,

    dept: 'helper',
  },
  { label: 'Helper Manager', value: USER_ROLES.HELPER_MANAGER, dept: 'helper' },
  {
    label: 'Helper Associate',
    value: USER_ROLES.HELPER_ASSOCIATE,
    dept: 'helper',
  },
  {
    label: 'Helper senior executive',

    value: USER_ROLES.HELPER_SENIOR_EXECUTIVE,

    dept: 'helper',
  },
  {
    label: 'Helper Senior Manager',
    value: USER_ROLES.HELPER_SENIOR_MANAGER,
    dept: 'helper',
  },
  {
    label: 'Helper Senior Associate',
    value: USER_ROLES.HELPER_SENIOR_ASSOCIATE,
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
    label: 'Developer Executive',
    value: USER_ROLES.DEVELOPER_EXECUTIVE,
    dept: 'developer',
  },

  {
    label: 'developer manager',

    value: USER_ROLES.DEVELOPER_MANAGER,
    dept: 'developer',
  },

  {
    label: 'Developer Associate',
    value: USER_ROLES.DEVELOPER_ASSOCIATE,
    dept: 'developer',
  },

  {
    label: 'Developer Senior Executive',
    value: USER_ROLES.DEVELOPER_SENIOR_EXECUTIVE,
    dept: 'developer',
  },
  {
    label: 'Developer Senior Manager',
    value: USER_ROLES.DEVELOPER_SENIOR_MANAGER,
    dept: 'developer',
  },

  {
    label: 'developer executive',

    value: USER_ROLES.DEVELOPER_EXECUTIVE,

    dept: 'developer',
  },
  {
    label: 'developer senior executive',
    value: USER_ROLES.DEVELOPER_SENIOR_EXECUTIVE,
    dept: 'developer',
  },
  {
    label: 'developer associate',
    value: USER_ROLES.DEVELOPER_ASSOCIATE,
    dept: 'developer',
  },
  {
    label: 'developer senior associate',
    value: USER_ROLES.DEVELOPER_SENIOR_ASSOCIATE,
    dept: 'developer',
  },

  {
    label: 'Learning Executive',
    value: USER_ROLES.LEARNING_EXECUTIVE,
    dept: 'learning',
  },

  {
    label: 'Learning Manager',
    value: USER_ROLES.LEARNING_MANAGER,
    dept: 'learning',
  },

  {
    label: 'Learning Associate',
    value: USER_ROLES.LEARNING_ASSOCIATE,
    dept: 'learning',
  },

  {
    label: 'Learning Senior Executive',
    value: USER_ROLES.LEARNING_SENIOR_EXECUTIVE,
    dept: 'learning',
  },

  {
    label: 'Learning Senior Manager',
    value: USER_ROLES.LEARNING_SENIOR_MANAGER,
    dept: 'learning',
  },

  {
    label: 'Learning Senior Associate',
    value: USER_ROLES.LEARNING_SENIOR_ASSOCIATE,
    dept: 'learning',
  },

  {
    label: 'Fresher Executive',
    value: USER_ROLES.FRESHER_EXECUTIVE,
    dept: 'fresher',
  },

  {
    label: 'learner manager',
    value: USER_ROLES.LEARNER_MANAGER,
    dept: 'learner',
  },
  {
    label: 'learner senior manager',
    value: USER_ROLES.LEARNER_SENIOR_MANAGER,
    dept: 'learner',
  },
  {
    label: 'learner executive',
    value: USER_ROLES.LEARNER_EXECUTIVE,
    dept: 'learner',
  },
  {
    label: 'learner senior executive',
    value: USER_ROLES.LEARNER_SENIOR_EXECUTIVE,
    dept: 'learner',
  },
  {
    label: 'learner associate',
    value: USER_ROLES.LEARNER_ASSOCIATE,
    dept: 'learner',
  },
  {
    label: 'learner senior associate',
    value: USER_ROLES.LEARNER_SENIOR_ASSOCIATE,
    dept: 'learner',
  },

  {
    label: 'fresher manager',

    value: USER_ROLES.FRESHER_MANAGER,
    dept: 'fresher',
  },

  {
    label: 'Fresher Associate',
    value: USER_ROLES.FRESHER_ASSOCIATE,
    dept: 'fresher',
  },
  {
    label: 'Fresher Senior Executive',
    value: USER_ROLES.FRESHER_SENIOR_EXECUTIVE,
    dept: 'fresher',
  },
  {
    label: 'Fresher Senior Manager',
    value: USER_ROLES.FRESHER_SENIOR_MANAGER,
    dept: 'fresher',
  },

  {
    label: 'fresher executive',

    value: USER_ROLES.FRESHER_EXECUTIVE,

    dept: 'fresher',
  },

  {
    label: 'fresher senior executive',

    value: USER_ROLES.FRESHER_SENIOR_EXECUTIVE,

    dept: 'fresher',
  },

  {
    label: 'fresher associate',

    value: USER_ROLES.FRESHER_ASSOCIATE,

    dept: 'fresher',
  },

  {
    label: 'fresher senior associate',

    value: USER_ROLES.FRESHER_SENIOR_ASSOCIATE,
    dept: 'fresher',
  },

  { label: 'Admin', value: USER_ROLES.ADMIN, dept: 'admin' },
]
