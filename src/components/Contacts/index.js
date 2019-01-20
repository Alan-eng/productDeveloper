import React from 'react'
import ScrollableAnchor from "react-scrollable-anchor"
import gmailIcon from './gmailIcon.svg';
import style from './index.css';

const Contacts = () => (
    <section className={style.contacts}>
        <div>
            <ScrollableAnchor id={'contacts'}>
                <h1>Contacts</h1>
            </ScrollableAnchor >
            <p>If you have any question, or just want to say hello, feel free to contact me ;)</p>
            <ul className={style.contactsUl}>

                <img src={gmailIcon} className={style.envelope} />
                <li className={style.contact}>alanb.develop@gmail.com</li>

            </ul>
        </div>
        ©2019 Betanov Alan
    </section>
)

export default Contacts