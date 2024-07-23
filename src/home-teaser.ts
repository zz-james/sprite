import {LitElement, html, CSSResultGroup} from 'lit';
import {customElement} from 'lit/decorators.js';

import styles from './home-teaser-css';

@customElement('home-teaser')
export class HomeTeaser extends LitElement {
  static override styles?: CSSResultGroup | undefined = styles;

  override render() {
    return html`
      <div class="container">
        <div class="wrapper active">
          <div class="motion-text" id="home-mt">Hello</div>
        </div>
        <div class="copy active">Something blah blah.</div>

        <div class="desc active">
          sprite studios <br class="sp" />we create digital experiences.
        </div>

        <div class="desc-ja">&nbsp;<br class="sp" /></div>
      </div>
    `;
  }
}
