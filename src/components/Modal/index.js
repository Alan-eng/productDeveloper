import React, { Component } from "react";
import ReactDOM from "react-dom";
import { FaChevronRight, FaChevronLeft } from 'react-icons/fa';

// import Close from './close.svg';

import style from './index.css';


class Modal extends Component {
    constructor(props) {
        super(props)

        this.state = {
            currentImage: 0
        }

        this.nextImage = this.nextImage.bind(this)
        this.previousImage = this.previousImage.bind(this)
    }

    nextImage() {
        const { currentImage } = this.state
        if (currentImage < this.props.images.length - 1) {
            this.setState({ currentImage: this.state.currentImage + 1 })
        } else {
            this.setState({ currentImage: 0 })
        }
    }

    previousImage() {
        const { currentImage } = this.state
        if (currentImage > 0) {
            this.setState({ currentImage: this.state.currentImage - 1 })
        } else {
            this.setState({ currentImage: this.props.images.length - 1 })
        }
    }

    render() {
        const { handleClose, show, children } = this.props
        const showHideClassName = show ? `${style.modal} ${style.displayBlock}` : `${style.modal} ${style.displayNone}`;
        return (
            <div className={showHideClassName} onClick={handleClose}>
                <section className={style.modalMain} onClick={(e) => { e.stopPropagation() }}>
                    <div className={style.image}>
                        {this.props.images ? this.props.images[this.state.currentImage] : null}

                        <FaChevronRight className={style.nextImageButton} onClick={this.nextImage} />
                        <FaChevronLeft className={style.prevImageButton} onClick={this.previousImage} />
                    </div>
                    {children}
                    <button onClick={handleClose} className={style.closeBtn} />
                </section>
            </div>
        );
    }
};

const container = document.createElement("div");
document.body.appendChild(container);
ReactDOM.render(<Modal />, container);

export default Modal;
