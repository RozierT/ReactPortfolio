import Footer from "../components/Footer";
import { Link } from 'react-router-dom';

export default function Contact() {
  return (
    <div>
      <h1>Contact Me</h1>
    <ul>
      <li> GitHub: <Link to="https://github.com/RozierT"> https://github.com/RozierT </Link>
        </li>
      <li>LinkedIn: <Link to="https://www.linkedin.com/in/taylor-rozier-a76247105/"> https://www.linkedin.com/in/taylor-rozier</Link>
        </li>
      <li> Email: <a href="mailto:Roziertaylor@gmail.com">roziertaylor@gmail.com</a>
        </li>
    </ul>
    </div>
    
  );
}
