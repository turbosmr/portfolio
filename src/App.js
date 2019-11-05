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

      <Nav></Nav>
      <Header></Header>
      <Projects></Projects>

      <div className="container" style={{ marginTop: '30px' }}>
        <div className="row">
          <div className="col-sm-4">
            <h2>Online Multiplayer Chess Game</h2>
            <h5>Photo of me:</h5>
            <div className="mainImage">should work</div>
          </div>

          <div className="col-sm-4">
            <h2>Tank Game</h2>
            <h5>Title description, Dec 7, 2017</h5>
            <div className="fakeimg">Fake Image</div>
            <p>Some text..</p>
          </div>
          <br/>

          <div className="col-sm-4">
            <h2>Brick Breaker Game</h2>
            <h5>Title description, Sep 2, 2017</h5>
            <div className="fakeimg">Fake Image</div>
            <p>Some text..</p>
          </div>
        </div>
      </div>
      <br/><br/><br/><br/>
      <div className="footer">      
          <p>Footer</p>
      </div>
    </div>
  );
}

export default App;
