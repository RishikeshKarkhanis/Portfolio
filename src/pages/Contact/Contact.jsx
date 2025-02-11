import './Contact.css';
import Navbar from '../../components/Navbar/Navbar';

function SendMail() {
  const email = import.meta.env.VITE_EMAIL;
  const pass = import.meta.env.VITE_PASS;
  const msg = document.getElementById('msg').value;
  const sender = document.getElementById('email').value;

  console.log(email);
  console.log(pass);
  
  
    
  Email.send({
    Host: "smtp.gmail.com",
    Username: email,
    Password: pass,
    To: 'rishikeshkarkhanis0101@gmail.com',
    From: sender,
    Subject: "Message From Portfolio",
    Body: msg,
  })
    .then(function (message) {
      alert("mail sent successfully")
    });
}

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>

      <div className="contentPage">
        <h1>Contact Me!</h1>

        <div className='contactForm'>
          <input type="email" name="email" id="email" placeholder='Email' />
          <textarea name="msg" id="msg" cols="30" rows={10} placeholder='Enter Your Message Here'></textarea>
          <button onClick={SendMail}>Submit</button>
        </div>

      </div>

      <footer>
        <a href="/Portfolio/#social_links">Back</a>
      </footer>

    </div>
  );
}

export default App;
