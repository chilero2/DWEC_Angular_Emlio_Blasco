import { Component, Input } from '@angular/core';
import { Villano } from '../../interfaces/dbz.interfaces';
import { Personaje } from '../../Personaje';
import { DbzModule } from '../../dbz.module';
import { DbzService } from '../../services/dbz.service';

@Component({
  selector: 'app-list-villainous',
  templateUrl: './list-villainous.component.html',
  styleUrls: ['./list-villainous.component.scss'],
})
export class ListVillainousComponent {
  // @Input() villanos: Villano[] = [];

  get villanos() {
    return this.dbzService.villanos
  }

  constructor(private dbzService: DbzService){}
}
