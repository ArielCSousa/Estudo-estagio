import { Component, input } from '@angular/core';
import { BoasVindaSComponent } from './boas-vinda-s/boas-vinda-s.component';
import { ContaComponent } from './conta/conta.component';

@Component({
  selector: 'app-banner',
  standalone: true,
  imports: [BoasVindaSComponent, ContaComponent],
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.css',
})
export class BannerComponent {
  saldo = input.required<number>();
}
