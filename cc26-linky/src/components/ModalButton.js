import React, { useState } from "react";
import InputModal from "./InputModal";
import "../InputModal.css";

export default function ModalButton({ postData }) {
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <button
        className="modalButton"
        onClick={() => {
          setOpenModal(true);
        }}
      >
        Add a new recommendation!
      </button>
      {openModal && (
        <InputModal
          openModal={openModal}
          setOpenModal={setOpenModal}
          postData={postData}
        />
      )}
    </>
  );
}
