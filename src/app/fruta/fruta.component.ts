import { Component } from '@angular/core';

@Component({
    selector: 'fruta',
    // template: `
    //     <h2>{{nombre_componente}}</h2>
    //     <p>{{listado_frutas}}</p>
    // `,
    templateUrl: './fruta.component.html',
    styleUrls: ['./fruta.component.css']
})
export class FrutaComponent {
    // La visibilidad por ser el typescript transpilado a JavaScript, por esta razón no está teniendo en cuenta
    // la visitibilidad,al momento de hacer el binding de la propiedad
    public nombre_componente = 'Componente de fruta';
    public listado_frutas = 'Naranja, Manzana, Pera, Sandía';
    public nombre: string;
    public edad: number;
    public mayorEdad;
    public trabajos: Array<any> = ['Analista de sistemas', 'Coordinador de Bases de Datos', 'Desarrollador Junior', 'Analista', 123];
    comodin: any;

    /*
    constructor() {
        console.log(this.comodin);
        console.log(this.trabajos);
    }
    */

    /*
    constructor(comodin: any) {
        this.comodin = comodin;
    }
    */

    constructor() {
        this.nombre = 'Daniel Alejandro Rojas Santana';
        this.edad = 31;
        this.mayorEdad = true;
        this.comodin = 'Cualquier cosa';
        // this.holaMundo(this.nombre);
        /*
        this.cambiarNombre();
        this.cambiarEdad(21);
        alert('Hola Mundo!!! ' + this.nombre + ' ' + this.edad);
        */
    }

    ngOnInit() {
        this.cambiarNombre();
        this.cambiarEdad(21);
        console.log('Hola Mundo!!! ' + this.nombre + ' ' + this.edad);

        // Variables y alcance
        var uno = 8;
        var dos = 15;

        if (uno === 8) {
            let uno = 3; // let tiene el alcance dentro del bloque de código
            var dos = 88; // Variable de manera global
            console.log("dentro del if " + uno + " " + dos);
        }

        console.log("dentro del if " + uno + " " + dos);
    }

    /*
    holaMundo(nombre) {
        this.nombre = 'Daniel Rojas';
        alert('Hola Mundo!!! ' + nombre);
    }
    */

    cambiarNombre() {
        this.nombre = 'Daniel Rojas';
    }

    cambiarEdad(edad) {
        this.edad = edad;
    }
}
