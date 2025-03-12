import { Component, HostListener } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  imports: [RouterModule, CommonModule],
})
export class NavbarComponent {
  isDropdownOpen = false;
  isScrolled = false; // Nova variável para monitorar o estado de scroll

  // Detecta o evento de scroll
  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    // Se o scroll for maior que 50px, define o estado de rolagem
    this.isScrolled = window.scrollY > 50;
  }

  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  logout() {
    console.log('Usuário deslogado');
  }
}
  