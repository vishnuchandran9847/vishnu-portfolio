import React, { useState } from "react";
import "./Navbar.css";
import logo from "../../Assets/kisspng-logo.png";
import { BsChatLeft } from "react-icons/bs";

import { FaAlignRight } from "react-icons/fa";

import { Link } from "react-scroll";
const Navbar = () => {
  const[showMenu, setshowMenu]=useState(false);
  return (
    <nav className="Navbar">
      <img src={logo} alt="Logo" className="logo" width={100} />
      <div className="desktopMenu">
        <Link activeClass="active" to="Intro" spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuListItems">Home</Link>
        <Link activeClass="active" to="Skills" spy={true} smooth={true} offset={-75} duration={500} className="desktopMenuListItems">About</Link>
        <Link activeClass="active" to="Works" spy={true} smooth={true} offset={-75} duration={500} className="desktopMenuListItems">Portfolio</Link>
        <Link activeClass="active" to="Clients" spy={true} smooth={true} offset={-75} duration={500} className="desktopMenuListItems">Clients</Link>
      </div>

      <button className="desktopMenuBtn" onClick={()=>{
        document.getElementById('Contact').scrollIntoView({behavior:"smooth"});
      }}>
        {/* <img src="" alt="" className="desktopMenuImg" /> */}
        <BsChatLeft />
        Contact Me
      </button>

      {/* <img src={Menu} alt="Menu" className="mobMenu" width={100} /> */}
      <Link className="mobMenu" onClick={()=>setshowMenu(!showMenu)}><FaAlignRight /></Link>
      <div className="navMenu" style={{'display':showMenu? 'flex':"none"}}>
        <Link activeClass="active" to="Intro" spy={true} smooth={true} offset={-100} duration={500} className="listItems" onClick={()=>setshowMenu(false)}>Home</Link>
        <Link activeClass="active" to="Skills" spy={true} smooth={true} offset={-75} duration={500} className="listItems" onClick={()=>setshowMenu(!showMenu)}>About</Link>
        <Link activeClass="active" to="Works" spy={true} smooth={true} offset={-75} duration={500} className="listItems" onClick={()=>setshowMenu(!showMenu)}>Portfolio</Link>
        <Link activeClass="active" to="Clients" spy={true} smooth={true} offset={-75} duration={500} className="listItems" onClick={()=>setshowMenu(!showMenu)}>Clients</Link>
        <Link activeClass="active" to="Contact" spy={true} smooth={true} offset={-75} duration={500} className="listItems" onClick={()=>setshowMenu(!showMenu)}>Contact</Link>
      </div>


    </nav>
  );
};
export default Navbar;
