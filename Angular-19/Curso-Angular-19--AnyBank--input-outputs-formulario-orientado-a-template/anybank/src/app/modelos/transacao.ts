export class Transacao {
  constructor(
    public readonly tipo: TipoTransacao,
    public readonly valor: number
  ) {}
}

export enum TipoTransacao {
  DEPOSITO = 'Depósito',
  SAQUE = 'Saque',
  TRANSFERENCIA = 'Transferência',
}

export enum Status {
  PENDENTE,
  APROVADO,
  REJEITADO,
}
