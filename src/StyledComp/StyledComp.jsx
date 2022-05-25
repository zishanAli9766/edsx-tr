
import React, { useState } from "react";
import styled from "styled-components";
import { CustomBtn, ExtendedButton, HeadingText, NewButton, NewText } from "./CommonStyledComps";

const StyledCommp = () => {
  const [isValid, setIsValid] = useState(true);
  const Data = () =>{
      console.log("Success");
  }
  
  return (
    <div>
      <HeadingText type={`${isValid ? "Success" : "error"}`}>
        Styled Components
      </HeadingText>
      <HeadingText type={`${isValid ? "error" : "Success"}`}>
        Styled Components
      </HeadingText>
      <CustomBtn success onClick={() => alert("Hey There")}>
        Styled Component Button
      </CustomBtn>
      <CustomBtn danger >
        Styled Component Button
      </CustomBtn>
      <CustomBtn secondary >
        Styled Component Button
      </CustomBtn>
      <CustomBtn primary >
        Styled Component Button
      </CustomBtn>
      <ExtendedButton onClick={Data}>Extended Styled Component Button</ExtendedButton>
      <NewButton>All Good </NewButton>
      <NewText>Lorem ipsum dolor sit amet consectetur adipisicing elit. At id quisquam, sit voluptate maiores error voluptatem laboriosam nihil fugit quo accusantium assumenda esse! Eum, magnam.</NewText>
    </div>
  );
};

export default StyledCommp;