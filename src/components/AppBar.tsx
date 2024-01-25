import { Badge, Button, IconButton, AppBar as MuiAppBar, Toolbar } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { FullRow, Row } from '../Layout';
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
                <FullRow sx={{ justifyContent: 'space-around', alignItems: 'center' }}>
                    <Row>
                        <img src={Logo} style={{ height: 20, minHeight: '50%' }} />
                    </Row>
                    <Row sx={{ gap: 4 }}>
                        <Button sx={{ color: 'black' }} onClick={goToHome}>Home</Button>
                        <IconButton>
                            <Badge badgeContent={0} showZero color="error"
                                sx={{ "& .MuiBadge-badge": { fontSize: 10 } }}
                            >
                                <Cart />
                            </Badge>
                        </IconButton>
                    </Row>
                </FullRow>
            </Toolbar>
        </MuiAppBar >
    );
};

export default AppBar;