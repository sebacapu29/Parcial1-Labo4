import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  busqueda(){
    this.router.navigate(['busqueda']);
  }
  listadoPeliculas(){
    this.router.navigate(['peliculas/listado']);
  }
  altaPelicula(){
    this.router.navigate(['peliculas/alta']);
  }
  altaActor(){
    this.router.navigate(['actor/alta']);
  }
  listadoActor(){
    this.router.navigate(['actor/listado']);
  }
}
