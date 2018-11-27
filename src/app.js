import React from "react";
import SideBar from "./components/sideBar"
import AboutMe from "./components/aboutMe"
import TechnologyStack from "./components/TechnologyStack"
import { hot } from 'react-hot-loader'
import style from './app.css';

const App = () => {
    return (
        <div className={style.root}>
            <SideBar />
            <div className={style.centerContainer}>
                <h1>Front-end Developer, Designer</h1>
                <h4>I design and code beautifully simple things, and I love what I do.</h4>
                <AboutMe />
                <TechnologyStack />
            </div>
        </div>
    )

};

export default hot(module)(App)