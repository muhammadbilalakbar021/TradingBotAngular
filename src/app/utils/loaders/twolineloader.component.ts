import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-twolineloader',
  template: `<div
    class="loader"
    style="position: absolute; left: 50%; top: 40%; z-index: 100;"
  ></div>`,
  styles: [
    `
      .loader {
        width: 100px;
        height: 100px;
        border-radius: 50%;
        position: relative;
        animation: rotate 1s linear infinite;
      }
      .loader::before,
      .loader::after {
        content: '';
        box-sizing: border-box;
        position: absolute;
        inset: 0px;
        border-radius: 50%;
        border: 5px solid rgb(204, 28, 28);
        animation: prixClipFix 2s linear infinite;
      }
      .loader::after {
        inset: 8px;
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
export class TwolineloaderComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
