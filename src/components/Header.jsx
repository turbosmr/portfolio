import React, { Component } from 'react'

export default class Header extends Component {
    render() {
        return (
            <div className="Header text-center" style={{ marginBottom: 0, backgroundImage: 'url(images/IMG_0787copy.jpeg)' }}>      
                    <p className= "title">Steve Rentschler</p>
                    <p className= "subtitle">Software Engineer</p>
            </div>
        )
    }
}