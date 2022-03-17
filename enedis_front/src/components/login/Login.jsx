import { useFormik } from "formik";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useUser } from "../../contexts/UserProvider";
import "./Login.css";

const Login = () => {
  const [error, setError] = useState(null);
  const navigator = useNavigate();
  const { setUser } = useUser();

  const formik = useFormik({
    initialValues: {
      user: "",
      password: "",
    },
    validateOnChange: false,
    validate: (values) => {
      const errors = {};
      if (!values.user) {
        errors.user = "Required";
      }
      //  else if (
      //   !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
      // ) {
      //   errors.email = "Invalid email address";
      // }

      if (!values.password) {
        errors.password = "Required";
      }

      return errors;
    },
    onSubmit: (values) => {
      axios
        .post(`${process.env.REACT_APP_API_URL}/user/login`, values)
        .then(({ data: { credentials } }) => {
          setUser({
            token: credentials,
          });
          navigator("/");
        })
        .catch(
          ({
            response: {
              data: { message },
            },
          }) => {
            setError(message);
          }
        );
    },
  });

  return (
    <div className="login-form">
      <h1>Connexion</h1>
      <p className="error">{error}</p>
      <form onSubmit={formik.handleSubmit}>
        <label className="login-label" htmlFor="email">
          Utilisateur
          {/* {formik.errors.email ? (
            <div className="error">{formik.errors.email}</div>
          ) : null} */}
          <input
            className="login-input"
            id="user"
            name="user"
            type="user"
            onChange={formik.handleChange}
            value={formik.values.user}
          />
        </label>
        <label className="login-label" htmlFor="password">
          mot de passe
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
