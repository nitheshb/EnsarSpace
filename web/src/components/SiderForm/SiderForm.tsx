import { pid } from 'process'

import { Fragment, useEffect, useState } from 'react'

import { Dialog, Transition } from '@headlessui/react'
import { XIcon } from '@heroicons/react/outline'

import AddBankDetailsForm from '../addBankDetailsForm'
import AddBlockForm from '../AddBlockForm/AddBlockForm'
import AdditionalChargesForm from '../AdditionalChargesForm/AdditionalChargesForm'
import AddLeadForm from '../AddLeadForm'
import AddPhaseForm from '../AddPhaseForm/AddPhaseForm'
import AddTaskForm from '../AddTaskForm'
import AddUnit from '../AddUnit'
import ConstructUnitsDetails from '../ConstructModule/ConstructUnitsDetails'
import UnitSideViewCRM from '../CrmModule/CrmUnitSideView'
import CrmUnitSideView from '../crmUnitSideView'
import CustomerProfileSideView from '../customerProfileSideView'
import DialogFormBody from '../DialogFormBody/DialogFormBody'
import InventoryViewSideForm from '../DialogFormBody/InventoryViewSideView'
import CaptureUnitPayment from '../FinanceModule/CapturePayment'
import LegalDocsUplaodHome from '../LeadUplodCsv/Legal_Docs_upload'
import LeadsDropHomes from '../LeadUplodCsv/uploadHome'
import LegalDocsViewHome from '../LegalModule/viewLegalDocument'
import MoreDetailsPhaseForm from '../MoreDetailsPhaseForm/MoreDetailsPhaseForm'
import PaymentScheduleForm from '../PaymentScheduleForm/PaymentScheduleForm'
import ProjPhaseHome from '../ProjPhaseHome/ProjPhaseHome'
import TransactionUpdateSideView from '../transactionUpdateSideView'
import ViewUnitDetails from '../ViewUnitDetails'
import {
  searchValue as searchedVal,
  searchData as searchResponse,
} from 'src/state/actions/search'
import { useDispatch } from 'react-redux'
import NotificationsSetupForm from '../A_ProjModule/NotificatoinsSetupFromHome'
import OnBoardingAssignBody from '../onBordingAssert/OnBoardingAssignBody'
import OnBoardAssertBody from '../onBordingAssert/onBoardAssertBody'
import AddCourseDialog from '../TableComp/SUserSignupBody/SUserSignupBody'
const SiderForm = ({
  assetPayload,
  open,
  setOpen,
  title,
  customerDetails = {},
  data = {},
  onCloseDisabled = false,
  pId,
  phaseFeed,
  BlockFeed,
  myBlock,
  projectDetails,
  phaseDetails,
  blockDetails,
  widthClass,
  unitViewerrr,
  unitsViewMode,
  setUnitsViewMode,
  leadDetailsObj,
  projectsList,
  viewLegalDocData,
  viewUnitConstData,
  transactionData,
  selCustomerPayload,
  selUnitDetails,
  selSubMenu,
  selSubMenu2,
  setIsClicked,
  wbPayload,
}) => {
  // dont write too many here
  //  this is for customerProfileSideView
  useEffect(() => {
    console.log('title is ', title)
  }, [])
  const dispatch = useDispatch()
  return (
    <Transition.Root show={open || false} as={Fragment}>
      <Dialog
        as="div"
        className="fixed inset-0 overflow-hidden"
        onClose={onCloseDisabled ? () => {} : () => setOpen()}
        style={{ zIndex: '1000' }}
      >
        <div className="absolute inset-0 overflow-hidden">
          <Transition.Child
            as={Fragment}
            enter="ease-in-out duration-500"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in-out duration-500"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="absolute inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>
          <div className="fixed inset-y-0 right-0 pl-10 max-w-full flex">
            <Transition.Child
              as={Fragment}
              enter="transform transition ease-in-out duration-500 sm:duration-700"
              enterFrom="translate-x-full"
              enterTo="translate-x-0"
              leave="transform transition ease-in-out duration-500 sm:duration-700"
              leaveFrom="translate-x-0"
              leaveTo="translate-x-full"
            >
              <div
                className={`relative w-screen ${
                  title === 'Add Lead' ||
                  title === 'Create Project' ||
                  title === 'Edit Project' ||
                  title === 'upload_legal_docs'
                    ? 'max-w-2xl'
                    : widthClass
                }
                 ${unitsViewMode ? 'max-w-7xl' : widthClass}`}
              >
                <Transition.Child
                  as={Fragment}
                  enter="ease-in-out duration-500"
                  enterFrom="opacity-0"
                  enterTo="opacity-100"
                  leave="ease-in-out duration-500"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <div className="absolute top-0 left-0 -ml-8 pt-4 pr-2 flex sm:-ml-10 sm:pr-4">
                    <button
                      type="button"
                      className="rounded-md text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-white"
                      onClick={() => {
                        setOpen(false)
                        setIsClicked(false)
                        dispatch(searchedVal(''))
                        dispatch(searchResponse({}))
                      }}
                    >
                      <span className="sr-only">Close panel</span>
                      <XIcon className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>
                </Transition.Child>
                {title === 'Add Task' && (
                  <AddTaskForm title={title} dialogOpen={setOpen} />
                )}
                {(title === 'Create Project' || title === 'Edit Project') && (
                  <DialogFormBody
                    title={title}
                    dialogOpen={setOpen}
                    project={data}
                  />
                )}
                {(title === 'Add Phase' || title === 'Edit Phase') && (
                  <AddPhaseForm
                    title={title}
                    dialogOpen={setOpen}
                    phase={data}
                  />
                )}
                {title === 'LaptopDetailPage' && (
                  <OnBoardingAssignBody assetPayload={assetPayload} />
                )}

                {(title === 'Add Block' || title === 'Edit Block') && (
                  <AddBlockForm
                    title={title}
                    dialogOpen={setOpen}
                    data={data}
                  />
                )}

                {title === 'Import Units' ||
                  (title === 'Import Project Units' && (
                    <LeadsDropHomes
                      title={title}
                      dialogOpen={setOpen}
                      pId={pId}
                      myPhase={phaseDetails}
                      myBlock={myBlock}
                    />
                  ))}
                {title === 'applyLeave'
                  && (
                    <AddCourseDialog />
                  )}

                {title === 'AddAsset'
                  &&  (
                    <OnBoardAssertBody />
                )}

                {title === 'Add Unit' && (
                  <AddUnit
                    title={title}
                    phaseFeed={phaseFeed}
                    BlockFeed={BlockFeed}
                    dialogOpen={setOpen}
                    projectDetails={projectDetails}
                    phaseDetails={phaseDetails}
                    blockDetails={blockDetails}
                  />
                )}
                {title === 'upload_legal_docs' && (
                  <LegalDocsUplaodHome
                    title={title}
                    dialogOpen={setOpen}
                    pId={pId}
                    source={'planDiagram'}
                    myPhase={phaseDetails}
                    myBlock={myBlock}
                    projectsList={projectsList}
                  />
                )}
                {title === 'disp_legal_docs' && (
                  <LegalDocsViewHome
                    title={title}
                    dialogOpen={setOpen}
                    pId={pId}
                    source={'planDiagram'}
                    myPhase={phaseDetails}
                    myBlock={myBlock}
                    projectsList={projectsList}
                    viewLegalDocData={viewLegalDocData}
                  />
                )}
                {title === 'disp_unit_constDetails' && (
                  <ConstructUnitsDetails
                    title={title}
                    dialogOpen={setOpen}
                    myPhase={phaseDetails}
                    myBlock={myBlock}
                    projectsList={projectsList}
                    projectDetails={projectDetails}
                    viewUnitConstData={viewUnitConstData}
                  />
                )}
                {title === 'View Unit' && (
                  <ViewUnitDetails
                    title={title}
                    data={data}
                    phaseFeed={phaseFeed}
                    BlockFeed={BlockFeed}
                    dialogOpen={setOpen}
                    projectDetails={projectDetails}
                    phaseDetails={phaseDetails}
                    blockDetails={blockDetails}
                    leadDetailsObj={data?.leadDetailsObj}
                  />
                )}

                {title === 'Import Leads' && (
                  <LeadsDropHomes
                    title={title}
                    dialogOpen={setOpen}
                    pId={pId}
                    myPhase={undefined}
                    myBlock={undefined}
                  />
                )}
                {title === 'Add Lead' && (
                  <AddLeadForm title={title} dialogOpen={setOpen} />
                )}
                {title === 'Edit to Push Lead' && (
                  <AddLeadForm
                    title={title}
                    dialogOpen={setOpen}
                    customerDetails={customerDetails}
                  />
                )}
                {title === 'User Profile' && (
                  <CustomerProfileSideView
                    openUserProfile={false}
                    customerDetails={customerDetails}
                    unitViewerrr={unitViewerrr}
                    unitsViewMode={unitsViewMode}
                    setUnitsViewMode={setUnitsViewMode}
                  />
                )}
                {title === 'Notification Setup' && (
                  <NotificationsSetupForm
                    title={title}
                    projectDetails={projectDetails}
                    wbPayload={wbPayload}
                  />
                )}
                {title === 'Project Inventory' && (
                  <InventoryViewSideForm
                    title={title}
                    projectDetails={projectDetails}
                  />
                  // <ProjPhaseHome
                  //   projectDetails={projectDetails}
                  //   leadDetailsObj={undefined}
                  //   source={undefined}
                  //   unitDetails={undefined}
                  // />
                )}
                {title === 'Additional Charges' && (
                  <AdditionalChargesForm
                    title={title}
                    data={data}
                    source={undefined}
                  />
                )}
                {title === 'Payment Schedule' && (
                  <PaymentScheduleForm
                    title={title}
                    data={data}
                    source={undefined}
                  />
                )}
                {title === 'More Details' && (
                  <MoreDetailsPhaseForm
                    title={title}
                    dialogOpen={setOpen}
                    data={data}
                  />
                )}
                {title === 'Plan Diagram' && (
                  <LeadsDropHomes
                    title={title}
                    dialogOpen={setOpen}
                    pId={pId}
                    source={'planDiagram'}
                    myPhase={phaseDetails}
                    myBlock={myBlock}
                  />
                )}
                {title === 'Brouchers' && (
                  <LeadsDropHomes
                    title={title}
                    dialogOpen={setOpen}
                    pId={pId}
                    source={'Brouchers'}
                    myPhase={phaseDetails}
                    myBlock={myBlock}
                  />
                )}
                {title === 'Approvals' && (
                  <LeadsDropHomes
                    title={title}
                    dialogOpen={setOpen}
                    pId={pId}
                    source={'Approvals'}
                    myPhase={phaseDetails}
                    myBlock={myBlock}
                  />
                )}



                {/* {title === 'AssignAsset' && <OnBoardAssertBody />} */}

                {title === 'Bank Accounts' && (
                  <AddBankDetailsForm
                    title={title}
                    dialogOpen={setOpen}
                    phase={data}
                  />
                )}
                {title === 'Virtual Accounts' && (
                  <AddBankDetailsForm
                    title={title}
                    dialogOpen={setOpen}
                    phase={data}
                  />
                )}
                {title === 'Transaction' && (
                  <TransactionUpdateSideView
                    openUserProfile={false}
                    customerDetails={customerDetails}
                    unitViewerrr={unitViewerrr}
                    unitsViewMode={unitsViewMode}
                    setUnitsViewMode={setUnitsViewMode}
                    transactionData={transactionData}
                  />
                )}
                {title === 'CrmUnitSideView' && (
                  <CrmUnitSideView
                    openUserProfile={false}
                    customerDetails={customerDetails}
                    unitViewerrr={unitViewerrr}
                    unitsViewMode={unitsViewMode}
                    setUnitsViewMode={setUnitsViewMode}
                  />
                )}
                {title === 'unitDetails_crm_view' && (
                  <UnitSideViewCRM
                    openUserProfile={false}
                    customerDetails={customerDetails}
                    unitViewerrr={unitViewerrr}
                    unitsViewMode={unitsViewMode}
                    setUnitsViewMode={setUnitsViewMode}
                    transactionData={transactionData}
                    selCustomerPayload={selCustomerPayload}
                    selSubMenu={selSubMenu}
                    selSubMenu2={selSubMenu2}
                  />
                )}
                {title === 'capturePayment' && (
                  <CaptureUnitPayment selUnitDetails={selUnitDetails} />
                )}
              </div>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  )
}

export default SiderForm
