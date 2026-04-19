import { FaJava, FaHtml5, FaCss3Alt, FaJs, FaReact, FaDatabase } from "react-icons/fa";

const TechnicalSkills = () => {
  return (
    <section id="tech" className="section">

      <h2>Technical Skills</h2>

      <div className="skills-grid">

        <div className="skill">
          <FaJava size={40} color="#f89820"/>
          <h3>Java</h3>
        </div>

        <div className="skill">
          <FaHtml5 size={40} color="#e34c26"/>
          <h3>HTML</h3>
        </div>

        <div className="skill">
          <FaCss3Alt size={40} color="#264de4"/>
          <h3>CSS</h3>
        </div>

        <div className="skill">
          <FaJs size={40} color="#f7df1e"/>
          <h3>JavaScript</h3>
        </div>

        <div className="skill">
          <FaReact size={40} color="#61DBFB"/>
          <h3>ReactJS</h3>
        </div>

        <div className="skill">
          <FaDatabase size={40} color="#4db33d"/>
          <h3>MySQL</h3>
        </div>

      </div>

    </section>
  );
};

export default TechnicalSkills;