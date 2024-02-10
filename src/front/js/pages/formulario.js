import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";

export const Register = () => {
  const { store, actions } = useContext(Context);
  const [email, setEmail] = useState("");
  const [password, setPasword] = useState("");

  return (
    <form className="container justify-content-center form-group">
      <div class="form-outline mb-4">
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
      </div>
      <div class="form-outline mb-4">
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
      </div>
      <button
        class="btn btn-primary"
        type="submit"
        onClick={() => {
          actions.register(email, password);
        }}
      >
        Sing in
      </button>
    </form>
  );
};