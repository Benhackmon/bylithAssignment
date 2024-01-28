import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Center } from '../../Layout';
import { data as product } from '../../api/product.json';
import ImageDisplay from './components/ImageDisplay';
import ProductDetails from './components/ProductDetails';
import { useTheme } from '@mui/material';

const ProductPage = () => {
    const { id = '' } = useParams();
    // const getProductQuery(id)
    const [imageNumber, setImageNumber] = useState(0);
    const [availableVariants, setAvailableVariants] = useState(product.variants)
    const { breakpoints: { up, down } } = useTheme();

    const paginateToPage = (page: number) => {
        setImageNumber(page - 1);
    };

    useEffect(() => {
        imageNumber !== 0 && setImageNumber(0)
    }, [availableVariants])

    return (
        <Center sx={{
            height: 1, width: 1,
            [up('sm')]: {
                flexDirection: 'row'
            },
            [down('sm')]: {
                flexDirection: 'column'
            }
        }}>
            <ImageDisplay {...{ images: product.images, imageNumber, paginateToPage, availableVariants }} />
            <ProductDetails {...{ product }} setAvailableVariants={setAvailableVariants} />
        </Center>
    );
};

export default ProductPage;