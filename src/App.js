import {createBrowserRouter,RouterProvider,createRoutesFromElements, Route} from 'react-router-dom'
import Homepage from './pages/Homepage';
import ProductDetail from './pages/ProductDetail';
import Products from "./pages/Products";
import Error from './pages/Error';
import RootLayout from "./RootLayout"



//>> ONE WAY OF DEFINING ROUTES

// const routeDefination=createRoutesFromElements(
//   <Route>
//     <Route path='/' element={<Homepage/>}></Route>
//     <Route path='/products' element={<Products/>}></Route>
//   </Route>

// )

// const router=createBrowserRouter(routeDefination)

// >>OTHER WAY OF DEFINIGN ROUTE
const router=createBrowserRouter([
  {path:'/',element:<RootLayout/>,errorElement:<Error/>,
children:[
  {index:true,element:<Homepage/>},
  // {path:'',element:<Homepage/>},
  {path:'products',element:<Products/>},
  {path:'products/:id',element:<ProductDetail/>}
  
]}
 

])


function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
