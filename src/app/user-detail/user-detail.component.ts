import { Component } from '@angular/core';
import { Firestore,collection, doc,getDoc,DocumentData } from '@angular/fire/firestore/firebase';
import { MatCardContent } from '@angular/material/card';
import { MatCard, MatCardHeader,MatCardTitle } from '@angular/material/card';
import { ActivatedRoute } from '@angular/router';
import { onSnapshot, QuerySnapshot,  } from 'firebase/firestore';

@Component({
  selector: 'app-user-detail',
  standalone: true,
  imports: [MatCardContent,MatCard,MatCardTitle,MatCardHeader],
  templateUrl: './user-detail.component.html',
  styleUrl: './user-detail.component.scss'
})
export class UserDetailComponent {

  userId: string | null = '';

  constructor (private route: ActivatedRoute, private firestore: Firestore ){}
  ngOnInit(){
  this.route.paramMap.subscribe( params => {
    this.userId = params.get('id');
    console.log('got id', this.userId);
    this.getUser();
})
}

getUser(){
  this.firestore
    doc(this.firestore, 'users');
   
  
  
  
  
  }





}