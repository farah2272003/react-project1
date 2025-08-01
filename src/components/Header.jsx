import React from "react";

export default function Header() {
  return (
    <header className="header">
      <title>Day1</title>
      <h1 className="logo">SPACE <span className="text-accent">Y</span></h1>
      <nav className="nav-links">
        <a href="#services">Services</a>
        <a href="#blog">Blog</a>
        <a href="#shop">Shop Now</a>
      </nav>
    </header>
  );
}
