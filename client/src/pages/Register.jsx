import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="auth">
      <h1>Register</h1>
      <form>
        <input
          required
          type="text"
          placeholder="username"
          name="username"
          // onChange={handleChange}
        />
        <input
          required
          type="email"
          placeholder="email"
          name="email"
          // onChange={handleChange}
        />
        <input
          required
          type="password"
          placeholder="password"
          name="password"
          // onChange={handleChange}
        />
        {/* <button onClick={handleSubmit}>Register</button> */}
        <button>Register</button>
        {/* {err && <p>{err}</p>}
         */}
        <span>
          Do you have an account?
          <Link to="/login" style={{ textDecoration: "none" }}>
            <em>Login</em>
          </Link>
        </span>
      </form>
    </div>
  );
};

export default Register;
