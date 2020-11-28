import { React, Component } from "react";
import { Link } from "react-router-dom";
import {
    Container,
    Button,
    Row,
    Col,
    Card,
    Form
} from "react-bootstrap";

import Username, {Password} from "../partials";

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
                                        <Username onChange={this.onChange} />
                                        <Password onChange={this.onChange} />
                                    </Form>
                                </Card.Text>
                            </Card.Body>

                            <div className="ml-4">
                                <Button variant="outline-success" size="sm" onClick={this.onRegisterClick}>Register</Button>
                            </div>
                            <p className="mt-2">
                                Already have an account? <Link to="/login">Login</Link>
                            </p>
                        </Card>
                    </Col>
                </Row>

            </Container>
        );
    }
}

export default Signup;