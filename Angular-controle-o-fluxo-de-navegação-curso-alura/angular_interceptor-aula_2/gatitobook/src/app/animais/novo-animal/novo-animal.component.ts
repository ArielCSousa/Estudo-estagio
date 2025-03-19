import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AnimaisService } from '../animais.service';
import { Router } from '@angular/router';
import { finalize } from 'rxjs/operators';
import { HttpEvent, HttpEventType } from '@angular/common/http';
// import { error } from 'console';

@Component({
  selector: 'app-novo-animal',
  templateUrl: './novo-animal.component.html',
  styleUrls: ['./novo-animal.component.css']
})
export class NovoAnimalComponent implements OnInit {
  formularioAnimal!: FormGroup;
  file!:File;
  preview!: string;
  percentualConcluido = 0; //vai representar o percentual de carregamento da foto

  // injetamos aqui os serviços que vamos precisar usar nos nossos componentes
  constructor(
    private animaisService: AnimaisService,
    private formbuilder: FormBuilder,
    private router: Router
  ) { }

  // aqui montamos nosso formulário de novo animal com formbuilder
  ngOnInit(): void {
    this.formularioAnimal = this.formbuilder.group({
      file: ['', Validators.required],
      description: ['', Validators.maxLength(300)],
      allowComments: [true],
    });
  }

  upload() {
    const allowComments = 
      this.formularioAnimal.get('allowComments')?.value ?? false;
    const description = this.formularioAnimal.get('description')?.value ?? '';

    this.animaisService.uptload(description, allowComments, this.file)
    .pipe(
      finalize(()=>this.router.navigate(['animais']))
    ).subscribe((event:HttpEvent<any>)=> {
        if(event.type == HttpEventType.UploadProgress){
          const total = event.total ?? 1;
          this.percentualConcluido = Math.round(100*(event.loaded / total))
        }
      }, (error) => console.log(error)
    );
  }

// subir e fazer o preview da foto
  gravaArquivo(arquivo: any): void{
    const [file] = arquivo?.files; 
    this.file = file;
    const reader = new FileReader();
    reader.onload = (event:any)=>(this.preview = event.target.result);
    reader.readAsDataURL(file);
  }

}
