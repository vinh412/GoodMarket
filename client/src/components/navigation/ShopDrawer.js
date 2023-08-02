import React from 'react';
import { useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import StorefrontOutlinedIcon from '@mui/icons-material/StorefrontOutlined';
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';
import FeedOutlinedIcon from '@mui/icons-material/FeedOutlined';
import Collapse from '@mui/material/Collapse';
import AddIcon from '@mui/icons-material/Add';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import StarBorder from '@mui/icons-material/StarBorder';

const drawerWidth = 260;

function ShopDrawer() {
    const navigate = useNavigate();
    const [openShopItems, setOpenShopItems] = React.useState(false);
    const [openProductItems, setOpenProductItems] = React.useState(false);

  const handleClickOpenShopItems = () => {
    setOpenShopItems(!openShopItems);
  };
  const handleClickOpenProductItems = () => {
    setOpenProductItems(!openProductItems);
  };
    return (
        <Drawer variant='permanent' sx={{ width: drawerWidth, flexShrink: 0, [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box', zIndex: 0 }, }}>
            <Toolbar />
            <Box sx={{ overflow: 'auto' }}>
                <List
                    sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
                    component="nav"
                    aria-labelledby="nested-list-subheader"
                >
                    <ListItemButton onClick={handleClickOpenProductItems}>
                        <ListItemIcon>
                            <LocalMallOutlinedIcon />
                        </ListItemIcon>
                        <ListItemText primary="Quản lý sản phẩm" />
                        {openProductItems ? <ExpandLess /> : <ExpandMore />}
                    </ListItemButton>
                    <Collapse in={openProductItems} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                            <ListItemButton sx={{ pl: 4 }} onClick={() => navigate('/shop/products')}>
                                <ListItemIcon>
                                    <StarBorder />
                                </ListItemIcon>
                                <ListItemText primary="Tất cả" />
                            </ListItemButton>
                            <ListItemButton sx={{ pl: 4 }}>
                                <ListItemIcon>
                                    <AddIcon />
                                </ListItemIcon>
                                <ListItemText primary="Thêm" />
                            </ListItemButton>
                        </List>
                    </Collapse>
                    <ListItemButton onClick={handleClickOpenShopItems}>
                        <ListItemIcon>
                            <StorefrontOutlinedIcon />
                        </ListItemIcon>
                        <ListItemText primary="Quản lý shop" />
                        {openShopItems ? <ExpandLess /> : <ExpandMore />}
                    </ListItemButton>
                    <Collapse in={openShopItems} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                            <ListItemButton sx={{ pl: 4 }}>
                                <ListItemIcon>
                                    <FeedOutlinedIcon />
                                </ListItemIcon>
                                <ListItemText primary="Hồ sơ Shop" />
                            </ListItemButton>
                        </List>
                    </Collapse>
                </List>

            </Box>
        </Drawer>
    )
}

export default ShopDrawer