import React, { Component } from "react"
//import { Link } from "gatsby"
import {FaFacebook, FaGithub, FaLinkedin} from "react-icons/fa"
import selfie from "../images/bw2_square.jpg"




class Presentation extends Component  {

    constructor(props) {
        super(props);
        this.state = {}

    };

  

    render() {

        return(
            <div className="section">
                <div className="section__content">
                    <div className="presentation-box">
                        <img className="presentation-box__selfie" src={selfie}/>
                        
                        <div className="presentation-box__text">
                            <h1 className="presentation-box__title">Tiago Murer</h1>
                            <p className="presentation-box__subtitle"> Desenvolvedor na região metropolitana de São Paulo. </p>
                        </div>
                        <div className="presentation-box__links">
                            <a target="_blank" rel="noreferrer" href="https://www.facebook.com/tiagomurer"><FaFacebook/></a>
                            <a target="_blank" rel="noreferrer" href="https://github.com/tsmurer"><FaGithub/></a>
                            <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/tiagomurer/"><FaLinkedin/></a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Presentation