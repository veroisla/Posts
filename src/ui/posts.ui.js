import { css, html, LitElement } from "lit";

export class PostsUI extends LitElement {
  static get properties() {
    return {
      posts: { type: Array },
      title: { type: String },
      body: { type: String },

      selectedPost: { type: Object },
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
          <div
            class=${this.posts.length <= 5
              ? "container-posts "
              : "box-scrollBar"}
          >
            <ul id="posts" class="list">
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
        </div>

        <post-detail-component
          title=${this.title}
          body=${this.body}
          @new-post=${this.addNewPost}
          @delete-post=${this.handleDeletePost}
        ></post-detail-component>
      </div>
    `;
  }

  addNewPost(e) {
    const newPost = e.detail;
    this.posts = [...this.posts, newPost];
  }

  createRenderRoot() {
    return this;
  }
}

customElements.define("posts-ui", PostsUI);
