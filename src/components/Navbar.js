import React from "react";
import { Link } from "gatsby";

export default function Navbar() {
  return (
    <nav>
      <h1 className="logo">ТЕКС-ІКА</h1>
      <div className="links">
        <Link to="/about">Про нас</Link>
        <Link to="/catalog">Каталог</Link>
        <Link to="/questions">Q&A</Link>
        <Link to="/contacts">Контакти</Link>
      </div>
    </nav>
  );
}
