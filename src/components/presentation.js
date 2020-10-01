import React, { Component } from "react"
//import { Link } from "gatsby"
import selfie from "../images/bw1.jpg"




class Presentation extends Component  {

    constructor(props) {
        super(props);
        this.state = {}

    };

  

    render() {

        return(
            <div className="presentation-container">
                <img src={selfie} alt="selfie" className="presentation-container__image"/>
                <div className="presentation-container__info">
                    <p className="presentation-container__info__text">
                        Meu nome é Tiago Murer, moro na zona metropolitana de São Paulo e sou um programador em início de carreira profissional. Precisando de um desenvolvedor? Chama.
                    </p>
                    <div className="dl-btn">
                        <h3 className="dl-btn__text">Baixe o meu currículo</h3>
                        <svg 
                            xmlns='http://www.w3.org/2000/svg'
                            width='35'
                            height='35'
                            viewBox='0 0 512 512'
                            className="dl-btn__icon"
                        >
                            <title>ionicons-v5-a</title>
                            <polyline 
                                points='112 268 256 412 400 268' 
                                style={{fill:'none', stroke:'#000', strokeLinecap:'round', strokeLinejoin:'round', strokeWidth:'48px'}}
                            />
                            <line 
                                x1='256' 
                                y1='392' 
                                x2='256' 
                                y2='100' 
                                style={{fill:'none', stroke:'#000', strokeLinecap:'round', strokeLinejoin:'round', strokeWidth:'48px'}}
                            />
                        </svg>
                    </div>
                </div>
            </div>
        )
    }
}

export default Presentation