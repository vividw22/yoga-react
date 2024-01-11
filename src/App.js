import React from 'react';
import About from './components/About';
import Education from './components/Education';
import Header from './components/Header';
import Profile from './components/Profile';

const App = () => {
  return (
    <div>
      <Header />
      <Profile/>
      <About/>
      <Education/>
    </div>
  );
}

export default App;
