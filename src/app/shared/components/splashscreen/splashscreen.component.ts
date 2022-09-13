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
  styleUrls: ['./splashscreen.component.css'],
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
