import React from 'react';
import Nav from './components/Nav'
import Header from './components/Header'
import Projects from './components/Projects'

function App() {
  return (
    <div>
      <title>Steve Rentschler</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" />

      <Header></Header>
      <Projects></Projects>

      <div className="container about" style={{ marginTop: '30px', paddingRight: 50, paddingLeft: 40 }}>
        <div className="row">


          <div className="col-xl-4" style={{ marginBottom: '0px' }}>
            <iframe width="340" height="200" src="https://www.youtube.com/embed/9nRzWhy_vqM"
              frameBorder='0'
              allow='autoplay; encrypted-media'
              allowFullScreen
              title='video'
            />
            <h2 style={{ marginTop: '10px' }}>Online Multiplayer Chess Game</h2>
            <p style={{ marginTop: '10px' }}>This was a team project for CSC 667 at SFSU.
            I was the Team Lead and Front-end Lead. We ended up getting 99 out of 100
            on this project. I implentented the front-end code and designed the project
            from top to bottom with input from our Back-end Lead, Johnson Wong. Here's the&nbsp;
            <a href="https://github.com/turbosmr/online-chess-game">Github Link</a>
            </p>
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
            <iframe width="340" height="200" src="https://www.youtube.com/embed/0GFV_LkWFps"
              frameBorder='0'
              allow='autoplay; encrypted-media'
              allowFullScreen
              title='video'
            />
            <h2 style={{ marginTop: '10px' }}>Tank Game</h2>
            <p style={{ marginTop: '45px' }}>This was my first video game project for CSC 413 at SFSU,
            coded in Java using Object Oriented Priciples.
            </p>
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
            <iframe width="340" height="200" src="https://www.youtube.com/embed/54Vhgv9kfhA"
              frameBorder='0'
              allow='autoplay; encrypted-media'
              allowFullScreen
              title='video'
            />
            <h2 style={{ marginTop: '10px' }}>Brick Breaker Game</h2>
            <p style={{ marginTop: '45px' }}>
              This was my second video game that I made for CSC 413 at SFSU, coded in Java.
               I reused a lot of the code from my tank game.
            </p>
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
      <div className="container-fluid" style={{ marginTop: '40px' }}>
        <div className="container">
          <div className="row">
            <div className="col-xl-4">
              <div className="container projects">
                <h1>Languages and Frameworks</h1>
              </div>
              <div className="row">
                <div className="col-sm-4">
                  <ul style={{ marginTop: '20px' }}>
                    <li style={{ margin: '0px' }}>Java</li>
                    <li style={{ margin: '0px' }}>C++</li>
                    <li style={{ margin: '0px' }}>Javascript</li>
                    <li style={{ margin: '0px' }}>HTML</li>
                    <li style={{ margin: '0px' }}>CSS</li>
                  </ul>
                </div>
                <div className="col-sm-4">
                  <ul style={{ marginTop: '20px' }}>
                    <li style={{ margin: '0px' }}>Bootstrap</li>
                    <li style={{ margin: '0px' }}>Handlebars</li>
                    <li style={{ margin: '0px' }}>React</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-xl-8">
              <div className="container projects">
                <h1>About me</h1>
              </div>
              <p style={{ marginTop: '20px', marginBottom: "30px" }}>
                Hi there! I’m a senior at SFSU majoring in Computer Science. I've been a Team Lead on
                two projects now.
                I have a background in art and enjoy designing, drawing, painting, and sculpting.
                While I’m attending SFSU for computer science, I’m also a certified sommelier and
                work in the restaurant industry. When I’m not working, I love golfing, working out,
                and wine tasting. Before working in the restaurant industry, I worked at
                golf courses to support my golfing habit and played on the De Anza golf team.
            </p>
            </div>
          </div>
        </div>
      </div>
      <div className="footer" style={{ marginTop: '0px' }}>
        <p>This website was built in React by Steve Rentschler</p>
        <a href="https://github.com/turbosmr">
        <img src="images/gitHubLogo.png" alt="gitHub" style={{width: '50px', border: 0}} />
      </a>
      <a href="https://www.linkedin.com/in/steve-rentschler/">
        <img src="images/linkedInLogo.png" alt="linkedIn" style={{width: '50px', border: 0, marginLeft: 20}} />
      </a>
      </div>
    </div>
  );
}

export default App;
