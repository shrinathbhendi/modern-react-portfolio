const Navbar = () => {
  return (
    <nav className="navbar">
      <h2 className="logo">Shri Portfolio</h2>

      <div className="nav-links">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#tech">Skills</a>
        <a href="#soft">Soft Skills</a>
        <a href="#cert">Certifications</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </div>
    </nav>
  );
};

export default Navbar;