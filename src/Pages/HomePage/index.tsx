import { Typography } from '@mui/material';
import { Center, FullColumn, Row } from '../../Layout';
import PageImage from './components/PageImage';
import Products from './components/Products';

const HomePage = () => (
  <Center sx={{ gap: 2, flexWrap: 'wrap', height: 1, width: 1 }}>
    <FullColumn sx={{ width: 800 }}>
      <Center>
        <PageImage />
      </Center>
      <FullColumn sx={{ gap: 4 }}>
        <Center>
          <Row sx={{ paddingBottom: 0.5, borderBottom: '2px #9F9F9F solid' }}>
            <Typography fontSize={30} fontWeight='bold'>Products</Typography>
          </Row>
        </Center>
        <FullColumn>
          <Products />
        </FullColumn>
      </FullColumn>
    </FullColumn>
  </Center >
);

export default HomePage;