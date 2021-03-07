import React from "react";
import ModalContainer from "../ModalContainer/ModalContainer";
import "./ErrorModal.css";

const ErrorModal = ({error}) => {
  return (
    <ModalContainer>
      <div className="error-modal center">
          <h1>{error}</h1>
      </div>
    </ModalContainer>
  );
};

export default ErrorModal;
