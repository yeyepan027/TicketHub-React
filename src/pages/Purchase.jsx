
import { useState } from 'react';
import { useParams } from 'react-router-dom';

export default function Purchase() {
  const { id } = useParams();
  const [form, setForm] = useState({
    ShowId: id,
    Tickets: 1,
    CustomerName: '',
    Email: '',
    CreditCard: ''
  });
  const [message, setMessage] = useState('');
  const apiUrl = import.meta.env.VITE_API_BASE_URL;

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${apiUrl}/purchases`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      });
      if (response.ok) {
        setMessage('Purchase successful!');
      } else {
        setMessage('Error processing purchase.');
      }
    } catch (error) {
      setMessage('Error: ' + error.message);
    }
  };

  return (
    <div className="container text-white">
      <h2>Purchase Tickets</h2>
      <form onSubmit={handleSubmit}>
        <input name="CustomerName" className="form-control mb-2" placeholder="Name" onChange={handleChange} />
        <input name="Email" className="form-control mb-2" placeholder="Email" onChange={handleChange} />
        <input name="CreditCard" className="form-control mb-2" placeholder="Credit Card" onChange={handleChange} />
        <input name="Tickets" type="number" className="form-control mb-2" value={form.Tickets} onChange={handleChange} />
        <button type="submit" className="btn btn-primary">Buy Now</button>
      </form>
      {message && (
        <p style={{ marginTop: '15px', fontWeight: 'bold', color: 'limegreen', fontSize: '18px' }}>
          {message}
        </p>
      )}
    </div>
  );
}
