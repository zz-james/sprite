import { css } from 'lit';
const styles = css `
  .work-examples {
    font-size: calc(96 * var(--magic-fraction));
    padding: 0.5em;
    height: 100%;
    overflow: clip;
  }

  @media screen and (min-width: 980px) {
    .work-examples {
      --magic-fraction: 0.073206vw;
      font-size: calc(35 * var(--magic-fraction));
    }
  }
`;
export default styles;
//# sourceMappingURL=work-examples-css.js.map