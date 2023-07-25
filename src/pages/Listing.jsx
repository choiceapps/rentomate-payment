import Style from "../styles/Listing.module.css";
import Image from "../assets/properties.jpg";
import { useEffect, useState } from "react";
import axios from "axios";
import { FaChevronCircleRight } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

const Listing = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("latoken");
  useEffect(() => {
    if (!token) {
      navigate("/auth/log-in");
    }
  }, [token, navigate]);

  const [rent, setRent] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    axios
      .get(import.meta.env.VITE_BACKEND_DOMAIN + "/rent/")
      .then((res) => {
        setRent(res.data);
      })
      .catch((err) => {
        setError(err);
      });
  }, []);

  console.log(rent);

  return (
    <div className={Style.properties}>
      <h2>{error}</h2>
      <div className={Style.propeContainer}>
        <div className={Style.propeHeader}>
          <h2>properties</h2>
          <Link to="/dashboard">Add a properties</Link>
        </div>
        <div className={Style.listings}>
          {rent &&
            rent.map((item, index) => {
              return (
                <div key={index} className={Style.item}>
                  <div className={Style.itemHead}>
                    <img src={Image} alt="" />
                    <p>Listed For Rent</p>
                    <span>
                      <h2>123 Main Street</h2>
                      <h3>Seattke, Wa 45678</h3>
                    </span>
                  </div>
                  <div className={Style.itembody}>
                    <span>
                      <h2>Find Tenants</h2>
                      <Link to={`/single/${item._id}`} state={item}>
                        Listing Inquiries, application <FaChevronCircleRight />
                      </Link>
                    </span>
                    <h3>New Application</h3>
                  </div>
                  <div className={Style.itemfooter}>
                    <span>
                      <h2>Manage tenants</h2>
                      <Link to={`/edit/${item._id}`} state={item}>
                        Leases, Payments <FaChevronCircleRight />
                      </Link>
                    </span>
                    <h3>Get your next tenant on boarded</h3>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default Listing;
