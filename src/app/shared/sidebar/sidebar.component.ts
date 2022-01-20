import { Component } from '@angular/core';
import { GifsService } from '../../gifs/services/gifs.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {


  constructor(private GifsService: GifsService) { }//importamos la clase GifsService como un parámetro del constructor

  get historial() {
    return this.GifsService.historial;
  }
  buscar(element:string){
    this.GifsService.buscarGifs(element);
  }
}
