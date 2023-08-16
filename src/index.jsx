import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { 
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Gallery from './pages/Gallery';
import ErrorPage from './error-page';


const router = createBrowserRouter([
  {
    path: "/", 
    element: <App/>,
    children: [
      {
        index: true,
        element: <Home/>,
        path: "/home",
      },
    ],
    errorElement: <ErrorPage/>,
  },
  
  {
    path: "/about us",
    element: <About/>,
  },
  {
    path: "/contact us",
    element: <Contact/>,
  },
  {
    path: "/gallery",
    element: <Gallery/>,
  },
]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
