import { useEffect, useState } from "react";
import Style from "../styles/Global.module.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { FaUser, FaLock } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const LandlordLogin = () => {
  const warehouseusername = localStorage.getItem("warehouseusername");
  const csrusername = localStorage.getItem("csrusername");
  const navigate = useNavigate();

  useEffect(() => {}, [warehouseusername, csrusername, navigate]);

  const [users, setUsers] = useState({
    email: "",
    password: "",
  });
  const { email, password } = users;
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();
    await axios
      .post(import.meta.env.VITE_BACKEND_DOMAIN + "/user/login", users)
      .then((res) => {
        toast.success(res.data.message, {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("username", res.data.user.username);
        localStorage.setItem("id", res.data.user._id);
        setLoading(false);
      })
      .catch((err) => {
        toast.error(err.response.data.message, {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
        setLoading(false);
      });
    setUsers({
      email: "",
      password: "",
    });
  };

  const handleChange = (e) => {
    setUsers({ ...users, [e.target.name]: e.target.value });
  };

  return (
    <section>
      <ToastContainer />
      <div className={Style.container}>
        <Link to="/" className={Style.logo}>
          RN
        </Link>
        <h1>Login Tenant account</h1>
        <form onSubmit={handleSubmit}>
          <span>
            <FaUser />
            <input
              required
              value={email}
              type="email"
              name="email"
              placeholder="Enter email"
              id="email"
              onChange={(e) => handleChange(e)}
            />
          </span>
          <span>
            <FaLock />
            <input
              required
              value={password}
              type="password"
              name="password"
              id="password"
              placeholder="Enter password"
              onChange={(e) => handleChange(e)}
            />
          </span>
          <button type="submit">{loading ? "Loading..." : "Login"}</button>
        </form>
        <div className={Style.formFooter}>
          <span>
            <h2>Don&apos;t have an account?</h2>
            <Link to="/user/sing-up">SingUp</Link>
          </span>
          <Link to="/auth/log-in">Login landlord account</Link>
        </div>
      </div>
    </section>
  );
};

export default LandlordLogin;
