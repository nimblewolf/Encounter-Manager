import { Component, OnInit } from '@angular/core';
import { Encounter } from '../../shared/models/encounter-manager-interface';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-encounter',
  templateUrl: './encounter.component.html',
  styleUrls: ['./encounter.component.scss']
})
export class EncounterComponent implements OnInit {
    constructor(private fb: FormBuilder) {

    }
    encounter: Encounter = {
        encounterName: 'Encounter Name 1',
        entities: [{
        name: 'Test mob',
        armorClass: 15,
        initiativeScore: 12,
        currentHitPoints: 10,
        totalHitPoints: 10
        },{
        name: 'Test mob 2',
        armorClass: 15,
        initiativeScore: 9,
        currentHitPoints: 10,
        totalHitPoints: 10
        },{
        name: 'Test mob 3',
        armorClass: 15,
        initiativeScore: 17,
        currentHitPoints: 10,
        totalHitPoints: 10
        }]
    }

    formGroup: any;

    get encounterFormArray() {
        return this.formGroup.controls['encounterFormArray'] as FormArray<FormGroup<{
            name: FormControl<string | null>;
            armorClass: FormControl<number| null>;
            initiativeScore: FormControl<number | null>;
            currentHitPoints: FormControl<number | null>;
            totalHitPoints: FormControl<number | null>;
        }>>;
    }
    
    ngOnInit(): void {
        this.setupForms();
    }

    setupForms() {
        const formgroups = this.encounter.entities.map(entity => {
            return this.fb.group({
                name: new FormControl(entity.name, []),
                armorClass: new FormControl(entity.armorClass, []),
                initiativeScore: new FormControl(entity.initiativeScore, []),
                currentHitPoints: new FormControl<number| null>(entity.currentHitPoints, []),
                totalHitPoints: new FormControl(entity.totalHitPoints, []),
            })
        })
        const formArray = this.fb.array(formgroups);
        this.formGroup = this.fb.group({
            encounterFormArray: formArray
        }) as FormGroup;
    }

    addForm() {
        const newForm = this.fb.group({
            name: new FormControl<string|null>(null, []),
            armorClass: new FormControl<number| null>(null, []),
            initiativeScore: new FormControl<number| null>(null, []),
            currentHitPoints: new FormControl<number| null>(null, []),
            totalHitPoints: new FormControl<number| null>(null, []),
        })
        this.encounterFormArray.push(newForm);
    }

    deleteForm(index: number) {
        this.encounterFormArray.removeAt(index)
    }

    /**
     * Sort encounter by initiative scores in ascending order
     */
    sortEncounter() {
        this.encounterFormArray.controls.sort((entity1, entity2) => {
            if((entity1.controls.initiativeScore.value || 0) > (entity2.controls.initiativeScore.value || 0)) {
                return -1;
            }

            if((entity1.controls.initiativeScore.value || 0) < (entity2.controls.initiativeScore.value || 0)) {
                return 1;
            }

            return 0;
        });
    }
}
