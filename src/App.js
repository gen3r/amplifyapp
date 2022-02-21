import React from 'react';
// import anime from 'animejs/lib/anime.es.js';
import logo from './logo.svg';
import gif1 from './gifs/gif1.gif';
import gif2 from './gifs/gif2.gif';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>bruh website fr on rn 
          <span role="img" aria-label='thumbs up'>👍👍👍</span>
        </h1>
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <body className="App-body">
        <img src={gif1} className="gif-1" alt="gif"/>
        <h1>bruh website fr on rn 
          <span role="img" aria-label='thumbs up'>👍👍👍</span>
        </h1>
        <img src={gif2} className="gif-2" alt="gif2" />
        <h1>bruh website fr on rn ???
          <span role="img" aria-label='confused'>😕😕😕</span> 
        </h1>
      </body>

    </div>
  );
}

export default App;