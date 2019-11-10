import React, { Component } from 'react'

export default class Nav extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-sm">
                    <a href="https://www.linkedin.com/in/steve-rentschler/">
                        <img src="images/SRlogo3.png" alt="linkedIn" style={{ width: '200px', border: 0, marginLeft: 20 }} />
                    </a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="collapsibleNavbar">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link" href="#"></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#"></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#"></a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        )
    }
}