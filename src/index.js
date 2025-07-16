import React from "react";
import ReactDOM from 'react-dom/client'
import App from "./components/App";
import Detail from "./components/ProductPage";
import './styles.css';
import Footer from "./components/Footer/Footer";
import CardGrid from "./components/Card/CardGrid";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Layout from "./components/Layout";
import Contact from "./Contact";
import Checkout from "./components/Checkout/Checkout";
import Login from "./components/Login/Login";

const router = createBrowserRouter([
  {path:'/', element: <Layout />, children: [
    {path: '/', element: <App />},
    {path: '/products/:category', element: <CardGrid />},
    {path: '/detail/:id', element: <Detail />},
    {path: '/contact', element: <Contact />},
    {path: '/checkout', element: <Checkout />},
    {path: '/login', element: <Login />},
  ]}
])

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
  {/* <App /> */}
  <RouterProvider router={router} />
  {/* <Detail index='2' /> */}
  </React.StrictMode>
)
