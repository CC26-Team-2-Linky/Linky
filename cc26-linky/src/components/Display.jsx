import React from "react";
import "../Display.css";
import { BsLink45Deg } from "react-icons/bs";

export default function Display({ content, page, fetchdata }) {
  if (content.length > 0) {
    return (
      <div className="display-container">
        <div>
          <p className="displayMessage">LINKY FEED</p>
        </div>
        <div className="folder-container">
          {content.map((item, index) => {
            const itemUrl = item.link;
            return (
              <div className="item-container" key={index}>
                <p className="item-desc">{item.description}</p>
                <div className="link">
                  <a href={itemUrl}>
                    <BsLink45Deg />
                    check it out
                  </a>
                </div>
                <div className="tags">
                  {item.tags.map((tag) => (
                    <div>#{tag}</div>
                  ))}
                </div>
                  <button className="loadBtn" onClick={fetchdata}>
                    Load more posts
                  </button>
              </div>
            );
          })}
        </div>
      </div>
    );
  } else {
    return <div> Loading....</div>;
  }
}
