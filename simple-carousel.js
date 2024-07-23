var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, html } from 'lit';
import { customElement, property, queryAssignedElements, state, } from 'lit/decorators.js';
import { styleMap } from 'lit/directives/style-map.js';
import { SLIDE_LEFT_IN, SLIDE_LEFT_OUT, SLIDE_RIGHT_IN, SLIDE_RIGHT_OUT, } from './constants';
import styles from './simple-carousel-css';
import './slide-button';
let SimpleCarousel = class SimpleCarousel extends LitElement {
    constructor() {
        super(...arguments);
        this.containerHeight = 0;
        this.slideIndex = 0;
        this.navigateToPrevSlide = () => {
            // this.changeSlide(-1);
            this.navigateWithAnimation(-1, SLIDE_RIGHT_OUT, SLIDE_LEFT_IN);
        };
        this.navigateToNextSlide = () => {
            // this.changeSlide(1);
            this.navigateWithAnimation(1, SLIDE_LEFT_OUT, SLIDE_RIGHT_IN);
        };
    }
    firstUpdated() {
        this.containerHeight = getMaxElHeight(this.slideElements);
        this.initialiseSlide();
    }
    initialiseSlide() {
        for (let i = 0; i < this.slideElements.length; i++) {
            if (i === this.slideIndex) {
                showSlide(this.slideElements[i]);
            }
            else {
                hideSlide(this.slideElements[i]);
            }
        }
    }
    changeSlide(offset) {
        const slideCount = this.slideElements.length;
        this.slideIndex =
            (slideCount + ((this.slideIndex + offset) % slideCount)) % slideCount;
    }
    async navigateWithAnimation(nextSlideOffset, leavingAnimation, enteringAnimation) {
        const elLeaving = this.slideElements[this.slideIndex];
        const leavingAnim = elLeaving.animate(leavingAnimation[0], leavingAnimation[1]);
        // change slide
        this.changeSlide(nextSlideOffset);
        const newSlideEl = this.slideElements[this.slideIndex];
        showSlide(newSlideEl);
        const enteringAnim = newSlideEl.animate(enteringAnimation[0], enteringAnimation[1]);
        await Promise.all([leavingAnim.finished, enteringAnim.finished]);
        // hide old slide
        hideSlide(elLeaving);
    }
    render() {
        const containerStyles = {
            height: `${this.containerHeight + 200}px`,
        };
        return html `
      <slide-button @click=${this.navigateToPrevSlide}><</slide-button>
      <div id="container" style="${styleMap(containerStyles)}">
        <slot></slot>
      </div>
      <slide-button @click=${this.navigateToNextSlide}>></slide-button>
    `;
    }
};
// ::slotted psuedoclass selects insidr the slot (children)
SimpleCarousel.styles = styles;
__decorate([
    state()
], SimpleCarousel.prototype, "containerHeight", void 0);
__decorate([
    property({ type: Number })
], SimpleCarousel.prototype, "slideIndex", void 0);
__decorate([
    queryAssignedElements()
], SimpleCarousel.prototype, "slideElements", void 0);
SimpleCarousel = __decorate([
    customElement('simple-carousel')
], SimpleCarousel);
export { SimpleCarousel };
const hideSlide = (el) => {
    el.classList.add('slide-hidden');
};
const showSlide = (el) => {
    el.classList.remove('slide-hidden');
};
const getMaxElHeight = (els) => {
    return Math.max(0, ...els.map((el) => el.getBoundingClientRect().height));
};
//# sourceMappingURL=simple-carousel.js.map