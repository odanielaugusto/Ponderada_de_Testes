import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-input',
  imports: [CommonModule],
  templateUrl: './input.component.html',
  styleUrl: './input.component.scss'
})
export class InputComponent {
  @Input() label!: string;
  @Input() placeHolder: string = "";
  @Input() type: string = "text";
  @Input() width!: string;
  @Input() height!: string;
}
