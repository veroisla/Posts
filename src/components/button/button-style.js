import { css } from "lit-element";

export const ButtonComponentStyle = css`
  .btn {
    padding: 5px 5px;
    min-width: 100px;
    background-color: var(--color-positive);
    border: 1px solid var(--color-grey-light-2);
    border-radius: 1.5rem;
    cursor: pointer;
    font-size: var(--font-size-button);
    line-height: var(--line-height-button);
    box-shadow: 0px 1px 2px rgba(166, 175, 195, 0.25);
  }

  .btn:hover {
    background-color: var(--color-primary);
    color: var(--color-positive);
  }

  .disabled-btn {
    cursor: initial;
    background-color: var(--color-grey-light-2);
    color: var(--color-grey);
  }

  .disabled-btn:hover {
    background-color: var(--color-grey-light-2);
    color: var(--color-grey);
  }
`;
