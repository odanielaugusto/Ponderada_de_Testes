import { Component, Input, Output, EventEmitter, HostListener, OnInit, OnChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-filter',
    standalone: true,
    imports: [CommonModule, FormsModule],
    templateUrl: './filter.component.html', // Corrigido de 'template' para 'templateUrl'
    styles: []
})
export class FilterComponent implements OnInit, OnChanges {
    @Input() placeholder: string = 'Selecione uma Unidade';
    @Input() options: string[] = [];
    @Input() selectedOption: string = '';
    @Output() optionSelected = new EventEmitter<string>();

    isOpen: boolean = false;
    searchText: string = '';
    filteredOptions: string[] = [];

    ngOnInit(): void {
        this.filteredOptions = [...this.options];
    }

    ngOnChanges(): void {
        this.filteredOptions = [...this.options];
    }

    toggleDropdown(): void {
        this.isOpen = !this.isOpen;

        if (this.isOpen) {
            this.searchText = '';
            this.filteredOptions = [...this.options];
        }
    }

    filterOptions(): void {
        if (!this.searchText.trim()) {
            this.filteredOptions = [...this.options];
            return;
        }

        const search = this.searchText.toLowerCase().trim();
        this.filteredOptions = this.options.filter(option =>
            option.toLowerCase().includes(search)
        );
    }

    selectOption(option: string): void {
        this.selectedOption = option;
        this.optionSelected.emit(option);
        this.isOpen = false;
    }

    // Fecha o dropdown se o usuário clicar fora dele
    @HostListener('document:click', ['$event'])
    onDocumentClick(event: MouseEvent): void {
        const element = event.target as HTMLElement;
        if (!element.closest('app-filter')) {
            this.isOpen = false;
        }
    }
}