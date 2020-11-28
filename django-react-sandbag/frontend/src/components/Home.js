import { React, Component } from "react";
import { Container, Row, Col } from "react-bootstrap";

class Home extends Component {
    render() {
        return (
            <Container>
                <h4>Home</h4>
                <Row>
                    <Col md="6">
                        In this post, we will create a user interface in React for authentication (Signup and Login views).
                        Components will not perform any actions (they won’t be communicating with the backend, yet). We will use code from the previous post: Starting SaaS with Django and React
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Home;
