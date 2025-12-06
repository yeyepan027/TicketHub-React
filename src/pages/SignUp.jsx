
export default function SignUp() {
  return (
    <div className="container text-white">
      <h2>Sign Up</h2>
      <form>
        <input type="text" className="form-control mb-2" placeholder="Name" />
        <input type="email" className="form-control mb-2" placeholder="Email" />
        <input type="password" className="form-control mb-2" placeholder="Password" />
        <button type="submit" className="btn btn-dark">Create Account</button>
      </form>
    </div>
  );
}
