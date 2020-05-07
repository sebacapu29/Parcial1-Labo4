import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PeliculaService {

  listaPeliculas:any;
  private _jsonURLCuriosidades = environment._jsonURLCuriosidades;
  constructor(private http:HttpClient) {
    //  this.listaPeliculas =  ;
   }
   obtenerPeliculas():Observable<any>{

      return this.http.get<any[]>(this._jsonURLCuriosidades);
      // return this.listaPeliculas;
    
   }
   deletePelicula(){
   }
   borrarPelicula(pelicula:any){
    //  console.log(pelicula.Id);
    
    var peliculasEnLocalStorage:any;
    var nuevaLista:any[]= new Array<any>();

    if(localStorage.getItem("peliculas")!=null){
      peliculasEnLocalStorage = <Array<any>> JSON.parse(localStorage.getItem("peliculas"));              
    }
    
    if(peliculasEnLocalStorage!= undefined){      
      for (let index = 0; index < peliculasEnLocalStorage.length; index++) {
        var peliculaLocalStor = peliculasEnLocalStorage[index];
        // console.log(peliculaLocalStor);   
        if(peliculaLocalStor.Id !==  pelicula.Id){      

          nuevaLista.push(peliculasEnLocalStorage[index]);
        }
      }
    }
    localStorage.removeItem("peliculas");
    localStorage.setItem("peliculas",JSON.stringify(nuevaLista));
    return nuevaLista;
  }
}
