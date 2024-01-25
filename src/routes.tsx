import { Navigate, Outlet, Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import { Center, Container } from './Layout';
import HomePage from './Pages/HomePage';
import AppBar from './components/AppBar';

export const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path='products' element={
        <Container>
          <AppBar />
          <Center sx={{ overflow: 'auto', padding: 0.5, height: 1, width: 1 }}>
            <Outlet />
          </Center>
        </Container>
      }>
        <Route index element={<HomePage />} />
        <Route path=':id' element={<>Id</>} />
      </Route>
      <Route path='*' element={<Navigate to='products' />} />
    </>
  ))
