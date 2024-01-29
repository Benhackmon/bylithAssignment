import { Close } from '@mui/icons-material';
import { Box, IconButton, MenuItem, TextField, Typography } from '@mui/material';
import { ChangeEvent } from 'react';
import { Row } from '../../../Layout';
import { data as product } from '../../../api/product.json';

type ProductSelectFieldProps = {
    attr: typeof product.attributes[number]
    availableOptions: typeof product.attributes[number]['labels']
    value: string
    onChange: (e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => void
    onDelete: (attrId: string) => void
}

const ProductSelectField = ({ attr: { title, type, id }, availableOptions, value, onChange, onDelete }: ProductSelectFieldProps) => (
    <TextField size='small' label={title} select fullWidth value={value} onChange={onChange}
        InputProps={{ endAdornment: <IconButton onClick={() => onDelete(id)} sx={{ mr: 1 }}><Close fontSize='small' /></IconButton> }}
        InputLabelProps={{ style: { color: '#9F9F9F' } }}
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
)

export default ProductSelectField;