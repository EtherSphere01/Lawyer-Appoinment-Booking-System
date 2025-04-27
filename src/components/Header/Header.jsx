import { GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { auth } from "../../Firebase/firebase.init";
import { getCurrentUser, removeCurrentUser } from "../../utilities/firebaseDB";
import { toast, ToastContainer } from "react-toastify";

const Header = () => {
  const [users, setUsers] = useState(null);

  // Listen for changes in the authentication state
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setUsers(user); // If the user is logged in, update the state with user data
      } else {
        setUsers(null); // If no user is logged in, set the state to null
      }
    });

    // Cleanup the subscription when the component is unmounted
    return () => unsubscribe();
  }, []);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        toast.dismiss();
        toast.success("Sign Out Successful!");
        setUsers(null); // Set users to null after sign-out
        removeCurrentUser();
        window.location.reload(); // Remove user from local storage or wherever it's stored
      })
      .catch((error) => {
        toast.error("Sign Out Failed!");
      });
  };

  const links = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "font-bold text-black underline underline-offset-4"
              : "text-gray-500"
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/my-bookings"
          className={({ isActive }) =>
            isActive
              ? "font-bold text-black underline underline-offset-4"
              : "text-gray-500"
          }
        >
          My Bookings
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/blogs"
          className={({ isActive }) =>
            isActive
              ? "font-bold text-black underline underline-offset-4"
              : "text-gray-500"
          }
        >
          Blogs
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/contact-us"
          className={({ isActive }) =>
            isActive
              ? "font-bold text-black underline underline-offset-4"
              : "text-gray-500"
          }
        >
          Contact Us
        </NavLink>
      </li>
    </>
  );

  return (
    <div>
      <div className="navbar">
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
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>
          <div className="flex items-center">
            <img
              src="/assets/logo.png"
              alt=""
              className="h-7 w-7 hidden lg:block lg:mr-2"
            />
            <Link to="/" className="btn-ghost text-xl font-semibold">
              Law.BD
            </Link>
          </div>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>

        <div className="navbar-end">
          {/* Show Sign In button if user is not logged in */}
          {!users && (
            <NavLink
              to="/sign-in"
              className="btn bg-[#0EA106] text-white rounded-4xl font-light"
            >
              Sign In
            </NavLink>
          )}

          {/* Show user info and dropdown if user is logged in */}
          {users && (
            <div className="gap-2 flex items-center text-bold">
              <div>
                <p>{users.displayName}</p>{" "}
                {/* users.displayName instead of users?.name */}
              </div>
              <div className="dropdown dropdown-end">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost btn-circle avatar"
                >
                  <div className="w-10 rounded-full">
                    <img
                      alt="img"
                      src={users.photoURL || "/assets/user.png"} // Ensure users.photoURL is available
                    />
                  </div>
                </div>
                <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
                >
                  <li>
                    <a className="justify-between">Profile</a>
                  </li>
                  <li>
                    <a>Settings</a>
                  </li>
                  <li onClick={handleSignOut}>
                    <a>Logout</a>
                  </li>
                </ul>
              </div>
            </div>
          )}
        </div>
      </div>

      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
};

export default Header;
