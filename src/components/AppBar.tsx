import { Badge, Button, IconButton, AppBar as MuiAppBar, Toolbar } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { Center, FullRow, Row } from '../Layout';
import { Cart } from '../assets/Cart.tsx';
import Logo from '../assets/Logo.png';

const AppBar = () => {
    const navigate = useNavigate();

    const goToHome = () => {
        navigate('/products');
    };

    return (
        <MuiAppBar position='sticky'
            sx={{ backgroundColor: 'transparent', boxShadow: 0 }}
        >
            <Toolbar>
                <Center sx={{ width: 1 }}>
                    <FullRow sx={{
                        minWidth: '80vw', width: 800, maxWidth: '100vw',
                        justifyContent: 'space-between', alignItems: 'center'
                    }}>
                        <Row>
                            <img src={Logo} style={{ height: 20, minHeight: '50%' }} />
                        </Row>
                        <Row>
                            <Button sx={{ color: '#474747' }} onClick={goToHome}>Home</Button>
                            <IconButton>
                                <Badge badgeContent={0} showZero color="error"
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