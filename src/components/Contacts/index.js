import React from 'react'
import ScrollableAnchor from "react-scrollable-anchor"
import { FaEnvelope, FaTwitter } from 'react-icons/fa';
import style from './index.css';

const Contacts = () => (
    <section className={style.contacts}>
        <div>
            <ScrollableAnchor id={'contacts'}>
                <h1>Contacts</h1>
            </ScrollableAnchor >
            <p>If you have any question, or just want to say hello, feel free to contact me ;)</p>
            <ul className={style.contactsUl}>

                <FaEnvelope className={style.envelope} />
                <li className={style.contact}>alan-eng@yandex.ru</li>
                {/* <li className={style.contact}><FaTwitter /> alan-eng@yandex.ru</li> */}

            </ul>
        </div>
        ©2017 Betanov Alan
    </section>
)

export default Contacts