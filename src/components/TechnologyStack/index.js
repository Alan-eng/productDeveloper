import React from 'react'
import Hexagon from './HexagonInteractive'
import react from './images/react.svg';
import redux from './images/redux.svg';
import webpack from './images/webpack.svg';
import postCSS from './images/postCSS.svg';
import figma from './images/figma.svg';
import style from './index.css';

const TechnologyStack = () => {
    return (
        <div className={style.myTechnologyStack} key={'myTechnologyStack'}>
            <div className={style.frontendStack}>
                <h2>Front-end Developer</h2>
                <h4>Technology stack</h4>
                <Hexagon 
                    key={'frontendStackHexagon1'} 
                    className="hexagonJS" 
                    label="Java Script"
                >
                    <span  style={{fontSize: '24px', fontWeight: 'bold'}}>JS</span>
                </Hexagon>
                <Hexagon 
                    key={'frontendStackHexagon2'} 
                    className="hexagonHTMLCSS" 
                    label="HTML + CSS"
                >
                    <span  style={{fontSize: '18px', fontWeight: 'bold'}}>HTML</span>
                </Hexagon>
                <Hexagon
                    key={'frontendStackHexagon3'}
                    className="hexagonReact"
                    label="React"
                >
                    <img style={{width: '40px'}} src={react} className="react-logo" alt="react-logo" />
                </Hexagon>
                <Hexagon 
                    className="hexagonRedux" 
                    key={'frontendStackHexagon4'}
                    label="Redux"
                >
                    <img style={{width: '40px'}} src={redux} className="redux-logo" alt="redux-logo" />
                </Hexagon>
                <Hexagon 
                    key={'frontendStackHexagon5'}
                    className="hexagonPostCSS" 
                    label="PostCSS"
                    >
                    <img style={{width: '40px'}} src={postCSS} className="postCSS-logo" alt="postCSS-logo" />
                </Hexagon>
                <Hexagon 
                    key={'frontendStackHexagon6'}
                    className="hexagonWebpack" 
                    label="Webpack"
                    >
                    <img src={webpack} className="webpack-logo" alt="webpack-logo" />
                </Hexagon>
            </div>
            <div className={style.designStack}>
                <h4>Other instruments</h4>
                <Hexagon 
                    key={'designerStackHexagon1'}
                    className="hexagonFigma" 
                    label="Figma"
                >
                    <img style={{width: '40px'}} src={figma} className="figma-logo" alt="figma-logo" />
                </Hexagon>
                <Hexagon 
                    key={'designerStackHexagon2'}
                    className="hexagonIllustrator" 
                    label="Illustrator"
                    >
                    <span  style={{fontSize: '22 px', fontWeight: 'bold'}}>Ai</span>
                </Hexagon>
                <Hexagon 
                    key={'designerStackHexagon3'}
                    className="hexagonPhotoshop" 
                    label="Photoshop"
                >
                    <span   style={{fontSize: '22 px', fontWeight: 'bold'}}>Ps</span>
                </Hexagon>
                <Hexagon
                    key={'designerStackHexagon4'}
                    className="hexagonAnimate" 
                    label="Animate"
                >
                    <span   style={{fontSize: '22 px', fontWeight: 'bold'}}>An</span>
                </Hexagon>
            </div>
        </div>
    )
}

export default TechnologyStack;