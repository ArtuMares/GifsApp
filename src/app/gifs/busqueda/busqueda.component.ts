import { Component, ElementRef, Input, ViewChild } from '@angular/core';

import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styles: [
  ]
})
export class BusquedaComponent {

  @ViewChild('txtBuscar') txtBuscar!: ElementRef<HTMLInputElement>; //non null assertion operator (para asegurar que no puede ser null )

  constructor(private GifsService: GifsService) { }//importamos la clase GifsService como un parámetro del constructor

  buscar(texto: string) {
    let valor = this.txtBuscar.nativeElement.value;
    if (valor.trim()!="") {
      this.GifsService.buscarGifs(texto);
    }
    this.txtBuscar.nativeElement.value = "";
  }

}
