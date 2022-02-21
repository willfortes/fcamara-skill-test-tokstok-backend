import { IProviderCreate, IProviderResponse, IProviderUpdate } from 'App/Interfaces/Provider'
import ProviderRepository from 'App/Repositories/Provider'

export default class ProviderService {
  private providerRepository

  constructor() {
    this.providerRepository = new ProviderRepository()
  }

  public async getProvider(id): Promise<IProviderResponse> {
    try {
      return this.providerRepository.getProvider(id)
    } catch (error) {
      console.error(error)
      throw new Error(error)
    }
  }

  public async getAllProviders(): Promise<IProviderResponse[]> {
    try {
      return this.providerRepository.getAllProviders()
    } catch (error) {
      console.error(error)
      throw new Error(error)
    }
  }

  public async createProvider(data: IProviderCreate): Promise<IProviderResponse> {
    try {
      return this.providerRepository.createProvider(data)
    } catch (error) {
      console.error(error)
      throw new Error(error)
    }
  }

  public async updateProvider(data: IProviderUpdate): Promise<IProviderResponse> {
    try {
      return this.providerRepository.updateProvider(data)
    } catch (error) {
      console.error(error)
      throw new Error(error)
    }
  }

  public async deleteProvider(id) {
    try {
      return this.providerRepository.deleteProvider(id)
    } catch (error) {
      console.error(error)
      throw new Error(error)
    }
  }
}
