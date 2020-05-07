import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent implements OnInit {

  peliculas:any;
  mostrarActores:boolean;
  mostrarPeliculas:boolean;
  
  constructor() { 
    this.peliculas = JSON.parse(localStorage.getItem("peliculas"));  
  }

  ngOnInit(): void {
  }

}
