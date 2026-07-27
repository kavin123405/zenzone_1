import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Contact() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // demo success message
    alert("Message sent successfully 🌿");

    // clear form
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <>
      <style>{`
        body {
          margin: 0;
          padding: 0;
          font-family: Arial, sans-serif;
        }

        .contact-page {
          min-height: 100vh;
          width: 100vw;
          background: linear-gradient(135deg, #b2f7ef, #e3fdfd, #eff7f6);
          color: #2c786c;
          padding: 60px 20px;
          box-sizing: border-box;
          overflow-x: hidden;
        }

        .contact-container {
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

        .info-box {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 20px;
          margin-top: 20px;
        }

        .info-card {
          background: #ffffff;
          padding: 20px;
          border-radius: 12px;
          box-shadow: 0 6px 16px rgba(0,0,0,0.06);
        }

        .info-card h3 {
          margin-bottom: 5px;
          font-size: 18px;
          color: #2c786c;
        }

        .contact-form {
          margin-top: 30px;
        }

        .contact-form input,
        .contact-form textarea {
          width: 80%;
          padding: 10px 8px;
          margin-bottom: 12px;
          border-radius: 8px;
          border: 1px solid #ccc;
          font-size: 14px;
        }

        .contact-form textarea {
          resize: none;
          height: 100px;
        }

        .contact-form input:focus,
        .contact-form textarea:focus {
          outline: none;
          border-color: #2c786c;
        }

        .contact-form button {
          background: #2c786c;
          color: white;
          border: none;
          padding: 10px 22px;
          border-radius: 20px;
          cursor: pointer;
          font-size: 14px;
        }

        .contact-form button:hover {
          background: #1f5e53;
        }

        .note {
          margin-top: 25px;
          padding: 18px;
          border-radius: 12px;
          background: #e8fffb;
          font-size: 14px;
          color: #2f6f64;
        }
      `}</style>

      <div className="contact-page">
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
        <div className="contact-container">
          <h1>Contact Us 📩</h1>
          <p className="subtitle">
            We’re here to listen, support, and guide you
          </p>

          <h2>Get in Touch</h2>
          <p>
            If you have questions or need guidance, feel free to reach out.
          </p>

          <div className="info-box">
            <div className="info-card">
              <h3>Email Support</h3>
              <p>support@zenzone.com</p>
            </div>
            <div className="info-card">
              <h3>Phone Support</h3>
              <p>+91 98765 43210</p>
            </div>
            <div className="info-card">
              <h3>Location</h3>
              <p>India (Online & Offline)</p>
            </div>
          </div>

          <h2>Send Us a Message</h2>
          <form className="contact-form" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
            />

            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea><br></br>

            <button type="submit">Send Message</button>
          </form>

          <div className="note">
            <strong>Note:</strong> ZenZone is a supportive platform. If you need
            urgent help, please reach out to trusted local support services.
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;