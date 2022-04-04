import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";

function App() {
  const loginUser = (e) => {
    e.preventDefault();
    const userOb = {
      username: e.target.username.value,
      password: e.target.password.value,
    };

    axios
      .post("/users/login", userOb)
      .then((res) => {
        console.log(res.data);
        if (!res.data.token) {
          throw Error(res.data.debug_data);
        } else {
          localStorage.setItem("jwt", res.data.token);
          alert("Login successfull");
        }
      })
      .catch((err) => {
        console.log(err);
        alert(err);
      });
  };
  return (
    <div className='App'>
      <form className='form-container bg-light clearfix' onSubmit={loginUser}>
        <h1 className='text-center mb-4'>LOGIN</h1>
        <div className='form-group'>
          <input
            required
            type='text'
            className='form-control'
            name='username'
            placeholder='Username'
          />
          <input
            required
            type='password'
            name='password'
            className='form-control'
            placeholder='Password'
          />
        </div>
        <input type='submit' className='btn btn-success m-1' value='Login' />
      </form>
    </div>
  );
}

export default App;
