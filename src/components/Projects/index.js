import React, { Component, Fragment } from "react";
import ScrollableAnchor from "react-scrollable-anchor"
import Modal from '../Modal';
import superkassaImg from './superkassa.jpg';
import superkassa1Img from './superkassa1.jpg';
import superkassa2Img from './superkassa2.jpg';
import superkassa3Img from './superkassa3.jpg';
import jslotImg from './jslot.jpg';
import jslot1Img from './jslot1.jpg';
import jslot2Img from './jslot2.jpg';
import jslot3Img from './jslot3.jpg';
import jslot4Img from './jslot4.jpg';
import runesImg from './runes.jpg';
import runes1Img from './runes1.jpg';
import runes2Img from './runes2.jpg';
import runes3Img from './runes3.jpg';
import tensesGeneratorImg from './tensesGenerator.jpg';
import tensesGenerator1Img from './tensesGenerator1.jpg';
import tensesGenerator2Img from './tensesGenerator2.jpg';
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
        this.props.stopScrolling(true)
    };

    hideModal() {
        this.setState({ modal: '' });
        this.props.stopScrolling(false)
        window.scrollTo(0, document.body.scrollHeight);
    };

    render() {
        return (
            <section className={style.projects}>
                <ScrollableAnchor id={'projects'}>
                    <h1 className={style.header}>My recent Projects</h1>
                </ScrollableAnchor>
                <div className={style.card}>
                    <img src={superkassaImg} className={style.projectImg} alt="superkassa site" />
                    <div className={style.overlay}>
                        <p className={style.titleCard}>superkassa</p>
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
                    <img src={jslotImg} className={style.projectImg} alt="jslot site" />
                    <div className={style.overlay}>
                        <p className={style.titleCard}>jslot</p>
                        <button
                            className={style.btnCard}
                            type="button"
                            onClick={() => this.showModal('jslot')}
                        >
                            SHOW
                        </button>
                    </div>
                </div>
                <div className={style.card}>
                    <img src={runesImg} className={style.projectImg} alt="nord runes site" />
                    <div className={style.overlay}>
                        <p className={style.titleCard}>nord runes</p>
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
                    <div className={style.overlay}>
                        <p className={style.titleCard}>English tenses generator</p>
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

                    jslot: <Modal
                        images={[
                            <img src={jslotImg} alt="jslot site" />,
                            <img src={jslot1Img} alt="jslot site" />,
                            <img src={jslot2Img} alt="jslot site" />,
                            <img src={jslot3Img} alt="jslot site" />,
                            <img src={jslot4Img} alt="jslot site" />,
                        ]}
                        show={this.state.modal} handleClose={this.hideModal}
                    >
                        <div className={style.contentInModal}>
                            <h2>Jslot.ru</h2>
                            <h4 className={style.achievementsHeader}>Gaming</h4>
                            <p> Project for entertainment purposes.</p>

                            <h4 className={style.achievementsHeader}>My achievements:</h4>
                            <ul>
                                <li>made product design with <span className={style.technologyWord}>Photoshop</span></li>
                                {/* <li>made product more attractive and user-friendly with <span className={style.technologyWord}>A/B design testing</span></li> */}
                            </ul>
                            <a className={style.linkProject1} href='https://jslot.ru' target='_blank'>Jslot.ru</a>
                        </div>
                    </Modal>,

                    runes: <Modal
                        images={[
                            <img src={runesImg} alt="nordic runes site" />,
                            <img src={runes1Img} alt="nordic runes site" />,
                            <img src={runes2Img} alt="nordic runes site" />,
                            <img src={runes3Img} alt="nordic runes site" />
                        ]}
                        show={this.state.modal} handleClose={this.hideModal}
                    >
                        <div className={style.contentInModal}>
                            <h2>Runes of norse</h2>
                            <h4>Education website</h4>
                            <p>Helps people to begin to study the runes (fascinating and mysterious symbols from the ancient Norse/Germanic world) </p>
                            <h4 className={style.achievementsHeader}>I've done:</h4>
                            <ul>
                                <li>design concept using <span className={style.technologyWord}>Photoshop</span></li>
                                <li>layout coding with <span className={style.technologyWord}>HTML+CSS</span></li>
                                <li>page animations using <span className={style.technologyWord}>jQuery</span></li>
                            </ul>
                            <a className={style.linkProject1} href='https://alan-eng.github.io/runes/' target='_blank'>Runes of norse</a>

                        </div>
                    </Modal>,

                    tenses: <Modal
                        images={[
                            <img src={tensesGeneratorImg} className={style.imgInModal} alt="superkassa site" />,
                            <img src={tensesGenerator1Img} className={style.imgInModal} alt="superkassa site" />,
                            <img src={tensesGenerator2Img} className={style.imgInModal} alt="superkassa site" />
                        ]}
                        show={this.state.modal} handleClose={this.hideModal}
                    >
                        <div className={style.contentInModal}>
                            <h2>English tenses generator</h2>
                            <h4>interactive table</h4>

                            <p>Help English language learners with grammar.</p>
                            <h4 className={style.achievementsHeader}>I've done:</h4>
                            <ul>
                                <li>material design components <span className={style.technologyWord}>Material UI + React</span></li>
                                <li>layout coding with <span className={style.technologyWord}>HTML+CSS</span></li>
                            </ul>

                            <a className={style.linkProject1} href='https://alan-eng.github.io/english-tenses-generator/' target='_blank'>Tenses-generator</a>

                        </div>
                    </Modal>
                }[this.state.modal]}
            </section>
        )
    }
};

export default Projects;