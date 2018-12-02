import React, { Component } from "react";
import ReactDOM from "react-dom";
import style from './index.css';


const Modal = ({ handleClose, show, children }) => {
    const showHideClassName = show ? `${style.modal} ${style.displayBlock}` : `${style.modal} ${style.displayNone}`;

    return (
        <div className={showHideClassName} onClick={handleClose}>
            <section className={style.modalMain} onClick={(e) => { e.stopPropagation() }}>
                {children}
                <button onClick={handleClose}>close</button>
            </section>
        </div>
    );
};

const container = document.createElement("div");
document.body.appendChild(container);
ReactDOM.render(<Modal />, container);

export default Modal;
