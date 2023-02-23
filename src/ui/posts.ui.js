import { css, html, LitElement } from "lit";

export class PostsUI extends LitElement {
  static get properties() {
    return {
      posts: {
        type: Array,
      },
    };
  }

  constructor() {
    super();
    this.posts = [];
  }

  connectedCallback() {
    super.connectedCallback();
  }

  /* Guardar valor del title del post clicado */
  handleClickPost(event) {
    // console.log(`Post ${event.target.getAttribute("data-title")}`);
    const title = event.currentTarget.getAttribute("data-title");
    const body = event.currentTarget.getAttribute("data-body");
    console.log(`title: ${title}`);
    console.log(`body: ${body}`);
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
          @new-post=${this.agregarElemento}
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
