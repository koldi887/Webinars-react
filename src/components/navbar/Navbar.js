import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import './nav_css/Navbar.css';
import Dropdown from './Dropdown';
import img from './logo.png'
import {DropdownData} from "./DropdownData";

function Navbar() {
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const [active, setActive] = useState(null)

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const onMouseEnter = (item) => {
    setActive(item.title)

    if (window.innerWidth < 1020) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 1020) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };

  return (
      <>
        <nav className='navbar'>

          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            <img src={img} className='navbar-logo' alt=""/>
          </Link>

          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'}/>
          </div>

          <ul className={click ? 'nav-menu active links-menu' : 'nav-menu'}>

            {DropdownData.map((item, index) => (
                    <li
                        className={'nav-item'}
                        onMouseEnter={() => onMouseEnter(item)}
                        onMouseLeave={onMouseLeave}
                        key={index}
                    >
                      <p
                          className='nav-links'
                          onClick={closeMobileMenu}
                      >
                        {item.title} <i className='fas fa-angle-down'/>
                      </p>

                      {dropdown && <Dropdown
                          hideClass={active === item.title ? '' : 'menu-icon'}
                          subNav={item.subNav}
                      />}
                    </li>
                )
            )}
            <li
                className={'nav-item'}
            >
              <Link
                  to={'/pricing'}
                  className='nav-links'
                  onClick={closeMobileMenu}
              >
                Pricing
              </Link>
            </li>

          </ul>

          <ul
              className={click ? 'nav-menu active sign-menu' : 'nav-menu'}
              style={{top: '736px'}}
          >
            <li className='nav-item'>
              <Link
                  to='/contact-us'
                  className='nav-links nav-links-login'
                  onClick={closeMobileMenu}
              >
                <strong>Log in</strong>
              </Link>
            </li>

            <li className='nav-item'>
              <Link
                  to='/'
                  className='buttons nav-item-btn links'
                  onClick={closeMobileMenu}
              >
                Start Free Trial
              </Link>
            </li>
          </ul>

        </nav>
      </>
  );
}

export default Navbar;
