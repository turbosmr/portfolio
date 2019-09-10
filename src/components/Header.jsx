import React, { Component } from 'react'

export default class Header extends Component {
    render() {
        return (
            <div className="text-center" style={{ marginBottom: 0, backgroundImage: 'url(IMG_0787copy.jpeg)' }}>
                <div className="HeaderText">
                    <p>Steve Rentschler</p>
                </div>
                <div className="SubheaderText">
                    <p>Software Engineer</p>
                </div>
            </div>
        )
    }
}