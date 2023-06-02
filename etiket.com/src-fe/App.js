import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './Components/Navbar/Navbar';
import GlobalStyle from './globalStyles'

//Pages
import Register from './Components/Pages/Register/Register';
import Login from './Components/Pages/Login/Login';
import Home from './Components/Pages/Home/Home';
import About from './Components/Pages/About/About';
import Account from './Components/Pages/Account/Account';


function App() {
  return (
    <Router>
      <GlobalStyle />
      <Navbar />
      <Routes>
        <Route path='/' exact element={<Home />} />
        <Route path='/account' element={<Account />} />
        <Route path='/login' element={<Login/>} />
        <Route path='/register' element={<Register/>} />
        <Route path='/about' element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
