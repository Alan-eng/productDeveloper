import React, { Component } from 'react'
import style from './index.css';

class Hexagon extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        const hexClass = `${style.hexagon} ${style[this.props.className]} `
        return (
            <div className={style.root}>
                <div className={hexClass}>
                    {this.props.children}
                </div>
                <div className={style.labelContainer}>
                    {this.props.labelStatic}
                    {this.props.label}
                </div>
            </div>
        )
    }
}

export default Hexagon