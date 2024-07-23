var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
import styles from './home-teaser-css';
let HomeTeaser = class HomeTeaser extends LitElement {
    render() {
        return html `
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
};
HomeTeaser.styles = styles;
HomeTeaser = __decorate([
    customElement('home-teaser')
], HomeTeaser);
export { HomeTeaser };
//# sourceMappingURL=home-teaser.js.map