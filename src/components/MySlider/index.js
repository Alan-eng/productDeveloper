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
            transitionIn: false,
            currentIndex: 0,
            translateValue: 0,
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
        if (this.state.currentIndex === this.state.images.length - 1) {
            return this.setState({
                transitionIn: true,
                currentIndex: 0,
                translateValue: 0
            })
        }

        this.setState(prevState => ({
            currentIndex: prevState.currentIndex + 1,
            translateValue: prevState.translateValue + -(this.slideWidth())
        }));

    }

    goToPrevSlide() {
        if (Math.abs(this.state.currentIndex) === this.state.images.length - 1) {
            return this.setState({
                currentIndex: 0,
                translateValue: 0
            })
        }

        this.setState(prevState => ({
            currentIndex: prevState.currentIndex - 1,
            translateValue: prevState.translateValue + (this.slideWidth())
        }));

    }

    render() {
        console.log('this.sliderRef', this.sliderRef.current)
        const {
            images,
            currentIndex,
        } = this.state

        const duration = 300;

        const defaultStyle = {
            transition: `opacity ${duration}ms ease-in-out`,
            opacity: 0.5,
        }

        const transitionStyles = {
            entering: { opacity: 0 },
            entered: { opacity: 1 },
        };

        return (
            <div
                className={style.slider}
                ref={this.sliderRef}
            >
                <Transition timeout={300}>


                    {(state) => (
                        <div style={{
                            ...defaultStyle,
                            ...transitionStyles[state]
                        }}>
                            <img src={images[currentIndex]} />
                        </div>
                    )}
                </Transition>
                {currentIndex > 0 ?
                    <LeftArrow
                        goToPrevSlide={this.goToPrevSlide}
                    /> : null}
                <RightArrow
                    goToNextSlide={this.goToNextSlide}
                />
            </div>
        );
    }
};

export default Slider;
