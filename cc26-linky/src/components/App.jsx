import "../App.css";
import React from "react";
import Navbar from "./Navbar";
import Display from "./Display";
import Input from "./Input";
import axios from "axios";
import { useEffect, useState } from "react";

export default function App() {
  const [data, setData] = useState(null);
  const [upload, setUpload] = useState(""); //post data
  const [keyword, setKeyword] = useState(""); //tag search data

  ////fetch data
  const fetchdata = async () => {
    const response = await axios.get("http://localhost:9000/api");
    const info = response.data;
    console.log("fetched info", info);
    setData(info);
  };

  const postData = async (data) => {
    console.log("postingggg", data);
    await axios.post("http://localhost:9000/newpost", data);
    fetchdata();
  };
  useEffect(() => {
    fetchdata();
    // console.log('DATA: ', data)
  }, []);

  ///tag search
  function filterData(currentData) {
    console.log("currentData", currentData);
    const filtered = currentData.filter((item) => item.tags.includes(keyword));
    console.log("filtered", filtered);
  }

  useEffect(() => {
    // filterData(data)
  }, [keyword]);

  return (
    <div className="App">
      <Navbar setKeyword={setKeyword} keyword={keyword} />
      <Input postData={postData} />
      <Display content={data} />
    </div>
  );
}

//App -- Navbar, Input, Display
//Navbar--Logo, SearchBar
//Input-- InputBox, Button
//Display-- Link and discriptions
