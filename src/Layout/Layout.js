import Header from "./Header";
import Footer from "./Footer";

export default function Layout(props) {
    return (
        <div>
            <Header />
            <main style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(6, 1fr)',
                gridTemplateRows: 'repeat(3, 1fr)',
                justifyItems: 'center',
            }}
            >
                {props.children}
            </main>
            <Footer />
        </div>
    );
};