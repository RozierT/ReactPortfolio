import { Link } from 'react-router-dom';

function Footer() {

  return (
    <div>
    <ul>
      <li> GitHub: <Link to="https://github.com/RozierT"> GitHub </Link>
        </li>
      <li>LinkedIn: <Link to="https://www.linkedin.com/in/taylor-rozier-a76247105/"> LinkedIn</Link>
        </li>
      <li> Email: <a href="mailto:Roziertaylor@gmail.com">roziertaylor@gmail.com</a>
        </li>
    </ul>
    </div>
  );
}

export default Footer;
