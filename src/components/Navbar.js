import React, { useState } from 'react';

import { Link } from 'react-router-dom';

function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => {
    setClick(!click);
  };

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo">
            TRLV <i className="fab fa-typo3"></i>
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? 'fa-times' : 'fa-solid fa-bars'} />
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
