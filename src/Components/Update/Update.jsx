import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Update = () => {
  const [id, setId] = useState(0);
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userAddress, setUserAddress] = useState("");

  const navigateTo = useNavigate();

  useEffect(() => {
    setId(JSON.parse(localStorage.getItem("id")));
    setUserName(JSON.parse(localStorage.getItem("name")));
    setUserEmail(JSON.parse(localStorage.getItem("email")));
    setUserAddress(JSON.parse(localStorage.getItem("address")));
  }, []);

  const HandleUpdate = async () => {
    await axios
      .put(`https://647e2164af984710854af832.mockapi.io/newapi/${id}`, {
        userName: userName,
        userEmail: userEmail,
        userAddress: userAddress,
      })
      .then(() => {
        navigateTo("/Cards");
      });
  };

  return (
    <>
      <form className="m-lg-5" onSubmit={(e) => e.preventDefault()}>
        <div>
          <div className="form-group ">
            <label htmlFor="Name">Name</label>
            <input
              type="text"
              value={userName}
              className="form-control w-25 border-4"
              onChange={(e) => setUserName(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="Email">Email</label>
            <input
              type="email"
              value={userEmail}
              className="form-control w-25 border-4"
              onChange={(e) => setUserEmail(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="Address">Address</label>
            <input
              type="text"
              value={userAddress}
              className="form-control w-25 border-4"
              onChange={(e) => setUserAddress(e.target.value)}
            />
          </div>
          <div>
            <button
              type="submit"
              className="btn btn-outline-success border-2 my-3"
              onClick={HandleUpdate}
            >
              Update
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default Update;
