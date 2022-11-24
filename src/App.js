import { RouterProvider } from 'react-router-dom';
import routes from './routes/routes';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './styles/App.css';

function App() {
  return (
    <div>
      <ToastContainer />
      <RouterProvider router={routes}>
      </RouterProvider>
    </div>
  );
}

export default App;
