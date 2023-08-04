import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-pokemon-add-comment',
  templateUrl: './pokemon-add-comment.component.html',
  styleUrls: ['./pokemon-add-comment.component.scss'],
})
export class PokemonAddCommentComponent implements OnInit {
  comment: string = '';

  constructor(public dialogRef: MatDialogRef<PokemonAddCommentComponent>) {}

  sendCommentSignal() {
    console.log(this.comment);
    this.dialogRef.close({ comment: this.comment });
  }
  ngOnInit(): void {}
}
