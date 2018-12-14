import { Component, Input } from "@angular/core";

@Component({
    selector: 'componente-hijo',
    templateUrl: 'hijo.component.html'
})
export class HijoComponent {
    public titulo: string;

    @Input('texto1') public propiedadUno: string;
    @Input('texto2') public propiedadDos: string;

    constructor() {
        this.titulo = 'Componente Hijo';
    }

    ngOnInit() {
        console.log(this.propiedadUno);
        console.log(this.propiedadDos);
    }
}