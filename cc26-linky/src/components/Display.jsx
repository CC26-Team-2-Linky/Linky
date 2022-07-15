import React from "react";
import "../Display.css";

export default function Display({ content, page, fetchdata }) {
  if (content.length > 0) {
    return (
      <div className="display-container">
        <p className="displayMessage">Find your favorites</p>
        {content.map((item, index) => {
          const itemUrl = item.link;
          return (
            <div className="item-container" key={index}>
              <a href={itemUrl}>Click the link!</a>
              <p className="item-desc">{item.description}</p>
            </div>
          );
        })}
        <div className="page-container">
          <button className="loadBtn" onClick={fetchdata}>
            Load more posts
          </button>
        </div>
      </div>
    );
  } else {
    return <div> Loading....</div>;
  }
}
