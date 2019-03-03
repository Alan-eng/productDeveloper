import React, { Component } from "react";
import ScrollableAnchor from "react-scrollable-anchor"
import Hexagon from './HexagonInteractive'
import { FaFortAwesome, FaListOl, FaHandHoldingUsd, FaHandsHelping, FaHammer, FaPalette } from 'react-icons/fa';
import style from './index.css';

class ManagementStack extends Component {
    constructor(props) {
        super(props)

        this.state = {
            animatedLabel: 'Planning',
        }

        this.intervalID;
        this.animatedLabels = ['Planning', 'PrioritizeNeeds', 'Communication', 'Leadership', 'EngineeringBackground', 'DesignBackground'];
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
                <ScrollableAnchor id={'skills'}>
                    <h2 className={style.header}>My strengths:</h2>
                </ScrollableAnchor>
                <div className={style.columnContainer}>
                    <div className={style.frontendStack}>
                        <Hexagon
                            key={'frontendStackHexagon4'}
                            className="hexagonCommunication"
                            isActive={animatedLabel === 'Communication' ? true : false}
                            onMouseOver={() => {
                                this.clearInterval();
                                this.setLabel('Communication');
                            }}
                            onMouseLeave={() => {
                                this.setInterval();
                            }}
                            labelStatic={
                                <span className={`${style.labelStatic}`}>
                                    Communication
                                </span>
                            }
                            label={
                                animatedLabel === 'Communication' ?
                                    <span className={`${style.label} ${style.typeAnimation}`}>
                                       ability to understand and being understood
                                    </span> : null
                            }
                        >
                            <FaHandsHelping />
                        </Hexagon>
                        <Hexagon
                            key={'frontendStackHexagon2'}
                            className="hexagonPlanning"
                            isActive={animatedLabel === 'Planning' ? true : false}
                            onMouseOver={() => {
                                this.clearInterval();
                                this.setLabel('Planning');
                            }}
                            onMouseLeave={() => {
                                this.setInterval();
                            }}
                            labelStatic={
                                <span className={`${style.labelStatic}`}>
                                    Planning 
                                </span>
                            }
                            label={
                                animatedLabel === 'Planning' ?
                                    <span className={`${style.label} ${style.typeAnimation}`}>
                                        organize tasks in the right order
                                    </span> : null
                            }
                        >
                            <FaListOl />
                        </Hexagon>
                        <Hexagon
                            key={'frontendStackHexagon3'}
                            className="hexagonPrioritizeNeeds"
                            isActive={animatedLabel === 'PrioritizeNeeds' ? true : false}
                            onMouseOver={() => {
                                this.clearInterval();
                                this.setLabel('PrioritizeNeeds');
                            }}
                            onMouseLeave={() => {
                                this.setInterval();
                            }}
                            labelStatic={
                                <span className={`${style.labelStatic}`}>
                                    Prioritize needs
                                </span>
                            }
                            label={
                                animatedLabel === 'PrioritizeNeeds' ?
                                    <span className={`${style.label} ${style.typeAnimation}`}>
                                        weighing priorities according to the needs
                                    </span> : null
                            }
                        >
                            <FaHandHoldingUsd />
                        </Hexagon>

                        <Hexagon
                            key={'frontendStackHexagon5'}
                            className="hexagonLeadership"
                            isActive={animatedLabel === 'Leadership' ? true : false}
                            onMouseOver={() => {
                                this.clearInterval();
                                this.setLabel('Leadership');
                            }}
                            onMouseLeave={() => {
                                this.setInterval();
                            }}
                            labelStatic={
                                <span className={`${style.labelStatic}`}>
                                    Leadership
                                </span>
                            }
                            label={
                                animatedLabel === 'Leadership' ?
                                    <span className={`${style.label} ${style.typeAnimation}`}>
                                        manage team and resolve conflicts
                                    </span> : null
                            }
                        >
                            <FaFortAwesome />
                        </Hexagon>

                        <Hexagon
                            key={'frontendStackHexagon5'}
                            className="hexagonEngineeringBackground"
                            isActive={animatedLabel === 'EngineeringBackground' ? true : false}
                            onMouseOver={() => {
                                this.clearInterval();
                                this.setLabel('EngineeringBackground');
                            }}
                            onMouseLeave={() => {
                                this.setInterval();
                            }}
                            labelStatic={
                                <span className={`${style.labelStatic}`}>
                                    Engineering Background
                                </span>
                            }
                            label={
                                animatedLabel === 'EngineeringBackground' ?
                                    <span className={`${style.label} ${style.typeAnimation}`}>
                                        experience in frontend development
                                    </span> : null
                            }
                        >
                            <FaHammer />
                        </Hexagon>

                        <Hexagon
                            key={'frontendStackHexagon5'}
                            className="hexagonDesignBackground"
                            isActive={animatedLabel === 'DesignBackground' ? true : false}
                            onMouseOver={() => {
                                this.clearInterval();
                                this.setLabel('DesignBackground');
                            }}
                            onMouseLeave={() => {
                                this.setInterval();
                            }}
                            labelStatic={
                                <span className={`${style.labelStatic}`}>
                                    Design Background
                                </span>
                            }
                            label={
                                animatedLabel === 'DesignBackground' ?
                                    <span className={`${style.label} ${style.typeAnimation}`}>
                                        experience in web-design
                                    </span> : null
                            }
                        >
                            <FaPalette />
                        </Hexagon>
                    </div>
                </div>
            </div>
        )
    }
}

export default ManagementStack;