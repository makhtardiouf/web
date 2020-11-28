import React from 'react';
import Game from './Game';
import logo from './logo.svg';
import './App.css';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

/**
 * Rule: name props from the component’s own point of view rather than the context in which it is being used.
 * Breakdown large entities to turn them into re-usable components
 * State is similar to props, but it is private and fully controlled by the component.
 */

class App extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      notes: ["Props are Read-Only",
        "Do not modify state variables directly, rather use setState",
        "React treats components starting with lowercase letters as DOM tags",
        "Custom components must start with Majuscule",
        "React events are named using camelCase"]
    };

    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.clearNotes.bind(this);
  }

  clearNotes() {
    this.setState({notes: []});
  }

  render() {
    return (
      <div>
        <header className="App-header">
          <Container fluid className="App">
            <h2>
              First steps in the
            <a className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer">React</a> world...
          </h2>

            <Row>
              <Col>
                <Card border="danger">
                  <Card.Img variant="top" src={logo} className="App-logo" />

                  <Card.Body>
                    <Card.Title>A card sample</Card.Title>
                    <Card.Text>
                      This is a test and <Clock /><br />
                    Ready? Play !
                  </Card.Text>
                  </Card.Body>
                </Card>
              </Col>

              <Col><Game /></Col>
            </Row>
          </Container>

          <Comment
            author={this.setState({ name: "Makhtar Diop" })}
            text="Comment: this looks okay"
            date={this.setState({ date: new Date() })} />

          <Button variant="primary" onClick={this.clearNotes}>Clear notes</Button>
        </header>

        {/* Notes items list. Cannot use for loop */}
        <ul>
          {this.notes.map((obj, i) => <li>{obj}</li>)}
        </ul>
      </div>
    );
  }
}

function Avatar(props) {
  return (
    <img className="Avatar"
      src={props.user.avatarUrl}
      alt={props.user.name}
    />
  );
}

function UserInfo(props) {
  return (
    <div className="UserInfo">
      <Avatar user={props.user} />

      <div className="UserInfo-Name">
        {props.user.name}
      </div>
    </div>
  );
}


function Comment(props) {
  return (
    <div className="Comment">
      <UserInfo user={props.author} />

      <div className="Comment-Text">
        {props.text}
      </div>
      <div className="Comment-Date">
        {props.date}
      </div>
    </div>
  );
}


class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }

  // Special lifecycle methods triggered when compo is rendered
  // Initialize timer
  componentDidMount() {
    this.timerId = setInterval(
      () => this.tick(),
      1000
    );
  }

  // Stop the timer
  componentWillUnmount() {
    clearInterval(this.timerId);
  }

  // Time self-update
  tick() {
    this.setState({
      date: new Date()
    });
  }

  render() {
    return <span>Clock is ticking: {this.state.date.toLocaleTimeString()}.</span>;
  }
}


export default App;