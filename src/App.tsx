import { CssBaseline } from '@mui/material';
import { RouterProvider } from 'react-router-dom';
import Providers from './Providers';
import { router } from './routes';

const App = () => (
  <>
    <CssBaseline />
    <Providers>
      <RouterProvider router={router} />
    </Providers>
  </>
)

export default App;