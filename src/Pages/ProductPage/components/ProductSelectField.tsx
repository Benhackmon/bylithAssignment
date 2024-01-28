import { Box, IconButton, MenuItem, TextField, Typography } from '@mui/material';
import { ChangeEvent } from 'react';
import { Row } from '../../../Layout';
import { data as product } from '../../../api/product.json';
import { Close } from '@mui/icons-material';

type ProductSelectFieldProps = {
    attr: typeof product.attributes[number]
    value: string
    onChange: (e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => void
    availableOptions: typeof product.attributes[number]['labels']
    onDelete: (attrId: string) => void
}

const ProductSelectField = ({ attr: { title, type, id }, value, onChange, availableOptions, onDelete }: ProductSelectFieldProps) => (
    <TextField size='small' label={title} select fullWidth value={value} onChange={onChange}
        InputProps={{ endAdornment: <IconButton onClick={() => onDelete(id)} sx={{ mr: 1 }}><Close fontSize='small' /></IconButton> }}
    >
        {availableOptions.map(label => (
            <MenuItem key={label.id} value={label.id}>
                <Row>
                    <Typography>{label.title}</Typography>
                    {type === 'COLOR' && (
                        <Box sx={{ height: 20, width: 20, borderRadius: '50%', backgroundColor: label.data, ml: 1 }} />
                    )}
                </Row>
            </MenuItem>
        ))}
    </TextField>
);

export default ProductSelectField;