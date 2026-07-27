import React from "react";
import { useNavigate } from "react-router-dom";

function About() {
  const navigate = useNavigate();
  return (
    <>
      <style>{`
        body {
          margin: 0;
          padding: 0;
          font-family: Arial, sans-serif;
        }

        .about-page {
          min-height: 100vh;
          width: 100vw;
          background: linear-gradient(135deg, #b2f7ef, #e3fdfd, #eff7f6);
          color: #2c786c;
          padding: 60px 20px;
          box-sizing: border-box;
          overflow-x: hidden;
        }

        .about-container {
          max-width: 900px;
          margin: auto;
          background: rgba(255, 255, 255, 0.65);
          border-radius: 16px;
          padding: 40px;
          box-shadow: 0 10px 30px rgba(0,0,0,0.08);
        }

        h1 {
          text-align: center;
          margin-bottom: 10px;
          font-size: 32px;
        }

        .subtitle {
          text-align: center;
          font-size: 15px;
          color: #3a8b7a;
          margin-bottom: 40px;
        }

        h2 {
          margin-top: 30px;
          margin-bottom: 10px;
          font-size: 22px;
        }

        p {
          font-size: 15px;
          line-height: 1.7;
          color: #2f6f64;
        }

        .highlight {
          background: #e8fffb;
          padding: 20px;
          border-radius: 12px;
          margin-top: 20px;
        }

        .creator-box {
          margin-top: 30px;
          padding: 25px;
          border-radius: 14px;
          background: linear-gradient(135deg, #2c786c, #3aa89a);
          color: white;
        }

        .creator-box h2 {
          color: #ffffff;
        }

        .creator-box p {
          color: #eafaf7;
        }

        @media (max-width: 600px) {
          .about-container {
            padding: 25px;
          }

          h1 {
            font-size: 26px;
          }
        }
      `}</style>

      <div className="about-page">
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
        <div className="about-container">
          <h1>About ZenZone 🌿</h1>
          <p className="subtitle">
            A safe space for mental peace, emotional balance, and self-care
          </p>

          <h2>Why ZenZone?</h2>
          <p>
            Mental health challenges such as stress, anxiety, and emotional
            pressure are increasingly common in today’s fast-paced world.
            ZenZone was created to provide a calm, supportive, and judgment-free
            platform where users can understand their emotions and seek the
            right kind of help.
          </p>

          <div className="highlight">
            <p>
              ZenZone focuses on prevention, awareness, and gentle support —
              helping users feel heard, relaxed, and empowered without fear or
              stigma.
            </p>
          </div>

          <h2>How This Website Was Created</h2>
          <p>
            ZenZone is developed using the MERN stack (MongoDB, Express, React,
            and Node.js) with a strong emphasis on user experience, privacy, and
            simplicity. Every feature is carefully designed to ensure smooth
            navigation, emotional safety, and accessibility for all users.
          </p>

          <p>
            From secure login systems to supportive services like mental health
            self-checks, AI-based assistance, professional appointments, and
            wellness resources, ZenZone aims to bridge the gap between technology
            and emotional well-being.
          </p>

          <h2>Our Mission</h2>
          <p>
            Our mission is to make mental health support approachable, friendly,
            and available to everyone — especially students and working
            individuals facing daily stress.
          </p>

          <div className="creator-box">
            <h2>About the Creator</h2>
            <p>
              ZenZone is created by a passionate developer who believes that
              technology can play a positive role in improving mental health.
              The goal behind this project is to combine technical skills with
              social responsibility — creating a platform that truly helps
              people feel better.
            </p>

            <p>
              This project reflects a commitment to learning, empathy, and
              innovation, with the hope of making mental well-being support more
              accessible and effective.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;