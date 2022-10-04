import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-twodotloader',
  template: `
    <div *ngIf="toLoad">
      <div appLoader>
        <div class="loader" [ngStyle]="loaderCss()"></div>
      </div>
    </div>
  `,
  styles: [
    `
      .loader::after,
      .loader::before {
        content: '';
        box-sizing: border-box;
        position: absolute;
        left: 0;
        top: 0;
        background: #ff3d00;
        width: 6px;
        height: 6px;
        transform: translate(150%, 150%);
        border-radius: 50%;
      }
      .loader::before {
        left: auto;
        top: auto;
        right: 0;
        bottom: 0;
        transform: translate(-150%, -150%);
      }

      @keyframes rotation {
        0% {
          transform: rotate(0deg);
        }
        100% {
          transform: rotate(360deg);
        }
      }
    `,
  ],
})
export class TwoDotloaderComponent implements OnInit {
  @Input() size!: any;
  @Input() toLoad: boolean = true;

  constructor() {}

  ngOnInit(): void {
    console.log('size', this.size);
    this.size = this.size ? this.size : 100;
  }

  loaderCss(): any {
    try {
      return {
        width: this.size + 'px',
        height: this.size + 'px',
        border: '2px solid #8064A1',
        'border-radius': '50%',
        display: 'inline-block',
        position: 'relative',
        'box-sizing': 'border-box',
        animation: 'rotation 1s linear infinite',
      };
    } catch (error) {
      throw new Error('Error loading borderradius ' + error);
    }
  }
}
