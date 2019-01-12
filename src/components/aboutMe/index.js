import React from "react";
import ScrollableAnchor from "react-scrollable-anchor"
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

                    Since beginning my journey as a designer nearly 3 years ago, I've done work for agencies, consulted for startups, and collaborated with talented people to create digital products for both business and consumer use. I'm quietly confident, naturally curious, and perpetually improving my chops.

                    I tend to code things from scratch, and enjoy bringing ideas to life in the browser.
                    I value simple content structure, clean design patterns, and thoughtful interactions.
                </article>
            </div>
        </section>
    )
};

export default AboutMe;