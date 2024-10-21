import logo from './logo.svg';
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Login';
import Register from './Register';
import Protected from './Protected';

function App() {
  return (
    <Router>
      <div className="App">
        
        <Routes>
          {/* Update the route syntax to use `element` */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/protected" element={<Protected />} />
        </Routes>
      </div>
    </Router>
  );
}
        <Router>
            <div className="App">
                <Routes>
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/protected" element={<Protected />} />
                </Routes>
            </div>
        </Router>
export default App;
