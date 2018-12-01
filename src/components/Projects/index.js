import React from "react";
import superkassa from './superkassa.jpg';
import style from './index.css';

const aboutMe = () => {

    return (
        <div>
            <h1>My recent Projects</h1>
            <h4>I design and code beautifully simple things, and I love what I do.</h4>
            <div className={style.root}>
                <div className={style.container}>
                    <img src={superkassa} className={style.img} alt="superkassa site" />
                    <p className={style.title}>card title</p>
                    <div className={style.overlay}></div>
                    <button className={style.btn}>SHOW</button>
                </div>
            </div>
        </div>
    )
};

export default aboutMe;