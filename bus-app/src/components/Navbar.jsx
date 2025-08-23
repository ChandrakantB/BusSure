import React, { useState } from "react";
import './Navbar.css';
import UserMenu from "./UserMenu";
import { useAuth } from "../context/AuthContext";

function Navbar({ onLoginClick, onSignupClick }) {
  const { user } = useAuth(); // 🔑 Access user from AuthContext

  

  return (
    <nav className={"navbar navbar-expand-lg navbar-dark bg-light"}>
      <div className="container-fluid">
        <a className="navbar-brand fw-bold fs-4 text-primary" href="/">
          🚌 BusSure
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarContent"
          aria-controls="navbarContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse" id="navbarContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" href="/">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/book">Book Tickets</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/my-bookings">My Bookings</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/support">Support</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/partner">Bus Owner? Join Us</a>
            </li>
          </ul>

          <form className="d-flex me-3" role="search" onSubmit={(e) => e.preventDefault()}>
            <input
              className={`form-control me-2 `}
              type="search"
              placeholder="Search buses, routes..."
              aria-label="Search"
            />
            <button
              className={"btn-outline-light"}
              type="submit"
            >
              Search
            </button>
          </form>

          <div className="d-flex align-items-center gap-2">
            {user ? (
              <UserMenu />
            ) : (
              <>
                <button
                  type="button"
                  className={"btn btn-sm btn-outline-secondary"}
                  onClick={onLoginClick}
                >
                  Login
                </button>

                <button
                  type="button"
                  className={"btn btn-sm btn-outline-secondary"}
                  onClick={onSignupClick}
                >
                  Signup
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
