import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment} from '../../environments/environment';
import { Observable } from 'rxjs';
import { Paises } from '../clases/paises';

@Injectable({
  providedIn: 'root'
})
export class PaisesService {

  private urlPaises = environment.paisesUrl;

  constructor(private http:HttpClient) {

   }
   traerPaises():Observable<any>{
    return this.http.get(this.urlPaises);
   }
   deshabilitarPais(pais:Paises){
     pais.deshabilitado=true;
   }
}
