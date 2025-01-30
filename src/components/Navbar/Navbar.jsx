import "./Navbar.css"

function Navbar() {

  var isActive = false;

  const handleClick = () => {
      isActive = !isActive

      if (isActive) document.querySelector('.dropdownContainer').style = 'display:flex';
      if (!isActive) document.querySelector('.dropdownContainer').style = 'display:none';
  }

  return (
    <>
      <div className="Navbar">
        <button className="title">Rishikesh K.</button>
        <button className="options" onClick={handleClick}>≡</button>
      </div>

      <div className="dropdownContainer">
        <div className="dropdown">
          <ul className="dropdown_list">
            <li><a href="/Portfolio/#">Home</a></li>
            <li><a href="/Portfolio/#about">About</a></li>
            <li><a href="/Portfolio/#projects">Projects</a></li>
            <li><a href="/Portfolio/#social_links">Social Links</a></li>
            <li><a href="/Portfolio/#contacts">Contact</a></li>
          </ul>
        </div>
      </div>
    </>

  );
}

export default Navbar;
