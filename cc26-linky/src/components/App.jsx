import React from "react";
import Navbar from "./Navbar";
import Display from "./Display";
import axios from "axios";
import "../App.css";
import { useEffect, useState } from "react";
import ModalButton from "./ModalButton";

export default function App() {
  const [data, setData] = useState(null);

  const fetchdata = async () => {
    const response = await axios.get("https://cc26-linky.herokuapp.com/api");
    const info = response.data;
    setData(info);
    console.log(data);
  };

  const postData = async (data) => {
    await axios.post("https://cc26-linky.herokuapp.com/newpost", data);
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
