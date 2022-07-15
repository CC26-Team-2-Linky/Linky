import React from "react";
import "../Display.css";
import { BsLink45Deg } from "react-icons/bs";

export default function Display({
  content,
  setPage,
  fetchdata,
  setData,
  btnText,
  setbBtnText,
}) {
  const resetDisplay = () => {
    setPage(1);
    setData([]);
    console.log(content);
    setbBtnText("Load more posts");
    fetchdata();
  };

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
              </div>
            );
          })}
        </div>
        {btnText ? (
          <button className="loadBtn" onClick={fetchdata}>
            {btnText}
          </button>
        ) : (
          <button className="loadBtn" onClick={resetDisplay}>
            See latest posts
          </button>
        )}
      </div>
    );
  } else {
    {
      fetchdata();
    }
    return <div> Loading....</div>;
  }
}
