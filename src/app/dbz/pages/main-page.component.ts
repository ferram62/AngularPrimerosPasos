import { Component } from '@angular/core';
import { DbzService } from '../services/dbz.service.js';
import { CharacterInterfaceTs } from '../interfaces/character.interface.ts.js';

// import { CharacterInterfaceTs } from '../interfaces/character.interface.ts';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html'
})

export class MainPageComponent {
  constructor(private dbzService: DbzService) {

  }

  get characters(): CharacterInterfaceTs[] {
    return [...this.dbzService.characters];
  }

  onDeleteCharacter(id: string): void {
    this.dbzService.DeleteCharacterById(id);
  }

  onNewCharacter(character: CharacterInterfaceTs):void {
    this.dbzService.addCharacter(character);
  }
}
