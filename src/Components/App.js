import React from 'react';
import Stack from './Stack';
import './index.css';

// import profile from './assetts/user.png';
// import hamburger from './assetts/menu.png';

function App() {
  return (
    <div className="App">
      <header className="boardTitle">
        <h3 className="boardTitle__h3">Sprint Title</h3>
      </header>
      <div className="boards__section ">
        <Stack />
        <Stack />
        <Stack />
        <Stack />
      </div>
    </div >
  );
}

export default App;
