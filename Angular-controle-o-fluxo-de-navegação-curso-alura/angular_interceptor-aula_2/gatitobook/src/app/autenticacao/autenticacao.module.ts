import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AutenticacaoInterceptor } from './autenticacao.interceptor';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    {
      provide:HTTP_INTERCEPTORS,
      useClass: AutenticacaoInterceptor,
      multi: true, //por padrão o angular entende que vc só tem uma classe de interceptor, se não declarar como multi = true p Angular não entende que terá multiplos interceptors
    },
  ],
})
export class AutenticacaoModule { }
