import React, { useEffect, useState } from "react";

const Update = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");

  useEffect(() => {
    setName(JSON.parse(localStorage.getItem("name")));
    setEmail(JSON.parse(localStorage.getItem("email")));
    setAddress(JSON.parse(localStorage.getItem("address")));
  }, []);

  const HandleUpdate = () => {};

  return (
    <>
      <form className="m-lg-5" onSubmit={(e) => e.preventDefault()}>
        <div>
          <div className="form-group ">
            <label htmlFor="Name">Name</label>
            <input
              type="text"
              name="name"
              value={name}
              className="form-control w-25 border-4"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="Email">Email</label>
            <input
              type="email"
              name="email"
              value={email}
              className="form-control w-25 border-4"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="Address">Address</label>
            <input
              type="text"
              name="address"
              value={address}
              className="form-control w-25 border-4"
              onChange={(e) => setAddress(e.target.value)}
            />
          </div>
          <div>
            <button
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
