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
  }

  handleClickPost() {
    console.log(this.posts);
  }

  render() {
    return html`
      <ul id="posts">
        ${this.posts &&
        this.posts.map(
          (post) => html`
            <li
              class="post"
              id="post_${post.id}"
              @click=${this.handleClickPost}
            >
              ${post.id} -- ${post.title}
            </li>
          `
        )}
      </ul>
    `;
  }

  createRenderRoot() {
    return this;
  }
}

customElements.define("posts-ui", PostsUI);

//addEventListener map post ui
