import { Component, OnInit } from '@angular/core';
import { Actor } from 'src/app/clases/actor';

@Component({
  selector: 'app-actor-listado',
  templateUrl: './actor-listado.component.html',
  styleUrls: ['./actor-listado.component.css']
})
export class ActorListadoComponent implements OnInit {

  mostrarActores:boolean;
  actorSeleccionado:Actor;
  actores:any;

  constructor() { 
    this.actores = JSON.parse(localStorage.getItem("actores"));    
  }

  ngOnInit(): void {
  }
  tomarActorParaDetalle(actor:Actor){
    console.log(actor);
    this.actorSeleccionado = actor;
  }
}
