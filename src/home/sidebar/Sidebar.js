import React from 'react'
import "./sidebar.scss";
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import { AccountCircleOutlined, CardGiftcardOutlined, DeliveryDining, InsertChartOutlined, LogoutOutlined, NotificationsOutlined, PsychologyOutlined, SettingsOutlined, SettingsSystemDaydreamOutlined, StoreOutlined } from '@mui/icons-material';

function sidebar() {
  return (
    <div className='sidebar'>
        <div className="top"><span className='logo'>Burrak</span></div> 
        <hr/>

        <div className="center">
        <ul>
          <p className="title">MAIN</p>
          <li>
            <DashboardIcon className="icon"/>
            <span>Dashboard</span>
          </li>
          <p className="title">LISTS</p>
          <li>
            <PersonOutlineOutlinedIcon className="icon"/>
            <span>Users</span>
          </li>       
          <li>                
            <StoreOutlined className="icon"/>
            <span>Products</span>
          </li>
          <li>
            <CardGiftcardOutlined className="icon"/>
            <span>Orders</span>
          </li>

          <li>
            <DeliveryDining className="icon"/>
            <span>Delivery</span>
          </li>
          <p className="title">USEFUL</p>
          <li>
            <InsertChartOutlined className="icon"/>
            <span>Stats</span>
          </li>

          <li>
            <NotificationsOutlined className="icon"/>
            <span>Notifications</span>
          </li>
          <p className="title">SERVICE</p>

          <li>
            <SettingsSystemDaydreamOutlined className="icon"/>
            <span>System Health</span>
          </li>

          <p className="title">USER</p>
          <li>
            <PsychologyOutlined className="icon"/>
            <span>Logs</span>
          </li>

          <li>
            <SettingsOutlined className="icon"/>
            <span>Settings</span>
          </li>

          <li>
            <AccountCircleOutlined className="icon"/>
            <span>Profile</span>
          </li>

          <li>
            <LogoutOutlined className="icon"/>
            <span>Logout</span>
          </li>
        </ul>
        </div>


    </div>
  )
}

export default sidebar