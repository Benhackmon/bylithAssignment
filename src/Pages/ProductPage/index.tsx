import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Center, FullRow } from '../../Layout';
import { data as product } from '../../api/product.json';
import ImageDisplay from './components/ImageDisplay';
import ProductDetails from './components/ProductDetails';

const ProductPage = () => {
    const { id = '' } = useParams();
    // const getProductQuery(id)
    const [imageNumber, setImageNumber] = useState(0);

    const paginateToPage = (page: number) => {
        setImageNumber(page - 1);
    };

    return (
        <Center sx={{ height: 1, width: 1, padding: 5 }}>
            <FullRow sx={{ height: 1 }}>
                <ImageDisplay {...{ images: product.images, imageNumber, paginateToPage }} />
                <ProductDetails {...{ product }} />
            </FullRow>
        </Center>
    );
};

export default ProductPage;