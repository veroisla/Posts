import { html, LitElement } from "lit";

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
    this.addEventListener("nuevo-elemento", this.agregarElemento.bind(this));
  }

  /* Guardar valor del title del post clicado */
  handleClickPost(event) {
    // console.log(`Post ${event.target.getAttribute("data-title")}`);
    const title = event.target.getAttribute("data-title");
    const body = event.target.getAttribute("data-body");
    console.log(`title: ${title}`);
    console.log(`body: ${body}`);
  }

  render() {
    return html`
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
              ${post.id} -- ${post.title} --${post.body}
            </li>
          `
        )}
      </ul>
    `;
  }

  agregarElemento(e) {
    const nuevoElemento = e.detail;
    this.posts = [...this.posts, nuevoElemento];
    this.requestUpdate();
  }

  createRenderRoot() {
    return this;
  }
}

customElements.define("posts-ui", PostsUI);
