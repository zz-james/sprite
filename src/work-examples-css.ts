import {css} from 'lit';

const styles = css`
  .work-examples {
    --magic-fraction: 0.073206vw;
    font-size: calc(35 * var(--magic-fraction));
    padding: 0.5em;
    height: 100%;
    overflow: clip;
  }

  .work-examples h2 {
    margin-top: 2em;
  }

  .example-card-body {
    margin-top: 0.2em;
  }

  .example-card-image {
    float: left;
    width: 50%;
    margin-right: 0.5em;
  }

  .example-card-image img {
    width: 100%;
  }

  @media screen and (max-width: 900px) {
    .example-card-image {
      width: 100%;
      text-align: center;
    }
    .example-card-image img {
      width: 75%;
    }
  }
`;

export default styles;
