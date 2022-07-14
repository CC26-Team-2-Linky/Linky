import React, { useState } from "react";
import InputModal from "./InputModal";

export default function ModalButton({ postData }) {
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <button
        onClick={() => {
          setOpenModal(true);
        }}
      >
        open modal
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
