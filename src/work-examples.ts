import {LitElement, html, CSSResultGroup} from 'lit';
import {customElement} from 'lit/decorators.js';

import styles from './work-examples-css';

import './simple-carousel';

@customElement('work-examples')
export class WorkExamples extends LitElement {
  static override styles?: CSSResultGroup | undefined = styles;

  override render() {
    return html`
      <div class="work-examples">
        <h1>Some examples of our work:</h1>
        <div class="work-example">
          <simple-carousel>
            <div class="example-card">
              <div class="example-card-image">
                <img src="images/pendle-accommodation.png" />
              </div>
              <div class="example-card-body">
                Pendle accommodation simulation created for Lancaster University
                Innovation Hub: Exterior
              </div>
            </div>
            <!-- -->
            <div class="example-card">
              <div class="example-card-image">
                <img src="images/pendle-accommodation2.png" />
              </div>
              <div class="example-card-body">
                Pendle accommodation simulation created for Lancaster University
                Innovation Hub: Kitchen
              </div>
            </div>
            <!-- -->
            <div class="example-card">
              <div class="example-card-image">
                <img src="images/pendle-accommodation3.png" />
              </div>
              <div class="example-card-body">
                Pendle accommodation simulation created for Lancaster University
                Innovation Hub: Bedroom
              </div>
            </div>
            <!-- -->
            <div class="example-card">
              <div class="example-card-image">
                <img src="images/ruskin1.png" />
              </div>
              <div class="example-card-body">
                Ruskin Gallery exhibition space created for Lancaster University
                Innovation Hub.
              </div>
            </div>
            <!-- -->
            <div class="example-card">
              <div class="example-card-image">
                <img src="images/ruskin2.png" />
              </div>
              <div class="example-card-body">
                Ruskin Gallery exhibition space created for Lancaster University
                Innovation Hub.
              </div>
            </div>
            <!-- -->
            <div class="example-card">
              <div class="example-card-image">
                <img src="images/ruskin3.png" />
              </div>
              <div class="example-card-body">
                Ruskin Gallery exhibition space created for Lancaster University
                Innovation Hub.
              </div>
            </div>
            <!-- -->
            <div class="example-card">
              <div class="example-card-image">
                <img src="images/6hats1.png" />
              </div>
              <div class="example-card-body">
                ‘6 Hats Thinking’ design space created for Lancaster University
                Innovation Hub.
              </div>
            </div>
            <!-- -->
            <div class="example-card">
              <div class="example-card-image">
                <img src="images/6hats2.png" />
              </div>
              <div class="example-card-body">
                ‘6 Hats Thinking’ design space created for Lancaster University
                Innovation Hub.
              </div>
            </div>

            <!-- -->
            <div class="example-card">
              <div class="example-card-image">
                <img src="images/keep-on1.png" />
              </div>
              <div class="example-card-body">
                Still taken from ‘Keep On’ a 360 music video collaboration with
                More Music, Morecambe.
              </div>
            </div>

            <!-- -->
            <div class="example-card">
              <div class="example-card-image">
                <img src="images/keep-on2.png" />
              </div>
              <div class="example-card-body">
                Still taken from ‘Keep On’ a 360 music video collaboration with
                More Music, Morecambe.
              </div>
            </div>

            <!-- -->
            <div class="example-card">
              <div class="example-card-image">
                <img src="images/keep-on3.png" />
              </div>
              <div class="example-card-body">
                Still taken from ‘Keep On’ a 360 music video collaboration with
                More Music, Morecambe.
              </div>
            </div>
          </simple-carousel>
        </div>
      </div>
    `;
  }
}
