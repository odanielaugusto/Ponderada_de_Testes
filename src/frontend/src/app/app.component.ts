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

  unidades: string[] = ['Centro de Excelência', 'Hospital da Luz', 'Hospital Santa Luzia', 'UPA Norte', 'UPA Sul'];
  unidadeSelecionada: string = '';

  onUnidadeSelected(unidade: string): void {
    this.unidadeSelecionada = unidade;
    console.log('Unidade selecionada:', unidade);
  }
}