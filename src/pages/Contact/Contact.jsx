import './Contact.css';
import Navbar from '../../components/Navbar/Navbar';
import emailjs from "@emailjs/browser";

function SendMail() {
  const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const userId = import.meta.env.VITE_EMAILJS_USER_ID;
  const msg = document.getElementById('msg').value;
  const sender = document.getElementById('email').value;

  emailjs.send(
    import.meta.env.VITE_EMAILJS_SERVICE_ID,
    import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
    {
      from_name: sender,
      to_name: "Rishikesh",
      message: "Hello, this is a test email!",
      reply_to: sender,
    },
    import.meta.env.VITE_EMAILJS_USER_ID
  )
    .then((response) => {
      console.log("Email sent!", response);
    })
    .catch((error) => {
      console.error("Error sending email:", error);
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
