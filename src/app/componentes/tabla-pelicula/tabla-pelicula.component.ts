import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-tabla-pelicula',
  templateUrl: './tabla-pelicula.component.html',
  styleUrls: ['./tabla-pelicula.component.css']
})
export class TablaPeliculaComponent implements OnInit {

  @Input() listaPeliculas:any;
  @Output() peliculaSeleccionada:EventEmitter<any> = new EventEmitter<any>();

  constructor() {
    console.log(this.listaPeliculas);
   }

  ngOnInit(): void {
  }
  onPeliculaSeleccionada(pelicula:any){
    this.peliculaSeleccionada.emit(pelicula);
  }

}
