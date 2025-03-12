import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FilterComponent } from './shared/components/filter/filter.component';

@Component({
  selector: 'app-root',
  standalone: true, // Adicionado standalone: true
  imports: [RouterOutlet, FilterComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'gallaudet';

  unidades: string[] = ['ETEC Teste 1', 'ETEC Teste 2', 'ETEC Teste 3', 'ETEC Teste 4', 'ETEC Teste 5'];
  unidadeSelecionada: string = '';

  onUnidadeSelected(unidade: string): void {
    this.unidadeSelecionada = unidade;
    console.log('Unidade selecionada:', unidade);
  }
}