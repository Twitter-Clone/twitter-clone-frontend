import React from 'react';
import './App.css';
import Sidebar from './components/Sidebar';
import Feed from './components/Feed';

function App() {
  return (
    <div className="app">
      <Sidebar />
      <Feed />
    </div>
  );
}

export default App;
