import React from "react";
import ScrollableAnchor from "react-scrollable-anchor"
import { FaFly } from 'react-icons/fa';

import Alan from './Alan.jpg';
import style from './index.css';

const AboutMe = () => {

    return (
        <section className={style.aboutMe}>
            <ScrollableAnchor id={'aboutMe'}>
                <h1 className={style.header}>Front-end &nbsp; <span className={style.headerAnimation}> Developer</span></h1>
            </ScrollableAnchor>

            <h4 className={style.headerChild}>I design and code beautifully simple things, and I love what I do.</h4>
            <div className={style.aboutMeContent}>
                <img src={Alan} alt="portrait" />
                <article className={style.menu}>
                    Hi, I’m Alan. Nice to meet you. <br />

                    Since beginning my journey as a designer nearly 3 years ago, I've collaborated with many talented people to create digital products. I value simple content structure, clean design patterns, and thoughtful interactions.
                    I play well with others and I'm happy to integrate into your existing team to help get your project implemented.

                    <ul className={style.unstyledList}>
                        <li>30 years old,</li>
                        <li> St. Petersburg, Russia</li> <br />
                        <li><FaFly /> willing to relocate</li>
                    </ul>
                </article>
            </div>
        </section>
    )
};

export default AboutMe;