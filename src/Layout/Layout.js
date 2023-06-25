import Header from "./Header";
import Footer from "./Footer";

export default function Layout(props) {
    return (
        <div>
            <Header />
            <main 
            className="grid grid-cols-6 grid-rows-3 justify-items-center">
                {props.children}
            </main>
            <Footer />
        </div>
    );
};