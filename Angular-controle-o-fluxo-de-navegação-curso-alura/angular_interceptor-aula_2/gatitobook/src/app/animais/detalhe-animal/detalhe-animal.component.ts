import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Animal } from '../animais';
import { AnimaisService } from '../animais.service';
import { ActivatedRoute, Router } from '@angular/router';
// import { error } from 'console';

@Component({
  selector: 'app-detalhe-animal',
  templateUrl: './detalhe-animal.component.html',
  styleUrls: ['./detalhe-animal.component.css']
})
export class DetalheAnimalComponent implements OnInit {

  animalId!: number;
  animal$!: Observable<Animal>;

  constructor(
    private animaisService:AnimaisService, 
    private activatedRoute:ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.animalId =  this.activatedRoute.snapshot.params.animalId; 
    //param.>> animaisId << tem que estar exatamente igual ao nome criado da variável em animais-routing.module
    this.animal$ = this.animaisService.buscaPorID(this.animalId);
  }

  curtir() {
    this.animaisService.curtir(this.animalId).subscribe((curtida) => {
      if(curtida){
        this.animal$ = this.animaisService.buscaPorID(this.animalId);
      }
    });
  }

  excluir() {
      this.animaisService.excluiAnimal(this.animalId).subscribe(() => {
        this.router.navigate(['/animais/'])
      }, (error) => console.log(error)
   );
  }



}
