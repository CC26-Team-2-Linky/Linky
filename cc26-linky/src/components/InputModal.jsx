import React, { useRef } from "react";
import "../InputModal.css";
import ReactDOM from "react-dom";

export default function InputModal({ postData, openModal, setOpenModal }) {
  const linkRef = useRef(null);
  const descriptionRef = useRef(null);
  const tagsRef = useRef(null);

  const pushedButton = () => {
    let result = {
      link: linkRef.current.value,
      description: descriptionRef.current.value,
      tags: tagsRef.current.value,
    };
    linkRef.current.value = "";
    descriptionRef.current.value = "";
    tagsRef.current.value = "";
    return result;
  };

  function uploadedData() {
    let data = pushedButton();
    postData(data);
    setOpenModal(false);
  }

  if (!openModal) return null;
  return ReactDOM.createPortal(
    <div className="modalBg">
      <div className="modalContainer">
        {" "}
        <p className="inputMessage">Post your recommendation!</p>
        <div className="inputLink-box">
          {" "}
          <div className="inputLabel"> Link </div>
          <input
            type="text"
            className="input-box"
            ref={linkRef}
            placeholder="Add link"
          />
        </div>
        <div className="inputDesc-box">
          {" "}
          <div className="inputLabel"> Description: </div>
          <input
            type="text"
            className="input-box"
            ref={descriptionRef}
            placeholder="Write a description"
          />
        </div>
        <div className="inputTag-box">
          {" "}
          <div className="inputLabel"> Tags </div>
          <input
            className="input-box"
            type="text"
            ref={tagsRef}
            placeholder='separate with "," '
          />
        </div>
        <div className="buttons">
          <button className="inputButton post" onClick={uploadedData}>
            Post!
          </button>
          <button
            className="inputButton cancel"
            onClick={() => {
              setOpenModal(false);
            }}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>,
    document.getElementById("portal")
  );
}
