import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: false,
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})
export class ButtonComponent {
  @Input() text!: string;
  @Input() py: string = "0";
  @Input() px: string = "0";
  @Input() width: string = "100%";
  @Input() height: string = "100%";
}
