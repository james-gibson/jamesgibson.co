import "./styles.scss";
import headshot from "../../assets/headshot.png";

function Home() {
  return (
    <div className="home">
      <section className="row">
        <div>
          <h1>Hi there!</h1>
          <p className="tagline">
            I'm James, a <span>ACTION NEEDED: ENTER INFO HERE</span> living in
            Denver, CO
          </p>
        </div>
        <img className="portrait" src={headshot} alt="" />
      </section>

      <section>
        <h2>Basics</h2>
        <ul>
          <li>26 years of programming experience</li>
          <li>
            12 years of direct experience working with technical and engineering
            leadership
          </li>
          <li>Over 10 years of providing technical and operational support</li>
          <li>8+ years of experience in team/project leadership roles</li>
        </ul>
      </section>
      <section>
        <h2>Specialties</h2>
        <ul role="presentation" className="skilllist">
          <li>
            <h3>Technical Leadership</h3>
            <p>
              Given a set of constraints, known or unknown, I use data driven
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
      {/* <section>
        <h2>Toolbox</h2>
        <p>
          <strong>Front-end:</strong> JavaScript, React, Vue, TypeScript, HTML,
          CSS, SCSS, Shopify, Zustand
        </p>
        <p>
          <strong>Back-end:</strong> Node, Express, PostgreSQL, Mongo
        </p>
        <p>
          <strong>Workflow:</strong> Git, Github, Github Actions, GitLab, Jest,
          ESLint, Stylelint, Vite, Webpack, JIRA, Trello
        </p>
        <p>
          <strong>Additional skills:</strong> Style dictionary, Figma, Design
          thinking, Systems thinking, Branding, Procreate, GIMP, Headshot
          photography
        </p>
      </section>
      <section>
        <h2>What else?</h2>
        <ul className="skilllist">
          <li>
            <strong>What do you get up to outside of work?</strong> I am a
            nature nerd, and enjoy regenerative gardening, birding, and nature
            photography. In the colder months, I am fond of video games and
            making art.
          </li>
        </ul>
      </section> */}
    </div>
  );
}

export default Home;
