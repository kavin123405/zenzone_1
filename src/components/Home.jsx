import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../frontend/Navbar";
function Home() {

  const navigate = useNavigate();

  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  const images = [
    "https://images.unsplash.com/photo-1506126613408-eca07ce68773",
    "https://images.unsplash.com/photo-1492724441997-5dc865305da7",
    "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const startTest = () => {
    navigate("/test");
  };

  const handleLogout = () => {
  localStorage.removeItem("token");
  navigate("/auth");
};

  return (
    <>
      <style>{`
        body {
          margin: 0;
          font-family: Arial, sans-serif;
          background: linear-gradient(135deg, #b2f7ef, #e3fdfd, #eff7f6);
          color: #2c786c;
        }

        .header {
          position: fixed;
          top: 0;
          width: 100%;
          height: 70px;
          display: flex;
          align-items: center;
          padding: 0 80px;
          background: linear-gradient(135deg, #b2f7ef, #e3fdfd, #eff7f6);
          box-shadow: 0 5px 15px rgba(0,0,0,0.05);
          z-index: 1000;
        }

        .logo {
          font-size: 26px;
          font-weight: bold;
        }

        .hamburger {
          font-size: 28px;
          position: fixed;
          top: 20px;
          left: 20px;
          cursor: pointer;
          z-index: 1001;
        }

        .sidebar {
          position: fixed;
          top: 0;
          left: ${menuOpen ? "0" : "-270px"};
          width: 260px;
          height: 100%;
          background: linear-gradient(135deg, #b2f7ef, #e3fdfd, #eff7f6);
          padding-top: 80px;
          transition: 0.4s;
          display: flex;
          flex-direction: column;
          z-index: 1000;
        }

        .sidebar a {
          padding: 15px 25px;
          text-decoration: none;
          color: #2c786c;
        }

        .sidebar a:hover {
          background: #2c786c;
          color: white;
        }

        .dropdown {
          display: ${dropdownOpen ? "flex" : "none"};
          flex-direction: column;
        }

        .dropdown a {
          padding-left: 40px;
          font-size: 14px;
        }

        .overlay {
          display: ${menuOpen ? "block" : "none"};
          position: fixed;
          inset: 0;
          background: rgba(0,0,0,0.4);
          z-index: 999;
        }

        .hero {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 100px 8%;
          gap: 60px;
        }

        .calm-slider {
           width: 50%;
           height: 500px;          
           position: relative;
           overflow: hidden;
           border-radius: 25px;
           box-shadow: 0 20px 40px rgba(0,0,0,0.15);
         }

        .calm-slider img {
          position: absolute;
          width: 100%;                
          height: 100%;             
          object-fit: cover;          
          opacity: 0;
          transition: opacity 1.5s ease-in-out, transform 6s ease;
        }

        .calm-slider img.active {
          opacity: 1;
          transform: scale(1.08);
        }

        .hero-content {
          width: 45%;
        }

        .hero-content h1 {
          font-size: 60px;
        }

        .hero-content p {
          font-size: 20px;
          max-width: 500px;
        }

        .hero-content button {
          margin-top: 30px;
          padding: 14px 32px;
          border-radius: 30px;
          border: none;
          background: #2c786c;
          color: white;
          cursor: pointer;
        }

        .section {
          padding: 80px 20px;
          text-align: center;
        }

        .feature-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 40px;
          height: auto;
          margin-top: 50px;
          max-width: 1100px;
          margin: auto;
        }

        .feature-card {
          background: rgba(255,255,255,0.6);
          border-radius: 20px;
          padding: 25px;
          box-shadow: 0 8px 20px rgba(0,0,0,0.08);
          transition: 0.4s;
        }

        .feature-card:hover {
          transform: translateY(-10px);
        }

        .feature-card img {
          width: 80px;
          height: 80px;
          border-radius: 50%;
        }

        .quote {
          padding: 60px;
          text-align: center;
          font-style: italic;
        }

        @media (max-width: 900px) {
          .header {
            padding: 0 20px 0 70px !important;
          }
          .hero {
            flex-direction: column-reverse;
            padding: 100px 20px 40px 20px !important;
            gap: 30px;
            text-align: center;
          }
          .calm-slider {
            width: 100%;
            height: 300px;
          }
          .hero-content {
            width: 100%;
          }
          .hero-content h1 {
            font-size: 36px;
          }
          .hero-content p {
            font-size: 16px;
            margin: auto;
          }
          .feature-grid {
            grid-template-columns: 1fr;
            height: auto;
            gap: 20px;
            padding: 0 20px;
          }
        }
      `}</style>

      <div className="header">
        <div className="logo">🌿 ZenZone</div>
      </div>

      <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>☰</div>
      <div className="overlay" onClick={() => setMenuOpen(false)} />

      <div className="sidebar">
        <a onClick={() => navigate("/")}>🏠 Home</a>
        <a onClick={() => navigate("/service")}>🌿 Services</a>
        <a onClick={() => navigate("/about")}>💙 About</a>
        <a onClick={() => navigate("/contact")}>📞 Contact</a>
        <a onClick={() => setDropdownOpen(!dropdownOpen)}>✨ Features ▼</a>
        <div className="dropdown">
        <a onClick={() => navigate("/chatbot")}>AI Companion</a>
        <a onClick={() => navigate("/booking")}>Doctor Appointment</a>
        <a onClick={() => navigate("/volunteer")}>Volunteer Support</a>
        <a onClick={() => navigate("/resource")}>Resource Hub</a>
        <a onClick={() => navigate("/wellness")}>Wellness Tracking</a>
        <a onClick={() => navigate("/avatar")}>Virtual Avatar</a>
      </div>
      <a onClick={handleLogout}>🚪 Logout</a>
      </div>

      <div className="hero">
        <div className="calm-slider">
          {images.map((img, i) => (
            <img key={i} src={img} width={400} height={300} className={i === currentSlide ? "active" : ""} />
          ))}
        </div>

        <div className="hero-content">
          <h1>Breathe. Relax. Heal.</h1>
          <p>This is your calm and safe space. Take a deep breath and begin your wellness journey.</p>
          <button onClick={startTest}>Start Mental Health Check</button>
        </div>
      </div>

      <div className="section">
        <h2>Your Support Features</h2>
        <div className="feature-grid">
          {[
           ["AI Calm Companion", "https://media.giphy.com/media/3o7TKtnuHOHHUjR38Y/giphy.gif", "/chatbot"],
           ["Doctor Appointment", "https://cdn-icons-png.flaticon.com/512/387/387561.png", "/booking"],
           ["Volunteer Support", "https://cdn-icons-png.flaticon.com/512/1946/1946429.png", "/volunteer"],
           ["Resource Hub", "https://cdn-icons-png.flaticon.com/512/2917/2917242.png", "/resource"],
           ["Wellness Tracking", "https://cdn-icons-png.flaticon.com/512/2913/2913461.png", "/"],
           ["Virtual Avatar", "https://cdn-icons-png.flaticon.com/512/4712/4712027.png", "/avatar"]
          ].map(([title, img, link], i) => (
        <div
          className="feature-card"
          key={i}
          onClick={() => navigate(link)}
          style={{ cursor: "pointer" }}
        >
          <img src={img} />
          <h3>{title}</h3>
        </div>
        ))}
        </div>
      </div>

      <div className="quote">“Small steps every day lead to big healing.” 💚</div>
    </>
  );
}

export default Home;