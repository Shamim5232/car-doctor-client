import { Link, useLocation, useNavigate } from "react-router-dom";
import loginSvg from "../../assets/images/login/login.svg";
import { useContext } from "react";
import { ContextProvider } from "../../AuthProvider/AuthProvider";
import axios from "axios";
const Login = () => {
  const { SignIn } = useContext(ContextProvider);
  const Navigate = useNavigate();
  const location = useLocation();
  const handleLogin = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const email = form.get("email");
    const password = form.get("password");
    SignIn(email, password)
      .then((result) => {
        alert("Login In Successfull");
        const LoggedUser = result.user;
        console.log(LoggedUser);
        const user = { email };
        axios
          .post("http://localhost:5000/jwt", user, { withCredentials: true })
          .then((res) => {
            if (res.data.success) {
              Navigate(location?.state ? location?.state : "/");
            }
          });
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="hero p-12 min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row w-full">
        <div className="text-center lg:text-left w-1/2">
          <img src={loginSvg} alt="" />
        </div>
        <div className="card w-1/2 shadow-2xl bg-base-100">
          <form className="card-body" onSubmit={handleLogin}>
            <h1 className="text-4xl font-bold text-center">Login</h1>
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
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-warning text-white">Login</button>
            </div>
            <div>
              New To Car Doctor ?
              <Link to="/register" className="font-bold">
                Register
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
