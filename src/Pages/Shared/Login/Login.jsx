import { Link, useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { FaGithub, FaEnvelope } from "react-icons/fa";
import { useContext, useState } from "react";
import { AuthContext } from "../../../providers/AuthProvider";

const Login = () => {
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const { login, googleSignIn, githubSignIn } = useContext(AuthContext);
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    setError("");
    login(email, password)
      .then((result) => {
        // eslint-disable-next-line no-unused-vars
        const loggedUser = result.user;
        form.reset();
        navigate(from, { replace: true });
      })
      .catch(() => {
        setError("username/password is incorrect");
      });
  };
  const handleGoogleSignIn = () => {
    googleSignIn()
      .then(() => {
        navigate(from, { replace: true });
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
      .then(() => {
        navigate(from, { replace: true });
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
            <h1 className="text-5xl font-bold">Login now!</h1>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 ">
            <div className="card-body w-[300px]">
              <div>
                <p className="text-red-500">{error}</p>
              </div>
              {/* form start */}
              <form onSubmit={handleLogin}>
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
                  />
                  <label className="label">
                    <a href="#" className="label-text-alt link link-hover">
                      Forgot password?
                    </a>
                  </label>
                </div>

                <div className="form-control mt-6">
                  <button className="btn btn-primary">Login</button>
                </div>
                <div>
                  <p>
                    New User?{" "}
                    <Link to="/register" className="underline text-primary">
                      Please Register
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

export default Login;
