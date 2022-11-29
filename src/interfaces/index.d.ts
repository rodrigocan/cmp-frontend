export interface ILocal {
  id: number
  nome: string
  setores: ISetor[]
  endereco: string
  numero: string
  cep: string
  cidade: string
  estado: string
  telefone: string
  email: string
}

export interface ISetor {
  id: number
  nome: string
  email: string
  ramal: string
  local: ILocal
}

export interface IChamado {
  id: number
  local: ILocal
  setor: ISetor
  status: string
  resumo: string
  diagnostico?: string
  solucao?: string
  data_hora_solucao?: Date
  servico: string
  solicitante: string
  telefone_solicitante: string
  email_solicitante: string
  responsavel: string
}
