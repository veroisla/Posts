import { html, LitElement } from "lit";
import { InputComponentStyle } from "./input-style";

export class InputComponent extends LitElement {
  static get styles() {
    return [InputComponentStyle];
  }

  static get properties() {
    return {
      placeholder: { type: String },
      label: { type: String },
      name: { type: String },
      value: { type: String },
    };
  }

  changeValue(e) {
    this.value = e.target.value;
    this.dispatchEvent(
      new CustomEvent("changeValue", {
        detail: this.value,
      })
    );
  }

  render() {
    return html`<div class="textarea-container">
      <label for=${this.name} class="label">${this.label}</label>
      <input
        id=${this.name}
        class="input input-textarea"
        placeholder=${this.placeholder}
        .value="${this.value || ""}"
        @input=${this.changeValue}
      ></input>
    </div>`;
  }
}

customElements.define("input-component", InputComponent);
