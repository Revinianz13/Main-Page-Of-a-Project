import {createBrowserRouter, RouterProvider } from 'react-router-dom'
import ErrorPage from './pages/Error';
import HomePage from './pages/Home';
import ProductsPage from './pages/Products';
import RootLayout from './pages/Root';
import ProductDetailPage from './pages/ProductDetail';
// example : http:/example.com/path = product 


// const routeDefinitions = createRoutesFromElements(
// <Route>
//   <Route path='/' element={<HomePage/>}></Route>
//   <Route path='/products' element={<ProductsPage/>}></Route>
  
// </Route>
// );

const router = createBrowserRouter ([
  {
    path: '/',
    element: <RootLayout /> ,
    errorElement: < ErrorPage />,
    children: [
      {index: true , element: <HomePage />} ,
      {path: 'products' , element: <ProductsPage />},
      {path : 'products/:productId' , element: <ProductDetailPage />}
    ]
  }
])


// const router =  createBrowserRouter(routeDefinitions)

function App() {
  return <RouterProvider router={router}/>;
}

export default App;


