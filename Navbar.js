
import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div style={{ fontWeight: 800 }}>💘 Dating App</div>
      <div>
        <Link to="/">Home</Link>
        <Link to="/matches">Matches</Link>
        <Link to="/chat">Chat</Link>
        <Link to="/profile">Profile</Link>
      </div>
    </nav>
  );
}
