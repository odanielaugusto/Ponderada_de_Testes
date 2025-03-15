import { Component, Input } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // Import FormsModule
import { FilterComponent } from '../../../shared/components/filter/filter.component';
import { ProfileCard } from '../../../shared/components/profile_card/profile-card.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterOutlet, CommonModule, FormsModule, FilterComponent, ProfileCard], // Add FormsModule to imports
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  @Input() title: string = 'Gallaudet';

  //propriedades do filtro
  unidades: string[] = ['ETEC Teste 1', 'ETEC Teste 2', 'ETEC Teste 3', 'ETEC Teste 4', 'ETEC Teste 5'];
  unidadeSelecionada: string = '';

  onUnidadeSelected(unidade: string): void {
    this.unidadeSelecionada = unidade;
    console.log('Unidade selecionada:', unidade);
  }

  searchText: string = '';

  profiles = [
    {
      photo: 'https://randomuser.me/api/portraits/men/1.jpg',
      name: 'Nome do Aluno 1',
      deficiency: 'Deficiência 1',
      profission: 'Profissão 1',
      unit: 'Unidade 1',
      assistive_technology: 'Tecnologia Assistiva 1',
      registration: 'Matrícula 1',
      course: 'Curso 1'
    },
    {
      photo: 'https://randomuser.me/api/portraits/men/2.jpg',
      name: 'Nome do Aluno 2',
      deficiency: 'Deficiência 2',
      profission: 'Profissão 2',
      unit: 'Unidade 2',
      assistive_technology: 'Tecnologia Assistiva 2',
      registration: 'Matrícula 2',
      course: 'Curso 2'
    },
  ];

  get filteredProfiles() {
    return this.profiles.filter(profile => profile.name.toLowerCase().includes(this.searchText.toLowerCase()));
  }
}