"use client";

import React from 'react';
import './contact.scss'
import { Send } from '@mui/icons-material';
import Button from '@mui/material/Button/Button';
import CustomTextArea from '../../material-components/text-area';
import CustomInput from '../../material-components/input'


export default function Contact() {
    return <>
        <div className="anchor" id="contact"></div>
        <div className="contact-container">
                <CustomInput></CustomInput>
                <CustomTextArea></CustomTextArea>
                <Button className="btn" variant="contained" color="secondary" startIcon={<Send/>}>Submit</Button>
        </div>
    </>
}