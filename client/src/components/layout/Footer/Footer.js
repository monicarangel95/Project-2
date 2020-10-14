import React from 'react'

function Footer(props) {
    return (
        <footer className="page-footer blue-grey darken-2">
            <div className="container">
                <div className="row">
                    <div className="col l6 s8">
                        <h5 className="white-text">Team Spot-A-Show</h5>
                        <p className="grey-text text-lighten-4">This project was made by Monica Rangel, Jaquelin Rocha, Andrew Yen,
                    and Raffay Ahmed.</p>
                    </div>
                    <div className="col l4 offset-l2 s4">
                        <h5 className="white-text">Github Profiles</h5>
                        <ul>
                            <li><a className="grey-text text-lighten-3" href="https://github.com/monicarangel95">Monica</a></li>
                            <li><a className="grey-text text-lighten-3" href="https://github.com/jackier94">Jaquelin</a></li>
                            <li><a className="grey-text text-lighten-3" href="https://github.com/andrewyen64">Andrew</a></li>
                            <li><a className="grey-text text-lighten-3" href="https://github.com/rahme">Raffay</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="footer-copyright blue-grey darken-3">
                <div className="container">
                    © 2020 Copyright Spot-A-Show
        </div>
            </div>
        </footer>
    )
}

export default Footer