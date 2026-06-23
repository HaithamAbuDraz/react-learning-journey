import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from '../../lessons/12-react-router/components/Navbar';
import Home from '../../lessons/12-react-router/pages/Home';
import About from '../../lessons/12-react-router/pages/About';
import Contact from '../../lessons/12-react-router/pages/Contact';
import Users from '../../lessons/12-react-router/pages/Users';
import UserProfile from '../../lessons/12-react-router/pages/UserProfile';
import Services from './pages/Services';
import ServiceDetail from './pages/ServiceDetail';

function ReactRouterChallenge() {
  return (
    <BrowserRouter>
      <Navbar />

      <hr />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/users' element={<Users />} />
        <Route path='/users/:id' element={<UserProfile />} />
        <Route path='/services' element={<Services />} />
        <Route path='/services/:id' element={<ServiceDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default ReactRouterChallenge;
