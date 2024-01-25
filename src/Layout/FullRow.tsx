import { Box, BoxProps } from '@mui/material';

export const FullRow = ({ children, sx, ...props }: BoxProps) =>
    <Box
        sx={{
            display: 'flex',
            flexDirection: 'row',
            width: 1,
            ...sx
        }}
        {...props}
    >
        {children}
    </Box>