import LoginApp from "./Login/Login";
import "./App.css";
import { useState, useEffect } from "react";
import apiService from "./api-service/apiService";
import Clock from "./components/clock";


function EtiketApps() {
    
const [accounts, setAccounts] = useState([])

useEffect(() => {
    apiService.get('/accounts/getAccounts')
    .then(response => {
      setAccounts(response.data)
    })
    .catch(error => {
      console.log(error);
    })
  }, []);

    return(
        <div className="App">
            <LoginApp accounts={accounts} />
        </div>

    )

}
export default EtiketApps;