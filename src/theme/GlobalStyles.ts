import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    cursor: none;
  }
  body {
    background: #292929;
    color: white;
    font-family: 'Abel', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    background-image: url('https://wallpapers.com/images/featured/pokemon-hd-fazqcs1tmwwte1ap.webp');
    background-size: cover;
  }

  button {
    font-family: inherit;
    background: inherit;
    color: inherit;

    border: none;
    background: rgba(0, 0, 0, 0.5);
    border-radius: 4px;
    padding: 24px;
    text-align: center;
    text-transform: capitalize;
    font-size: 20px;
    transition: all 0.2s;

    &:hover {
      background: rgba(0, 0, 0, 0.7);
    }
  }
`;
