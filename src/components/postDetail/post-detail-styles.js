import { css } from "lit-element";

export const PostDetailComponentStyle = css`
  .section {
    border: 2px solid black;
    height: 500px;
    width: 500px;
  }

  .container-inputs {
    height: 30%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
  }

  .container-btns {
    display: flex;
    justify-content: space-evenly;
  }

  .notShow {
    display: none;
    font-size: 30px;
  }
`;
