import React from "react";

const Navbar = ({ setPageState }) => {
  return (
    <div
      style={{
        height: "10vh",
        display: "flex",
        alignItems: "center",
        paddingLeft: "30px",
        paddingRight: "30px",
        justifyContent: "space-between",
      }}
    >
      {/* company logo */}
      <div
        style={{
          width: "60px",
          height: "60px",
          borderRadius: "50%",
          backgroundColor: "black",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          cursor: "pointer",
        }}
        onClick={() => setPageState("main-page")}
      >
        <img
          src={require("../assets/ch.png")}
          alt=""
          wdith="40px"
          height="40px"
        />
      </div>
      <div
        style={{
          width: "25%",
        }}
      >
        <ul
          className="navbar-nav"
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            listStyle: "none",
          }}
        >
          <li className="nav-item">
            <h1 onClick={() => setPageState("about-me")}>About Me</h1>
          </li>
          <li className="nav-item">
            <h1 onClick={() => setPageState("work")}>Solutions</h1>
          </li>
          <li className="nav-item">
            <h1 onClick={() => setPageState("contact")}>Contact</h1>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
