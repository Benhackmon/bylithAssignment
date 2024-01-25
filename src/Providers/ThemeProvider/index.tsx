import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles';
import { ReactNode } from 'react';
import { theme } from './theme';

type ThemeProviderProps = {
    children: ReactNode
}

const ThemeProvider = ({ children }: ThemeProviderProps) => (
    <MuiThemeProvider theme={theme}>
        {children}
    </MuiThemeProvider>
);

export default ThemeProvider