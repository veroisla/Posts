import { html, LitElement } from "lit";
import { ButtonComponentStyle } from "./button-style";

export class ButtonComponent extends LitElement {
  static get styles() {
    return [ButtonComponentStyle];
  }

  static get properties() {
    return {
      text: { type: String },
      disable: { type: Boolean },
      styleBtn: { type: String },
      notShow: { type: String },
      id: { type: String },
    };
  }

  clickButton() {
    this.dispatchEvent(new CustomEvent("onClick"));
  }

  render() {
    return html`<button
      type="button"
      class="btn"
      @click=${this.clickButton}
      style=${this.styleBtn}
      id=${this.id}
    >
      ${this.text}
    </button>`;
  }
}

customElements.define("button-component", ButtonComponent);
