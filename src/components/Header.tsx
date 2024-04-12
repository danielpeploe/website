import { Link } from 'react-router-dom';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import '../static/css/Header.css';

function Header() {
    return (
      <nav className='navbar navbar-expand-lg'>
      <span className='header_inner'>
        <a className='name me-auto'>C:\Users\Daniel</a>
        <div className='offcanvas offcanvas-end' tabIndex={-1} id='offcanvasNavbar' aria-labelledby='offcanvasNavbarLabel'>
        <div className='offcanvas-header'>
          <h5 className='offcanvas-title' id='offcanvasNavbarLabel'>Daniel Peploe</h5>
          <button type='button' className='btn-close' data-bs-dismiss='offcanvas' aria-label='Close'></button>
        </div>
        <div className='offcanvas-body'>
          <ul className='navbar-nav justify-content-end flex-grow-1 pe-3'>
          <li className='nav-item'>
            <Link className='nav-link mx-lg-2' aria-current='page' to='/website'>Home</Link>
          </li>
          <li className='nav-item'>
            <Link className='nav-link mx-lg-2' to='/website/projects'>Projects</Link>
          </li>
          </ul>
        </div>
        </div>
        <button className='navbar-toggler' type='button' data-bs-toggle='offcanvas' data-bs-target='#offcanvasNavbar' aria-controls='offcanvasNavbar'>
        <span className='navbar-toggler-icon'></span>
        </button>
      </span>
      </nav>
    )
}

export default Header;