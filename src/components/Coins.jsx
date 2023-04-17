import React, { useState } from "react";
import { useEffect } from "react";
import { server } from "../main";
import axios from "axios";
import { Link } from "react-router-dom";

const Coins = () => {
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [currency, setCurrency] = useState("inr");

  const currencysymbol = currency === "inr" ? "₹" : currency === "rub";

  useEffect(() => {
    const fetchCoins = async () => {
      const { data } = await axios.get(
        `${server}/coins/markets?vs_currency=${currency}&page=${page}`
      );
      setCoins(data);
      setLoading(false);
    };

    fetchCoins();
  }, [currency, page]);

  return (
    <div>
      {loading ? (
        <div className=" h-[100vh] bg-green-100 flex justify-center items-center">
          <h1 className="text-5xl text-red-500 text-center">Loading ...</h1>
        </div>
      ) : (
        <div>
          <div className="flex justify-center p-3 bg-slate-900 space-x-5">
            <div className="flex items-center space-x-2">
              <input
                type="radio"
                id="html"
                name="fav_language"
                value={"inr"}
                onChange={() => setCurrency("inr")}
              />
              <label htmlFor="html" className="text-red-400">
                INR
              </label>
            </div>
            <br />
            <br />
            <div className="flex items-center space-x-2">
              <input
                type="radio"
                id="css"
                name="fav_language"
                value={"rub"}
                onChange={() => setCurrency("rub")}
              />
              <label htmlFor="css" className="text-red-400">
                Ruble
              </label>
            </div>
            <br />
          </div>
          <div className="my-grid">
            {coins &&
              coins.map((ele, ind) => {
                const {
                  id,
                  name,
                  image,
                  symbol,
                  current_price,
                  trust_score_rank,
                } = ele;
                return (
                  <div
                    key={ind}
                    className="bg-gray-200 rounded m-2 flex flex-col justify-center"
                  >
                    <img src={image} alt={ele.id} className="my-img" />
                    <h2> Name : {name}</h2>
                    <h3>{symbol}</h3>
                    <h4>
                      Price :{" "}
                      {current_price
                        ? `${currency} ${""} ${current_price}`
                        : "NA"}
                    </h4>
                    <Link to={`/coindetails/${ele.id}`}>
                      <button className="p-2 my-2 rounded bg-orange-300">
                        Read More
                      </button>
                    </Link>
                  </div>
                );
              })}
          </div>
        </div>
      )}
    </div>
  );
};

export default Coins;
