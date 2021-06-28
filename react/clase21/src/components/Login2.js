import React from 'react';
import useCustomForm from '../utils/useCustomForm';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Form, Col, Container, Row } from 'react-bootstrap';
import { usePost } from '../utils/useHTTP';
const schema = yup.object().shape({
    username: yup.string().required("username es obligatorio"),
    pass: yup.string().required("pass es obligatorio"),
})
const Login = () => {
    const [values, handlerInput] = useCustomForm();

    const { register, handleSubmit } = useForm({
        resolver: yupResolver(schema)
    });
    const login = async() => {
        const [result,error] = usePost(`http://localhost:3001/auth`,values)
    }
    return (
        <>
            <Container>
                <Row>
                    <Col>
                        <form onSubmit={handleSubmit(login)}>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Username</Form.Label>
                                <Form.Control type="text" placeholder="Username" name="username" {...register("username")} onChange={handlerInput} />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control {...register("pass")} type="password" placeholder="Password" name="pass" onChange={handlerInput} />
                            </Form.Group>
                            <button className="btn btn-info">
                                Login
                            </button>
                        </form>
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default Login;