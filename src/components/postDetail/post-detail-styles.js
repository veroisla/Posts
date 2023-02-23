import { css } from "lit-element";

export const PostDetailComponentStyle = css`
  .section {
    height: 400px;
    width: 500px;
    border: 4px solid var(--border-color);
    border-radius: 10px;
    padding: 20px;
    margin-bottom: 30px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .container-inputs {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    margin-top: 60px;
  }

  .container-btns {
    display: flex;
    justify-content: space-evenly;
    margin-top: 50px;
    width: 500px;
  }

  .notShow {
    display: none;
    font-size: 30px;
  }

  .textarea-container {
    width: 70%;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    margin-bottom: 30px;
  }

  .input {
    padding: 0.625rem;
    border-radius: 5px;
    border: 1px solid var(--disabled-color);
  }

  .input:focus {
    border: 2px solid var(--border-color);
    outline-width: 0;
    background-color: white;
  }
`;
