import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs/internal/observable/throwError';
import { Router } from '@angular/router';
import { MensagemService } from '../services/mensagem.service';

@Injectable()
export class ErrorsInterceptor implements HttpInterceptor {
  constructor(
    private router: Router,
    private mensagemService: MensagemService
  ) {}

  intercept(
    request: HttpRequest<HttpErrorResponse>,
    next: HttpHandler
  ): Observable<HttpEvent<HttpErrorResponse>> {
    return next.handle(request).pipe(
      catchError((error: HttpErrorResponse) => {
        let errorMessage = 'Ocorreu um erro desconhecido';

        if (error.error instanceof ErrorEvent) {
          errorMessage = `Erro do cliente: ${error.error.message}`;
        } else if (error.status === 404) {
          errorMessage = 'Recurso não encontrado';
        } else if (error.status === 500) {
          errorMessage = 'Erro interno do servidor';
        } else if (error.status === 401) {
          errorMessage = 'Você não tem autorização para acessar esse recurso';
          //redirecionando para pagina de erro com ROUTER
          // this.router.navigate(['/src/app/home']);
          //no caso desse projeto a pagina de perfil ainda não existe, mas seria uma boa forma de redirecionar o usuário caso ele tentasse acessar ela
        }

        // console.error(error);
        // console.error(errorMessage);

        this.mensagemService.openSnackBar(errorMessage);

        return throwError(() => new Error('Ops, ocorreu um erro!'));
      })
    );
  }
}
