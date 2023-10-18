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
    let counter = 0;
    for(let i = 1; i <= projects.length; i++) {
        counter++;
        let chips = [];
        let project = projects[i-1];
        for(let j = 1; j <= project.techstack.length; j++) {
            chips.push(<Chip key={counter} label={project.techstack[j - 1]} variant="outlined" />)
            counter++
        }
        tabs.push(<Tab key={counter} label={projects[i-1].name} value={"" + i}></Tab>)
        counter++
        tabpanels.push(<TabPanel key={counter} value={"" + i}>
            <span>Repository URL:</span>
            <p>{projects[i-1].url}</p>
            <span>Description:</span>
            <p>{projects[i-1].description}</p>
            <span>Tech stack:</span>
            <div className="chips">
                {chips}
            </div>

        </TabPanel>)
        counter++
    }

    const [value, setValue] = React.useState('1');

    return <div className="projects">
            <div className="anchor" id="projects"></div>
            <div className="projects__container">
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