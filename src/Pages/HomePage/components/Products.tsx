import { Grid, Pagination } from '@mui/material';
import { Center, FullRow } from '../../../Layout';
import Product from './Product';
import { data as products } from './products.json';

const Products = () => (
    <Center sx={{ flexDirection: 'column', padding: 1 }}>
        <Grid container spacing={1}>
            {products?.map(product => <Product key={product.id} product={product} />)}
        </Grid>
        <FullRow sx={{ padding: 3 }}>
            <Center sx={{ width: 1 }}>
                <Pagination color='primary' count={5}>

                </Pagination>
            </Center>
        </FullRow>
    </Center>
);

export default Products;