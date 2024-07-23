import { css } from 'lit';
const styles = css `
  .work-examples {
    --magic-fraction: 0.073206vw;
    font-size: calc(35 * var(--magic-fraction));
    padding: 0.5em;
    height: 100%;
    overflow: clip;
  }

  .work-examples h2 {
    margin-top: 2em;
    text-align: center;
  }

  .example-card-body {
    margin-top: 0em;
  }

  .example-card-image {
    float: left;
    width: 50%;
    margin-right: 0.5em;
  }

  .example-card-image img {
    float: left;
    width: 100%;
  }
`;
export default styles;
//# sourceMappingURL=work-examples-css.js.map