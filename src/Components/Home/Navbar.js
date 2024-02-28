import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { signOut } from "firebase/auth";
import auth from "../../firebase.init";
import useAdmin from "../Hook/useAdmin";
const Navbar = () => {
  const [user, userLoading] = useAuthState(auth);
  const [isAdmin, isAdminLoading] = useAdmin(user);
  const navigate = useNavigate();
  
  const logout = () => {
    signOut(auth);
    navigate("/");
    window.location.reload();
  };

  return (
    <div>
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <Link to="/">
              <li>
                <a>Home</a>
              </li>
            </Link>
            <Link to="/all">
              <li>
                <a>All</a>
              </li>
            </Link>
            {isAdmin && (
              <Link to="/adminbid">
                <li>
                  <a>Admin Bid</a>
                </li>
                <Link to="/dashboard">
                <li>
                  <a>Dashboard</a>
                </li>
              </Link>
              </Link>
            )}
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">Bid</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <Link to="/">
            <li>
              <a>Home</a>
            </li>
          </Link>
          <Link to="/all">
            <li>
              <a>All</a>
            </li>
          </Link>
          <Link to="/allbid">
            <li>
              <a>All Bid</a>
            </li>
          </Link>
          {isAdmin && (
            <>
             <Link to="/dashboard">
                <li>
                  <a>Dashboard</a>
                </li>
              </Link>
              <Link to="/adminbid">
              <li>
                <a>Admin Bid</a>
              </li>
            </Link>
            </>
            
            
          )}
        </ul>
      </div>
      <div className="navbar-end">
        <div className="flex gap-5 px-5">
          {!user ? (
            <Link to="/login" className="btn">
              Login
            </Link>
          ) : (
            <a onClick={logout} className="btn">
              Log Out
            </a>
          )}
        </div>
      </div>
    </div>
  </div>
  );
}

export default Navbar;
