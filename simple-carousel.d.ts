import { LitElement, CSSResultGroup } from 'lit';
import './slide-button';
export declare class SimpleCarousel extends LitElement {
    private containerHeight;
    slideIndex: number;
    static styles?: CSSResultGroup | undefined;
    private readonly slideElements;
    firstUpdated(): void;
    private initialiseSlide;
    private changeSlide;
    navigateToPrevSlide: () => void;
    navigateToNextSlide: () => void;
    private navigateWithAnimation;
    render(): import("lit-html").TemplateResult<1>;
}
//# sourceMappingURL=simple-carousel.d.ts.map