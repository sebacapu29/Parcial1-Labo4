import { Component, OnInit } from '@angular/core';
import { Paises } from 'src/app/clases/paises';
import { PaisesService } from 'src/app/servicios/paises.service';

@Component({
  selector: 'app-listado-paises',
  templateUrl: './listado-paises.component.html',
  styleUrls: ['./listado-paises.component.css']
})
export class ListadoPaisesComponent implements OnInit {

  listadoPaises:Paises[];
  paisParaDetalle:Paises;

  constructor(private servicePaises:PaisesService) { }

  ngOnInit(): void {
    this.servicePaises.traerPaises().subscribe(data=> {
      this.listadoPaises = data.map(function(pais){
        var paisAux = new Paises();
        paisAux.nombre=pais['name'];
        paisAux.capital = pais["capital"];
        paisAux.bandera = pais["flag"];
        return paisAux;
      });
      // localStorage.setItem("paises",JSON.stringify(this.listadoPaises));
    });
  }
  tomarPaisSeleccionado(paisSeleccionado:Paises){
    this.paisParaDetalle=paisSeleccionado;
  }

}
