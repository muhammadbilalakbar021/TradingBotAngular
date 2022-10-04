import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-windowloader',
  template: `
    <div *ngIf="toLoad">
      <div appLoader>
        <div class="loader" [ngStyle]="loaderCss()" ng-class="{}"></div>
      </div>
    </div>
  `,
  styles: [
    `
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
export class WindowLoaderComponent implements OnInit {
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
        'border-radius': '50%',
        display: 'inline-block',
        'border-top': '4px solid #e9a66d',
        'border-right': '3px solid transparent',
        'box-sizing': 'border-box',
        animation: 'rotation 1s linear infinite',
      };
    } catch (error) {
      throw new Error('Error loading borderradius ' + error);
    }
  }
}
