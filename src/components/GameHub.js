// src/components/GameHub.js
import React from "react";
import { Link } from "react-router-dom";

export default function GameHub() {
  return (
    <div
      style={{
        textAlign: "center",
        padding: "50px",
        background: "#0b1220",
        color: "#e6eef8",
        minHeight: "100vh",
        fontFamily: "system-ui, -apple-system, 'Segoe UI', Roboto, Arial"
      }}
    >
      <h1>Ultimate Casino Game Hub</h1>

      <div
        style={{
          marginTop: "30px",
          display: "flex",
          flexDirection: "column",
          gap: "15px",
          alignItems: "center"
        }}
      >
        <Link to="/blackjack">
          <button style={buttonStyle}>Blackjack</button>
        </Link>
        <Link to="/poker">
          <button style={buttonStyle}>Poker</button>
        </Link>
        <Link to="/roulette">
          <button style={buttonStyle}>Roulette</button>
        </Link>
      </div>
    </div>
  );
}

// Optional inline style for buttons
const buttonStyle = {
  padding: "10px 20px",
  fontSize: "18px",
  borderRadius: "8px",
  border: "none",
  cursor: "pointer",
  backgroundColor: "#1e2a47",
  color: "#e6eef8",
  transition: "background-color 0.3s",
};

