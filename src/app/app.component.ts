import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pw3-angular-basico';
  ListaCurso: string[] = ['Turismo', 'Educação Física', 'Desenvolvimento de Sistemas'];
  constructor() {

    for(let item of this.ListaCurso){

      console.log(item);
    }

  }
}
