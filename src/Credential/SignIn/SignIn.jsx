import React, { useEffect, useRef } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom"; // Added useNavigate for redirecting
import { auth } from "../../Firebase/firebase.init";
import { signInWithEmailAndPassword } from "firebase/auth";
import { toast, ToastContainer } from "react-toastify";
import { sendPasswordResetEmail } from "firebase/auth";

const SignIn = () => {
  const navigate = useNavigate();
  const emailref = useRef(null);
  const handleFormSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        if (!user.emailVerified) {
          toast.error("Please verify your email address.");
          return;
        }
        navigate("/", { state: { loginSuccessful: true } });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error(errorMessage);
        toast.error(`Sign In Failed: ${errorMessage}`);
      });
  };

  const handleForgetPassword = () => {
    const email = emailref.current.value;
    if (!email) {
      toast.error("Please enter your email address.");
      return;
    }
    sendPasswordResetEmail(auth, email)
      .then(() => {
        toast.success("Password reset email sent!");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error(errorMessage);
      });
  };

  const location = useLocation();

  useEffect(() => {
    if (location?.state?.emailVerified) {
      toast.success("Sign Up Successful!");
      toast.info("Please verify your email address.");
      toast.info("Email verification sent!");
      navigate(location.pathname, { replace: true });
    }
  }, [location.state]);

  return (
    <div>
      <div className="hero bg-base-200 min-h-screen">
        <div className="flex-col md:w-1000 md:max-w-sm p-10 md:p-0 mx-auto">
          <div className="text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-10">Login now!</h1>
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <div className="card-body">
              <form onSubmit={handleFormSubmit}>
                <fieldset className="fieldset">
                  <label className="label">Email</label>
                  <input
                    type="email"
                    className="input"
                    placeholder="Email"
                    name="email"
                    ref={emailref}
                    required
                  />
                  <label className="label">Password</label>
                  <input
                    type="password"
                    className="input"
                    placeholder="Password"
                    name="password"
                    required
                  />
                  <div
                    onClick={() => handleForgetPassword()}
                    className="link link-hover text-red-600"
                  >
                    Forgot password?
                  </div>

                  <div className="flex justify-start gap-10 items-center">
                    <p>Don't have an account?</p>
                    <NavLink to="/sign-up" className="btn btn-primary">
                      Sign Up
                    </NavLink>
                  </div>
                  <button className="btn btn-neutral mt-4">Sign In</button>
                </fieldset>
              </form>
            </div>
          </div>
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

export default SignIn;
