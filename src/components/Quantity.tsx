import { Add, Remove } from '@mui/icons-material';
import { BoxProps, IconButton, Typography } from '@mui/material';
import { useMemo, useState } from 'react';
import { Center } from '../Layout';

type QuantityProps = {
    productQuantity: number
} & BoxProps

const Quantity = ({ productQuantity, ...props }: QuantityProps) => {
    const [quantity, setQuantity] = useState(productQuantity);
    const isDisabled = useMemo(() => quantity === 1, [quantity]);

    const increaseAmount = () => setQuantity(prevAmount => prevAmount + 1);
    const decreaseAmount = () => setQuantity(prevAmount => prevAmount - 1);

    return (
        <Center {...props}>
            <IconButton onClick={decreaseAmount} sx={{ borderRadius: 0 }} disabled={isDisabled} >
                <Remove sx={{ fontSize: 18, ...(!isDisabled ? { color: 'black' } : {}) }} />
            </IconButton>
            <Typography sx={{ width: 26, textAlign: 'center', fontSize: 16 }}>
                {quantity}
            </Typography>
            <IconButton onClick={increaseAmount} sx={{ borderRadius: 0 }}>
                <Add sx={{ fontSize: 18, color: 'black' }} />
            </IconButton>
        </Center>
    );
};

export default Quantity;