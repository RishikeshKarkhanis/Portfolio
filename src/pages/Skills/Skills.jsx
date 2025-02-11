import './Skills.css';
import Navbar from '../../components/Navbar/Navbar';
import java from "../../../public/images/java.png";
import python from "../../../public/images/py.png";
import mdb from "../../../public/images/mdb.png";
import js from "../../../public/images/js.png";
import cpp from "../../../public/images/cpp.png";
import html from "../../../public/images/html.png";
import css from "../../../public/images/css.png";
import react from "../../../public/images/react.png";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>

      <div className="contentPage">
        <h1>Skills</h1>

        <div className="rootContainer">
          <div className="gridContainer">
            <a className='logo_skill'><img src="Logo" alt="Logo" srcset={java} /></a>
            <a className='logo_skill'><img src="Logo" alt="Logo" srcset={python} /></a>
            <a className='logo_skill'><img src="Logo" alt="Logo" srcset={mdb} /></a>
            <a className='logo_skill'><img src="Logo" alt="Logo" srcset={cpp} /></a>
            <a className='logo_skill'><img src="Logo" alt="Logo" srcset={js} /></a>
            <a className='logo_skill'><img src="Logo" alt="Logo" srcset={html} /></a>
            <a className='logo_skill'><img src="Logo" alt="Logo" srcset={css} /></a>
            <a className='logo_skill'><img src="Logo" alt="Logo" srcset={react} /></a>
            
          </div>
        </div>

      </div>

      <footer>
        <a href="/Portfolio/#about">Back</a>
        <a href="/Portfolio/#projects">Next</a>
      </footer>

    </div>
  );
}

export default App;
