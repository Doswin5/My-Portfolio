import React, { useState } from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom'
import { Navbar, Footer } from './components';
import { HomePage, AboutPage, MyWorksPage, SkillsPage, ContactPage } from './pages';

function App() {
  const [toggleMode, setToggleMode] = useState(false)

  function handleMode() {
    setToggleMode(prev => !prev)
    console.log(toggleMode);
  }

  return (
    <div className={`App ${toggleMode ? 'bg-darkM text-lightM' : 'bg-lightM text-darkM'} font-medium sm:px-[100px] px-[16px]`}>
      <Navbar 
        toggleMode={toggleMode}
        handleToggleMode={handleMode}
      />
      <Routes>
        <Route path='/' element={ <HomePage /> } />
        <Route path='/about' element={ <AboutPage /> } />
        <Route path='/my-works' element={ <MyWorksPage /> } />
        <Route path='/skills' element={ <SkillsPage /> } />
        <Route path='/contact' element={ <ContactPage /> } />
      </Routes>
      <Footer 
        toggleMode={toggleMode}
      />
    </div>
  );
}

export default App;
