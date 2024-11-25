import { Outlet } from 'react-router-dom';
import React from 'react'
import Navbar from '../Navbar/Navbar.jsx';
import SideBar from '../SideBar/SideBar.jsx';


export default function Layout() {
    
    return <div> 
        <Navbar />
        <SideBar />
        <Outlet />
    </div>
}