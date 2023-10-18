import React from 'react';
import Button from '@mui/material/Button'
import './hero.scss';
import { Download, ChatBubbleOutline} from '@mui/icons-material';
import Link from '@mui/material/Link';


export default function Hero() {
    return <>
    <div className="anchor" id="hero"></div>
    <div className="hero">
        <div className="hero-bg"></div>
        <div className="hero__container">
            <h3 className="hero__container__header hero__container__header--1">Hello, I&apos;m a </h3>
            <h3 className="hero__container__header hero__container__header--2">Software Developer</h3>
            <p>My name is Tiago and I build stuff for the web.</p>
            <div className="buttons">
            <a href='/International_Resume.pdf' download><Button variant="contained" color="secondary" startIcon={<Download/>}>Resume</Button></a>
            <Link href="#contact"><Button variant="outlined" color="secondary" startIcon={<ChatBubbleOutline/>}>Contact Me</Button></Link>
            </div>
        </div>

    </div>
    </>
}


