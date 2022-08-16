import React from 'react';

import './App.css';

import Header from './header/Header';
import Home from './home/Home';
import Projects from './projects/Projects';
import Skills from './skills/Skills';

const App = () => {
  return (
    <div className="App">
      <Header />
      <Home />
      <Skills />
      <Projects />
    </div>
  );
};

export default App;
