import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './pages/home/home/home.component';

@Component({
  selector: 'app-root',
  standalone: true, 
  imports: [RouterOutlet, CommonModule, HomeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  unidades: string[] = ['ETEC Teste 1', 'ETEC Teste 2', 'ETEC Teste 3', 'ETEC Teste 4', 'ETEC Teste 5'];
  unidadeSelecionada: string = '';

  onUnidadeSelected(unidade: string): void {
    this.unidadeSelecionada = unidade;
  }
}