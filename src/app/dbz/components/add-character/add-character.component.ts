import { Component, EventEmitter, Output } from '@angular/core';
import { CharacterInterfaceTs } from '../../interfaces/character.interface.ts';

@Component({
  selector: 'app-dbz-add-character',
  templateUrl: './add-character.component.html',
  styleUrl: './add-character.component.css'
})
export class AddCharacterComponent {

  @Output()
  public onNewCharacter: EventEmitter<CharacterInterfaceTs> = new EventEmitter();


  public character: CharacterInterfaceTs = {
    name: '',
    power: 0
  }

  emitCharacter(): void {
    // debugger;


    if (this.character.name.length === 0 ) return;

    this.onNewCharacter.emit(this.character);

    // this.character.name = '';
    // this.character.power = 0;
    this.character = {name: '', power: 0};
  }
}
