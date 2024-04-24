import { Link } from 'react-router-dom';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import '../static/css/Header.css';

function Header() {
  function toggleMode() {
    const selectors = [
      'body',
      '.navbar',
      '.offcanvas',
      '.nav-item',
      '.nav-link',
      '.card'
    ];
    
    for (const selector of selectors) {
      const elements = document.querySelectorAll(selector);
      if (elements) {
        Array.from(elements).forEach((item) => {
          if (selector === 'body' || selector === '.navbar' || selector === '.offcanvas') {
            item.classList.toggle("light-mode");
          } else {
            item.classList.toggle("lightmode");
          }
        });
      }
    }
  }


  return (
    <nav className='navbar navbar-expand-lg'>
      <span className='header_inner'>
        <p className='name me-auto'>C:\Users\Daniel</p>
        <div className='offcanvas offcanvas-end' tabIndex={-1} id='offcanvasNavbar' aria-labelledby='offcanvasNavbarLabel'>
        <div className='offcanvas-header'>
          <h5 className='offcanvas-title' id='offcanvasNavbarLabel'>Daniel Peploe</h5>
          <button type='button' className='btn-close' data-bs-dismiss='offcanvas' aria-label='Close'></button>
        </div>
        <div className="offcanvas-body">
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
        <p className="toggle-dark-mode" onClick={toggleMode}>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-circle-half" viewBox="0 0 16 16">
            <path d="M8 15A7 7 0 1 0 8 1zm0 1A8 8 0 1 1 8 0a8 8 0 0 1 0 16"/>
          </svg>
        </p>
        <button className='navbar-toggler' type='button' data-bs-toggle='offcanvas' data-bs-target='#offcanvasNavbar' aria-controls='offcanvasNavbar'>
        <span className='navbar-toggler-icon'></span>
        </button>
      </span>
    </nav>
  )
}

export default Header;