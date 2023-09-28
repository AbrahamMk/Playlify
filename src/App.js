import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import SongPlayer from './components/SongPlayer';

const App = () => {
  
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/SongPlayer" element={<SongPlayer/>} />

        </Routes>
      </div>
    </Router>
  );
  
  };  
export default App;