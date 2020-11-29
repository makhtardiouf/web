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

import Username, {Password} from "../partials";

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: ""
        }

        this.onChange = this.onChange.bind(this);
        this.onLoginClick = this.onLoginClick.bind(this);
    }

    onChange(e) {
        // Handles both input fields
        this.setState({ [e.target.name]: e.target.value });
    }

    onLoginClick(e) {
        const data = {
            user: this.state.username,
            passwd: this.state.password
        };
        var msg = data.user + " logged into the SaaS UI";
        console.log(msg);
        alert(JSON.stringify(data));
    }

    render() {
        return (
            <Container>
                <Row className="m-4">
                    <Col md="4">
                        <Card>
                            <Card.Header>Login to SaaS UI</Card.Header>
                            <Card.Body>
                                <Card.Text>
                                    <Form>
                                        <Username onChange={this.onChange} />
                                        <Password onChange={this.onChange} />
                                    </Form>
                                </Card.Text>
                            </Card.Body>

                            <div className="ml-4">
                                <Button variant="outline-success" size="sm" onClick={this.onLoginClick}>Login</Button>
                            </div>
                            <div className="mt-2">
                                Don't have an account? <Link to="/signup">Register</Link>
                            </div>
                        </Card>
                    </Col>
                </Row>

            </Container>
        );
    }
}

export default Login;