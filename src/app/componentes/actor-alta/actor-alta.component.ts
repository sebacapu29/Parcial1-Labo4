import { Component, OnInit } from '@angular/core';
import { Paises } from 'src/app/clases/paises';
import { PaisesService } from 'src/app/servicios/paises.service';

@Component({
  selector: 'app-actor-alta',
  templateUrl: './actor-alta.component.html',
  styleUrls: ['./actor-alta.component.css']
})
export class ActorAltaComponent implements OnInit {

  listadoPaisesAlta:Paises[];

  constructor(private servicePaises:PaisesService) { }

  ngOnInit(): void {
    this.servicePaises.traerPaises().subscribe(data=> {
      this.listadoPaisesAlta = data.map(function(pais){
        var paisAux = new Paises();
        paisAux.nombre=pais['name'];
        paisAux.capital = pais["capital"];
        paisAux.bandera = pais["flag"];
        return paisAux;
      });
    });
  }

}
