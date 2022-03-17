import { useFormik } from "formik";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useUser } from "../../contexts/UserProvider";
import "../../pages/connexion/Connexion.css";

const Login = () => {
  const [error, setError] = useState(null);
  const navigator = useNavigate();
  const { setUser } = useUser();

  const formik = useFormik({
    initialValues: {
      login: " ",
      password: " ",
    },
    validateOnChange: false,
    validate: (values) => {
      const errors = {};
      if (!values.login) {
        errors.login = "Requis";
      }

      if (!values.password) {
        errors.password = "Requis";
      }

      return errors;
    },
    onSubmit: (values) => {
      axios
        .post(`${process.env.REACT_APP_API_URL}auth/`, values,{withCredentials:true})
        .then((data) => {
          setUser(data.userId);
          navigator("/");
        })
        .catch(
          (err) => {
            console.log(err);
            
          }
        );
    },
  });

  return (
    <div className="login-form">
      <h1>Connexion</h1>
      <p className="error">{error}</p>
      <form onSubmit={formik.handleSubmit}>
        <label className="login-label" htmlFor="login">
          Utilisateur
          {formik.errors.login ? (
            <div className="error">{formik.errors.login}</div>
          ) : null}
          <input
            className="login-input"
            id="login"
            name="login"
            type="login"
            onChange={formik.handleChange}
            value={formik.values.login}
          />
        </label>
        <label className="login-label" htmlFor="password">
          Mot de passe
          {formik.errors.password ? (
            <div className="error">{formik.errors.password}</div>
          ) : null}
          <input
            className="login-input"
            id="password"
            name="password"
            type="password"
            onChange={formik.handleChange}
            value={formik.values.password}
          />
        </label>
        <button className="login-button" type="submit">
          Entrer
        </button>
      </form>
    </div>
  );
};

export default Login;
