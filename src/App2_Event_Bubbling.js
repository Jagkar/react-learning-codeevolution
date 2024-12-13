import React, { useState } from "react";
import ReactDOM from "react-dom";

const Modal = ({ onClose }) => {
  return ReactDOM.createPortal(
    <div
      onClick={() => console.log("Modal Clicked")}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          backgroundColor: "white",
          padding: "20px",
          borderRadius: "8px",
        }}
        onClick={(e) => {
          // Prevent bubbling to the parent container
          e.stopPropagation();
        }}
      >
        <h2>Modal Content</h2>
        <button onClick={onClose}>Close</button>
      </div>
    </div>,
    document.body // Rendered outside the parent component's DOM hierarchy
  );
};

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div
      onClick={() => console.log("App Clicked")}
      style={{
        padding: "20px",
        textAlign: "center",
      }}
    >
      <h1>React Portals and Event Bubbling</h1>
      <button onClick={() => setIsModalOpen(true)}>Open Modal</button>
      {isModalOpen && <Modal onClose={() => setIsModalOpen(false)} />}
    </div>
  );
};

export default App;
