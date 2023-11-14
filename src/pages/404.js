import React from "react";
import { Link } from "gatsby";

export default function NotFound() {
  return (
    <div>
      <h2>404</h2>
      <p>Вибачте, сторінку не знайдено</p>
      <Link to="/" className="nav-link">
        На головну
      </Link>
    </div>
  );
}
