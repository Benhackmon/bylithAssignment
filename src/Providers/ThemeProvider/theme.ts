import { createTheme } from '@mui/material';

export const theme = createTheme({
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    textTransform: 'none'
                }
            }
        }
    },
    typography: {
        allVariants: {
            color: '#474747'
        },
        fontFamily: 'Poppins, sans-serif',
    }
});