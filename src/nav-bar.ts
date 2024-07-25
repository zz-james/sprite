import {LitElement, html, CSSResultGroup} from 'lit';
import {customElement} from 'lit/decorators.js';

import styles from './nav-bar-css';

type augWindow = Window &
  typeof globalThis & {
    switchSection: (param: string) => void;
  };

@customElement('nav-bar')
export class HomeTeaser extends LitElement {
  static override styles?: CSSResultGroup | undefined = styles;

  switchSlide = (slide: string) => {
    (window as augWindow).switchSection(slide);
    return false;
  };

  // use the on first load lifecycle hook to route to correct page if there is a hash frag
  override connectedCallback(): void {
    super.connectedCallback();
    if (window.location.hash) {
      // Fragment exists
      this.switchSlide(window.location.hash.slice(1));
    } else {
      // Fragment doesn't exist
    }
  }

  override render() {
    return html`
      <header>
        <div class="wrapper">
          <a
            href="index.html#home"
            @click=${() => {
              // e.preventDefault();
              this.switchSlide('home');
            }}
            >Home</a
          >
          <a
            href="index.html#who"
            @click=${() => {
              // e.preventDefault();
              this.switchSlide('who');
            }}
            >WHO</a
          >
          <a
            href="index.html#work"
            @click=${() => {
              // e.preventDefault();
              this.switchSlide('work');
            }}
            >WORK</a
          >

          <a href="contact.html">CONTACT</a>
        </div>
      </header>
    `;
  }
}
