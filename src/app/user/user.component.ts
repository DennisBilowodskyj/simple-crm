import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule, TooltipPosition } from '@angular/material/tooltip';
import { MatDialog } from '@angular/material/dialog';
import { MatDialogModule } from '@angular/material/dialog';
import { DialogAddUserComponent } from '../dialog-add-user/dialog-add-user.component';
import { MatCardModule } from '@angular/material/card';
import { Firestore, collection } from '@angular/fire/firestore';
import { onSnapshot, QuerySnapshot, DocumentData } from 'firebase/firestore';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-user',
  standalone: true,
  imports: [
    MatButtonModule,
    MatIconModule,
    MatTooltipModule,
    MatDialogModule,
    MatCardModule,
    CommonModule,
    RouterLink,
  ],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss',
})
export class UserComponent implements OnInit {
  allUsers: any = [];

  positionOptions: TooltipPosition[] = ['above'];
  position = new FormControl(this.positionOptions[0]);
  users: any;

  constructor(public dialog: MatDialog, private firestore: Firestore) {}

  ngOnInit(): void {
    const usersCollection = collection(this.firestore, 'users');
    onSnapshot(usersCollection, (snapshot: QuerySnapshot<DocumentData>) => {
      const changes = snapshot.docs.map((doc) => ({
        ...doc.data(),
        customerId: doc.id,
      }));
      console.log('recieved changes from', changes);

      this.allUsers = changes;
    });
  }

  openDialog() {
    this.dialog.open(DialogAddUserComponent);
  }
}
