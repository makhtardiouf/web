import { React, Component } from "react";
import { Link } from "react-router-dom";
import {
    Container,
    Button,
    Row,
    Col,
    Card,
    Form,
    FormControl
} from "react-bootstrap";


class Signup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: ""
        }

        this.onChange = this.onChange.bind(this);
        this.onRegisterClick = this.onRegisterClick.bind(this);
    }

    onChange(e) {
        // Handles both input fields
        this.setState({ [e.target.name]: e.target.value });
    }

    onRegisterClick(e) {
        const data = {
            user: this.state.username,
            passwd: this.state.password
        };
        var msg = data.user + " registered to the SaaS UI";
        console.log(msg);
        alert(msg);
    }

    render() {
        return (
            <Container>
                <Row className="m-4">
                    <Col md="4">
                        <Card>
                            <Card.Header>Register to SaaS UI</Card.Header>
                            <Card.Body>
                                <Card.Text>
                                    <Form>
                                        <Form.Group controlId="userId">
                                            <Form.Label>Username</Form.Label>
                                            <Form.Control
                                                type="text"
                                                name="username"
                                                placeholder="Enter username"
                                                value={this.state.username}
                                                onChange={this.onChange} />
                                            <FormControl.Feedback type="invalid"></FormControl.Feedback>
                                        </Form.Group>

                                        <Form.Group controlId="passId">
                                            <Form.Label>Password</Form.Label>
                                            <FormControl
                                                type="password"
                                                name="password"
                                                placeholder="Enter your password"
                                                value={this.state.password}
                                                onChange={this.onChange}
                                            />
                                            <FormControl.Feedback type="invalid"></FormControl.Feedback>
                                        </Form.Group>
                                    </Form>
                                </Card.Text>
                            </Card.Body>

                            <Button color="success">Register</Button>
                            <p className="mt-2">
                                Already have account? <Link to="/login">Login</Link>
                            </p>
                        </Card>
                    </Col>
                </Row>

            </Container>
        );
    }
}

export default Signup;