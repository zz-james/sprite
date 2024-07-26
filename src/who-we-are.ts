import {LitElement, html, CSSResultGroup} from 'lit';
import {customElement, property} from 'lit/decorators.js';

import styles from './who-we-are-css';

@customElement('who-we-are')
export class WhoWeAre extends LitElement {
  static override styles?: CSSResultGroup | undefined = styles;

  @property({type: String}) activePanel = '';

  onNameClick = (e: MouseEvent) => {
    const {currentTarget} = e;
    if (!currentTarget) return;

    if (this.activePanel === (currentTarget as HTMLElement).id) {
      this.activePanel = '';
      return;
    }

    // if (!this.activePanel) {
    //   this.activePanel = (currentTarget as HTMLElement).id;
    // }

    this.activePanel = (currentTarget as HTMLElement).id;
  };

  override render() {
    return html`
      <ul class="accordion ">
        <li
          class="accordion-item ${this.activePanel === 'jessie' &&
          'active'} ${this.activePanel === 'james' && 'hidden'}"
        >
          <h3 id="jessie" class="accordion-thumb" @click=${this.onNameClick}>
            Jessie Holmes
          </h3>
          <div id="jessie-panel" class="accordion-panel ">
            <img src="images/jessie.png" class="bio-image" />

            <p>
              Jessie Holmes is an elected Co-Director of Good Things Collective
              and a partner Director in Sprite Studio, based in Morecambe. She
              is a digital artist specializing in immersive virtual reality (VR)
              experiences. Combining the power of Blender with Unity or Frame
              VR, Jess crafts intricate and compelling virtual worlds. With a
              background in 3D modeling, animation, and interactive design,
              Jess's work seamlessly blends technical expertise with creative
              storytelling.
            </p>

            <p>
              Jess's journey into the digital arts began with a fascination for
              the limitless possibilities of virtual environments. Over the
              years, this passion has evolved into a professional career,
              characterized by a commitment to innovation and a deep
              understanding of the latest technologies. In Blender, Jess sculpts
              and animates highly detailed 3D assets, creating unique characters
              and environments. Transitioning these assets into Unity or Frame
              VR, Jess utilizes creative game design principles to bring these
              virtual spaces to life, offering users immersive and interactive
              experiences that transcend traditional media.
            </p>

            <p>
              Throughout her career, Jess has collaborated with a diverse range
              of clients, from community arts organisations and mathematical
              magazines to educational institutions, creating 3D models and VR
              experiences that educate, entertain, and inspire. Her portfolio
              includes everything from 360 music videos to realistic campus
              simulations, all showcasing a unique artistic vision and a mastery
              of VR development tools.
            </p>
            <p>
              As a Senior VR artist, Jessie is dedicated to exploring the
              intersections of art and technology, constantly pushing the
              envelope to discover new ways to engage and move audiences.
              Whether through VR exhibitions, interactive installations, or
              innovative game design, Jess continues to redefine what is
              possible in the realm of digital art.
            </p>
          </div>
        </li>

        <li
          class="accordion-item ${this.activePanel === 'james' &&
          'active'} ${this.activePanel === 'jessie' && 'hidden'}"
        >
          <h3 id="james" class="accordion-thumb" @click=${this.onNameClick}>
            James Smith
          </h3>
          <div id="james-panel" class="accordion-panel">
            <img src="images/james.jpg" class="bio-image" />
            <p>
              James is a digital artist who works as a user experience designer,
              creative programmer and software engineer.
            </p>

            <p>
              He has created websites, games, interactive kiosks, digital maps
              of both real and imagined places, responsive installations,
              augmented reality walks, digital pop-up books, and archives with
              rich media interfaces.
            </p>
            <p>
              Name any programming language or software and there's a fairly
              good chance he's had a go with it.
            </p>

            <p>
              He's worked in educational, entertainment, e-commerce, sectors,
              with a special emphasis on enabling self-directed learning for
              young people. He has an MSc. in Computer Science in which he
              developed a tool to enable non-specialist educators to add
              interactive animations and simulations to online learning
              platforms such as Blackboard and Moodle.
            </p>
            <p>
              He was a software engineer for a Raspberry Pi education project
              for robotics where he developed their on-line learning platform,
              learning materials for key state 2 and 3, block-based-coding, and
              web-to-robot code deployment system.
            </p>

            <p>
              He also has excellent communication skills having delivered over
              50 lectures to MA students at Ravensbourne College of Art and
              Technology and over 100 workshops to a variety of participants
              from primary school age to pensioners. He also presented a series
              of talks on network media for the Take Away Festival at the Dana
              Centre, Science Museum.
            </p>
            <p>
              He has a good reputation for delivering high quality work, on
              time, and with solid design, architecture and engineering
              principles adhered to throughout.
            </p>
          </div>
        </li>
      </ul>
    `;
  }
}
