import styled, { css } from "styled-components";

export const CustomBtn = styled.button`
  background: transparent;
  border-radius: 5px;
  border: 2px solid palevioletred;
  color: palevioletred;
  margin: 0 1em;
  padding: 0.25em 1em;

  ${(props) =>
    props.primary &&
    css`
      background: powderblue !important;
      color: red;
    `};

  ${(props) =>
    props.success &&
    css`
      color: white;
      background-color:aqua !important;
    `};
  ${(props) =>
    props.secondary &&
    css`
      color: white;
      background-color:red !important;
    `};
  ${(props) =>
    props.danger &&
    css`
      color: white;
      background-color:black !important;
    `};
`;

export const HeadingText = styled.h1`
  ${(props) => {
    switch (props.type) {
      case "Success":
        return css`
          background: lightgreen;
          color: green;
          font-size: 50px;
        `;
      case "error":
        return css`
          background: red;
          color: black;
          font-size: 50px;
        `;
      case "info":
        return css`
          background: blue;
          color: skyblue;
          font-size: 50px;
        `;
      default:
        return css`
          //   background: black;
          color: black;
          font-size: 40px;
        `;
    }
  }}
`;

export const ExtendedButton = styled(CustomBtn)`
  color: red;
  background: gray !important;
  &:hover {
    box-shadow:0px 0px 5px black;
  }
  @media  (min-width: 300px) and (max-width: 700px) {
    color: red;
    // background: green;
  background: green !important;

 }
`;

export const NewButton = styled.h4`
background: green;
font-size: 40px;
@media  (min-width: 150px) and (max-width: 319px) {
   color: red;
   background: gray;
}
`;
export const NewText = styled.p`
background: gray;
font-size: 40px;
`