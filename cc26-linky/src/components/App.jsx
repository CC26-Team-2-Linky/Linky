import React from "react";
import Navbar from "./Navbar";
import Display from "./Display";
import Input from "./Input";
import axios from "axios";
import "../App.css";
import { useEffect, useState } from "react";

const server = "http://localhost:9000";

export default function App() {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);

  const fetchdata = async () => {
    const response = await axios.get(`${server}/posts/${page}`);
    const info = response.data;
    if (info.length === 0) {
      return;
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
      <Navbar setData={setData} />
      <Input postData={postData} />
      <Display content={data} page={page} fetchdata={fetchdata} />
    </div>
  );
}
