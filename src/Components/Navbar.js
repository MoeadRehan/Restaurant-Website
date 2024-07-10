import React, {  useState } from 'react'
import logo from '../Assets/Logo.svg'
import {BsCart2} from 'react-icons/bs'
import { HiOutlineBars3 } from 'react-icons/hi2'
import { Box, List, Drawer, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material"
import HomeIcon from '@mui/icons-material/Home'
import InfoIcon from '@mui/icons-material/Info'
import CommentRoundedIcon from '@mui/icons-material/CommentRounded'
import PhoneRoundedIcon from '@mui/icons-material/PhoneRounded'
import ShoppingCartRoundedIcon from '@mui/icons-material/ShoppingCartRounded'
import { Link } from 'react-router-dom'
const Navbar = () => {
    const [line, setLine] = useState('home')
    const [openMenu, setOpenMenu] = useState(false)
    const menuOptions = [
        {
            text: "Home",
            icon: <HomeIcon />,
            link: '/'
        },
        {
            text: "About",
            icon: <InfoIcon />,
            link: '/about'
        },
        {
            text: "Menu",
            icon: <CommentRoundedIcon />,
            link: '/menu'
        },

        {
            text: "Q/A",
            icon: <PhoneRoundedIcon />,
            link: '/question'
        },
        {
            text: "Contact",
            icon: <PhoneRoundedIcon />,
            link: '/contact'
        },
        {
            text: "Cart",
            icon: <ShoppingCartRoundedIcon />,
            link: '/cart'
        }
    ];
  return (
    <nav>
        <div className='nav-logo-container'>
            <Link to='/'>
            <img src={logo} alt='Brand`s Logo' />
            </Link>
        </div>
        <div className='navbar-links-container'>
            <ul className='navbar-listitems'>
                <li onClick={() => setLine("home")} className={line === "home"? "active": ""} >
                    <Link  to='/'>Home</Link>
                </li>
                <li onClick={() => setLine("about")} className={line === "about"? "active": ""}>
                    <Link  to='/about'>About</Link>
                </li>
                <li onClick={() => setLine("menu")} className={line === "menu"? "active": ""}>
                    <Link to='/menu'>Menu</Link>
                </li>
                <li  onClick={() => setLine("q/a")} className={line === "q/a"? "active": ""}>
                    <Link to='/question'>Q/A</Link>
                </li>
                <li onClick={() => setLine("question")} className={line === "question"? "active" : ""}>
                    <Link to='/contact'>Contact Us</Link>
                </li>
                <li>
                     <Link to='/cart'><BsCart2 className='navbar-cart-icon' /></Link>
                </li>
            </ul>
            <button className='primary-button'>
                Booking Now
            </button>
        </div>
        <div className='navbar-menu-container'>
            <HiOutlineBars3 onClick={() => setOpenMenu(true)} />
        </div>
        <Drawer open={openMenu} onClose={() => setOpenMenu(false)} anchor='right'>
                <Box role="presentation" sx={{ width: 250 }} onClick={() => setOpenMenu(false)} onKeyDown={() => setOpenMenu(false)}>
                    <List>
                        {menuOptions.map((item) => (
                            <ListItem key={item.text} disablePadding>
                                <ListItemButton component={Link} to={item.link}>
                                    <ListItemIcon>{item.icon}</ListItemIcon>
                                    <ListItemText primary={item.text} />
                                </ListItemButton>
                            </ListItem>
                        ))}
                    </List>
                </Box>
            </Drawer>
    </nav>
  )
}

export default Navbar