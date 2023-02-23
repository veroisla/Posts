import { html, LitElement } from "lit";
import { AllPostsUseCase } from "../../usecases/all-posts.usecase";
import { OddPostsUseCase } from "../../usecases/odd-posts.usecase";
import "../../ui/posts.ui";
import { PostsComponentStyle } from "./posts-styles";

export class PostsComponent extends LitElement {
  static get styles() {
    return [PostsComponentStyle];
  }

  static get properties() {
    return {
      posts: {
        type: Array,
        state: true,
      },
    };
  }

  async connectedCallback() {
    super.connectedCallback();
    const allPostsUseCase = new AllPostsUseCase();
    this.posts = await allPostsUseCase.execute();
  }

  async allOdds() {
    const oddPostsUseCase = new OddPostsUseCase();
    this.posts = await oddPostsUseCase.execute();
  }

  render() {
    return html`
      <button @click="${this.allOdds}" id="oddAction">Odd</button>
      <posts-ui .posts="${this.posts}"></posts-ui>
    `;
  }

  createRenderRoot() {
    return this;
  }
}

customElements.define("genk-posts", PostsComponent);
