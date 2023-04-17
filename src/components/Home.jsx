import React from "react";
import {
  CirclesWithBar,
  ThreeCircles,
  InfinitySpin,
} from "react-loader-spinner";

const Home = () => {
  const img1 =
    "https://media.licdn.com/dms/image/C4D12AQFq1YkbWFyRhg/article-cover_image-shrink_720_1280/0/1647576919435?e=2147483647&v=beta&t=wE6TyP-QSSCAlsDA_vmB0ypiFFTwIxXUpvglS99YBik";

  return (
    <>
      <div>
        <div className="flex justify-center items-center bg-black">
          <img
            src="https://media.licdn.com/dms/image/C4D12AQFq1YkbWFyRhg/article-cover_image-shrink_720_1280/0/1647576919435?e=2147483647&v=beta&t=wE6TyP-QSSCAlsDA_vmB0ypiFFTwIxXUpvglS99YBik"
            alt="Pic"
          />
        </div>
        <div className="flex justify-evenly items-center space-x-5 bg-black py-2">
          <CirclesWithBar
            height="100"
            width="100"
            color="#ff7400"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
            outerCircleColor=""
            innerCircleColor=""
            barColor=""
            ariaLabel="circles-with-bar-loading"
          />
          <ThreeCircles
            height="100"
            width="100"
            color="#4fa94d"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
            ariaLabel="three-circles-rotating"
            outerCircleColor=""
            innerCircleColor=""
            middleCircleColor=""
          />
          <InfinitySpin width="200" color="	#098aaa" />
        </div>
      </div>
    </>
  );
};

export default Home;
