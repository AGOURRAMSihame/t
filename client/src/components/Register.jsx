import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

const Register = () => {
  const navigate = useNavigate();
  const [errorMessage , setErrorMessage] = useState(null);

  

  const [user, setUser] = useState({
    Firstname: "",
    Lastname: "",
    birthday: "",
    email: "",
    affiliation: "",
    typeUser: "admin",
    password: ""
  });

  const handleInput = (event) => {
    let name = event.target.name;
    let value = event.target.value;
    setUser({ ...user, [name]: value })
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log("Form Data:", user);

    const { Firstname, Lastname, birthday, email, affiliation, typeUser, password } = user;
   
    try {
      const res = await fetch('/register', {
        method: 'POST',
        headers: {
          "content-type": "application/json"
        },
        body: JSON.stringify({
          Firstname, Lastname, birthday, email, affiliation, typeUser, password,
        })
      });
      const data = await res.json();
      

      if (res.ok) {
        window.alert("Registered Successfully");
        navigate('/login');
      } else {
        return setErrorMessage(data.message);
      }
    } catch (err) {
      console.log("Error during registration:", err);
      window.alert("An error occurred during registration. Please try again.");
    }
  };

  return (
    <div>
      <div className="container shadow my-5">
        <div className="row justify-content-end">
          <div className="col-md-5 d-flex flex-column align-items-center justify-content-center form order-2">
            <h1 className="display-4 fw-bolder">Hello,Friend</h1>
            <p className="lead text-center">Enter Your Details To Register</p>
            <h5 className='mb-4'>OR</h5>
            <NavLink to="/login" className="btn btn-outline-light rounded-pill pb-2 w-50">LOGIN</NavLink>

          </div>
          <div className='col-md-6 p-5'>
            <h1 className="display-6 fw-bolder mb-5">Register</h1>
            <form onSubmit={handleSubmit} method='POST'>
              <div className="mb-3">
                <label htmlFor="firstname" className="form-label">First Name</label>
                <input type="text" className="form-control" name="Firstname"
                  value={user.Firstname} onChange={handleInput} />

              </div>
              <div className="mb-3">
                <label htmlFor="lastname" className="form-label">Last Name</label>
                <input type="text" className="form-control" name="Lastname"
                  value={user.Lastname} onChange={handleInput} />

              </div>
              <div className="mb-3">
                <label htmlFor="birthday" className="form-label">BirthDay</label>
                <input type="date" className="form-control" name="birthday"
                  value={user.birthday} onChange={handleInput} />

              </div>
              <div className="mb-3">
                <label htmlFor="affiliation" className="form-label">Affiliation</label>
                <input type="text" className="form-control" name="affiliation"
                  value={user.affiliation} onChange={handleInput} />

              </div>

              <div className="mb-3">
                <label htmlFor="typeUser" className="form-label">TypeUser</label>
                <select id="typeUser" name="typeUser" className="form-select" value={user.typeUser} onChange={handleInput}>
                  <option value="admin">Admin</option>
                  <option value="guest">Guest</option>
                  <option value="chercheur">Chercher</option>
                </select>
              </div>

              <div className="mb-3">
                <label htmlFor="email" className="form-label">Email address</label>
                <input type="email" className="form-control" name="email"
                  value={user.email} onChange={handleInput} />
              </div>
              <div className="mb-3">
                <label htmlFor="password" className="form-label">Password</label>
                <input type="password" className="form-control" name="password"
                  value={user.password} onChange={handleInput} />
              </div>

              <div className="mb-3 form-check">
                <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                <label className="form-check-label" htmlFor="exampleCheck1">I Agree Terms and Conditions</label>
              </div>

              <button type="submit" className="btn btn-outline-primary w-100 mt-4 rounded-pill">Register</button>
              { errorMessage && ( <div class="alert alert-danger mt-4" role="alert">
               {errorMessage}
              </div>) }
            </form>

          </div>
        </div>

      </div>
    </div>
  );

}

export default Register;