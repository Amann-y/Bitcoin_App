import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { server } from "../main";
import axios from "axios";
import { AiFillCaretUp, AiOutlineCaretDown } from "react-icons/ai";
import { CirclesWithBar } from "react-loader-spinner";
import Chart from "../components/Chart";

const Coindetails = () => {
  const [coin, setCoin] = useState({});
  const [loading, setLoading] = useState(true);
  const [currency, setCurrency] = useState("inr");
  const [days, setDays] = useState("24h");
  const [chartArray, setChartArray] = useState([]);

  const params = useParams();

  const currencysymbol = currency === "inr" ? "₹" : currency === "rub";

  useEffect(() => {
    const fetchCoin = async () => {
      const { data } = await axios.get(`${server}/coins/${params.id}`);
      const { data: chartData } = await axios.get(
        `${server}/coins/${params.id}/market_chart?vs_currency=${currency}&days=${days}`
      );

      setChartArray(chartData.prices);
      setCoin(data);
      setLoading(false);
    };

    fetchCoin();
  }, [params.id]);
  return (
    <div>
      {loading ? (
        <div className=" h-[100vh] bg-green-100 flex justify-center items-center">
          <h1 className="text-5xl text-red-500 text-center">Loading ...</h1>
        </div>
      ) : (
        <div>
          <div className="flex justify-center items-center mt-2">
            <Chart arr={chartArray} currency={currency} days={days} />
          </div>

          <div className="flex justify-center p-1 sm:p-4 bg-slate-900 space-x-5">
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
          <div className="flex p-2 items-center justify-center">
            <img
              src={coin.image.large}
              alt="Pic"
              className="w-[5rem] h-[5rem] object-contain bg-stone-300 border-red-950 border m-1"
            />
            <h4 className="text-2xl text-lime-600 sm:text-3xl">
              Last Update On : {""} {coin.market_data.last_updated}
            </h4>
          </div>
          <div className="bg-gray-200 py-4 flex justify-center items-center flex-col">
            <h3 className="text-xl text-red-600">Name : {coin.name}</h3>
            <h4 className="text-xl text-gray-800">
              {currency} {""} {coin.market_data.current_price[currency]}
            </h4>
          </div>
          <div className="flex items-center justify-center bg-red-100 my-1 py-4">
            <h4 className="text-xl">
              {coin.market_data.price_change_percentage_24h > 0 ? (
                <AiFillCaretUp color="green" />
              ) : (
                <AiOutlineCaretDown color="red" />
              )}{" "}
              {""}
            </h4>{" "}
            <h4 className="text-xl">
              {" "}
              {coin.market_data.price_change_percentage_24h}
            </h4>
          </div>

          <div>
            <Custombar
              high={`${currency}${coin.market_data.high_24h[currency]}`}
              low={`${currency}${coin.market_data.low_24h[currency]}`}
            />
          </div>

          <div className="bg-gray-300 py-4 my-1 flex flex-col items-center">
            <h5 className="text-2xl font-semibold">
              Max Supply : {coin.market_data.max_supply}
            </h5>
            <h5 className="text-2xl font-semibold">
              Circulating Supply : {coin.market_data.circulating_supply}
            </h5>
            <h5 className="text-2xl font-semibold">
              Market Cap :{" "}
              {`${currency}${" "}${coin.market_data.market_cap[currency]}`}
            </h5>

            <h5 className="text-2xl font-semibold">
              All Time Low :{" "}
              {`${currency}${" "}${coin.market_data.atl[currency]}`}
            </h5>

            <h5 className="text-2xl font-semibold">
              All Time High :{" "}
              {`${currency}${" "}${coin.market_data.ath[currency]}`}
            </h5>
          </div>
        </div>
      )}
    </div>
  );
};

const Custombar = ({ high, low }) => {
  return (
    <div className="flex justify-center items-center">
      <p>
        <span className="rounded bg-slate-300 p-1 text-red-600 font-semibold">
          {low}
        </span>
      </p>
      <div
        className="bg-blue-300 flex justify-center items-center"
        style={{ height: "24px", width: "70%" }}
      >
        <h3 className="text-orange-700 text-2xl">24 Hours Range</h3>
      </div>
      <p>
        <span className="rounded bg-slate-300 p-1 text-lime-600 font-semibold">
          {high}
        </span>
      </p>
    </div>
  );
};

export default Coindetails;
