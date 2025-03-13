import { FaGithub } from "react-icons/fa";
import "../styles/Credit.css";

function Credit() {
  return (
    <div className="credit-container">
      <a href="https://github.com/hilu03/CV-Application" className="credit-link">
        <FaGithub className="github-icon"/>
        <div><i>&copy;hilu03</i></div>
      </a>
      <h1>CV Application</h1>
      
    </div>
  );
}

export default Credit;