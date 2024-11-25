import { AppBar, Box, IconButton, Toolbar, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import logo from '../images/Threads.png'

function Navbar() {

  const [Scrolled, setScrolled] = useState()

  function DarkMode() {

    let Icon = document.getElementById('icon')


    Icon.onclick = (() => {

      document.body.classList.toggle("Dark-mode")

    })

  }

  function SideBar() {
    let hello = document.getElementById('HelloWorld')

    let sameh = hello.onclick = (() => {

      if (sameh) {
        document.body.classList.toggle("editMenuButton")
        document.body.classList.toggle("Bar")
      }
    })
  }

  useEffect(() => {
    DarkMode();

    SideBar();

    const handleScroll = () => {

      if (window.scrollY > 50) {
        const Navbar = document.getElementById("MuiToolbar")

        Navbar.classList.add("scrolled")
      }
      else {
        const Navbar = document.getElementById("MuiToolbar")

        Navbar.classList.remove("scrolled")
      }

    };

    window.addEventListener("scroll", handleScroll);

  }, [])

  return <>

    <Box id="MuiToolbar" className='w-100' sx={{ flexGrow: 1 }}>

      <AppBar id="MuiToolbar" className='bg-black'>
        <Toolbar>

          <IconButton
            size="large"
            edge="start"
            aria-label="menu"
            sx={{ mr: 2 }}
          >

          </IconButton>

          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>

            <img src={logo} className='Logo' />

          </Typography>

          <i onClick={SideBar} className='GEAR fa-solid fa-gear' id='HelloWorld' />
          <i onClick={DarkMode} id='icon' className='fa-solid fa-moon men cursior-pointer text-white p-3' />
        </Toolbar>
      </AppBar>
    </Box>

  </>
}

export default Navbar