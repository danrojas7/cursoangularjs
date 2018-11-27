
import { Component } from '@angular/core';
import { RopaService } from '../services/ropa.service';

@Component({
    selector: 'home',
    templateUrl: './home.component.html',
    providers: [RopaService]
})
export class HomeComponent {
    public titulo = "Página Principal";

    public listadoRopa: Array<string>;
    public prendaAGuardar: string;
    public fecha: Date;
    public nombre : string;

    constructor(
        private _ropaService: RopaService
    ) {
        this.listadoRopa = this._ropaService.getRopa();
        this.fecha = new Date(2018, 10, 23);
        this.nombre = 'Juan López Martínez';
    }

    ngOnInit() {
        console.log(this.listadoRopa);
    }

    guardarPrenda() {
        this._ropaService.addRopa(this.prendaAGuardar);
        console.log(this.listadoRopa);
        this.prendaAGuardar = null;
    }

    eliminarPrenda(index: number) {
        // alert(index);
        this._ropaService.eliminarArticuloRopa(index);
    }
}