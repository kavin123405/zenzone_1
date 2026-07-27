import React from "react";
import { useNavigate } from "react-router-dom";

const Services = () => {
  const navigate = useNavigate();
  return (
    <div style={styles.page}>
      {/* ================= OUR SERVICES ================= */}
      <div style={styles.topSection}> 
        <button
                 style={{
                    position: "absolute",
                    top: "20px",
                    left: "20px",
                    background: "linear-gradient(135deg, #b2f7ef, #e3fdfd, #eff7f6)",
                    color: "#2c786c",
                    border: "none",
                    padding: "8px 16px",
                    borderRadius: "20px",
                    cursor: "pointer",
                    fontWeight: "bold"
               }}
             onClick={() => navigate(-1)}
             >
               ⬅ Back
             </button>
                   
        <h1 style={styles.title}>Our Services</h1>
        <p style={styles.subtitle}>
          We are dedicated to supporting mental well-being by providing a safe,
          simple, and supportive online platform. Our website helps users
          understand stress, reduce mental pressure, and find the right support
          without fear or judgment.
        </p>
      </div>

      {/* ================= HOW WE HELP ================= */}
      <div style={styles.middleSection}>
        <h2 style={styles.sectionTitle}>How We Help You</h2>

        <div style={styles.cardGrid}>
          <div style={styles.card}>
            <h3 style={styles.cardTitle}>🧠 Stress Awareness</h3>
            <p style={styles.cardText}>
              Our platform helps users identify stress levels through simple
              interactions and self-check tools designed for clarity and ease.
            </p>
          </div>

          <div style={styles.card}>
            <h3 style={styles.cardTitle}>💬 Emotional Support</h3>
            <p style={styles.cardText}>
              Users can access supportive guidance and calming suggestions to
              manage daily pressure and emotional challenges.
            </p>
          </div>

          <div style={styles.card}>
            <h3 style={styles.cardTitle}>📘 Helpful Resources</h3>
            <p style={styles.cardText}>
              We provide reliable mental health information, tips, and techniques
              to improve focus, relaxation, and emotional balance.
            </p>
          </div>

          <div style={styles.card}>
            <h3 style={styles.cardTitle}>🤝 Professional Guidance</h3>
            <p style={styles.cardText}>
              When needed, users are guided toward professional help or external
              resources for proper care and long-term support.
            </p>
          </div>
        </div>
      </div>

      {/* ================= WHO CAN USE ================= */}
      <div style={styles.whoSection}>
        <h2 style={styles.sectionTitle}>Who Can Use Our Website?</h2>
        <p style={styles.smallText}>Our services are designed for:</p>

        <ul style={styles.list}>
          <li>✔ Students facing academic stress</li>
          <li>✔ Individuals feeling overwhelmed or anxious</li>
          <li>✔ Users looking for mental peace and self-care</li>
          <li>✔ Anyone seeking a calm and supportive space</li>
        </ul>
      </div>

      {/* ================= PRIVACY ================= */}
      <div style={styles.privacySection}>
        <h2 style={styles.sectionTitle}>Your Privacy & Safety</h2>
        <p style={styles.subtitle}>
          Your privacy is our priority. We ensure that all interactions remain
          confidential, secure, and respectful.
        </p>
      </div>

      {/* ================= CTA ================= */}
      <div style={styles.ctaSection}>
        <h2 style={styles.ctaTitle}>You Are Not Alone</h2>
        <p style={styles.ctaText}>
          Taking care of your mental health is important. Start your journey
          toward calmness, clarity, and confidence with us today.
        </p>
       <button 
  style={styles.ctaButton}
  onClick={() => navigate("/home")}
>
  Get Started
</button>
      </div>
    </div>
  );
};

const styles = {
  page: {
  width: "100vw",
  minHeight: "100vh",
  fontFamily: "Poppins, sans-serif",
  color: "#2c786c",
  overflowX: "hidden",
  overflowY: "auto",
  
},

  topSection: {
    padding: "90px 20px",
    textAlign: "center",
    background: "linear-gradient(135deg, #4fbdb0, #6ddccf)",
    minHeight: "100px",
  },

  title: {
    fontSize: "2.8rem",
    marginBottom: "15px",
  },

  subtitle: {
    maxWidth: "750px",
    margin: "0 auto",
    fontSize: "1rem",
    lineHeight: "1.6",
  },

  middleSection: {
    padding: "80px 40px",
    background: "linear-gradient(135deg, #b2f7ef, #e3fdfd)",
  },

  sectionTitle: {
    textAlign: "center",
    fontSize: "2rem",
    marginBottom: "40px",
  },

  cardGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
    gap: "30px",
    maxWidth: "1100px",
    margin: "0 auto",
  },

  card: {
    backgroundColor: "#ffffff",
    borderRadius: "16px",
    padding: "30px",
    boxShadow: "0 10px 25px rgba(0,0,0,0.08)",
  },

  cardTitle: {
    marginBottom: "12px",
    fontSize: "1.2rem",
  },

  cardText: {
    fontSize: "0.95rem",
    lineHeight: "1.6",
  },

  whoSection: {
    padding: "80px 20px",
    textAlign: "center",
    background: "#eafffb",
  },

  smallText: {
    marginBottom: "25px",
  },

  list: {
    listStyle: "none",
    padding: 0,
    fontSize: "1rem",
    lineHeight: "2",
  },

  privacySection: {
    padding: "80px 20px",
    textAlign: "center",
    background: "linear-gradient(135deg, #c9f7f3, #e6fffd)",
  },

  ctaSection: {
    padding: "90px 20px",
    textAlign: "center",
    background: "#7fa9a3",
    color: "#ffffff",
  },

  ctaTitle: {
    fontSize: "2.3rem",
    marginBottom: "15px",
  },

  ctaText: {
    maxWidth: "700px",
    margin: "0 auto 30px",
    lineHeight: "1.6",
  },

  ctaButton: {
    padding: "12px 30px",
    borderRadius: "30px",
    border: "none",
    backgroundColor: "#ffffff",
    color: "#2c786c",
    fontSize: "1rem",
    cursor: "pointer",
  },
};

export default Services;