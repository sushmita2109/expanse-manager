import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage } from './components/homePage';
import { Nav } from './components/nav';
import { Login } from './components/login';
import { SignUp } from './components/signUp';
import { WelcomeScreen } from './components/welcomeScreen';
import { Dashboard } from './components/dashboard';
import './App.css';

function App() {
  return (
    <BrowserRouter>
     <div className="App">
     <Nav/>
     <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path='login' element={<Login/>}/>
      <Route path='signup' element={<SignUp/>}/>
      <Route path='dashboard' element={<Dashboard/>}/>
     </Routes>
     </div>
    </BrowserRouter>
  );
}

export default App;
