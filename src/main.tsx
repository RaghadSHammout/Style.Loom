import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home.tsx'
import Products from './pages/Products.tsx'
import Contact from './pages/Contact.tsx'
import { Provider } from 'react-redux'
import { store } from './redux/store.ts'
import Dashboard from './pages/Dashboard.tsx'
import ProductOpen from './pages/ProductOpen.tsx'
const routers = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "/products",
        element: <Products />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/product/:id",
        element: <ProductOpen />
      }
    ],
  }
],
  {
    basename: "/Style.Loom-x3",
  }
)
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={routers} />
    </Provider>
  </StrictMode>
)




