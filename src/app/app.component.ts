import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Firestore, getDocs, collection } from '@angular/fire/firestore';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'sunrise-firebase';
  firestore = inject(Firestore);



  ngOnInit() {
    getDocs(collection(this.firestore, "testCollection")).then((response) => {
      console.log("response.docs");
      console.log(response.docs[0].data());
    });
  }
}
