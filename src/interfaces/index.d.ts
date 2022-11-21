export interface ILocal {
  id: number
  nome: string
  setores: ISetor[]
}

export interface ISetor {
  id: number
  nome: string
  email: string
  ramal: string
  local: ILocal
}
