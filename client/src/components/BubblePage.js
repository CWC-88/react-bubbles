import React, { useState, useEffect } from "react";
import axios from "axios";

import Bubbles from "./Bubbles";
import ColorList from "./ColorList";
import axiosWithAuth from "../axiosWithAuth";

const BubblePage = () => {
  const [colorList, setColorList] = useState([]);
const [update, setUpdate] = useState(false);

// fetch your colors data from the server when the component mounts
  // set that data to the colorList state property
const fetchData = () =>{
axiosWithAuth()
.get(`http://localhost:5000/api/colors`)
.then((res) =>{
  console.log("cuhhla", res.data);
setColorList(res.data)
})
.catch((err)=>{
  console.log(err)
});

};

useEffect(() =>{
  fetchData();
  setUpdate(false);
},[update]);


  return (
    <>
      <ColorList colors={colorList} updateColors={setColorList} />
      <Bubbles colors={colorList} />
    </>
  );
};

export default BubblePage;
