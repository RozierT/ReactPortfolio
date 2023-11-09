import { Link, useLocation } from 'react-router-dom';

// Here we are using object destructuring assignment to pluck off our variables from the props object
// We assign them to their own variable names
function NavTabs() {
  const currentPage = useLocation().pathname;

  return (
    <nav className="navbar navbar-expand-lg bg-dark border-bottom border-body" data-bs-theme="dark">
  <div className="container-fluid">
    <h1 className="navbar-brand">Taylor Rozier</h1>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarText">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
        <Link to="/"className={currentPage === '/' ? 'nav-link active' : 'nav-link'}>
          About
        </Link>
        </li>
        <li className="nav-item">
        <Link to="/Portfolio"className={currentPage === '/Blog' ? 'nav-link active' : 'nav-link'}>
          Portfolio
        </Link>
        </li>
        <li className="nav-item">
        <Link to="/Contact"className={currentPage === '/Contact' ? 'nav-link active' : 'nav-link'}>
          Contact
        </Link>
        </li>
        <li className="nav-item">
        <Link to="/Resume"className={currentPage === '/Resume' ? 'nav-link active' : 'nav-link'}>
          Resume
        </Link>
        </li>
      </ul>
      <span className="navbar-text">
        Full Stack Web Developer
      </span>
    </div>
  </div>
</nav>


    // <ul className="nav nav-tabs">
    //   <li className="nav-item">
    //     Taylor Rozier
    //     </li>
    //   <li className="nav-item">
    //     <Link
    //       to="/"
    //       className={currentPage === '/' ? 'nav-link active' : 'nav-link'}
    //     >
    //       About
    //     </Link>
    //   </li>
    //   <li className="nav-item">
    //     <Link
    //       to="/Portfolio"
    //       className={currentPage === '/Blog' ? 'nav-link active' : 'nav-link'}
    //     >
    //       Portfolio
    //     </Link>
    //   </li>
    //   <li className="nav-item">
    //     <Link
    //       to="/Contact"
    //       className={currentPage === '/Contact' ? 'nav-link active' : 'nav-link'}
    //     >
    //       Contact
    //     </Link>
    //   </li>
    //   <li className="nav-item">
    //     <Link
    //       to="/Resume"
    //       className={currentPage === '/Resume' ? 'nav-link active' : 'nav-link'}
    //     >
    //       Resume
    //     </Link>
    //   </li>
    // </ul>
  );
}

export default NavTabs;
