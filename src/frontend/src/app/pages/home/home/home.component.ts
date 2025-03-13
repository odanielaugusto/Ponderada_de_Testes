import { Component, Input } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FilterComponent } from '../../../shared/components/filter/filter.component';
import { ProfileCard } from '../../../shared/components/profile_card/profile-card.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterOutlet, CommonModule, FilterComponent, ProfileCard],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  //propriedades do filtro
  unidades: string[] = ['ETEC Teste 1', 'ETEC Teste 2', 'ETEC Teste 3', 'ETEC Teste 4', 'ETEC Teste 5'];
  unidadeSelecionada: string = '';

  onUnidadeSelected(unidade: string): void {
    this.unidadeSelecionada = unidade;
    console.log('Unidade selecionada:', unidade);
  }

    //propriedades do card
    @Input() foto: string = '';
    @Input() nome: string = '';
    @Input() deficiencia: string = '';
    @Input() profissao: string = '';
    @Input() unidadeNome: string = '';
    @Input() tecnologiaAssistiva: string = '';
    @Input() matricula: string = '';
    @Input() curso: string = ''
}
