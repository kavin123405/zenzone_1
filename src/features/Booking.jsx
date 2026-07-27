import React, { useState, useEffect } from "react";
import h1 from "../assets/h1.jpg";
import { useNavigate } from "react-router-dom";

function Booking() {
  const navigate = useNavigate();

  const sliderImages = [
    "https://images.unsplash.com/photo-1550831107-1553da8c8464",
    "https://images.unsplash.com/photo-1526256262350-7da7584cf5eb",
    "https://images.unsplash.com/photo-1505751172876-fa1923c5c528",
  ];

  const doctorsData = {
    Chennai: [
      { id: 1, name: "Dr. Ananya Sharma", specialization: "Clinical Psychologist", experience: "8 Years", photo: h1 },
      { id: 2, name: "Dr.Sharma jii", specialization: "Clinical Psychologist", experience: "10 Years", photo: h1 },
    ],
    Bangalore: [
      { id: 3, name: "Dr. Rahul Verma", specialization: "Psychiatrist", experience: "10 Years", photo: h1 },
    ],
    Online: [
      { id: 3, name: "Dr. Meera Iyer", specialization: "Mental Wellness Counselor", experience: "6 Years", photo: h1 },
    ],
  };

  const [currentImage, setCurrentImage] = useState(0);
  const [location, setLocation] = useState("");
  const [selectedDoctor, setSelectedDoctor] = useState(null);
  const [formData, setFormData] = useState({ name: "", email: "", date: "", time: "", mode: "" });
  const [appointmentCard, setAppointmentCard] = useState(null);

  // Load appointment from localStorage on mount
  useEffect(() => {
    const storedAppointment = localStorage.getItem("appointment");
    if (storedAppointment) setAppointmentCard(JSON.parse(storedAppointment));
  }, []);

  // Slider effect
  useEffect(() => {
    const interval = setInterval(() => setCurrentImage((prev) => (prev + 1) % sliderImages.length), 3000);
    return () => clearInterval(interval);
  }, []);

  const handleBook = (e) => {
    e.preventDefault();

    const appointment = {
      doctor: selectedDoctor.name,
      specialization: selectedDoctor.specialization,
      date: formData.date,
      time: formData.time,
      mode: formData.mode,
      patientName: formData.name,
      patientEmail: formData.email,
    };

    setAppointmentCard(appointment);
    localStorage.setItem("appointment", JSON.stringify(appointment)); // persist in localStorage

    alert(
      `✅ Appointment Confirmed 🌿
Doctor: ${selectedDoctor.name}
Date: ${formData.date}
Time: ${formData.time}
Mode: ${formData.mode}`
    );

    setLocation("");
    setSelectedDoctor(null);
    setFormData({ name: "", email: "", date: "", time: "", mode: "" });
  };

  const handleCancel = () => {
    if (window.confirm("Are you sure you want to cancel this appointment?")) {
      setAppointmentCard(null);
      localStorage.removeItem("appointment");
    }
  };

  return (
    <div className="page">
      <button
        style={{ background: "linear-gradient(135deg, #b2f7ef, #e3fdfd, #eff7f6)", color: "#2c786c", borderRadius: "20px" }}
        onClick={() => navigate(-1)}
      >
        ⬅ Back
      </button>

      <div className="container">
        <h1>Book Doctor Appointment 🩺</h1>
        <p className="subtitle">Select location → choose doctor → book appointment</p>

        {/* Image Slider */}
        <div className="slider">
          {sliderImages.map((img, index) => (
            <img key={index} src={img} alt="Mental health support" className={index === currentImage ? "active" : ""} />
          ))}
        </div>

        {/* Location */}
        <select value={location} onChange={(e) => { setLocation(e.target.value); setSelectedDoctor(null); }}>
          <option value="">Select Location</option>
          {Object.keys(doctorsData).map((loc) => (<option key={loc} value={loc}>{loc}</option>))}
        </select>

        {/* Doctor List */}
        {location && (
          <div className="doctor-list">
            {doctorsData[location].map((doc) => (
              <div
                key={doc.id}
                className={`doctor-card ${selectedDoctor?.id === doc.id ? "active" : ""}`}
                onClick={() => setSelectedDoctor(doc)}
              >
                <img src={doc.photo} alt={doc.name} />
                <h3>{doc.name}</h3>
                <p>{doc.specialization}</p>
                <p>{doc.experience}</p>
              </div>
            ))}
          </div>
        )}

        {/* Appointment Form */}
        {selectedDoctor && (
          <form className="form" onSubmit={handleBook}>
            <h2>Appointment Details</h2>

            <input type="text" placeholder="Your Name" required value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} />
            <input type="email" placeholder="Your Email" required value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
            <input type="date" required value={formData.date} onChange={(e) => setFormData({ ...formData, date: e.target.value })} />
            <input type="time" required value={formData.time} onChange={(e) => setFormData({ ...formData, time: e.target.value })} />
            <select required value={formData.mode} onChange={(e) => setFormData({ ...formData, mode: e.target.value })}>
              <option value="">Consultation Mode</option>
              <option value="Online">Online</option>
              <option value="Offline">Offline</option>
            </select>
            <br />
            <button type="submit">Book Appointment</button>
          </form>
        )}

        {/* Appointment Card */}
        {appointmentCard && (
          <div className="appointment-card">
            <h3>✅ Appointment Confirmed</h3>
            <p><strong>Doctor:</strong> {appointmentCard.doctor}</p>
            <p><strong>Specialization:</strong> {appointmentCard.specialization}</p>
            <p><strong>Patient Name:</strong> {appointmentCard.patientName}</p>
            <p><strong>Email:</strong> {appointmentCard.patientEmail}</p>
            <p><strong>Date:</strong> {appointmentCard.date}</p>
            <p><strong>Time:</strong> {appointmentCard.time}</p>
            <p><strong>Mode:</strong> {appointmentCard.mode}</p>
            <button onClick={handleCancel}>Cancel Appointment</button>
          </div>
        )}
      </div>

      <style>{`
        body { margin: 0; font-family: Arial, sans-serif; }
        .page { min-height: 100vh; width: 100vw; background: linear-gradient(135deg, #b2f7ef, #e3fdfd, #eff7f6); color: #2c786c; padding: 60px 20px; box-sizing: border-box; }
        .container { max-width: 1000px; margin: auto; background: rgba(255,255,255,0.7); padding: 80px; border-radius: 20px; box-shadow: 0 10px 30px rgba(0,0,0,0.08); box-sizing: border-box; }
        h1 { text-align: center; }
        .subtitle { text-align: center; color: #3a8b7a; margin-bottom: 30px; }
        .slider { width: 100%; height: 500px; border-radius: 16px; overflow: hidden; margin-bottom: 30px; position: relative; }
        .slider img { width: 100%; height: 100%; object-fit: cover; position: absolute; top: 0; left: 0; opacity: 0; transition: opacity 1s ease-in-out; }
        .slider img.active { opacity: 1; }
        select, input { width: 100%; max-width: 500px; padding: 10px; margin-bottom: 12px; border-radius: 8px; border: 1px solid #ccc; box-sizing: border-box; }
        .doctor-list { display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 20px; margin-top: 20px; }
        .doctor-card { background: white; padding: 20px; border-radius: 16px; cursor: pointer; transition: 0.4s; text-align: center; border: 2px solid transparent; box-shadow: 0 4px 12px rgba(0,0,0,0.1); background: linear-gradient(135deg, #e8fffb, #f0f9f8); }
        .doctor-card:hover { transform: translateY(-6px); }
        .doctor-card.active { border-color: #2c786c; background: #e8fffb; }
        .doctor-card img { width: 150px; height: 150px; border-radius: 30%; object-fit: cover; margin: 0 auto 10px; display: block; }
        .form { margin-top: 40px; border-top: 2px dashed #2c786c; padding-top: 30px; animation: fadeIn 0.6s ease-in-out; }
        @keyframes fadeIn { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
        button { background: #2c786c; color: white; border: none; padding: 12px 26px; border-radius: 20px; cursor: pointer; }
        button:hover { background: #1f5e53; }
        .btnback { background: linear-gradient(135deg, #b2f7ef, #e3fdfd, #eff7f6); color: #2c786c; }
        .appointment-card { margin-top: 30px; background: #e8fffb; border: 2px solid #2c786c; border-radius: 20px; padding: 20px; max-width: 500px; margin-left: auto; margin-right: auto; }
        .appointment-card h3 { margin-top: 0; }
        .appointment-card button { margin-top: 10px; background: #e74c3c; }
        .appointment-card button:hover { background: #c0392b; }

        @media (max-width: 768px) {
          .page { padding: 20px 10px; }
          .container { padding: 30px 20px; }
          .slider { height: 260px; }
          .doctor-card img { width: 120px; height: 120px; }
        }
      `}</style>
    </div>
  );
}

export default Booking;