import React, { Component } from "react";
import Modal from '../Modal';
import superkassa from './superkassa.jpg';
import style from './index.css';

class Projects extends React.Component {
    constructor(props) {
        super(props);
        this.state = { modal: false };

        this.showModal = this.showModal.bind(this);
        this.hideModal = this.hideModal.bind(this);
    };

    showModal() {
        this.setState({ modal: true });
    };

    hideModal() {
        this.setState({ modal: false });
    };

    render() {
        return (
            <div>
                <h1>My recent Projects</h1>
                <h4>I design and code beautifully simple things, and I love what I do.</h4>
                <div className={style.root}>
                    <div className={style.container}>
                        <img src={superkassa} className={style.img} alt="superkassa site" />
                        <p className={style.title}>card title</p>
                        <div className={style.overlay}></div>
                        <button
                            className={style.btn}
                            type="button"
                            onClick={this.showModal}
                        >
                            SHOW
                        </button>
                    </div>
                </div>

                <Modal show={this.state.modal} handleClose={this.hideModal}>
                    <p>Modal is opened</p>
                    <p>Data</p>
                </Modal>
            </div>
        )
    }
};

export default Projects;