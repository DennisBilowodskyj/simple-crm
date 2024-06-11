import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatTooltipModule, TooltipPosition} from '@angular/material/tooltip';
import { MatDialog } from '@angular/material/dialog';
import {MatDialogModule} from '@angular/material/dialog';
import { DialogAddUserComponent } from '../dialog-add-user/dialog-add-user.component';
import { MatCardModule } from '@angular/material/card';
import { Firestore, collection } from '@angular/fire/firestore/firebase';
@Component({
  selector: 'app-user',
  standalone: true,
  imports: [MatButtonModule,MatIconModule,MatTooltipModule,MatDialogModule,MatCardModule],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export class UserComponent {


  positionOptions: TooltipPosition[] = ['above'];
  position = new FormControl(this.positionOptions[0]);

  constructor(public dialog: MatDialog, private firestore: Firestore) {}
  ngOnInit(): void {
    this.firestore
    collection(this.firestore,'users');
    .valueChanges()
    .subscribe((changes: any) =>{
      console.log('recieved changes from', changes)
    });
  }


  openDialog(){
this.dialog.open(DialogAddUserComponent);
  }
}
