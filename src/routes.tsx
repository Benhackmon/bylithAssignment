import { Navigate, Outlet, Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import { Center, Container } from './Layout';
import CartPage from './Pages/CartPage';
import HomePage from './Pages/HomePage';
import ProductPage from './Pages/ProductPage';
import AppBar from './components/AppBar';

export const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path='/' element={
        <Container>
          <AppBar />
          <Center sx={{ overflow: 'auto', height: 1, width: 1 }}>
            <Outlet />
          </Center>
        </Container>
      }>
        <Route index element={<Navigate to='products' />} />
        <Route path='cart' element={<CartPage />} />
        <Route path='products'>
          <Route index element={<HomePage />} />
          <Route path=':id' element={<ProductPage />} />
        </Route>
      </Route>
      <Route path='*' element={<Navigate to='products' />} />
    </>
  ))
