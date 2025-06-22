import Shop from '../pages/CartPage';
import Category from '../pages/CategoryPage';
import Home from '../pages/HomePage';
import Product from '../pages/ProductDetail';
import Login from '../pages/LoginPage';
import Register from '../pages/SignUpPage';
import NotFound from '../pages/NotFound'
import Success from '../pages/SuccessPage'


export const routes = [
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/Shop',
    element: <Product />,
  },
  {
    path: '/cart',
    element: <Shop />,
  },
  {
    path: '/category:id',
    element: <Category />,
  }, {
    path: '/login',
    element: <Login />,
  }, {
    path: '/signup',
    element: <Register />,
  }, {
    path: '/404',
    element: <NotFound />,
  }, {
    path: '/dashboard',
    element: <Success />,
  },
];

