import React from "react";
import Navbar from "./Navbar";
import Display from "./Display";
import axios from "axios";
import "../App.css";
import { useEffect, useState } from "react";
import ModalButton from "./ModalButton";

const server = "http://localhost:9000";

export default function App() {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [btnText, setbBtnText] = useState("Load more posts");

  const fetchdata = async () => {
    const response = await axios.get(`${server}/posts/${page}`);
    const info = response.data;
    if (info.length === 0) {
      setbBtnText("All posts loaded");
      return;
    }
    if (info.length > 0) {
      setbBtnText("Load more posts");
    }
    setData(data.concat(info));
    setPage(page + 1);
  };

  const postData = async (data) => {
    await axios.post(`${server}/newpost`, data);
    fetchdata();
  };

  useEffect(() => {
    fetchdata();
  }, []);

  return (
    <div className="App">
      <Navbar setData={setData} setbBtnText={setbBtnText} />
      <ModalButton postData={postData} />
      <Display
        content={data}
        setData={setData}
        page={page}
        setPage={setPage}
        fetchdata={fetchdata}
        btnText={btnText}
        setbBtnText={setbBtnText}
      />
    </div>
  );
}
