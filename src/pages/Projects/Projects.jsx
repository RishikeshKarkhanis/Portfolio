import './Projects.css';
import Navbar from '../../components/Navbar/Navbar';
import { useEffect } from "react";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>

      <div className="contentPage">
        <h1>Projects</h1>

        <div className="projectContainer" id='pc'>

          <div className="project">
            <div className="lefthalf">
              <p className="pname">Micro-URL</p>
              <a href="https://github.com/RishikeshKarkhanis/Micro-URL">Github</a>
              <a href="https://micro-url-ishy.onrender.com">Live Link</a>
            </div>
            <div className="righthalf">
              <img className='projectImg' src="Project Image" alt="ProjectImage" srcset="/public/images/MicroURL.png" />
            </div>
          </div>

          <div className="project">
            <div className="lefthalf">
              <p className="pname">Task-Done</p>
              <a href="https://github.com/RishikeshKarkhanis/task-done">Github</a>
              <a href="https://todo-app-dnje.onrender.com">Live Link</a>
            </div>
            <div className="righthalf">
              <img className='projectImg' src="Project Image" alt="ProjectImage" srcset="/public/images/TaskDone.png" />
            </div>
          </div>

          <div className="project">
            <div className="lefthalf">
              <p className="pname">Portfolio</p>
              <a href="https://github.com/RishikeshKarkhanis/Portfolio">Github</a>
              <a href="">Live Link</a>
            </div>
            <div className="righthalf">
              <img className='projectImg' src="Project Image" alt="ProjectImage" srcset="/public/images/Portfolio.png" />
            </div>
          </div>

        </div>

        {/* Project Container Mobile Starts */}

        <div className="projectContainerMobile" id='mobile'>

          <div className="projectMobile">
            <p className="pname">Micro-URL</p>
            <img src="Project Image" alt="Project Image" srcSet="/public/images/MicroURL.png" />
            <div className="buttonPanel">
              <a href="https://github.com/RishikeshKarkhanis/Micro-URL">Github</a>
              <a href="https://micro-url-ishy.onrender.com">Live Link</a>
            </div>
          </div>

          <div className="projectMobile">
            <p className="pname">TaskDone</p>
            <img src="Project Image" alt="Project Image" srcSet="/public/images/TaskDone.png" />
            <div className="buttonPanel">
              <a href="https://github.com/RishikeshKarkhanis/task-done">Github</a>
              <a href="https://todo-app-dnje.onrender.com">Live Link</a>
            </div>
          </div>

          <div className="projectMobile">
            <p className="pname">Portfolio</p>
            <img src="Project Image" alt="Project Image" srcSet="/public/images/Portfolio.png" />
            <div className="buttonPanel">
              <a href="https://github.com/RishikeshKarkhanis/Portfolio">Github</a>
              <a href="https://micro-url-ishy.onrender.com">Live Link</a>
            </div>
          </div>

        </div>

      </div>

      <footer>
        <a href="/about">Back</a>
        <a href="/social_links">Next</a>
      </footer>

    </div>

  );
}

export default App;
