import React, { Component } from "react";
import { FaBeer, FaPenAlt, FaHandsHelping, FaHammer } from 'react-icons/fa';

import style from './index.css';

class SideBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeLink: 'aboutMe'
        }

        this.setActiveLink = this.setActiveLink.bind(this);
    }

    setActiveLink(link) {
        this.setState({
            activeLink: link
        })
    }

    render() {
        return (
            <div className={style.sideBar}>
                <a href={'#'} className={style.sideBarHeader}>
                    <span>Alan Betanov</span> <br />
                    (UX/UI designer)
                {/* <img src='./sidebarIcon'/> */}
                </a>
                <ul className={style.menu}>
                    <a
                        onClick={() => this.setActiveLink('aboutMe')}
                        className={this.state.activeLink === 'aboutMe' ? style.activeLink : style.link}
                        href='#aboutMe'>
                        <FaBeer /> &nbsp; About Me
                    </a>
                    <a
                        onClick={() => this.setActiveLink('technologies')}
                        className={this.state.activeLink === 'technologies' ? style.activeLink : style.link}
                        href='#technologies'
                    >
                        <FaHammer /> &nbsp; Technologies
                    </a>
                    <a
                        onClick={() => this.setActiveLink('projects')}
                        className={this.state.activeLink === 'projects' ? style.activeLink : style.link}
                        href='#projects'
                    >
                        <FaHandsHelping /> &nbsp; Projects
                     </a>
                    <a
                        onClick={() => this.setActiveLink('contacts')}
                        className={this.state.activeLink === 'contacts' ? style.activeLink : style.link}
                        href='#contacts'
                    >
                        <FaPenAlt /> &nbsp; Contacts
                     </a>
                </ul>
            </div>
        )
    }
};

export default SideBar;