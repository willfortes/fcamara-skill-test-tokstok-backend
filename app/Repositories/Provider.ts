import { IProviderCreate, IProviderResponse, IProviderUpdate } from 'App/Interfaces/Provider'
import Provider from 'App/Models/Provider'

export default class ProviderRepository {
  public async getProvider(id): Promise<IProviderResponse> {
    const provider = await Provider.findOrFail(id)
    return provider
  }

  public async getAllProviders(): Promise<IProviderResponse[]> {
    return Provider.all()
  }

  public async createProvider(data: IProviderCreate): Promise<IProviderResponse> {
    return Provider.create(data)
  }

  public async updateProvider(data: IProviderUpdate): Promise<IProviderResponse> {
    const provider = await Provider.findOrFail(data.id)
    provider.merge(data)
    await provider.save()
    return provider
  }

  public async deleteProvider(id) {
    const provider = await Provider.findOrFail(id)
    provider.delete()
    return provider
  }
}
