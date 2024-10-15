import { Injectable } from '@angular/core';

// npm i --save-dev @types/uuid
import {v4 as uuid } from 'uuid';

import { CharacterInterfaceTs } from '../interfaces/character.interface.ts';

console.log(uuid());

@Injectable({
  providedIn: 'root'
})

export class DbzService {
  constructor() { }

  public characters: CharacterInterfaceTs[] = [
    {
      id: uuid(),
      name: 'Krill',
      power: 1000
    },
    {
      id: uuid(),
      name: 'Goku',
      power: 9500
    },
    {
      id: uuid(),
      name: 'Vegeta',
      power: 7500
    },
  ];

  addCharacter(character: CharacterInterfaceTs): void {

    const newCharacter: CharacterInterfaceTs = {...character,id: uuid()};

    this.characters.push(newCharacter);
  }

  // onDeleteCharacter(index: number):void {
  //   this.characters.splice(index,1);
  // }
  DeleteCharacterById(id: string):void {
    this.characters = this.characters.filter(character => character.id !== id);
  }

}
