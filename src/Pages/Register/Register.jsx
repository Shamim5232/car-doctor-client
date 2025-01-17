import { Link } from "react-router-dom";
import loginSvg from "../../assets/images/login/login.svg";
import { useContext } from "react";
import { ContextProvider } from "../../AuthProvider/AuthProvider";
const Register = () => {
  const { createUser } = useContext(ContextProvider);
  const handleRegister = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const email = form.get("email");
    const password = form.get("password");
    const user = { email, password };
    console.log(user);
    createUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        alert("Register Succesfull");
      })
      .catch((error) => {
        console.error(error);
      });
  };
  return (
    <div className="hero p-12 min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row w-full">
        <div className="text-center lg:text-left w-1/2">
          <img src={loginSvg} alt="" />
        </div>
        <div className="card w-1/2 shadow-2xl bg-base-100">
          <form className="card-body" onSubmit={handleRegister}>
            <h1 className="text-4xl font-bold text-center">Register</h1>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="Name"
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
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-warning text-white">Register</button>
            </div>
            <div>
              Already have an account ?
              <Link to="/login" className="font-bold">
                Login
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
