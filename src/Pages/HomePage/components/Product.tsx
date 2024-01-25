import { Grid, Typography } from '@mui/material';
import { Row } from '../../../Layout';
import { data as products } from './products.json';

const imager = (url: string) =>
    `https://fedtest.bylith.com/api/imager.php?url=${url}&type=fit&width=1000&height=1000&quality=70`

const getDiscount = (maxPrice: number, minPrice: number) => minPrice === maxPrice ? null : Math.trunc((minPrice / maxPrice) * 100) + '%'

const Product = ({ product }: { product: typeof products[number] }) => {
    const discount = getDiscount(Number(product.max_price), Number(product.min_price));

    return (
        <Grid item xs={12} sm={6} md={3} lg={3} sx={{ minHeight: 200, maxHeight: 350 }}>
            <img src={imager(product.images[0].url)}
                style={{ height: 200, width: '100%', objectFit: 'cover', borderRadius: 5 }}
                alt={product.images[0].title} />
            <Typography fontWeight='bold'
                sx={{
                    overflow: "hidden",
                    textOverflow: "clip",
                    display: "-webkit-box",
                    WebkitLineClamp: "1",
                    WebkitBoxOrient: "vertical",
                }}>
                {product.title}
            </Typography>
            <Row sx={{ gap: 1 }}>
                <Typography fontWeight='bold'>{product.min_price}$</Typography>
                {discount &&
                    <Typography sx={{ textDecoration: "line-through" }}
                        fontSize={14}>
                        {product.max_price}$
                    </Typography>
                }
            </Row>
            <Typography
                sx={{
                    overflow: "hidden",
                    textOverflow: "clip",
                    display: "-webkit-box",
                    WebkitLineClamp: "2",
                    WebkitBoxOrient: "vertical",
                }}
            >{product.description}</Typography>
        </Grid>
    );
};

export default Product;