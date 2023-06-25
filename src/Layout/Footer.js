export default function Footer() {
    return (
        <footer className="bg-sandy pb-12 pt-4 flex justify-around mt-12">
            <div>
                <h3 className="text-color-minty mb-6">Account</h3>
                <ul className="list-none p-0 flex flex-col gap-3">
                    <li>
                        <a href="/" className="no-underline">Login</a>
                    </li>
                    <li>
                        <a href="/" className="no-underline">Sign up</a>
                    </li>
                </ul>
            </div>
            <div>
                <h3 className="text-color-minty mb-6">Company</h3>
                <ul className="list-none p-0 flex flex-col gap-3">
                    <li>
                        <a href="/" className="no-underline">Partners</a>
                    </li>
                    <li>
                        <a href="/" className="no-underline">Our team</a>
                    </li>
                    <li>
                        <a href="/" className="no-underline">About us</a>
                    </li>
                </ul>
            </div>
            <div>
                <h3 className="text-color-minty mb-6">Info</h3>
                <ul className="list-none p-0 flex flex-col gap-3">
                    <li>
                        <a href="/" className="no-underline">News</a>
                    </li>
                    <li>
                        <a href="/" className="no-underline">Help Center</a>
                    </li>
                    <li>
                        <a href="/" className="no-underline">Privacy &amp; terms</a>
                    </li>
                </ul>
            </div>
        </footer>
    );
}

