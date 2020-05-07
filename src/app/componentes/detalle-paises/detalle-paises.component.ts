import { Component, OnInit, Input } from '@angular/core';
import { Paises } from 'src/app/clases/paises';

@Component({
  selector: 'app-detalle-paises',
  templateUrl: './detalle-paises.component.html',
  styleUrls: ['./detalle-paises.component.css']
})
export class DetallePaisesComponent implements OnInit {

  @Input() paisSeleccionado:Paises;

  constructor() { }

  ngOnInit(): void {
  }

}
