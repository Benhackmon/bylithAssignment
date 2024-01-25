import { AppBar as MuiAppBar, Toolbar } from '@mui/material';
import { FullRow } from '../Layout';

const AppBar = () => {
    return (
        <MuiAppBar position='sticky'>
            <Toolbar>
                <FullRow>
                </FullRow>
            </Toolbar>
        </MuiAppBar >
    );
};

export default AppBar;