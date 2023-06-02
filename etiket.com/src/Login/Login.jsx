import React from "react";
import LoginData from "./LoginForm";

function LoginApp({accounts}) {
    return (
          <div className="login-form">
                <LoginData accounts={accounts} />
          </div>
      );
}

export default LoginApp;