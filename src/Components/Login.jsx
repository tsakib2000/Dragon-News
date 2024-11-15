import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";

const Login = () => {
  const {userLogin,setUser}=useContext(AuthContext)
const [error,setError]=useState({})

  const navigate= useNavigate()
  const location=useLocation()
  console.log(location);
    const handleSubmit=e=>{
        e.preventDefault()
        const form = e.target
        const email=form.email.value
        const password=form.password.value
      userLogin(email,password)
      .then(result=>{
      navigate(location?.state ? location.state: '/')
        const user= result.user
        setUser(user)
      })
      .catch(err=>{
      setError({...error,login:err.code})
      })
    }
  return (
    <div className="min-h-[calc(100vh-80px)] flex flex-col justify-center items-center gap-3">
      <h2 className="text-3xl font-bold">Login your account</h2>
      <div className="card bg-base-100 w-full max-w-lg shrink-0 shadow-2xl rounded-none ">
        <form className="card-body" onSubmit={handleSubmit}>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
            name="email"
              type="email"
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
            name="password"
              type="password"
              placeholder="password"
              className="input input-bordered"
              required
            />
            <label className="label">
              {
                error.login && (
                  <label className="label text-sm text-red-600">
                   { error.login}
                  </label>
                )
              }
              <a href="#" className="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="btn bg-[#403F3F] text-white">Login</button>
          </div>
        </form>
        <p className="text-center mb-4">
          Don’t Have An Account ?
          <Link  className="text-red-500" to="/auth/register">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
