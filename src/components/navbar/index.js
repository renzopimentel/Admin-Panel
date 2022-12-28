import React from 'react'
import {
        Nav,
        NavbarContainer,
        NavLogo,
        MenuItem,
        NavMenu,
        NavItem,
        NavLinks,
        NavBtn
    } from './NavbarElements'
import SearchIcon from '@mui/icons-material/Search';
import { Badge } from '@mui/material';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import { Link } from 'react-router-dom';

const Navbar = ({ click, handleClick }) => {
    return (
        <Nav>
            <NavbarContainer>
                <NavLogo to='/'>DATA.</NavLogo>

                <NavMenu className={`links ${click ? 'active' : ''}`}>
                    <NavItem>
                        <NavLinks to='/cursos'><span>CURSOS</span></NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to='/cafe'><span>CAFÉ</span></NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to='/kiosco'><span>KIOSCO</span></NavLinks>
                    </NavItem>
                </NavMenu>
                <NavBtn>
                    <MenuItem>
                        <SearchIcon />
                    </MenuItem>
                    <Link to="/login" style={{ color: '#FFF' }}>
                        <MenuItem className='login-widget'>
                            <PersonOutlineIcon />
                        </MenuItem>
                    </Link>
                    <Link to="/carrito" style={{ color: '#FFF' }}>
                        <MenuItem className='cart-widget'>
                            <Badge badgeContent={4} color="primary">
                                <ShoppingCartOutlinedIcon />
                            </Badge>
                        </MenuItem>
                    </Link>
                    <MenuItem>EN</MenuItem>
                </NavBtn>
            </NavbarContainer>
        </Nav>
    )
}

export default Navbar