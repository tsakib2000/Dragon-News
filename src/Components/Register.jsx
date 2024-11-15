import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";

const Register = () => {
    const {createNewUser} = useContext(AuthContext)
    const handleSubmit=e=>{
        e.preventDefault()
        const form = new FormData(e.target)
      const name = form.get('name')
      const photo = form.get('photo')
      const email = form.get('email')
      const password = form.get('password')
        console.log({name,photo,email,password})
        createNewUser(email,password)
        .then(result=>{
            const user = result.user
            console.log(user)
        })
        .catch(error=>{
            const errorCode = error.errorCode
            const errorMessage = error.errorMessage
            console.log(errorCode,errorMessage);

        })
    }
  return (
    <div className="min-h-[calc(100vh-80px)] flex flex-col justify-center items-center gap-3">
      <h2 className="text-3xl font-bold">Register your account</h2>
      <div className="card bg-base-100 w-full max-w-lg shrink-0 shadow-2xl rounded-none ">
        <form className="card-body" onSubmit={handleSubmit}>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
            name="name"
              type="text"
              placeholder="Name"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Photo</span>
            </label>
            <input
            name="photo"
              type="text"
              placeholder="Photo URL"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
            name="email"
              type="email"
              placeholder="Email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
            name='password'
              type="password"
              placeholder="Password"
              className="input input-bordered"
              required
            />
            <label className="label">
         
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="rounded-none btn bg-[#403F3F] text-white">Register</button>
          </div>
        </form>
        <p className="text-center mb-4">Already Have An Account ?  <Link className="text-red-500" to='/auth/login'>Login</Link></p>
      </div>
    </div>
  );
};

export default Register;
