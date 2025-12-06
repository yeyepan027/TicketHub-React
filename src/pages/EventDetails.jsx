
import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

export default function EventDetails() {
  const { id } = useParams();
  const [event, setEvent] = useState(null);
  const apiUrl = import.meta.env.VITE_API_BASE_URL;

  useEffect(() => {
    const fetchEvent = async () => {
      const response = await fetch(`${apiUrl}/events/${id}`);
      if (response.ok) {
        const data = await response.json();
        setEvent(data);
      }
    };
    fetchEvent();
  }, [id]);

  if (!event) return <p className="text-white text-center mt-5">Loading...</p>;

  return (
    <div className="container mt-4 text-white">
      <h2 className="mb-3">{event.Title}</h2>
      <img
        src={event.ImageFilename}
        alt={event.Title}
        className="img-fluid mb-3"
        style={{ borderRadius: '8px', maxHeight: '400px', objectFit: 'cover' }}
      />
      <p><strong>Description:</strong> {event.Description}</p>
      <p><strong>Date:</strong> {event.Date} at {event.Time}</p>
      <p><strong>Location:</strong> {event.LocationName}</p>
      <p><strong>Category:</strong> {event.CategoryName}</p>
      <Link to={`/purchase/${event.Id}`} className="btn btn-success mt-3">Buy Tickets</Link>
    </div>
  );
}
