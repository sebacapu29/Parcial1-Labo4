import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';
import { Paises } from 'src/app/clases/paises';

@Component({
  selector: 'app-tabla-paises',
  templateUrl: './tabla-paises.component.html',
  styleUrls: ['./tabla-paises.component.css']
})
export class TablaPaisesComponent implements OnInit {

  @Input() listadoPaises:Paises[];
  @Output() onPaisSeleccionado:EventEmitter<any>=new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }
  paisSeleccionado(pais:Paises){
    console.log(pais)
    this.onPaisSeleccionado.emit(pais);
  }
}
