import './SocialLinks.css';
import Navbar from '../../components/Navbar/Navbar';
import insta from "../../../public/images/instagram.png";
import linkedin from "../../../public/images/linkedin.png";
import twitter from "../../../public/images/twitter.png";
import github from "../../../public/images/github.png";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>

      <div className="contentPage">
        <h1>Profiles</h1>

        <div className="rootContainer">
          <div className="gridContainer">
            <a className='logo' href="https://www.instagram.com/RishikeshKarkhanis"><img src="Logo" alt="Logo" srcset={insta} /></a>
            <a className='logo' href="https://www.linkedin.com/in/rishikeshkarkhanis0101"><img src="Logo" alt="Logo" srcset={linkedin} /></a>
            <a className='logo' href="https://www.github.com/RishikeshKarkhanis"><img src="Logo" alt="Logo" srcset={github} /></a>
            <a className='logo' href="https://x.com/RishikeshK0101"><img src="Logo" alt="Logo" srcset={twitter} /></a>
          </div>
        </div>

      </div>

      <footer>
        <a href="/Portfolio/#projects">Back</a>
        <a href="/Portfolio/#contacts">Next</a>
      </footer>

    </div>
  );
}

export default App;
