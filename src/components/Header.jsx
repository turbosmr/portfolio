import React, { Component } from 'react'

export default class Header extends Component {
    render() {
        return (
            //<div className="Header text-center" style={{ marginBottom: 0, backgroundImage: 'url(images/IMG_0787copy.jpeg)' }}>
            <div className="Header" style={{ marginBottom: 0 }}>
            <div className="col-sm-12">
                <div className="HeaderText text-center">
                    <p ><a  href="https://www.linkedin.com/in/steve-rentschler/">
                        <img className="logo" src="images/SRlogo3.png" alt="linkedIn"/>
                    </a>Steve Rentschler</p>
                </div>
                <div className="SubheaderText text-center">
                    <p>Software Engineer</p>
                </div>
                </div>
            </div>
        )
    }
}