import { css } from "lit-element";

export const InputComponentStyle = css`
  .textarea-container {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    width: 80%;
  }

  .label {
    font-size: var(--font-size-s);
  }

  .input {
    padding: 0.625rem;
    font-size: var(--font-size-s);
    border-radius: 5px;
    border: 1px solid var(--color-grey-light);
    font-family: var(--font-family-primary, "sans-serif");
  }

  .input:focus {
    border: 1px solid var(--color-grey-dark);
    outline-width: 0;
    background-color: white;
  }
`;
