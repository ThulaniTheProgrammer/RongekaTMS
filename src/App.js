import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Welcome from './pages/Welcome';
import SignUp from './pages/SighnUp';
import WelcomeAdmin from './pages/WelcomeAdmin';
import WelcomeAdminstrator from './pages/WelcomeAdministrator';
import Register from './pages/Register';
import RegisterTask from './pages/RegisterTask';
import Tasks from './pages/Task';
import Report from './pages/Report';





function App() {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<Welcome/>}></Route>
      <Route path="SighnUp" element={<SignUp/>}></Route>
      <Route path="WelcomeAdmin" element={<WelcomeAdmin/>}></Route>
      <Route path="WelcomeAdministrator" element={<WelcomeAdminstrator/>}></Route>
      <Route path="Register" element={<Register/>}></Route>
      <Route path="RegisterTask" element={<RegisterTask/>}></Route>
      <Route path="Tasks" element={<Tasks/>}></Route>
      <Route path="Report" element={< Report/>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
