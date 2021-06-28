import React from 'react';
import useCustomForm from '../utils/useCustomForm';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Form, Button, Col, Container, Row } from 'react-bootstrap';
const schema = yup.object().shape({
    username: yup.string().required("username es obligatorio").min(3, "el username no puede ser mas corto que 3 caracteres").max(30, "el username no puede ser mas largo que 30 caracteres"),
    pass: yup.string().required("apellido es obligatorio").max(30, "la pass no puede ser mas largo que 30 caracteres"),
})
const Login = () => {
    const [values, handlerInput] = useCustomForm();

    const { register, handleSubmit } = useForm({
        resolver: yupResolver(schema)
    });
    const login = () => {
        console.log("Login 😎", values);
    }
    return (
        <>
            <Container>
                <Row>
                    <Col>
                        <Form onSubmit={handleSubmit(login)}>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Username</Form.Label>
                                <Form.Control type="text" placeholder="Username" name="username" {...register("username")} onChange={handlerInput} />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control {...register("pass")} type="password" placeholder="Password" name="pass" onChange={handlerInput} />
                            </Form.Group>
                            <Button variant="info">
                                Login
                            </Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default Login;