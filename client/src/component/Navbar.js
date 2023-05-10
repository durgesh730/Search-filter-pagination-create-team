import React, { useState } from 'react'
import "../style/navbar.css"
import { FaBars } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { BsArrowReturnLeft } from 'react-icons/bs';

const Navbar = () => {
  var [isShown] = useState(false);

  const handleClick = () => {
    if (isShown === false) {
      document.getElementById('SideNav').style.width = "170px"
      isShown = true;
    } else {
      document.getElementById('SideNav').style.width = "0px"
      isShown = false;
    }
  };

  const CloseNav = () => {
    document.getElementById('SideNav').style.width = "0px"
  }


  return (
    <>
      <div className='Navbar'>
        <div className='container'>
          <nav>
            <div className='logo'><Link to="/" >Haliverse</Link></div>
            <div className='RightNav'>
              <Link to='/'>Home</Link>
              <Link to='/cart'>Created Team</Link>
              <span className='Bars' onClick={handleClick}><FaBars /></span>
            </div>
          </nav>
        </div>

        <div className='Sidenav' id='SideNav'>
          <span onClick={CloseNav} id="Close" style={{ fontSize: "1.5rem" }} ><BsArrowReturnLeft /></span>
          <Link to='/'>Home</Link>
          <Link to='/cart'>Created Team</Link>
        </div>
      </div>
    </>
  )
}

export default Navbar
