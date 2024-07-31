import {css} from 'lit';

const styles = css`
  .accordion {
    --magic-fraction: 0.073206vw;
    padding: 0.5em;
    padding-top: 0.8em;
    height: 100%;
    overflow: clip;
    font-size: calc(35 * var(--magic-fraction));
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
    margin-left: 0.2em;
    background-color: rgba(255, 255, 255, 0.5);
    cursor: pointer;
    padding-right: 1em;
  }

  .accordion-panel {
    background-color: white;
    height: 30vh;
    overflow-y: auto;
    transition: height 0.5s ease-in;
    padding: 0 0.8em 0 0.8em;
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

  @media screen and (max-width: 980px) {
    .accordion {
      margin-top: 2.8em;
      padding-bottom: 1em;
    }
    .accordion-panel {
      height: 27vh;
    }
  }

  @media screen and (max-width: 600px) {
    .accordion-panel {
      height: 35vh;
    }
  }

  @media screen and (max-width: 600px) {
    .bio-image {
      width: 50vw;
      margin: 1em;
      margin-left: 0;
      margin-top: 1.5em;
    }
  }
`;

export default styles;
