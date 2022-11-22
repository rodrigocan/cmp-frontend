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
