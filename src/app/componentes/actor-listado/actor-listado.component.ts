import { Component, OnInit } from '@angular/core';
import { Actor } from 'src/app/clases/actor';
import { Paises } from 'src/app/clases/paises';
import { PaisesService } from 'src/app/servicios/paises.service';

@Component({
  selector: 'app-actor-listado',
  templateUrl: './actor-listado.component.html',
  styleUrls: ['./actor-listado.component.css']
})
export class ActorListadoComponent implements OnInit {

  mostrarActores:boolean;
  actorSeleccionado:Actor;
  actores:any;
  paisParaDetalle:Paises;
  listadoPaises:Paises[];
  
  constructor(private servicePaises:PaisesService) { 
    this.actores = JSON.parse(localStorage.getItem("actores"));    
  }

  ngOnInit(): void {
    this.servicePaises.traerPaises().subscribe(data=> {
      this.listadoPaises = data.map(function(pais){
            var paisAux = new Paises();
            paisAux.nombre=pais['name'];
            paisAux.capital = pais["capital"];
            paisAux.bandera = pais["flag"];
            paisAux.deshabilitado = false;
            return paisAux;
      });
      // localStorage.setItem("paises",JSON.stringify(this.listadoPaises));
    });
  }
  tomarActorParaDetalle(actor:Actor){
    console.log(actor);
    this.actorSeleccionado = actor;
    for (let index = 0; index < this.listadoPaises.length; index++) {
      const pais = this.listadoPaises[index];
      if(pais.nombre==this.actorSeleccionado.pais_origen){
        this.paisParaDetalle = pais;
        break;
      }
    }
  }
}
