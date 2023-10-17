import React from 'react';
import './hero.scss';
import Button from '@mui/material/Button';
import { Download, GitHub, LinkedIn } from '@mui/icons-material';

export default function Hero() {
    return <div className="hero">
        <div className="hero-bg"></div>
        <div className="container">
            <div className="details1">
                <h3 className="details1-header1">Hello! I'm a </h3>
                <h3 className="details1-header2">Software Developer</h3>
            </div>
            <div className="details2">
                <div className="social-media">
                    <LinkedIn className="icon"/> <GitHub className="icon"/>
                </div>
                <Button variant="contained" endIcon={<Download/>}>My Resume</Button>
            </div>
            <div className="profpic">
                <img src="/profPic.jpeg" className="profpic grid-2-col-2-row"/>
            </div>
        
        </div>
    </div>
}


