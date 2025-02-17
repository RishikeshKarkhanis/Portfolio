import './Projects.css';
import Navbar from '../../components/Navbar/Navbar';
import mu from "../../../public/images/MicroURL.png";
import td from "../../../public/images/TaskDone.png";
import pf from "../../../public/images/Portfolio.png";
import npf from "../../../public/images/npf.png"
import qr from "../../../public/images/qr.png"
import mn from "../../../public/images/mn.png";
import CardDesktop from '../../components/CardDesktop/CardDesktop';
import CardMobile from '../../components/CardMobile/CardMobile';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>

      <div className="contentPage">
        <h1>Projects</h1>

        <div className="projectContainer" id='pc'>

          <CardDesktop
            pname="Micro-URL" desc="A URL shortener app that takes long URLs and converts them into shortened, shareable links."
            img={mu} gh="https://github.com/RishikeshKarkhanis/Micro-URL"
            ll="https://micro-url-ishy.onrender.com">
          </CardDesktop>

          <CardDesktop
            pname="TaskDone" desc="A simple to-do app that allows users to create, update, and manage tasks with ease."
            img={td} gh="https://github.com/RishikeshKarkhanis/task-done"
            ll="https://todo-app-dnje.onrender.com">
          </CardDesktop>


          <CardDesktop
            pname="QR Code Generator" desc="A simple and efficient tool that allows users to generate QR codes from any text input."
            img={qr} gh="https://github.com/RishikeshKarkhanis/QR-GEN"
            ll="">
          </CardDesktop>

          <CardDesktop
            pname="My-Note" desc="A note-taking app that enables multiple users to save and manage notes."
            img={mn} gh="https://github.com/RishikeshKarkhanis/my-note-backend"
            ll="">
          </CardDesktop>

          <CardDesktop
            pname="Portfolio" desc="A personal website showcasing my skills, projects, and achievements in full-stack development, AI/ML, and more."
            img={npf} gh="https://github.com/RishikeshKarkhanis/Portfolio"
            ll="https://rishikeshkarkhanis.github.io/Portfolio/#/">
          </CardDesktop>
        </div>

        {/* Project Container Mobile Starts */}

        <div className="projectContainerMobile" id='mobile'>

          <CardMobile
            pname="Micro-URL" desc="A URL shortener app that takes long URLs and converts them into shortened, shareable links."
            img={mu} gh="https://github.com/RishikeshKarkhanis/Micro-URL"
            ll="https://micro-url-ishy.onrender.com">
          </CardMobile>

          <CardMobile
            pname="TaskDone" desc="A URL shortener app that takes long URLs and converts them into shortened, shareable links."
            img={td} gh="https://github.com/RishikeshKarkhanis/task-done"
            ll="https://todo-app-dnje.onrender.com">
          </CardMobile>


          <CardMobile
            pname="QR Code Generator" desc="A URL shortener app that takes long URLs and converts them into shortened, shareable links."
            img={qr} gh="https://github.com/RishikeshKarkhanis/QR-GEN"
            ll="">
          </CardMobile>

          <CardMobile
            pname="My-Note" desc="A URL shortener app that takes long URLs and converts them into shortened, shareable links."
            img={mn} gh="https://github.com/RishikeshKarkhanis/my-note-backend"
            ll="">
          </CardMobile>

          <CardMobile
            pname="Portfolio" desc="A URL shortener app that takes long URLs and converts them into shortened, shareable links."
            img={npf} gh="https://github.com/RishikeshKarkhanis/Portfolio"
            ll="https://rishikeshkarkhanis.github.io/Portfolio/#/">
          </CardMobile>
        </div>

      </div>

      <footer>
        <a href="/Portfolio/#skills">Back</a>
        <a href="/Portfolio/#social_links">Next</a>
      </footer>

    </div>

  );
}

export default App;
