import { css } from 'lit';
const styles = css `
  /* --------------------------------------- */

  @keyframes blink {
    0% {
      opacity: 0;
    }
    40% {
      opacity: 0;
    }
    60% {
      opacity: 1;
    }
    100% {
      opacity: 1;
    }
  }

  .container {
    --magic-fraction: 0.266667vw;
  }
  .container {
    padding: calc(20 * var(--magic-fraction));
  }

  @media screen and (min-width: 980px) {
    .container {
      --magic-fraction: 0.073206vw;
    }

    .container {
      padding: calc(40 * var(--magic-fraction));
    }
  }

  @media screen and (min-width: 1920px) {
    .container {
      --magic-fraction: 1.4px; /*1.405564px;*/
    }

    .container {
      padding: calc(40 * var(--magic-fraction));
    }
  }

  .wrapper.active {
    border-bottom: 1px solid #000;
  }
  .wrapper {
    height: calc(96 * var(--magic-fraction));
    position: relative;
  }

  @media screen and (min-width: 980px) {
    .wrapper {
      --magic-fraction: 0.073206vw;
      height: calc(190 * var(--magic-fraction));
      position: relative;
    }
  }

  .wrapper .motion-text {
    font-size: calc(96 * var(--magic-fraction));
    font-family: neue-haas-grotesk-display, sans-serif;
    font-weight: 500;
    font-style: normal;
    line-height: calc(96 * var(--magic-fraction));
    margin-left: calc(-3 * var(--magic-fraction));
  }
  @media screen and (min-width: 980px) {
    .wrapper .motion-text {
      --magic-fraction: 0.073206vw;
      font-size: calc(230 * var(--magic-fraction));
      font-family: neue-haas-grotesk-display, sans-serif;
      font-weight: 500;
      font-style: normal;
      line-height: calc(180 * var(--magic-fraction));
      margin-left: calc(-2 * var(--magic-fraction));
    }
  }
  .wrapper .motion-text:after {
    content: '';
    display: inline-block;
    height: calc(68 * var(--magic-fraction));
    width: calc(7 * var(--magic-fraction));
    border-right: 1px solid #000;
    -webkit-animation-name: blink;
    animation-name: blink;
    -webkit-animation-duration: 1s;
    animation-duration: 1s;
    -webkit-animation-iteration-count: infinite;
    animation-iteration-count: infinite;
  }
  @media screen and (min-width: 980px) {
    .wrapper .motion-text:after {
      height: calc(179 * var(--magic-fraction));
      width: calc(42 * var(--magic-fraction));
    }
  }
  .copy {
    padding-top: calc(10 * var(--magic-fraction));
    font-size: calc(24 * var(--magic-fraction));
    font-family: neue-haas-grotesk-display, sans-serif;
    font-weight: 500;
    font-style: normal;
    line-height: calc(27 * var(--magic-fraction));
    letter-spacing: 0.02em;
    /* visibility: hidden; */
  }

  @media screen and (min-width: 980px) {
    .copy {
      --magic-fraction: 0.073206vw;
      padding-top: calc(15 * var(--magic-fraction));
      font-size: calc(52 * var(--magic-fraction));
      font-family: neue-haas-grotesk-display, sans-serif;
      font-weight: 500;
      font-style: normal;
      line-height: calc(52 * var(--magic-fraction));
    }
  }

  .desc {
    padding-top: calc(40 * var(--magic-fraction));
    font-size: calc(16 * var(--magic-fraction));
    font-family: neue-haas-grotesk-display, sans-serif;
    font-weight: 500;
    font-style: normal;
    line-height: calc(21 * var(--magic-fraction));
    /* visibility: hidden; */
  }
  @media screen and (min-width: 980px) {
    .desc {
      --magic-fraction: 0.073206vw;
      padding-top: calc(22 * var(--magic-fraction));
      font-size: calc(18 * var(--magic-fraction));
      font-family: neue-haas-grotesk-display, sans-serif;
      font-weight: 500;
      font-style: normal;
      line-height: calc(35 * var(--magic-fraction));
    }
  }

  .desc-ja {
    padding-top: calc(10 * var(--magic-fraction));
    font-size: calc(14 * var(--magic-fraction));
    font-family: 'Gothic Medium BBB', sans-serif;
    font-style: normal;
    font-weight: normal;
    line-height: calc(20 * var(--magic-fraction));
    /* visibility: hidden; */
  }
  @media screen and (min-width: 980px) {
    .desc-ja {
      --magic-fraction: 0.073206vw;
      padding-top: 0;
      font-size: calc(18 * var(--magic-fraction));
      font-family: 'Gothic Medium BBB', sans-serif;
      font-style: normal;
      font-weight: normal;
      line-height: calc(25 * var(--magic-fraction));
    }
  }
  @media screen and (min-width: 980px) {
    br.sp {
      display: none;
    }
  }
`;
export default styles;
//# sourceMappingURL=home-teaser-css.js.map