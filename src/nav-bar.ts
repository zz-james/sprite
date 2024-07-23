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

  override render() {
    return html`
      <header>
        <div class="wrapper">
          <a
            href="#"
            @click=${(e: MouseEvent) => {
              e.preventDefault();
              this.switchSlide('home');
            }}
            >Home</a
          >
          <a
            href="#"
            @click=${(e: MouseEvent) => {
              e.preventDefault();
              this.switchSlide('who');
            }}
            >WHO</a
          >
          <a
            href="#"
            @click=${(e: MouseEvent) => {
              e.preventDefault();
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
