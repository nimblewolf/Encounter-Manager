import { Component } from '@angular/core';
import { Encounter } from '../../shared/models/encounter-manager-interface';

@Component({
  selector: 'app-encounter',
  templateUrl: './encounter.component.html',
  styleUrls: ['./encounter.component.scss']
})
export class EncounterComponent {
    encounter: Encounter = {
        encounterName: 'Encounter Name 1',
        entities: [{
        name: 'Test mob',
        armorClass: 15,
        initiativeScore: 12
        },{
        name: 'Test mob 2',
        armorClass: 15,
        initiativeScore: 12
        },{
        name: 'Test mob 3',
        armorClass: 15,
        initiativeScore: 12
        }]
    }
}
