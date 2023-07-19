import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthContext } from '../../hooks/useAuthContext';
// import mui ui
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { styled, alpha } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import InputBase from '@mui/material/InputBase';
import Badge from '@mui/material/Badge';
import { Avatar } from '@mui/material';
// import joy ui
import MenuItem from '@mui/joy/MenuItem';
import Menu from '@mui/joy/Menu';
import Button from '@mui/joy/Button';
// import icons
import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));


export default function Header() {
  const buttonRef = React.useRef(null);
  const [open, setOpen] = React.useState(false);
  const { user, dispatch } = useAuthContext();
  const navigate = useNavigate();
  
  const handleClose = () => {
    setOpen(false);
  };

  const handleMyShop = () => {
    navigate('/shop');
    setOpen(false);
  }

  const handleLogout = async () => {
    try{
      await fetch('api/v1/auth/logout');
      dispatch({type: 'LOGOUT'});
      localStorage.removeItem('user');
    }catch(err){
      console.log(err);
    }
  }

  return (
      <AppBar position="fixed" variant='elevation' >
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, cursor: 'pointer' }} onClick={()=>navigate('/')}>
            GoodMarket
          </Typography>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>

          {user ? (
            <div style={{ display: 'flex', alignItems: "center" }}>
              <IconButton size="large" aria-label="show 4 new mails" color="inherit">
                <Badge badgeContent={4} color="error">
                  <ChatIcon />
                </Badge>
              </IconButton>
              <IconButton
                size="large"
                aria-label="show 17 new notifications"
                color="inherit"
              >
                <Badge badgeContent={17} color="error">
                  <NotificationsIcon />
                </Badge>
              </IconButton>
              <IconButton
                ref={buttonRef}
                size="large"
                aria-label="account of current user"
                aria-controls={'basic-menu'}
                aria-haspopup="true"
                onClick={() => { setOpen(!open) }}
                color="inherit"
              >
                <Avatar alt='Vinh Dương' src=''>VD</Avatar>
              </IconButton>
              <Menu
                id="basic-menu"
                anchorEl={buttonRef.current}
                open={open}
                onClose={handleClose}
                aria-labelledby="basic-demo-button"
              >
                <MenuItem onClick={handleClose}>My account</MenuItem>
                <MenuItem onClick={handleMyShop}>My shop</MenuItem>
                <MenuItem onClick={handleLogout}>Logout</MenuItem>
              </Menu>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>{`${user.firstname} ${user.lastname}`}</Typography>
            </div>
          ) : (
            <div style={{ display: 'flex', alignItems: "center" }}>
              <Button variant='soft' color='primary' sx={{mr: 2}} onClick={()=>navigate('/login')}>Login</Button>
              <Button variant='solid' color='danger' onClick={()=>navigate('/signup')}>Sign up</Button>
            </div>
          )}
        </Toolbar>
      </AppBar>
  );
}
