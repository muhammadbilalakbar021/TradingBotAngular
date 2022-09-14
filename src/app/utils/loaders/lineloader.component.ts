import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-lineloader',
  template: `
    <div *ngIf="toLoad">
      <div appLoader>
        <div class="loader" [ngStyle]="loaderCss()" ng-class="{}"></div>
      </div>
    </div>
  `,
  styles: [
    `
      .loader::before,
      .loader::after {
        content: '';
        box-sizing: border-box;
        position: absolute;
        inset: 0px;
        border-radius: 50%;
        border: 5px solid #ff3c89;
        animation: prixClipFix 2s linear infinite;
      }
      .loader::after {
        transform: rotate3d(90, 90, 0, 180deg);
        border-color: #ff3d00;
      }

      @keyframes rotate {
        0% {
          transform: rotate(0deg);
        }
        100% {
          transform: rotate(360deg);
        }
      }

      @keyframes prixClipFix {
        0% {
          clip-path: polygon(50% 50%, 0 0, 0 0, 0 0, 0 0, 0 0);
        }
        50% {
          clip-path: polygon(50% 50%, 0 0, 100% 0, 100% 0, 100% 0, 100% 0);
        }
        75%,
        100% {
          clip-path: polygon(
            50% 50%,
            0 0,
            100% 0,
            100% 100%,
            100% 100%,
            100% 100%
          );
        }
      }
    `,
  ],
})
export class LineloaderComponent implements OnInit {
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
        'border-radius': '50%',
      };
    } catch (error) {
      throw new Error('Error loading borderradius ' + error);
    }
  }
}
