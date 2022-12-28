import React from 'react'
import "./sidebar.scss";
import { Link } from 'react-router-dom';
import { Dashboard } from '@mui/icons-material';

export const Sidebar = () => {
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
                <li>
                    <span>Dashboard</span>
                </li>
                <li>
                    <span>Dashboard</span>
                </li>
                <li>
                    <span>Dashboard</span>
                </li>
                <li>
                    <span>Dashboard</span>
                </li>
            </ul>
        </div>
        <div className='bottom'>color options</div>
    </div>
  );
};

export default Sidebar;
