import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-echoloader',
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
        width: 48px;
        height: 48px;
        border-radius: 50%;
        border: 4px solid #8064a1;
        position: absolute;
        left: 0;
        top: 0;
        animation: animloader 2s linear infinite;
      }
      .loader::after {
        animation-delay: 1s;
      }

      @keyframes animloader {
        0% {
          transform: scale(0);
          opacity: 1;
        }
        100% {
          transform: scale(1);
          opacity: 0;
        }
      }
    `,
  ],
})
export class EcholoaderComponent implements OnInit {
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
        animation: 'rotate 1s linear infinite',
        'z-index': '100',
        /* border-radius: 50%; */
        display: 'inline-block',
        position: 'relative',
      };
    } catch (error) {
      throw new Error('Error loading borderradius ' + error);
    }
  }
}
