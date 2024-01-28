import { Box, MenuItem, TextField, Typography } from '@mui/material';
import { ChangeEvent, useState } from 'react';
import { data as product } from '../../../api/product.json';
import { Row } from '../../../Layout';

type ProductSelectFieldProps = {
    attr: typeof product.attributes[number]
}

const ProductSelectField = ({ attr: { labels, title, type } }: ProductSelectFieldProps) => {
    const [value, setValue] = useState('')

    const onChange = ({ target: { value } }: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setValue(value)
    };

    return (
        <TextField size='small' label={title} select fullWidth value={value} onChange={onChange}>
            {labels.map(label => (
                <MenuItem key={label.id} value={label.title} >
                    <Row>
                        <Typography>{label.title}</Typography>
                        {type === 'COLOR' && (
                            <Box sx={{ height: 20, width: 20, borderRadius: '50%', backgroundColor: label.title, ml: 1 }} />
                        )}
                    </Row>
                </MenuItem>
            ))}
        </TextField>
    );
};

export default ProductSelectField;