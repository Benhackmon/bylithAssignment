import { useTheme } from '@mui/material';
import { Center } from '../../Layout';
import MyCart from './components/MyCart';
import Summary from './components/Summary';
import { data as cartProducts } from '../../api/cart.json';

const CartPage = () => {
    const { breakpoints: { up, down } } = useTheme();

    return (
        <Center sx={{
            height: 1, width: 1,
            [up('sm')]: {
                flexDirection: 'row',
                padding: 10,
            },
            [down('sm')]: {
                flexDirection: 'column',
            }
        }}>
            <MyCart cartProducts={cartProducts} />
            <Summary cartProducts={cartProducts} />
        </Center >
    );
};

export default CartPage;