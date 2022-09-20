import React from "react";

const Maintenance = () => {
  return (
    <div className="Maintenance">
      <h1 style={{ color: "white", textDecoration: "underline" }}>
        {"Maintenance"}
      </h1>
      <h3 style={{ color: "white", marginTop: 20 }}>
        Trouble in navigating your website and needing to consistently update
        the content? <br /> No worries! <br /> We can do it for you!
      </h3>
      <ol>
        <li style={{ color: "white", marginTop: 20, fontSize: 24 }}>
          WordPress Maintenance
        </li>
        <li style={{ color: "white", marginTop: 20, fontSize: 24 }}>
          Woocommerce Maintenance
        </li>
        <li style={{ color: "white", marginTop: 20, fontSize: 24 }}>
          Content Updates
        </li>
      </ol>
    </div>
  );
};

export default Maintenance;