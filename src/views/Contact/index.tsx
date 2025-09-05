import "./styles.scss";
import Quote from "./Quote";
import EnhancedQuote from "./EnhancedQuote";

function Contact() {
  return (
    <div className="contact">
      <h1>Find me</h1>

      <a href="https://www.linkedin.com/in/jameswgibsonjr/">
        <p>
          <strong>LinkedIn</strong>
        </p>
      </a>
      <a href="mailto:james.the.nodester@gmail.com?subject=jamesgibson.co">
        <p>
          <strong>Gmail</strong>
        </p>
      </a>
      <a href="https://github.com/james-gibson">
        <p>
          <strong>GitHub</strong>
        </p>
      </a>
      <EnhancedQuote gistUrl='https://gist.githubusercontent.com/james-gibson/7d8ea6bb5166e5f04cb38d71fec25a68/raw' />
    </div>
  );
}

export default Contact;
