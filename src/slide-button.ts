import {LitElement, html, css, CSSResultGroup} from 'lit';
import {customElement} from 'lit/decorators.js';

@customElement('slide-button')
export class SlideButton extends LitElement {
  static override styles: CSSResultGroup = css`
    #btn {
      width: 2em;
      height: 2em;
      cursor: pointer;
      border: 1px solid grey;
      border-radius: 1em;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    ::slotted(svg) {
      width: 1em;
      height: 1em;
    }
  `;

  override render() {
    return html`
      <div id="btn" tabindex="0" role="button" aria-pressed="false">
        <slot></slot>
      </div>
    `;
  }
}
