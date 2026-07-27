import React, { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom"; 

function VolunteerSupport() {
     
  const navigate = useNavigate();

  const sliderImages = [

  "https://images.unsplash.com/photo-1506126613408-eca07ce68773",
  "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
  "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
  ];
   const [currentImage, setCurrentImage] = useState(0);

useEffect(() => {
  const interval = setInterval(() => {
    setCurrentImage((prev) => (prev + 1) % sliderImages.length);
  }, 3000);

  return () => clearInterval(interval);
}, []);

  const [stage, setStage] = useState("intro");
  const [location, setLocation] = useState("");
  const [filter, setFilter] = useState("");
  const [selectedVolunteer, setSelectedVolunteer] = useState(null);
  const [mode, setMode] = useState("Online");
  const [message, setMessage] = useState("");
  const [chat, setChat] = useState([]);
  const [agreed, setAgreed] = useState(false);

  const volunteers= [ 
    {
      name: "Ananya Sharma",
      role: "Student Mentor",
      location: "Chennai",
      img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2",
    },
    {
      name: "Rahul Verma",
      role: "Work Stress Mentor",
      location: "Bangalore",
      img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
    },
    {
      name: "Meera Iyer",
      role: "Meditation Guide",
      location: "Chennai",
      img: "https://images.unsplash.com/photo-1554151228-14d9def656e4",
    },
    {
      name: "Arjun Patel",
      role: "Student Mentor",
      location: "Mumbai",
      img: "https://images.unsplash.com/photo-1544725176-7c40e5a2c9f9",
    },
  ];

  const filteredVolunteers = volunteers.filter(
    (v) =>
      v.location === location &&
      (filter === "" || v.role === filter)
  );

const sendMessage = () => {

  if (message.trim() === "") return;

  const userMessage = message;

  // show message in UI
  setChat([...chat, { sender: "user", text: userMessage }]);

  // volunteer number
  const phoneNumber = "917397613877";

  // message that will go to WhatsApp
  const whatsappMessage =
    "Hello, I need volunteer support from ZenZone.\n\nUser message: " +
    userMessage;

  const whatsappURL =
    "https://wa.me/" +
    phoneNumber +
    "?text=" +
    encodeURIComponent(whatsappMessage);

  // open WhatsApp
  window.open(whatsappURL, "_blank");

  setMessage("");
};

  return (
    <>
      <style>{`

        .body{
          margin: 0;
          font-family: Arial, sans-serif;
          background: linear-gradient(135deg, #b2f7ef, #e3fdfd, #eff7f6);
          color: #2c786c;
        }
        .page {
          min-height: 100vh;
          width: 100vw;
          background: linear-gradient(135deg, #b2f7ef, #dff6f0);
          padding: 60px 20px;
          font-family: Poppins, sans-serif;
          color: #2c786c;
        }

        .container {
          max-width: 1000px;
          margin: auto;
          background: white;
          border-radius: 20px;
          padding: 30px;
          box-shadow: 0 10px 40px rgba(0,0,0,0.1);
        }

        h1, h2 {
          color: #2c786c;
        }
        
        .rules{
          list-style: none;
          color: #3a8b7a;
          }
        

        .btn {
          background: #2c786c;
          color: white;
          padding: 8px 20px;
          border: none;
          border-radius: 15px;
          cursor: pointer;
          margin-top: 5px;
          transition: 0.3s;
        }

        .btn:hover {
          background: #1f5f56;
        }

        .input {
          width: 100%;
          padding: 10px;
          margin: 10px 0;
          border-radius: 10px;
          border: 1px solid #ccc;
          box-sizing: border-box;
        }

        .card-container {
          display: flex;
          flex-wrap: wrap;
          gap: 20px;
          margin-top: 20px;
        }

        .card {
          width: 200px;
          padding: 15px;
          border-radius: 15px;
          background: #f9f9f9;
          box-shadow: 0 5px 20px rgba(0,0,0,0.08);
          text-align: center;
          cursor: pointer;
          transition: 0.3s;
          color: #2c786c;
          box-sizing: border-box;
        }
        


        .card:hover {
          transform: translateY(-5px);
        }

        .card img {
          width: 100%;
          height: 150px;
          object-fit: cover;
          border-radius: 10px;
        }

        .chat-box {
          height: 250px;
          overflow-y: auto;
          border: 1px solid #ccc;
          border-radius: 10px;
          padding: 10px;
          background: #f5fdfc;

        }

        .user-msg {
          text-align: right;
        }

        .vol-msg {
          text-align: left;
        }

        .bubble-user {
          background: #2c786c;
          color: white;
          padding: 8px 12px;
          border-radius: 15px;
          display: inline-block;
          margin: 5px;
        }

        .bubble-vol {
          background: #e0f2f1;
          color: black;
          padding: 8px 12px;
          border-radius: 15px;
          display: inline-block;
          margin: 5px;
        }

        .warning {
          margin-top: 15px;
          font-size: 14px;
          color: red;
        }

        .privacy-note {
          font-size: 12px;
          margin-top: 10px;
          color: red;
        }

        .volunteer{
          display: flex;
          flex-direction: column;
          align-items: center;
          color: #2c786c;
        }

        /* Slider */

        .slider {
          width: 100%;
          height: 500px;
          border-radius: 16px;
          overflow: hidden;
          margin-bottom: 30px;
          position: relative;
        }

        .slider img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          position: absolute;
          top: 0;
          left: 0;
          opacity: 0;
          transition: opacity 1s ease-in-out;
        }

        .slider img.active {
          opacity: 1;
        }

        @media (max-width: 768px) {
          .page {
            padding: 20px 10px;
          }
          .container {
            padding: 20px 15px;
          }
          .slider {
            height: 250px;
          }
          .card {
            width: 100%;
          }
          .card-container {
            justify-content: center;
          }
        }
      `}</style>

      <div className="page">
        <button
               style={{
                   background: "linear-gradient(135deg, #b2f7ef, #e3fdfd, #eff7f6)",
                   color: "#2c786c",
                   borderRadius: "20px",
    
                  }}
                    onClick={() => navigate(-1)}
                   >
                     ⬅ Back
              </button>
        <div className="container">       
        {stage === "intro" && (
       <>
         <div className="slider">
        {sliderImages.map((img, index) => (
        <img
          key={index}
          src={img}
          alt="support"
          className={index === currentImage ? "active" : ""}
        />
        ))}
      </div>

    <div style={{ textAlign: "center" }}>
      <h1>Volunteer Support 🤝</h1>
      <p>Connect with trained peer volunteers in a safe space.</p>
      <button className="btn" onClick={() => setStage("agreement")}>
        Get Support
      </button>
    </div>
  </>
)}
        
          {stage === "agreement" && (
            <div>
              <h2>Safe Space Agreement 🔒</h2>
              <ul class="rules">
                <li>✔ Be respectful</li>
                <li>✔ This is peer support (not medical advice)</li>
                <li>✔ Do not share sensitive data</li>
              </ul>

              <label class="rules">
                <input
                  type="checkbox"
                  onChange={(e) => setAgreed(e.target.checked)}
                /> I Agree
              </label>

              <br />

              <button
                className="btn"
                disabled={!agreed}
                onClick={() => setStage("location")}
              >
                Continue
              </button>

              <p className="warning">
                🚨 If in crisis, contact your local emergency helpline.
              </p>
            </div>
          )}

          {stage === "location" && (
            <div>
              <h2>Select Location 📍</h2>
              <select
                className="input"
                onChange={(e) => setLocation(e.target.value)}
              >
                <option value="">Choose Location</option>
                <option>Chennai</option>
                <option>Bangalore</option>
                <option>Mumbai</option>
              </select>

              {location && (
                <>
                  <h3>Filter by Role</h3>
                  <select
                    className="input"
                    onChange={(e) => setFilter(e.target.value)}
                  >
                    <option value="">All</option>
                    <option>Student Mentor</option>
                    <option>Work Stress Mentor</option>
                    <option>Meditation Guide</option>
                  </select>

                  <div className="card-container">
                    {filteredVolunteers.map((v, i) => (
                      <div
                        key={i}
                        className="card"
                        onClick={() => {
                          setSelectedVolunteer(v);
                          setStage("chat");
                          alert(`Notification sent to ${v.name} successfully!`);
                        }}
                      >
                        <img src={v.img} alt={v.name} />
                        <h3>{v.name}</h3>
                        <p>{v.role}</p>
                        <p style={{ fontSize: "14px", color: "gray" }}>
                          {v.location}
                        </p>
                      </div>
                    ))}
                  </div>
                </>
              )}
            </div>
          )}

          {stage === "chat" && selectedVolunteer && (
            <div>
              <h2>Chat with {selectedVolunteer.name} 💬</h2>

              <select
                className="input"
                value={mode}
                onChange={(e) => setMode(e.target.value)}
              >
                <option>Online</option>
                <option>Offline (Scheduled)</option>
              </select>

              <div className="chat-box">
                {chat.map((c, i) => (
                  <div
                    key={i}
                    className={c.sender === "user" ? "user-msg" : "vol-msg"}
                  >
                    <span
                      className={
                        c.sender === "user"
                          ? "bubble-user"
                          : "bubble-vol"
                      }
                    >
                      {c.text}
                    </span>
                  </div>
                ))}
              </div>

             <div style={{ display: "flex", marginTop: "10px", padding: "10px 20px" }}>
  <input
    className="input"
    style={{ flex: 1 }}
    value={message}
    onChange={(e) => setMessage(e.target.value)}
    placeholder="Type your message..."
  />
  <button className="btn" onClick={sendMessage}>
    Send
  </button>
</div>
              <p className="privacy-note">
                🔒 Chats are private & encrypted.
              </p>
            </div>
          )}

        </div>
      </div>
    </>
  );
}

export default VolunteerSupport;