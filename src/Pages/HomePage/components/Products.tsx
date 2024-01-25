import { Grid } from '@mui/material';
import { Center } from '../../../Layout';
import Product from './Product';
import { data as products } from './products.json';

const imager = (url: string) =>
    `https://fedtest.bylith.com/api/imager.php?url=${url}&type=fit&width=1000&height=1000&quality=70`

const getPriceConfig = (minPrice: number, maxPrice: number) => ({
    minPrice, maxPrice, isdiscount: minPrice !== maxPrice, discount: (minPrice / maxPrice) * 100 + '%'
})

const Products = () => {
    return (
        <Center>
            <Grid container spacing={3}>
                {products?.map(product => (
                    <Product key={product.id} product={product} />
                ))}
            </Grid>
        </Center>
    );
};

export default Products;