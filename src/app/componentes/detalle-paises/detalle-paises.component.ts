import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Paises } from 'src/app/clases/paises';

@Component({
  selector: 'app-detalle-paises',
  templateUrl: './detalle-paises.component.html',
  styleUrls: ['./detalle-paises.component.css']
})
export class DetallePaisesComponent implements OnInit {

  @Input() paisSeleccionado:Paises;
  @Output() deshabilitarPais:EventEmitter<any>= new EventEmitter<any>();
  constructor() { }

  ngOnInit(): void {
  }
  onDeshabilitarPais(){
    this.deshabilitarPais.emit(this.paisSeleccionado);
    this.paisSeleccionado=null;
  }
}
