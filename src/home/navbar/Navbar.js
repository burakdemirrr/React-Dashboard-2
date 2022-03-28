import { ChatBubbleOutlineOutlined, DarkModeOutlined, FullscreenExitOutlined, LanguageOutlined, NotificationsNoneOutlined, SearchOutlined } from '@mui/icons-material'
import { Avatar, Tooltip } from '@mui/material';
import React from 'react'
import "./navbar.scss"
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import PersonAdd from '@mui/icons-material/PersonAdd';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';
const Navbar = () => {


  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };


  return (



    <div className='navbar'>
      <div className="wrapper">
        <div className="search">
          <input type="text" placeholder='Search...' />
          <SearchOutlined className="icon"/>
        </div>
        <div className="items">
          <div className="item">
            <LanguageOutlined className="icon"/>
            English
          </div>
          <div className="item">
            <DarkModeOutlined className="icon"/>
          </div>
          <div className="item">
            <FullscreenExitOutlined className="icon"/>
          </div>
          <div className="item">
            <NotificationsNoneOutlined className="icon"/>
            <div className="counter">1</div>
          </div>
          <div className="item">
            <ChatBubbleOutlineOutlined className="icon"/>
            <div className="counter">2</div>
          </div>
          <div className="item">
          <Tooltip title="Account settings">
          <IconButton
            onClick={handleClick}
            size="small"
            sx={{ ml: 2 }}
            aria-controls={open ? 'account-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
          >
            <img src="https://scontent.fyei6-5.fna.fbcdn.net/v/t1.18169-9/13925081_1025252104255997_7970422232339802997_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=ACnyTVWGSdIAX-rQcUQ&_nc_oc=AQk885aIOZuUr3_BfcW0_MgTPsHBx2zQmAtUVlzQf2o3lp7MfhfjeLvCjXMGkXOONJc&_nc_ht=scontent.fyei6-5.fna&oh=00_AT83VAqsepur3ZLQDzzDgE6YQApWGPrGE_c4NHS7TwGZvA&oe=6266ACDA" className='avatar' alt="" />

          </IconButton>
        </Tooltip>
          </div>
        </div>
      </div>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: 'visible',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            mt: 1.5,
            '& .MuiAvatar-root': {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            '&:before': {
              content: '""',
              display: 'block',
              position: 'absolute',
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: 'background.paper',
              transform: 'translateY(-50%) rotate(45deg)',
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <MenuItem>
          <img  className="avatarr" src="https://scontent.fyei6-5.fna.fbcdn.net/v/t1.18169-9/13925081_1025252104255997_7970422232339802997_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=ACnyTVWGSdIAX-rQcUQ&_nc_oc=AQk885aIOZuUr3_BfcW0_MgTPsHBx2zQmAtUVlzQf2o3lp7MfhfjeLvCjXMGkXOONJc&_nc_ht=scontent.fyei6-5.fna&oh=00_AT83VAqsepur3ZLQDzzDgE6YQApWGPrGE_c4NHS7TwGZvA&oe=6266ACDA" alt="" /> Profile
        </MenuItem>
        <MenuItem>
        <img src="https://scontent.fyei6-5.fna.fbcdn.net/v/t1.18169-9/13925081_1025252104255997_7970422232339802997_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=ACnyTVWGSdIAX-rQcUQ&_nc_oc=AQk885aIOZuUr3_BfcW0_MgTPsHBx2zQmAtUVlzQf2o3lp7MfhfjeLvCjXMGkXOONJc&_nc_ht=scontent.fyei6-5.fna&oh=00_AT83VAqsepur3ZLQDzzDgE6YQApWGPrGE_c4NHS7TwGZvA&oe=6266ACDA" className='avatarr' alt="" />
 My account
        </MenuItem>
        <Divider />
        <MenuItem>
          <ListItemIcon>
            <PersonAdd fontSize="small" />
          </ListItemIcon>
          Add another account
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <Settings fontSize="small" />
          </ListItemIcon>
          Settings
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          Logout
        </MenuItem>
      </Menu>
    </div>
  )
}

export default Navbar