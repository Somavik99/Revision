import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Card = () => {
  const [ApiData, setApiData] = useState([]);

  const fetchApi = () => {
    try {
      setTimeout(async () => {
        const resp = await axios.get(
          "https://647e2164af984710854af832.mockapi.io/newapi"
        );
        console.log(resp.data);
        setApiData(resp.data);
      }, 1000);
    } catch (err) {
      console.log(err);
    } finally {
      console.log("Response Rendered");
    }
  };
  useEffect(() => {
    fetchApi();
    return () => {
      clearTimeout();
    };
  }, []);

  const DeleteData = (id) => {
    axios
      .delete(`https://647e2164af984710854af832.mockapi.io/newapi/${id}`)
      .then(() => {
        fetchApi();
      });
  };

  const EditData = (name, email, address) => {
    localStorage.setItem("name", JSON.stringify( name));
    localStorage.setItem("email", JSON.stringify(email));
    localStorage.setItem("address", JSON.stringify(address));
  };

  return (
    <div>
      <div className="float-right">
        <Link to="/">
          <button className="btn btn-outline-secondary ">Add More</button>
        </Link>
      </div>
      <div>
        {ApiData.map((data, i) => {
          return (
            <div key={i} className="w-25 h-75  border">
              <span>{data.Users.userName}</span>
              <div>{data.Users.userEmail}</div>
              <div>{data.Users.userAddress}</div>
              <Link to="/update">
                <button
                  className="btn btn-outline-primary"
                  onClick={() =>
                    EditData(
                      data.Users.userName,
                      data.Users.userEmail,
                      data.Users.userAddress
                    )
                  }
                >
                  Edit
                </button>
              </Link>
              <button
                className="btn btn-outline-danger"
                onClick={() => DeleteData(data.id)}
              >
                Delete
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Card;
