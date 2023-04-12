import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'




import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Layout from './components/Layout.jsx/Layout';
import Login from './components/Login.jsx/Login';
import Home from './components/Home.jsx/Home';


let router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,

    children: [
      {
        path: "/",
        element: <Home></Home>
      },

      {
        path: "login",
        element: <Login></Login>
      },



    ]
  }
])





ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>

  </React.StrictMode>,
)
