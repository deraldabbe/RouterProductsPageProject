import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./components/Home";
import ProductsPage from "./components/Products";
import RootLayout from "./components/Root";
import ErrorPage from "./components/Error";
import ProductDetailPage from "./components/ProductDetail";
const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [

      { path: "/", element: <HomePage /> },
      { path: "/products", element: <ProductsPage />, },
      { path: "/products/:productId", element: <ProductDetailPage />, },
      
    ],
  }
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
