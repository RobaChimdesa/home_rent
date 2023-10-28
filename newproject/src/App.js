
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Layout from './components/Layout'; 
import Home from './pages/home';
import About from './pages/about';
import Contact from './pages/contact';
import Education from './pages/education';
import Projects from './pages/projects';
import Skill from './pages/skill';

function App() {
  return (
    <div >
   <Router>

    <Routes>

      <Route path='/' element={<Home/>} />
      <Route path='/about' element={<About/>} />
      <Route path='/contact' element={<Contact/>} />
      <Route path='/projects' element={<Projects/>} />
      <Route path='/education' element={<Education/>} />
      <Route path='/skill' element={<Skill/>} />






    </Routes>

   </Router>
     </div>
  );
}

export default App;
