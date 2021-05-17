import { Component, OnInit } from '@angular/core';
import { CharacterService } from './character.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {
  personajes: Array<any> = [];
  constructor(private service: CharacterService) { }

  async ngOnInit() {
    const characters: any = await this.service.getAll();
    console.log(characters);
    this.personajes = characters.results;
  }

}
