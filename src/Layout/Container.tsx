import { BoxProps } from '@mui/material';
import { FullColumn } from '.';

export const Container = ({ children, sx, ...props }: BoxProps) =>
    <FullColumn
        sx={{
            width: 1,
            ...sx
        }}
        {...props}
    >
        {children}
    </FullColumn>