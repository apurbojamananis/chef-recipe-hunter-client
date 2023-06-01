import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";
import { FaUserAlt } from "react-icons/fa";
import "../../../index.css";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogout = () => {
    logOut()
      .then(() => {
        console.log("LogOut Successfully");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div
      className="sticky top-0 z-[9999] bg-white min-h-[100px]"
      style={{ fontFamily: "Roboto Slab" }}
    >
      <div className="navbar container mx-auto pt-6">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
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
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive ? "bg-primary text-white" : ""
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/blog"
                  className={({ isActive }) =>
                    isActive ? "bg-primary text-white" : ""
                  }
                >
                  Blog
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    isActive ? "bg-primary text-white" : ""
                  }
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/service"
                  className={({ isActive }) =>
                    isActive ? "bg-primary text-white" : ""
                  }
                >
                  Service
                </NavLink>
              </li>
            </ul>
          </div>
          <Link to="/" className="text-3xl font-bold italic text-yellow-500">
            CUCINIO
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 ">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "bg-primary text-white" : ""
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/blog"
                className={({ isActive }) =>
                  isActive ? "bg-primary text-white" : ""
                }
              >
                Blog
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive ? "bg-primary text-white" : ""
                }
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/service"
                className={({ isActive }) =>
                  isActive ? "bg-primary text-white" : ""
                }
              >
                Service
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          {user && (
            <div className="dropdown dropdown-end">
              {user.photoURL ? (
                <div
                  className="tooltip tooltip-left"
                  data-tip={user.displayName}
                >
                  <label
                    tabIndex={0}
                    className="btn btn-ghost btn-circle avatar"
                  >
                    <div className="w-10 rounded-full">
                      <img src={user.photoURL} />
                    </div>
                  </label>
                </div>
              ) : (
                <div
                  className="tooltip tooltip-left"
                  data-tip={user.displayName}
                >
                  <button>
                    <FaUserAlt className="h-[20px] mx-auto inline"></FaUserAlt>
                  </button>
                </div>
              )}
            </div>
          )}

          <div className="ms-3">
            {user ? (
              <Link
                className="bg-primary py-3 px-5 rounded text-white"
                onClick={handleLogout}
                to="/login"
              >
                Logout
              </Link>
            ) : (
              <Link
                className="bg-primary py-3 px-5 rounded text-white"
                to="/login"
              >
                Login
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
