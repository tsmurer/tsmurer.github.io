import React, { Component } from "react"
import { FaJava, FaPython, FaHtml5, FaAws, FaDatabase } from "react-icons/fa"
import { SiGatsby, SiTravisci, SiJavascript} from "react-icons/si"




class Skills extends Component  {

    constructor(props) {
        super(props);
        this.state = {};

    };

  

    render() {

        return(
            <div className="section section--middle section--secondary">
                <div className="section__content">
                    <div className="skills">
                        <h2 className="skills__title">Habilidades</h2>
                        <div className="skills__grid">
                            <div className="skills__grid__item">
                                <FaJava className="skills__grid__item__icon"/>
                                <p className="skills__grid__item__description">Java, Spring Boot</p>
                            </div>
                            <div className="skills__grid__item">
                                <FaPython className="skills__grid__item__icon"/>
                                <p className="skills__grid__item__description">Python 3</p>
                            </div>
                            <div className="skills__grid__item">
                                <FaHtml5 className="skills__grid__item__icon"/>
                                <p className="skills__grid__item__description">HTML5, CSS3, SASS</p>
                            </div>
                            <div className="skills__grid__item">
                                <SiJavascript className="skills__grid__item__icon"/>
                                <p className="skills__grid__item__description">Javascript, Typescript, Angular, React</p>
                            </div>
                            <div className="skills__grid__item">
                                <FaAws className="skills__grid__item__icon"/>
                                <p className="skills__grid__item__description">Amazon Web Services</p>
                            </div>
                            <div className="skills__grid__item">
                                <FaDatabase className="skills__grid__item__icon"/>
                                <p className="skills__grid__item__description">MySQL e SQL Server</p>
                            </div>
                            <div className="skills__grid__item">
                                <SiTravisci className="skills__grid__item__icon"/>
                                <p className="skills__grid__item__description">Travis CI e Github Actions</p>
                            </div>
                        </div>
                        <div className="skills__softskills"></div>

                    </div>
                </div>
            </div>
        )
    }
}

export default Skills