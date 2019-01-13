import React, { Component, Fragment } from "react";
import ScrollableAnchor from "react-scrollable-anchor"
import Modal from '../Modal';
import superkassaImg from './superkassa.jpg';
import superkassa1Img from './superkassa1.jpg';
import superkassa2Img from './superkassa2.jpg';
import superkassa3Img from './superkassa3.jpg';
import runesImg from './runes.jpg';
import tensesGeneratorImg from './tensesGenerator.jpg';
import style from './index.css';

class Projects extends Component {
    constructor(props) {
        super(props);
        this.state = { modal: false };

        this.showModal = this.showModal.bind(this);
        this.hideModal = this.hideModal.bind(this);
    };

    showModal(name) {
        this.setState({ modal: name });
    };

    hideModal() {
        this.setState({ modal: '' });
    };

    render() {
        return (
            <section className={style.projects}>
                <ScrollableAnchor id={'projects'}>
                    <h1 className={style.header}>My recent Projects</h1>
                </ScrollableAnchor>
                <h4 className={style.headerSmall}>I design and code beautifully simple things, and I love what I do.</h4>
                <div className={style.card}>
                    <img src={superkassaImg} className={style.projectImg} alt="superkassa site" />
                    <p className={style.titleCard}>superkassa</p>
                    <div className={style.overlay}>
                        <button
                            className={style.btnCard}
                            type="button"
                            onClick={() => this.showModal('superkassa')}
                        >
                            SHOW
                        </button>
                    </div>
                </div>
                <div className={style.card}>
                    <img src={runesImg} className={style.projectImg} alt="nord runes site" />
                    <p className={style.titleCard}>nord runes</p>
                    <div className={style.overlay}>
                        <button
                            className={style.btnCard}
                            type="button"
                            onClick={() => this.showModal('runes')}
                        >
                            SHOW
                        </button>
                    </div>
                </div>
                <div className={style.card}>
                    <img src={tensesGeneratorImg} className={style.projectImg} alt="english tenses site" />
                    <p className={style.titleCard}>nord runes</p>
                    <div className={style.overlay}>
                        <button
                            className={style.btnCard}
                            type="button"
                            onClick={() => this.showModal('tenses')}
                        >
                            SHOW
                        </button>
                    </div>
                </div>

                {{
                    superkassa: <Modal
                        images={[
                            <img src={superkassaImg} alt="superkassa site" />,
                            <img src={superkassa1Img} alt="superkassa site" />,
                            <img src={superkassa2Img} alt="superkassa site" />,
                            <img src={superkassa3Img} alt="superkassa site" />,
                        ]}
                        show={this.state.modal} handleClose={this.hideModal}
                    >
                        <div className={style.contentInModal}>
                            <h2>Superkassa.ru</h2>
                            <h4 className={style.achievementsHeader}>Airtickets sale</h4>
                            <p>Airtickets agency which works with Aviasales and Skyskanner and helps search thousands of cheap tickets and cheap flight offers to your favorite.
                                </p>

                            <h4 className={style.achievementsHeader}>My achievements:</h4>
                            <ul>
                                <li>built fast and robust UI using <span className={style.technologyWord}>React</span></li>
                                <li>made predictable state management of the whole application with <span className={style.technologyWord}>Redux</span></li>
                                <li>wrote asynchronous things easier to manage with <span className={style.technologyWord}>Redux-Saga</span></li>
                                <li>made client-server communication with <span className={style.technologyWord}>Node.js</span></li>
                            </ul>
                            <a className={style.linkProject1} href='https://superkassa.ru' target='_blank'>Superkassa.ru</a>

                        </div>
                    </Modal>,

                    runes: <Modal
                        images={[
                            <img src={runesImg} alt="nordic runes site" />
                        ]}
                        show={this.state.modal} handleClose={this.hideModal}
                    >
                        <div className={style.contentInModal}>
                            <h2>Superkassa.ru</h2>
                            <h4>Airtickets sale</h4>

                            <p>Roambi provides analytics, reporting, and business intelligence for companies to use on the go. A Wordpress hosted site written in PHP and Javascript with Hubspot Integration.</p>
                        </div>
                    </Modal>,

                    tenses: <Modal
                        images={[
                            <img src={tensesGeneratorImg} className={style.imgInModal} alt="superkassa site" />
                        ]}
                        show={this.state.modal} handleClose={this.hideModal}
                    >
                        <img src={tensesGeneratorImg} className={style.imgInModal} alt="superkassa site" />
                        <div className={style.contentInModal}>
                            <h2>Superkassa.ru</h2>
                            <h4>Airtickets sale</h4>

                            <p>Roambi provides analytics, reporting, and business intelligence for companies to use on the go. A Wordpress hosted site written in PHP and Javascript with Hubspot Integration.</p>
                        </div>
                    </Modal>
                }[this.state.modal]}
            </section>
        )
    }
};

export default Projects;