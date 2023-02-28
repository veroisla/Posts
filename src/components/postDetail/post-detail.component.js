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

  connectedCallback() {
    super.connectedCallback();
    this.onSubmit = false;
  }

  /** Método para añadir un nuevo post a la lista de post */
  addPost() {
    if (this.title && this.body) {
      const newPost = {
        title: this.title,
        body: this.body,
      };

      this.dispatchEvent(new CustomEvent("new-post", { detail: newPost }));

      this.title = "";
      this.body = "";

      console.log(newPost);
    }
  }

  /** Método para cancelar acción y limpiar input */
  cancelPost() {
    console.log("Cancel");
    this.title = "";
    this.body = "";
  }

  handleInputTitle(e) {
    this.title = e.target.value;
  }

  handleInputBody(e) {
    this.body = e.target.value;
  }

  /**Método para eliminar post */
  deletePost() {
    if (this.title && this.body) {
      const deleteEvent = new CustomEvent("delete-post", {
        detail: {
          title: this.title,
        },
      });

      this.dispatchEvent(deleteEvent);

      this.title = "";
      this.body = "";
    }
  }

  /**Método para modificar post */
  updatePost() {
    console.log("update");
  }

  render() {
    return html`<section class="section">
      <h2>Post Detail</h2>
      ${this.input}
    </section>`;
  }

  get input() {
    return html` <form class="container-inputs">
    <div class="textarea-container">
      <label for=title class="label">Título</label>
      <input
        id=titleInput
        class="input input-textarea"
        placeholder="Añade un título"
        .value="${this.title || ""}"
        @input=${this.handleInputTitle}
      ></input>
    </div>
     
    <div class="textarea-container">
      <label for=body class="label">Body</label>
      <input
        id=BodyInput
        class="input input-textarea"
        placeholder="Añade información"
        .value="${this.body || ""}"
        @input=${this.handleInputBody}
      ></input>
    </div>
       ${this.btnAction}
    </form>`;
  }

  get btnAction() {
    return html` <div class="container-btns">
      <button-component
        text="Agregar"
        @click="${this.addPost}"
      ></button-component>
      <button-component
        text="Cancelar"
        @click=${this.cancelPost}
      ></button-component>
      <button-component
        text="Modificar"
        @click=${this.updatePost}
      ></button-component>
      <button-component
        text="Eliminar"
        @click=${this.deletePost}
      ></button-component>
    </div>`;
  }
}

customElements.define("post-detail-component", PostDetailComponent);
