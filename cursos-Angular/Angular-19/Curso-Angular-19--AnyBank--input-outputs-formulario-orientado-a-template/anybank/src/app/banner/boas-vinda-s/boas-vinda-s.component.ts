import { Component } from '@angular/core';
import { DatePipe, TitleCasePipe } from '@angular/common';

@Component({
  selector: 'app-boas-vinda-s',
  standalone: true,
  imports: [DatePipe, TitleCasePipe],
  templateUrl: './boas-vinda-s.component.html',
  styleUrl: './boas-vinda-s.component.css',
})
export class BoasVindaSComponent {
  dataAtual = new Date();
}
