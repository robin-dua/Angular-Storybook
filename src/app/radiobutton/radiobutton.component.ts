import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-radiobutton',
  templateUrl: './radiobutton.component.html',
  styleUrl: './radiobutton.component.css'
})
export class RadiobuttonComponent {
  @Input() label: string = 'radioButton';
  @Input() showError: boolean = false;
  @Input() errorMessage: string = 'radioButton'
}
