import React, { useState } from 'react'
import { CheckBox } from '@mui/icons-material'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'

import {

  BsPersonFill,

  BsBook,

  BsGearFill,

  BsPeopleFill,

  BsCodeSlash,

  BsCheckCircle,

} from 'react-icons/bs'




import TimeOffTable from 'src/components/TableComp/TimeOffTable'

import ProfileAssetManagement from 'src/components/A_HrModule/ProfileAssetManagement'

import Account from 'src/components/A_HrModule/profile/account'

import NewProfile from 'src/components/A_HrModule/profile/NewProfile'

import PersonalDetails from 'src/components/A_HrModule/profile/personalDetails'




const LessonComponent = () => {

  const [activeTab, setActiveTab] = useState('profile')




  const handleTabClick = (tab) => {

    setActiveTab(tab)

  }




  const renderContent = () => {

    switch (activeTab) {

      case 'profile':

        return activeTab === 'profile' ? <NewProfile /> : null

      case 'learnings':

        return activeTab === 'learnings' ? <PersonalDetails /> : null

      case 'assectManagement':

        return activeTab === 'assectManagement' ? (

          <ProfileAssetManagement />

        ) : null

      case 'contributing':

        return activeTab === 'contributing' ? <Account /> : null

      case 'technologies':

        return activeTab === 'technologies' ? <CheckBox /> : null

      case 'leavesApprovals':

        return activeTab === 'leavesApprovals' ? <TimeOffTable /> : null

      default:

        return null

    }

  }




  return (

    <div className="lesson-component">

      <div className="css-tsniyt">

        <div

          className="tabs"

          style={{ display: 'flex', justifyContent: 'flex-end' }}

        >

          <button

            className={activeTab === 'profile' ? 'active' : ''}

            onClick={() => handleTabClick('profile')}

            style={{

              marginRight: '10px',

              fontWeight: 'bold',

              borderRadius: '3px',

              color: activeTab === 'profile' ? 'black' : '#cacccb',

              display: 'flex',

              flexDirection: 'column',

              alignItems: 'center',

              backgroundColor:

                activeTab === 'profile' ? '#ffffff' : 'transparent',

              border:

                activeTab === 'profile'

                  ? '1px solid #ffffff'

                  : '1px solid transparent',

              padding: '5px',

            }}

          >

            <BsPersonFill size={24} />

            <span>Profile</span>

          </button>

          <button

            className={activeTab === 'learnings' ? 'active' : ''}

            onClick={() => handleTabClick('learnings')}

            style={{

              marginRight: '10px',

              fontWeight: 'bold',

              borderRadius: '3px',

              color: activeTab === 'learnings' ? 'black' : '#cacccb',

              display: 'flex',

              flexDirection: 'column',

              alignItems: 'center',

              backgroundColor:

                activeTab === 'learnings' ? '#ffffff' : 'transparent',

              border:

                activeTab === 'learnings'

                  ? '1px solid #ffffff'

                  : '1px solid transparent',

              padding: '5px',

            }}

          >

            <BsBook size={24} />

            <span>Learnings</span>

          </button>




          <button

            className={activeTab === 'assectManagement' ? 'active' : ''}

            onClick={() => handleTabClick('assectManagement')}

            style={{

              marginRight: '10px',

              fontWeight: 'bold',

              borderRadius: '3px',

              color: activeTab === 'assectManagement' ? 'black' : '#cacccb',

              display: 'flex',

              flexDirection: 'column',

              alignItems: 'center',

              backgroundColor:

                activeTab === 'assectManagement' ? '#ffffff' : 'transparent',

              border:

                activeTab === 'assectManagement'

                  ? '1px solid #ffffff'

                  : '1px solid transparent',

              padding: '5px',

            }}

          >

            <BsGearFill size={24} />

            <span>Asset Management</span>

          </button>

          <button

            className={activeTab === 'contributing' ? 'active' : ''}

            onClick={() => handleTabClick('contributing')}

            style={{

              marginRight: '10px',

              fontWeight: 'bold',

              borderRadius: '3px',

              color: activeTab === 'contributing' ? 'black' : '#cacccb',

              display: 'flex',

              flexDirection: 'column',

              alignItems: 'center',

              backgroundColor:

                activeTab === 'contributing' ? '#ffffff' : 'transparent',

              border:

                activeTab === 'contributing'

                  ? '1px solid #ffffff'

                  : '1px solid transparent',

              padding: '5px',

            }}

          >

            <BsPeopleFill size={24} />

            <span>Contributing</span>

          </button>

          {/* <button

            className={activeTab === 'technologies' ? 'active' : ''}

            onClick={() => handleTabClick('technologies')}

            style={{

              marginRight: '10px',

              fontWeight: 'bold',

              borderRadius: '3px',

              color: activeTab === 'technologies' ? 'black' : '#cacccb',

              display: 'flex',

              flexDirection: 'column',

              alignItems: 'center',

              backgroundColor: activeTab === 'technologies' ? '#ffffff' : 'transparent',

              border: activeTab === 'technologies' ? '1px solid #ffffff' : '1px solid transparent',

              padding: '5px',

            }}

          >

            <BsCodeSlash size={24} />

            <span>Technologies</span>

          </button> */}

          <button

            className={activeTab === 'leavesApprovals' ? 'active' : ''}

            onClick={() => handleTabClick('leavesApprovals')}

            style={{

              marginRight: '10px',

              fontWeight: 'bold',

              borderRadius: '3px',

              color: activeTab === 'leavesApprovals' ? 'black' : '#cacccb',

              display: 'flex',

              flexDirection: 'column',

              alignItems: 'center',

              backgroundColor:

                activeTab === 'leavesApprovals' ? '#ffffff' : 'transparent',

              border:

                activeTab === 'leavesApprovals'

                  ? '1px solid #ffffff'

                  : '1px solid transparent',

              padding: '5px',

            }}

          >

            <BsCheckCircle size={24} />

            <span>Leaves Approvals</span>

          </button>

        </div>

      </div>




      <div className="content-container" style={{ padding: '10px' }}>

        <Card>

          <CardContent>{renderContent()}</CardContent>

        </Card>

      </div>

    </div>

  )

}




export default LessonComponent
