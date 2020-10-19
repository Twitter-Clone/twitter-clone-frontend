import React from 'react';

import './App.css';
import Sidebar from './components/Sidebar';
import Feed from './components/Feed';

const Profile = () => {
    return (
        <div className="profile">
            <h1>"Welcome to your profile page!"</h1>
        </div>
    );
}

function App() {
  return (
    <div className="app">
      <Sidebar />
      <Feed />
    </div>
  );
}

export default App;
module.export = {
    Profile 
};


