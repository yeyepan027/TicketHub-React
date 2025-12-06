
import { Link } from 'react-router-dom';

export default function Navbar({ isLoggedIn, onLogout, onSearch, onFilterChange }) {
  return (
    <header style={{ position: 'fixed', top: 0, width: '100%', zIndex: 1000 }}>
      <nav className="navbar navbar-expand-lg" style={{ backgroundColor: '#0066cc', padding: '8px 15px' }}>
        <div className="container-fluid d-flex justify-content-between align-items-center">
          {/* Logo + Brand */}
          <Link className="navbar-brand d-flex align-items-center" to="/" style={{ fontSize: '1.8rem', fontWeight: 'bold', color: '#fff' }}>
            <img src="/logo.png" alt="TicketHub Logo" style={{ height: '40px', marginRight: '10px' }} />
            TicketHub
          </Link>
          <div className="d-flex gap-3">
            <Link to="/category/Concerts" className="text-white text-decoration-none">Concerts</Link>
            <Link to="/category/Sports" className="text-white text-decoration-none">Sports</Link>
            <Link to="/category/Arts" className="text-white text-decoration-none">Arts</Link>
            <Link to="/category/Comedy" className="text-white text-decoration-none">Comedy</Link>
            <Link to="/category/Festival" className="text-white text-decoration-none">Festivals</Link>
            <Link to="/category/Movies" className="text-white text-decoration-none">Movie</Link>
          </div>
          <div>
            {isLoggedIn ? (
              <button className="btn btn-light btn-sm" style={{ color: '#000' }} onClick={onLogout}>Log Out</button>
            ) : (
              <>
                <Link to="/signin" className="btn btn-dark btn-sm" style={{ color: '#000', marginRight: '10px' }}>Sign In</Link>
                <Link to="/signup" className="btn btn-dark btn-sm" style={{ color: '#000' }}>Sign Up</Link>
              </>
            )}
          </div>
        </div>
      </nav>
      <div style={{ backgroundColor: '#f9da2cff', padding: '10px 15px' }}>
        <div className="container d-flex justify-content-center gap-2">
          <input
            type="text"
            className="form-control w-25"
            placeholder="Location"
            onChange={(e) => onFilterChange(prev => ({ ...prev, location: e.target.value }))}
          />
          <input
            type="date"
            className="form-control w-25"
            onChange={(e) => onFilterChange(prev => ({ ...prev, date: e.target.value }))}
          />
          <input
            type="text"
            className="form-control w-25"
            placeholder="Search Artist, Event or Venue"
            onChange={(e) => onSearch(e.target.value)}
          />
          <button className="btn btn-light btn-sm" style={{ color: '#000' }}>Search</button>
        </div>
      </div>
    </header>
  );
}
        <p>Designed by TicketHub Team</p>