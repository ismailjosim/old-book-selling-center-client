import { createBrowserRouter } from 'react-router-dom';
import UserLogin from '../components/Auth/UserLogin';
import UserRegister from '../components/Auth/UserRegister';
import Category from '../components/Pages/Category/Category';
import Home from '../components/Pages/Home/Home';
import Main from '../layouts/Main';
import Private from './Private';



const routes = createBrowserRouter([

    {
        path: '/',
        element: <Main></Main>,
        errorElement: <h3>Page Not found!</h3>,
        children: [
            {
                path: '/',
                element: <Home />

            },
            {
                path: '/category/:id',
                loader: ({ params }) => fetch(`http://localhost:5000/category/${ params.id }`),
                element: <Private><Category /></Private>

            },
            {
                path: '/signup',
                element: <UserRegister />

            },
            {
                path: '/login',
                element: <UserLogin />

            },
        ]
    }

])



export default routes
