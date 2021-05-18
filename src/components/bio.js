import React, { Component } from "react"




class Bio extends Component  {

    constructor(props) {
        super(props);
        this.state = {}

    };

  

    render() {

        return(
            <div className="section section--middle section--secondary">
                <div className="section__content">
                   <div className="bio">
                       <h1 className="bio__title">Bio</h1>
                       <p className="bio__text">
                           Sou ex-advogado formado na Faculdade de Direito de São Bernardo do Campo (FDSBC) em 2016.<br/>
                           Estudando matemática no meu tempo livre, descobri a programação e depois de um ano programando em Python, decidi me dedicar a esta carreira. <br/>
                           Em 2018 eu iniciei o curso de Análise e Desenvolvimento de Sistemas no Instituto Federal de Tecnologia de São Paulo (IFSP).
                           </p>
                   </div>
                </div>
            </div>
        )
    }
}

export default Bio