import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "../Card/Card";
import "./HomePage.css"

const HomePage = () => {
  const [dataState, setDataState] = useState([]);

  useEffect(() => {
    const controller = new AbortController();
    const FetchApi = async () => {
      try {
        const resp = await axios.get(
          "https://www.googleapis.com/books/v1/volumes?q=search+terms",
          { signal: controller.signal }
        );
        console.log("response", resp.data.items);
        return setDataState(resp.data.items);
      } catch (err) {
        return console.log(err);
      } finally {
        return console.log("Data Rendered");
      }
    };
    FetchApi();

    return () => {
      controller.abort();
    };
  }, []);

  return (
    <div className="img__cont">
      {dataState.map((item, index) => {
        return (
          <Card
            key={index}
            author={item.volumeInfo.authors}
            image={item.volumeInfo.imageLinks.thumbnail}
          />
        );
      })}
    </div>
  );
};

export default HomePage;
