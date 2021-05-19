import React, { Component } from "react"
//import { Link } from "gatsby"

import Presentation from "./presentation"
import Projects from "./projects"
import Skills from "./skills"
import Bio from "./bio"


class SectionGroup extends Component  {

    constructor(props) {
        super(props);
        this.state = {}

    };

  

    render() {

        return(
            <div className="section-group">
                <Presentation/>
                <Skills/>
                <Projects/>
                <Bio/>
            </div>
        )
    }
}

export default SectionGroup