import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

export interface DialogData {
  title: string;
  first_name: string;
  last_name: string;
}

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent {
  isFormEmpty: boolean = false;

  constructor(
    public dialogRef: MatDialogRef<DialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) {}  

  onNoClick(): void {
    this.dialogRef.close();
  }

  onSaveClick(): void {
    if (!this.data.first_name || !this.data.last_name) {
      this.isFormEmpty = true;
      return;
    }
    const data = {first_name: this.data.first_name, last_name: this.data.last_name}
    this.dialogRef.close(data);
  }
}
