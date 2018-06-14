import { Component, OnInit } from '@angular/core';
import { RopaService } from '../servicios/ropa.service';


@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [RopaService]
})


export class HomeComponent implements OnInit {

  public titulo: String = 'soy componente home.';
  public listadoRopa: Array<String>;
  public prendaCurrent: String;
  public hoy:Date;

  constructor(
    private _ropaServicio: RopaService
  ) {


    this.hoy= new Date(2018,4,3,21,6,4,11);
    
  }

  ngOnInit() {
    this.listadoRopa = this._ropaServicio.getRopa();
    this.prueba();

  }



  prueba() {
    console.log(this.listadoRopa);
  }

  nuevaPrenda() {
    this._ropaServicio.addRopa(this.prendaCurrent);
    this.prendaCurrent = '';
  }

  eliminarPrenda(indice: number) {
    // console.log(indice);

    this._ropaServicio.geleteRopa(indice);

  }

}
