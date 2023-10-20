import Signup from './LoginSignup/Signup';
import Login from './LoginSignup/Login';
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import Forgot_password from './LoginSignup/Forgot_password';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="signup" element={<Signup />} />
        <Route path="login" element={<Login />} />
        <Route path="Forgot_password" element={<Forgot_password/>} />


      </Routes>
    </Router>
  );
}

export default App;
