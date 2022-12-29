import React from 'react'
import "./sidebar.scss";
import { Link } from 'react-router-dom';
import { AccountCircle, CreditCard, Dashboard, ExitToApp, InsertChart, LocalShipping, NotificationsNone, PersonOutlined, Psychology, SettingsApplications, SettingsSystemDaydream, Store } from '@mui/icons-material';
// import { DarkModeContext } from "../../context/darkModeContext";
// import { useContext } from "react";

export const Sidebar = () => {
    // const { dispatch } = useContext(DarkModeContext);
    return (
        <div className='sidebar'>
            <div className="top">
                <Link to="/" style={{ textDecoration: "none" }}>
                    <span className="logo">datadmin</span>
                </Link>
            </div>
            <hr />
            <div className="center">
                <ul>
                    <p className="title">MAIN</p>
                    <li>
                        <Dashboard className="icon" />
                        <span>Dashboard</span>
                    </li>
                    <p className="title">LISTS</p>
                    <Link to="/users" style={{ textDecoration: "none" }}>
                        <li>
                        <PersonOutlined className="icon" />
                        <span>Users</span>
                        </li>
                    </Link>
                    <Link to="/products" style={{ textDecoration: "none" }}>
                        <li>
                        <Store className="icon" />
                        <span>Products</span>
                        </li>
                    </Link>
                    <li>
                        <CreditCard className="icon" />
                        <span>Orders</span>
                    </li>
                    <li>
                        <LocalShipping className="icon" />
                        <span>Delivery</span>
                    </li>
                    <p className="title">USEFUL</p>
                    <li>
                        <InsertChart className="icon" />
                        <span>Stats</span>
                    </li>
                    <li>
                        <NotificationsNone className="icon" />
                        <span>Notifications</span>
                    </li>
                    <p className="title">SERVICE</p>
                    <li>
                        <SettingsSystemDaydream className="icon" />
                        <span>System Health</span>
                    </li>
                    <li>
                        <Psychology className="icon" />
                        <span>Logs</span>
                    </li>
                    <Link to="/settings" style={{ textDecoration: "none" }}>
                        <li>
                            <SettingsApplications className="icon" />
                            <span>Settings</span>
                        </li>
                    </Link>
                    <p className="title">USER</p>
                    <li>
                        <AccountCircle className="icon" />
                        <span>Profile</span>
                    </li>
                    <li>
                        <ExitToApp className="icon" />
                        <span>Logout</span>
                    </li>
                </ul>
            </div>
            <div className="bottom">
                <div
                className="colorOption"
                // onClick={() => dispatch({ type: "LIGHT" })}
                ></div>
                <div
                className="colorOption"
                // onClick={() => dispatch({ type: "DARK" })}
                ></div>
            </div>
        </div>
    );
};

export default Sidebar;
