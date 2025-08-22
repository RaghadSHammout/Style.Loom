import { StrictMode } from 'react';
import React, { Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './redux/store';

import Loader from './components/Loader';
import App from './App';

const Home = React.lazy(() => import('./pages/Home'));
const Products = React.lazy(() => import('./pages/Products'));
const Contact = React.lazy(() => import('./pages/Contact'));
const Dashboard = React.lazy(() => import('./pages/Dashboard'));
const ProductOpen = React.lazy(() => import('./pages/ProductOpen'));
const ErrorPage = React.lazy(() => import('./pages/ErrorPage'));

const routers = createBrowserRouter(
  [
    {
      path: '/',
      element: <App />,
      errorElement: <ErrorPage />,
      children: [
        { index: true, element: <Home /> },
        { path: 'products', element: <Products /> },
        { path: 'contact', element: <Contact /> },
        { path: 'dashboard', element: <Dashboard /> },
        { path: 'product/:id', element: <ProductOpen /> },
      ],
    },
  ],
  { basename: '/Style.Loom' }
);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Suspense fallback={<Loader />}>
      <Provider store={store}>
        <RouterProvider router={routers} />
      </Provider>
    </Suspense>
  </StrictMode>
);
