import './Projects.css';
import Navbar from '../../components/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>

      <div className="contentPage">
        <h1>Projects</h1>
        <div className="projectContainer">

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
              <a href="https://github.com/RishikeshKarkhanis/Micro-URL">Github</a>
              <a href="">Live Link</a>
            </div>
            <div className="righthalf">
              <img className='projectImg' src="Project Image" alt="ProjectImage" srcset="/public/images/Portfolio.png" />
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
