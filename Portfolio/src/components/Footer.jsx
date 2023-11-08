import { Link } from 'react-router-dom';

function Footer() {

  return (
    <ul className="footer">
      <li className="footer-item">
        <Link
          to="https://github.com/RozierT"
        >
          GitHub
        </Link>
      </li>
      <li className="footer-item">
        <Link
          to="https://www.linkedin.com/in/taylor-rozier-a76247105/"
        >
          LinkedIn
        </Link>
      </li>
    </ul>
  );
}

export default Footer;
