import { createBrowserRouter } from 'react-router-dom';
import UserLogin from '../components/Auth/UserLogin';
import UserRegister from '../components/Auth/UserRegister';
import AllBuyer from '../components/Dashboard/Admin/AllBuyer';
import AllSellers from '../components/Dashboard/Admin/AllSellers';
import Report from '../components/Dashboard/Admin/Report';
import Sellers from '../components/Dashboard/Admin/Sellers';
import MyOrder from '../components/Dashboard/Buyer/MyOrder';
import MyWishList from '../components/Dashboard/Buyer/MyWishList';
import Dashboard from '../components/Dashboard/Dashboard';
import AddProducts from '../components/Dashboard/Seller/AddProducts';
import MyProducts from '../components/Dashboard/Seller/MyProducts';
import Blog from '../components/Pages/Blog/Blog';
import Category from '../components/Pages/Category/Category';
import Home from '../components/Pages/Home/Home';
import ErrorPage from '../components/Shared/ErrorPage';
import DashboardLayout from '../layouts/DashboardLayout';
import Main from '../layouts/Main';
import Admin from './Admin';
import BuyerRoute from './BuyerRoute';
import Private from './Private';
import Seller from './Seller';



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
                element: <Dashboard />
            },
            {
                path: '/dashboard/sellers',
                element: <Admin><AllSellers /></Admin>
            },
            {
                path: '/dashboard/allBuyers',
                element: <Admin><AllBuyer /></Admin>
            },
            {
                path: '/dashboard/reported',
                element: <Admin><Report /></Admin>
            },

            // All Seller routes
            {
                path: '/dashboard/addProduct',
                element: <Seller><AddProducts /></Seller>
            },
            {
                path: '/dashboard/myproducts',
                element: <Seller><MyProducts /></Seller>
            },
            {
                path: '/dashboard/mybuyer',
                element: <Seller><AllBuyer /></Seller>
            },

            // All Seller routes
            {
                path: '/dashboard/myorder',
                element: <BuyerRoute><MyOrder /></BuyerRoute>
            },
            {
                path: '/dashboard/mywishlist',
                element: <BuyerRoute><MyWishList /></BuyerRoute>
            }

        ]
    }

])



export default routes
