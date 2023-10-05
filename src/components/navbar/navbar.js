import "./navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <nav>
        <h1>kin.dev</h1>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Projects</li>
          <li>Contact</li>
        </ul>
        <div class="bar">
          <div class="bar1"></div>
          <div class="bar2"></div>
          <div class="bar3"></div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
