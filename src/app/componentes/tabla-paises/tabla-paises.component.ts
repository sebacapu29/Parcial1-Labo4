import { Component, OnInit, Input } from '@angular/core';
import { Paises } from 'src/app/clases/paises';

@Component({
  selector: 'app-tabla-paises',
  templateUrl: './tabla-paises.component.html',
  styleUrls: ['./tabla-paises.component.css']
})
export class TablaPaisesComponent implements OnInit {

  @Input() listadoPaises:Paises[];
  constructor() { }

  ngOnInit(): void {
  }

}
