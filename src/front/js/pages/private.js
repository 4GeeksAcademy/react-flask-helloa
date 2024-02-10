import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";

export const Private = () => {
  const { store, actions } = useContext(Context);
  const navigate = useNavigate();
  store.token && console.log(store.token);

  return (
    <>
      {store.token && store.token ? (
        <div className="text-center mt-5">
          <h1>Área privada</h1>
          <div>
            <button
              className="btn btn-primary"
              onClick={localStorage.removeItem()}
            />
          </div>
        </div>
      ) : (
        navigate("/login")
      )}
    </>
  );
};