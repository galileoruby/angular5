import { Component } from '@angular/core';

@Component({
  selector: 'fruta',
  templateUrl: './fruta.component.html',
  styleUrls: ['./fruta.component.css']

})


export class FrutaComponent {
  Nombre = 'Canasta de frutas';
  frutas = [{ emp_name: 'Tina', salary: 5000 }, { emp_name: 'Mike', salary: 5000 }, { emp_name: 'Saleem', salary: 5000 }];
  textura= "suave";

}
