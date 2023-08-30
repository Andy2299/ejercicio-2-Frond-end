import React, { useState, useEffect } from "react";
import Timer from "./Timer";
import "./css/base.css"

const Card = ({ title, paragraph, imageUrl }) => {
  const [likes, setLikes] = useState(0);
  const [comments, setComments] = useState(0);
  const [zoom, setZoom] = useState(false);

  const handleLikeClick = () => {
    setLikes(likes + 1);
    setZoom(true);
  };

  const handleCommentClick = () => {
    setComments(comments + 1);
  };

  useEffect(() => {
    if (zoom) {
      const timer = setTimeout(() => {
        setZoom(false);
      }, 500); // Duración de la animación en milisegundos

      return () => clearTimeout(timer);
    }
  }, [zoom]);

  return (
    <div className="card">
      <div className="img-card">
        <img src={imageUrl} alt="Imagen" />
      </div>
      <div className="actions">
        <Timer />
        <button className="like-button" onClick={handleLikeClick}>
          <i className={`bi bi-heart-fill ${zoom ? "heart-zoom" : ""}`}></i> {likes}
        </button>
      </div>
      <h3>{title}</h3>
      <p>{paragraph}</p>
      <div className="comments">
        <button className="comment-button" onClick={handleCommentClick}>
          <i className="bi bi-chat-right"></i> Comentarios ({comments})
        </button>
      </div>
    </div>
  );
};

export default Card;
