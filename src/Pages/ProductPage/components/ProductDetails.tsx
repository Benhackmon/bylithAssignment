import { Button, Typography, useTheme } from '@mui/material';
import { FullColumn, Row } from '../../../Layout';
import { data as product } from '../../../api/product.json';
import Amount from './Amount';
import ProductSelectField from './ProductSelectField';

type ProductDetailsProps = {
    product: typeof product
}

const ProductDetails = ({ product }: ProductDetailsProps) => {
    const { breakpoints: { down } } = useTheme();

    return (
        <FullColumn sx={{
            flex: 2, gap: 1, padding: 1,
            overflow: 'auto',
            [down('sm')]: {
                flex: 8,
                backgroundColor: 'white',
                borderTopLeftRadius: 12,
                borderTopRightRadius: 12,
                boxShadow: '0px 0px 20px 0px rgba(0,0,0,0.3)'
            }
        }}>
            <Row>
                <Typography sx={{
                    bgcolor: 'rgba(0, 104, 245, 0.5)', padding: '6px 18px',
                    borderRadius: 1, fontSize: 12, color: 'white'
                }}>
                    NEW
                </Typography>
            </Row>
            <Row>
                <Typography sx={{ fontWeight: 'bold', color: '#474747', fontSize: 26 }}>{product.title}</Typography>
            </Row>
            <Row>
                <Typography sx={{ fontWeight: 'bold', color: '#474747', fontSize: 20 }}>${Number(product.min_price)}</Typography>
            </Row>
            <Row>
                <Typography sx={{ color: '#9F9F9F', fontSize: 12 }}>{product.description}</Typography>
            </Row>
            {
                product.attributes.map(attr =>
                    <Row key={attr.id} sx={{ width: 0.5, minWidth: 150 }}>
                        <ProductSelectField attr={attr} />
                    </Row>
                )
            }
            <Row>
                <Amount />
            </Row>
            <Row>
                <Button variant='contained' sx={{ borderRadius: 10, [down('sm')]: { width: 1 } }}>Add to Cart</Button>
            </Row >
        </FullColumn >
    );
};

export default ProductDetails;