import React from 'react';
import Nav from './components/Nav'
import Header from './components/Header'
import Projects from './components/Projects'

function App() {
  return (
    <div>
      <title>Bootstrap 4 Website Example</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" />

      <Nav></Nav>
      <Header></Header>
      <Projects></Projects>
      
      <div className="container" style={{ marginTop: '30px' }}>
        <div className="row">
          <div className="col-sm-4">
            <h2>Online Multiplayer Chess Game</h2>
            <h5>Photo of me:</h5>
            <div className="mainImage">should work</div>
            <p>Some text about me in culpa qui officia deserunt mollit anim..</p>
            <h3>Some Links</h3>
            <p>Lorem ipsum dolor sit ame.</p>
            <ul className="nav nav-pills flex-column">
              <li className="nav-item">
                <a className="nav-link active" href="#">Active</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Link</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Link</a>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled" href="#">Disabled</a>
              </li>
            </ul>
            <hr className="d-sm-none" />
          </div>
          <div className="col-sm-4">
            <h2>Tank Game</h2>
            <h5>Title description, Dec 7, 2017</h5>
            <div className="fakeimg">Fake Image</div>
            <p>Some text..</p>
            <p>Sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
          </div>
          <br />
          <div className="col-sm-4">
            <h2>Brick Breaker Game</h2>
            <h5>Title description, Sep 2, 2017</h5>
            <div className="fakeimg">Fake Image</div>
            <p>Some text..</p>
            <p>Sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
          </div>
        </div>
      </div>
      <div className="footer">      
          <p>Footer</p>
      </div>
    </div>
  );
}

export default App;
