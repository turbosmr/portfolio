import React, { Component } from 'react'

export default class Projects extends Component {
    render() {
        return (
            <div style={{ marginTop: 0, marginBottom: 40 }}>
          
                <div className="container-fluid about" style={{ marginTop: '0px'}}>
                <div className="text-color text-center">
                    <h1>Projects</h1>
                </div>
                <div className="container about">
                    <div className="row">
                        <div className="col-xl-4" style={{ marginBottom: '0px' }}>
                            <iframe width="350" height="200" src="https://www.youtube.com/embed/9nRzWhy_vqM"
                                frameBorder='0'
                                allow='autoplay; encrypted-media'
                                allowFullScreen
                                title='video'
                            />
                            <h2 style={{ marginTop: '10px' }}>Online Multiplayer Chess Game</h2>
                            <hr style={{ borderWidth:2 }}/>
                            <p style={{ marginTop: '10px' }}>This was a team project for CSC 667 at SFSU.
                            I was the Team Lead and Front-end Lead. I implentented the front-end code and designed the project
                            from top to bottom with input from our Back-end Lead, Johnson Wong. Here's the&nbsp;
                            <a style={{ color: 'rgb(34, 97, 83)' }} href="https://github.com/turbosmr/online-chess-game">Github Link</a>.
                            </p>
                            <hr style={{ borderWidth:2 }}/>
                            <p>Features:</p>
                            <ul>
                                <li style={{ margin: '0px' }}>Software Stack: Node.js, Express, Handlebars, MySQL,
                                    JavaScript, HTML, and CSS</li>
                                <li style={{ margin: '0px' }}>Play in 3D or 2D</li>
                                <li style={{ margin: '0px' }}>Change board colors and chess pieces</li>
                                <li style={{ margin: '0px' }}>Traverse through the history of the game</li>
                                <li style={{ margin: '0px' }}>Ranks players by using the chess rating system</li>
                                <li style={{ margin: '0px' }}>Choose your time per move</li>
                                <li style={{ margin: '0px' }}>Chat with your oppenent</li>
                            </ul>
                        </div>
                        <div className="col-xl-4" style={{ marginBottom: '0px' }}>
                            <iframe width="350" height="200" src="https://www.youtube.com/embed/0GFV_LkWFps"
                                frameBorder='0'
                                allow='autoplay; encrypted-media'
                                allowFullScreen
                                title='video'
                            />
                            <h2 style={{ marginTop: '10px' }}>Tank Game</h2>
                            <hr style={{ marginTop: '54px', borderWidth:2 }}/>
                            <p style={{ marginTop: '0px' }}>This was my first video game project for CSC 413 at SFSU,
                            coded in Java using Object Oriented Priciples. Here's the&nbsp;
                            <a style={{ color: 'rgb(34, 97, 83)' }} href="https://github.com/turbosmr/Tank-Game">Github Link</a>.
                            </p>
                            <hr style={{ borderWidth:2 }}/>
                            <p>Features:</p>
                            <ul>
                                <li style={{ margin: '0px' }}>Software Stack: Java</li>
                                <li style={{ margin: '0px' }}>Three levels to choose from</li>
                                <li style={{ margin: '0px' }}>Machine gun and health power ups</li>
                                <li style={{ margin: '0px' }}>Split screen follows each Tank</li>
                                <li style={{ margin: '0px' }}>Each tank can take 5 hits and has 3 lives</li>
                                <li style={{ margin: '0px' }}>Mini map in the center shows the whole battlefield</li>
                            </ul>
                        </div>
                        <div className="col-xl-4" style={{ marginBottom: '0px' }}>
                            <iframe width="350" height="200" src="https://www.youtube.com/embed/54Vhgv9kfhA"
                                frameBorder='0'
                                allow='autoplay; encrypted-media'
                                allowFullScreen
                                title='video'
                            />
                            <h2 style={{ marginTop: '10px'}}>Brick Breaker Game</h2>
                            <hr style={{ marginTop: '54px', borderWidth:2 }}/>
                            <p style={{ marginTop: '0px' }}>
                                This was my second video game that I made for CSC 413 at SFSU, coded in Java.
                                 I reused a lot of the code from my tank game.
                            </p>
                            <hr style={{ borderWidth:2 }}/>
                            <p>Features:</p>
                            <ul>
                                <li style={{ margin: '0px' }}>Software Stack: Java</li>
                                <li style={{ margin: '0px' }}>5 levels to advance to</li>
                                <li style={{ margin: '0px' }}>Speed increases each time you hit the paddle</li>
                                <li style={{ margin: '0px' }}>The ball will bounce in different angles depending on where it hits the paddle</li>
                                <li style={{ margin: '0px' }}>Get points for each brick you break</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            </div>


        )
    }
}