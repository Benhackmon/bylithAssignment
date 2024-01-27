import { Grid, Pagination } from '@mui/material';
import { Center, FullRow } from '../../../Layout';
import { data as products } from '../../../api/products.json';
import ProductCard from './ProductCard';

const Products = () => (
    <Center sx={{ flexDirection: 'column', padding: 1 }}>
        <Grid container spacing={1}>
            {products?.map(product => <ProductCard key={product.id} product={product} />)}
        </Grid>
        <FullRow sx={{ padding: 2 }}>
            <Center sx={{ width: 1 }}>
                <Pagination color='primary' count={5} />
            </Center>
        </FullRow>
    </Center>
);

export default Products;