import { Link, useNavigate } from "react-router-dom";
import { FaGithub, FaEnvelope } from "react-icons/fa";
import { useContext, useState } from "react";
import { AuthContext } from "../../../providers/AuthProvider";

const Register = () => {
  const { createUser, updateUserData, googleSignIn, githubSignIn, logOut } =
    useContext(AuthContext);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const handleRegister = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const photoUrl = form.photoUrl.value;
    console.log(name, email, password, photoUrl);

    setError("");
    createUser(email, password)
      .then((result) => {
        const createdUser = result.user;
        console.log(createdUser);
        updateUserData(createdUser, name, photoUrl);
        logOut();
        navigate("/login");
        form.reset();
      })
      .catch((error) => {
        console.log(error.message);
        const errText = error.message;
        const slicedErr = errText.split("/")[1].split(")")[0];
        if (slicedErr === "weak-password") {
          setError("Password should be at least 6 characters");
        } else if (slicedErr === "invalid-email") {
          setError("invalid-email");
        }
      });
  };

  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((result) => {
        console.log(result.user);
        logOut();
        navigate("/login");
      })
      .catch((error) => {
        console.log(error);
        const errText = error.message;
        const slicedErr = errText.split("/")[1].split(")")[0];
        setError(slicedErr);
      });
  };

  const handleGithubSignIn = () => {
    githubSignIn()
      .then((result) => {
        console.log(result.user);
        logOut();
        navigate("/login");
      })
      .catch((error) => {
        console.log(error);
        const errText = error.message;
        const slicedErr = errText.split("/")[1].split(")")[0];
        setError(slicedErr);
      });
  };

  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col">
          <div className="text-center">
            <h1 className="text-5xl font-bold">Register now!</h1>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 ">
            <div className="card-body w-[300px]">
              <div>
                <p className="text-red-500">{error}</p>
              </div>
              <form onSubmit={handleRegister}>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder="name"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="email"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type="password"
                    name="password"
                    placeholder="password"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Photo URL</span>
                  </label>
                  <input
                    type="text"
                    name="photoUrl"
                    placeholder="Photo URL"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control mt-6">
                  <button className="btn btn-primary">Register</button>
                </div>
                <div>
                  <p>
                    Already Registered?{" "}
                    <Link to="/login" className="underline text-primary">
                      Please login
                    </Link>
                  </p>
                </div>
              </form>
              <div>
                <div className="form-control mt-6 ">
                  <button
                    className="btn btn-outline capitalize"
                    onClick={handleGoogleSignIn}
                  >
                    <FaEnvelope className="mr-3"></FaEnvelope> Continue with
                    Email
                  </button>
                </div>
                <div className="form-control mt-6">
                  <button
                    className="btn btn-outline capitalize"
                    onClick={handleGithubSignIn}
                  >
                    <FaGithub className="mr-3"></FaGithub> Continue with Github
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
