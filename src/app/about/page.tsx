import NavBar from "../navbar";
import "./about.css";

export default function About() {
  const techCards = [
    { src: "/images/react-logo.png", alt: "React", label: "React" },
    { src: "/images/sql-logo.png", alt: "SQL", label: "SQL" },
    { src: "/images/typescript-logo.png", alt: "TypeScript", label: "TypeScript" },
    { src: "/images/java-logo.png", alt: "Java", label: "Java" },
    { src: "/images/python-logo.png", alt: "Python", label: "Python" },
    { src: "/images/c++.png", alt: "C++", label: "C++" },
  ];

  return (
    <div>
      <NavBar />
      <div className="about-container">
        <h1 className="big-title">Hey everyone</h1>
        <h2 className="short-description">
          My name is Aneesh Agarwal, and I am a fourth-year computer science
          major at UCSB from the Bay Area with a strong background in software development with a specialization
          in machine learning and NLP. 
        </h2>

        {/* Technical Skills Scrolling Section */}
        <div className="tech-list">
          <h3>Technical Skills:</h3>
          <div className="marquee">
            <div className="marquee-content">
              {techCards.map((card, index) => (
                <div className="tech-card" key={`tech-card-${index}`}>
                  <img src={card.src} alt={card.alt} />
                  <p>{card.label}</p>
                </div>
              ))}
              {/* Duplicate cards for seamless loop */}
              {techCards.map((card, index) => (
                <div className="tech-card" key={`tech-card-duplicate-${index}`}>
                  <img src={card.src} alt={card.alt} />
                  <p>{card.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* About Paragraph Section */}
        <div className="about-paragraph">
          <p>
            Originally, I entered college as a statistics and data science
            major but took a few computer science classes and realized my
            interests were more aligned with building software applications.
            I've spent my time in college completing many full-stack
            development projects in various tech stacks and languages. In these
            experiences, I've built mobile listening apps from scratch and have
            also built features on top of existing legacy codebases.
          </p>
        </div>
      </div>
    </div>
  );
}
