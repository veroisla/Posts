import { html, LitElement } from "lit";
import { PostDetailComponentStyle } from "./post-detail-styles";
import "../button/button.component";

export class PostDetailComponent extends LitElement {
  static get styles() {
    return [PostDetailComponentStyle];
  }

  static get properties() {
    return {
      title: { type: String },
      body: { type: String },
    };
  }

  constructor() {
    super();
    this.title = "";
    this.body = "";
  }

  //Inputs guardar valor y borrar contenido//

  cancelPost() {
    console.log("Cancel");
    this.title = "";
    this.body = "";
  }

  handleInputTitle(e) {
    this.title = e.target.value;
    console.log(this.title);
  }

  handleInputBody(e) {
    this.body = e.target.value;
    console.log(`body ${this.body}`);
  }

  //

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

  addPost() {
    const nuevoElemento = {
      title: this.title,
      body: this.body,
    };

    this.dispatchEvent(new CustomEvent("new-post", { detail: nuevoElemento }));

    this.title = "";
    this.body = "";

    console.log(nuevoElemento);
  }

  get input() {
    return html` <form class="container-inputs" @submit=${this.agregarElemento}>
       <label for=title class="label">Title</label>
      <input
        id=titleInput
        class="input input-textarea"
        placeholder="Añade un título"
        .value="${this.title || ""}"
        @input=${this.handleInputTitle}
      ></input>

        <label for=body class="label">Body</label>
      <input
        id=BodyInput
        class="input input-textarea"
        placeholder="Añade información"
        .value="${this.body || ""}"
        @input=${this.handleInputBody}
      ></input>

      
        <button type="button" @click="${this.addPost}">Agregar</button>
    </form>`;
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
