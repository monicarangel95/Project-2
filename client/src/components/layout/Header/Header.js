import React from 'react'
import "./Header.css";
function Header(props) {
    return (
        <div className="row center header" style= {{marginTop: "60x"}} >
            {props.children}
        </div>
    )
}
export default Header
