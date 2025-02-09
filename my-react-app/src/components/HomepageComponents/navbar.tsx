import { useState } from "react";
import { Link } from "react-router";

export default function SideNavbar() {
  const [open, setOpen] = useState(false);
  const selected = 0;

  const menuItems = [
    { label: "feature 1", link: "/home" },
    { label: "feature 2", link: "/YetToCome" },
  ];

  return (
    <>
      {/* Sidebar */}
      <div
        style={{
          width: "200px",
          height: "100vh",
          background: "",
          color: "black",
          padding: "20px",
          position: "fixed",
        }}
      >
        <h2 style={{ textAlign: "center" }}>Financial Management</h2>
        <div style={{ marginBottom: "20px" }}>
          <span style={{ fontWeight: "bold" }}>user</span>
        </div>
        <div>
          {menuItems.map((item, index) => (
            <Link
              key={index}
              to={item.link}
              style={{
                display: "block",
                padding: "10px",
                color: index=== selected ?"white":"black",
                textDecoration: "none",
                background: index === selected ? "black" : "transparent",
              }}
            >
              {item.label}
            </Link>
          ))}
        </div>
        <div style={{ position: "absolute", bottom: "20px", width: "100%" }}>
          <Link to="/YetToCome" style={{ color: "white", display: "block", padding: "10px" }}>
            Support
          </Link>
          <Link to="/" style={{ color: "white", display: "block", padding: "10px" }}>
            Logout
          </Link>
        </div>
      </div>
    </>
  );
}
