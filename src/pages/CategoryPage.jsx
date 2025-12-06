
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import EventList from '../components/EventList';

export default function CategoryPage() {
  const { name } = useParams();
  const [events, setEvents] = useState([]);
  const apiUrl = import.meta.env.VITE_API_BASE_URL;

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

  const filteredEvents = name === 'All'
    ? events
    : events.filter(event => event.CategoryName.toLowerCase() === name.toLowerCase());

  return (
    <div className="container">
      <h2>{name} Events</h2>
      <EventList events={filteredEvents} />
    </div>
  );
}
