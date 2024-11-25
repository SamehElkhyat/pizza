import { Link, TextField } from '@mui/material'
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
                                <h4 className='menuBottom1'><Link className='text-decoration-none' rel="stylesheet" href="Offers" >Offers</Link></h4>
                                <h4 className='menuBottom2'><Link className='text-decoration-none' rel="stylesheet" href="About" >Menu</Link></h4>
                                <h4 className='menuBottom3'><Link className='text-decoration-none' rel="stylesheet" href="Pizza" >Pizza</Link></h4>
                                <h4 className='menuBottom4'><Link className='text-decoration-none' rel="stylesheet" href="AboutUs" >AboutUs</Link></h4>
                        </div>
                        <a className="text-decoration-none position-absolute bottom-0 text-white" href="https://www.linkedin.com/in/sameh-salih-02179b271/">
                                ©2024::SamehELkhayat
                        </a>
                </div>
        </ >
}
export default SideBar