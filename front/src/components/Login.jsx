import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import style from "../styles/Login.module.css";
import rick from '../img/logo.gif'

const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
const regexPassword =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{6,10}/;

export default function Login({ login }) {
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });
  function validate(inputs) {
    const errors = {};
    if (!inputs.email) {
      errors.email = "Debe haber un email";
    } else if (!inputs.password) {
      errors.password = "Debe haber un password";
    } else if (!regexEmail.test(inputs.email)) {
      errors.email = "Debe ser un email válido";
    } else if (!regexPassword.test(inputs.password)) {
      errors.password = "Debe ser un password válido";
    }
    return errors;
  }

  function handleChange(e) {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value,
    });
    setErrors(
      validate({
        ...inputs,
        [e.target.name]: e.target.value,
      })
    );
  }
  function handleSubmit(e) {
    e.preventDefault();
    const aux = Object.keys(errors);
    // console.log("submit");
    if (aux.length === 0) {
      login(inputs);
      setInputs({
        email: "",
        password: "",
      });
      setErrors({
        email: "",
        password: "",
      });
    } else {
      return alert("Error");
    }
  }
  return (
    <div className={style.container}>
      <form className={style.form} onSubmit={handleSubmit}>
      <div>
        <img className={style.logoPrim} src={rick} alt="rick logo"></img>
      </div> 
        <input className={style.input}
          name="email"
          value={inputs.email}
          onChange={handleChange}
          placeholder="Email"
        ></input>
        <p className={style.danger}>{errors.email}</p>
        <input className={style.input}
          name="password"
          value={inputs.password}
          onChange={handleChange}
          placeholder=""
        ></input>
        <p className={style.danger}>{errors.password}</p>
        {Object.keys(errors).length === 0 ? (
          <center><button className={style.button} type="submit">Ingresar</button></center>
        ) : null}
      </form>
    </div>
  );
}