import React, { Component } from "react";
import ScrollableAnchor from "react-scrollable-anchor"
import Hexagon from './HexagonInteractive'
import { FaFortAwesome, FaListOl, FaHandHoldingUsd, FaHandsHelping } from 'react-icons/fa';
import style from './index.css';

class ManagementStack extends Component {
    constructor(props) {
        super(props)

        this.state = {
            animatedLabel: 'Planning',
        }

        this.intervalID;
        this.animatedLabels = ['Planning', 'PrioritizeNeeds', 'Communication', 'Leadership'];
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
                    <h2 className={style.header}>My strengths in management and leadership:</h2>
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
                                       I have the ability to understand and being understood
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
                                        I always try to organize tasks in the right order
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
                                        I'm weighing priorities according to the needs
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
                                        I'm able to manage team and resolve conflicts
                                    </span> : null
                            }
                        >
                            <FaFortAwesome />
                        </Hexagon>
                    </div>
                </div>
            </div>
        )
    }
}

export default ManagementStack;