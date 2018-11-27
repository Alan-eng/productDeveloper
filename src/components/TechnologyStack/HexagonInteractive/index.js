import React, {Component} from 'react'
import style from './index.css';

class Hexagon extends Component {
    constructor (props) {
        super (props);
        this.state = {}
    }
    // ${this.props.className}
    render() {
        const hexClass = `${style.hexagon} ${style[this.props.className]}`
        return (
            <div className={style.root}>
                <div  className={hexClass}>
                    {this.props.children} 
                </div>
                <span className={style.label}>{this.props.label}</span>
            </div>
        )
    }
}

export default Hexagon