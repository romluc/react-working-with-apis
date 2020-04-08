import React from 'react';
import './App.css';
import News from './News/News';

function App() {
  return (
    <div className='App'>
      <header>
        <h1 className='App-header'>My News Feed</h1>
      </header>
      <News />
    </div>
  );
}

export default App;
