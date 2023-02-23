import { css } from "lit-element";

export const ButtonComponentStyle = css`
  .btn {
    padding: 5px 5px;
    min-width: 100px;
    background-color: var(--color-white);
    border: 2px solid var(--border-color);
    border-radius: 8px;
    cursor: pointer;
    box-shadow: 0px 1px 2px rgba(166, 175, 195, 0.25);
    font-size: 14px;
    text-transform: uppercase;
  }

  .btn:hover {
    background-color: var(--hover-color);
    color: var(--color-white);
  }

  .disabled-btn {
    cursor: initial;
    background-color: var(--disabled-color);
    color: var(--color-grey);
  }

  .disabled-btn:hover {
    background-color: var(--color-grey-light-2);
    color: var(--color-grey);
  }

  .notShow {
    display: none;
  }
`;
