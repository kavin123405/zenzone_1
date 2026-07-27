import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Avatar() {
  const navigate = useNavigate();

  const [mood, setMood] = useState("Zen");
  const [background, setBackground] = useState("Sunset");
  const [accessory, setAccessory] = useState("Plant");

  const moods = {
    Zen: { emoji: "🧘", text: "Seeking inner peace and mindful focus.", color: "#80cbc4" },
    Focused: { emoji: "🤓", text: "Ready to absorb knowledge and complete tasks.", color: "#90caf9" },
    Happy: { emoji: "😊", text: "Exuding positive energy and joy.", color: "#ffe082" },
    Relaxed: { emoji: "😎", text: "Cool, calm, and resting in the present moment.", color: "#a5d6a7" },
    Energetic: { emoji: "⚡", text: "Vibrant, active, and highly motivated.", color: "#ffab91" }
  };

  const backgrounds = {
    Sunset: "linear-gradient(135deg, #ff9e2c, #ff6b6b)",
    Forest: "linear-gradient(135deg, #2ecc71, #27ae60)",
    Beach: "linear-gradient(135deg, #4fc3f7, #0288d1)",
    CozyRoom: "linear-gradient(135deg, #e0f7fa, #b2ebf2)",
    StarryNight: "linear-gradient(135deg, #1a237e, #12005e)"
  };

  const accessories = {
    Headphones: "🎧",
    Plant: "🌿",
    Coffee: "☕",
    Glasses: "👓",
    None: "✨"
  };

  const handleSave = () => {
    localStorage.setItem("user_avatar", JSON.stringify({ mood, background, accessory }));
    alert("✨ Virtual Avatar Configuration Saved Successfully!");
  };

  useEffect(() => {
    const saved = localStorage.getItem("user_avatar");
    if (saved) {
      const parsed = JSON.parse(saved);
      if (parsed.mood) setMood(parsed.mood);
      if (parsed.background) setBackground(parsed.background);
      if (parsed.accessory) setAccessory(parsed.accessory);
    }
  }, []);

  return (
    <div className="page">
      <button className="btnback" onClick={() => navigate(-1)}>
        ⬅ Back
      </button>

      <div className="container">
        <h1>Virtual Avatar 🤖</h1>
        <p className="subtitle">Design an avatar that matches your emotional state and environment</p>

        <div className="avatar-layout">
          {/* AVATAR RENDER PREVIEW */}
          <div className="avatar-preview-box" style={{ background: backgrounds[background] }}>
            <div className="avatar-character" style={{ backgroundColor: moods[mood].color }}>
              <span className="avatar-accessory">{accessories[accessory]}</span>
              <span className="avatar-emoji">{moods[mood].emoji}</span>
            </div>
            <div className="avatar-caption">
              <h3>{mood} State</h3>
              <p>{moods[mood].text}</p>
            </div>
          </div>

          {/* AVATAR CUSTOMIZER CONTROLS */}
          <div className="customizer-controls">
            <h2>⚙️ Customize</h2>

            {/* MOOD */}
            <label>Mood State</label>
            <div className="btn-group">
              {Object.keys(moods).map((m) => (
                <button
                  key={m}
                  className={`option-btn ${mood === m ? "active" : ""}`}
                  onClick={() => setMood(m)}
                >
                  {moods[m].emoji} {m}
                </button>
              ))}
            </div>

            {/* BACKGROUND */}
            <label>Background Theme</label>
            <div className="btn-group">
              {Object.keys(backgrounds).map((bg) => (
                <button
                  key={bg}
                  className={`option-btn ${background === bg ? "active" : ""}`}
                  onClick={() => setBackground(bg)}
                >
                  {bg}
                </button>
              ))}
            </div>

            {/* ACCESSORY */}
            <label>Accessory</label>
            <div className="btn-group">
              {Object.keys(accessories).map((acc) => (
                <button
                  key={acc}
                  className={`option-btn ${accessory === acc ? "active" : ""}`}
                  onClick={() => setAccessory(acc)}
                >
                  {accessories[acc]} {acc}
                </button>
              ))}
            </div>

            <button className="save-btn" onClick={handleSave}>Save Avatar 🌿</button>
          </div>
        </div>
      </div>

      <style>{`
        body { margin: 0; font-family: 'Poppins', sans-serif; }
        .page { min-height: 100vh; width: 100vw; background: linear-gradient(135deg, #b2f7ef, #e3fdfd, #eff7f6); color: #2c786c; padding: 60px 20px; box-sizing: border-box; }
        .btnback { background: linear-gradient(135deg, #b2f7ef, #e3fdfd, #eff7f6); color: #2c786c; border: none; padding: 8px 16px; borderRadius: 20px; cursor: pointer; fontWeight: bold; margin-bottom: 20px; transition: 0.3s; }
        .btnback:hover { background: #2c786c; color: white; }
        .container { max-width: 1000px; margin: auto; box-sizing: border-box; }
        h1 { text-align: center; color: #2c786c; }
        .subtitle { text-align: center; color: #3a8b7a; margin-bottom: 40px; }

        .avatar-layout { display: flex; gap: 40px; margin-top: 20px; align-items: stretch; }
        
        /* PREVIEW BOX */
        .avatar-preview-box { flex: 1; border-radius: 24px; padding: 40px; display: flex; flex-direction: column; align-items: center; justify-content: center; box-shadow: 0 15px 35px rgba(0, 0, 0, 0.15); color: white; text-align: center; min-height: 400px; position: relative; transition: background 0.5s ease; }
        .avatar-character { width: 160px; height: 160px; border-radius: 50%; display: flex; align-items: center; justify-content: center; position: relative; box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1); border: 4px solid white; transition: background-color 0.4s ease; }
        .avatar-emoji { font-size: 80px; }
        .avatar-accessory { position: absolute; top: -15px; right: -5px; font-size: 40px; }
        .avatar-caption { margin-top: 30px; background: rgba(0, 0, 0, 0.3); padding: 15px 25px; border-radius: 16px; backdrop-filter: blur(5px); max-width: 320px; }
        .avatar-caption h3 { margin: 0 0 5px 0; font-size: 20px; }
        .avatar-caption p { margin: 0; font-size: 14px; opacity: 0.9; }

        /* CUSTOMIZER CONTROLS */
        .customizer-controls { flex: 1.2; background: rgba(255, 255, 255, 0.7); border-radius: 24px; padding: 30px; box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05); border: 1px solid rgba(255, 255, 255, 0.5); display: flex; flex-direction: column; justify-content: space-between; }
        .customizer-controls h2 { margin-top: 0; color: #2c786c; font-size: 22px; }
        label { display: block; margin-top: 20px; margin-bottom: 10px; font-weight: bold; color: #2c786c; font-size: 15px; }

        .btn-group { display: flex; flex-wrap: wrap; gap: 10px; }
        .option-btn { background: white; border: 1px solid #c8e6e2; border-radius: 12px; padding: 10px 16px; cursor: pointer; transition: 0.3s; color: #2c786c; font-weight: 500; font-size: 13px; }
        .option-btn:hover { background: #e8fffb; transform: translateY(-2px); }
        .option-btn.active { background: #2c786c; border-color: #2c786c; color: white; }

        .save-btn { margin-top: 30px; background: #2c786c; color: white; border: none; padding: 14px; border-radius: 12px; cursor: pointer; font-weight: bold; font-size: 16px; transition: 0.3s; width: 100%; }
        .save-btn:hover { background: #1f5e53; }

        @media (max-width: 768px) {
          .avatar-layout { flex-direction: column; }
          .page { padding: 20px 10px; }
          .avatar-preview-box { min-height: 320px; }
        }
      `}</style>
    </div>
  );
}

export default Avatar;
