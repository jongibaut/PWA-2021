import React from 'react';
import useCustomForm from './../utils/useCustomForm';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { usePost } from '../utils/useHTTP';
const schema = yup.object().shape({
    nombre: yup.string().required("nombre es obligatorio").min(3, "el nombre no puede ser mas corto que 3 caracteres").max(30, "el nombre no puede ser mas largo que 30 caracteres"),
    apellido: yup.string().required("apellido es obligatorio").max(30, "el apellido no puede ser mas largo que 30 caracteres"),
    mail: yup.string().email("ingrese una direccion de mail valida").required("mail es obligatorio"),
})
const Register = () => {
    const [values, handlerInput] = useCustomForm();
    const [result, error, post] = usePost(`http://localhost:3001/register`, values)

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    });
    const registro = () => {
        console.log("Registrado 😎", values);
        post();
        console.log(result, error);

    }
    return (
        <>
            <div className="row justify-content-center mt-4">
                <div className="col-7">
                    <form onSubmit={handleSubmit(registro)}>
                        <div className="form-group mt-3">
                            <input {...register("nombre")} type="text" name="nombre" placeholder="Ingrese su nombre" className="form-control" onChange={handlerInput} />
                            {errors.nombre ? <p className="text-danger">{errors.nombre.message}</p> : null}
                        </div>
                        <div className="form-group mt-3">
                            <input {...register("apellido")} type="text" name="apellido" placeholder="Ingrese su apellido" className="form-control" onChange={handlerInput} />
                            {errors.apellido ? <p className="text-danger">{errors.apellido.message}</p> : null}
                        </div>
                        <div className="form-group mt-3">
                            <input {...register("mail")} type="mail" name="mail" placeholder="Ingrese su mail" className="form-control" onChange={handlerInput} />
                            {errors.mail ? <p className="text-danger">{errors.mail.message}</p> : null}
                        </div>
                        <div className="d-grid gap-2 mt-3">
                            <button className="btn btn-info">Registrarse</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}

export default Register;