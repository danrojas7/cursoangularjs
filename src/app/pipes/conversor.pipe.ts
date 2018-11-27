import { Pipe, PipeTransform } from "@angular/core";


@Pipe({
    name: 'conversor'
})
export class ConversorPipe implements PipeTransform {
    transform(valor1: string, valor2: string) {
        let result: number;
        let strResult: string;
        result = parseInt(valor1) * parseInt(valor2);
        strResult = "La multiplicación: " + String(valor1) + " x " + String(valor2) + " = " + String(result);
        return strResult;
    }
}