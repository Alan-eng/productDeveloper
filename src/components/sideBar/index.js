import React, { Component, Fragment } from "react";
import { FaBeer, FaPenAlt, FaHandsHelping, FaHammer, FaBars, FaTimes, FaBehance, FaGithub } from 'react-icons/fa';
import Transition from 'react-transition-group/Transition';

import style from './index.css';

class SideBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            menuIsOpen: true,
            activeLink: 'aboutMe'
        }

        this.setActiveLink = this.setActiveLink.bind(this);
        this.openCloseMenu = this.openCloseMenu.bind(this);
    }

    setActiveLink(link) {
        if (this.props.windowWidth === 'mobile' || this.props.windowWidth === 'tablet') {
            this.openCloseMenu()
        }

        this.setState({
            activeLink: link
        })
    }

    openCloseMenu() {
        this.setState({
            menuIsOpen: !this.state.menuIsOpen
        })
    }




    render() {

        const duration = 300;

        const defaultStyle = {
            transition: `all ${duration}ms linear`,
            transform: `translateX(-310px)`,
            // opacity: 0,
        }

        const transitionStyles = {
            entering: {
                transform: `translateX(0%)`,
            },
            entered: {
                // opacity: 1,
                transform: `translateX(-60px)`
            },
            exiting: {
                opacity: 1,
                transform: `translateX(0%)`
            },
            // exited: {
            //     opacity: 0,
            //     transform: `translateX(60px)`
            // }
        };


        return (
            <Fragment>
                {this.state.menuIsOpen ?
                    <div
                        onClick={(e) => {
                            e.stopPropagation();
                            this.openCloseMenu();
                        }}
                        className={style.cover}></div> :
                    null}
                <Transition in={this.state.menuIsOpen} appear timeout={duration}>
                    {(state) => (
                        <nav
                            style={{
                                ...defaultStyle,
                                ...transitionStyles[state]
                            }}
                            className={style.sideBar}
                        >
                            <button
                                onClick={this.openCloseMenu}
                                className={style.menuBtn}
                            >
                                {this.state.menuIsOpen ?
                                    <FaTimes /> :
                                    <FaBars />
                                }
                            </button>
                            <div className={style.sideBarTitle}>
                                <h1 className={style.sideBarHeader}>Alan Betanov</h1> <br />
                                <small>(Frontend developer)</small>
                            </div>
                            <div className={style.sideBarVerticalContainer}>
                                <ul className={style.sideBarMenu}>
                                    <li>
                                        <a
                                            onClick={() => this.setActiveLink('aboutMe')}
                                            className={this.state.activeLink === 'aboutMe' ? style.activeLink : style.link}
                                            href='#aboutMe'>
                                            <FaBeer /> &nbsp; About Me
                                </a>
                                    </li>
                                    <li>
                                        <a
                                            onClick={() => this.setActiveLink('technologies')}
                                            className={this.state.activeLink === 'technologies' ? style.activeLink : style.link}
                                            href='#technologies'
                                        >
                                            <FaHammer /> &nbsp; Technologies
                                </a>
                                    </li>
                                    <li>
                                        <a
                                            onClick={() => this.setActiveLink('projects')}
                                            className={this.state.activeLink === 'projects' ? style.activeLink : style.link}
                                            href='#projects'
                                        >
                                            <FaHandsHelping /> &nbsp; Projects
                                </a>
                                    </li>
                                    <li>
                                        <a
                                            onClick={() => this.setActiveLink('contacts')}
                                            className={this.state.activeLink === 'contacts' ? style.activeLink : style.link}
                                            href='#contacts'
                                        >
                                            <FaPenAlt /> &nbsp; Contacts
                                </a>
                                    </li>
                                </ul>
                                <ul className={style.linksToOtherResourses}>
                                    <li>
                                        <a className={style.link} href='https://www.behance.net/Alan-eng' target='_blank'>
                                            <FaBehance />
                                        </a>
                                    </li>
                                    <li>
                                        <a className={style.link} href='https://github.com/Alan-eng/' target='_blank'>
                                            <FaGithub />
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </nav>)}
                </Transition>
                <nav className={style.sideBarMenuTop}>
                    <button
                        onClick={this.openCloseMenu}
                        className={`${style.btnWithIcon} ${this.state.menuIsOpen ? style.closeMenu : style.openMenu}`}
                    >
                        {this.state.menuIsOpen ?
                            <FaTimes /> :
                            <FaBars />
                        }
                    </button>
                    <span className={style.menuTopDescription}>Alan Betanov <small className={style.menuTopDescriptionSmall}>(Frontend developer)</small></span>
                </nav>
            </Fragment>
        )
    }
};

export default SideBar;