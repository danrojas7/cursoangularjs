import { Component, Input, Output, EventEmitter } from "@angular/core";

@Component({
    selector: 'componente-hijo',
    templateUrl: 'hijo.component.html'
})
export class HijoComponent {
    public titulo: string;

    @Input('texto1') public propiedadUno: string;
    @Input('texto2') public propiedadDos: string;

    @Output() public desdeElHijo = new EventEmitter();

    constructor() {
        this.titulo = 'Componente Hijo';
    }

    ngOnInit() {
        console.log(this.propiedadUno);
        console.log(this.propiedadDos);
        this.enviar(null);
    }

    enviar(event) {
        this.desdeElHijo.emit({
            nombre: "Victor Robles Web",
            web: 'victorroblesweb.es',
            twitter: '@victorobs'
        });
    }

}