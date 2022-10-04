import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { User } from '../../interfaces/user';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styles: [
    `
      .mat-form-field {
        width: 100%;
      }
    `,
  ],
})
export class DialogComponent implements OnInit {
  objectKeys!: any;
  constructor(
    public dialogRef: MatDialogRef<DialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: User | any
  ) {
    this.objectKeys = Object.keys(this.data);
  }

  ngOnInit(): void {
    console.log();
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
