import React, { useState } from "react";
import { useEffect } from "react";
import { server } from "../main";
import axios from "axios";
import { Link } from "react-router-dom";

const Exchanges = () => {
  const [exchanges, setExchanges] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchExchanges = async () => {
      const { data } = await axios.get(`${server}/exchanges`);
      setExchanges(data);
      setLoading(false);
    };

    fetchExchanges();
  }, []);
  return (
    <>
      <div>
        {loading ? (
          <div className=" h-[100vh] bg-green-100 flex justify-center items-center">
            <h1 className="text-5xl text-red-500 text-center">Loading ...</h1>
          </div>
        ) : (
          <div className="my-grid">
            {exchanges &&
              exchanges.map((ele, ind) => {
                return (
                  <div
                    key={ind}
                    className="bg-gray-200 rounded m-2 flex flex-col justify-center"
                  >
                    <img src={ele.image} alt={ele.id} className="my-img" />
                    <h2> Country : {ele.country}</h2>
                    <h4>Trust Score : {ele.trust_score}</h4>
                    <a href={ele.url} target="_blank">
                      <button className="p-2 my-2 rounded bg-orange-300">
                        Read More
                      </button>
                    </a>
                  </div>
                );
              })}
          </div>
        )}
      </div>
    </>
  );
};

export default Exchanges;
