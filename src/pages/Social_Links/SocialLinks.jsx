import './SocialLinks.css';
import Navbar from '../../components/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>

      <div className="contentPage">
        <h1>Social Links</h1>

        <div className="rootContainer">
          <div className="gridContainer">
            <a className='logo' href="https:/www.instagram.com/RishikeshKarkhanis"><img src="Logo" alt="Logo" srcset="/public/images/instagram.png" /></a>
            <a className='logo' href="https:/www.linkedin.com/in/rishikeshkarkhanis0101"><img src="Logo" alt="Logo" srcset="/public/images/linkedin.png" /></a>
            <a className='logo' href="https:/www.github.com/RishikeshKarkhanis"><img src="Logo" alt="Logo" srcset="/public/images/github.png" /></a>
            <a className='logo' href="https://x.com/RishikeshK0101"><img src="Logo" alt="Logo" srcset="/public/images/twitter.png" /></a>
          </div>
        </div>

      </div>

      <footer>
        <a href="/projects">Back</a>
        <a href="/contacts">Next</a>
      </footer>

    </div>
  );
}

export default App;
