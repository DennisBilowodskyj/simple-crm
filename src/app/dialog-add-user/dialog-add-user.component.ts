import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { provideNativeDateAdapter } from '@angular/material/core';
import { User } from '../../models/user.class';
import { FormsModule } from '@angular/forms';
import { Firestore,collection,addDoc } from '@angular/fire/firestore';
import {MatProgressBarModule} from '@angular/material/progress-bar';

@Component({
  selector: 'app-dialog-add-user',
  standalone: true,
  imports: [
    MatDialogModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    MatDatepickerModule,
    FormsModule,MatProgressBarModule,CommonModule
  ],
  providers: [provideNativeDateAdapter()],
  templateUrl: './dialog-add-user.component.html',
  styleUrl: './dialog-add-user.component.scss',
})
export class DialogAddUserComponent {

  firestore: Firestore = inject(Firestore);
  user = new User();
  birthDate!: Date;
  loading = false
  constructor(public dialogRef: MatDialogRef<DialogAddUserComponent>) { }


  async saveUser() {
    this.user.birthDate = this.birthDate.getTime();
    console.log('user', this.user);
    this.loading = true;
    const usersCollection = collection(this.firestore, 'users');
    try {
      const result = await addDoc(usersCollection, { ...this.user });
      this.loading = false;
      console.log('adding user finished', result);
      this.dialogRef.close();
    } catch (error) {
      console.error('Error adding user: ', error);
    }
  }
}
