import { Component, OnInit } from '@angular/core';

import { tCoche } from '../clases/tCoche';
@Component({
  selector: 'app-coches',
  templateUrl: './coches.component.html',
  styleUrls: ['./coches.component.css']
})
export class CochesComponent implements OnInit {


  public _coche: tCoche;

  constructor() {

    this._coche = new tCoche("", "", "");
  }

  ngOnInit() {

  }


  public onSubmit() {

    console.log(this._coche);

  }
}

