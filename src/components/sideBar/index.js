import React from "react";

import style from './index.css';

const sideBar = () => {

    return (
    <div className={style.sideBar}>
            <a href = {'#'} className={style.sideBarHeader}>
                <span>Alan Betanov</span> <br/>
                (UX/UI designer)
                {/* <img src='./sidebarIcon'/> */}
            </a>
            <ul className={style.menu}>
                <li>About</li>
                <li>Technologies</li>
                <li>Projects</li>
                <li>Contacts</li>
            </ul>
    </div>
    )
  };

export default sideBar;