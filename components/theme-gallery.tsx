"use client";

import { useState } from "react";

const themes = [
  { name: "Violet pulse", category: "Gradient", colors: "linear-gradient(135deg,#6049c9,#c85fc4)" },
  { name: "Peach circuit", category: "Warm", colors: "linear-gradient(135deg,#ff9e7b,#f5c46f)" },
  { name: "Mint signal", category: "Cool", colors: "linear-gradient(135deg,#49c7bc,#83d99b)" },
  { name: "Pink horizon", category: "Gradient", colors: "linear-gradient(135deg,#ee6ba8,#ff9a77)" },
  { name: "Night bloom", category: "Dark", colors: "linear-gradient(135deg,#20243c,#764c9f)" },
  { name: "Arctic sky", category: "Cool", colors: "linear-gradient(135deg,#4a9be8,#68d4d0)" },
  { name: "Citrus glow", category: "Warm", colors: "linear-gradient(135deg,#f6bd42,#f17d58)" },
  { name: "Cosmic ink", category: "Dark", colors: "linear-gradient(135deg,#16172d,#45458b)" },
  { name: "Aurora drift", category: "Gradient", colors: "linear-gradient(135deg,#5fc4c8,#aa75e7 56%,#ef7baa)" },
];
const categories = ["All", "Gradient", "Warm", "Cool", "Dark"];

export function ThemeGallery() {
  const [filter, setFilter] = useState("All");
  const shown = themes.filter((theme) => filter === "All" || theme.category === filter);

  return <>
    <div className="filter-row" role="group" aria-label="Filter themes by category">
      {categories.map((category) => <button className="filter-button" type="button" key={category} aria-pressed={filter === category} onClick={() => setFilter(category)}>{category}</button>)}
    </div>
    <div className="theme-grid">
      {shown.map((theme) => <article className="theme-card animate-in" key={theme.name}>
        <div className="theme-art" style={{ background: theme.colors }} aria-label={`${theme.name} keyboard color preview`} role="img">
          <div className="theme-art-inner"><div className="theme-art-keys">{Array.from({ length: 18 }, (_, index) => <i key={index} />)}</div></div>
        </div>
        <div className="theme-card-info"><strong>{theme.name}</strong><span>{theme.category}</span></div>
      </article>)}
    </div>
  </>;
}