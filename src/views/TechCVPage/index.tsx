import { Link } from "react-router-dom";
import bvr1 from "../../assets/bvr-diag-spread.png";
import bvr2 from "../../assets/bvr-builderSpread.png";
import dst1 from "../../assets/dst-documentation.png";
import dst2 from "../../assets/proto6.png";

// import resume from "../../assets/VKraucunas_2024_Resume_web.pdf";
import "./styles.scss";

function EngCVPage() {
  return (
    <div className="cvpage">
      <div className="top">
        <h1>Work Log</h1>
        <a
          download
          // href={resume}
          href="#"
        >
          <h2>Resume</h2>
        </a>
      </div>
      <section>
        <h2>Platform Engineering</h2>
        <ul>
          <li>
            Oversaw CI/CD pipeline management to improve overall system
            performance and reduce cycle time
          </li>
          <li>
            Taught high velocity DevOps practices to a team of six
            </li>
              <li>Self service vs White Glove models</li>
              <li>
                Asynchronous through documentation by default to support an
                international set of clients
              </li>
              <li>
                Sentry / Open Telemetry for application and Github Action
                metrics
              </li>
              <li>
                Used automation to streamline Slack channel introductions,
                sharing helpfull documentation with ne clients and GitHub issue
                and Pull Request labelling
              </li>
              <li>
                As Platform Architect, I had to communicate effectively with
                stakeholders across key business areas such as Identity
                Management, Marketing and Customer Services, Salesforce /
                Informatica Integrations, Cloud Infrastructure and Deployments,
                SaaS Billing calculations
              </li>
              <li>
                Comfortable acting as primary point of contact for community
                needs and concerns
              </li>
        </ul>
      </section>
      <section>
        <h2>Graph Engineering</h2>
        <p>Designed a code-first federated GraphQL system using Nest.js</p>
        <ul>
          <li>29 Subgraphs</li>
          <li>500+ types</li>
          <li>2,000+ fields</li>
          <li>Four separate environments</li>
          <li>
            Converted existing Graph mesh into spec-compliant Federated GQL
          </li>
        </ul>
        <p>
          Fostered a collaborative team culture through encouragement of open
          communication and shorter feedback loops
        </p>
      </section>
      <section>
        <h2>Node Engineering</h2>
        <ul>
          <li>
            Un-recursed project dependencies from a bloated 1.3 million node
            modules down to 45 thousand while maintaining shipping capabilities in a live
            environment
          </li>
          <li>
            Maintained code bases containing 0 - 150 modules
            <ul>
              <li>
                Standardized format with automated linting and static review
              </li>
              <li>Cached build artifacts for build, lint, test stages </li>
              <li>
                Implemented testing that verified project configuration to
                prevent drift
              </li>
            </ul>
          </li>
        </ul>
      </section>
    </div>
  );
}

export default EngCVPage;
