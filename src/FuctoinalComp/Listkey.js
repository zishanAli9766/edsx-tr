import React from 'react'

function Listkey() {
  const fruits = [
    "red apple",
    "green apple",
    "orange",
    "strawberry",
    "kiwi",
    "banana",
    "pineapple",
    "peach",
    "watermelon",
    "red apple",
    "green apple",
    "orange",
    "strawberry",
    "kiwi",
    "banana",
    "pineapple",
    "peach",
    "watermelon",
  ];
  return (
    <>
    <div>Listkey</div>
      {fruits.map((item,index) =>{
        return(
          <div key={index}> 
          <h2>{index + 1} : { item}</h2>
          </div>

        )
      })}
    </>
  )
}

export default Listkey