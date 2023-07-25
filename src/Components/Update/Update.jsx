import React from "react";

const Update = () => {
  return (
    <>
      <form>
        <div>
          <div className="form-group ">
            <label htmlFor="Name">Name</label>
            <input type="text"  className="form-control"/>
          </div>
          <div className="form-group">
            <label htmlFor="Email">Email</label>
            <input type="email"  className="form-control"/>
          </div>
          <div className="form-group">
            <label htmlFor="Address">Address</label>
            <input type="text"  className="form-control"/>
          </div>
        </div>
      </form>
    </>
  );
};

export default Update;
