import * as React from 'react';
import { NavLink } from 'react-router-dom'
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MenuIcon from '@mui/icons-material/Menu';

const options = [
  <NavLink to='/articles'>Articles</NavLink>,
  <NavLink to='/about'>About</NavLink>,
  <NavLink to='/contact-us'>Contact Us</NavLink>,
];

const ITEM_HEIGHT = 48;

export default function MobileHeader() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <header className='mobile-header'>
      <IconButton
        aria-label="more"
        id="long-button"
        aria-controls="long-menu"
        aria-expanded={open ? 'true' : undefined}
        aria-haspopup="true"
        onClick={handleClick}
      >
        <MenuIcon className='mobile-icon' />
      </IconButton>
      <Menu
        className='nav-item'
        id="long-menu"
        MenuListProps={{
          'aria-labelledby': 'long-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            maxHeight: ITEM_HEIGHT * 4.5,
            width: '20ch',
          },
        }}
      >
        {options.map((option) => (
          <MenuItem key={option} selected={option === <NavLink to='/articles'>Articles</NavLink>} onClick={handleClose}>
            {option}
          </MenuItem>
        ))}
      </Menu>
    </header>
  );
}
