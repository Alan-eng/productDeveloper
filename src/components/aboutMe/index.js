import React, {Component} from "react";
import styled, { css, keyframes } from 'styled-components'
import ScrollableAnchor from "react-scrollable-anchor"
import { FaFly } from 'react-icons/fa';

import Alan from './Alan.jpg';
import style from './index.css';

class AboutMe extends Component {
    constructor(props) {
        super(props)

        this.state = {
            animatedLabel: 'Developer',
        }

        this.intervalID;
        this.animatedLabels = ['Developer', 'Manager', 'Owner'];
        this.setInterval = this.setInterval.bind(this);
        this.clearInterval = this.clearInterval.bind(this);
    }

    componentDidMount() {
        this.setInterval()
    }

    componentWillUnmount() {
        this.clearInterval();
    }

    setInterval() {
        this.intervalID = setInterval(
            () => {
                const calcNewLabel = () => this.animatedLabels[Math.floor(Math.random() * this.animatedLabels.length)];
                let newLabel = calcNewLabel();
                while (newLabel === this.state.animatedLabel) {
                    newLabel = calcNewLabel();
                }
                this.setState({
                    animatedLabel: newLabel
                })
            },
            5000
        );
    }

    clearInterval() {
        clearInterval(this.intervalID);
    }

    render() {
        const labelLenght = this.state.animatedLabel.length
        
        const animationType = keyframes`
        0% {
            max-width: 0ch;
        }

        50% {
            max-width: ${labelLenght}ch;
        }`
        const animationStyle = css`${animationType} 2.5s steps(${labelLenght}) infinite alternate`
        const Span = styled.span`
        display: inline-block;
        overflow: hidden;
        animation: ${animationStyle};
        position: relative;
        `

        return (
            <section className={style.aboutMe}>
                <ScrollableAnchor id={'aboutMe'}>
                    <h1 className={style.header}>Product &nbsp; 
                    <Span> {this.state.animatedLabel} <span className={style.cursor}></span></Span>
                    </h1>
                </ScrollableAnchor>
    
                <h4 className={style.headerChild}>with strong design and coding skills</h4>
                <div className={style.aboutMeContent}>
                    <img src={Alan} alt="portrait" />
                    <article className={style.menu}>
                        Hi, I’m Alan. Nice to meet you. <br />
    
                        Since beginning my journey as a web-designer nearly 4 years ago, I've collaborated with many talented people to create digital products.
                        With my good communication skills I always try to understand the problems the product is intended to solve 
and bring this understanding to others.<br/>
                        I have strong design and coding skills (work experience as a frontend-developer) and
                        I know how to manage small development teams.
                        In work process I value horizontal relationships and win–win strategy.
    
                        <ul className={style.unstyledList}>
                            <li>30 years old,</li>
                            <li> St. Petersburg, Russia</li> <br />
                            {/* <li><FaFly /> willing to relocate</li> */}
                        </ul>
                    </article>
                </div>
            </section>
        )
    }
};

export default AboutMe;