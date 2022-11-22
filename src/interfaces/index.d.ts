export interface ILocal {
  id: number
  nome: string
}

export interface ISetor {
  id: number
  nome: string
  email: string
  ramal: string
  local: ILocal
}
