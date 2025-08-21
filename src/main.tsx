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
import ErrorPage from './pages/ErrorPage.tsx'
const routers = createBrowserRouter([
  {
     path: "/",
    element: <App/>,
    errorElement:<ErrorPage/>,
    children: [
      {
        path: "",
        element: <Home/>,
      },
      {
        path: "/products",
        element: <Products/>,
      },
      {
        path: "/contact",
        element: <Contact/>,
      },
      {
        path: "/dashboard",
        element: <Dashboard/>,
      },
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




