import '../css/navbar.css';

const Navbar = () => {
      return (
        <nav className="navbar">
          <div className="navbar-logo">
            <a href="/">
              <img src="/assets/images/Logo_Silver_Black.png" alt="Aadhya Logo" className="logo-image" />
            </a>
          </div>
          {/* Center Links */}
          <div className="navbar-links">
            <a href="#game">GAME</a>
            <a href="#about">WHO WE ARE</a>
          </div>
          <div className="navbar-links">
            <a href="#contact">CONTACT US</a>
          </div>
        </nav>
      );
    };
export default Navbar;