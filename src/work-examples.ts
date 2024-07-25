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
        <div>
          <h2>Some examples of our work:</h2>
          <div class="work-example">
            <simple-carousel>
              <!-- -->
              <div class="example-card">
                <div class="example-card-image">
                  <img src="images/pendle-accommodation.png" />
                </div>
                <div class="example-card-body">
                  Pendle accommodation simulation created for Lancaster
                  University Innovation Hub: Exterior
                </div>
              </div>
              <!-- -->
              <div class="example-card">
                <div class="example-card-image">
                  <img src="images/pendle-accommodation2.png" />
                </div>
                <div class="example-card-body">
                  Pendle accommodation simulation created for Lancaster
                  University Innovation Hub: Kitchen
                </div>
              </div>
              <!-- -->
              <div class="example-card">
                <div class="example-card-image">
                  <img src="images/pendle-accommodation3.png" />
                </div>
                <div class="example-card-body">
                  Pendle accommodation simulation created for Lancaster
                  University Innovation Hub: Bedroom
                </div>
              </div>
              <!-- -->
              <div class="example-card">
                <div class="example-card-image">
                  <img src="images/ruskin1.png" />
                </div>
                <div class="example-card-body">
                  Ruskin Gallery exhibition space created for Lancaster
                  University Innovation Hub.
                </div>
              </div>

              <!-- -->
              <div class="example-card">
                <div class="example-card-image">
                  <img src="images/ruskin2.png" />
                </div>
                <div class="example-card-body">
                  Ruskin Gallery exhibition space created for Lancaster
                  University Innovation Hub.
                </div>
              </div>

              <!-- -->
              <div class="example-card">
                <div class="example-card-image">
                  <img src="images/ruskin3.png" />
                </div>
                <div class="example-card-body">
                  Ruskin Gallery exhibition space created for Lancaster
                  University Innovation Hub.
                </div>
              </div>

              <!-- -->
              <div class="example-card">
                <div class="example-card-image">
                  <img src="images/agora2.png" />
                </div>
                <div class="example-card-body">
                  A spider's web blocks the exit to my room, augmented reality
                  created for the Morecambe Agora Project
                </div>
              </div>

              <!-- -->
              <div class="example-card">
                <div class="example-card-image">
                  <img src="images/agora1.png" />
                </div>
                <div class="example-card-body">
                  An alien sits on my desk, augmented reality created for the
                  Morecambe Agora Project
                </div>
              </div>

              <!-- -->
              <div class="example-card">
                <div class="example-card-image">
                  <img src="images/agora3.png" />
                </div>
                <div class="example-card-body">
                  I help cover the sweeper cleaning the feathers after Icarus
                  flew to close to the sun, augmented reality created for the
                  Morecambe Agora Project
                </div>
              </div>

              <!-- -->
              <div class="example-card">
                <div class="example-card-image">
                  <img src="images/pixel1.png" />
                </div>
                <div class="example-card-body">
                  <br />
                  Pixel art games: this game teaches you about mass and friction
                  (physics)
                </div>
              </div>

              <!-- -->
              <div class="example-card">
                <div class="example-card-image">
                  <img src="images/pixel2.png" />
                </div>
                <div class="example-card-body">
                  Pixel art games: construct a game kit teaches you about how
                  computer games work and how levels are made
                </div>
              </div>

              <!-- -->
              <div class="example-card">
                <div class="example-card-image">
                  <img src="images/pixel3.png" />
                </div>
                <div class="example-card-body">
                  Pixel art games: this game teaches you about angles and
                  distance (maths)
                </div>
              </div>

              <!-- -->
              <div class="example-card">
                <div class="example-card-image">
                  <img src="images/6hats1.png" />
                </div>
                <div class="example-card-body">
                  ‘6 Hats Thinking’ design space created for Lancaster
                  University Innovation Hub.
                </div>
              </div>
              <!-- -->
              <div class="example-card">
                <div class="example-card-image">
                  <img src="images/6hats2.png" />
                </div>
                <div class="example-card-body">
                  ‘6 Hats Thinking’ design space created for Lancaster
                  University Innovation Hub.
                </div>
              </div>

              <!-- -->
              <div class="example-card">
                <div class="example-card-image">
                  <img src="images/elastic1.png" />
                </div>
                <div class="example-card-body">
                  The Elastic Project for the British Library
                </div>
              </div>

              <!-- -->
              <div class="example-card">
                <div class="example-card-image">
                  <img src="images/elastic2.png" />
                </div>
                <div class="example-card-body">
                  The Elastic Project for the British Library
                </div>
              </div>

              <!-- -->
              <div class="example-card">
                <div class="example-card-image">
                  <img src="images/elastic3.png" />
                </div>
                <div class="example-card-body">
                  The Elastic Project for the British Library
                </div>
              </div>

              <!-- -->
              <div class="example-card">
                <div class="example-card-image">
                  <img src="images/keep-on1.png" />
                </div>
                <div class="example-card-body">
                  Still taken from ‘Keep On’ a 360 music video collaboration
                  with More Music, Morecambe.
                </div>
              </div>

              <!-- -->
              <div class="example-card">
                <div class="example-card-image">
                  <img src="images/keep-on2.png" />
                </div>
                <div class="example-card-body">
                  Still taken from ‘Keep On’ a 360 music video collaboration
                  with More Music, Morecambe.
                </div>
              </div>

              <!-- -->
              <div class="example-card">
                <div class="example-card-image">
                  <img src="images/keep-on3.png" />
                </div>
                <div class="example-card-body">
                  Still taken from ‘Keep On’ a 360 music video collaboration
                  with More Music, Morecambe.
                </div>
              </div>

              <!-- -->
              <div class="example-card">
                <div class="example-card-image">
                  <img src="images/hh.png" />
                </div>
                <div class="example-card-body">
                  Happening Histories - an interactive community time capsule
                  with contributions from estate residents, saved onto CD and
                  placed into the British Library archive
                </div>
              </div>

              <!-- -->
              <div class="example-card">
                <div class="example-card-image">
                  <img src="images/edible1.jpg" />
                </div>
                <div class="example-card-body">
                  Edible Urban Project with Mikey Tomkins
                </div>
              </div>

              <!-- -->
              <div class="example-card">
                <div class="example-card-image">
                  <img src="images/edible2.jpg" />
                </div>
                <div class="example-card-body">
                  Edible Urban Project with Mikey Tomkins
                </div>
              </div>

              <!-- -->
              <div class="example-card">
                <div class="example-card-image">
                  <img src="images/edible3.jpg" />
                </div>
                <div class="example-card-body">
                  Edible Urban Project with Mikey Tomkins
                </div>
              </div>
            </simple-carousel>
          </div>
        </div>
      </div>
    `;
  }
}
