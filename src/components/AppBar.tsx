import { Menu as MenuIcon } from '@mui/icons-material';
import { Badge, Button, IconButton, Menu, MenuItem, AppBar as MuiAppBar, Toolbar, useMediaQuery, useTheme } from '@mui/material';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Center, FullRow, Row } from '../Layout';
import { Cart } from '../assets/Cart.tsx';
import Logo from '../assets/Logo.png';

const AppBar = () => {
    const navigate = useNavigate();
    const { breakpoints: { down } } = useTheme();
    const isMobileView = useMediaQuery(down('sm'));
    const [menuAnchor, setMenuAnchor] = useState(null);

    const openMenu = ({ currentTarget }: any) => {
        setMenuAnchor(currentTarget);
    };

    const closeMenu = () => {
        setMenuAnchor(null);
    };

    const goToHome = () => {
        navigate('/products');
        isMobileView && closeMenu();
    };

    const goToCart = () => {
        navigate('/cart');
    };

    return (
        <MuiAppBar position='sticky' sx={{ backgroundColor: 'transparent', boxShadow: 0 }}>
            <Toolbar>
                <Center sx={{ width: 1 }}>
                    {isMobileView && <Row>
                        <IconButton onClick={openMenu}>
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            anchorEl={menuAnchor}
                            open={Boolean(menuAnchor)}
                            onClose={closeMenu}
                        >
                            <MenuItem onClick={goToHome}>Go to Home</MenuItem>
                        </Menu>
                    </Row>}
                    <FullRow sx={{
                        minWidth: '80vw', width: 800, maxWidth: '100vw',
                        justifyContent: 'space-between', alignItems: 'center'
                    }}>
                        <Row sx={{ [down('sm')]: { justifyContent: 'center', width: 1 } }}>
                            < img src={Logo} style={{ height: 20, minHeight: '50%' }} />
                        </Row>
                        <Row>
                            {!isMobileView && <Button sx={{ color: '#474747' }} onClick={goToHome}>Home</Button>}
                            <IconButton onClick={goToCart}>
                                <Badge badgeContent={3} showZero color="error"
                                    sx={{ "& .MuiBadge-badge": { fontSize: 10 } }}
                                >
                                    <Cart />
                                </Badge>
                            </IconButton>
                        </Row>
                    </FullRow>
                </Center>
            </Toolbar>
        </MuiAppBar >
    );
};

export default AppBar;