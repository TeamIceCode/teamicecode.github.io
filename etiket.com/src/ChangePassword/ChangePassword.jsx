import React from "react";
import ChangePasswordData from "./ChangePasswordForm";

function ChangePasswordApp({accounts}) {
    return (
          <div className="login-form">
                <ChangePasswordData accounts={accounts} />
          </div>
      );
}

export default ChangePasswordApp;