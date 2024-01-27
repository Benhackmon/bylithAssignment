import { Box, Grid, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { FullColumn, Row } from '../../../Layout';
import { data as products } from '../../../api/products.json';
import { imager } from '../../../utils/image';

const getDiscount = (maxPrice: number, minPrice: number) => minPrice === maxPrice ? null : Math.trunc((minPrice / maxPrice) * 100) + '%'

const ProductCard = ({ product }: { product: typeof products[number] }) => {
    const discount = getDiscount(Number(product.max_price), Number(product.min_price));
    const navigate = useNavigate();

    const goToProductPage = () => {
        navigate(product.id)
    }

    return (
        <Grid item xs={6} sm={6} md={3} lg={3} sx={{ minHeight: 200, maxHeight: 350 }}>
            <FullColumn
                onClick={goToProductPage}
                sx={{ p: 1, cursor: 'pointer', '&:hover': { backgroundColor: '#e6e6e6' }, borderRadius: 2 }}
            >
                <Box sx={{ position: 'relative' }}>
                    <img src={imager(product.images[0].url)}
                        style={{ height: 200, width: '100%', objectFit: 'cover', borderRadius: '4px' }}
                        alt={product.images[0].title} />
                    {discount && (
                        <Row sx={{
                            position: 'absolute', top: '10px', left: '10px', bgcolor: 'rgba(0, 104, 245, 0.5)', padding: 1,
                            borderRadius: 2
                        }}>
                            <Typography fontSize={14} color='white'>{discount} OFF</Typography>
                        </Row>
                    )}
                </Box>
                <Row>
                    <Typography
                        sx={{
                            fontSize: 18,
                            overflow: "hidden", textOverflow: "clip", fontWeight: 'bold',
                            display: "-webkit-box", WebkitLineClamp: "1", WebkitBoxOrient: "vertical",
                        }}>
                        {product.title}
                    </Typography>
                </Row>
                <Row sx={{ gap: 1 }}>
                    <Typography fontSize={16} fontWeight='bold'>{product.min_price}$</Typography>
                    {discount &&
                        <Typography sx={{ textDecoration: "line-through", color: '#9F9F9F' }}
                            fontSize={12}>
                            {product.max_price}$
                        </Typography>
                    }
                </Row>
                <Row>
                    <Typography
                        sx={{
                            overflow: "hidden", textOverflow: "clip", display: "-webkit-box",
                            WebkitLineClamp: "2", WebkitBoxOrient: "vertical", fontSize: 14,
                            color: '#9F9F9F'
                        }}>
                        {product.description}
                    </Typography>
                </Row>
            </FullColumn>
        </Grid>
    );
};

export default ProductCard;