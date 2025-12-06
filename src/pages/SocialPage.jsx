
export default function SocialPage({ name, url }) {
  return (
    <div className="container text-white">
      <h2>{name}</h2>
      {url ? (
        <p>
          Visit our official page: 
          <a href={url} target="_blank" rel="noopener noreferrer" style={{ color: '#fff' }}>
            {url}
          </a>
        </p>
      ) : (
        <p>Follow us on {name} for the latest updates and events!</p>
      )}
    </div>
  );
}
