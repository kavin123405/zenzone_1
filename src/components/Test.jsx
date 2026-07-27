import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function MentalTest() {
  const navigate = useNavigate();
  const questions = [
    {
      q: "How often do you feel stressed?",
      a: [
        { t: "Rarely", s: 0 },
        { t: "Sometimes", s: 1 },
        { t: "Often", s: 2 }
      ]
    },
    {
      q: "Do you feel tired even after rest?",
      a: [
        { t: "No", s: 0 },
        { t: "Occasionally", s: 1 },
        { t: "Almost every day", s: 2 }
      ]
    },
    {
      q: "How is your sleep quality?",
      a: [
        { t: "Good", s: 0 },
        { t: "Average", s: 1 },
        { t: "Poor", s: 2 }
      ]
    },
    {
      q: "Do you feel anxious without a clear reason?",
      a: [
        { t: "No", s: 0 },
        { t: "Sometimes", s: 1 },
        { t: "Frequently", s: 2 }
      ]
    },
    {
      q: "How motivated do you feel daily?",
      a: [
        { t: "Highly motivated", s: 0 },
        { t: "Moderately motivated", s: 1 },
        { t: "Not motivated", s: 2 }
      ]
    },
    {
      q: "Do you feel emotionally overwhelmed?",
      a: [
        { t: "No", s: 0 },
        { t: "Sometimes", s: 1 },
        { t: "Often", s: 2 }
      ]
    },
    {
      q: "How often do you take breaks for yourself?",
      a: [
        { t: "Regularly", s: 0 },
        { t: "Occasionally", s: 1 },
        { t: "Rarely", s: 2 }
      ]
    },
    {
      q: "Do you feel supported by people around you?",
      a: [
        { t: "Yes", s: 0 },
        { t: "Somewhat", s: 1 },
        { t: "Not at all", s: 2 }
      ]
    },
    {
      q: "How often do you feel calm during the day?",
      a: [
        { t: "Most of the time", s: 0 },
        { t: "Sometimes", s: 1 },
        { t: "Rarely", s: 2 }
      ]
    },
    {
      q: "Do you enjoy your daily activities?",
      a: [
        { t: "Yes", s: 0 },
        { t: "Somewhat", s: 1 },
        { t: "Not really", s: 2 }
      ]
    }
  ];

  const [index, setIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const handleAnswer = (value) => {
    setScore(score + value);

    if (index + 1 < questions.length) {
      setIndex(index + 1);
    } else {
      setShowResult(true);
    }
  };

  const getResult = () => {
    if (score <= 4)
      return {
        title: "🎉 You're Not Stressed",
        text: "You’re doing great! No worries at all. Enjoy life and stay positive 🌈"
      };
    if (score <= 8)
      return {
        title: "📚 Resource Hub Suggested",
        text: "Meditation, music, and self-help resources can help you relax."
      };
    if (score <= 12)
      return {
        title: "🤖 AI Chatbot Recommended",
        text: "Talking things out may help. Try our AI chatbot for daily emotional support."
      };
    if (score <= 16)
      return {
        title: "🤝 Volunteer Support",
        text: "Connecting with a supportive listener may help you feel understood."
      };
    return {
      title: "🧑‍⚕️ Doctor Appointment",
      text: "Professional guidance can help manage stress better."
    };
  };

  const progress = ((index + 1) / questions.length) * 100;

  return (
    <>
      <style>{`
        body {
          margin: 0;
          font-family: Arial, sans-serif;
          background: linear-gradient(135deg, #b2f7ef, #e3fdfd);
          display: flex;
          justify-content: center;
          align-items: center;
          min-height: 100vh;
        }
        .container {
          width: 90%;
          max-width: 700px;
          background: rgba(255,255,255,0.85);
          padding: 40px;
          border-radius: 25px;
          box-shadow: 0 25px 50px rgba(0,0,0,0.15);
        }
        h1 {
          text-align: center;
          color: #2c786c;
        }
        .progress {
          height: 8px;
          background: #d7f2ef;
          border-radius: 10px;
          margin: 25px 0;
          overflow: hidden;
        }
        .progress span {
          display: block;
          height: 100%;
          width: ${progress}%;
          background: linear-gradient(90deg, #2c786c, #4fb3a8);
          transition: 0.4s;
        }
        .question {
          font-size: 22px;
          text-align: center;
          margin-bottom: 30px;
          color: #2c786c;
        }
        .options {
          display: grid;
          gap: 15px;
          color: #2c786c;
        }
        .option {
          padding: 16px;
          border-radius: 30px;
          border: 1px solid #2c786c;
          background: transparent;
          cursor: pointer;
          transition: 0.3s;
          color: #2c786c;
        }
        .option:hover {
          background: #2c786c;
          color: white;
        }
        .result {
          text-align: center;
            color: #2c786c;
        }
      `}</style>

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
      <div className="container">
      
        <h1>🌿 Mental Wellness Check</h1>

        <div className="progress">
          <span ></span>
        </div>

        {!showResult ? (
          <>
            <div className="question">{questions[index].q}</div>
            <div className="options">
              {questions[index].a.map((ans, i) => (
                <button
                  key={i}
                  className="option"
                  onClick={() => handleAnswer(ans.s)}
                >
                  {ans.t}
                </button>
              ))}
            </div>
          </>
        ) : (
          <div className="result">
            <h2>{getResult().title}</h2>
            <p>{getResult().text}</p>
          </div>
        )}
      </div>
    </>
  );
}

export default MentalTest;