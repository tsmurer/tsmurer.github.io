"use client";

import React from 'react'
import './projects.scss'
import { Tab } from '@mui/material'
import { projects } from '@/lib/data';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip'

export default function Projects() {

    

    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
        setValue(newValue);
      };

    const tabs = []
    const tabpanels = []

    for(let i = 1; i <= projects.length; i++) {
        let chips = [];
        for(let tech of projects[i-1].techstack) {
            chips.push(<Chip key="i" label={tech} variant="outlined" />)
        }
        tabs.push(<Tab key="i" label={projects[i-1].name} value={"" + i}></Tab>)
        tabpanels.push(<TabPanel key="i" value={"" + i}>
            <span>Repository URL:</span>
            <p>{projects[i-1].url}</p>
            <span>Description:</span>
            <p>{projects[i-1].description}</p>
            <span>Tech stack:</span>
            <div className="chips">
                {chips}
            </div>

        </TabPanel>)
    }

    const [value, setValue] = React.useState('1');

    return <div className="projects">
            <h2 className="section-title">Projects</h2>
            <div className="projects__container">
                <hr></hr>
                <div className="tabs">
                    <TabContext value={value}>
                        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                            <TabList onChange={handleChange} aria-label="lab API tabs example">
                                {tabs}
                            </TabList>
                        </Box>
                        {tabpanels}
                    </TabContext>
                </div>
            </div>
            
        </div>

}