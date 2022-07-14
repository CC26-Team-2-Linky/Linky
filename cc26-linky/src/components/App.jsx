import React from "react";
import Navbar from "./Navbar";
import Display from "./Display";
import axios from "axios";
import "../App.css";
import { useEffect, useState } from "react";
import ModalButton from "./ModalButton";

const server = "http://localhost:9000";

export default function App() {
  const [data, setData] = useState(null);
  const [page, setPage] = useState(1);

  const fetchdata = async () => {
    const response = await axios.get(`${server}/api`);
    const info = response.data;
    console.log(info);
    setData(info);
    console.log(data);
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
      <ModalButton postData={postData} />
      <Display content={data} />
    </div>
  );
}
