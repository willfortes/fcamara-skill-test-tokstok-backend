import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import UserService from 'App/Services/User'

export default class UsersController {
  private userService

  constructor() {
    this.userService = new UserService()
  }

  public async store({ request, response }: HttpContextContract) {
    try {
      const data = request.only(['email', 'password'])

      const createUser = await this.userService.createUser(data)

      return response.send(createUser)
    } catch (error) {
      console.log(error)
      return response.status(500).send(error)
    }
  }

  public async auth({ auth, request, response }: HttpContextContract) {
    try {
      const login = request.only(['email', 'password'])

      const authUser = await this.userService.auth(login, auth)

      return response.send(authUser)
    } catch (error) {
      console.log(error)
      return response.status(500).send(error)
    }
  }

  public async logout({ auth, response }: HttpContextContract) {
    try {
      const logout = await this.userService.logout(auth)
      return response.send(logout)
    } catch (error) {
      console.log(error)
      return response.status(500).send(error)
    }
  }
}
