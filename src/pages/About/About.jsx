import './About.css';
import Navbar from '../../components/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>

      <div className="contentPage">
        <h1>About</h1>
        <div className="desc">
          <p>Hello! I'm Rishikesh Karkhanis, a passionate and dedicated student pursuing B.Tech in Computer Science & Engineering (AIML) at Acropolis Institute of Technology & Research, Indore.
            While my primary focus is on Artificial Intelligence & Machine Learning, I have a strong interest in Web Development as well. I enjoy building innovative and functional web applications, and I’ve worked on projects like Micro-URL, Task-Done, and more.
            One of my key strengths is that I'm a quick learner, always eager to explore new technologies and enhance my skill set. Whether it's AI, backend development, or full-stack web projects, I am always up for a challenge!</p>
        </div>
      </div>

      <footer>
        <a href="/">Back</a>
        <a href="/projects">Next</a>
      </footer>

    </div>
  );
}

export default App;
