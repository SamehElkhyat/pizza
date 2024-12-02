import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import App from './App.js';
import AboutUs from "./Components/AboutUs/AboutUs.jsx";
import About from "./Components/About/About.jsx";
import  Carsoule  from './Components/Carsoule/Carsoule.jsx';
import  {Offers}  from './Components/Offers/Offers.jsx';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import Layout from './Components/Layout/Layout.jsx';

  
  const router = createBrowserRouter([

    {path:'',element:<Layout/>,children:[
      {path:'',element:<Carsoule/>},
      {path:'About',element:<About/>},
      {path:'Offers',element:<Offers/>},
      {path:'aboutus',element:<AboutUs/>},

  ]}
]);
  
  
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(


  <RouterProvider router={router} />

);