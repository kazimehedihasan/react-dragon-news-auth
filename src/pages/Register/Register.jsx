import { Link } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";


const Register = () => {
    const hondleRegister = e =>{
        e.preventDefault();
        console.log(e.currentTarget);
    const from = new FormData(e.currentTarget);
    console.log(from.get('email'));
    }
    return (
        <div>
            <Navbar/>
              <div>
      <h2 className="text-3xl my-10 text-center">Please Register</h2>
         <form onSubmit={hondleRegister} className="md:w-3/4 lg:w-1/2 mx-auto">
         <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" name="name" required placeholder="name" className="input input-bordered" required />
        </div>
         <div className="form-control">
          <label className="label">
            <span className="label-text">Photo URL</span>
          </label>
          <input type="text" name="photo" required placeholder="Photo URL" className="input input-bordered" required />
        </div>
         <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name="email" required placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name="password" required placeholder="password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">REGISTER</button>
        </div>
         </form>
         <p className="text-center mt-4">All ready have an account <Link className="text-blue-700 font-bold" to="/login" >Login</Link></p>
      </div>
        </div>
    );
};

export default Register;