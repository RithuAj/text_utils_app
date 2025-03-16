import { useEffect } from "react";
import React from "react";
import { Link } from "react-router-dom";

export default function Navbar(props) {
  useEffect(() => {
    const navItems = document.querySelectorAll(".nav-item");

    // Define a named function for the click event
    function handleClick() {
      navItems.forEach((li) => li.classList.remove("active"));
      this.classList.add("active");
    }

    // Attach event listeners
    navItems.forEach((item) => {
      item.addEventListener("click", handleClick);
    });

    // Cleanup: Remove event listeners on unmount
    return () => {
      navItems.forEach((item) => {
        item.removeEventListener("click", handleClick);
      });
    };
  }, []);

  return (
    <>
    
      <nav className={`${props.mode==='light'?'navbar navbar-expand-lg':'navbar bg-dark border-bottom border-body navbar-expand-lg  data-bs-theme=dark'}`}>
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            My Text Utils App
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 nav ">
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/" onClick>
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/aboutUs">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/textUtils">
                  Text Utils
                </Link>
              </li>
            </ul>
           
          </div>
        </div>
        <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'} `}>
          <input
            className="form-check-input"
            type="checkbox"
            role="switch"
            id="flexSwitchCheckDefault"
            onClick={props.toggleMode}
          />
          <label className="form-check-label" htmlFor="flexSwitchCheckDefault" >
            {props.mode==='dark'?'Light':'Dark'} Mode
          </label>
        </div>
      </nav>
    </>
  );
}
