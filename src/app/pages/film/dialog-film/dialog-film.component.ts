import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

export interface DialogData {
  first_name: string;
  last_name: string;
}

@Component({
  selector: 'app-dialog-film',
  templateUrl: './dialog-film.component.html',
  styleUrls: ['./dialog-film.component.css']
})
export class DialogFilmComponent {
  title = 'Add Data'

  constructor(
    public dialogRef: MatDialogRef<DialogFilmComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) {}  

  onNoClick(): void {
    this.dialogRef.close();
  }
}
