import { useFormik } from "formik";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useUser } from "../../contexts/UserProvider";

const Register = () => {
  const navigator = useNavigate();
  const [error, setError] = useState("");
  const { setUser } = useUser();

  const formik = useFormik({
    initialValues: {
      login: "",
      password: "",
    },
    validateOnChange: false,
    validate: (values) => {
      const errors = {};

      if (!values.login) {
        errors.login = "Required";
      }
      // } else if (
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
        .post(`${process.env.REACT_APP_API_URL}users/`, values,{withCredentials:true})
        .then((data) => {
          console.log(data);
          /*setUser({
            token: credential,
          });*/
          navigator("/");
        })
        .catch((err) => {
          console.log(err);
          setError(err.response.data.message);
        });
    },
  });

  return (
    <div className="register-form">
      <h1>Créer un compte</h1>
      <p className="error">{error}</p>
      <form onSubmit={formik.handleSubmit}>
        <label htmlFor="login">
          Utilisateur
          {formik.errors.login ? (
            <div className="error">{formik.errors.login}</div>
          ) : null}
          <input
            className="register-input"
            id="login"
            name="login"
            type="login"
            onChange={formik.handleChange}
            value={formik.values.login}
          />
        </label>
        <label htmlFor="password">
          Mot de passe
          {formik.errors.password ? (
            <div className="error">{formik.errors.password}</div>
          ) : null}
          <input
            className="register-input"
            id="password"
            name="password"
            type="password"
            onChange={formik.handleChange}
            value={formik.values.password}
          />
        </label>
        <button className="register-button" type="submit">
          Envoyer
        </button>
      </form>
    </div>
  );
};

export default Register;
