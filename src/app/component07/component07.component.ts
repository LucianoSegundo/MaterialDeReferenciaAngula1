import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-component07',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './component07.component.html',
  styleUrl: './component07.component.css'
})
export class Component07Component {
     cor:boolean = false;
     list:string [] = [
      'aprovado','aprovado','aprovado'
      ,'aprovado','reprovado','aprovado',
      'reprovado','aprovado','reprovado'
      ,'aprovado','aprovado'
      ,'aprovado','reprovado','aprovado',
      'reprovado','aprovado','reprovado'
      ,'reprovado','reprovado','reprovado'
      ,'reprovado','reprovado','reprovado'
      ,'reprovado','reprovado','reprovado'
     ]
}
