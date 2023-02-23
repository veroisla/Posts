import "../components/posts/posts.component";
import "../components/postDetail/post-detail.component";

export class PostsPage extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
            <h1 class="title">Posts Page</h1>
            <div class="containers">
            <genk-posts></genk-posts>
            <post-detail-component></post-detail-component>
            </div>
        `;
  }
}

customElements.define("posts-page-genk", PostsPage);
