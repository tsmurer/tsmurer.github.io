"use client";

import { useState } from 'react';
import ContactForm from '../../contactForm/contactForm';
import './contact.scss'
import { Check } from '@mui/icons-material';

export default function Contact() {

    const [successMessageClass, setSuccessMessageClass] = useState("noDisplay")

    const bringAMessage = () => {
        setSuccessMessageClass("successMessage")
    }
    return <>
        <div className="anchor" id="contact"></div>
        <div className="contact-container">
            <div className={successMessageClass}>
                <div className="card">
                    <div className="success-icon">
                        <Check sx={{ fontSize: 40, color: '#33CC33' }} />
                    </div>
                    <h2 className="card-title">Thank You!</h2>
                    <p className="card-message">
                        🚀 Your message has been received! I&apos;ll get back to you in no time.
                    </p>
                </div>
            </div>
            <ContactForm bringAMessage={bringAMessage}/>
        </div>
    </>
}