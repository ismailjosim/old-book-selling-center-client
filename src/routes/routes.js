import { createBrowserRouter } from 'react-router-dom';
import UserLogin from '../components/Auth/UserLogin';
import UserRegister from '../components/Auth/UserRegister';
import Buyers from '../components/Dashboard/Admin/Buyers/Buyers';
import Report from '../components/Dashboard/Admin/Report/Report';
import Sellers from '../components/Dashboard/Admin/Sellers/Sellers';
import MyOrder from '../components/Dashboard/Buyer/MyOrder';
import AddProducts from '../components/Dashboard/Seller/AddProducts';
import MyProducts from '../components/Dashboard/Seller/MyProducts';
import Blog from '../components/Pages/Blog/Blog';
import Category from '../components/Pages/Category/Category';
import Home from '../components/Pages/Home/Home';
import ErrorPage from '../components/Shared/ErrorPage';
import DashboardLayout from '../layouts/DashboardLayout';
import Main from '../layouts/Main';
import Private from './Private';



const routes = createBrowserRouter([

    {
        path: '/',
        element: <Main></Main>,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/',
                element: <Home />

            },
            {
                path: '/product/:id',
                loader: ({ params }) => fetch(`http://localhost:5000/product/${ params.id }`),
                element: <Private><Category /></Private>

            },
            {
                path: '/signup',
                element: <UserRegister />

            },
            {
                path: '/blog',
                element: <Blog />

            },
            {
                path: '/login',
                element: <UserLogin />

            },
        ]
    },
    {
        path: '/dashboard',
        errorElement: <ErrorPage />,
        element: <Private><DashboardLayout /></Private>,
        children: [
            {
                path: '/dashboard',
                element: <Buyers />
            },
            {
                path: '/dashboard/orders',
                element: <MyOrder />
            },
            {
                path: '/dashboard/addproduct',
                element: <AddProducts />
            },
            {
                path: '/dashboard/myproducts',
                element: <MyProducts />
            },
            {
                path: '/dashboard/sellers',
                element: <Report />
            },
            {
                path: '/dashboard/reported',
                element: <Report />
            }
        ]
    }

])



export default routes
