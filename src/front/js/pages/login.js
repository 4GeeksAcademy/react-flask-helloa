import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const { store, actions } = useContext(Context);
  const [email, setEmail] = useState("");
  const [password, setPasword] = useState("");
  const navigate = useNavigate();

  return (
    <div className="container">
      <div class="form-floating mb-3">
        <input
          type="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          class="form-control"
          id="floatingInput"
          placeholder="name@example.com"
        />
        <label for="floatingInput">Email address</label>
      </div>
      <div class="form-floating">
        <input
          type="password"
          value={password}
          onChange={(e) => {
            setPasword(e.target.value);
          }}
          class="form-control"
          id="floatingPassword"
          placeholder="Password"
        />
        <label for="floatingPassword">Password</label>
      </div>
      <button
        class="btn btn-primary"
        type="submit"
        onClick={() => {
          const result = actions.login(email, password);
          if (result) {
            navigate("/private");
          }
        }}
      >
        Inicio sesión
      </button>
    </div>
  );
};