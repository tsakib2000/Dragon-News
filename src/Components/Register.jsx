import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";

const Register = () => {
    const {createNewUser,updateUserProfile,setUser} = useContext(AuthContext)
    const navigate = useNavigate()
    const [error,setError]=useState({})
    const handleSubmit=e=>{
        e.preventDefault()
        const form = new FormData(e.target)
      const name = form.get('name')
      if(name.length <5){
        setError({...error,name:'Must be more than 5 character '})
        return;
      }
      const photo = form.get('photo')
      const email = form.get('email')
      const password = form.get('password')
       
        createNewUser(email,password)
        .then(result=>{
          setError(null)
            const user = result.user
            setUser(user)
            console.log(user)
            updateUserProfile({displayName:name ,photoURL :photo})
            .then(()=>{
              navigate('/')
            })
            .catch(error=>{
              console.log(error)
            })
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
          {
            error?.name &&  <label className="label text-sm text-red-600">
              {error?.name}
            </label>
          }
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
