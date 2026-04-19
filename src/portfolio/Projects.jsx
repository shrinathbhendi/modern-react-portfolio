import canteen from "../assets/projects/canteen.png";

const Projects = () => {
  return (
    <section id="projects" className="section">

      <h2>Projects</h2>

      <div className="projects-grid">

        <div className="project-card">

          <img
            src="https://images.unsplash.com/photo-1555066931-4365d14bab8c"
            alt="portfolio"
          />

          <h3>Developer Portfolio Website</h3>

          <p>
            A modern ReactJS portfolio with galaxy background,
            animations and responsive design.
          </p>

        </div>

        <div className="project-card">

          <img src={canteen} alt="canteen project" />

          <h3>College Canteen Management System</h3>

          <p>
            PHP and MySQL based application to manage food
            orders and menu items in college canteen.
          </p>

        </div>

      </div>

    </section>
  );
};

export default Projects;