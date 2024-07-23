import {LitElement, html, CSSResultGroup} from 'lit';
import {
  customElement,
  property,
  queryAssignedElements,
  state,
} from 'lit/decorators.js';

import {styleMap} from 'lit/directives/style-map.js';

import {
  AnimationTuple,
  SLIDE_LEFT_IN,
  SLIDE_LEFT_OUT,
  SLIDE_RIGHT_IN,
  SLIDE_RIGHT_OUT,
} from './constants';

import styles from './simple-carousel-css';

import './slide-button';

@customElement('simple-carousel')
export class SimpleCarousel extends LitElement {
  @state() private containerHeight = 0;
  @property({type: Number}) slideIndex = 0;

  // ::slotted psuedoclass selects insidr the slot (children)
  static override styles?: CSSResultGroup | undefined = styles;

  @queryAssignedElements()
  private readonly slideElements!: HTMLElement[];

  override firstUpdated() {
    this.containerHeight = getMaxElHeight(this.slideElements);
    this.initialiseSlide();
  }

  private initialiseSlide() {
    for (let i = 0; i < this.slideElements.length; i++) {
      if (i === this.slideIndex) {
        showSlide(this.slideElements[i]);
      } else {
        hideSlide(this.slideElements[i]);
      }
    }
  }

  private changeSlide(offset: number) {
    const slideCount = this.slideElements.length;
    this.slideIndex =
      (slideCount + ((this.slideIndex + offset) % slideCount)) % slideCount;
  }

  navigateToPrevSlide = () => {
    // this.changeSlide(-1);
    this.navigateWithAnimation(-1, SLIDE_RIGHT_OUT, SLIDE_LEFT_IN);
  };

  navigateToNextSlide = () => {
    // this.changeSlide(1);
    this.navigateWithAnimation(1, SLIDE_LEFT_OUT, SLIDE_RIGHT_IN);
  };

  private async navigateWithAnimation(
    nextSlideOffset: number,
    leavingAnimation: AnimationTuple,
    enteringAnimation: AnimationTuple
  ) {
    const elLeaving = this.slideElements[this.slideIndex];
    const leavingAnim = elLeaving.animate(
      leavingAnimation[0],
      leavingAnimation[1]
    );
    // change slide
    this.changeSlide(nextSlideOffset);
    const newSlideEl = this.slideElements[this.slideIndex];
    showSlide(newSlideEl);
    const enteringAnim = newSlideEl.animate(
      enteringAnimation[0],
      enteringAnimation[1]
    );
    await Promise.all([leavingAnim.finished, enteringAnim.finished]);
    // hide old slide
    hideSlide(elLeaving);
  }

  override render() {
    const containerStyles = {
      height: `${this.containerHeight + 200}px`,
    };

    return html`
      <slide-button @click=${this.navigateToPrevSlide}><</slide-button>
      <div id="container" style="${styleMap(containerStyles)}">
        <slot></slot>
      </div>
      <slide-button @click=${this.navigateToNextSlide}>></slide-button>
    `;
  }
}

const hideSlide = (el: HTMLElement) => {
  el.classList.add('slide-hidden');
};

const showSlide = (el: HTMLElement) => {
  el.classList.remove('slide-hidden');
};

const getMaxElHeight = (els: HTMLElement[]) => {
  return Math.max(0, ...els.map((el) => el.getBoundingClientRect().height));
};
