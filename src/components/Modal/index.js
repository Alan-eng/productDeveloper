import React, { Component } from "react";
import ReactDOM from "react-dom";
import { goToAnchor } from 'react-scrollable-anchor'
import Transition from 'react-transition-group/Transition';
import { FaChevronRight, FaChevronLeft } from 'react-icons/fa';

// import Close from './close.svg';

import style from './index.css';


class Modal extends Component {
    constructor(props) {
        super(props)

        this.state = {
            currentImage: 0,
            transitionIn: true
        }

        this.nextImage = this.nextImage.bind(this)
        this.previousImage = this.previousImage.bind(this)
    }

    nextImage() {
        const { currentImage } = this.state
        if (currentImage < this.props.images.length - 1) {
            this.setState({ currentImage: this.state.currentImage + 1, transitionIn: true })
        } else {
            this.setState({ currentImage: 0, transitionIn: true })
        }
    }

    previousImage() {
        const { currentImage } = this.state
        if (currentImage > 0) {
            this.setState({ currentImage: this.state.currentImage - 1, transitionIn: true })
        } else {
            this.setState({ currentImage: this.props.images.length - 1, transitionIn: true })
        }
    }

    render() {
        const container = document.getElementById("modal");
        const { handleClose, show, children } = this.props

        const duration = 300;
        const defaultStyle = {
            transition: `all ${duration}ms linear`,
            opacity: 1,
        }

        const transitionStyles = {
            entering: {
                opacity: 0,
            },
            entered: {
                opacity: 1,
            },
            exiting: {
                opacity: 0.5,
            },
            // exited: {
            //     opacity: 0,
            //     transform: `translateX(60px)`
            // }
        };

        const modalComponent = <div className={style.overlay} onClick={() => { handleClose(); goToAnchor('projects') }}>
            <section className={style.modalMain} onClick={(e) => { e.stopPropagation() }}>
                <button onClick={() => { handleClose(); goToAnchor('projects') }} className={style.closeBtn} />
                <Transition in={this.state.transitionIn} appear timeout={duration} onEntering={() => this.setState({ transitionIn: false })}>
                    {(state) => (
                        <div style={{
                            ...defaultStyle,
                            ...transitionStyles[state]
                        }}
                            className={style.image}>
                            {this.props.images ? this.props.images[this.state.currentImage] : null}

                            <FaChevronRight className={style.nextImageButton} onClick={this.nextImage} />
                            <FaChevronLeft className={style.prevImageButton} onClick={this.previousImage} />
                        </div>)}
                </Transition>
                {children}
            </section>
        </div>

        return ReactDOM.createPortal(modalComponent, container);
    }
};

export default Modal;
