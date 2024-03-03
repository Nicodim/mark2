import {createGlobalStyle} from "styled-components";

export const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
  }

  #root {
    //font-family: consolas, "Times New Roman", serif;
    //font-family-text-redesigned: "Nunito Sans", sans-serif;
    //font-family-header-redesigned: "Roboto", sans-serif;
    font: 16px/1.5 "Nunito Sans", sans-serif;

    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    li {
      list-style-type: none;
    }

    input,
    button,
    textarea,
    select {
      margin: 0;
      font: inherit;
    }

    a {
      text-decoration: none;
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      font-weight: 300;
      font-family: "Roboto", sans-serif
    }
  }
`;
