import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Wellness() {
  const navigate = useNavigate();

  const [mood, setMood] = useState("");
  const [journal, setJournal] = useState("");
  const [water, setWater] = useState(0);
  const [logs, setLogs] = useState([]);

  useEffect(() => {
    const savedLogs = localStorage.getItem("wellness_logs");
    if (savedLogs) {
      setLogs(JSON.parse(savedLogs));
    }
    const savedWater = localStorage.getItem("wellness_water");
    if (savedWater) {
      setWater(parseInt(savedWater));
    }
  }, []);

  const handleSaveLog = (e) => {
    e.preventDefault();
    if (!mood) {
      alert("Please select a mood!");
      return;
    }
    const newLog = {
      date: new Date().toLocaleDateString(),
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      mood,
      journal: journal.trim() || "No journal entry.",
      water,
    };
    const updated = [newLog, ...logs];
    setLogs(updated);
    localStorage.setItem("wellness_logs", JSON.stringify(updated));
    setMood("");
    setJournal("");
    alert("🌿 Daily Wellness Log Saved Successfully!");
  };

  const handleClearLogs = () => {
    if (window.confirm("Are you sure you want to clear your wellness logs?")) {
      setLogs([]);
      localStorage.removeItem("wellness_logs");
    }
  };

  const updateWater = (val) => {
    const newWater = Math.max(0, water + val);
    setWater(newWater);
    localStorage.setItem("wellness_water", newWater);
  };

  return (
    <div className="page">
      <button className="btnback" onClick={() => navigate(-1)}>
        ⬅ Back
      </button>

      <div className="container">
        <h1>Wellness Tracking 📊</h1>
        <p className="subtitle">Track your mood, hydration, and journal your way to mindfulness</p>

        {/* WATER TRACKER */}
        <div className="tracker-card">
          <h2>💧 Hydration Tracker</h2>
          <div className="water-display">
            <span className="water-amount">{water} glasses</span>
            <p>Target: 8 glasses daily</p>
          </div>
          <div className="water-controls">
            <button className="btn-water" onClick={() => updateWater(1)}>+1 Glass</button>
            <button className="btn-water btn-water-minus" onClick={() => updateWater(-1)}>-1 Glass</button>
          </div>
        </div>

        {/* DAILY LOG FORM */}
        <form className="form-card" onSubmit={handleSaveLog}>
          <h2>🧠 Daily Mind Check</h2>

          <label>How are you feeling right now?</label>
          <div className="mood-grid">
            {[
              { emoji: "😌", label: "Calm", val: "Calm" },
              { emoji: "😄", label: "Happy", val: "Happy" },
              { emoji: "😰", label: "Stressed", val: "Stressed" },
              { emoji: "🥱", label: "Tired", val: "Tired" },
              { emoji: "😢", label: "Sad", val: "Sad" }
            ].map((m) => (
              <button
                type="button"
                key={m.val}
                className={`mood-btn ${mood === m.val ? "active" : ""}`}
                onClick={() => setMood(m.val)}
              >
                <span className="mood-emoji">{m.emoji}</span>
                <span className="mood-label">{m.label}</span>
              </button>
            ))}
          </div>

          <label htmlFor="journal">Journal Entry / Thoughts</label>
          <textarea
            id="journal"
            placeholder="Write down whatever is on your mind... release your stress..."
            value={journal}
            onChange={(e) => setJournal(e.target.value)}
          />

          <button type="submit" className="btn-submit">Save Log 🌿</button>
        </form>

        {/* LOG HISTORY */}
        <div className="history-card">
          <div className="history-header">
            <h2>📜 History Logs</h2>
            {logs.length > 0 && (
              <button className="btn-clear" onClick={handleClearLogs}>Clear All</button>
            )}
          </div>

          {logs.length === 0 ? (
            <p className="empty-message">No wellness records saved yet. Start logging today!</p>
          ) : (
            <div className="logs-list">
              {logs.map((log, index) => (
                <div key={index} className="log-item">
                  <div className="log-meta">
                    <span className="log-date">{log.date} at {log.time}</span>
                    <span className={`log-mood-tag mood-${log.mood.toLowerCase()}`}>
                      {log.mood}
                    </span>
                  </div>
                  <p className="log-journal">"{log.journal}"</p>
                  <span className="log-water">💧 Drank {log.water} glasses of water</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      <style>{`
        body { margin: 0; font-family: 'Poppins', sans-serif; }
        .page { min-height: 100vh; width: 100vw; background: linear-gradient(135deg, #b2f7ef, #e3fdfd, #eff7f6); color: #2c786c; padding: 60px 20px; box-sizing: border-box; }
        .btnback { background: linear-gradient(135deg, #b2f7ef, #e3fdfd, #eff7f6); color: #2c786c; border: none; padding: 8px 16px; borderRadius: 20px; cursor: pointer; fontWeight: bold; margin-bottom: 20px; transition: 0.3s; }
        .btnback:hover { background: #2c786c; color: white; }
        .container { max-width: 800px; margin: auto; box-sizing: border-box; }
        h1 { text-align: center; color: #2c786c; }
        .subtitle { text-align: center; color: #3a8b7a; margin-bottom: 40px; }

        .tracker-card, .form-card, .history-card { background: rgba(255, 255, 255, 0.7); border-radius: 20px; padding: 30px; margin-bottom: 30px; box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05); border: 1px solid rgba(255, 255, 255, 0.5); }
        h2 { color: #2c786c; margin-top: 0; font-size: 20px; }
        label { display: block; margin-top: 20px; margin-bottom: 10px; font-weight: bold; color: #2c786c; }

        /* WATER TRACKER */
        .water-display { text-align: center; margin: 20px 0; }
        .water-amount { font-size: 32px; font-weight: bold; color: #2c786c; display: block; }
        .water-controls { display: flex; justify-content: center; gap: 15px; }
        .btn-water { background: #2c786c; color: white; border: none; padding: 10px 20px; border-radius: 12px; cursor: pointer; font-weight: bold; transition: 0.3s; }
        .btn-water:hover { background: #1f5e53; }
        .btn-water-minus { background: #a5d8d0; color: #2c786c; }
        .btn-water-minus:hover { background: #8dcac1; }

        /* MOOD SELECTOR */
        .mood-grid { display: grid; grid-template-columns: repeat(5, 1fr); gap: 12px; margin-bottom: 20px; }
        .mood-btn { background: white; border: 1px solid #c8e6e2; border-radius: 15px; padding: 15px 5px; cursor: pointer; transition: 0.3s; display: flex; flex-direction: column; align-items: center; gap: 6px; }
        .mood-btn:hover { background: #e8fffb; transform: translateY(-3px); }
        .mood-btn.active { background: #2c786c; border-color: #2c786c; color: white; }
        .mood-emoji { font-size: 24px; }
        .mood-label { font-size: 12px; font-weight: bold; }

        /* INPUTS */
        textarea { width: 100%; height: 120px; padding: 15px; border-radius: 12px; border: 1px solid #c8e6e2; background: white; font-family: inherit; font-size: 14px; color: #2c786c; box-sizing: border-box; resize: none; margin-bottom: 20px; }
        textarea:focus { outline: none; border-color: #2c786c; }
        .btn-submit { display: block; width: 100%; background: #2c786c; color: white; border: none; padding: 14px; border-radius: 12px; cursor: pointer; font-weight: bold; font-size: 16px; transition: 0.3s; }
        .btn-submit:hover { background: #1f5e53; }

        /* LOG HISTORY */
        .history-header { display: flex; justify-content: space-between; align-items: center; }
        .btn-clear { background: #e74c3c; color: white; border: none; padding: 6px 14px; border-radius: 10px; cursor: pointer; font-size: 13px; font-weight: bold; }
        .btn-clear:hover { background: #c0392b; }
        .empty-message { text-align: center; color: #666; font-style: italic; margin: 30px 0; }
        .logs-list { display: flex; flex-direction: column; gap: 15px; margin-top: 20px; }
        .log-item { background: white; border-radius: 12px; padding: 15px; border: 1px solid #e8fffb; box-shadow: 0 4px 12px rgba(0,0,0,0.02); }
        .log-meta { display: flex; justify-content: space-between; align-items: center; margin-bottom: 10px; }
        .log-date { font-size: 12px; color: #666; }
        .log-mood-tag { font-size: 12px; font-weight: bold; padding: 4px 10px; border-radius: 8px; }
        .mood-calm { background: #e0f2f1; color: #00796b; }
        .mood-happy { background: #e8f5e9; color: #2e7d32; }
        .mood-stressed { background: #ffe0b2; color: #e65100; }
        .mood-tired { background: #eceff1; color: #37474f; }
        .mood-sad { background: #e1f5fe; color: #0277bd; }
        .log-journal { font-style: italic; color: #333; margin: 5px 0 10px 0; font-size: 14px; }
        .log-water { font-size: 12px; color: #2c786c; font-weight: bold; }

        @media (max-width: 600px) {
          .page { padding: 20px 10px; }
          .container { padding: 0 10px; }
          .mood-grid { grid-template-columns: repeat(2, 1fr); }
          .mood-grid button:last-child { grid-column: span 2; }
        }
      `}</style>
    </div>
  );
}

export default Wellness;
