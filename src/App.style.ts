import styled from "styled-components";

export const StyledApp = styled.div`
  height: 100%;
  min-height: 100vh;
  box-sizing: border-box;

  h1 {
    text-align: center;
    margin: 0;
    font-size: 64px;
    color: black;
  }

  .grid {
    max-width: 920px;
    margin: auto;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-auto-rows: auto;
    gap: 16px;
  }

  .card {
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

  header {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 16px;
    margin-bottom: 32px;
    background: #ffc345;
    padding: 16px;
  }

  #navigation {
    max-width: 920px;
    margin: 16px auto 0;
    grid-template-columns: repeat(2, 1fr);
    display: grid;
    gap: 16px;
  }
`;