import React from "react";

const Home = () => (
  <div style={{ width: "85vw", position: "absolute", top: "50%", right: "0%" }}>
    <marquee
      behavior=""
      direction="horizontal"
      scrollamount="10"
      style={{ color: "white", fontSize: "5rem" }}
    >
      WELCOME TO INVENTORY
    </marquee>
  </div>
);

export default Home;
