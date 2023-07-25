import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const [Users, setUsers] = useState({
    userName: "",
    userEmail: "",
    userAddress: "",
  });

  const navigate = useNavigate();

  const HandleChange = (e) => {
    const { name, value } = e.target;
    setUsers((user) => {
      return {
        ...user,
        [name]: value,
      };
    });
  };

  const HandleSubmit = async (e) => {
    e.preventDefault();
    await axios
      .post("https://647e2164af984710854af832.mockapi.io/newapi", {
        Users,
      })
      .then(() => {
        navigate("/Cards");
      });
  };

  return (
    <>
      <form className="m-5">
        <div>
          <div className="form-group">
            <label htmlFor="Name">Name:</label>
            <input
              required
              type="text"
              name="userName"
              value={Users.userName}
              className="form-control w-25 border-5"
              onChange={HandleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="Email">Email</label>
            <input
              required
              type="text"
              name="userEmail"
              className="form-control w-25 border-5"
              value={Users.userEmail}
              onChange={HandleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="Address">Address</label>
            <input
              required
              type="text"
              name="userAddress"
              className="form-control w-25 border-5 required"
              value={Users.userAddress}
              onChange={HandleChange}
            />
          </div>
        </div>
        <div className="form-group my-2">
          <button
            type="submit"
            className=" btn btn-outline-success"
            onClick={HandleSubmit}
          >
            Add
          </button>
        </div>
      </form>
    </>
  );
};

export default HomePage;
