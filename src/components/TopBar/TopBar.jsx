import React from 'react'
import './TopBar.css'
import { NotificationsNone , Language ,Settings } from '@mui/icons-material';

export default function TopBar() {
  return (
    <div>
      <div className="topbar">
        <div className="topbarWrapper">

          <div className="topbarLeft">
            <span className="logo">adminDash</span>
          </div>

          <div className="topbarRight">
            <div className="iconWrapper">
                  <NotificationsNone />
                  <span className="iconBadge">9+</span>
            </div>
            <div className="iconWrapper">
                  <Language />
                  <span className="iconBadge">2</span>
            </div>
            <div className="iconWrapper">
                  <Settings />
            </div>
            <img src="https://c1.wallpaperflare.com/preview/835/832/858/man-face-human-portrait.jpg" alt="Avatar" className="topAvatar" />
          </div>

        </div>
       </div>
    </div>
  )
}
