
import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import EventDetails from './pages/EventDetails';
import Purchase from './pages/Purchase';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import CategoryPage from './pages/CategoryPage';
import About from './pages/About';
import Contact from './pages/Contact';
import SocialPage from './pages/SocialPage';

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [filters, setFilters] = useState({ location: '', date: '' });

  const handleLogout = () => setIsLoggedIn(false);

  return (
    <Router>
      <Navbar
        isLoggedIn={isLoggedIn}
        onLogout={handleLogout}
        onSearch={setSearchTerm}
        onFilterChange={setFilters}
      />
      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<Home searchTerm={searchTerm} filters={filters} />} />
          <Route path="/event/:id" element={<EventDetails />} />
          <Route path="/purchase/:id" element={<Purchase />} />
          <Route path="/signin" element={<SignIn onLogin={() => setIsLoggedIn(true)} />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/category/:name" element={<CategoryPage />} />        
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/facebook" element={<SocialPage name="Facebook" url="https://www.facebook.com/profile.php?id=61584297314869" />} />
          <Route path="/twitter" element={<SocialPage name="Twitter" />} />
          <Route path="/instagram" element={<SocialPage name="Instagram" />} />


        </Routes>
      </div>
    </Router>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
