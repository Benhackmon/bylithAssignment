import { Add, Remove } from '@mui/icons-material';
import { IconButton, Typography } from '@mui/material';
import { useMemo, useState } from 'react';
import { Center } from '../../../Layout';

const Amount = () => {
    const [amount, setAmount] = useState(1);
    const isDisabled = useMemo(() => amount === 1, [amount]);

    const increaseAmount = () => setAmount(prevAmount => prevAmount + 1);
    const decreaseAmount = () => setAmount(prevAmount => prevAmount - 1);

    return (
        <Center sx={{ border: '1px solid grey', borderRadius: 1 }}>
            <IconButton onClick={decreaseAmount} sx={{ borderRadius: 0 }} disabled={isDisabled} >
                <Remove sx={{ fontSize: 14, ...(!isDisabled ? { color: 'black' } : {}) }} />
            </IconButton>
            <Typography sx={{ width: 20, textAlign: 'center', fontSize: 16 }}>
                {amount}
            </Typography>
            <IconButton onClick={increaseAmount} sx={{ borderRadius: 0 }}>
                <Add sx={{ fontSize: 14, color: 'black' }} />
            </IconButton>
        </Center>
    );
};

export default Amount;