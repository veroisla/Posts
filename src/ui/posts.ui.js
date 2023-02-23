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

  updated() {
    super.updated();
    if (this.shadowRoot) {
      this.postDetail = this.shadowRoot.querySelector("post-detail-component");
    }
  }

  /**Método para guardar el valor del title y el body del post clicado*/
  // handleClickPost(event) {
  //   const title = event.currentTarget.getAttribute("data-title");
  //   const body = event.currentTarget.getAttribute("data-body");

  //   this.postDetail.setAttribute("title", title);
  //   this.postDetail.setAttribute("body", body);

  //   console.log(`title: ${title}`);
  //   console.log(`body: ${body}`);
  // }

  handleClickPost(e) {
    const id = e.target.closest(".post").dataset.id;
    const title = e.currentTarget.getAttribute("data-title");
    const body = e.currentTarget.getAttribute("data-body");

    // Wait until PostDetail component has been created
    const checkExist = setInterval(() => {
      const postDetail = document.querySelector("post-detail-component");
      if (postDetail) {
        clearInterval(checkExist);

        postDetail.setAttribute("title", title);
        postDetail.setAttribute("body", body);
      }
    }, 100);
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
          id="postDetailComponent"
          title=${this.title}
          body=${this.body}
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
