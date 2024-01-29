import { DeleteOutline } from '@mui/icons-material';
import { Box, Divider, IconButton, Typography } from '@mui/material';
import { Center, FullColumn, FullRow, Row } from '../../../Layout';
import { data as cartProducts } from '../../../api/cart.json';
import Quantity from '../../../components/Quantity';
import { imager } from '../../../utils/image';

type DesktopCartProductProps = {
    cartProduct: typeof cartProducts.items[number]
}

const DesktopCartProduct = ({ cartProduct: { total_price, quantity, name, variant } }: DesktopCartProductProps) => (
    <>
        <FullRow sx={{ gap: 1, padding: '16px 0', alignItems: 'center', minHeight: 130 }}>
            <Row sx={{ height: 1, alignItems: 'center', gap: 1, width: 0.5 }}>
                <Row sx={{ width: 0.2, height: 1 }}>
                    <img src={imager(variant.image.url)} alt={variant.title} style={{ width: '100%', borderRadius: 6, objectFit: 'cover' }} />
                </Row>
                <Center>
                    <FullColumn sx={{ gap: 1 }}>
                        <Typography fontWeight='bold' fontSize={14}>
                            {name}
                        </Typography>
                        <Box sx={{ height: 20, width: 20, borderRadius: '50%', backgroundColor: name.split(' ')[0] }} />
                    </FullColumn>
                </Center>
            </Row>
            <Row sx={{ width: 0.2 }}>
                <Quantity productQuantity={quantity} sx={{ gap: 1, borderRadius: 2 }} />
            </Row>
            <Row sx={{ width: 0.1, justifyContent: 'center' }}>
                <Typography fontWeight='bold'>
                    ${total_price}
                </Typography>
            </Row>
            <Row sx={{ width: 0.2, justifyContent: 'center' }}>
                <IconButton onClick={() => console.log('Delete')}>
                    <DeleteOutline />
                </IconButton>
            </Row>
        </FullRow>
        <Divider />
    </>
);

export default DesktopCartProduct;