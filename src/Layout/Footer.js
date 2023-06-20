export default function Footer() {
    return (
        <footer
            style={{
                backgroundColor: '#f2f2f2',
                padding: '1rem',
                display: 'flex',
                justifyContent: 'space-between',
                marginTop: '3rem'
            }}
        >
            <div>
                <h3>Account</h3>
                <ul style={{ listStyleType: 'none', padding: 0 }}>
                    <li>
                        <a href="/" style={{ textDecoration: 'none', color: 'black' }}>Login</a>
                    </li>
                    <li>
                        <a href="/" style={{ textDecoration: 'none', color: 'black' }}>Sign up</a>
                    </li>
                </ul>
            </div>
            <div>
                <h3>Company</h3>
                <ul style={{ listStyleType: 'none', padding: 0 }}>
                    <li>
                        <a href="/" style={{ textDecoration: 'none', color: 'black' }}>Partners</a>
                    </li>
                    <li>
                        <a href="/" style={{ textDecoration: 'none', color: 'black' }}>Our team</a>
                    </li>
                    <li>
                        <a href="/" style={{ textDecoration: 'none', color: 'black' }}>About us</a>
                    </li>
                </ul>
            </div>
            <div>
                <h3>Info</h3>
                <ul style={{ listStyleType: 'none', padding: 0 }}>
                    <li>
                        <a href="/" style={{ textDecoration: 'none', color: 'black' }}>News</a>
                    </li>
                    <li>
                        <a href="/" style={{ textDecoration: 'none', color: 'black' }}>Help Center</a>
                    </li>
                    <li>
                        <a href="/" style={{ textDecoration: 'none', color: 'black' }}>Privacy & tepms</a>
                    </li>
                </ul>
            </div>
        </footer>
    );
}

