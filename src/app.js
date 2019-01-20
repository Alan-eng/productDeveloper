import React, { Component } from "react";
import Transition from 'react-transition-group/Transition';
import { AboutMe, SideBar, Contacts } from './components'
import TechnologyStack from "./components/TechnologyStack"
import Projects from "./components/Projects"
import Particles from 'react-particles-js';
import { hot } from 'react-hot-loader'

import style from './app.css';

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            windowWidth: null,
            stopScrolling: false,
        }

        this.updateDimensions = this.updateDimensions.bind(this);
        this.stopScrolling = this.stopScrolling.bind(this);
    }

    updateDimensions() {
        const w = window,
            d = document,
            documentElement = d.documentElement,
            body = d.getElementsByTagName('body')[0],
            width = w.innerWidth || documentElement.clientWidth || body.clientWidth;

        let windowSize;
        if (width < 768) {
            windowSize = 'mobile'
        } else if (width < 1024) {
            windowSize = 'tablet'
        } else {
            windowSize = 'desktop'
        }

        this.setState({ windowWidth: windowSize });
    }

    stopScrolling(boolVal) {
        this.setState({ stopScrolling: boolVal })
    }

    componentWillMount() {
        this.updateDimensions();
    }

    componentDidMount() {
        window.addEventListener("resize", this.updateDimensions);
    }

    componentWillUnmount() {
        window.removeEventListener("resize", this.updateDimensions);
    }

    render() {
        const duration = 2000;
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
        };

        return (
            <Transition in={true} appear timeout={duration} >
                {(state) => (
                    <div className={style.root}
                        style={{
                            ...defaultStyle,
                            ...transitionStyles[state]
                        }}
                    >
                        <SideBar windowWidth={this.state.windowWidth} />

                        <div className={`${style.centerContainer} ${this.state.stopScrolling ? style.fixed : ''}`}>
                            <AboutMe />
                            <TechnologyStack />
                            <Projects stopScrolling={this.stopScrolling} />
                            <Contacts />
                        </div>


                        {this.state.windowWidth === 'mobile' ? null :
                            <Particles
                                params={
                                    {
                                        "particles": {
                                            "number": {
                                                "value": 80,
                                                "density": {
                                                    "enable": true,
                                                    "value_area": 800
                                                }
                                            },
                                            "color": {
                                                "value": "#ffffff"
                                            },
                                            "shape": {
                                                "type": "circle",
                                                "stroke": {
                                                    "width": 0,
                                                    "color": "#000000"
                                                },
                                                "polygon": {
                                                    "nb_sides": 5
                                                },
                                                "image": {
                                                    "src": "img/github.svg",
                                                    "width": 100,
                                                    "height": 100
                                                }
                                            },
                                            "opacity": {
                                                "value": 0.5,
                                                "random": false,
                                                "anim": {
                                                    "enable": false,
                                                    "speed": 1,
                                                    "opacity_min": 0.1,
                                                    "sync": false
                                                }
                                            },
                                            "size": {
                                                "value": 2,
                                                "random": true,
                                                "anim": {
                                                    "enable": false,
                                                    "speed": 40,
                                                    "size_min": 0.1,
                                                    "sync": false
                                                }
                                            },
                                            "line_linked": {
                                                "enable": true,
                                                "distance": 150,
                                                "color": "#A0CBFE",
                                                "opacity": 0.4,
                                                "width": 1
                                            },
                                            "move": {
                                                "enable": true,
                                                "speed": 3,
                                                "direction": "none",
                                                "random": false,
                                                "straight": false,
                                                "out_mode": "out",
                                                "bounce": false,
                                                "attract": {
                                                    "enable": false,
                                                    "rotateX": 600,
                                                    "rotateY": 1200
                                                }
                                            }
                                        },
                                        "interactivity": {
                                            "detect_on": "canvas",
                                            "events": {
                                                "onhover": {
                                                    "enable": false,
                                                    "mode": "bubble"
                                                },
                                                "onclick": {
                                                    "enable": false,
                                                    "mode": "push"
                                                },
                                                "resize": true
                                            },
                                            "modes": {
                                                "grab": {
                                                    "distance": 400,
                                                    "line_linked": {
                                                        "opacity": 1
                                                    }
                                                },
                                                "bubble": {
                                                    "distance": 400,
                                                    "size": 40,
                                                    "duration": 2,
                                                    "opacity": 8,
                                                    "speed": 3
                                                },
                                                "repulse": {
                                                    "distance": 200,
                                                    "duration": 0.4
                                                },
                                                "push": {
                                                    "particles_nb": 4
                                                },
                                                "remove": {
                                                    "particles_nb": 2
                                                }
                                            }
                                        },
                                        "retina_detect": true
                                    }
                                }
                                className={style.particlesWrapper}
                                style={{}}
                            />}
                    </div>
                )}
            </Transition>
        )
    }

};

export default hot(module)(App)