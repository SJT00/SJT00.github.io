import React from "react";
import Toast from "react-bootstrap/Toast";

function ConstructionToast() {
  return (
    <Toast
      className="custom-toast"
      style={{ zIndex: 1, position: "fixed", right: 0, bottom: 0 }}
    >
      <Toast.Header closeButton={false}>
        <img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" />
        <strong className="me-auto">🚧 Active Construction 🚧</strong>
      </Toast.Header>
      <Toast.Body>Heads up! Things are shifting and lifting.</Toast.Body>
    </Toast>
  );
}

export default ConstructionToast;
