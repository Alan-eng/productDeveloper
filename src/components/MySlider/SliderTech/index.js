import React, { Component } from "react";
import Slider from '../index'
import FigmaICO from './images/figma.svg'
import PostCSSICO from './images/postCSS.svg'
import ReactICO from './images/react.svg'
import WebpackICO from './images/webpack.svg'
import ReduxICO from './images/redux.svg'

const SliderInfiniteTech = () => {
    return <Slider
        // infinite
        images={[FigmaICO, PostCSSICO, ReactICO, WebpackICO, ReduxICO]}
    />
}

export default SliderInfiniteTech