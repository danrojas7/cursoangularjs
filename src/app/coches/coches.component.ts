import { Component, OnInit } from '@angular/core';
import { Coche } from './Coche';
import { PeticionesService } from '../services/peticiones.services';

@Component({
  selector: 'app-coches',
  templateUrl: './coches.component.html',
  styleUrls: ['./coches.component.css'],
  providers: [
    PeticionesService
  ]
})
export class CochesComponent implements OnInit {
  public coche: Coche;
  public coches: Array<Coche>;
  public articulos: Array<any>;

  constructor(private _peticionesService: PeticionesService) {
    this.coche = new Coche('', '', '');
    this.coches = [
      new Coche('Seat Panda', '120', 'Blanco'),
      new Coche('Renault Clio', '110', 'Azul')];
  }

  ngOnInit() {
    console.log(this._peticionesService.getPrueba());

    this._peticionesService.getArticulos().subscribe(
      result => {
        console.log(result);
        this.articulos = result;
      },
      error => {
        var errMsj = <any>error;
        console.log(errMsj);
      }
    );
  }

  onSummit() {
    this.coches.push(this.coche);
    console.log(this.coche);
    this.coche = new Coche('', '', '');
  }

}
