import {css} from 'lit';

const styles = css`
  .accordion {
    font-size: calc(96 * var(--magic-fraction));
    padding: 0.5em;
    padding-top: 0.8em;
    height: 100%;
    overflow: clip;
  }

  .accordion-item {
    margin-top: 0.5em;
    border: 1px solid lightgrey;
    padding: 5px;
  }

  .accordion h3 {
    display: flex;
    justify-content: space-between;
    margin: 0;
    background-color: rgba(255, 255, 255, 0.5);
    cursor: pointer;
    padding-right: 1em;
  }

  .accordion-panel {
    background-color: white;
    height: 35vh;
    overflow-y: auto;
    transition: height 0.5s ease-in;
  }

  .active .accordion-panel {
    height: 69vh;
    overflow-y: auto;
  }

  .hidden .accordion-panel {
    height: 0vh;
  }

  .accordion h3::after {
    display: inline-block;
    content: '❯';
    text-align: center;
    transform: rotate(90deg);
    transition: all 0.35s;
  }

  .accordion .active > h3::after {
    transform: rotate(270deg);
  }

  .accordion h3:hover::after {
    animation: bounce 0.5s infinite;
  }

  .accordion .active h3:hover::after {
    animation: none;
  }

  @keyframes bounce {
    25% {
      transform: rotate(90deg) translate(0.25rem);
    }
    75% {
      transform: rotate(90deg) translate(-0.25rem);
    }
  }

  .bio-image {
    float: left;
    margin: 0.4em;
    margin-top: 1.5em;
  }

  @media screen and (min-width: 980px) {
    .accordion {
      --magic-fraction: 0.073206vw;
      font-size: calc(35 * var(--magic-fraction));
    }
  }
`;

export default styles;
