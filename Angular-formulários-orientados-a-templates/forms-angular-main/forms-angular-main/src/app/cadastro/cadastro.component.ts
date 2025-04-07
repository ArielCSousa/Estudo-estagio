import { Router } from "@angular/router";
import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { ConsultaCepService } from "../service/consulta-cep.service";

@Component({
  selector: "app-cadastro",
  templateUrl: "./cadastro.component.html",
  styleUrls: ["./cadastro.component.css"],
})
export class CadastroComponent implements OnInit {
  constructor(
    private router: Router,
    private consultacepService: ConsultaCepService
  ) {}

  ngOnInit(): void {}

  consultaCEP(ev: any) {
    // ev de EVENTO
    const cep = ev.target.value;
    return this.consultacepService
      .getConsultaCep(cep)
      .subscribe((resultado) => console.log(resultado));
  }

  cadastrar(form: NgForm) {
    if (form.valid) {
      this.router.navigate(["./sucesso"]);
    } else {
      alert("Formulário inválidos!");
    }

    console.log(form.controls);
  }
}
