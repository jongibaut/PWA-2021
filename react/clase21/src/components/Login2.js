import React from 'react';
import useCustomForm from '../utils/useCustomForm';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Form, Col, Container, Row } from 'react-bootstrap';
import { usePost } from '../utils/useHTTP';
import { useState } from "react";
import axios from "axios"; //npm i axios
const schema = yup.object().shape({
    username: yup.string().required("username es obligatorio"),
    pass: yup.string().required("pass es obligatorio"),
})
const Login = () => {
    const [values, handlerInput] = useCustomForm();
    const [result, setResult] = useState({});
    const [error, setError] = useState(false);
    //const [result, error, post] = usePost(`http://localhost:3001/auth`, values);

    const { register, handleSubmit } = useForm({
        resolver: yupResolver(schema)
    });
    const login = async() => {
        try {
            setResult(await axios.post(`http://localhost:9000/auth`, values));
            console.log(result.data);
        } catch (err) {
            setError(true);
        }
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