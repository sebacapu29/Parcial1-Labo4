import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Actor } from 'src/app/clases/actor';

@Component({
  selector: 'app-tabla-actor',
  templateUrl: './tabla-actor.component.html',
  styleUrls: ['./tabla-actor.component.css']
})
export class TablaActorComponent implements OnInit {

  constructor() { }
  @Input() listaActores:any;
  @Output() onActorSeleccionado:EventEmitter<any> = new EventEmitter<any>();


  ngOnInit(): void {
  }
  actorSeleccionado(actor:Actor){
    this.onActorSeleccionado.emit(actor);
  }
}
