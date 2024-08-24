import "./styles.scss";

function ExecCVPage() {
  return (
    <div className="leadershipcv">
      <h1>Leadership Experience</h1>
      <section>
        <h2>Presence</h2>
        <ul>
          <li>
            I promote a culture of asynchronous knowledge sharing to globally
            distributed consumers
          </li>
          <li>Customer-focused approach; driven to enhance user experience</li>
          <li>
            Very experienced working with cross-functional teams to build common
            processes and integrations
          </li>
          <li>
            Skilled at defining new or updating existing KPIs/SLAs to monitor and drive business
            objectives
          </li>
          <li>
            My teacher mentality enables me to reach audiences both
            internal and external ranging from non technical executives to technical
            junior engineers
          </li>
        </ul>
      </section>
      <section>
        <h2>Applied Risk Management</h2>
        <ul>
          <li>
            I leverage the breadth of my technical background and knowledge to
            dive as deep into the stack as needed to understand or resolve
            technical issues
          </li>
          <li>
            When deleveraging risk is not an option I utilize my meticulous
            nature and perform changes with surgical precision; However because
            this is inherently unscalable I use each instance as a chance to
            improve runbook coverage or automation enhancements
          </li>
          <li>
            I design systems that encourage ease of refactor, pipelines that
            instill confidence, and deployment processes that allow for safe
            experimentation
          </li>
          <li>
            I embed security best practices into the development workflow and
            use automated compliance checks, ensuring adherence to industry
            standards and regulations
          </li>
          <li>
            Static review of pull requests enabled rapid iteration and
            deployment feedback
          </li>
        </ul>
      </section>
      <section>
        <h2>Performance</h2>

        <p>
          I lead multiple complex technical initiatives at disparate levels such
          as:
        </p>
        <h3>Application</h3>
        <ul>
          <li>Measuring latency reduction using Lighthouse</li>
          <li>Increasing throughput (0 - 100k rpm)</li>
          <li>
            Shrinking bundle size and enabling dynamic HTTP2 prefetch headers
          </li>
          <li>Event driven CQRS design</li>
        </ul>
        <h3>Deployment</h3>
        <ul>
          <li>Improving build times </li>
          <li>Strengthening runtime safety </li>
          <li>
            Limit storage costs while speeding up full cluster deployments{" "}
          </li>
          <li>Distributed artifact caching </li>
          <li>Dynamically generating Helm charts</li>
        </ul>
        <h3>Development</h3>
        <ul>
          <li>Improving local and CI runtime performance</li>
          <li>Load testing with K6s</li>
        </ul>
      </section>
      <section>
        <h2>Cost Management</h2>
        <ul>
          <li>
            Using A\B and dark launching practices I’ve successfully led
            experimentations into new software designs for budget forecasting
            and risk management before committing additional personnel
          </li>
          <li>
            Reduced project costs by transitioning from a custom GraphQL viewer
            to cloud hosted GraphOS
          </li>
          <li>
            Utilized data analytics to reduce inefficient and slow build
            processes leading to targeted improvements at all levels of dev
            experience
          </li>
        </ul>
      </section>
      <section>
        <h2>Educational Experience</h2>
        <ul>
          <li>
            Community taught engineer who has held positions in Fortune 50 and
            smaller
          </li>
          <li>Volunteered as community administrator/moderator for 6 years</li>
          <li>
            Running successful Minecraft servers for three years started my
            infrastructure learning journey
          </li>
        </ul>
      </section>
    </div>
  );
}

export default ExecCVPage;
