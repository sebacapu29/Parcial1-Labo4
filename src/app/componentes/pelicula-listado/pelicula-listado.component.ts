import { Component, OnInit } from '@angular/core';
import { PeliculaService } from 'src/app/servicios/pelicula.service';

@Component({
  selector: 'app-pelicula-listado',
  templateUrl: './pelicula-listado.component.html',
  styleUrls: ['./pelicula-listado.component.css']
})
export class PeliculaListadoComponent implements OnInit {

  peliculas:any;
  peliculaSeleccionada:any;

  constructor(private servicePelicula:PeliculaService) { 
    this.peliculas = JSON.parse(localStorage.getItem("peliculas"));  
  }

  ngOnInit(): void {
  }
tomarPeliculaParaDetalle(pelicula){
   this.peliculaSeleccionada = pelicula;
}
tomarPeliculaParaBorrar(pelicula){
  this.peliculas = this.servicePelicula.borrarPelicula(pelicula);
  this.peliculaSeleccionada=null;
}
}
