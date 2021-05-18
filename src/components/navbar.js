import React, { Component } from "react"
import { Link } from "gatsby"


class Navbar extends Component  {

    constructor(props) {
        super(props);
        this.state = {}
        this.closeRef = React.createRef();
    };

  

    render() {

        return(
                <nav className="navbar">
                    <div className="navbar__content">
                    {/* <div className="navbar__infowidth"> */}
                        <h2 className="navbar__content__logo">Tiago Murer</h2>

                    {/* </div> */}
                    </div>
                </nav>
        )
    }
}

export default Navbar