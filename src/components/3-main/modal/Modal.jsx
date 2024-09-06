import React from "react";
import "./Modal.css";

const Modal = ({ show, onClose, content, title, image }) => {
  if (!show) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header-content flex">
          <div className="sub-modal-header-content flex">
            <img src={image} alt={title} />
            <h2>{title}</h2>
          </div>

          <button className="modal-close" onClick={onClose}>
            <span className="icon-cross" />
          </button>
        </div>
        <p>{content}</p>
      </div>
    </div>
  );
};

export default Modal;
