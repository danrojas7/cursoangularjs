import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-plantillas',
  templateUrl: './plantillas.component.html',
  styleUrls: ['./plantillas.component.css']
})
export class PlantillasComponent implements OnInit {
  public titulo: string;
  public administrador: boolean;

  public datoExterno: string = "Victor Robles";
  public identity = {
    id: 1,
    web: 'victorroblesweb.es',
    tematica: 'Desarrollo web'
  };


  constructor() {
    this.titulo = 'Plantillas ngTemplate en Angular';
    this.administrador = true;
  }

  ngOnInit() {
  }

  cambiar(administrador: boolean) {
    this.administrador = administrador;
  }

}
