import './navbar.css';
import Link from 'next/link';


export default function NavBar() {
    return (
        <nav className="navbar">
            <Link href="/">
                <div className="logo">Home</div>
            </Link>
            <ul className="nav-links">
            <li><Link href="/about">About</Link></li>
            <li><Link href="/projects">Projects</Link></li>
            </ul>
        </nav>
        );
    }