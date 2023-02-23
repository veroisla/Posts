import { html, LitElement } from "lit";
import { PostDetailComponentStyle } from "./post-detail-styles";
import "../button/button.component";

export class PostDetailComponent extends LitElement {
  static get styles() {
    return [PostDetailComponentStyle];
  }

  static get properties() {
    return {
      valueTitle: { type: String },
      valueBody: { type: String },
    };
  }

  constructor() {
    super();
    this.valueTitle = "";
    this.valueBody = "";
  }

  //Inputs guardar valor y borrar contenido//

  cancelPost() {
    console.log("Cancel");
    this.valueTitle = "";
    this.valueBody = "";
  }

  handleInputTitle(e) {
    this.valueTitle = e.target.value;
    console.log(this.valueTitle);
  }

  handleInputBody(e) {
    this.valueBody = e.target.value;
    console.log(`body ${this.valueBody}`);
  }

  //

  updatePost() {
    console.log("update");
  }

  deletePost() {
    console.log("delete");
  }

  createPost() {
    console.log("create");
  }

  render() {
    return html`<section class="section">
      <h2>Post Detail</h2>
      ${this.input} ${this.btnAction}
    </section>`;
  }

  get input() {
    return html` <form class="container-inputs">
       <label for=title class="label">Title</label>
      <input
        id=titleInput
        class="input input-textarea"
        placeholder="Añade un título"
        .value="${this.valueTitle || ""}"
        @input=${this.handleInputTitle}
      ></input>

        <label for=body class="label">Body</label>
      <input
        id=BodyInput
        class="input input-textarea"
        placeholder="Añade información"
        .value="${this.valueBody || ""}"
        @input=${this.handleInputBody}
      ></input>
    </form>`;
  }

  get btnAction() {
    return html` <button-component
        text="Cancel"
        @click=${this.cancelPost}
      ></button-component>
      <button-component
        text="Create"
        id="buttonCreate"
        @click=${this.createPost}
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
