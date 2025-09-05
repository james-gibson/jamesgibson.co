import "./App.scss";
import { Link, BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./views/Home";
import TechCVPage from "./views/TechCVPage";
import ExecCVPage from "./views/ExecCVPage";
import Contact from "./views/Contact";
import Why from "./views/Why";

function App() {
  return (
    <Router>
      <Link id="skiplink" to="#maincontent">
        Skip to main content
      </Link>
      <header>
        <Link to="/why">why</Link>
        <Link to="/">JG</Link>
        <nav>
          <Link to="/cv-technical">engineering</Link>
          <Link to="/cv-executive">leadership</Link>
          <Link to="/contact">contact</Link>
        </nav>
      </header>
      <main id="maincontent" className="content-grid">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/why" element={<Why />} />
          <Route path="/cv-technical" element={<TechCVPage />} />
          <Route path="/cv-executive" element={<ExecCVPage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </main>
      <footer className="content-grid">
        <p>
          {`${new Date().getFullYear()}`} James Gibson
        </p>
      </footer>
    </Router>
  );
}

export default App;
