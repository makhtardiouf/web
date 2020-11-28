import { React, Component } from "react";
import {
    Container,
    Nav, Navbar, NavDropdown,
    Row, Col,
    Button,
    Form, FormControl
} from "react-bootstrap";

class Home extends Component {
    render() {
        return (
           
            <div>
            <Container>
                <h4>Welcome to Makhtar SaaS Web UI</h4>

                <Row>
                    <Col md="6">
                        In this post, we will create a user interface in React for authentication (Signup and Login views).
                        Components will not perform any actions (they won’t be communicating with the backend, yet). We will use code from the previous post: Starting SaaS with Django and React
                    </Col>
                </Row>
            </Container>
            </div>
        );
    }
}

export default Home;
