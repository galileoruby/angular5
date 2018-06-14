import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { debug } from 'util';

@Component({
  selector: 'contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})



export class ContactoComponent implements OnInit {



  public titulo: String = "soy contacto ";
  public parametro;


  constructor(
    private _route: ActivatedRoute,
    private _router: Router
  ) {


  }



  ngOnInit() {

    this._route.params.forEach((params: Params) => {
      this.parametro = params["page"];

    });
  }

  redirigir() {
     this._router.navigate(['/contacto','leonidas']);
  }


} //export class ContactoComponent implements OnInit {