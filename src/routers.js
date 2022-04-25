import { Navigate, Outlet } from "react-router-dom";
import Category from "./pages/components/category/Category";
import SubCategory from "./pages/components/subcategory/subcategory";
import DetailProduct from "./pages/detail/detailProduct";
import Home from "./pages/home/home";
import Login from "./pages/login/login";
import AddProduct from "./pages/product/add-product";

import Transaction from "./pages/transaction/transaction";
import Umkm from "./pages/umkm/umkm";
import UmkmDetail from "./pages/umkm/umkmDetail";
import Products from "./pages/view-products/products";
const routes = (isLoggedIn) => [
  {
    path: "/",
    element: isLoggedIn ? <Outlet /> : <Navigate to="/login" />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/products", element: <Products /> },

      { path: "/transaction", element: <Transaction /> },
      { path: "/products/:slug", element: <DetailProduct /> },
      { path: "/category", element: <Category /> },
      { path: "/subCategory", element: <SubCategory /> },
      { path: "/umkm", element: <Umkm /> },
      { path: "/umkm/:id", element: <UmkmDetail /> },
    ],
  },
  {
    path: "/login",
    element: !isLoggedIn ? <Login /> : <Navigate to="/" />,
    children: [{ path: "login", element: <Login /> }],
  },
];

export default routes;