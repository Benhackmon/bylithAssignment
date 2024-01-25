import { Icon, Typography } from '@mui/material';
import { Center, FullColumn, Row } from '../../Layout';
import { Headphones } from '../../assets/Headphones';
import Products from './components/Products';

const HomePage = () => {
  return (
    <Center sx={{ gap: 2, flexWrap: 'wrap', height: 1, width: 1 }}>
      <FullColumn sx={{ width: 800 }}>
        <Center>
          <Icon sx={{ height: 'auto', width: 'auto', '& svg': { height: 'auto', width: 800 } }} >
            <Headphones />
          </Icon>
        </Center>
        <Center>
          <Row sx={{ paddingBottom: 0.5, borderBottom: '1px #9F9F9F solid' }}>
            <Typography fontSize={24} fontWeight='bold' color='#474747'>Products</Typography>
          </Row>
        </Center>
        <FullColumn>
          <Products />
        </FullColumn>
      </FullColumn>
    </Center>
  );
};

export default HomePage;