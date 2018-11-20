import React from "react";
import ButtonRed from "./components/buttonRed"
import ButtonBlue from "./components/buttonBlue"
import SideBar from "./components/sideBar"
import AboutMe from "./components/aboutMe"
import { hot } from 'react-hot-loader'
import style from './app.css';

const App = () => {
  return (
    <div className={style.root}>
        <SideBar />
        <div className={style.centerContainer}>

            <AboutMe />
        </div>
        
        {/* <div>
            <ButtonRed />
        </div>
        <div>
            <ButtonBlue />
        </div> */}
    </div>
  )
  
};

export default hot(module)(App)