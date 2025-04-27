import {
  GoogleAuthProvider,
  sendEmailVerification,
  signInWithPopup,
} from "firebase/auth";
import React from "react";
import { NavLink, useNavigate } from "react-router";
import { toast, ToastContainer } from "react-toastify";
import { auth } from "../../Firebase/firebase.init";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { firebaseSet, setCurrentUser } from "../../utilities/firebaseDB";

const SignUp = () => {
  const navigate = useNavigate();
  const userStore = useNavigate();
  const handleFormSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const firstName = form.firstName.value;
    const lastName = form.lastName.value;
    const email = form.email.value;
    const password = form.password.value;
    const file = "/assets/user.png";

    if (password.length < 6) {
      toast.error("Password must be at least 6 characters long.");
      return;
    }

    const userData = {
      name: firstName + " " + lastName,
      email: email,
      photoURL: file,
    };
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;

        sendEmailVerification(auth.currentUser)
          .then(() => {
            firebaseSet(userData);
            navigate("/sign-in", { state: { emailVerified: true } });
          })
          .catch((error) => {
            toast.error("Error sending email verification!");
          });
      })
      .catch((error) => {
        const errorMessage = error.message;

        toast.error("Sign Up Failed!");
      });
  };

  const handleGoogleSignIn = () => {
    const provider = new GoogleAuthProvider();
    provider.addScope("email");

    signInWithPopup(auth, provider)
      .then((result) => {
        let user = result.user;

        if (user.email) {
          const userData = {
            name: user.displayName,
            email: user.email,
            photoURL: user.photoURL,
          };
          
          setCurrentUser(userData);
          navigate("/", { state: { google: true } });
        } else {
          toast.error("No email found in Google account!");
        }
      })
      .catch((error) => {
        toast.error("Google Sign In Failed!");
      });
  };

  return (
    <div>
      <div className="hero bg-base-200 min-h-screen">
        <div className=" flex-col md:w-1000  md:max-w-sm p-10 md:p-0 mx-auto">
          <div className="text-center">
            <h1 className="text-3xl md:text-4xl  font-bold mb-7">
              SignUp now!
            </h1>
          </div>

          <div
            onClick={() => handleGoogleSignIn()}
            className="w-full h-15 hero bg-base-200 shadow-2xl mb-5 text-2xl text-center font-bold flex justify-center items-center gap-4 btn btn-neutral"
          >
            <img src="./assets/google.png" alt="" className="h-10 w-10" />
            <p className="text-black">Signup with google</p>
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <div className="card-body">
              <form onSubmit={handleFormSubmit}>
                <fieldset className="fieldset">
                  <label className="label">First Name</label>
                  <input
                    type="text"
                    className="input"
                    placeholder="First Name"
                    name="firstName"
                    required
                  />

                  <label className="label">Last Name</label>
                  <input
                    type="text"
                    className="input"
                    placeholder="Last Name"
                    name="lastName"
                    required
                  />

                  <label className="label">Email</label>
                  <input
                    type="email"
                    className="input"
                    placeholder="Email"
                    name="email"
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

                  <div className="flex justify-start gap-10 items-center">
                    <p>Already have an account?</p>
                    <NavLink to="/sign-in" className="btn btn-primary">
                      Sign In
                    </NavLink>
                  </div>
                  <button className="btn btn-neutral mt-4">Sign Up</button>
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

export default SignUp;
