import {css} from 'lit';

const styles = css`
  ::slotted(.slide-hidden) {
    display: none;
  }
  ::slotted(*) {
    position: absolute;
    padding: 1em;
  }
  :host {
    display: flex;
    flex-direction: row;
    align-items: center;
  }
  #container {
    border: 1px solid grey;
    border-radius: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;
    margin: 0 18px;
    padding: 1em;
    overflow: hidden;
    position: relative;
    background-color: rgba(255, 255, 255, 0.5);
  }
`;

export default styles;
