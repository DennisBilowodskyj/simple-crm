import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDialogRef, MatDialogModule } from '@angular/material/dialog';
import { User } from '../../models/user.class';
import { DialogAddUserComponent } from '../dialog-add-user/dialog-add-user.component';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { Firestore, addDoc, collection, doc, updateDoc } from '@angular/fire/firestore';
@Component({
  selector: 'app-dialog-edit-adress',
  standalone: true,
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatProgressBarModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
    MatDialogModule,
  ],
  templateUrl: './dialog-edit-adress.component.html',
  styleUrl: './dialog-edit-adress.component.scss',
})
export class DialogEditAdressComponent {
  loading = false;
  firestore: Firestore = inject(Firestore);
  constructor(public dialogRef: MatDialogRef<DialogAddUserComponent>) {}

  user!: User;
  userId!: string;

  async saveUser() {
    this.loading = true;
    const usersCollection = collection(this.firestore, 'users');
    try {
      const userDocRef  = doc(usersCollection, this.userId); 
    await updateDoc(userDocRef , { ...this.user });
      this.loading = false;
      console.log('adding user finished', userDocRef );
      this.dialogRef.close();
    } catch (error) {
      console.error('Error adding user: ', error);
    }
    
  }
  }

