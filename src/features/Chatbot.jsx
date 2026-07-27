import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

function Chatbot() {

  const navigate = useNavigate();

  const [messages, setMessages] = useState([
    {
      role: "assistant",
      text: "Hello 🌿 I'm your ZenZone Mind Companion. How are you feeling today?"
    }
  ]);

  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);

  const bottomRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);



  const sendMessage = async () => {

    if (!input.trim()) return;

    const userMessage = {
      role: "user",
      text: input
    };

    const updatedMessages = [...messages, userMessage];

    setMessages(updatedMessages);
    setInput("");
    setTyping(true);

    try {

     const response = await fetch("/api/chat", {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify({
    message: input
  })
});

      const data = await response.json();

      const botMessage = {
        role: "assistant",
        text: data.reply,
        suggestion: data.suggestion,
        feature: data.feature
      };

      setMessages(prev => [...prev, botMessage]);

    } catch (error) {

      const fallback = {
        role: "assistant",
        text: "I'm here with you. You can talk to me about what's on your mind.",
        suggestion: "Try taking a slow deep breath and relax your shoulders."
      };

      setMessages(prev => [...prev, fallback]);

    }

    setTyping(false);
  };



  return (

    <div className="page">

      <style>{`

        *{
          box-sizing:border-box;
        }

        body{
          margin:0;
          font-family: Arial, sans-serif;
        }

        .page{
          min-height:100vh;
          width:100vw;
          display:flex;
          justify-content:center;
          align-items:center;
          background:linear-gradient(135deg,#b2f7ef,#e3fdfd,#eff7f6);
          padding:20px;
          position:relative;
        }

        .chatBox{
          width:100%;
          max-width:620px;
          height:80vh;
          max-height:800px;
          background:white;
          border-radius:20px;
          padding:25px;
          display:flex;
          flex-direction:column;
          box-shadow:0 15px 35px rgba(0,0,0,0.2);
        }

        .title{
          color:#2c786c;
          margin-bottom:15px;
          text-align:center;
        }

        .messages{
          flex:1;
          overflow-y:auto;
          padding-right:5px;
        }

        .msgRow{
          display:flex;
          margin:10px 0;
        }

        .userRow{
          justify-content:flex-end;
        }

        .botRow{
          justify-content:flex-start;
        }

        .user{
          background:#2c786c;
          color:white;
          padding:10px 16px;
          border-radius:20px;
          max-width:70%;
          animation:fadeIn 0.3s ease;
        }

        .bot{
          background:#f1f1f1;
          color:#2c786c;
          padding:10px 16px;
          border-radius:20px;
          max-width:70%;
          animation:fadeIn 0.3s ease;
        }

        .suggestion{
          font-size:12px;
          margin-top:6px;
          color:#2c786c;
        }

        .typing{
          font-size:13px;
          color:#666;
          margin-left:5px;
        }

        .inputArea{
          display:flex;
          margin-top:15px;
          gap:8px;
        }

        .input{
          flex:1;
          padding:12px;
          border-radius:10px;
          border:1px solid #ccc;
          font-size:14px;
        }

        .btn{
          padding:12px 18px;
          background:#2c786c;
          color:white;
          border:none;
          border-radius:10px;
          cursor:pointer;
          font-weight:600;
        }

        .btn:hover{
          background:#1f5e54;
        }

        .warning{
          margin-top:10px;
          font-size:12px;
          text-align:center;
          color:red;
          font-weight:500;
        }

        .btnback{
          position:absolute;
          top:20px;
          left:20px;
          padding:10px 15px;
          background:linear-gradient(135deg,#b2f7ef,#e3fdfd,#eff7f6);
          color:#2c786c;
          border:none;
          border-radius:20px;
          cursor:pointer;
          font-weight:600;
        }

        .featureBtn{
          margin-top:8px;
          padding:8px 14px;
          border:none;
          border-radius:15px;
          background:#2c786c;
          color:white;
          font-size:12px;
          cursor:pointer;
        }

        .featureBtn:hover{
          background:#1f5e54;
        }

        @keyframes fadeIn{
          from{opacity:0; transform:translateY(10px)}
          to{opacity:1; transform:translateY(0)}
        }

        @media (max-width: 600px) {
          .page {
            padding: 10px;
          }
          .chatBox {
            padding: 15px;
            border-radius: 12px;
            height: 85vh;
          }
          .user, .bot {
            max-width: 85%;
            font-size: 14px;
            padding: 8px 12px;
          }
          .btnback {
            top: 10px;
            left: 10px;
            font-size: 12px;
            padding: 6px 12px;
          }
        }

      `}</style>


      <button className="btnback" onClick={() => navigate(-1)}>
        ⬅ Back
      </button>


      <div className="chatBox">

        <h2 className="title">🌿 ZenZone Mind Companion</h2>

        <div className="messages">

          {messages.map((msg, index) => (

            <div
              key={index}
              className={`msgRow ${msg.role === "user" ? "userRow" : "botRow"}`}
            >

              <div className={msg.role === "user" ? "user" : "bot"}>

                <p>{msg.text}</p>

                {msg.suggestion && (
                  <div className="suggestion">
                    🌿 Suggestion: {msg.suggestion}
                  </div>
                )}
                {msg.feature === "volunteer" && (
                <button className="featureBtn" onClick={() => navigate("/volunteer")}>
                 Talk to Volunteer 🤝
                </button>
                )}

                {msg.feature === "resources" && (
                <button className="featureBtn" onClick={() => navigate("/resource")}>
                View Helpful Resources 📚
                </button>
               )}

               {msg.feature === "doctor" && (
               <button className="featureBtn" onClick={() => navigate("/booking")}>
              Book Doctor Appointment 👩‍⚕️
              </button>
              )}  
              </div>

            </div>

          ))}

          {typing && <p className="typing">ZenZone is thinking...</p>}

          <div ref={bottomRef}></div>

        </div>


        <div className="inputArea">

          <input
            type="text"
            placeholder="Share your thoughts..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && sendMessage()}
            className="input"
          />

          <button onClick={sendMessage} className="btn">
            Send
          </button>

        </div>


        <div className="warning">
          ⚠ ZenZone AI provides emotional support and not professional medical advice.
        </div>

      </div>

    </div>

  );
}

export default Chatbot;