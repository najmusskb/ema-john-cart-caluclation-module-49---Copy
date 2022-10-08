
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import Main from './Laout/Main';
import Shop from './components/Shop/Shop';
import Orders from './components/Orders/Orders';
import Inventory from './components/Inventroy/Inventory';
import { ProductsAndCurtsLoaders } from './Loders/ProductsAndCurtsLoaders';



function App() {


  const router = createBrowserRouter([


    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          loader: () => fetch('products.json'),
          element: < Shop ></Shop >

        },
        {
          path: '/orders',
          loader: ProductsAndCurtsLoaders,
          element: < Orders ></Orders >

        },
        {
          path: '/inventory',
          element: <Inventory></Inventory>
        },
        {
          path: '/about',
          element: <About></About>
        }
      ]
    },

  ])


  return (
    <div>

      <RouterProvider router={router}></RouterProvider>

    </div>
  );
}

export default App;
