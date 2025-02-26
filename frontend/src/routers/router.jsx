import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/home/Home";
import Login from "../components/Login";
import Register from "../components/Register";
import CartPage from "../pages/products/CartPage";  // Changed 'books' to 'products'
import CheckoutPage from "../pages/products/CheckoutPage";  // Changed 'books' to 'products'
import SingleProduct from "../pages/products/SingleProduct";  // Changed 'SingleBook' to 'SingleProduct'
import PrivateRoute from "./PrivateRoute";
import OrderPage from "../pages/products/OrderPage";  // Changed 'books' to 'products'
import AdminRoute from "./AdminRoute";
import AdminLogin from "../components/AdminLogin";
import DashboardLayout from "../pages/dashboard/DashboardLayout";
import Dashboard from "../pages/dashboard/Dashboard";
import ManageProducts from "../pages/dashboard/manageProducts/ManageProducts";  // Changed 'books' to 'products'
import AddProduct from "../pages/dashboard/addProduct/AddProduct";  // Changed 'AddBook' to 'AddProduct'
import UpdateProduct from "../pages/dashboard/EditProduct/UpdateProduct";  // Changed 'EditBook' to 'EditProduct'
import UserDashboard from "../pages/dashboard/users/UserDashboard";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/orders",
                element: <PrivateRoute><OrderPage /></PrivateRoute>,
            },
            {
                path: "/about",
                element: <div>About</div>,
            },
            {
                path: "/login",
                element: <Login />,
            },
            {
                path: "/register",
                element: <Register />,
            },
            {
                path: "/cart",
                element: <CartPage />,
            },
            {
                path: "/checkout",
                element: <PrivateRoute><CheckoutPage /></PrivateRoute>,
            },
            {
                path: "/products/:id",  // Changed 'books' to 'products'
                element: <SingleProduct />,  // Changed 'SingleBook' to 'SingleProduct'
            },
            {
                path: "/user-dashboard",
                element: <PrivateRoute><UserDashboard /></PrivateRoute>,
            },
        ],
    },
    {
        path: "/admin",
        element: <AdminLogin />,
    },
    {
        path: "/dashboard",
        element: <AdminRoute><DashboardLayout /></AdminRoute>,
        children: [
            {
                path: "",
                element: <AdminRoute><Dashboard /></AdminRoute>,
            },
            {
                path: "add-new-product",  // Changed 'add-new-book' to 'add-new-product'
                element: <AdminRoute><AddProduct /></AdminRoute>,  // Changed 'AddBook' to 'AddProduct'
            },
            {
                path: "edit-product/:id",  // Changed 'edit-book' to 'edit-product'
                element: <AdminRoute><UpdateProduct /></AdminRoute>,  // Changed 'EditBook' to 'EditProduct'
            },
            {
                path: "manage-products",  // Changed 'manage-books' to 'manage-products'
                element: <AdminRoute><ManageProducts /></AdminRoute>,  // Changed 'ManageBooks' to 'ManageProducts'
            },
        ],
    },
]);

export default router;
