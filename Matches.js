
import React from "react";

const data = [
  { id: 1, name: "Emma", img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=800&auto=format&fit=crop" },
  { id: 2, name: "Olivia", img: "https://images.unsplash.com/photo-1542596768-5d1d21f1cf98?q=80&w=800&auto=format&fit=crop" },
  { id: 3, name: "Mia", img: "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=800&auto=format&fit=crop" }
];

export default function Matches() {
  return (
    <div>
      <h2>🎯 Your Matches</h2>
      <div className="list">
        {data.map(p => (
          <div key={p.id} className="card">
            <img src={p.img} alt={p.name} style={{width:"100%", borderRadius:12}} />
            <h3>{p.name}</h3>
            <span className="badge">New match</span>
          </div>
        ))}
      </div>
    </div>
  );
}
