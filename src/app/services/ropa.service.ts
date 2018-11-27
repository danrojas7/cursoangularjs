import { Injectable } from '@angular/core';

@Injectable()
export class RopaService {
    public nombrePrenda: string;
    public coleccionRopa: Array<string>;

    constructor() {
        this.nombrePrenda = 'Pantalones vaqueros';
        this.coleccionRopa = ['Pantalones blancos', 'Camiseta roja'];
    }

    prueba(nombrePrenda: string) {
        this.nombrePrenda = nombrePrenda;
        return this.nombrePrenda;
    }

    addRopa(nombrePrenda: string): Array<string> {
        this.coleccionRopa.push(nombrePrenda);
        return this.getRopa();
    }

    getRopa(): Array<string> {
        return this.coleccionRopa;
    }

    eliminarArticuloRopa(index: number): Array<string> {
        this.coleccionRopa.splice(index, 1);
        return this.getRopa();
    }
}