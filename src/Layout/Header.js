export default function Header() {
  return (
    <header
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '1rem',
        backgroundColor: '#f2f2f2',
        marginBottom: '3rem'
      }}
    >
      <div>
        <h1 style={{ margin: 0 }}>Space Planner</h1>
      </div>
      <div>
        <a
          href="/"
          style={{ marginRight: '1rem', textDecoration: 'none', color: 'black' }}
        >
          Support
        </a>
        <a
          href="/"
          style={{ marginRight: '1rem', textDecoration: 'none', color: 'black' }}
        >
          Projects
        </a>
        <a
          href="/"
          style={{ textDecoration: 'none', color: 'black' }}
        >
          About company
        </a>
      </div>
    </header>
  );
}

