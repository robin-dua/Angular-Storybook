import { CommonModule } from '@angular/common';
import { Component, Input, input } from '@angular/core';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  // standalone: true,
  // imports: [CommonModule],
  styleUrl: './card.component.css'
})
export class CardComponent {
@Input() title!: string;
@Input() imgUrl!: string;
@Input() content!: string;
@Input() publishedDate!: Date;
@Input() action!: string;
}
