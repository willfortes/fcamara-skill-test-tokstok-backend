interface IProviderCreate {
  name: string
  corporate_name: string
  cnpj: string
  segment: string
  address: string
  telephone: string
  email: string
}

interface IProviderUpdate {
  id: number
  name: string
  corporate_name: string
  cnpj: string
  segment: string
  address: string
  telephone: string
  email: string
}

interface IProviderResponse {
  id: number
  name: string
  corporate_name: string
  cnpj: string
  segment: string
  address: string
  telephone: string
  email: string
}

export { IProviderCreate, IProviderUpdate, IProviderResponse }
