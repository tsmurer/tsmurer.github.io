import { Component } from "react"
import React from "react"
//import { Link } from "gatsby"



class MobileMenu extends Component {


    constructor(props) {
        super(props);
        this.state = {
        };


        this.menuRef = React.createRef();

        //this.closeMenu = this.closeMenu.bind(this);
    }

    passRef = () => {
        this.props.passRef(this.menuRef)
    }

    openMenu() {

    }

    closeMenu() {
        this.menuRef.current.classList.add(`outOfView`);
        console.log("closeMenu rodou");
    }

    render() {
        return(
            <div
                className="menu-container"
                ref={this.menuRef}
            >
                <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='45'
                    height='45'
                    viewBox='0 0 512 512'
                    onClick={ () => {this.closeMenu()}}
                >
                <title>ionicons-v5-l</title>
                <line 
                    x1='368'
                    y1='368'
                    x2='144'
                    y2='144'
                    style={{fill:'none', stroke: '#fff', strokeLinecap:'round', strokeLinejoin:'round', strokeWidth:'32px'}}
                />
                    <line
                        x1='368'
                        y1='144'
                        x2='144'
                        y2='368'
                        style={{fill:'none', stroke: '#fff', strokeLinecap:'round', strokeLinejoin:'round', strokeWidth:'32px'}}
                    />
                </svg>
            </div>
        )
    }
}

export default MobileMenu