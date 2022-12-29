import React from 'react'
import Navbar from '../../components/navbar'
import Sidebar from '../../components/sidebar'
import './settings.scss';

const Settings = () => {
  return (
    <div>
        <div className="settings">
            <Sidebar />
            <div className="settingsContainer">
                <Navbar />
                Settings
            </div>
        </div>
    </div>
  )
}

export default Settings