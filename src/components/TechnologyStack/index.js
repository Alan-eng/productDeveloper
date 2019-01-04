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
            // animatedLabels: ['JS', 'HTML+CSS', 'React', 'Redux', 'Redux-Saga', 'NodeJS', 'PostCSS', 'Webpack'],
        }

        this.intervalID;
        this.animatedLabels = ['JS', 'HTML+CSS', 'React', 'Redux', 'Redux-Saga', 'NodeJS', 'PostCSS', 'Webpack'];
    }

    componentDidMount() {
        const animatedLabels = this.animatedLabels;
        this.intervalID = setInterval(
            () => this.setState({
                animatedLabel: animatedLabels[Math.floor(Math.random() * animatedLabels.length)]
            }),
            3000
        );
    }

    componentWillUnmount() {
        if (this.props.infinite === true) {
            clearInterval(this.intervalID);
        }
    }

    render() {
        const animatedLabel = this.state.animatedLabel;
        return (
            <div className={style.root} key={'myTechnologyStack'}>
                <ScrollableAnchor id={'technologies'}>
                    <h2>Front-end Developer</h2>
                </ScrollableAnchor>
                <div className={style.columnContainer}>
                    <div className={style.frontendStack}>
                        <h4>Technology stack</h4>
                        <Hexagon
                            key={'frontendStackHexagon1'}
                            className="hexagonJS"
                            labelStatic={
                                <span className={`${style.label}`}>
                                    Java Script
                                </span>
                            }
                            label={
                                animatedLabel === 'JS' ?
                                    <span className={`${style.label} ${style.typeAnimation}`}>
                                        Java Script
                                </span> : null
                            }
                        >
                            <span style={{ fontSize: '24px', fontWeight: 'bold' }}>JS</span>
                        </Hexagon>
                        <Hexagon
                            key={'frontendStackHexagon2'}
                            className="hexagonHTMLCSS"
                            labelStatic={
                                <span className={`${style.label}`}>
                                    HTML + CSS
                                </span>
                            }
                            label={
                                animatedLabel === 'HTML+CSS' ?
                                    <span className={`${style.label} ${style.typeAnimation}`}>
                                        HTML + CSS
                                    </span> : null
                            }
                        >
                            <span style={{ fontSize: '18px', fontWeight: 'bold' }}>HTML</span>
                        </Hexagon>
                        <Hexagon
                            key={'frontendStackHexagon3'}
                            className="hexagonReact"
                            labelStatic={
                                <span className={`${style.label}`}>
                                    React
                                </span>
                            }
                            label={
                                animatedLabel === 'React' ?
                                    <span className={`${style.label} ${style.typeAnimation}`}>
                                        React
                                    </span> : null
                            }
                        >
                            <img style={{ width: '40px' }} src={react} className="react-logo" alt="react-logo" />
                        </Hexagon>
                        <Hexagon
                            className="hexagonRedux"
                            key={'frontendStackHexagon4'}
                            labelStatic={
                                <span className={`${style.label}`}>
                                    Redux
                                </span>
                            }
                            label={
                                animatedLabel === 'Redux' ?
                                    <span className={`${style.label} ${style.typeAnimation}`}>
                                        Redux
                                    </span> : null
                            }
                        >
                            <img style={{ width: '40px' }} src={redux} className="redux-logo" alt="redux-logo" />
                        </Hexagon>
                        <Hexagon
                            className="hexagonRedux"
                            key={'Redux-Saga'}
                            labelStatic={
                                <span className={`${style.label}`}>
                                    Redux-Saga
                                </span>
                            }
                            label={
                                animatedLabel === 'Redux-Saga' ?
                                    <span className={`${style.label} ${style.typeAnimation}`}>
                                        Redux-Saga
                                    </span> : null
                            }
                        >
                            <img style={{ width: '50px' }} src={reduxSaga} className="redux-saga-logo" alt="redux-saga-logo" />
                        </Hexagon>
                        <Hexagon
                            className="hexagonNodeJS"
                            key={'NodeJS'}
                            labelStatic={
                                <span className={`${style.label}`}>
                                    NodeJS
                                </span>
                            }
                            label={
                                animatedLabel === 'NodeJS' ?
                                    <span className={`${style.label} ${style.typeAnimation}`}>
                                        NodeJS
                                    </span> : null
                            }
                        >
                            <img style={{ width: '50px' }} src={nodeJS} className="nodeJS-logo" alt="nodeJS-logo" />
                        </Hexagon>
                        <Hexagon
                            key={'frontendStackHexagon5'}
                            className="hexagonPostCSS"
                            labelStatic={
                                <span className={`${style.label}`}>
                                    PostCSS
                                </span>
                            }
                            label={
                                animatedLabel === 'PostCSS' ?
                                    <span className={`${style.label} ${style.typeAnimation}`}>
                                        PostCSS
                                    </span> : null
                            }
                        >
                            <img style={{ width: '40px' }} src={postCSS} className="postCSS-logo" alt="postCSS-logo" />
                        </Hexagon>
                        <Hexagon
                            key={'frontendStackHexagon6'}
                            className="hexagonWebpack"
                            labelStatic={
                                <span className={`${style.label}`}>
                                    Webpack
                                </span>
                            }
                            label={
                                animatedLabel === 'Webpack' ?
                                    <span className={`${style.label} ${style.typeAnimation}`}>
                                        Webpack
                                    </span> : null
                            }
                        >
                            <img src={webpack} className="webpack-logo" alt="webpack-logo" />
                        </Hexagon>
                    </div>
                    <div className={style.designStack}>
                        <h4>Other instruments</h4>
                        <Hexagon
                            key={'designerStackHexagon1'}
                            className="hexagonFigma"
                            labelStatic={
                                <span className={`${style.label}`}>
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
                                <span className={`${style.label}`}>
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
                                <span className={`${style.label}`}>
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
                                <span className={`${style.label}`}>
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