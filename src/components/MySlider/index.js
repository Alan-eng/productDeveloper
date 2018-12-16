import React, { Component } from "react";
import Transition from 'react-transition-group/Transition';
import { RightArrow, LeftArrow } from './Arrows'
import Superkassa2 from './superkassa2.jpg'
import Superkassa3 from './superkassa3.jpg'
import Superkassa4 from './superkassa4.jpg'

import style from './index.css';


class Slider extends Component {
    constructor(props) {
        super(props)

        this.state = {
            images: [...props.images],
            transitionFirstImageIn: true,
            firstImageIndex: 1,
            transitionSecondImageIn: false,
            secondImageIndex: 0,
            numberOfClicks: 0,
            currentIndex: 0,
            // translateValue: 0,
        }

        this.intervalID;
        this.sliderRef = React.createRef();
        this.slideWidth = this.slideWidth.bind(this)
        this.goToNextSlide = this.goToNextSlide.bind(this)
        this.goToPrevSlide = this.goToPrevSlide.bind(this)
    }

    componentDidMount() {
        if (this.props.infinite === true) {
            this.intervalID = setInterval(
                () => this.goToNextSlide(),
                2000
            );
        }
    }

    componentWillUnmount() {
        if (this.props.infinite === true) {
            clearInterval(this.intervalID);
        }
    }

    slideWidth() {
        if (this.sliderRef.current) {
            return this.sliderRef.current.clientWidth;
        } return '600px';
    }

    goToNextSlide() {
        this.setState((prevState) => {
            const {
                transitionFirstImageIn,
                transitionSecondImageIn,
                currentIndex,
                secondImageIndex,
                firstImageIndex,
                images,
                numberOfClicks,
            } = prevState

            if (numberOfClicks % 2 === 0) {
                return {
                    numberOfClicks: numberOfClicks + 1,
                    transitionFirstImageIn: !transitionFirstImageIn,
                    transitionSecondImageIn: !transitionSecondImageIn,
                    secondImageIndex: secondImageIndex + 2 > images.length - 1 ? 0 : secondImageIndex + 2,
                    // translateValue: 0
                }
            } else {
                return {
                    numberOfClicks: numberOfClicks + 1,
                    transitionFirstImageIn: !transitionFirstImageIn,
                    firstImageIndex: firstImageIndex + 2 > images.length - 1 ? 1 : firstImageIndex + 2,
                    transitionSecondImageIn: !transitionSecondImageIn,
                    // translateValue: 0
                }

            }
        })
    }

    goToPrevSlide() {
        if (Math.abs(this.state.currentIndex) === this.state.images.length - 1) {
            return this.setState({
                transitionIn: false,
                translateValue: 0
            })
        }

        this.setState(prevState => ({
            transitionIn: false,
            translateValue: prevState.translateValue + (this.slideWidth())
        }));

    }

    render() {
        console.log('this.sliderRef', this.sliderRef.current)
        const {
            images,
            currentIndex,
            firstImageIndex,
            secondImageIndex
        } = this.state

        const duration = 300;

        const defaultStyle = {
            transition: `all ${duration}ms linear`,
            position: 'absolute',
            opacity: 0,
        }

        const transitionStyles = {
            entering: {
                transform: `translateX(-60px)`,
            },
            entered: {
                opacity: 1,
                transform: `translateX(0%)`
            },
            exiting: {
                opacity: 0,
                transform: `translateX(60px)`
            },
            // exited: {
            //     opacity: 0,
            //     transform: `translateX(60px)`
            // }
        };

        return (
            <div
                className={`${style.slider}`}
                ref={this.sliderRef}
            >
                <Transition in={this.state.transitionFirstImageIn} appear timeout={duration}>
                    {(state) => (
                        <img
                            style={{
                                ...defaultStyle,
                                ...transitionStyles[state]
                            }}
                            src={images[firstImageIndex]}
                        />
                    )}
                </Transition>
                <Transition in={this.state.transitionSecondImageIn} appear timeout={duration}>
                    {(state) => (
                        <img
                            style={{
                                ...defaultStyle,
                                ...transitionStyles[state]
                            }}
                            src={images[secondImageIndex]}
                        />
                    )}
                </Transition>
                {
                    currentIndex > 0 ?
                        <LeftArrow
                            goToPrevSlide={this.goToPrevSlide}
                        /> : null
                }
                <RightArrow
                    goToNextSlide={this.goToNextSlide}
                />
            </div >
        );
    }
};

export default Slider;
