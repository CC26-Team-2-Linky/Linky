import axios from "axios";
import React, { useRef } from "react";
import { BiSearchAlt2 } from "react-icons/bi";

export default function Search({ setData, setbBtnText }) {
  const searchRef = useRef(null);

  const requestTag = async () => {
    let tag = searchRef.current.value.toLowerCase();
    console.log("tag:", tag);
    const results = await axios.get(
      `https://cc26-linky.herokuapp.com/tags/${tag}`
    );
    setbBtnText(0);
    setData(results.data);
  };

  return (
    <div className="search">
      <input
        type="text"
        className="searchInput"
        ref={searchRef}
        placeholder="Enter a tag"
      />
      <button className="searchButton" onClick={requestTag}>
        <BiSearchAlt2 />
        Search
      </button>
    </div>
  );
}
