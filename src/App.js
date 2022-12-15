import './App.css';
import { Routes, Route } from 'react-router-dom'
import { Navbar, Footer } from './components';
import { HomePage, AboutPage, MyWorksPage, SkillsPage } from './pages';

function App() {
  return (
    <div className="container">
      <Navbar />
      <Routes>
        <Route path='/' element={ <HomePage /> } />
        <Route path='/about' element={ <AboutPage /> } />
        <Route path='/my-works' element={ <MyWorksPage /> } />
        <Route path='/skills' element={ <SkillsPage /> } />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
