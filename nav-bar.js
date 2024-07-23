var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
import styles from './nav-bar-css';
let HomeTeaser = class HomeTeaser extends LitElement {
    constructor() {
        super(...arguments);
        this.switchSlide = (slide) => {
            window.switchSection(slide);
            return false;
        };
    }
    render() {
        return html `
      <header>
        <div class="wrapper">
          <a
            href="#"
            @click=${(e) => {
            e.preventDefault();
            this.switchSlide('home');
        }}
            >Home</a
          >
          <a
            href="#"
            @click=${(e) => {
            e.preventDefault();
            this.switchSlide('who');
        }}
            >WHO</a
          >
          <a
            href="#"
            @click=${(e) => {
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
};
HomeTeaser.styles = styles;
HomeTeaser = __decorate([
    customElement('nav-bar')
], HomeTeaser);
export { HomeTeaser };
//# sourceMappingURL=nav-bar.js.map