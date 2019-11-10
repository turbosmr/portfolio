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
