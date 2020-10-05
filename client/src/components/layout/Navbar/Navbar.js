import React, { Component } from 'react'
import { Link } from "react-router-dom";
import "materialize-css/dist/css/materialize.min.css";
export class Navbar extends Component {
    render() {
        return (
            <div>
                <nav className="nav-wrapper black z-depth-5">
                    <div className="container">
                        <a href="/" className="brand-logo"><strong>Spot-A-Show</strong></a>
                        <a href="/" className="sidenav-trigger" data-target="mobile-links">
                            <i className="material-icons">menu</i>
                        </a>
                        <ul className="right hide-on-med-and-down">
                            <li><Link class="waves-effect" href to="/">Home</Link></li>
                            <li><Link class="waves-effect" href to="/events">Events</Link></li>
                        </ul>
                    </div>
                </nav>
            </div>
        )
    }
}
export default Navbar
