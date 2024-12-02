import {TextField } from '@mui/material'
import React from 'react'
import logo from '../images/SideBarLogo.png'
function SideBar() {
        return <>
                <div className="side-bar">
                        <div className="menutop d-flex text-center">
                                <img src={logo} className='TopSide' />
                        </div>
                        <TextField
                                id='searchbar'
                                className="outlined m-2"
                                label="Search"
                                variant="outlined"
                        />
                        <div className="menuBottom">
                                <a className='menuBottom1 text-decoration-none' rel="stylesheet" href="Offers" >Offers</a>
                                <a className='menuBottom2 text-decoration-none' rel="stylesheet" href="About" >Menu</a>
                                <a className='menuBottom3 text-decoration-none' rel="stylesheet" href="Pizza" >Pizza</a>
                                <a className='menuBottom4 text-decoration-none' rel="stylesheet" href="AboutUs" >AboutUs</a>
                        </div>
                        <a className="text-decoration-none position-absolute bottom-0 text-white" href="https://www.linkedin.com/in/sameh-salih-02179b271/">
                                ©2024::SamehELkhayat
                        </a>
                </div> 
        </ >
}
export default SideBar