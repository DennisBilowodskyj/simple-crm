import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDialogRef, MatDialogModule } from '@angular/material/dialog';
import { User } from '../../models/user.class';
import { DialogAddUserComponent } from '../dialog-add-user/dialog-add-user.component';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressBarModule } from '@angular/material/progress-bar';

@Component({
  selector: 'app-dialog-edit-user',
  standalone: true,
  imports: [ CommonModule,
    MatFormFieldModule,
    MatProgressBarModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
    MatDialogModule,],
  templateUrl: './dialog-edit-user.component.html',
  styleUrl: './dialog-edit-user.component.scss'
})
export class DialogEditUserComponent {
  loading: any;
  constructor(public dialogRef: MatDialogRef<DialogAddUserComponent>) { }


  user!: User;






  saveUser(){

  }

}
