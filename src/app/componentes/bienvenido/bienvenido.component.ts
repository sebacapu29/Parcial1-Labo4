import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Pelicula } from 'src/app/clases/pelicula';
import { Actor } from 'src/app/clases/actor';
import { PeliculaService } from 'src/app/servicios/pelicula.service';

@Component({
  selector: 'app-bienvenido',
  templateUrl: './bienvenido.component.html',
  styleUrls: ['./bienvenido.component.css']
})
export class BienvenidoComponent implements OnInit {

  listaPeliculas:any;
  lista2Peliculas:Pelicula[];
  listaActores:Actor[];

  constructor(private router:Router,private peliculaService:PeliculaService) {
    localStorage.removeItem("peliculas");

    this.peliculaService.obtenerPeliculas().subscribe(data=> {     
        this.listaPeliculas=data;  
         this.lista2Peliculas =  this.listaPeliculas;
         localStorage.setItem("peliculas", JSON.stringify(this.listaPeliculas));
        
    });

   

   var actores = this.mockActores();
   localStorage.setItem("actores",this.mockActores());
  //  console.log(JSON.parse(actores));
    // console.log(this.lista2Peliculas);
  

   }
   mockActores(){
    this.listaActores = new Array<Actor>();
    this.listaActores.push(new Actor(1,'Willard Carroll','Smith','M','25/09/1968','assets/actores/will-smith.jpg'));
    this.listaActores.push(new Actor(2,'Keanu Charles','Reeves','M','2/09/1964','assets/actores/keanu-reevs.jpg'));
    this.listaActores.push(new Actor(3,'James Eugene','Carrey','M','17/01/1962','assets/actores/jimcarrey.jpg'));
    this.listaActores.push(new Actor(4,'Scarlett Ingrid','Johansson ','F','22/11/1984','assets/actores/scarlett.jpg'));

   return JSON.stringify(this.listaActores);
   }
  ngOnInit(): void {
  }
  
}
