import { Component, OnInit, Input } from '@angular/core';
import { Pelicula } from 'src/app/clases/pelicula';
import { Actor } from 'src/app/clases/actor';
import { PeliculaService } from 'src/app/servicios/pelicula.service';

@Component({
  selector: 'app-form-alta-pelicula',
  templateUrl: './form-alta-pelicula.component.html',
  styleUrls: ['./form-alta-pelicula.component.css']
})
export class FormAltaPeliculaComponent implements OnInit {

  peliculaParaAlta:Pelicula;
  actorEnPelicula:Actor;
  @Input() actorSeleccionado;

  constructor(private peliculaService:PeliculaService) { 
    this.peliculaParaAlta = new Pelicula();
    
  }
  onSubmit() {
     console.log(this.peliculaParaAlta);
    //  this.peliculaService.
  }
  ngOnInit(): void {
    this.actorSeleccionado = new Actor(0,"-","-","-","-","-",'-');
  }

}
