import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
 html {
  box-sizing: border-box;
  width: 100vw;
  overflow-x: hidden;
}
 
*,
*::before,
*::after {
  box-sizing: inherit;
}

 body {
  margin: 0;

    padding: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
    Oxygen-Sans, Ubuntu, Cantarell, 'Helvetica Neue', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

   background-color: rgb(231 236 242);
      color: rgb(1,67,97);
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}

ul {
  list-style: none;
   margin: 0;
    padding: 0;
}


img {
  display: block;
  max-width: 100%;
  height: auto;
}

`;
