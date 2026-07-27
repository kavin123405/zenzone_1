import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Auth() {
  const navigate = useNavigate();
  const [isSignup, setIsSignup] = useState(false);

  /* ---------- SIGNUP STATE ---------- */
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    status: "",
    password: "",
    confirmPassword: "",
    otp: ""
  });
  const [generatedOTP, setGeneratedOTP] = useState("");

  /* ---------- LOGIN STATE ---------- */
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  /* ---------- COMMON ---------- */
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  /* ---------- OTP ---------- */
  const sendOTP = () => {
    const otp = Math.floor(100000 + Math.random() * 900000);
    setGeneratedOTP(otp);
    alert("Your OTP is: " + otp + " (Please enter this OTP to proceed)");
  };

  /* ---------- SIGNUP SUBMIT ---------- */
  const handleSignup = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    if (formData.otp !== String(generatedOTP)) {
      alert("Invalid OTP!");
      return;
    }

    try {
      const res = await fetch("/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          password: formData.password,
          phone: formData.phone,
          role: "user"
        }),
      });

      const data = await res.json();

      if (res.ok) {
        alert(data.message + " - Please login now 🌿");
        setIsSignup(false);
      } else {
        alert(data.error || "Signup failed");
      }
    } catch (error) {
      alert("Server error. Try again later.");
    }
  };

  /* ---------- LOGIN SUBMIT ---------- */
  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: loginEmail,
          password: loginPassword,
        }),
      });

      const data = await res.json();

      if (data.user) {
        alert(data.message);
        localStorage.setItem("userName", data.user.name);
        localStorage.setItem("userEmail", data.user.email);
        localStorage.setItem("isLoggedIn", "true");
        navigate("/home");
      } else {
        alert(data.message || "Login failed");
      }
    } catch (error) {
      alert("Server error. Try again later.");
    }
  };

  return (
    <>
      <style>{`

        body {
          margin: 0;
          font-family: Arial, sans-serif;
          min-height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
          position: relative;
          overflow: hidden;
        }

        /* Background slideshow */
        body::before {
          content: "";
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: -1;
          background-size: cover;
          background-position: center;
          animation: zenBackground 20s infinite;
          transition: background-image 2s ease-in-out;
        }

        @keyframes zenBackground {
          0% {
            background-image: url("https://images.unsplash.com/photo-1506126613408-eca07ce68773");
          }
          25% {
            background-image: url("https://images.unsplash.com/photo-1500530855697-b586d89ba3ee");
          }
          50% {
            background-image: url("https://images.unsplash.com/photo-1507525428034-b723cf961d3e");
          }
          75% {
            background-image: url("https://images.unsplash.com/photo-1490730141103-6cac27aaab94");
          }
          100% {
            background-image: url("https://images.unsplash.com/photo-1501785888041-af3ef285b470");
          }
        }

        .container {
          background: rgba(200, 188, 188, 0.9);
          backdrop-filter: blur(6px);
          padding: 60px;
          width: 350px;
          border-radius: 60px;
          box-shadow: 0 4px 12px rgba(167, 156, 156, 0.1);
          text-align: center;
        }

        h2 {
          color: #2c786c;
          margin-bottom: 5px;
        }

        p {
          font-size: 14px;
          color: #666;
        }

        input, select {
          width: 100%;
          padding: 15px 2px;
          margin: 8px 0;
          border-radius: 15px;
          border: 1px solid #ccc;
          background-color: #f9f9f9;
          color: #333;
        }

        input::placeholder {
          padding: 0 10px;
      }
        .btn {
          width: 80%;
          padding: 10px 1px;
          background: #2c786c;
          color: white;
          border: none;
          border-radius: 30px;
          margin-top: 10px;
          cursor: pointer;
        }

        .btn:hover {
          background: #1f5e53;
        }

        .link {
          margin-top: 12px;
          font-size: 14px;
          color: #2c786c;
          cursor: pointer;
        }

        .otp {
          display: flex;
          gap: 5px;
        }

        .otp button {
          background: #2c786c;
          color: white;
          border: none;
          border-radius: 10px;
          padding: 5px 20px;
          cursor: pointer;
        }

        .otp button:hover {
          background: #1f5e53;
        }

      `}</style>

      <div className="container">
        {isSignup ? (
          <>
            <h2>Welcome to ZenZone 🌿</h2>
            <p>Create your safe mental space</p>

            <form onSubmit={handleSignup} autoComplete="off">

              <input type="text" name="fakeuser" style={{ display: "none" }} />
              <input type="password" name="fakepassword" style={{ display: "none" }} />

              <input name="name" placeholder="Full Name" required onChange={handleChange} />
              <input name="email" type="email" placeholder="Email" required onChange={handleChange} />
              <input name="phone" placeholder="Phone Number" required onChange={handleChange} />

              <select name="status" required onChange={handleChange}>
                <option value="">Current Pursuing</option>
                <option value="student">Student</option>
                <option value="working">Working Professional</option>
              </select>

              <input name="password" type="password" placeholder="Password" required onChange={handleChange} />
              <input name="confirmPassword" type="password" placeholder="Confirm Password" required onChange={handleChange} />

              <div className="otp">
                <input name="otp" placeholder="Enter OTP" onChange={handleChange} />
                <button type="button" onClick={sendOTP}>Send</button>
              </div>

              <button className="btn">Sign Up</button>
            </form>

            <div className="link" onClick={() => setIsSignup(false)}>
              Already a user? Login here
            </div>
          </>
        ) : (
          <>
            <h2>Welcome Back 🌿</h2>
            <p>Login to continue</p>

            <form onSubmit={handleLogin} autoComplete="off">
              <input placeholder="Email" required value={loginEmail} onChange={(e) => setLoginEmail(e.target.value)} />
              <input type="password" placeholder="Password" required value={loginPassword} onChange={(e) => setLoginPassword(e.target.value)} />
              <button className="btn">Login</button>
            </form>

            <div className="link" onClick={() => setIsSignup(true)}>
              New user? Create Account
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default Auth;