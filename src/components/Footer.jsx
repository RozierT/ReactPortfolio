import { Link } from 'react-router-dom';
import Github from '../assets/images/github.png';
import LinkedIn from '../assets/images/linkedin.png';

function Footer() {

  return (
    <div className="d-flex flex-column vh-100 justify-content-end align-items-center">
      <div className="row">
        <div className="col-sm text-center">
          <div className="card bg-transparent border-0">
            <Link to="https://github.com/RozierT">
              <img src={Github} style={{maxHeight:50}}/>
            </Link>
          </div>
        </div>
        <div className="col-sm text-center">
          <div className="card bg-transparent border-0">
            <Link to="https://www.linkedin.com/in/taylor-rozier-a76247105/">
              <img src={LinkedIn} style={{maxHeight:50}}/>
            </Link>
          </div>
        </div>
        <div className="col-sm text-center">
          <div className="card bg-transparent border-0">
            Email: <a href="mailto:Roziertaylor@gmail.com">roziertaylor@gmail.com</a>
          </div>
        </div>
      </div>
    </div>
  );
  
  
}

export default Footer;
