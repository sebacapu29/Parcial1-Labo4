import { Component, OnInit, Input } from '@angular/core';
import { Actor } from 'src/app/clases/actor';
import { Paises } from 'src/app/clases/paises';

@Component({
  selector: 'app-form-actor',
  templateUrl: './form-actor.component.html',
  styleUrls: ['./form-actor.component.css']
})
export class FormActorComponent implements OnInit {

  constructor() { }
  actorParaAlta:Actor;
  @Input() paisSeleccionado:Paises;

  ngOnInit(): void {
    this.actorParaAlta = new Actor(0,"","","","","","");
    this.paisSeleccionado = new Paises();
  }
  onSubmit(){
    var actores = <Array<Actor>>JSON.parse(localStorage.getItem("actores"));
    this.actorParaAlta.pais_origen = this.paisSeleccionado.nombre;
    this.actorParaAlta.foto="assets/actores/avatar-image.jpg";
    console.log(this.actorParaAlta.sexo);
    actores.push(this.actorParaAlta);
    localStorage.removeItem("actores");
    localStorage.setItem("actores",JSON.stringify(actores));

  }
}
