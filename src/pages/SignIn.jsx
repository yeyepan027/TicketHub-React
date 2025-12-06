
import { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

export default function SignIn({ onLogin }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // Initialize navigate

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email && password) {
      onLogin(); // Update login state
      navigate('/'); // Redirect to homepage
    }
  };

  return (
    <div className="container text-white">
      <h2>Sign In</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          className="form-control mb-2"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          className="form-control mb-2"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit" className="btn btn-dark">Sign In</button>
      </form>
    </div>
  );
}
