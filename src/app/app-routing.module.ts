import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BienvenidoComponent } from './componentes/bienvenido/bienvenido.component';
import { PeliculaAltaComponent } from './componentes/pelicula-alta/pelicula-alta.component';
import { ActorAltaComponent } from './componentes/actor-alta/actor-alta.component';
import { ActorListadoComponent } from './componentes/actor-listado/actor-listado.component';
import { PeliculaListadoComponent } from './componentes/pelicula-listado/pelicula-listado.component';
import { BusquedaComponent } from './componentes/busqueda/busqueda.component';
import { ListadoPaisesComponent } from './componentes/listado-paises/listado-paises.component';

const routes: Routes = [
  { path:'bienvenido',component:BienvenidoComponent },
  { path:'busqueda',component:BusquedaComponent },
  { path:'peliculas/alta',component:PeliculaAltaComponent },
  { path:'peliculas/listado',component:PeliculaListadoComponent },
  { path:'actor/alta',component:ActorAltaComponent },
  { path:'actor/listado',component:ActorListadoComponent },
  { path:'paises/listado',component:ListadoPaisesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
