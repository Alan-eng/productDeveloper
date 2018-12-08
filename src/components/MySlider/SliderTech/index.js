import React, { Component } from "react";
import Slider from '../index'
import FigmaICO from './images/figma.svg'
import PostCSSICO from './images/postCSS.svg'
import ReactICO from './images/react.svg'

const SliderInfiniteTech = () => {
    return <Slider
        // infinite
        images={[FigmaICO, PostCSSICO, ReactICO]}
    />
}

export default SliderInfiniteTech