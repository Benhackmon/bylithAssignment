import { Pagination, PaginationItem } from '@mui/material';
import { uniqBy } from 'lodash';
import { Center, FullColumn } from '../../../Layout';
import { data as product } from '../../../api/product.json';
import { imager } from '../../../utils/image';

type ImageDisplayProps = {
    images: typeof product.images
    imageNumber: number
    paginateToPage: (page: number) => void
    availableVariants: typeof product.variants
}

const getImages = (variables: typeof product.variants) => variables.map(({ image }) => image);

const ImageDisplay = ({ imageNumber, paginateToPage, availableVariants }: ImageDisplayProps) => {
    const images = uniqBy(getImages(availableVariants), 'url');

    return (
        <FullColumn sx={{ flex: 3, padding: 2 }}>
            <Center sx={{ flex: 9 }}>
                <img src={imager(images[imageNumber]?.url)}
                    style={{
                        height: '100%', maxHeight: 700, width: '50%', maxWidth: 300
                    }}
                    alt={images[imageNumber]?.title} />
            </Center>
            <Center sx={{ flex: 1 }}>
                <Pagination count={images.length} variant='outlined' key={availableVariants[0].id}
                    hideNextButton hidePrevButton onChange={(_, page) => paginateToPage(page)}
                    renderItem={(item) => <PaginationItem {...item}
                        sx={{
                            height: 10, minWidth: 10, padding: 0,
                            backgroundColor: item.selected ? 'black !important' : 'transparent',
                        }}
                        page={null} />} />
            </Center>
        </FullColumn>
    );
}
export default ImageDisplay;