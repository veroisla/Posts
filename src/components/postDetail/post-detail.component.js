import { html, LitElement } from "lit";
import { PostDetailComponentStyle } from "./post-detail-styles";
import "../button/button.component";
import "../input/input.component";

export class PostDetailComponent extends LitElement {
  static get styles() {
    return [PostDetailComponentStyle];
  }

  static get properties() {
    return {};
  }

  cancelPost() {
    console.log("Cancel");
  }

  updatePost() {
    console.log("update");
  }

  deletePost() {
    console.log("delete");
  }

  render() {
    return html`<section class="section">
      <h2>Post Detail</h2>
      ${this.input} ${this.btnAction}
    </section>`;
  }

  get input() {
    return html` <div class="container-inputs">
      <input-component
        name="title"
        label="Title"
        placeholder="Añade un título"
      ></input-component>
      <input-component
        name="body"
        label="Body"
        placeholder="Añade información"
      ></input-component>
    </div>`;
  }

  get btnAction() {
    return html` <button-component
        text="Cancel"
        @click=${this.cancelPost}
      ></button-component>
      <button-component
        text="Update"
        @click=${this.updatePost}
      ></button-component>
      <button-component
        text="Delete"
        @click=${this.deletePost}
      ></button-component>`;
  }
}

customElements.define("post-detail-component", PostDetailComponent);
