import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div className="bg-gray-400">
        <nav>
          <ul>
            <div>
              <h2 className="text-3xl font-bold">Coin_Store</h2>
            </div>
            <div className="logo-right-div">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/coins">Coins</Link>
              </li>

              <li>
                <Link to="/exchanges">Exchanges</Link>
              </li>
            </div>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Header;
