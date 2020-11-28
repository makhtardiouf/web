import { React, Component } from "react";
import { Container, Jumbotron, Alert } from "react-bootstrap";

class NotFound extends Component {
    render() {
        return (
            <Container>
                <Jumbotron>
                    <h4>
                        <Alert variant="danger" dismissible="true">Error: The page you're looking for was not found</Alert>
                    </h4>
                </Jumbotron>
            </Container>
        );
    }
}

export default NotFound;