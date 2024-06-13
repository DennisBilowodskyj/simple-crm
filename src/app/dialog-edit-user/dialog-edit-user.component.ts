import { Component } from '@angular/core';
import { MatFormField } from '@angular/material/form-field';
import { MatProgressBar } from '@angular/material/progress-bar';
import { MatLabel } from '@angular/material/form-field';
import { MatDialogActions, MatDialogRef } from '@angular/material/dialog';
import { MatDialogContent } from '@angular/material/dialog';
import { User } from '../../models/user.class';
import { DialogAddUserComponent } from '../dialog-add-user/dialog-add-user.component';
@Component({
  selector: 'app-dialog-edit-user',
  standalone: true,
  imports: [MatFormField,MatProgressBar,MatLabel,MatDialogActions,MatDialogContent],
  templateUrl: './dialog-edit-user.component.html',
  styleUrl: './dialog-edit-user.component.scss'
})
export class DialogEditUserComponent {
loading: any;
  constructor(public dialogRef: MatDialogRef<DialogAddUserComponent>) { }








  saveUser(){

  }

}
