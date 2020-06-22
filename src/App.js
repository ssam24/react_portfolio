import React from 'react';
import './App.css';
import NavBar from './components/NavBar'
import Welcome from './components/Welcome'
import Projects from './components/Projects'
import WorkWith from './components/WorkWith'
import Footer from './components/Footer'


function App() {
  return (
    <div className="App">
      <NavBar />
      <Welcome />
      <Projects />
     <WorkWith />
    <Footer />
    </div>
  );
}

export default App;
