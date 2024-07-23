var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';
let SlideButton = class SlideButton extends LitElement {
    render() {
        return html `
      <div id="btn" tabindex="0" role="button" aria-pressed="false">
        <slot></slot>
      </div>
    `;
    }
};
SlideButton.styles = css `
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
SlideButton = __decorate([
    customElement('slide-button')
], SlideButton);
export { SlideButton };
//# sourceMappingURL=slide-button.js.map