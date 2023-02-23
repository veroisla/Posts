import { html, LitElement } from "lit";
import { PostDetailComponentStyle } from "./post-detail-styles";
import "../button/button.component";

export class PostDetailComponent extends LitElement {
  static get styles() {
    return [PostDetailComponentStyle];
  }

  static get properties() {
    return {};
  }

  render() {
    return html`<section>
      <h2>Post Detail</h2>
      <button-component></button-component>
      <button-component></button-component>
      <button-component></button-component>
    </section>`;
  }
}

customElements.define("post-detail-component", PostDetailComponent);
