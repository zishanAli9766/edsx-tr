import React, { useState } from "react";

const FuntionalComp = () => {
  const [data, setData] = useState({
    name: "Zishan",
    addr: "Ali",
    count: 0,
  });

  const [arr, setArr] = useState([]);
  
  const handleclick = () => {
    setData((prevState) => ({
      ...prevState,
      count: prevState.count + 1,
    }));
    setArr((prevState) => [data.name,data.count + 1, ...prevState]);
  }
  
  return (
    <div
    >
      <h1>
        Functional Comp {data.name} {data.addr}
        {/* {data.count} */}
      </h1>
      <button onClick={handleclick}>Click</button>
      <h1>{JSON.stringify(arr)}</h1>
      <h3>{arr}</h3>
      {/* {arr.map((data) => (
        <h1>{data}</h1>
      ))} */}
    </div>
  );
};
export default FuntionalComp;
