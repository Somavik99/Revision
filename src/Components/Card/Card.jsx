import axios from "axios";
import React, { useEffect, useState } from "react";

const Card = () => {
  const [ApiData, setApiData] = useState([]);

  const fetchApi = async () => {
    try {
      const resp = await axios.get(
        "https://647e2164af984710854af832.mockapi.io/newapi"
      );
      console.log(resp.data);
      setApiData(resp.data);
    } catch (err) {
      console.log(err);
    } finally {
      console.log("Response Rendered");
    }
  };
  useEffect(() => {
    fetchApi();

  }, []);

  const DeleteData = (id) => {
    axios
      .delete(`https://647e2164af984710854af832.mockapi.io/newapi/${id}`)
      .then(() => {
        fetchApi();
      });
  };

  return (
    <div>
        <div>
            <button className="btn btn-outline-secondary float-right">Add More</button>
        </div>
      <div>
        {ApiData.map((data, i) => {
          return (
            <div key={i} className="w-25 h-75  border">
              <span>{data.Users.userName}</span>
              <div>{data.Users.userEmail}</div>
              <div>{data.Users.userAddress}</div>
              <button className="btn btn-outline-primary">Edit</button>
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
