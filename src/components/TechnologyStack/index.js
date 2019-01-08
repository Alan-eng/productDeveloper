import React, { Component } from "react";
import ScrollableAnchor from "react-scrollable-anchor"
import Hexagon from './HexagonInteractive'
import react from './images/react.svg';
import redux from './images/redux.svg';
import reduxSaga from './images/redux-saga.svg';
import nodeJS from './images/nodeJS.svg';
import webpack from './images/webpack.svg';
import postCSS from './images/postCSS.svg';
import figma from './images/figma.svg';
import style from './index.css';

class TechnologyStack extends Component {
    constructor(props) {
        super(props)

        this.state = {
            animatedLabel: 'JS',
        }

        this.intervalID;
        this.animatedLabels = ['JS', 'HTML+CSS', 'React', 'Redux', 'Redux-Saga', 'NodeJS', 'PostCSS', 'Webpack'];
        this.setInterval = this.setInterval.bind(this);
        this.clearInterval = this.clearInterval.bind(this);
        this.setLabel = this.setLabel.bind(this);
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
            3000
        );
    }

    clearInterval() {
        clearInterval(this.intervalID);
    }

    setLabel(label) {
        this.setState({
            animatedLabel: label
        })
    }

    render() {
        const animatedLabel = this.state.animatedLabel;
        return (
            <div className={style.root} key={'myTechnologyStack'}>
                <ScrollableAnchor id={'technologies'}>
                    <h2 className={style.header}>Technology stack</h2>
                </ScrollableAnchor>
                <div className={style.columnContainer}>
                    <div className={style.frontendStack}>
                        <h4 className={style.headerSmall}>Develop</h4>
                        <Hexagon
                            key={'frontendStackHexagon1'}
                            className="hexagonJS"
                            isActive={animatedLabel === 'JS' ? true : false}
                            onMouseOver={() => {
                                this.clearInterval();
                                this.setLabel('JS');
                            }}
                            onMouseLeave={() => {
                                this.setInterval();
                            }}
                            labelStatic={
                                <span className={`${style.labelStatic}`}>
                                    Java Script
                                </span>
                            }
                            label={
                                animatedLabel === 'JS' ?
                                    <span className={`${style.label} ${style.typeAnimation}`}>
                                        dynamic user experience
                                </span> : null
                            }
                        >
                            <span style={{ fontSize: '24px', fontWeight: 'bold' }}>JS</span>
                        </Hexagon>
                        <Hexagon
                            key={'frontendStackHexagon2'}
                            className="hexagonHTMLCSS"
                            isActive={animatedLabel === 'HTML+CSS' ? true : false}
                            onMouseOver={() => {
                                this.clearInterval();
                                this.setLabel('HTML+CSS');
                            }}
                            onMouseLeave={() => {
                                this.setInterval();
                            }}
                            labelStatic={
                                <span className={`${style.labelStatic}`}>
                                    HTML + CSS
                                </span>
                            }
                            label={
                                animatedLabel === 'HTML+CSS' ?
                                    <span className={`${style.label} ${style.typeAnimation}`}>
                                        responsive layouts
                                    </span> : null
                            }
                        >
                            <span style={{ fontSize: '18px', fontWeight: 'bold' }}>HTML</span>
                        </Hexagon>
                        <Hexagon
                            key={'frontendStackHexagon3'}
                            className="hexagonReact"
                            isActive={animatedLabel === 'React' ? true : false}
                            onMouseOver={() => {
                                this.clearInterval();
                                this.setLabel('React');
                            }}
                            onMouseLeave={() => {
                                this.setInterval();
                            }}
                            labelStatic={
                                <span className={`${style.labelStatic}`}>
                                    React
                                </span>
                            }
                            label={
                                animatedLabel === 'React' ?
                                    <span className={`${style.label} ${style.typeAnimation}`}>
                                        fast interactive UIs
                                    </span> : null
                            }
                        >
                            <img style={{ width: '40px' }} src={react} className="react-logo" alt="react-logo" />
                        </Hexagon>
                        <Hexagon
                            key={'frontendStackHexagon4'}
                            className="hexagonRedux"
                            isActive={animatedLabel === 'Redux' ? true : false}
                            onMouseOver={() => {
                                this.clearInterval();
                                this.setLabel('Redux');
                            }}
                            onMouseLeave={() => {
                                this.setInterval();
                            }}
                            labelStatic={
                                <span className={`${style.labelStatic}`}>
                                    Redux
                                </span>
                            }
                            label={
                                animatedLabel === 'Redux' ?
                                    <span className={`${style.label} ${style.typeAnimation}`}>
                                        uniform behavior
                                    </span> : null
                            }
                        >
                            <img style={{ width: '40px' }} src={redux} className="redux-logo" alt="redux-logo" />
                        </Hexagon>
                        <Hexagon
                            key={'Redux-Saga'}
                            className="hexagonRedux"
                            isActive={animatedLabel === 'Redux-Saga' ? true : false}
                            onMouseOver={() => {
                                this.clearInterval();
                                this.setLabel('Redux-Saga');
                            }}
                            onMouseLeave={() => {
                                this.setInterval();
                            }}
                            labelStatic={
                                <span className={`${style.labelStatic}`}>
                                    Redux-Saga
                                </span>
                            }
                            label={
                                animatedLabel === 'Redux-Saga' ?
                                    <span className={`${style.label} ${style.typeAnimation}`}>
                                        side effects are nice
                                    </span> : null
                            }
                        >
                            <img style={{ width: '50px' }} src={reduxSaga} className="redux-saga-logo" alt="redux-saga-logo" />
                        </Hexagon>
                        <Hexagon
                            key={'NodeJS'}
                            className="hexagonNodeJS"
                            isActive={animatedLabel === 'NodeJS' ? true : false}
                            onMouseOver={() => {
                                this.clearInterval();
                                this.setLabel('NodeJS');
                            }}
                            onMouseLeave={() => {
                                this.setInterval();
                            }}
                            labelStatic={
                                <span className={`${style.labelStatic}`}>
                                    NodeJS
                                </span>
                            }
                            label={
                                animatedLabel === 'NodeJS' ?
                                    <span className={`${style.label} ${style.typeAnimation}`}>
                                        JavaScript everywhere
                                    </span> : null
                            }
                        >
                            <img style={{ width: '50px' }} src={nodeJS} className="nodeJS-logo" alt="nodeJS-logo" />
                        </Hexagon>
                        <Hexagon
                            key={'frontendStackHexagon5'}
                            className="hexagonPostCSS"
                            isActive={animatedLabel === 'PostCSS' ? true : false}
                            onMouseOver={() => {
                                this.clearInterval();
                                this.setLabel('PostCSS');
                            }}
                            onMouseLeave={() => {
                                this.setInterval();
                            }}
                            labelStatic={
                                <span className={`${style.labelStatic}`}>
                                    PostCSS
                                </span>
                            }
                            label={
                                animatedLabel === 'PostCSS' ?
                                    <span className={`${style.label} ${style.typeAnimation}`}>
                                        tomorrow's CSS syntax
                                    </span> : null
                            }
                        >
                            <img style={{ width: '40px' }} src={postCSS} className="postCSS-logo" alt="postCSS-logo" />
                        </Hexagon>
                        <Hexagon
                            key={'frontendStackHexagon6'}
                            className="hexagonWebpack"
                            isActive={animatedLabel === 'Webpack' ? true : false}
                            onMouseOver={() => {
                                this.clearInterval();
                                this.setLabel('Webpack');
                            }}
                            onMouseLeave={() => {
                                this.setInterval();
                            }}
                            labelStatic={
                                <span className={`${style.labelStatic}`}>
                                    Webpack
                                </span>
                            }
                            label={
                                animatedLabel === 'Webpack' ?
                                    <span className={`${style.label} ${style.typeAnimation}`}>
                                        packaging any asset
                                    </span> : null
                            }
                        >
                            <img src={webpack} className="webpack-logo" alt="webpack-logo" />
                        </Hexagon>
                    </div>
                    <div className={style.designStack}>
                        <h4 className={style.headerSmall}>Design</h4>
                        <Hexagon
                            key={'designerStackHexagon1'}
                            className="hexagonFigma"
                            labelStatic={
                                <span className={`${style.labelStatic}`}>
                                    Figma
                                </span>
                            }
                        >
                            <img style={{ width: '40px' }} src={figma} className="figma-logo" alt="figma-logo" />
                        </Hexagon>
                        <Hexagon
                            key={'designerStackHexagon2'}
                            className="hexagonIllustrator"
                            labelStatic={
                                <span className={`${style.labelStatic}`}>
                                    Illustrator
                                </span>
                            }
                        >
                            <span style={{ fontSize: '22 px', fontWeight: 'bold' }}>Ai</span>
                        </Hexagon>
                        <Hexagon
                            key={'designerStackHexagon3'}
                            className="hexagonPhotoshop"
                            labelStatic={
                                <span className={`${style.labelStatic}`}>
                                    Photoshop
                                </span>
                            }
                        >
                            <span style={{ fontSize: '22 px', fontWeight: 'bold' }}>Ps</span>
                        </Hexagon>
                        <Hexagon
                            key={'designerStackHexagon4'}
                            className="hexagonAnimate"
                            labelStatic={
                                <span className={`${style.labelStatic}`}>
                                    Animate
                                </span>
                            }
                        >
                            <span style={{ fontSize: '22 px', fontWeight: 'bold' }}>An</span>
                        </Hexagon>
                    </div>
                </div>
            </div>
        )
    }
}

export default TechnologyStack;