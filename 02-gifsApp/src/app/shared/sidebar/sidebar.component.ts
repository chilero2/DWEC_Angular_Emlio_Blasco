import { Component } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { GifsService } from '../../gifs/service/gifs.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})



export class SidebarComponent  {

  get gifs(){
    return this.gifsService.historial
  }
  constructor(private gifsService: GifsService) {}

  buscar(gif:string) {
    console.log(gif)
    this.gifsService.buscarGifs(gif)
  }




}
