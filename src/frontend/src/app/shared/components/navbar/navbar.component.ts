import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';  // Já está correto
import { CommonModule } from '@angular/common'; // Adicione esta linha

@Component({
  selector: 'app-navbar',
  standalone: true,
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  imports: [RouterModule, CommonModule],  // Adicione CommonModule aqui
})
export class NavbarComponent {
  isDropdownOpen = false;

  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  logout() {
    console.log('Usuário deslogado');
  }
}
