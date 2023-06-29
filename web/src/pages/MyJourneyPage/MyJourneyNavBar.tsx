import { useState } from 'react'

import { Box, Menu, MenuItem, Typography } from '@mui/material'
import { useDispatch } from 'react-redux'

import { routes } from '@redwoodjs/router'
import { Link } from '@redwoodjs/router/dist/links'

// import ModuleSwitchDrop from 'src/components/A_SideMenu/modulesSwitchDrop'
// import { GlobalSearchBar } from 'src/components/HeadNavBar/GlobalSearchBar'
import { useAuth } from 'src/context/firebase-auth-context'
import { logout as logoutAction } from 'src/state/actions/user'

const MyJourneyNavBar = ({ selModule, setSelModule }) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)
  const open = Boolean(anchorEl)
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const [filteredUnits, setFilteredUnits] = useState([])

  const { user, logout } = useAuth()
  const dispatch = useDispatch()
  const makeFilterFun = (id, viewModule) => {
    setSelModule(viewModule)
    console.log('i was clicked', id, viewModule)
  }
  const handleClose = async (menuItem) => {
    setAnchorEl(null)
    if (menuItem === 'Logout') {
      await logout()
      dispatch(logoutAction())
    }
  }

  return (
    <div>
      <div className="flex items-center flex-shrink-0 h-14 px-2  pl-0 bg-white border-b ">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
          width="40"
          height="35"
          fill="#141446"
        >
          <path d="M186.12 343.34c-9.65 9.65-9.65 25.29 0 34.94 9.65 9.65 25.29 9.65 34.94 0L378.24 221.1c19.29-19.29 50.57-19.29 69.86 0s19.29 50.57 0 69.86L293.95 445.1c19.27 19.29 50.53 19.31 69.82.04l.04-.04 119.25-119.24c38.59-38.59 38.59-101.14 0-139.72-38.59-38.59-101.15-38.59-139.72 0l-157.22 157.2zm244.53-104.8c-9.65-9.65-25.29-9.65-34.93 0l-157.2 157.18c-19.27 19.29-50.53 19.31-69.82.05l-.05-.05c-9.64-9.64-25.27-9.65-34.92-.01l-.01.01c-9.65 9.64-9.66 25.28-.02 34.93l.02.02c38.58 38.57 101.14 38.57 139.72 0l157.2-157.2c9.65-9.65 9.65-25.29.01-34.93zm-261.99 87.33l157.18-157.18c9.64-9.65 9.64-25.29 0-34.94-9.64-9.64-25.27-9.64-34.91 0L133.72 290.93c-19.28 19.29-50.56 19.3-69.85.01l-.01-.01c-19.29-19.28-19.31-50.54-.03-69.84l.03-.03L218.03 66.89c-19.28-19.29-50.55-19.3-69.85-.02l-.02.02L28.93 186.14c-38.58 38.59-38.58 101.14 0 139.72 38.6 38.59 101.13 38.59 139.73.01zm-87.33-52.4c9.64 9.64 25.27 9.64 34.91 0l157.21-157.19c19.28-19.29 50.55-19.3 69.84-.02l.02.02c9.65 9.65 25.29 9.65 34.93 0 9.65-9.65 9.65-25.29 0-34.93-38.59-38.59-101.13-38.59-139.72 0L81.33 238.54c-9.65 9.64-9.65 25.28-.01 34.93h.01z" />
        </svg>
        <span
          style={{ marginLeft: '10px' }}
          className="relative z-10 flex items-center text-md font-extrabold leading-none text-black select-none pl-0 ml-4"
        >
          EnsarSpace .
        </span>
        {/* <section className="mt-1">
          <ModuleSwitchDrop
            type={selModule}
            id={'Status'}
            setStatusFun={makeFilterFun}
            filteredUnits={filteredUnits}
            pickedValue={selModule}
          />
        </section> */}

        {/* <GlobalSearchBar /> */}
        <button className="flex items-center justify-center h-10 px-4 ml-auto "></button>
        <button className="flex items-center justify-center h-10 text-sm font-medium "></button>
        <Box
          sx={{
            cursor: 'pointer',
          }}
          display="flex"
          component="span"
          onClick={handleClick}
        >
          <button className="relative ml-2 text-sm focus:outline-none group  items-center justify-center h-10 text-sm font-medium">
            <div className="flex items-center justify-between w-10 h-10 rounded ">
              <svg
                width="30"
                fill="currentColor"
                height="30"
                className="text-gray-800"
                viewBox="0 0 1792 1792"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M1523 1339q-22-155-87.5-257.5t-184.5-118.5q-67 74-159.5 115.5t-195.5 41.5-195.5-41.5-159.5-115.5q-119 16-184.5 118.5t-87.5 257.5q106 150 271 237.5t356 87.5 356-87.5 271-237.5zm-243-699q0-159-112.5-271.5t-271.5-112.5-271.5 112.5-112.5 271.5 112.5 271.5 271.5 112.5 271.5-112.5 112.5-271.5zm512 256q0 182-71 347.5t-190.5 286-285.5 191.5-349 71q-182 0-348-71t-286-191-191-286-71-348 71-348 191-286 286-191 348-71 348 71 286 191 191 286 71 348z"></path>
              </svg>
            </div>
          </button>
          <Box display="flex" flexDirection="column" mr={2}>
            <Typography variant="body2">{user?.displayName}</Typography>
            <Typography variant="caption" className="text-gray-500">
              {user?.role?.[0]}
            </Typography>
          </Box>
        </Box>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            'aria-labelledby': 'basic-button',
          }}
        >
          <MenuItem onClick={handleClose}>
            <Link to={routes.profile()}>Profile</Link>
          </MenuItem>
          <MenuItem onClick={handleClose}>My account</MenuItem>
          <MenuItem onClick={() => handleClose('Logout')}>Logout</MenuItem>
        </Menu>
      </div>
    </div>
  )
}

export default MyJourneyNavBar
