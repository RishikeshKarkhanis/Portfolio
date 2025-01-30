import './Home.css';
import Navbar from '../../components/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>

      <div className="contentPage">
        <img src="ProfilePicture" alt="Rishikesh Karkhanis" srcset="/images/linkedin_profile.png" />
        <div className="desc">
          <h1 className='nametag'>I'm "Rishikesh Karkhanis"</h1>
          <p>Student @ Acropolis Institute Of Technology & Research, Indore</p>
          <p>Pursuing B-Tech (CSE-AIML)</p>
        </div>
      </div>

      <footer>
        <a href="/Portfolio/#/about">Next</a>
      </footer>
    </div>
  );
}

export default App;
