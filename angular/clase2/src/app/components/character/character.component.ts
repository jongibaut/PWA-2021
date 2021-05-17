import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CharacterService } from './../characters/character.service';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css']
})
export class CharacterComponent implements OnInit {
  personaje: any = {};
  constructor(private activatedRoute: ActivatedRoute, private service: CharacterService) { }

  async ngOnInit() {
    const params = this.activatedRoute.snapshot.params.id;
    console.log(params);
    const characters: any = await this.service.getSingle(params);
    console.log(characters);
    this.personaje = characters;
  }

}
