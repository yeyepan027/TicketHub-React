
import { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import EventList from '../components/EventList';

export default function Home({ searchTerm, filters }) {
  const [events, setEvents] = useState([]);
  const apiUrl = import.meta.env.VITE_API_BASE_URL;
  const navigate = useNavigate();

  useEffect(() => {
    const fetchEvents = async () => {
      const response = await fetch(`${apiUrl}/events`);
      if (response.ok) {
        const data = await response.json();
        setEvents(data);
      }
    };
    fetchEvents();
  }, []);

  const filteredEvents = events.filter(event => {
    const matchesSearch = event.Title && event.Title.toLowerCase().includes((searchTerm || '').toLowerCase());
    const matchesLocation = !filters.location || event.LocationName.toLowerCase().includes(filters.location.toLowerCase());
    const eventDateISO = new Date(event.Date).toISOString().split('T')[0];
    const matchesDate = !filters.date || eventDateISO === filters.date;
    return matchesSearch && matchesLocation && matchesDate;
  });

  const uniqueCategories = [...new Set(filteredEvents.map(event => event.CategoryName))];

  return (
    <div>
      {/* Hero Banner with Video Background */}
      <div className="hero-banner" style={{ position: 'relative', height: '450px', overflow: 'hidden', maxWidth: '1200px', margin: '0 auto', borderRadius: '4px' }}>
        {/* Background Video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          src="/background.mp4"
          onError={(e) => console.error('Background video failed to load', e)}
          onCanPlay={() => console.log('Background video can play')}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            zIndex: 0,
            pointerEvents: 'none'
          }}
        >
          <source src="/background.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Dark Overlay */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0,0,0,0.6)',
          zIndex: 1
        }}></div>

        {/* Overlay Content */}
        <div style={{
      position: 'relative',
      zIndex: 2,
      color: '#fff',
      textAlign: 'center',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '40px 20px',
      gap: '16px',
      boxSizing: 'border-box',
      height: '100%'
        }}>
          <h1 style={{ fontSize: '3rem', fontWeight: 'bold' }}>Find Your Next Event Here!</h1>
          <p style={{ fontSize: '1.2rem', marginBottom: '20px' }}>Discover concerts, sports, theater, and more.</p>

          {/* Benefits */}
          <ul style={{ listStyle: 'none', padding: 0, marginBottom: '20px', fontSize: '1rem' }}>
            <li>✔ Secure and Easy Booking</li>
            <li>✔ Exclusive Discounts</li>
            <li>✔ 100% Verified Tickets</li>
          </ul>

          {/* Urgency */}
          <p style={{ color: 'yellow', fontWeight: 'bold', fontSize: '1.2rem' }}>
            Hurry! Limited seats available for top events.
          </p>

          {/* CTA Button */}
          <button
            className="btn btn-warning btn-lg"
            style={{ fontWeight: 'bold', padding: '12px 30px' }}
            onClick={() => navigate('/category/All')}
          >
            Get Your Tickets Now!
          </button>
        </div>
      </div>

      {/* Featured Events */}
      <div className="container mb-5">
        <h2>Featured Events</h2>
        <div
          style={{ backgroundColor: '#fff', padding: '20px', borderRadius: '8px', cursor: 'pointer' }}
          onClick={() => navigate('/category/Featured')}
        >
          <p>Carousel coming soon... Click to view featured events</p>
        </div>
      </div>

      {/* Dynamic Categories */}
      <div className="container">
        <h2>Popular Near You!</h2>
        {uniqueCategories.length > 0 ? (
          uniqueCategories.map(cat => (
            <div key={cat} className="mb-4">
              <h3>{cat}</h3>
              <EventList events={filteredEvents.filter(event => event.CategoryName === cat)} />
            </div>
          ))
        ) : (
          <p>No events available.</p>
        )}
      </div>

      {/* Footer */}
      <footer style={{ backgroundColor: '#153fd4ff', color: '#fff', padding: '20px', textAlign: 'center' }}>
        <p>&copy; 2025 TicketHub | <Link to="/about" style={{ color: '#fff' }}>About</Link> | <Link to="/contact" style={{ color: '#fff' }}>Contact</Link></p>
        <div style={{ marginTop: '10px' }}>
          <a href="https://www.facebook.com/profile.php?id=61584297314869" target="_blank">Facebook</a> | 
          <a href="https://x.com/TicketHubph27" target="_blank">Twitter</a> | 
          <a href="https://www.instagram.com/tickethub40/" target="_blank">Instagram</a>
        </div>
      </footer>
    </div>
  );
}
