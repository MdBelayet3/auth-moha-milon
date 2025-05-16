import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import Layout from './layout/Layout.jsx';
import ErrorPage from './layout/ErrorPage.jsx';
import Home from './components/Home.jsx';
import Login from './components/Login.jsx';
import Register from './components/Register.jsx';
import GptLogin from './components/GptLogin.jsx';
import AuthProvider from './provider/AuthProvider.jsx';
import Orders from './components/Orders.jsx';
import PrivetRoute from './components/Routes/PrivetRoute.jsx';
import Profile from './components/Profile.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    errorElement: <ErrorPage></ErrorPage>,
    children:[
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/register",
        element: <Register></Register>
      },
      {
        path: "/gptLogin",
        element: <GptLogin></GptLogin>
      },
      {
        path: "/orders",
        element: <PrivetRoute><Orders></Orders></PrivetRoute>
      },
      {
        path: "/profile",
        element: <Profile></Profile>
      },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>,
)
