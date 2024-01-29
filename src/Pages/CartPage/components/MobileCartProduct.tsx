import { DeleteOutline } from '@mui/icons-material';
import { Box, Divider, IconButton, Typography } from '@mui/material';
import { FullColumn, FullRow, Row } from '../../../Layout';
import { data as cartProducts } from '../../../api/cart.json';
import Quantity from '../../../components/Quantity';
import { imager } from '../../../utils/image';

type MobileCartProductProps = {
    cartProduct: typeof cartProducts.items[number]
}

const MobileCartProduct = ({ cartProduct: { total_price, quantity, name, variant } }: MobileCartProductProps) => (
    <>
        <FullRow sx={{ gap: 1, padding: '16px 0', alignItems: 'center', minHeight: 130 }}>
            <Row sx={{ width: 0.2 }}>
                <img src={imager(variant.image.url)} alt={variant.title} style={{ width: '100%', borderRadius: 6, objectFit: 'cover' }} />
            </Row>
            <FullColumn sx={{ gap: 1, width: 1 }}>
                <FullRow sx={{ gap: 1, justifyContent: 'space-between' }}>
                    <Row sx={{ alignItems: 'center', gap: 1 }}>
                        <FullColumn sx={{ gap: 1 }}>
                            <Typography fontWeight='bold' fontSize={14}>
                                {name}
                            </Typography>
                            <Box sx={{ height: 20, width: 20, borderRadius: '50%', backgroundColor: name.split(' ')[0] }} />
                        </FullColumn>
                    </Row>
                    <Row>
                        <Typography fontWeight='bold'>
                            ${total_price}
                        </Typography>
                    </Row>
                </FullRow>
                <FullRow sx={{ gap: 1, height: 0.5 }}>
                    <FullRow sx={{ justifyContent: 'space-between' }}>
                        <Row>
                            <Quantity productQuantity={quantity} sx={{ gap: 1, borderRadius: 2, border: '1px solid #9F9F9F' }} />
                        </Row>
                        <Row sx={{ width: 0.2, justifyContent: 'flex-end' }}>
                            <IconButton onClick={() => console.log('Delete')}>
                                <DeleteOutline />
                            </IconButton>
                        </Row>
                    </FullRow>
                </FullRow>
            </FullColumn>
        </FullRow>
        <Divider />
    </>
);

export default MobileCartProduct;