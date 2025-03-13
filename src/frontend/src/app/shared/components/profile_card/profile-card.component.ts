import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-profile-card',
    imports: [],
    templateUrl: './profile-card.component.html',
    styleUrl: './profile-card.component.scss'
})
export class ProfileCard {

    //propriedades do globais
    @Input() name: string = ''; 
    @Input() photo: string = '';

    //propriedades do aluno
    @Input() deficiency: string = '';
    @Input() assistive_technology: string = '';
    @Input() registration: string = '';
    @Input() course: string = '';

    //propriedade do profissional
    @Input() profission: string = '';

    //propriedade do gerente de unidade
    @Input() unit: string = '';
}
