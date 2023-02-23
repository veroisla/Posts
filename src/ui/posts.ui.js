import { html, LitElement, css } from "lit";

export class PostsUI extends LitElement {
  static get styles() {
    return css`
      h4 {
        font-weight: bold;
      }

      .containers {
        display: flex;
      }
    `;
  }
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
    const title = event.target.getAttribute("data-title");
    const body = event.target.getAttribute("data-body");
    console.log(`title: ${title}`);
    console.log(`body: ${body}`);
  }

  render() {
    return html`
      <div class="containers">
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
                <h4>${post.id} -- ${post.title}</h4>
                --${post.body}
              </li>
            `
          )}
        </ul>
        <div>
          <post-detail-component
            @new-post=${this.agregarElemento}
          ></post-detail-component>
        </div>
      </div>
    `;
  }

  agregarElemento(e) {
    e.preventDefault();
    const nuevoElemento = e.detail;
    this.posts = [...this.posts, nuevoElemento];
  }

  createRenderRoot() {
    return this;
  }
}

customElements.define("posts-ui", PostsUI);
