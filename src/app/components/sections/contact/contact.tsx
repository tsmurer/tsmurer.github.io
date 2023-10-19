"use client";

import ContactForm from '../../contactForm/contactForm';
import './contact.scss'
import { useState } from 'react';


export default function Contact() {
    const [email, setEmail] = useState("")
    const [messageContent, setMessageContent] = useState("")


    function onChangeEmail(newValue: string) {
        setEmail(newValue)
    }
    function onChangeMessageContent(newValue: string) {
        setMessageContent(newValue)
    }

    function printStuff() {
        console.log(email + " " + messageContent)
    }

    return <>
        <div className="anchor" id="contact"></div>
        <div className="contact-container">
            <ContactForm/>
        </div>
    </>
}