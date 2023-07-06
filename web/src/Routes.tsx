import { Router, Route, Redirect } from '@redwoodjs/router'

import { USER_ROLES } from 'src/constants/userRoles'
import { useAuth } from 'src/context/firebase-auth-context'

import CourseProgress from './components/A_LearningModule/CourseProgress'
import AccessDeniedPage from './pages/AccessDeniedPage/AccessDeniedPage'
import ConstructModulePage from './pages/ConstructModulePage/ConstructModulePage'
import CourceContentPage from './pages/CourceContentPage/CourceContentPage'
import CourceOverviewPage from './pages/CourceOverviewPage/CourceOverviewPage'
import CrmHomePage from './pages/CrmHomePage/CrmHomePage'
import ErpAccountHomePage from './pages/ErpAccountHomePage/ErpAccountHomePage'
import FinanceHomePagePage from './pages/FinanceHomePagePage/FinanceHomePagePage'
import HomePage from './pages/HomePage/HomePage'
import LeadsCallerBoardPage from './pages/LeadsCallerBoardPage/LeadsCallerBoardPage'
import LeadsManagerPage from './pages/LeadsManagerPage/LeadsManagerPage'
import LearningPage from './pages/LearningPage/LearningPage'
import LeaveApprovalPage from './pages/LeaveApprovalPage/LeaveApprovalPage'
import LegalHomePage from './pages/LegalHomePage/LegalHomePage'
import LoginPage from './pages/LoginPage/LoginPage'
import MyJourneyPage from './pages/MyJourneyPage/MyJourneyPage'
import NotFoundPage from './pages/NotFoundPage/NotFoundPage'
import PrivacyPolicyPage from './pages/PrivacyPolicyPage/PrivacyPolicyPage'
import Profile from './pages/Profile/Profile'
import ProjectEditPage from './pages/ProjectEditPage/ProjectEditPage'
import ProjectModulePage from './pages/ProjectModulePage/ProjectModulePage'
import UsersAdminPage from './pages/UsersAdminPage/UsersAdminPage'
// import CourseProgress from './components/A_LearningModule/LearningModules/CourseProgress'

