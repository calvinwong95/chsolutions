import React from "react";

const Navbar = () => {
  return (
    <div
      style={{
        height: "8vh",
        display: "flex",
        alignItems: "center",
        paddingLeft: "30px",
        paddingRight: "30px",
        justifyContent: "flex-end",
      }}
    >
      <div
        style={{
          width: "25%",
        }}
      >
        <ul
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            listStyle: "none",
          }}
        >
          <li className="navButton">About Me</li>
          <li className="navButton">Work</li>
          <li className="navButton">Contact</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
