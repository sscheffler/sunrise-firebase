import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    importProvidersFrom(
      provideFirebaseApp(() =>
        initializeApp({
          projectId: 'sunrise-403413',
          appId: '1:98482988906:web:44ec6de0e1709e689ea713',
          databaseURL:
            'https://sunrise-403413-default-rtdb.europe-west1.firebasedatabase.app',
          storageBucket: 'sunrise-403413.appspot.com',
          apiKey: 'AIzaSyAURgxyTlCaWV8E011m0SYrP0L5d7fJ2eM',
          authDomain: 'sunrise-403413.firebaseapp.com',
          messagingSenderId: '98482988906',
          measurementId: 'G-18NNE061QV',
        })
      )
    ),
    importProvidersFrom(provideAuth(() => getAuth())),
    importProvidersFrom(provideFirestore(() => getFirestore())),
  ],
};
