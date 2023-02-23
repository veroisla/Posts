import { html, LitElement } from "lit";
import { ButtonComponentStyle } from "./button-style";

export class ButtonComponent extends LitElement {
  static get styles() {
    return [ButtonComponentStyle];
  }

  static get properties() {
    return {
      text: { type: String },
      styleBtn: { type: String },
      disable: { type: Boolean },
    };
  }

  clickButton() {
    this.dispatchEvent(new CustomEvent("onClick"));
  }

  render() {
    return html`<button
      type="button"
      class="btn ${this.disable ? "disabled-btn" : ""}"
      style=${this.styleBtn}
      @click=${this.clickButton}
      ?disabled=${this.disable}
    >
      ${this.text}
    </button>`;
  }
}

customElements.define("button-component", ButtonComponent);
