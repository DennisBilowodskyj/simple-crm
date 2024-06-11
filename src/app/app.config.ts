import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyBPpqBgXbbdsLt8n_WJEgCLxPheh2WAuAc',
  authDomain: 'simple-crm-d5284.firebaseapp.com',
  projectId: 'simple-crm-d5284',
  storageBucket: 'simple-crm-d5284.appspot.com',
  messagingSenderId: '62477917588',
  appId: '1:62477917588:web:416e8fd899465535abc381',
};

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideAnimationsAsync(),
      provideFirebaseApp(() => initializeApp(firebaseConfig)),
      provideFirestore(() => getFirestore()),
    ],
  };
