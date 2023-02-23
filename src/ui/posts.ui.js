import { css, html, LitElement } from "lit";

export class PostsUI extends LitElement {
  static get properties() {
    return {
      posts: {
        type: Array,
      },

      title: { type: String },
      body: { type: String },
    };
  }

  constructor() {
    super();
    this.posts = [];
    this.postDetail = null;
  }

  /**Método para guardar el valor del title y el body del post clicado, se lo paso a postDetail*/
  handleClickPost(e) {
    const title = e.currentTarget.getAttribute("data-title");
    const body = e.currentTarget.getAttribute("data-body");

    const postDetail = document.querySelector("post-detail-component");
    postDetail.setAttribute("title", title);
    postDetail.setAttribute("body", body);
  }

  /**Método para eliminar un post seleccionado */
  handleDeletePost(e) {
    const postId = e.detail.id;
    const index = this.posts.findIndex((post) => post.id === postId);
    if (index > -1) {
      this.posts.splice(index, 1);
      this.requestUpdate();
    }
  }

  render() {
    return html`
      <div class="containers">
        <div class="container-posts">
          <ul id="posts">
            ${this.posts &&
            this.posts.map(
              (post) => html`
                <li
                  data-title="${post.title}"
                  data-body=${post.body}
                  class="post"
                  id="post_${post.id}"
                  @click=${this.handleClickPost}
                >
                  <h4 class="titlePost" data-title="${post.title}">
                    ${post.id} - ${post.title}
                  </h4>
                  <p class="bodyPost" data-body=${post.body}>${post.body}</p>
                </li>
              `
            )}
          </ul>
        </div>

        <post-detail-component
          title=${this.title}
          body=${this.body}
          @new-post=${this.agregarElemento}
          @delete-post=${this.handleDeletePost}
        ></post-detail-component>
      </div>
    `;
  }

  agregarElemento(e) {
    const nuevoElemento = e.detail;
    this.posts = [...this.posts, nuevoElemento];
  }

  createRenderRoot() {
    return this;
  }
}

customElements.define("posts-ui", PostsUI);

// handleDeletePost :
// El código define una función llamada handleDeletePost que toma un evento como parámetro.
// La función obtiene el id del post a eliminar del detalle del evento usando la propiedad detail.id.

// Luego, la función usa el método findIndex para encontrar el índice del post dentro del arreglo posts
//  que tiene el mismo id. Si se encuentra un post con ese id, se elimina del arreglo usando el método splice y
//   se solicita una actualización del componente mediante el método requestUpdate.
//   La actualización se realizará en el próximo ciclo de actualización del DOM.
