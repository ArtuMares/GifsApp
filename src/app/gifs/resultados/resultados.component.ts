import { Component } from '@angular/core';
import { GifsService } from '../services/gifs.service';
import { Gif } from '../Interfaces/gifs.inteface';

@Component({
  selector: 'app-resultados',
  templateUrl: './resultados.component.html',
  styles: [
  ]
})
export class ResultadosComponent {

    get resultados(){
      return this.GifsService.resultados;
    }
  constructor(private GifsService:GifsService) { }


}
