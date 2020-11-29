import { React, Component } from "react";
import {
    Form,
    FormControl
} from "react-bootstrap";

// Reusable components accross files


function Email(props) {
    return (
        <Form.Group controlId="emailId">
            <Form.Label>Email</Form.Label>
            <Form.Control
                type="email"
                name="email"
                placeholder="Enter your email"
                value={props.email}
                onChange={props.onChange} />
            <FormControl.Feedback type="invalid"></FormControl.Feedback>
        </Form.Group>
    );
}

function Username(props) {
    return (
        <Form.Group controlId="userId">
            <Form.Label>Username</Form.Label>
            <Form.Control
                type="text"
                name="username"
                placeholder="Enter username"
                value={props.username}
                onChange={props.onChange} />
            <FormControl.Feedback type="invalid"></FormControl.Feedback>
        </Form.Group>
    );
}

function Password(props) {
    return (
         <Form.Group controlId="passId">
            <Form.Label>Password</Form.Label>
            <FormControl
                type="password"
                name="password"
                placeholder="Enter your password"
                value={props.password}
                onChange={props.onChange}
            />
            <FormControl.Feedback type="invalid"></FormControl.Feedback>
        </Form.Group>
    );
}


// Ref https://www.geeksforgeeks.org/reactjs-importing-exporting/
export default Username;
export {Email, Password};
