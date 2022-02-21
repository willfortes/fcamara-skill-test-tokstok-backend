import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import ProviderService from 'App/Services/Provider'

export default class ProvidersController {
  private providerService

  constructor() {
    this.providerService = new ProviderService()
  }

  public async index({ response }: HttpContextContract) {
    try {
      const providers = await this.providerService.getAllProviders()

      return response.send(providers)
    } catch (error) {
      console.log(error)
      return response.status(500).send(error)
    }
  }

  public async store({ request, response }: HttpContextContract) {
    try {
      const provider = request.only([
        'name',
        'corporate_name',
        'cnpj',
        'segment',
        'address',
        'telephone',
        'email',
      ])

      const createProvider = await this.providerService.createProvider(provider)

      return response.send(createProvider)
    } catch (error) {
      console.log(error)
      return response.status(500).send(error)
    }
  }

  public async show({ params, response }: HttpContextContract) {
    try {
      const getProvider = await this.providerService.getProvider(params.id)

      return response.send(getProvider)
    } catch (error) {
      console.log(error)
      return response.status(500).send(error)
    }
  }

  public async update({ request, response }: HttpContextContract) {
    try {
      const provider = request.only([
        'id',
        'name',
        'corporate_name',
        'cnpj',
        'segment',
        'address',
        'telephone',
        'email',
      ])

      const updateProvider = await this.providerService.updateProvider(provider)

      return response.send(updateProvider)
    } catch (error) {
      console.log(error)
      return response.status(500).send(error)
    }
  }

  public async destroy({ params, response }: HttpContextContract) {
    try {
      const deleteProvider = await this.providerService.deleteProvider(params.id)

      return response.send(deleteProvider)
    } catch (error) {
      console.log(error)
      return response.status(500).send(error)
    }
  }
}
