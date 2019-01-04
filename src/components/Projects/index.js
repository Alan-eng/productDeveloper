import React, { Component, Fragment } from "react";
import ScrollableAnchor from "react-scrollable-anchor"
import Modal from '../Modal';
import superkassa from './superkassa.jpg';
import style from './index.css';

class Projects extends Component {
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
            <Fragment >
                <ScrollableAnchor id={'projects'}>
                    <h1>My recent Projects</h1>
                </ScrollableAnchor>
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
                    <img src={superkassa} className={style.imgInModal} alt="superkassa site" />
                    <div className={style.contentInModal}>
                        <h2>Superkassa.ru</h2>
                        <h4>Airtickets sale</h4>

                        <p>Roambi provides analytics, reporting, and business intelligence for companies to use on the go. A Wordpress hosted site written in PHP and Javascript with Hubspot Integration.</p>
                    </div>
                </Modal>
            </Fragment>
        )
    }
};

export default Projects;