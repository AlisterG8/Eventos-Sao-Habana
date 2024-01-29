import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Boda from './views/boda.jsx';
import Cumpleaños from './views/cumpleaños.jsx';
import Quince from './views/quince.jsx';


const router = createBrowserRouter([
  {
    path:"/",
    element:<App/>,
  },
  {
    
    path:"/boda",
    element:<Boda/>,
  },
  {
    path:"/cumpleaños",
    element:<Cumpleaños/>,
  },
  {
    path:"/quince",
    element:<Quince/>,
  },

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
    
  </React.StrictMode>,
)
