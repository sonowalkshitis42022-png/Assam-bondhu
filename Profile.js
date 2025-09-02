
import React from "react";

export default function Profile() {
  return (
    <div className="card" style={{maxWidth: 520, margin: "24px auto"}}>
      <h2>👤 Your Profile</h2>
      <div style={{display:"grid", gap:12}}>
        <label>Name <input style={{width:"100%", padding:10}} defaultValue="John Doe" /></label>
        <label>Age <input type="number" style={{width:"100%", padding:10}} defaultValue={25} /></label>
        <label>Bio <textarea style={{width:"100%", padding:10}} defaultValue="Loves coding & movies 🎬" /></label>
      </div>
      <p className="footer-note">Fields are static for demo.</p>
    </div>
  );
}
