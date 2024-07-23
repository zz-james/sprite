import { css } from 'lit';
const styles = css `
  header {
    --magic-fraction: 0.073206vw;
    box-sizing: border-box;
  }

  header {
    position: fixed;
    z-index: 999;
    top: 0;
    left: 0;
    width: 100%;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: start;
    -ms-flex-align: start;
    align-items: flex-start;
    padding: calc(20 * var(--magic-fraction)) calc(20 * var(--magic-fraction)) 0
      calc(20 * var(--magic-fraction));
  }
  @media screen and (min-width: 980px) {
    header {
      --magic-fraction: 0.073206vw;
    }
    header {
      padding: calc(40 * var(--magic-fraction)) calc(40 * var(--magic-fraction))
        0 calc(40 * var(--magic-fraction));
    }
  }

  header .logo {
    display: block;
  }

  header .wrapper {
    /* -webkit-box-flex: 1;
    -ms-flex: 1;
    flex: 1;
    display: -webkit-box;
    display: -ms-flexbox; */
    display: flex;
    width: 100%;
    justify-content: space-between;
    /* -webkit-box-align: start;
    -ms-flex-align: start;
    align-items: flex-start;
    -webkit-box-pack: end;
    -ms-flex-pack: end;
    justify-content: flex-end; */
    font-size: calc(13 * var(--magic-fraction));
    font-family: neue-haas-grotesk-display, sans-serif;
    font-weight: 500;
    font-style: normal;
    line-height: calc(15 * var(--magic-fraction));
  }
  /* @media screen and (min-width: 980px) {
    header .wrapper {
      --magic-fraction: 0.073206vw;
      font-size: calc(16 * var(--magic-fraction));
      font-family: neue-haas-grotesk-display, sans-serif;
      font-weight: 500;
      font-style: normal;
      line-height: calc(18.3 * var(--magic-fraction));
    }
  }

  header .wrapper label {
    margin-left: calc(40 * var(--magic-fraction));
    font-size: calc(13 * var(--magic-fraction));
    font-family: neue-haas-grotesk-display, sans-serif;
    font-weight: 500;
    font-style: normal;
  }
  @media screen and (min-width: 980px) {
    header .wrapper label {
      --magic-fraction: 0.073206vw;
      margin-left: calc(730 * var(--magic-fraction));
      font-size: calc(16 * var(--magic-fraction));
      font-family: neue-haas-grotesk-display, sans-serif;
      font-weight: 500;
      font-style: normal;
      cursor: pointer;
    }
  } */
  .wrapper a {
    font-size: 1.75em;
    text-decoration: none;
  }
`;
export default styles;
//# sourceMappingURL=nav-bar-css.js.map