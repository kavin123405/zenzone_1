import React, { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav style={styles.nav}>
      <div style={styles.menuIcon} onClick={() => setOpen(!open)}>
        &#9776; {/* hamburger menu */}
      </div>
      <ul style={{ ...styles.navLinks, display: open ? "flex" : "none" }}>
        <li><Link to="/home" style={styles.link}>Home</Link></li>
        <li><Link to="/services" style={styles.link}>Services</Link></li>
        <li><Link to="/about" style={styles.link}>About</Link></li>
        <li><Link to="/contact" style={styles.link}>Contact</Link></li>
      </ul>
    </nav>
  );
}

const styles = {
  nav: {
    display: "flex",
    alignItems: "center",
    padding: "10px 20px",
    background: "#2c786c",
    color: "white",
    position: "sticky",
    top: 0,
    zIndex: 1000,
  },
  menuIcon: {
    fontSize: "28px",
    cursor: "pointer",
  },
  navLinks: {
    listStyle: "none",
    marginLeft: "20px",
    gap: "15px",
    flexDirection: "column",
  },
  link: {
    color: "white",
    textDecoration: "none",
    fontSize: "18px",
  },
};

export default Navbar;