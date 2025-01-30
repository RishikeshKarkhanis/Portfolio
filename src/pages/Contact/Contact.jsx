import './Contact.css';
import Navbar from '../../components/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>

      <div className="contentPage">
        <h1>Contact Me!</h1>

        <form className='contactForm'>
          <input type="email" name="email" id="email" placeholder='Email' />
          <textarea name="msg" id="msg" cols="30" rows={10} placeholder='Enter Your Message Here'></textarea>
          <button type="submit">Submit</button>
        </form>

      </div>

      <footer>
        <a href="/social_links">Back</a>
      </footer>

    </div>
  );
}

export default App;
