import React from "react";
import RegisterData from "./RegisterForm";

function RegisterApp({accounts}) {
    return (
          <div className="register-form">
                <RegisterData accounts={accounts} />
          </div>
      );
}

export default RegisterApp;