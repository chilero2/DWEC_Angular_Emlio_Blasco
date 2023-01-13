import { Component, Input } from '@angular/core';
import { Villano } from '../../interfaces/dbz.interfaces';

@Component({
  selector: 'app-list-villainous',
  templateUrl: './list-villainous.component.html',
  styleUrls: ['./list-villainous.component.scss'],
})
export class ListVillainousComponent {
  @Input() villanos: Villano[] = [];
}
