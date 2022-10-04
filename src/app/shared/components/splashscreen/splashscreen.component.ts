import { Component, Input, OnInit } from '@angular/core';
import { SplashAnimationType } from 'src/app/utils/enums/splashanimation';

@Component({
  selector: 'app-splashscreen',
  template: `
    <div
      class="app-splash-screen"
      [ngStyle]="{
        left: windowWidth,
        opacity: opacityChange,
        transition: splashTransition
      }"
      *ngIf="showSplash"
    >
      <div class="app-splash-inner">
        <div class="app-logo"></div>
        <div class="app-label">Trading Bot</div>
        <div class="app-loader"></div>
      </div>
    </div>
  `,
  styles: [
    `
      .app-splash-screen {
        background-image: url('src/assets/images/tradingbot.jpg');
        background-attachment: fixed;
        background-repeat: no-repeat;
        background-size: cover;
        background-size: cover;
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100%;
        z-index: 100;
        opacity: 1;
      }

      .app-label {
        margin-top: 32px;
        color: #fff;
        font-size: 2.5em;
        font-family: 'Pacifico', cursive;
      }

      .app-splash-inner {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }

      .app-logo {
        background: url('src/assets/images/lighty.svg');
        background-repeat: no-repeat;
        max-width: 100%;
        background-position: center;
        background-size: contain;
        width: 100px;
        height: 100px;
      }

      .app-loader {
        background: url('src/assets/images/three-dots.svg');
        background-repeat: no-repeat;
        max-width: 100%;
        background-position: center;
        background-size: contain;
        width: 80px;
        height: 80px;
        margin-top: 80px;
      }
    `,
  ],
})
export class SplashscreenComponent implements OnInit {
  windowWidth!: string;
  splashTransition!: string;
  opacityChange: number = 1;
  showSplash = true;

  @Input()
  animationDuration!: number;
  @Input() duration!: number;
  @Input() animationType!: SplashAnimationType | any;

  constructor() {}

  ngOnInit(): void {
    setTimeout(() => {
      let transitionStyle = '';
      switch (this.animationType) {
        case SplashAnimationType.SlideLeft:
          this.windowWidth = '-' + window.innerWidth + 'px';
          transitionStyle = 'left ' + this.animationDuration + 's';
          break;
        case SplashAnimationType.SlideRight:
          this.windowWidth = window.innerWidth + 'px';
          transitionStyle = 'left ' + this.animationDuration + 's';
          break;
        case SplashAnimationType.FadeOut:
          transitionStyle = 'opacity ' + this.animationDuration + 's';
          this.opacityChange = 0;
      }

      this.splashTransition = transitionStyle;

      setTimeout(() => {
        this.showSplash = !this.showSplash;
      }, this.animationDuration * 1000);
    }, this.duration * 1000);
  }
}
