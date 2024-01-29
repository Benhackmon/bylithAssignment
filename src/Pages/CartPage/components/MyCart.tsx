import { Typography, useMediaQuery, useTheme } from '@mui/material';
import { Column, FullColumn, FullRow, Row } from '../../../Layout';
import { data as cartProducts } from '../../../api/cart.json';
import DesktopCartProduct from './DesktopCartProduct';
import MobileCartProduct from './MobileCartProduct';

type MyCartProps = {
    cartProducts: typeof cartProducts
}

const MyCart = ({ cartProducts }: MyCartProps) => {
    const { breakpoints: { down, up } } = useTheme();
    const isDesktopView = useMediaQuery(up('sm'));

    return (
        <FullColumn sx={{ flex: 2, width: 1, padding: 3, gap: 2 }}>
            <Row sx={{ borderBottom: '2px solid #474747', width: 200, paddingBottom: 1, [down('sm')]: { width: 1 } }}>
                <Typography sx={{ color: '#474747' }} fontSize={30} fontWeight='bold'>
                    My Cart
                </Typography>
            </Row>
            <FullColumn sx={{ [up('sm')]: { padding: 3 } }}>
                {
                    isDesktopView && <FullRow sx={{ gap: 1 }}>
                        <Row sx={{ width: 0.5 }}><Typography sx={{ color: '#9F9F9F' }}>PRODUCTS</Typography></Row>
                        <Row sx={{ width: 0.2 }}><Typography sx={{ color: '#9F9F9F' }}>QUANTITY</Typography></Row>
                        <Row sx={{ width: 0.1 }}><Typography sx={{ color: '#9F9F9F' }}>PRICE</Typography></Row>
                        <Row sx={{ width: 0.2 }}></Row>
                    </FullRow>
                }
                <Column sx={{ overflow: 'auto', maxHeight: 400 }}>
                    {cartProducts.items.map(cartProduct => isDesktopView
                        ? <DesktopCartProduct key={cartProduct.id} {...{ cartProduct }} />
                        : <MobileCartProduct key={cartProduct.id} {...{ cartProduct }} />
                    )}
                </Column>
            </FullColumn>
        </FullColumn>
    );
};

export default MyCart;