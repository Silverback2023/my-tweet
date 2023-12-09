import { useState } from 'react'
import React from 'react';
import Button from '@mui/material/Button';
import './App.css'
import Sidebar from './Sidebar';

function App() {
  const [count, setCount] = useState(0)

  return (
      <div className="app">
          <h1>My Tweet</h1>

          <Sidebar/>

      </div>
  );
}

export default App
