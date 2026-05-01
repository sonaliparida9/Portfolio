import { Container } from "./styles";
import githubIcon from "../../assets/github.svg"
// import externalLink from "../../assets/external-link.svg"
import ScrollAnimation from "react-animate-on-scroll";


export function Project() {
  return (
    <Container id="project">
      <h2>My Projects</h2>
      <div className="projects">
        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              {/* <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " stroke-width="1" stroke-linecap="round" stroke-linejoin="round" ><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg> */}
              <div className="project-links">
                <a href="https://github.com/sonaliparida9/PingUp" target="_blank" rel="noreferrer">
                  <img src={githubIcon} alt="Visit site" />
                </a>
                {/* <a href="https://medibook.vinayaksingh.com" target="_blank" rel="noreferrer">
                  <img src={externalLink} alt="Visit site" />
                </a> */}
              </div>
            </header>
            <div className="body">
              <h3>Social media website</h3>
              <p>Connect, share, and engage effortlessly with this dynamic social media platform built using React.js and Express.js. Create your account securely, explore real-time posts, and interact with a vibrant community through likes and comments. Stay updated with a smooth and responsive user experience designed for modern web users.
                  Key Features:
                  ✅ Secure authentication and profile management using Clerk
                  ✅ Create, like, and comment on posts in real-time
                  ✅ Fully responsive and interactive UI with reusable components
                  ✅ RESTful APIs for efficient handling of users, posts, and interactions</p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>React</li>
                <li>Rest Api</li>
                <li>CSS</li>
                <li>Express.js</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              {/* <svg width="50" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                <title>Code</title>
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
              </svg> */}
              <div className="project-links">
                <a href="https://github.com/sonaliparida9/real-state-project" target="_blank" rel="noreferrer">
                  <img src={githubIcon} alt="Visit site" />
                </a>
                {/* <a href="https://youtu.be/NOm-3MynPLE" target="_blank" rel="noreferrer">
                  <img src={externalLink} alt="Visit site" />
                </a> */}
              </div>
            </header>
            <div className="body">
              <h3>Real State Project</h3>
              <p>Built a fully responsive Real Estate web application using React.js and Tailwind CSS, ensuring seamless user experience across mobile, tablet, and desktop devices.
                Designed and developed an intuitive UI to showcase property listings with clean layouts, modern styling, and reusable components.
                Implemented dynamic search and advanced filtering functionality, allowing users to find properties based on criteria such as location, price range, and property type.
                Managed application state efficiently to update property listings in real-time based on user input.
                Focused on performance optimization and component reusability for scalable front-end architecture.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>React</li>
                <li>Tailwind CSS</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              {/* <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " stroke-width="1" stroke-linecap="round" stroke-linejoin="round" ><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg> */}
              <div className="project-links">
                <a href="https://github.com/sonaliparida9/Portfolio" target="_blank" rel="noreferrer">
                  <img src={githubIcon} alt="Visit site" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>Portfolio</h3>
              <p>
              On my portfolio, you’ll find a showcase of my projects, demonstrating my ability to deliver high-quality, dynamic, and responsive web applications that meet client needs and exceed expectations. I am passionate about problem-solving, efficient coding practices, and continuously learning new technologies to enhance my skill set.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>React</li>
                <li>Typescript</li>
                <li>Node JS</li>
                <li>Express JS</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

      </div>
    </Container>
  );
}