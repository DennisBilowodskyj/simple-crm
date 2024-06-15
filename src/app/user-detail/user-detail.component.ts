import { Component } from '@angular/core';
import {
  MatCard,
  MatCardHeader,
  MatCardTitle,
  MatCardContent,
} from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatDialog } from '@angular/material/dialog';
import { DialogEditAdressComponent } from '../dialog-edit-adress/dialog-edit-adress.component';
import { DialogEditUserComponent } from '../dialog-edit-user/dialog-edit-user.component';
import { User } from '../../models/user.class';
import { Firestore, collection, doc, getDoc, DocumentData } from '@angular/fire/firestore';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-detail',
  standalone: true,
  imports: [
    MatCard,
    MatCardHeader,
    MatCardTitle,
    MatCardContent,
    MatIconModule,
    MatButtonModule,
    MatMenuModule  ],
  templateUrl: './user-detail.component.html',
  styleUrl: './user-detail.component.scss',
})
export class UserDetailComponent {
  constructor(private route: ActivatedRoute, public dialog: MatDialog, private firestore: Firestore) {}
  user: User = new User();

  userId: string | null = '';
  userData: DocumentData | null = null;

  editMenu() {
    const dialog = this.dialog.open(DialogEditAdressComponent);
    (dialog.componentInstance as any).user = new User(this.user);
    (dialog.componentInstance as any).userId = this.userId;
    // Set 'user' property using 'any' type
  }
  editUserDetail() {
    const dialog = this.dialog.open(DialogEditUserComponent);
    (dialog.componentInstance as any).user = this.user;
    (dialog.componentInstance as any).userId = this.userId;

  }


  ngOnInit() {
    this.route.paramMap.subscribe((params: any) => {
      this.userId = params.get('id');
      console.log('got id', this.userId);
      if (this.userId) {
        this.getUser(this.userId);
      }
    });
  }

  async getUser(userId: string) {
    try {
      const userDocRef = doc(this.firestore, 'users', userId);
      const userDoc = await getDoc(userDocRef);
      if (userDoc.exists()) {
        this.userData = userDoc.data();
        console.log('User Data:', this.userData);
        this.mapUserData(this.userData); 
      } else {
        console.log('No such document!');
      }
    } catch (error) {
      console.error('Error getting user document:', error);
    }
  }


  mapUserData(data: DocumentData) {
    this.user = new User(data);
  }

}
