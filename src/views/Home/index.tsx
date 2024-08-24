import "./styles.scss";
import headshot from "../../assets/headshot.jpeg";

function Home() {
  return (
    <div className="home">
      <section className="row">
        <div>
          <h1>Hi there!</h1>
          <p className="tagline">
            I'm James, an <span>expert Node.js Platform Architect</span> living in
            Denver, CO
          </p>
        </div>
        <img className="portrait" src={headshot} alt="James, sitting at his desk, wearing bright red sunglasses. his hat shades half his face but not his thick red beard" />
      </section>

      <section>
        <h2>Basics</h2>
        <ul>
          <li>26 years of programming experience</li>
          <li>12 years of providing support and working with technical, operational and engineering
          leadership</li>
          <li>10 years of hands on experience in team/project leadership roles</li>
        </ul>
      </section>
      <section>
        <h2>Specialties</h2>
        <ul role="presentation" className="skilllist">
          <li>
            <h3>Technical Leadership</h3>
            <p>
              When presented a set of constraints, known or unknown, I use data driven
              methodologies to identify present and future challenges; while
              affecting change across organizations at a micro-technical level
              using my broad experience in working through complex problems to
              find creative solutions. I intentionally impart these skills to
              teams around me to reduce organizational toil
            </p>
          </li>
          <li>
            <h3>Self-Service Developer Enablement</h3>
            <p>
              I have spent the last decade working on various aspects of the
              developer experience. Making it easy for engineers to ship code is
              something I find fun. I believe that supported engineers ship
              safer code faster improving collaboration and overall
              satisfaction. Systems that don’t frustrate engineers at the micro
              level, in my experience, correlate with project success at the
              macro level
            </p>
          </li>
          <li>
            <h3>Architecture</h3>
            <p>
              My solution engineering and enterprise architecture approach is
              people architecture; Conway’s law is used as a tool instead of a
              limitation. Handoffs are clear and precise, respecting the people
              during the process
            </p>
          </li>
        </ul>
      </section>
    </div>
  );
}

export default Home;
