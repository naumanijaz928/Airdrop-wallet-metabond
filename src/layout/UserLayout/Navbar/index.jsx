import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "../../../assets/Images/logo.png";
import dropdownIcon from "../../../assets/Images/dropdownicon.png";
import userAvatar from "../../../assets/Images/User_avatar.png";
import './styles.scss'
const index = () => {
  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-light bg-white">
        <div className="container-fluid">
          <NavLink className="navbar-brand" to="/">
            <img src={Logo} alt="img" />
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo02"
            aria-controls="navbarTogglerDemo02"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item me-5">
                <NavLink
                  className="nav-link active"
                  aria-current="page"
                  to="/"
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item me-5">
              <NavLink
                  className="nav-link active"
                  aria-current="page"
                  to="/blog"
                >
                  Blog
                </NavLink>
              </li>
              <li className="nav-item me-5">
              <NavLink
                  className="nav-link active"
                  aria-current="page"
                  to="/about"
                >
                  About us
                </NavLink>
              </li>
            </ul>
            <div className="d-flex rightBtns">
              <img src={userAvatar} alt="" style={{marginRight:'10px'}}/>
              <button className="btn btn-outline me-4 firstbtn" type="submit">
                Join the whitelist
              </button>
              <button className="btn btn-outline me-2 secondbtn" type="submit">
                Shedule a call
              </button>
            </div>
          </div>
        </div>
      </nav>
      {/* <nav className="bg-white">
        <div className="navbarData">
          <div className="logo">
            <NavLink className="navbar-brand" to="/">
              <img src={Logo} alt="img" />
            </NavLink>
          </div>

          <div className="btns">
            <div id="coloredBtn" className="rightBtns">
              <button className="btn btn-outline me-3 secondbtn">
                Connect Wallet
              </button>
            </div>
            <div className="rightBtns">
              <button className="btn btn-outline me-3 firstbtn" >
                Olga Laprotova <img src={dropdownIcon} />
              </button>

            </div>

          </div>
        </div>
      </nav> */}
    </>
  );
};

export default index;