const defaultRoutes = () => {
  return (
    <>
      {/* <Route path="/admin/home" page={HomePage} name="home" />
      <Route path="/admin/users-admin" page={UsersAdminPage} name="usersAdmin" />
      <Route path="/admin/leads-manager" page={LeadsManagerPage} name="leadsManager" />
      <Route path="/admin/leads-caller-board" page={LeadsCallerBoardPage} name="leadsCallerBoard" />
      <Route path="/admin/project-edit/{uid}" page={ProjectEditPage} name="projectEdit" />
      <Route path="/admin/project-module" page={ProjectModulePage} name="projectModule" />
      <Route path="/admin/crm-module" page={CrmHomePage} name="crmModule" />
      <Route path="/admin/finance-module" page={FinanceHomePagePage} name="financeModule" />
      <Route path="/admin/legal-module" page={LegalHomePage} name="legalModule" />
      <Route path="/admin/erp-account" page={ErpAccountHomePage} name="erpAccount" />
      <Route path="/users-admin" page={UsersAdminPage} name="usersAdmin" />
      <Route path="/leads-manager" page={LeadsManagerPage} name="leadsManager" />
      <Route path="/leads-caller-board" page={LeadsCallerBoardPage} name="leadsCallerBoard" /> */}
      <Route path="/project-edit/{uid}" page={ProjectEditPage} name="projectEdit" />
      <Route path="/project-module" page={ProjectModulePage} name="projectModule" />
      {/* <Route path="/cource-overview/{uid}" page={CourceOverviewPage} name="courceOverview" /> */}

      {/* <Route path="/legal-module" page={LegalHomePage} name="legalModule" />
      <Route path="/finance-module" page={FinanceHomePagePage} name="financeModule" />
      <Route path="/crm-module" page={CrmHomePage} name="crmModule" /> */}
      <Route path="/erp-account" page={ErpAccountHomePage} name="erpAccount" />
    </>
  )
}
const Routes = () => {
  const { user } = useAuth()
  console.log('user yo yo is ', user)

  let UpdatedRoutes = defaultRoutes()
  if (user?.role == null) {
    console.log('user yo yo is it is ', user)
    UpdatedRoutes = (
      <>
        <Route path="/login" page={LoginPage} name="login" />
      </>
    )
    // return <Redirect to="/login" />
  } else if (user?.role?.includes(USER_ROLES.ADMIN)) {
    UpdatedRoutes = (
      <>
        <Route path="/admin/home" page={HomePage} name="home" />
        <Route path="/admin/users-admin" page={UsersAdminPage} name="usersAdmin" />
        <Route path="/admin/leads-manager" page={LeadsManagerPage} name="leadsManager" />
        <Route path="/admin/leads-caller-board" page={LeadsCallerBoardPage} name="leadsCallerBoard" />
        <Route path="/admin/project-edit/{uid}" page={ProjectEditPage} name="projectEdit" />
        <Route path="/admin/project-module" page={ProjectModulePage} name="projectModule" />
        <Route path="/admin/crm-module" page={CrmHomePage} name="crmModule" />
        <Route path="/admin/finance-module" page={FinanceHomePagePage} name="financeModule" />
        <Route path="/admin/legal-module" page={LegalHomePage} name="legalModule" />
        <Route path="/admin/erp-account" page={ErpAccountHomePage} name="erpAccount" />
        <Route path="/privacyPolicy" page={PrivacyPolicyPage} name="privacyPolicy" />
      </>
    )
  } else if (user?.role?.includes(USER_ROLES.HR_MANAGER) || user?.role?.includes(USER_ROLES.HR_EXECUTIVE)) {
    UpdatedRoutes = (
      <>
        <Route path="/users-admin" page={UsersAdminPage} name="usersAdmin" />
      </>
    )
  } else if (user?.role?.includes(USER_ROLES.SALES_MANAGER) || user?.role?.includes(USER_ROLES.SALES_EXECUTIVE) || user?.role?.includes(USER_ROLES.CP_AGENT)) {
    UpdatedRoutes = (
      <>
        <Route path="/leads-manager" page={LeadsManagerPage} name="leadsManager" />
        <Route path="/leads-caller-board" page={LeadsCallerBoardPage} name="leadsCallerBoard" />
      </>
    )
  } else if (user?.role?.includes(USER_ROLES.CRM_MANAGER) || user?.role?.includes(USER_ROLES.CRM_EXECUTIVE)) {
    UpdatedRoutes = (
      <>
        <Route path="/crm-module" page={CrmHomePage} name="crmModule" />
      </>
    )
  } else if (user?.role?.includes(USER_ROLES.FINANCE_MANAGER) || user?.role?.includes(USER_ROLES.FINANCE_EXECUTIVE)) {
    UpdatedRoutes = (
      <>
        <Route path="/finance-module" page={FinanceHomePagePage} name="financeModule" />
      </>
    )
  } else if (user?.role?.includes(USER_ROLES.LEGAL_MANAGER) || user?.role?.includes(USER_ROLES.LEGAL_EXECUTIVE)) {
    UpdatedRoutes = (
      <>
        <Route path="/legal-module" page={LegalHomePage} name="legalModule" />
      </>
    )
  } else if (user?.role?.includes(USER_ROLES.PROJECT_MANAGER) || user?.role?.includes(USER_ROLES.PROJECT_EXECUTIVE)) {
    UpdatedRoutes = (
      <>
        <Route path="/home" page={HomePage} name="home" />
      </>
    )
  } else {
    if (user?.role) {
      console.log('user yo yo is am i here role issue')
      UpdatedRoutes = (
        <>
          <Route path="/access-denied" page={AccessDeniedPage} name="accessDenied" />
        </>
      )
    }
  }

  return (
    <Router>
      <Route path="/cource-overview" page={CourceOverviewPage} name="courceOverview" />

      <Route path="/my-journey" page={MyJourneyPage} name="myJourney" />

      <Route path="/leave-approval" page={LeaveApprovalPage} name="leaveApproval" />

      {/* <Route path="/cource-overview" page={CourceOverviewPage} name="courceOverview" /> */}
      <Route path="/cource-overview/{uid}" page={CourceOverviewPage} name="courceOverview" />
      {/* <Route path="/cource-content" page={CourceContentPage} name="courceContent" /> */}
      <Route path="/course-progress" page={CourseProgress} name="CourseProgress" />
      <Route path="/learning" page={LearningPage} name="learning" />
      <Route path="/privacyPolicy" page={PrivacyPolicyPage} name="privacyPolicy" />
      <Route path="/construct-module" page={ConstructModulePage} name="constructModule" />
      {/* <Route path="/admin/home" page={HomePage} name="home" /> */}
      <Route path="/erp-account-home" page={ErpAccountHomePage} name="erpAccountHome" />
      <Route path="/legal-home" page={LegalHomePage} name="legalHome" />
      <Route path="/crm-home" page={CrmHomePage} name="crmHome" />
      <Route path="/finance-home-page" page={FinanceHomePagePage} name="financeHomePage" />
      {UpdatedRoutes}
      <Route path="/profile" page={Profile} name="profile" />
      <Route path="/admin/login" page={LoginPage} name="login" />
      <Route path="/login" page={LoginPage} name="login" />
      <Route path="/" page={LoginPage} name="login" />
      <Route path="/courses/{id}" page={CoursedetailsPage} name="coursedetails" />
      <Route notfound page={NotFoundPage} />

      <Route path="/course-progress" page={CourseProgress} name="CourseProgress" />




    </Router>
  )
}

export default Routes
