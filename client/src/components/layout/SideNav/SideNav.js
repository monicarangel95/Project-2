import React, { Component } from 'react'
import M from "materialize-css/dist/js/materialize.min.js";
import "materialize-css/dist/css/materialize.min.css";
import artist from './artist.jpg';
import { Link } from "react-router-dom";
export class SideNav extends Component {
    // Initialization
    componentDidMount() {
        document.addEventListener('DOMContentLoaded', function () {
            var elems = document.querySelectorAll('.sidenav');
            var instances = M.Sidenav.init(elems, {});
        });
    }
    render() {
        return (
            <ul className="sidenav" id="mobile-links">
                <li><div className="user-view"style={{height: '100px'}}>
                    <div className="background">
                        <img src={artist} alt="Artist on Stage" className="responsive-img"/>
                    </div>
                        <span className="white-text center name"style={{marginTop: '0', fontSize: "20px"}}>Spot-A-Show</span>
                    </div>
                </li>
                    <li><div className="divider"></div></li>
                    <li><Link className="waves-effect" href to="/">Home</Link></li>
                    <li><Link className="waves-effect" href to="/events">Events</Link></li>
            </ul>
        )
    }
}
                export default SideNav