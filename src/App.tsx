import { CssBaseline } from '@mui/material';
import { Outlet, Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import { Center, Container } from './Layout';
import HomePage from './Pages/HomePage';
import Providers from './Providers';
import AppBar from './components/AppBar';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/products' element={
      <Container>
        <AppBar />
        <Center sx={{overflow: 'auto', padding: 1 }}>
          <Outlet />
        </Center>
      </Container>
    }>
      <Route index element={<HomePage />} />
      <Route path=':id' element={<></>} />
    </Route>
  ))

const App = () => (
  <>
    <CssBaseline />
    <Providers>
      <RouterProvider router={router} />
    </Providers>
  </>
)

export default App;