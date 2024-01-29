import { Button, Divider, Typography, useTheme } from '@mui/material';
import { Center, Column, FullColumn, FullRow, Row } from '../../../Layout';
import { data as cartProducts } from '../../../api/cart.json';

type MyCartProps = {
    cartProducts: typeof cartProducts
}

const Summary = ({ cartProducts }: MyCartProps) => {
    const { breakpoints: { up, down } } = useTheme();

    return (
        <FullColumn sx={{
            flex: 1, gap: 2, padding: 3,
            [down('sm')]: {
                maxHeight: 300,
                width: 1,
                flex: 8,
                backgroundColor: 'white',
                borderTopLeftRadius: 24,
                borderTopRightRadius: 24,
                boxShadow: '0px 0px 15px 0px rgba(0,0,0,0.3)'
            }
        }}>
            <Center sx={{ height: 1, width: 1 }}>
                <Center sx={{
                    height: 1, width: 1,
                    backgroundColor: 'white',
                    [up('sm')]: {
                        minHeight: 300,
                        height: 0.4,
                        padding: 3,
                        maxHeight: 600,
                        width: 300,
                        borderRadius: 2, boxShadow: '0px 0px 10px 0px rgba(0,0,0,0.3)'
                    }
                }}>
                    <FullColumn sx={{ width: 1, gap: 4 }}>
                        <FullRow sx={{ justifyContent: 'space-between', alignItems: 'baseline' }}>
                            <Typography sx={{ color: '#474747', fontWeight: 'bold', fontSize: 24 }}>
                                Summary
                            </Typography>
                            <Button variant='text' sx={{ color: 'black' }}>
                                Clear all
                            </Button>
                        </FullRow>
                        <Column>
                            <FullRow sx={{ justifyContent: 'space-between', alignItems: 'center', padding: '12px 0' }}>
                                <Typography sx={{ color: '#9F9F9F' }}>
                                    Items
                                </Typography>
                                <Typography sx={{ color: '#9F9F9F' }}>
                                    {cartProducts.items.length}
                                </Typography>
                            </FullRow>
                            <Divider />
                            <FullRow sx={{ justifyContent: 'space-between', alignItems: 'center', padding: '12px 0' }}>
                                <Typography sx={{ fontWeight: 'bold' }}>
                                    Total
                                </Typography>
                                <Typography sx={{ fontWeight: 'bold' }}>
                                    ${cartProducts.total_price}
                                </Typography>
                            </FullRow>
                        </Column>
                        <Row>
                            <Button onClick={() => console.log('Checkout')}
                                variant='contained'
                                sx={{ borderRadius: 10, width: 130, [down('sm')]: { width: 1, fontSize: 20 }, backgroundColor: '#0068F5' }}>
                                Checkout
                            </Button>
                        </Row>
                    </FullColumn>
                </Center>
            </Center>
        </FullColumn >
    );
};

export default Summary;