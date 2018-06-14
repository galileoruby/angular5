import { Injectable } from '@angular/core';


@Injectable()
export class RopaService {
    public nombre_prenda: string = 'Pantalones vaqueros';

    public coleccionRopa: any = ['pantalones', 'camisas', 'calzones', 'calcetinez'];

    prueba(nombrePrenda: String) {
        // return this.nombre_prenda;
        return nombrePrenda;
    }

    addRopa(nombre: String): Array<String> {
        this.coleccionRopa.push(nombre);
        return this.getRopa();
    }

    getRopa() {
        return this.coleccionRopa;
    }

    geleteRopa(indice: number) {

        this.coleccionRopa.splice(indice, 1);

    }

}