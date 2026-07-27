import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function ResourceHub() {
  const [language, setLanguage] = useState("English");
  const navigate = useNavigate();

  const data = {
    English: {
      music: {
        img: "https://images.unsplash.com/photo-1511379938547-c1f69419868d",
        audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
      },
      video: {
        img: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
        url: "https://www.w3schools.com/html/mov_bbb.mp4",
      },
      movie: {
        img: "https://images.unsplash.com/photo-1524985069026-dd778a71c7b4",
        name: "Soul, Inside Out, The Pursuit of Happyness",
      },
      game: {
        img: "https://images.unsplash.com/photo-1511512578047-dfb367046420",
        link: "https://sudoku.com",
      },
      ebook: {
        img: "https://images.unsplash.com/photo-1512820790803-83ca734da794",
        link: "https://www.gutenberg.org/ebooks/1342",
      },
      yoga: {
        img: "https://images.unsplash.com/photo-1552196563-55cd4e45efb3",
        video: "https://www.w3schools.com/html/movie.mp4",
      },
    },

    Tamil: {
      music: {
        img: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4",
        audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3",
      },
      video: {
        img: "https://images.unsplash.com/photo-1526948531399-320e7e40f0ca",
        url: "https://www.w3schools.com/html/mov_bbb.mp4",
      },
      movie: {
        img: "https://images.unsplash.com/photo-1497032628192-86f99bcd76bc",
        name: "Mozhi, Anbe Sivam, Vaaranam Aayiram",
      },
      game: {
        img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1600&q=80",
        link: "https://www.chess.com",
      },
      ebook: {
        img: "https://images.unsplash.com/photo-1495446815901-a7297e633e8d",
        link: "https://www.tamilcube.com/books/",
      },
      yoga: {
        img: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b",
        video: "https://www.w3schools.com/html/movie.mp4",
      },
    },

    Hindi: {
      music: {
        img: "https://images.unsplash.com/photo-1519681393784-d120267933ba",
        audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3",
      },
      video: {
        img: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2",
        url: "https://www.w3schools.com/html/mov_bbb.mp4",
      },
      movie: {
        img: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba",
        name: "Dear Zindagi, 3 Idiots, Taare Zameen Par",
      },
      game: {
        img: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d",
        link: "https://www.calm.com",
      },
      ebook: {
        img: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f",
        link: "https://www.hindwi.org/ebooks",
      },
      yoga: {
        img: "https://images.unsplash.com/photo-1501747315-124a0eaca060?auto=format&fit=crop&w=1600&q=80",
        video: "https://www.w3schools.com/html/movie.mp4",
      },
    },
  };

  const r = data[language];

  return (
    <>
      <style>{`

        body { 
          margin: 0;
          font-family:
          Arial, sans-serif;
          background: linear-gradient(135deg, #b2f7ef, #e3fdfd, #eff7f6);
          color: #2c786c;
          
        }

        .page {
          min-height: 100vh;
          width: 100vw;
          background: linear-gradient(135deg, #b2f7ef, #e3fdfd, #eff7f6);
          color: #2c786c;
          padding: 60px 20px;
        }

        .container {
          max-width: 1200px;
          margin: auto;
        }

        h1, p { text-align: center; }

        select {
          display: block;
          margin: 30px auto;
          padding: 10px 18px;
          border-radius: 20px;
          border: 1px solid #2c786c;
        }

        .grid {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 25px;
          max-width: 1200px;
          

        }

        .card {
          width: 300px;
          background: white;
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 8px 20px rgba(0,0,0,0.08);
          transition: 0.3s;
        }

        .card:hover { transform: translateY(-6px); }

        .card img {
          width: 100%;
          height: 180px;
          object-fit: cover;
        }

        .card-content {
          padding: 15px;
        }

        .card-content h3 {
          margin-bottom: 10px;
        }

        audio, video {
          width: 100%;
          margin-top: 10px;
          border-radius: 10px;
        }

        a {
          display: inline-block;
          margin-top: 10px;
          color: #2c786c;
          font-weight: bold;
          text-decoration: none;
        }

        a:hover { text-decoration: underline; }
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
          <h1>Resource Hub 🌿</h1>
          <p>Relaxing resources for mind & soul</p>

          <select value={language} onChange={(e) => setLanguage(e.target.value)}>
            <option>English</option>
            <option>Tamil</option>
            <option>Hindi</option>
          </select>

          <div className="grid">

            {/* Music */}
            <div className="card">
              <img src={r.music.img} alt="Music" />
              <div className="card-content">
                <h3>🎵 Calm Music</h3>
                <audio controls src={r.music.audio} />
              </div>
            </div>

            {/* Video */}
            <div className="card">
              <img src={r.video.img} alt="Video" />
              <div className="card-content">
                <h3>🎥 Relaxing Video</h3>
                <video controls src={r.video.url} />
              </div>
            </div>

            {/* Movies */}
            <div className="card">
              <img src={r.movie.img} alt="Movie" />
              <div className="card-content">
                <h3>🎬 Movie Suggestions</h3>
                <p>{r.movie.name}</p>
              </div>
            </div>

            {/* Games */}
            <div className="card">
              <img src={r.game.img} alt="Game" />
              <div className="card-content">
                <h3>🎮 Relaxing Games</h3>
                <a href={r.game.link} target="_blank" rel="noreferrer">
                  Play Now →
                </a>
              </div>
            </div>

            {/* E-Books */}
            <div className="card">
              <img src={r.ebook.img} alt="Ebook" />
              <div className="card-content">
                <h3>📘 E-Books</h3>
                <a href={r.ebook.link} target="_blank" rel="noreferrer">
                  Read Books →
                </a>
              </div>
            </div>

            {/* Yoga */}
            <div className="card">
              <img src={r.yoga.img} alt="Yoga" />
              <div className="card-content">
                <h3>🧘 Yoga & Mindfulness</h3>
                <video controls src={r.yoga.video} />
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
}

export default ResourceHub;