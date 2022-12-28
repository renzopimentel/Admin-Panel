import styled from "styled-components"
import { Link } from 'react-router-dom'

export const Nav = styled.nav`
    background: #000;
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.1rem;
    position: sticky;
    top: 0;
    z-index: 10;

    @media screen and (max-width: 960px){
        transition: 0.8s all ease;
    }
`

export const NavbarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    height: 80px;
    z-index: 1;
    width: 100%;
    padding: 0 24px;
    max-width: 1100px;
`;

export const NavLogo = styled(Link)`
    color: white;
    justify-self: flex-start;
    cursor: pointer;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    margin-left: 24px;
    font-weight: bold;
    text-decoration: none;
`;

export const MobileIcon = styled.div`
    display: none;

    @media screen and (max-width: 768px){
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 60%);
        font-size: 1.8rem;
        cursor: pointer;
    }
`

export const MenuItem = styled.div`
    font-size: 14px;
    cursor: pointer;
    margin-left: 25px;
`

export const NavMenu = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
    text-align: center;
    margin-right: -22px;

    @media screen and (max-width: 768px){
        display: none;
    }
`;

export const NavItem = styled.li`
    height: 80px;
`;

export const NavLinks = styled(Link)`
    color: white;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;

    .span{
        font-size: 16px;
        letter-spacing: 1.42px;
        position: relative;

        &:after{
            content: "";
            height: 2px;
            background: white;
            position: absolute;
            left: 0;
            right: 0;
            bottom: -6px;
            opacity: 0;
            transform: scaleX(0);
        }
    }

    &:hover{
        span:after{
            transform: scaleY(1);
            opacity: 1;
        }

        color: white;
    }

`;

export const LinkIcons = styled(Link)`
    .cart-widget{
        margin: 0 10px 4px 0;
        color: white;
    }

    .cart-widget:hover {
        margin: 0 10px 4px 0;
        transform: scale(1.1);
        color: white;
    }

    .login-widget{
        margin-right: 10px;
        color: white;
    }
`

export const NavBtn = styled.nav`
    display: flex;
    align-items: center;
    color: white;

    @media screen and (max-width: 768px){
        display: none;
    }

    .search-widget{
        margin-right: 10px;
    }

`

export const NavBtnLink = styled(Link)`
    border-radius: 50px;
    background: #01bf71;
    white-space: nowrap;
    padding: 20px 30px;
    color: #010606;
    font-size: 16px;
    outline: none;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;
    margin: 10px;

    &:hover{
        transition: all 0.2s ease-in-out;
        background: #fff;
        color: #010606; 
    }
`

export const SidebarContainer = styled.aside`
    position: fixed;
    z-index: 999;
    width: 100%;
    height: 100%;
    background: #0d0d0d;
    display: grid;
    align-items: center;
    top: 0;
    left: 0;
    transition: 0.3s ease-in-out;
    top: 0;
`