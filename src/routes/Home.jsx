import React from "react";
import backImg from "../images/ID_home.jpg";
import './Home.module.css'

function Home() {
  return (
    <div>
      <img className = "Home.img" src={backImg} alt={"home bg"} /*style={{maxWidth: '50%', maxHeight: "50%"}}*/></img>
    </div>
  );
}

export default Home;
