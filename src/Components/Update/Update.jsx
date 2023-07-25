import React, { useState } from "react";

const Update = () => {

const [UpdateState,setUpdateState] = useState({
  
})

  return (
    <>
      <form className="m-lg-5">
        <div>
          <div className="form-group ">
            <label htmlFor="Name">Name</label>
            <input type="text"  className="form-control w-25 border-4"/>
          </div>
          <div className="form-group">
            <label htmlFor="Email">Email</label>
            <input type="email"  className="form-control w-25 border-4"/>
          </div>
          <div className="form-group">
            <label htmlFor="Address">Address</label>
            <input type="text"  className="form-control w-25 border-4"/>
          </div>
          <div>
            <button className="btn btn-outline-success border-2 my-3">Update</button>
          </div>
        </div>

      </form>
    </>
  );
};

export default Update;
