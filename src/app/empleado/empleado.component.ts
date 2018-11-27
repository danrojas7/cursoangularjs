import { Component } from '@angular/core';
import { Empleado } from './Empleado';

@Component({
    selector: 'empleado-tag',
    // template: `
    //     <h2>{{nombre_componente}}</h2>
    //     <p>{{listado_frutas}}</p>
    // `,
    templateUrl: './empleado.component.html',
    styleUrls: ['./empleado.component.css']
})
export class EmpleadoComponent {
    public titulo = 'Componente de Empleado';
    public empleado: Empleado;
    public trabajadores: Array<Empleado>;
    public trabajadorExterno: boolean;
    public color: string;
    public colorSeleccionado: string;

    constructor() {
        this.empleado = new Empleado('Daniel Alejandro Rojas Santana', 31, 'Analista', false);
        this.trabajadores = [
            new Empleado('Manolo Martínez', 35, 'Administrativo', true),
            new Empleado('Ana López', 25, 'Cocinera', true),
            new Empleado('Victor Robles', 66, 'Programador', false)
        ];
        this.trabajadorExterno = false;
        this.color = 'green';
        this.colorSeleccionado = '#ccc';
    }

    ngOnInit() {
        console.log(this.empleado);
        console.log(this.trabajadores);
    }

    cambiarExterno(trabajadorExterno: boolean) {
        this.trabajadorExterno = trabajadorExterno;
    }

    logColorSeleccionado() {
        console.log(this.colorSeleccionado);
    }
}
