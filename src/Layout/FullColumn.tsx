import { Box, BoxProps } from '@mui/material';

export const FullColumn = ({ children, sx, ...props }: BoxProps) =>
    <Box
        sx={{
            display: 'flex',
            flexDirection: 'column',
            height: 1,
            ...sx
        }}
        {...props}
    >
        {children}
    </Box>