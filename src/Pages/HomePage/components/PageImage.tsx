import { Icon } from '@mui/material';
import { Headphones } from '../../../assets/Headphones';

const PageImage = () => (
    <Icon sx={{
        height: 'auto', width: 'auto',
        '& svg': { height: 'auto', minWidth: '50vw', width: 800, maxWidth: '100vw' }
    }}>
        <Headphones />
    </Icon>
);

export default PageImage;