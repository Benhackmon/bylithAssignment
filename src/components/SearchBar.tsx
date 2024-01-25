import { Clear, Search } from '@mui/icons-material';
import { IconButton, TextField, TextFieldProps } from '@mui/material';
import { ChangeEvent, Dispatch, SetStateAction } from 'react';

type SearchBarProps = {
    searchKey: string
    setSearchKey: Dispatch<SetStateAction<string>>
} & Omit<TextFieldProps, "value" | "onChange">

const SearchBar = ({ searchKey, setSearchKey, ...props }: SearchBarProps) => {
    const onChange = ({ target: { value } }: ChangeEvent<HTMLInputElement>) => {
        setSearchKey(value);
    };

    const onClear = () => {
        setSearchKey('');
    };

    return (
        <TextField
            placeholder={'חיפוש...'}
            InputProps={{
                endAdornment: !searchKey ?
                    <IconButton>
                        <Search />
                    </IconButton> :
                    <IconButton onClick={onClear}>
                        <Clear />
                    </IconButton>
            }}
            variant='standard'
            autoComplete='off'
            {...props}
            onChange={onChange}
            value={searchKey}
        />
    );
}

export default SearchBar;