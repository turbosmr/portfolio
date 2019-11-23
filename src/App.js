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

      <div className="container-fluid" style={{ marginTop: '0px', marginBottom: '30px' }}>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1 style={{ textAlign: "center" }} className="text-color">About Me</h1>
              <p style={{ marginTop: '20px', marginBottom: "30px" }}>
                Hi there! I’m a senior at SFSU majoring in Computer Science. With strong leadership,
                communication, collaboration, and organizational skills, I'm leading a second team
                project at SFSU. While I’m attending school, I’m also a certified
                sommelier and work in the restaurant industry, which has taught me a lot about dealing
                with different personalities and difficult situations.
                I also have a background in art and enjoy designing, drawing, painting, and sculpting.
                In my spare time I enjoy golfing and working out.
            </p>
            </div>
            <div className="col-md-6">
              <h1 className="text-color">Languages and Frameworks</h1>
              <div className="row" style={{ marginTop: '20px' }}>
                <div className="col-sm-6">
                  <ul>
                    <li style={{ margin: '0px' }}>Java</li>
                    <li style={{ margin: '0px' }}>C++</li>
                    <li style={{ margin: '0px' }}>Javascript</li>
                    <li style={{ margin: '0px' }}>HTML</li>
                  </ul>
                </div>
                <div className="col-sm-6">
                  <ul>
                    <li style={{ margin: '0px' }}>CSS</li>
                    <li style={{ margin: '0px' }}>Bootstrap</li>
                    <li style={{ margin: '0px' }}>Handlebars</li>
                    <li style={{ margin: '0px' }}>ReactJS</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-6" style={{ marginBottom: "30px" }}>

              <h1 className="text-color">Contact Me</h1>
              <div className="row" style={{ marginTop: '20px' }}>
                <div className="col-sm-6">

                  <p>  <img src="images/phone.png" alt="gitHub" style={{ width: '30px', border: 0, marginRight: 10 }} />
                    <a style={{ color: "black" }} href="tel:408-839-1574">408-839-1574</a></p>

                  <p> <img src="images/mail.png" alt="gitHub" style={{ width: '30px', border: 0, marginRight: 10 }} />
                    <a style={{ color: "black" }} href="mailto: turbo.smr@gmail.com">turbo.smr@gmail.com</a></p>

                </div>

                <div className="col-sm-6">

                  <p> <img src="images/linkedInBlack.png" alt="gitHub" style={{ width: '30px', border: 0, marginRight: 10 }} />
                    <a style={{ color: "black" }} href="https://www.linkedin.com/in/steve-rentschler/">LinkedIn</a></p>

                  <p style={{}}>  <img src="images/location.png" alt="gitHub" style={{ width: '30px', border: 0, marginRight: 10 }} />Oakland, CA</p>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer" style={{ marginTop: '0px' }}>
        <p>This website was built in React by Steve Rentschler</p>
        <a href="https://github.com/turbosmr">
          <img src="images/gitHubLogo.png" alt="gitHub" style={{ width: '50px', border: 0 }} />
        </a>
        <a href="https://www.linkedin.com/in/steve-rentschler/">
          <img src="images/linkedInLogo.png" alt="linkedIn" style={{ width: '50px', border: 0, marginLeft: 20 }} />
        </a>
      </div>
    </div>
  );
}
export default App;
