import { Typography } from '@mui/material';
import { FullColumn, Row } from '../../../Layout';
import { data as product } from '../../../api/product.json';

type ProductDetailsProps = {
    product: typeof product
}

const ProductDetails = ({ product }: ProductDetailsProps) => {
    console.log(product);

    return (
        <FullColumn sx={{ flex: 3 }}>
            <Row>
                <Typography sx={{ bgcolor: 'rgba(0, 104, 245, 0.5)', padding: '6px 18px', borderRadius: 1, fontSize: 14, color: 'white' }}>
                    NEW
                </Typography>
            </Row>
            <Row>
                <Typography sx={{ fontWeight: 'bold', color: '#474747', fontSize: 32 }}>
                    {product.title}
                </Typography>
            </Row>
            <Row>
                <Typography sx={{ color: '#9F9F9F', fontSize: 14 }}>
                    {product.description}
                </Typography>
            </Row>
        </FullColumn >
    );
};

export default ProductDetails;