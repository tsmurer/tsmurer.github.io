import React, { Component } from "react"
//import { Link } from "gatsby"
import {FaFacebook, FaGithub, FaLinkedin} from "react-icons/fa"




class Presentation extends Component  {

    constructor(props) {
        super(props);
        this.state = {}

    };

  

    render() {

        return(
            <div className="section section--head">
                <div className="section__content">
                    <div className="presentation-box">
                        <h1 className="presentation-box__title">Está procurando um desenvolvedor?</h1>
                        <p className="presentation-box__subtitle">
                            Sou um desenvolvedor da região metropolitana de São Paulo.<br/>
                            Eu gosto de desenvolver interfaces de usuário e de automatizar tarefas chatas. </p>
                        <div className="presentation-box__links">
                            <FaFacebook/>
                            <FaGithub/>
                            <FaLinkedin/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Presentation