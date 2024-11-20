import Image from "next/image";
import './home.css';
import Navbar from './navbar';

export default function Home() {
  return (
    <div>
      <Navbar />
      <div className="container">
        <h1 className="title">Aneesh Agarwal</h1>
        <h2 className="position">Full Stack Developer / ML Engineer</h2>
        <p className="description">
        Experience developing full-stack applications with a user-centric approach, focusing on responsive design, efficient APIs, and optimized database queries for enhanced performance
        </p>
      </div>

      {/* Social Links at the Bottom Left */}
      <div className="social-links">
        <a href="https://github.com/aneeshtheplug" target="_blank" rel="noopener noreferrer">
          <Image
            src="/images/github-logo.png"
            alt="GitHub"
            width={40}
            height={40}
          />
        </a>
        <a href="https://www.linkedin.com/in/aneesh-agarwal-299b07153/" target="_blank" rel="noopener noreferrer">
          <Image
            src="/images/new-linkedin-logo.png"
            alt="LinkedIn"
            width={40}
            height={40}
          />
        </a>
      </div>
    </div>
  );
}
