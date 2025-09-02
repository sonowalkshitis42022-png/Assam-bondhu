
import React from "react";

export default function Home() {
  const user = {
    name: "Sophie",
    age: 23,
    bio: "Hiking + coffee + indie music",
    img: "https://images.unsplash.com/photo-1524250502761-1ac6f2e30d43?q=80&w=800&auto=format&fit=crop"
  };
  return (
    <div className="card profile-card">
      <img src={user.img} alt="profile" />
      <h2>{user.name}, {user.age}</h2>
      <p>{user.bio}</p>
      <div className="buttons">
        <button className="btn btn-dislike">❌ Dislike</button>
        <button className="btn btn-like">❤️ Like</button>
      </div>
      <p className="footer-note">Static demo UI — hook up your backend later.</p>
    </div>
  );
}
