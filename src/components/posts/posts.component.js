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

  handleClick() {
    console.log(this.posts);
  }

  render() {
    return html` <posts-ui .posts="${this.posts}"></posts-ui> `;
  }

  get btnAdd() {
    return html`<button-component
      text="Add"
      @click=${this.handleClick}
    ></button-component>`;
  }

  createRenderRoot() {
    return this;
  }
}

customElements.define("genk-posts", PostsComponent);
