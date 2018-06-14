import { Component } from '@angular/core';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';

import { tEmpleado } from '../clases/tEmpleado';
import { tPatrona } from '../clases/tEmpresaPatrona';
import { templateJitUrl } from '@angular/compiler';


@Component({
  selector: 'empleado-tag',
  templateUrl: './empleado.component.html'
})



export class EmpleadoComponent implements OnInit {

  public titulo: String = 'es componeten'
  public empleado: tEmpleado;

  public empleados: Array<tEmpleado>;
  public esExterno: boolean;
  public color2: String;

  public tamanoFuente: number;

  constructor() {
    this.empleado = new tEmpleado('Ezequiel', 47, 'Patrullero', true, 200888, 298323982983);


    

    this.empleados = [
      new tEmpleado('Rosa María Cristina', 34, 'Cocinear', true, 2134, null),
      new tEmpleado('Carlos Alcázar Ramírez', 43, 'Pastelero', false, 2134, null),
      new tEmpleado('José Ernesto Aranda Lumbreras', 58, 'Mantenimiento', true, 2398457, null),
      new tEmpleado('José Ernesto Ramireez Moreano', 27, 'Sistemas', true, 2020832, null),
      new tEmpleado('Antonio Aguilar Remirez', 72, 'Cantante', false, 2020832, null)
    ];


    this.esExterno = true;
    this.color2 = 'blue';
    this.tamanoFuente = 24;




  }




  ngOnInit() {

    // console.log(this.empleados);

    console.log(this.esExterno);

  }



  cambiarExterno(blExterno) {
    this.esExterno = blExterno;

  }
}

