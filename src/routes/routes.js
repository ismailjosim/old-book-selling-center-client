import { createBrowserRouter } from 'react-router-dom';
import Home from '../components/Pages/Home/Home';
import Main from '../layouts/Main';



const routes = createBrowserRouter([

    {
        path: '/',
        element: <Main></Main>,
        errorElement: <h3>Page Not found!</h3>,
        children: [
            {
                path: '/',
                element: <Home />

            }
        ]
    }

])



export default routes
