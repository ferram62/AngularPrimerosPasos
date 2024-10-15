import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CharacterInterfaceTs } from '../../interfaces/character.interface.ts';

@Component({
  selector: 'app-dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  @Input()
  public characterList: CharacterInterfaceTs[] = [{
    name: 'Trunks',
    power: 10
  }];

  @Output()
  public onDelete: EventEmitter<string> = new EventEmitter();

  onDeleteCharacter(id?: string): void {
    if(!id ) return;

    this.onDelete.emit(id);

  }
}
