import { Component, OnInit } from '@angular/core';
import { Actor } from 'src/app/clases/actor';
import { Pelicula } from 'src/app/clases/pelicula';

@Component({
  selector: 'app-pelicula-alta',
  templateUrl: './pelicula-alta.component.html',
  styleUrls: ['./pelicula-alta.component.css']
})
export class PeliculaAltaComponent implements OnInit {

  actoresParaAltaPelicula:Actor[];
  peliculaParaAlta:Pelicula;
  actorParaFormulario:Actor;

  constructor() { 
    this.actoresParaAltaPelicula= JSON.parse(localStorage.getItem("actores"));
    this.peliculaParaAlta = new Pelicula();
  }

  ngOnInit(): void {
  }
  tomarActorSeleccionado(actor:Actor){
    this.actorParaFormulario = actor;
  }
}
