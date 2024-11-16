import React, { useState } from "react";
import "./navbar.css";
import { Link, useLocation } from "react-router-dom";
import { IconMenu2, IconX } from "@tabler/icons-react";

const Navbar = ({ setSearch }) => {
  const [nav, setNav] = useState(false);
  const location = useLocation();
  const handleSearch = (event) => {
    setSearch(event.target.value);
  };

  const toggleNav = () => {
    setNav(!nav);
  };

  const navItems = ["Dashboard", "Important", "Completed", "In Progress"];

  const isActive = (path) => {
    return location.pathname === `/${path.toLowerCase().replace(" ", "")}`;
  };

  return (
    <>
      <nav>
        {/* Mobile Navigation */}
        <div className={`mobile-navbar ${nav ? "open-nav" : ""}`}>
          <div onClick={toggleNav} className="mobile-navbar__close">
            <IconX width={30} height={30} />
          </div>
          <ul className="mobile-navbar__links">
            {navItems.map((item, index) => (
              <li key={index}>
                <Link
                  onClick={toggleNav}
                  to={`/${item.toLowerCase().replace(" ", "")}`}
                  className={isActive(item) ? "active-link" : ""}
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Desktop Navigation */}
        <div className="nav">
          <div className="navbar">
            <div className="navbar__logo">
              <Link to="/dashboard" onClick={() => window.scrollTo(0, 0)}>
                <p>
                  Task<span>manager</span>
                </p>
              </Link>
            </div>
            <ul className="navbar__links">
              {navItems.map((item, index) => (
                <li key={index}>
                  <Link
                    to={`/${item.toLowerCase().replace(" ", "")}`}
                    className={isActive(item) ? "active-link" : ""}
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
            <div>
              <input
                type="text"
                placeholder="Serach task"
                className="input"
                onChange={handleSearch}
              />
            </div>
            {/* Mobile Hamburger Icon */}
            <div className="mobile-hamb" onClick={toggleNav}>
              <IconMenu2 width={30} height={30} />
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
