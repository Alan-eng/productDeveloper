import React from 'react';
import style from './index.css';


export const RightArrow = (props) => {
    return (
        <button
            className={style.rightArrow}
            onClick={props.goToNextSlide}
        >
            Вправо
            {/* <i className="fa fa-arrow-right fa-2x" aria-hidden="true"></i> */}
        </button>
    );
}


export const LeftArrow = (props) => {
    return (
        <button
            className={style.leftArrow}
            onClick={props.goToPrevSlide}
        >
            Влево

            {/* <i className="fa fa-arrow-left fa-2x" aria-hidden="true"></i> */}
        </button>
    );
}

