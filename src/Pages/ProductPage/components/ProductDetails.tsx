import { Button, Typography, useTheme } from '@mui/material';
import { includes } from 'lodash';
import { useEffect, useState } from 'react';
import { FullColumn, Row } from '../../../Layout';
import { data as product } from '../../../api/product.json';
import Amount from './Amount';
import ProductSelectField from './ProductSelectField';

type ProductDetailsProps = {
    product: typeof product
    setAvailableVariants: React.Dispatch<React.SetStateAction<typeof product.variants>>
}

const ProductDetails = ({ setAvailableVariants, product }: ProductDetailsProps) => {
    const { breakpoints: { down } } = useTheme();
    const [selectedAttributes, setSelectedAttributes] = useState<Record<string, string>>({});

    const getAvailableVariants = (variants: typeof product.variants) => variants.filter(variant => (Object.entries(selectedAttributes)
        .map(([attribute_id, label_id]) => ({ attribute_id, label_id })))
        .every(val => includes(variant.labels.map(x => x.label_id), val.label_id)))


    const getAvailableVariantsByLabel = (label: { id: string }) => getAvailableVariants(product.variants).some(x => x.labels.some(x => x.label_id === label.id));

    const getAvailableOptions = (attributeId: string) => product.attributes.find((attribute) => attribute.id === attributeId)
        ?.labels.filter(label => getAvailableVariantsByLabel(label));

    const handleAttributeChange = (attributeId: string, labelId: string) => {
        setSelectedAttributes((prevSelected) => ({
            ...prevSelected,
            [attributeId]: labelId,
        }));
    };

    const deleteAttribute = (attributeId: string) => {
        setSelectedAttributes((prevSelected) => {
            const attributesCopy = { ...prevSelected };

            delete attributesCopy[attributeId];

            return attributesCopy;
        }
        );
    };

    useEffect(() => {
        setAvailableVariants(getAvailableVariants(product.variants))
    }, [selectedAttributes])

    return (
        <FullColumn sx={{
            flex: 2, gap: 1.5, padding: 3,
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
                        <ProductSelectField
                            attr={attr}
                            value={selectedAttributes[attr.id] || ''}
                            onChange={({ target: { value: labelId } }) => handleAttributeChange(attr.id, labelId)}
                            availableOptions={getAvailableOptions(attr.id)!}
                            onDelete={deleteAttribute}
                        />
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