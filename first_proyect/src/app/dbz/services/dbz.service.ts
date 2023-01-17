import {Injectable} from "@angular/core"
import { Villano } from "../interfaces/dbz.interfaces";
import { Personaje } from '../Personaje';

@Injectable()
export class DbzService {

    private _villanos : Villano[] = [
        { nombre: 'célula', poder: 30 },
        { nombre: 'freezer', poder: 25 },
      ];

      get villanos(): Villano[] {
        return [... this._villanos]
      }

    constructor(){
        console.log('Servicio inicializado')
    }

    agregarVillano(villano: Villano) {
        this._villanos.push(villano);
      }


}